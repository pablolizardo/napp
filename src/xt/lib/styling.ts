import { CSSProperties } from "react";
import xtConfig from "@/xt/lib/config";

export const xtGlobalStyles = {
  "--radius": xtConfig.styling.rounded,
  "--space": xtConfig.styling.baseSize,
} as CSSProperties;

export const xtGap = { gap: xtConfig.styling.gap } as CSSProperties;
export const xtRounded = {
  borderRadius: xtConfig.styling.rounded,
} as CSSProperties;
export const xtSectionGap = {
  gap: xtConfig.styling.sectionGap,
} as CSSProperties;
