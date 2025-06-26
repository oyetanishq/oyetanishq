import { type RefAttributes } from "react";
import { Link, type LinkProps } from "react-router";
import { useScramble, type UseScrambleProps } from "use-scramble";

type LinkTextProps = LinkProps & RefAttributes<HTMLAnchorElement> & UseScrambleProps & {};

export default function LinkText(props: LinkTextProps) {
    // all the properties of use scramble
    const { chance, ignore, onAnimationEnd, onAnimationFrame, onAnimationStart, overdrive, overflow, playOnMount, range, scramble, seed, speed, step, text, tick, ...rest } = props;
    const { ref, replay } = useScramble({ chance, ignore, onAnimationEnd, onAnimationFrame, onAnimationStart, overdrive, overflow, playOnMount, range, scramble, seed, speed, step, text, tick });

    return <Link {...rest} onMouseOver={replay} onFocus={replay} ref={ref} />;
}
