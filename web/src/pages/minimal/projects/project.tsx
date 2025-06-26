import LinkText from "@/components/ui/link-text";
import { useEffect, type RefAttributes } from "react";
import { useScramble } from "use-scramble";
import { useInView } from "react-intersection-observer";

export interface Content {
    title: string;
    description: string;
    technologies: string;
    date: Date;
    links: {
        code: { name: string; link: string };
        live: { name: string; link: string };
    };
    image: {
        src: string;
        alt: string;
    };
}

interface ProjectProps extends RefAttributes<HTMLDivElement> {
    content: Content;
}

export default function Project({ content, ...rest }: ProjectProps) {
    const { ref: inViewRef, inView } = useInView({ triggerOnce: false, threshold: 0.6 });

    const { ref: titleRef, replay: titleReplay } = useScramble({ text: content.title, speed: inView ? 1 : 0 });
    const { ref: technologiesRef, replay: technologiesReplay } = useScramble({ text: content.technologies, speed: inView ? 1 : 0 });

    useEffect(() => {
        if (inView) {
            titleReplay();
            technologiesReplay();
        }
    }, [inView]);

    return (
        <div {...rest} className="w-full h-max flex flex-col justify-start items-start border p-3.5 gap-3.5 group col-span-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs uppercase">{content.date.toLocaleString("en-US", { month: "long", year: "numeric" })}</span>
                <div className="flex gap-2">
                    <LinkText target="_blank" rel="noreferrer" to={content.links.code.link} text={content.links.code.name} className="text-xs uppercase border px-1.5 rounded-full cursor-pointer duration-300 active:bg-transparent hover:bg-yellow-200" />
                    <LinkText target="_blank" rel="noreferrer" to={content.links.live.link} text={content.links.live.name} className="text-xs uppercase border px-1.5 rounded-full cursor-pointer duration-300 active:bg-transparent hover:bg-yellow-200" />
                </div>
            </div>
            <img src={content.image.src} alt={content.image.alt} className="w-full grayscale duration-300 group-hover:filter-none aspect-video object-cover" />
            <div ref={inViewRef} className="w-full flex flex-col">
                <div className="w-full flex justify-between items-end">
                    <span className="uppercase font-semibold" ref={titleRef} />
                </div>
                <span className="text-sm description">{content.description}</span>
            </div>
            <div className="w-full">
                <span className="text-sm font-semibold text-gray-700" ref={technologiesRef} />
            </div>
        </div>
    );
}
