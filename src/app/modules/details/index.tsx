import React, { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { CardState } from "../../services/cards/slice";
import { fetchCardData } from "../../services/cards/thunks";
import { setCard } from '../../services/cards/actions';

/**
 * To get the id from the url by useLocation
 * @returns 
 */
function useURLQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * Details component holds details of the card which comes from the dashboard
 * card Id is passed in the url
 * back to Dashboard
 * @returns 
 */
const Details: FC = () => {

    /**
     * Component scopes
     */
    let query = useURLQuery();
    const history = useHistory();
    const dispatch = useDispatch();
    const cardsState: CardState = useSelector((state: any) => state.cards);
    const { card, loading, error } = cardsState;

    /**
     * Get the id from the url
     */
    useEffect(() => {
        dispatch(fetchCardData(query.get("id") || ''));
    });

    /**
     * back to dashboard
     */
    const navigateToDashboard = () => {
        dispatch(setCard(null));
        history.push(`/dashboard`);
    }

    return <div>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {card && <div className="flex flex-col items-center" >
            <div className="flex items-center ml-5 mt-2 self-start">
                <button
                    className="text-3xl font-medium mr-12"
                    onClick={navigateToDashboard}>&lt;</button>
                <h1 className="font-medium mb-3 text-xl" >{card.title}</h1></div>
            <img src={card.imageUrl} alt={card.title} className="w-72 mt-5 mb-5" />
            <p className="mr-5 ml-5" >
                {card.description}
            </p>
        </div>}
    </div>
}




export default Details;