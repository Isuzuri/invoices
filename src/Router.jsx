import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import InvoicePage from "./components/invoice-page/invoice-page";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/invoice/:id" element={<InvoicePage />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router