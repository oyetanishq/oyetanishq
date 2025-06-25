import type { AnchorHTMLAttributes } from "react";
import { useScramble, type UseScrambleProps } from "use-scramble";

type LinkTextProps = AnchorHTMLAttributes<HTMLAnchorElement> & UseScrambleProps & {};

export default function LinkText(props: LinkTextProps) {
    // all the properties of use scramble
    const { chance, ignore, onAnimationEnd, onAnimationFrame, onAnimationStart, overdrive, overflow, playOnMount, range, scramble, seed, speed, step, text, tick, ...rest } = props;
    const { ref, replay } = useScramble({ chance, ignore, onAnimationEnd, onAnimationFrame, onAnimationStart, overdrive, overflow, playOnMount, range, scramble, seed, speed, step, text, tick });

    return <a {...rest} onMouseOver={replay} onFocus={replay} ref={ref} />;
}
