import { colors } from "./colors";
import { fonts } from "./fonts";
import { borders } from "./borders";

export type Theme = typeof theme;

export const theme = {
    colors,
    fonts,
    borders,
};
