import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

import { BrowserRouter, Routes, Route } from "react-router";

// pages components
import Home from "@/pages/home";
import Minimal from "@/pages/minimal";
import NotFound from "@/pages/not-found";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="minimal" element={<Minimal />}>
                        <Route index element={<h1>home</h1>} />
                        <Route path="projects" element={<h1>projects</h1>} />
                        <Route path="contact" element={<h1>contact</h1>} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
};

createRoot(document.getElementById("root")!).render(<App />);
