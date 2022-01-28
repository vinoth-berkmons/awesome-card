import React, { FC } from "react";

import './Header.css'

/**
 * Header of the App
 * @returns 
 */
const Header: FC = () => {
    return (
        <div className="header header-fixed items-center flex pl-14 justify-center">
            <h2 className="text-blue-900 text-xl">Welcome to Awesome Card</h2>
        </div>
    )
}

export { Header }