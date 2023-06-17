import React from 'react';
import { Container, Input, Text } from './styles';

type InputProps = {
    text: string;
    placeholder?: string | undefined;
    onChangeValue?: React.ChangeEventHandler<HTMLInputElement> | undefined
    value?: string | number | readonly string[] | undefined;
}

export const InputLabel = ({
    text,
    placeholder,
    value,
    onChangeValue
}: InputProps) => {
    return (
        <Container>
            <Text
            color='#FFF'
            >{text}</Text>
            <Input 
            placeholder={placeholder}
            value={value}
            onChange={onChangeValue}
            />
        </Container>
    );
}