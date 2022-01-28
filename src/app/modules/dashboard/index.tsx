import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "./components/Loader";
import CardUI from "./components/CardUI";
import { fetchUserData } from "../../services/user/thunks";


import './index.css'

/**
 * Dashboard component holds the user info and card
 * Prev / Next icon to move around different cards
 * @returns 
 */
const Dashboard: FC = () => {

    /**
     * Component scope variables
     */
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state: any) => state.user);
    useEffect(() => {
        dispatch(fetchUserData(null));
    });

    /**
     * loader to show after successful of verified the Pin
     */
    if (loading) {
        return <Loader />
    }

    return <div className="m-5">
        {error && <div>{error}</div>}
        <div className="profile-card">
            <div><span>Name:</span><span>{user?.firstName} {user?.lastName}</span></div>
            <div><span>Address:</span>

                <div><span>Line 1:</span><span>{user?.address.line1}</span></div>
                <div><span>Line 2:</span><span>{user?.address.line2}</span></div>
                <div><span>City:</span><span>{user?.address.city}</span></div>
                <div><span>State:</span><span>{user?.address.state}</span></div>
                <div><span>Country:</span><span>{user?.address.country}</span></div>
            </div>
        </div>
        <div className="profile-card  shadow-2xl mt-5">
            <CardUI />
        </div>
    </div>
}

export default Dashboard