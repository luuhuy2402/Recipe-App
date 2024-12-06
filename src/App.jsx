import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import {
    ViewError,
    ViewHome,
    ViewRecipeList,
    ViewRecipeSingle,
    ViewSearchResult,
    ViewTypeList,
} from "./views";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        errorElement: <ViewError />,
        children: [
            {
                path: "/",
                element: <ViewHome />,
            },
            {
                path: "recipes/:typeOf/:typeName",
                element: <ViewRecipeList />,
            },
            {
                path: "/recipes/:id",
                element: <ViewRecipeSingle />,
            },
            {
                path: "recipes/search",
                element: <ViewSearchResult />,
            },
            {
                path: "types/:typeId",
                element: <ViewTypeList />,
            },
            {
                path: "*",
                element: <ViewError />,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
