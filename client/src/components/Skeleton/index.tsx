import React from "react";
import styled from "styled-components";
import { selectColors, selectBorder } from "../../helpers/selectTheme";

interface SkeletonProps {
    circle: boolean;
    box: boolean;
    height?: number;
}

const Skeleton = styled.div<SkeletonProps>`
    background-color: ${selectColors("gray")};
    width: ${({ height, circle }) => (circle ? `${height}px` : "100%")};
    height: ${({ height, box, circle }) =>
        height
            ? `${height}px`
            : box
            ? "100%"
            : circle
            ? `${height}px`
            : "16px"};
    border-radius: ${({ circle, box }) =>
        circle ? "50%" : box ? selectBorder("rounded") : "0.2rem"};

    background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 80%
        ),
        lightgray;
    background-repeat: repeat-y;
    background-size: 50px 200px;
    background-position: 0 0;
    animation: shine 1s infinite;

    @keyframes shine {
        to {
            background-position: 100% 0, 0 0;
        }
    }
`;

export default Skeleton;
