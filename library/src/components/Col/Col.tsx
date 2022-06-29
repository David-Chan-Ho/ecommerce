import styled from "styled-components";

interface ColProps {
    col?: number;
}

export const Col = styled.div<ColProps>`
    width: ${({ col = 6 }) => `${col * (100 / 12)}%`};
    min-height: 100vh;
    height: 100%;
`;
