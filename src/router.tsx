import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { action as updateAvailabilityAction, loader as productsLoader } from "./views/Products";
import NewProduct, {action as newProductAction} from "./views/NewProduct";
import EditProduct, { loader as editProductLoader, action as editProductAction} from "./views/EditProduct";
import { action as deleteProductDetailsAction } from "./components/ProductDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <Products/>,
                index: true,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path:'productos/:id/editar', // ROA pattern - Resource-oriented design
                element: <EditProduct/>,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path:'productos/:id/eliminar', // ROA pattern - Resource-oriented design
                action: deleteProductDetailsAction
            }
        ]
    }
])