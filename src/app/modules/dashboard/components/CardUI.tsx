import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../../../common";
import { } from "../../../services/cards/actions";
import { CardState } from "../../../services/cards/slice";
import { fetchCardsData, updateCursor } from "../../../services/cards/thunks";


/**
 * Card button Data
 * Card Button to view the details
 */
const buttonData = {
    name: 'Details',
    type: 'button'
}


/**
 * CardUI holds the brief of the card which shown on the dashboard page
 * Next / Prev Icon is placed to see different cards
 * Each card has details button to see the details of the card
 * @returns 
 */
const CardUI: FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    /**
     * Scope of the card state
     */
    const cardsState: CardState = useSelector((state: any) => state.cards);
    const { cursor, cards, loading, error } = cardsState;

    useEffect(() => {
        dispatch(fetchCardsData(null));
    });


    /**
     * moveToPrevious is a Pre Icon which will get the previous card
     */
    const moveToPrevious = () => {
        dispatch(updateCursor(cursor - 1));
    }

    /**
     * moveToNext is a Next Icon which will get the Next card
     */
    const moveToNext = () => {
        dispatch(updateCursor(cursor + 1));
    }


    const currentCard = cards?.edges.map(edge => edge.node) || [];
    const hasNextCard = cards?.pageInfo.hasNextPage;
    const card = currentCard[0];
    const hasPreviousCard = cursor > 0;

    /**
     * Details button on the card will call navigateToDetailsPage method redirect to next page
     */
    const navigateToDetailsPage = () => {
        history.push(`/details?id=${card.id}`);
    }
    
    return <div className="flex flex-col justify-center pt-5 pb-5">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <div className="flex justify-between">
            <button disabled={!hasPreviousCard} onClick={moveToPrevious} className="text-3xl font-medium mr-5" >&lt;</button>
            {card && <div className="flex flex-col items-center">
                <h4 className=" font-medium mb-3">{card.title}</h4>
                <p>
                    {card.description.slice(0, 50)}
                </p>
                <Button disable={false} width="150px" height="auto" style={{ marginTop: "20px" }} formValue={buttonData} clickEvent={navigateToDetailsPage} />
            </div>}
            <button disabled={!hasNextCard} onClick={moveToNext}
                className="text-3xl  font-medium ml-5">&gt;</button>
        </div>

    </div>
}

export default React.memo(CardUI);