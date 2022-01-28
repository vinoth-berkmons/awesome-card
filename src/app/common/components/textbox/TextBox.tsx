import { FC } from "react";
import styled from "styled-components";
import { InputModel } from "../../../models/UI";

import './TextBox.css'

/**
 * Common InputBox 
 * Used styled components 
 * Receive props as InputModel
 * @param InputModel
 * @returns 
 */
const TextBox: FC<InputModel> = ({ width = "auto", height = "50", formValue, inputChange, value }) => {
    return (
        <StyledTextBox
            className="textbox"
            width={width}
            height={height}
            placeholder={formValue?.placeholder}
            id={formValue?.id}
            name={formValue?.name}
            disabled={formValue?.disable}
            value={value}
            onChange={inputChange}
        />
    )
}

/**
 * Styled Components initialized
 */
const StyledTextBox = styled.input<any>`
width:  ${props => props.width};
height: ${props => props.height};
placeholder: ${props => props.placeholder};
`

export { TextBox }