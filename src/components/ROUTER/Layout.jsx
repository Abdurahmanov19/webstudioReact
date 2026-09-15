import React from 'react';
import{Outlet} from 'react-router-dom'
import Header from "../HEADER/Header";
import Footer from "../FOOTER/Footer";
const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;