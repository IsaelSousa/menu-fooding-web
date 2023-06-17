import React from 'react';
import { Container } from './styles';

type MenuProps = {
    name: string;
    onClick: () => void;
}

export const Menu = ({
    name,
    onClick
}: MenuProps) => {
    return (
        <Container>
            <h3>{name}</h3>
            <button onClick={onClick} >Entrar</button>
        </Container>
    );
}