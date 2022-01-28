import './PinInput.css';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button, replaceChar } from '../..';
import { PinInputModel } from '../../../models/UI';



/**
 * Global variable to track the pin for set pin and verify pin
 */
let val = '';

/**
 * Verify Button Data
 */
const buttonData = {
    name: 'Verify',
    type: 'button'
}

/**
 * Custom Pin Input  for verifying Pin
 * Accepts 4 digit Pin
 * Styled Components
 * Custom Button components used
 * Used react-hook-form
 * Verify button will be shown only the verify page by using 'isVerify' param
 * 
 * @param PinInputModel 
 * @returns 
 */
const PinInput: FC<PinInputModel> = ({ width = "50px", height = "20", inputChange, submitVerify, isVerify = false }) => {
    const { register, reset } = useForm();


    /**
     * Clear the input if the verify button clicked
     * Call submitVerify to notify the parent components
     */
    const checkVerifyPin = () => {
        reset({
            pin_1: "",
            pin_2: "",
            pin_3: "",
            pin_4: ""
        })
        val = '';
        submitVerify()
    }

    /**
     * Validation:
     * move to next input if the prev one is typed
     * send each input to the parent component
     * @param 
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { maxLength, value, name } = e.target;
        const [_fieldName, fieldIndex] = name.split("_");

        let fieldIntIndex = parseInt(fieldIndex, 10);

        if (fieldIntIndex > val.length) {
            val = val + value;
        }

        /**
         * Replace and add char.
         */
        val = replaceChar(val, fieldIntIndex - 1, value)



        // Check if no of char in field == maxlength
        if (value.length >= maxLength) {

            // It should not be last input field
            if (fieldIntIndex < 4) {

                // Get the next input field using it's name
                const nextfield = document.querySelector(
                    `input[name=pin_${fieldIntIndex + 1}]`
                );

                // If found, focus the next field
                if (nextfield !== null) {
                    (nextfield as HTMLElement).focus()!;
                }
            }
        }
        inputChange(val);
    };


    return <>
        <div className="flex flex-col mt-5">
            <div></div>
            <form>
                <StyledPin
                    type="number"
                    width={width}
                    height={height}
                    {...register('pin_1', { maxLength: 1 })}
                    className="pin-textbox mb-4 mr-6 pr-1"
                    maxLength={1}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                />
                <StyledPin
                    type="number"
                    width={width}
                    height={height}
                    {...register('pin_2')}
                    className="pin-textbox mb-4 mr-6"
                    maxLength={1}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                />
                <StyledPin
                    type="number"
                    width={width}
                    height={height}
                    {...register('pin_3')}
                    className="pin-textbox mb-4 mr-6"
                    maxLength={1}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                />
                <StyledPin
                    type="number"
                    width={width}
                    height={height}
                    {...register('pin_4')}
                    className="pin-textbox mb-4 mr-6"
                    maxLength={1}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                />
                <br />

                {isVerify && <Button disable={false} width="100%" height="auto" style={{ marginTop: "20px" }} formValue={buttonData} clickEvent={() => checkVerifyPin()} />}
            </form>
        </div>

    </>
}

/**
 * Styled components initialized
 */
const StyledPin = styled.input<any>`
width:  ${props => props.width};
height: ${props => props.height};
placeholder: ${props => props.placeholder};
margin-bottom: 15px;
padding: 10px;
`

export { PinInput }