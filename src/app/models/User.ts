import Card from "./Card";
import CardConnection from "./CardConnection";
import UserAddress from "./UserAddress";

export default class User {
    id: string = "";
    firstName: string = "";
    lastName: string = "";
    address: UserAddress = new UserAddress();
    card: Card = new Card();
    cards: CardConnection = new CardConnection();
}

export interface UserState {
    user: User | null
    loading: boolean
    error: string | null
}