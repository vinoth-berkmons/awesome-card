import React from "react";
import { Content, Header } from "./components";


/**
 * Master Layout holds the entire application except Auth flow. To make it reusable for the entire app
 * Ex: Header / Footer / Sidebar
 * All the Base layout components placed it in MasterLayout
 * 
 * @param param0 
 * @returns 
 */
const MasterLayout: React.FC = ({ children }) => {
    return (
        <>
            <div>
                <div className="wrapper">
                    <Header />
                    <Content> {children} </Content>
                </div>
            </div>
        </>
    )
}

export { MasterLayout }

