import React from "react";
import styled from "styled-components";

const IconButton = styled.button`
    margin-top: 15px;
    background-color: ${(({theme: {colors}}) => colors.primary)};
    color: white;
    border: 0;
    width: 30px;
    height: 30px;
    padding: 4px;
    font-size: 14px;
    border-radius: 50%;
    cursor: pointer;
`;

export default IconButton;
