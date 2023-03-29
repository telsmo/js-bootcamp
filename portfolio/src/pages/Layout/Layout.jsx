import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Layout.css';

export const Layout = () => {
    return (
        <div className='layout-container'>
        <Header/>
        <main className='content-container'>
            <Outlet/>
        </main>
        <Footer/>
        </div>
    )
}
