import React from "react";
import styled from "styled-components";

const Input = styled.div`
    min-width: 150px;
    height: 26px;
    border-radius: ${({ theme: { borders } }) => borders.primary};

    &:focus,
    :active {
        border: 0;
        outline: 2px solid ${({ theme: { colors } }) => colors.primary};
    }
`;

export default Input;
