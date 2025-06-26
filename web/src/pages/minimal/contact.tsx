import LinkText from "@/components/ui/link-text";
import { Loader } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useScramble } from "use-scramble";

export default function Contact() {
    const { ref: sendButtonRef, replay: sendButtonReplay } = useScramble({ text: "send message" });
    const { ref: contactRef } = useScramble({ text: "contact" });
    const [sending, setSending] = useState(false);

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (sending) return alert("already sending one message");

        try {
            setSending(true);

            await fetch(import.meta.env.VITE_CONTACT_FORM_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, message }),
            })
                .then(async (res) => {
                    return { success: res.status === 201, data: await res.json() };
                })
                .then(({ success, data }) => {
                    if (success) alert("message sent successfully");
                    else alert(data?.error || "something went wrong, please try again later");
                });
        } catch (error) {
            alert((error as Error).message || "something went wrong, please try again later");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="w-full flex-1 flex flex-col items-start justify-start mt-6 gap-4">
            <div className="w-full flex justify-between items-end max-w-2xl">
                <span className="text-xl sm:text-2xl uppercase" ref={contactRef} />
                <LinkText to="mailto:hello@tanishqsingh.com" target="_blank" rel="noreferrer" title="tanishq singh's email" text="hello@tanishqsingh.com" className="text-xs sm:text-sm duration-300 underline -underline-offset-1 hover:underline-offset-2 text-pink-700" />
            </div>
            <form onSubmit={handleFormSubmit} className="w-full max-w-2xl flex flex-1 flex-col justify-start items-start gap-3 sm:mt-6">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} min={3} max={30} required id="email" placeholder="what's your email?" className="w-full text-sm outline-none p-3 border border-gray-500" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} minLength={10} maxLength={500} required placeholder="what you want to talk about?" className="w-full flex-1 text-sm outline-none py-2 px-3 border border-gray-500" />
                <button type="submit" className="border w-full min-h-14 bg-black text-white py-3 cursor-pointer duration-300 hover:bg-dark active:bg-black flex justify-center items-center" onMouseOver={sendButtonReplay} onFocus={sendButtonReplay}>
                    {sending ? <Loader className="size-5 animate-spin" /> : <span className="uppercase" ref={sendButtonRef} />}
                </button>
            </form>
        </div>
    );
}
