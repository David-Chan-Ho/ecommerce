import styled from "styled-components";
import { BoxProps } from "./ChatBox.types";

export const Container = styled.div``;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-color: rgb(78, 78, 235);
    padding: 0.8rem;
`;

export const Box = styled.div<BoxProps>`
    height: 240px;
    width: 280px;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    bottom: 10px;
    display: ${({ show }) => !show && "none"};
`;

export const Input = styled.input`
    width: 90%;
    bottom: 0;
    font-size: 16px;
`;

export const Button = styled.button``;

export const Toggle = styled.button`
    display: flex;
    bottom: 0;
`;

export const Messages = styled.section`
    height: 80%;
    padding: 0.4rem;
`;

export const Message = styled.article`
    border: 1px solid #ccc;
    padding: 3px 6px;
    border-radius: 0.3rem;
    
    background-color: ${({ role }) =>
        role === "Admin" ? "rgb(78, 78, 235)" : "#eee"};
    text-align: ${({ role }) => role === "Admin" && "end"};
    display: ${({ role }) => role === "Admin" && "flex"};
    flex-direction: ${({ role }) => role === "Admin" && "row-reverse"};
`;

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    vertical-align: top;
    border-radius: 50%;
`;

export const Experts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
