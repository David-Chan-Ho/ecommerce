import styled from "styled-components";

export const List = styled.ul`
    border: 1px solid ${({ theme: { colors } }) => colors.gray};
    padding: 9px 12px;
    list-style-type: none;
    display: grid;
    gap: 8px;
`;

interface ListItemProps {
    active?: boolean;
}

export const ListItem = styled.li<ListItemProps>`
    border: 1px solid ${({ theme: { colors } }) => colors.gray};
    padding: 8px 12px;

    a {
        color: black;
        text-decoration: none;
    }

    &:hover {
        background-color: #ccc;
        cursor: pointer;
    }
`;
