import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendOTP, setPin, verifyOTP } from '../../services/auth/thunks';
import { MobileInput } from './components';
import { OtpInput } from './components/otpInput/OtpInput';
import { PinInputs } from './components/pinInput/PinInput';
import { SHOW_OTP_INPUT, SHOW_PIN_INPUT, SHOW_MOBILE_INPUT } from '../../services/auth/constants';

import './index.css'

/**
 * Auth page holds Verify Mobile number / Otp / Set Pin / Verify Pin
 * Each page will be shown depends on the state
 * 
 * @returns 
 */
const AuthPage: FC<any> = () => {

    const dispatch = useDispatch();

    /**
     * Get Auth info from the store
     */
    const { loading, error, stage } = useSelector((state: any) => state.auth);

    /**
     * After by clicking submit button of mobile number, this method will be called to dispatch
     * API will be called and get the response from the store
     * mobileNumberSubmitted returns the otp token and will be stored in local storage
     * @param mobileNumber 
     */
    const mobileNumberSubmitted = (m: string) => {
        dispatch(sendOTP(m));
    };

    /**
      * After by clicking submit button of otp, this method will be called to dispatch
      * API will be called and get the response from the store
      * otpSubmitted returns the pin token and will be stored in local storage and otp token will be deleted from the local storage
      * @param mobileNumber 
      */
    const otpSubmitted = (otp: string) => {
        dispatch(verifyOTP(otp));
    };

    /**
     * After by clicking submit button of PIN this method will be called to dispatch
     * API will be called and get the response from the store
     * pinSubmitted returns the auth token and will be stored in local storage and pin token will be deleted from the local storage
     * @param mobileNumber 
     */
    const pinSubmitted = (pin: string) => {
        dispatch(setPin(pin))
    }

    /**
     * Show the components based on the conditions
     */
    const showMobileInput = stage === SHOW_MOBILE_INPUT;
    const showOtpInput = stage === SHOW_OTP_INPUT;
    const showPinInput = stage === SHOW_PIN_INPUT;

    return (
        <>
            <div className='flex h-screen justify-center items-center'>
                <div className='items-center mob-login-container w-2/5'>
                    {loading && <div>Loading...</div>}
                    {error && <div className='mb-4 text-orange-700'>{error}</div>}
                    {showMobileInput && <MobileInput loading={loading} sendUserOtp={mobileNumberSubmitted} />}
                    {showOtpInput && <OtpInput verifyOtp={otpSubmitted} />}
                    {showPinInput && <PinInputs setUserPin={pinSubmitted} />}
                </div>
            </div>
        </>
    )
}


export default AuthPage;

