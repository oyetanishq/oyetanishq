import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { Analytics } from "@vercel/analytics/react";

// gsap
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

// home pages components
import Home from "@/pages/home";

// minimal pages components
import Minimal from "@/pages/minimal";
import MinimalAbout from "@/pages/minimal/about";
import MinimalProjects from "@/pages/minimal/projects";
import MinimalContact from "@/pages/minimal/contact";

// miscellaneous pages
import NotFound from "@/pages/not-found";

const App = () => {
    return (
        <StrictMode>
            <Analytics />

            <BrowserRouter>
                <Routes>
                    {/* home route - which decide which theme user should go */}
                    <Route index element={<Home />} />

                    {/* this is the minimalistic site with just text, and some animation */}
                    <Route path="minimal" element={<Minimal />}>
                        <Route index element={<MinimalAbout />} />
                        <Route path="projects" element={<MinimalProjects />} />
                        <Route path="contact" element={<MinimalContact />} />
                    </Route>

                    {/* TODO: to build a webthree like page */}

                    {/* not found page */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
};

createRoot(document.getElementById("root")!).render(<App />);
