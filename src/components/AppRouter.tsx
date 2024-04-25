import { Routes, Route } from "react-router-dom";
import Docs from '../pages/docs';
import Statistics from '../pages/statistics';
import TurnoverByProducts from '../pages/statistics/turnover-by-products';
function AppRouter() {
    return (
        <Routes>
            <Route path="/statistics" element={<Docs />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/statistics/turnover-by-products" element={<TurnoverByProducts />} />
        </Routes>
    )
}

export default AppRouter