import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { verifyPin } from '../../../services/auth/thunks';
import { PinInput } from "../../../common";
import { RootState } from "../../../services/store";

import '../index.css'

/**
 * Verify Pin component runs when user is already logged in
 * only accepts numbers
 * @returns 
 */

const VerifyPin: FC = () => {

    /**
     * Component scope variables
     * Verify the pin
     */
    const dispatch = useDispatch();

     /**
     * Get Auth info from the store
     */
    const { loading, error } = useSelector((state: RootState) => state.auth);
    const [pin, setPin] = useState('');

    /**
     * Set the pin only if 4 numbers are entered
     * @param val 
     */
    const pinChange = (val: string) => {
        if (val.length >= 4) {
            setPin(val)
        }
    }

    /**
     * Verify pin by clicking on submit button
     * dispatch calls the Api to check
     */
    const verifyPinFn = () => {
        dispatch(verifyPin(pin));
    }

    return (
        <>
            <div className='flex h-screen justify-center items-center'>
                <div className='items-center mob-login-container'>
                    <div>Verify Pin</div>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    <PinInput width="50px" height="50px"
                        isVerify={true}
                        inputChange={(e: string) => pinChange(e)}
                        submitVerify={verifyPinFn}
                    />
                </div>
            </div>
        </>
    )
}

export { VerifyPin }