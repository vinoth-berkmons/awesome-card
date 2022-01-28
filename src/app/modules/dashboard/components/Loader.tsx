import { FC } from "react";

/**
 * Loader and success message to show After successful of verification
 * @returns 
 */

const Loader: FC = () => {
    return <div>
        <h1>Congratulations</h1>
        <div>
            <div>You have logged in successfully.</div>
            <div>Enjoy your awesome card application</div>
        </div>
    </div>
}

export default Loader;