import { CSSProperties } from "react";
import xtConfig from "..";

export const xtGlobalStyles = {
    '--radius': xtConfig.styling.rounded,
    '--space': xtConfig.styling.baseSize,
} as CSSProperties
export const xtGap = { gap: `${xtConfig.styling.gap}rem` } as CSSProperties
export const xtSectionGap = { marginBlock: `${xtConfig.styling.sectionGap}rem` } as CSSProperties

