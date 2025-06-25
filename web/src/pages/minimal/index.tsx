import NavBar from "@/components/navbar";

export default function Minimal() {
    return (
        <div className="min-h-dvh flex flex-col justify-start items-center gap-4 py-6 px-5 md:p-8 bg-gray-50">
            <NavBar />
        </div>
    );
}
