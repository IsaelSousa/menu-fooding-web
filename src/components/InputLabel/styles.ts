import styled from 'styled-components';
import { TextProps } from './types';

export const Container = styled.div`
`;

export const Text = styled.h3<TextProps>`
    color: ${props => props.color};
    word-spacing: 2px;
    font-size: 16pt;
    text-shadow: -3px 1px 0px #000;
`;

export const Input = styled.input`
    width: 300px;
    height: 30px;
    text-align: center;

    font-size: 12pt;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    box-shadow: -4px 4px 0px #000;
`;