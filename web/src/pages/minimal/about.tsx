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
        <div className="w-full flex flex-1 flex-col items-start justify-start sm:pt-16 pt-3">
            <div className="max-w-2xl flex-1 flex flex-col gap-6 justify-end sm:justify-start mb-12">
                <p className="text-sm sm:text-[15px] about-paragraph">
                    <b>Tanishq Singh</b> is a sophomore student at <i>Indian Institute of Technology Varanasi</i>, he is a versatile developer skilled in full-stack development, ml/dl, and DevOps.
                </p>
                <p className="text-sm sm:text-[15px] about-paragraph">
                    He has more than 3 years of experience in building robust web application, including automated deployment pipelines using github actions, and docker. And more than 52K minutes in spotify wrapped last year, He has recently started with machine & deep learning,
                    He has actively participated in hackathons and contributed to open-source.
                </p>
                <p className="text-sm sm:text-[15px] about-paragraph">Some technologies he is confident in react, typescript, node, golang, sql, docker, cpp, tailwindcss, and ci/cd workflows. Please show him some grass.</p>
            </div>
            <div className="sm:flex sm:gap-1">
                <p className="text-sm sm:text-[15px]">You can follow him on</p>
                <p className="text-sm sm:text-[15px]">
                    github: <LinkText to="https://github.com/oyetanishq" target="_blank" rel="noreferrer" text="@oyetanishq" className="duration-300 underline -underline-offset-1 hover:underline-offset-2 text-pink-700" />,
                </p>
                <p className="text-sm sm:text-[15px]">
                    linkedin: <LinkText to="https://www.linkedin.com/in/oyetanishq" target="_blank" rel="noreferrer" text="@oyetanishq" className="duration-300 underline -underline-offset-1 hover:underline-offset-2 text-pink-700" />, or
                </p>
                <p className="text-sm sm:text-[15px]">
                    send a email at <LinkText to="mailto:hello@tanishqsingh.com" target="_blank" rel="noreferrer" text="hello@tanishqsingh.com" className="duration-300 underline -underline-offset-1 hover:underline-offset-2 text-pink-700" />.
                </p>
            </div>
        </div>
    );
}
