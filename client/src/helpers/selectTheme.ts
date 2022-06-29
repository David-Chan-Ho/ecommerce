import { ThemeProps } from "styled-components";
import { Theme } from "../theme";
import { Border } from "../theme/borders";
import { Color } from "../theme/colors";

export const selectColors = (color: Color) => (props: ThemeProps<Theme>) =>
    props.theme.colors[color];

export const selectBorder = (border: Border) => (props: ThemeProps<Theme>) =>
    props.theme.borders[border];
