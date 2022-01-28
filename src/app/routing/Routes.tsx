import { FC } from 'react';
import { useSelector } from 'react-redux';
import { MasterLayout } from '../../layout/MasterLayout';

import { RootState } from '../services/store';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

/**
 * Routes will decide which route to render.
 * @returns 
 */
const Routes: FC = () => {
    const { isPinVerified } = useSelector((state: RootState) => state.auth);

    /**
     * If the Pin is verified then load Private routes
     */
    if (isPinVerified) {
        return (
            <MasterLayout>
                <PrivateRoutes />
            </MasterLayout>

        )
    }

    /**
     * If the Pin is not verified then load Public Routes
     */
    return (
        <PublicRoutes />
    )

}

export { Routes }