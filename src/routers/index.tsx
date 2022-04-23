import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';

import Home from '../pages/Home';

const Router: React.FC = () => (
    <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
