import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { ToggleButton } from "./Toggle.styles";
import { ToggleProps } from "./Toggle.types";

function Toggle({ show, onClick }: ToggleProps) {
    return (
        <ToggleButton onClick={onClick}>
            {show ? <AiOutlineClose /> : <BsChatDots />}
        </ToggleButton>
    );
}

export default Toggle;
