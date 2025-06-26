import NavBar from "@/components/navbar";
import LinkText from "@/components/ui/link-text";

export default function NotFound() {
    return (
        <div className="min-h-dvh flex flex-col justify-start items-center gap-4 py-6 px-5 md:p-8 bg-gray-50">
            <NavBar />
            <div className="flex flex-1 flex-col justify-center items-center max-w-xs gap-6">
                <h1 className="text-4xl">Oops!</h1>
                <h3 className="text-xl text-gray-800">We couldn't find what you are looking for</h3>

                <LinkText to="/" text="go back." className="duration-300 underline -underline-offset-1 hover:underline-offset-2 text-pink-700" />
            </div>
        </div>
    );
}
