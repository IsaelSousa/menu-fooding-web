import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 20%;
    width: 20%;
    background-color: #070D21;

    margin: 10px;
    border-radius: 10px;

    align-items: center;
    justify-content: center;

    h3 {
        color: #FFF;
    }

    button {
        margin-top: 10px;
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 8px;
        padding-bottom: 8px;

        font-weight: bold;
        border: none;
        background-color: #258803;
        color: white;

        &:hover {
            cursor: pointer;
        }
    }
`;