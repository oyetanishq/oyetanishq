import type { AnchorHTMLAttributes } from "react";
import { useScramble, type UseScrambleProps } from "use-scramble";

type LinkTextProps = AnchorHTMLAttributes<HTMLAnchorElement> &
    UseScrambleProps & {
        text: string;
    };

export default function LinkText(props: LinkTextProps) {
    const { ref, replay } = useScramble(props);
    return <a {...props} onMouseOver={replay} onFocus={replay} ref={ref} />;
}
