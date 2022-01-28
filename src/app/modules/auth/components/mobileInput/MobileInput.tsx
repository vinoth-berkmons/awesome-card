import { FC, useEffect, useRef, useState } from 'react';


import { ALLOW_ONLY_NUMBERS, Button, TextBox } from '../../../../common';
import { InputValue } from '../../../../models/UI';
import { ERROR_MESSAGE_MOBILE, ErrorStatus, MOBILE_NUMBER_SIX_DIGIT_PREFIX } from '../../../../common/constants/Constants';


/**
 * Button data to pass Button component
 */
const buttonData = {
    name: 'Continue',
    type: 'button'
}

/**
 * Input value  to pass TextBox component
 */
const defaultFormValue: InputValue = {
    name: 'mob',
    id: 'mob_1',
    placeholder: 'Mobile number'
}


/**
 * 
 * Mobile input component to receive mobile number for sign in
 * TextBox and Button components are used
 * useState / useEffect hooks are used
 *  
 * @returns 
 */

const MobileInput: FC<any> = ({ sendUserOtp, loading }) => {

    /**
     * Mobile Input Scope variables
     */

    const [mobileNumber, setMobileNumber] = useState('')
    const firstRender = useRef(true);
    const [disable, setDisabled] = useState(true);
    const [error, setErrors] = useState<ErrorStatus>(null);


    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        /**
         * Validate the mobile number with prefix of 11 and 6 digit
         */
        const mobileNumberValidation = MOBILE_NUMBER_SIX_DIGIT_PREFIX.test(mobileNumber);
        if (!mobileNumberValidation) {
            setErrors(true);
            setDisabled(true)
        } else {
            setErrors(null);
            setDisabled(false)
        }

    }, [mobileNumber]);

    /**
     * Each char will be validated to allow only numbers
     */
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' || ALLOW_ONLY_NUMBERS.test(e.target.value)) {
            setMobileNumber(e.currentTarget.value)
        }
        setDisabled(true)
        setErrors(true);
    }

    return (
        <>
            <div className='flex flex-col '>
                <label className='mb-5'>Enter Your Mobile Number</label>
                <TextBox width="auto" height="50px"
                    value={mobileNumber}
                    formValue={defaultFormValue}
                    inputChange={(e: React.ChangeEvent<HTMLInputElement>) => inputChange(e)}
                />
                {error ? <div className='mt-5 text-sm mb-2 text-red-700'>{ERROR_MESSAGE_MOBILE}</div> : ''}
                <Button disable={disable || loading} width="auto" height="auto" style={{ marginTop: "20px" }} formValue={buttonData} clickEvent={() => sendUserOtp(mobileNumber)} />
            </div>
        </>

    )
}

export { MobileInput }
