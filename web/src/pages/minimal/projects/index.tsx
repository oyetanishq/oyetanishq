import { projects } from "@/data/projects";
import Project from "./project";
import { useScramble } from "use-scramble";

export default function Projects() {
    const { ref } = useScramble({ text: "projects" });

    return (
        <div className="w-full flex-1 flex flex-col items-start justify-start mt-6 gap-4 z-10">
            <span className="text-xl sm:text-2xl uppercase" ref={ref} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {projects.map((p, index) => (
                    <Project content={p} key={p.links.code.link + index} />
                ))}
            </div>
        </div>
    );
}
