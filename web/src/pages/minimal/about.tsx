import LinkText from "@/components/ui/link-text";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function About() {
    useGSAP(() => {
        const aboutParagraph = new SplitText(".about-paragraph", { type: "chars, words" });

        gsap.from(aboutParagraph.words, {
            opacity: 0.01,
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.005,
        });
    }, []);

    return (
        <div className="w-full flex flex-1 flex-col items-start justify-start sm:pt-16 pt-3 z-10">
            <div className="max-w-2xl flex-1 flex flex-col gap-6 justify-end sm:justify-start mb-12">
                <p className="text-sm sm:text-[15px] about-paragraph">
                    HELLO, I'm <b>Tanishq Singh</b> a sophomore student at <i>Indian Institute of Technology Varanasi</i>, I'm a versatile developer skilled in full-stack development, ml/dl, and DevOps.
                </p>
                <p className="text-sm sm:text-[15px] about-paragraph">
                    I've more than 3 years of experience in building robust web application, including automated deployment pipelines using github actions, and docker. And more than 52K minutes in spotify wrapped last year, I've actively participated in hackathons and contributed
                    to open-source, and recently started diving into machine & deep learning.
                </p>
                <p className="text-sm sm:text-[15px] about-paragraph">I'm confident working with technologies like react, typescript, node, golang, sql, docker, cpp, tailwindcss, python and ci/cd workflows. Please show him some grass.</p>
            </div>
            <div className="sm:flex sm:gap-1">
                <p className="text-sm sm:text-[15px]">You can follow me on</p>
                <p className="text-sm sm:text-[15px]">
                    github: <LinkText to="https://github.com/oyetanishq" target="_blank" rel="noreferrer" title="tanishq singh's github profile" text="@oyetanishq" className="duration-300 underline -underline-offset-1 hover:underline-offset-2 text-pink-700" />,
                </p>
                <p className="text-sm sm:text-[15px]">
                    linkedin: <LinkText to="https://www.linkedin.com/in/oyetanishq" target="_blank" rel="noreferrer" title="tanishq singh's linkedin profile" text="@oyetanishq" className="duration-300 underline -underline-offset-1 hover:underline-offset-2 text-pink-700" />, or
                </p>
                <p className="text-sm sm:text-[15px]">
                    send a email at <LinkText to="mailto:hello@tanishqsingh.com" target="_blank" rel="noreferrer" title="tanishq singh's email" text="hello@tanishqsingh.com" className="duration-300 underline -underline-offset-1 hover:underline-offset-2 text-pink-700" />.
                </p>
            </div>
        </div>
    );
}
