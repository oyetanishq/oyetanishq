import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

import { BrowserRouter, Routes, Route } from "react-router";

// pages components
import Minimal from "@/pages/minimal";
import NotFound from "@/pages/not-found";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Minimal />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
};

createRoot(document.getElementById("root")!).render(<App />);
