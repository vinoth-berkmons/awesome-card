import Card from "./Card";

export class CardEdge {
    cursor: string = "";
    node: Card = new Card();
}

export class CardPageInfo {
    hasNextPage: boolean = false;
}

export default class CardConnection {
    edges: CardEdge[] = [];
    pageInfo: CardPageInfo = new CardPageInfo();
}