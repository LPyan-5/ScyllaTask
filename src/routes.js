import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

const Routes = [
    {
        path: "/user/:id",
        component: UserPage,
        exact: true
    },
    {
        path: "/",
        component: HomePage,
        exact: true
    }
];

export default Routes;