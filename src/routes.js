import HomePage from "./pages/HomePage";

const Routes = [
    {
        path: "/user/:id",
        // component:
        exact: true
    },
    {
        path: "/",
        component: HomePage,
        exact: true
    }
];

export default Routes;