import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='mt-[67px]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;