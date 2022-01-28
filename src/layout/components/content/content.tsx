
import React, { FC } from "react"

/**
 * Where all the details will be rendered inside content
 * @param  
 * @returns 
 */
const Content: React.FC = ({ children }) => {
    return (
        <div className="flex flex-row mt-28 justify-center">
            {children}
        </div>
    )
}

export { Content }