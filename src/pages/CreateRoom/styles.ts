import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #070D21;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 40px;
    padding-right: 40px;

    margin-top: 10px;

    font-weight: bold;
    font-size: 12pt;
    color: '#FFF';

    background-color: #258803;
    border: none;
    border-radius: 8px;

    box-shadow: -4px 4px 0px black;
    transition: 400ms;

    &:hover {
        cursor: pointer;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 44px;
        padding-right: 44px;
    }
`;