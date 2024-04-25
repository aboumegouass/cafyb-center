import { Routes, Route } from "react-router-dom";
import Home from '../pages/index';
import CategorySlug from '../pages/category/slug';
import PostSlug from '../pages/slug';
function AppRouterIndex() {
    return (
        <Routes>
            <Route path='/docs' element={<Home />} />
            <Route path='/category/:slug' element={<CategorySlug />} />
            <Route path='/:slug' element={<PostSlug />} />
        </Routes>
    )
}

export default AppRouterIndex