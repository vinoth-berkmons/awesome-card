import { FC } from "react";
import styled from "styled-components";
import { ButtonModel } from "../../../models/UI";

import './Button.css'

/**
 * Common Button
 * used Styled Components
 * Receive props as 'ButtonModel'
 * @param  
 * @returns 
 */
const Button: FC<ButtonModel> = ({ clickEvent, formValue = 'Submit', width = "70px", height = "50px", bg = "#009ef7", color = "#FFF", disable, style }) => {
    return (
        <StyledButton
            type={formValue.type}
            className="button"
            width={width}
            height={height}
            bg={bg}
            color={color}
            onClick={clickEvent}
            disabled={disable}
            style={style}
        >
            <span>{formValue.name}</span>
        </StyledButton>
    )
}

/**
 * Styled Component initialization
 */
const StyledButton = styled.button<any>`
width: ${props => props.width};
height:  ${props => props.height};
background:  ${props => props.bg};
color: ${props => props.color};
`

export { Button }
