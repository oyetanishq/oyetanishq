import LinkText from "@/components/ui/link-text";

export default function NavBar() {
    return (
        <header className="w-full">
            <nav className="flex justify-between items-start">
                <div className="flex flex-col items-start sm:items-center justify-center">
                    <LinkText href="/" aria-label="tanishq singh" text="tanishq singh" className="text-2xl sm:text-3xl text-dark cursor-pointer" />
                    <span className="text-xs text-gray-600 pl-4 sm:pl-0">full stack & ml/dl developer</span>
                </div>
                <div className="flex flex-col">
                    <LinkText href="/minimal" rel="noreferrer" aria-label="about tanishq singh" text="about" className="text-xs sm:text-sm text-dark duration-300 underline -underline-offset-1 hover:underline-offset-2" />
                    <LinkText href="/minimal/projects" rel="noreferrer" aria-label="projects made by tanishq singh" text="projects" className="text-xs sm:text-sm text-dark duration-300 underline -underline-offset-1 hover:underline-offset-2" />
                    <LinkText href="/minimal/contact" rel="noreferrer" aria-label="contact tanishq singh" text="contact" className="text-xs sm:text-sm text-dark duration-300 underline -underline-offset-1 hover:underline-offset-2" />
                </div>
            </nav>
        </header>
    );
}
