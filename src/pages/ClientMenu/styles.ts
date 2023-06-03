import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #262A39;
  `;

export const AsideMenu = styled.div`
  background-color: #070D21;
  width: 20%;
  height: 100%;
  left: 0px;
  padding-left: 1rem;
  padding-right: 1rem;

  text-align: center;

  h1 {
    margin-top: 2rem;
    color: white;
  }

  textarea {
    margin-top: 1rem;
    width: 90%;
    height: 35%;
    resize: none;
    font-size: 12pt;
    font-weight: bold;
    padding: 5px;
  }
`;

export const Footer = styled.div`
  background-color: #070D21;
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0px;

  display: flex;
  align-items: center;
`;

export const InputIP = styled.input`
  width: 14rem;
  margin: 10px;
  padding: 4px;
  border-radius: 10px;
  border: none;
  font-size: 12pt;
  font-weight: bold;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 5px;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 10px;
  border: none;
  background-color: #258803;
  color: white;
  font-weight: bold;
  font-size: 12pt;

  &:hover {
    cursor: pointer;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 998;
  overflow-y: auto;
`;
