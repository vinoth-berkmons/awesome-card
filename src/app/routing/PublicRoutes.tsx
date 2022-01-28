import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';

import AuthPage from '../modules/auth';
import { VerifyPin } from '../modules/auth/components/VerifyPin';
import { RootState } from '../services/store';

/**
 * public routes will be called when auth/pin not verified
 * @returns 
 */
const PublicRoutes: FC<any> = () => {
    const history = useHistory();

    /**
     * If Auth token is present then load verify pin page
     * If Auth token is not present then load auth page
     */
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    if (isAuthenticated) {
        history.push('/verifyPin');
    } else {
        history.push('/auth');
    }
    return (
        <Switch>
            <Route path='/auth' component={AuthPage} />
            <Route path='/verifyPin' component={VerifyPin} />

        </Switch>
    )
}

export { PublicRoutes }
