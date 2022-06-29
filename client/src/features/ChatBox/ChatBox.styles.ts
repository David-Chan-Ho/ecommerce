import styled from "styled-components";
import Input from "../../components/Input";
import { BoxProps } from "./ChatBox.types";
import { Button } from "../../components/Button";

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
    border: 1px solid ${({ theme: { colors } }) => colors.gray};
    border-radius: ${({ theme: { borders } }) => borders.rounded};
    bottom: 10px;
    display: ${({ show }) => !show && "none"};
`;

export const ChatInput = styled(Input)`
    bottom: 0;
    border: 0;

    &:focus {
        outline: 0;
    }
`;

export const Toggle = styled(Button)`
    bottom: 0;
`;

export const Messages = styled.section`
    height: 80%;
    padding: 0.4rem;
`;

export const Message = styled.article`
    border: 1px solid ${({ theme: { colors } }) => colors.gray};
    padding: 3px 6px;
    border-radius: ${({ theme: { borders } }) => borders.rounded};
    background-color: ${({ role }) =>
        role === "Admin"
            ? "rgb(78, 78, 235)"
            : ({ theme: { colors } }) => colors.gray};
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
