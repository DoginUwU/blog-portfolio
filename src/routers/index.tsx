import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';

import Home from '../pages/Home';
import Post from '../pages/Post';
import Tag from '../pages/Tag';

const Router: React.FC = () => (
    <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="tag/:name" element={<Tag />} />
                <Route path="post/:slug" element={<Post />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
