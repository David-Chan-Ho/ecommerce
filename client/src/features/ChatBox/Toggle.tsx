import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import IconButton from "../../components/IconButton";
import { ToggleProps } from "./Toggle.types";

function Toggle({ show, onClick }: ToggleProps) {
    return (
        <IconButton onClick={onClick}>
            {show ? <AiOutlineClose /> : <BsChatDots />}
        </IconButton>
    );
}

export default Toggle;
