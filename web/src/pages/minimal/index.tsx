import { useScramble } from "use-scramble";

export default function Minimal() {
    const { ref, replay } = useScramble({
        text: "tanishq singh",
    });

    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-4 p-8">
            <h1 onMouseOver={replay} onFocus={replay} className="text-xs font-ubuntu" ref={ref} />
        </div>
    );
}
