import { Switch, Route, useRouteMatch } from "react-router-dom";

import PageNotFound from "../../components/PageNotFound";
import ProfileScreen from "./ProfileScreen";
import OtherProfile from "./OtherProfile";

const Profile = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route 
                exact
                path={`${match.path}`}
                render={() => <ProfileScreen />}
            />
            <Route 
                exact
                path={`${match.path}/edit`}
                render={() => <ProfileScreen />}
            />
            <Route 
                exact
                path={`${match.path}/user/:id`}
                render={() => <OtherProfile />}
            />
            <Route path={`${match.path}`} render={() => <PageNotFound />} />
        </Switch>
    );
};

export default Profile;