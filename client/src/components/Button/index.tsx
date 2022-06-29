import React from "react";
import styled from "styled-components";

interface ButtonProps {
    primary?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
}

export const Button = styled.button<ButtonProps>`
    border: 0;
    border-radius: 0.3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    padding: ${({ size }) =>
        size === "small"
            ? "10px 16px"
            : size === "medium"
            ? "11px 20px"
            : "12px 24px"};
    font-size: ${({ size }) =>
        size === "small" ? "12px" : size === "medium" ? "14px" : "16px"};
    color: ${({ primary }) => (primary ? "white" : "#333")};
    background-color: ${({ primary, theme: { colors } }) =>
        primary ? colors.primary : "white"};
    box-shadow: ${({ primary }) =>
        primary ? "" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};

    &:hover {
        color: ${({ primary }) => (primary ? "white" : "#333")};
        background-color: ${({ primary, theme: { colors } }) =>
            primary ? colors.primary : "white"};
        box-shadow: ${({ primary }) =>
            primary ? "" : `green 0px 0px 0px 1px inset`};
    }
`;
