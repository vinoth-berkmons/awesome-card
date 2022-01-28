import { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { ALLOW_ONLY_NUMBERS, Button, TextBox } from '../../../../common';
import { ERROR_MESSAGE_OTP, ErrorStatus, MOBILE_NUMBER_SIX_DIGIT } from '../../../../common/constants/Constants';
import { InputValue } from '../../../../models/UI';


/**
 * Mobile number initial value
 */
const defaultMobValue: InputValue = {
    id: 'mob_1',
    name: 'mob',
    placeholder: 'mobile number',
    disable: true
}

/**
 * Otp initial value
 */
const defaultOtpValue: InputValue = {
    id: 'otp_1',
    name: 'otp',
    placeholder: 'OTP',
}

/**
 * Submit otp initial value
 */
const buttonData = {
    name: 'Submit',
    type: 'button'
}

/**
 * OtpInput components has  verified mobile number with disabled  and Otp to enter
 * Accepts the OPT
 * Otp input field validated for numbers
 * Resend OTP button enabled after 60 seconds
 * counter is enabled in this component
 * Call the API with OTP and token
 * @param verifyOtp
 * @returns 
 */
const OtpInput: FC<any> = ({ verifyOtp }) => {

    /**
     * OtpInput Scope variables
     */
    const { mobileNumber } = useSelector((state: any) => state.auth);
    const [otp, setOtp] = useState('')
    const firstRender = useRef(true);
    const [disable, setDisabled] = useState(true);
    const [error, setErrors] = useState<ErrorStatus>(null);


    // Timer Counter initialize
    const [counter, setCounter] = useState(59);

    /**
     * Will be triggered each seconds till 60 seconds
     */
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000) as any;
        return () => clearInterval(timer);
    }, [counter]);



    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        /**
         * Validate the mobile number to accept only 6 digit
         */
        const otpValidation = MOBILE_NUMBER_SIX_DIGIT.test(otp);
        if (!otpValidation) {
            setErrors(true);
            setDisabled(true)
        } else {
            setErrors(null);
            setDisabled(false)

        }

    }, [otp]);

    /**
   * Each char will be validated to allow only numbers
   */
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' || ALLOW_ONLY_NUMBERS.test(e.target.value)) {
            setOtp(e.currentTarget.value)
        }
        setDisabled(true)
        setErrors(true);


    }

    return (
        <>
            <div>
                <div className="mb-4">
                    <TextBox width="100%" height="50px" value={mobileNumber} formValue={defaultMobValue} />
                </div>
                <TextBox width="100%" height="50px" formValue={defaultOtpValue} value={otp}
                    inputChange={(e: React.ChangeEvent<HTMLInputElement>) => inputChange(e)} />
                <p className='mt-5'>{counter} seconds to go
                    <button className="text-blue-500 ml-3" disabled={counter > 0} >Resend OTP?</button>
                </p>
                {error ? <div className='mt-5' >{ERROR_MESSAGE_OTP}</div> : ''}
                <Button disable={disable} width="100%" height="auto" style={{ marginTop: "20px" }} formValue={buttonData} clickEvent={() => verifyOtp(otp)} />
            </div>
        </>

    )
}

export { OtpInput }