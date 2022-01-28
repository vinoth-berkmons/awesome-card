import { FC, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FallbackView } from "../common/components/fallback-view/FallbackView";
import Details from "../modules/details";

/**
 * Private routes will be called on success of verified pin
 * @returns 
 */
const PrivateRoutes: FC = () => {

    /**
     * load on demand
     */
    const Dashboard = lazy(() => import('../modules/dashboard'))

    /**
     * Private routes to set the url
     */
    return (
        <Suspense fallback={<FallbackView />}>
            <Switch>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/details' component={Details} />
                <Redirect from='/' to='/dashboard' />
            </Switch>
        </Suspense>
    )
}

export { PrivateRoutes }