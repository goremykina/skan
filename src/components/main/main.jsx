import './style.sass'
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import { Outlet } from "react-router-dom";
import AuthorizedProvider from "../context/context.jsx";

export  default function Main() {
    return (
        <AuthorizedProvider>
            <Header />
            <Outlet />
            <Footer />
        </AuthorizedProvider>
    )
}