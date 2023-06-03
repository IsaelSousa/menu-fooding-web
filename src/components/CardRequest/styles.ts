import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 30%;
  height: 50%;
  margin: 15px;

  background-color: #070D21;
  box-shadow: -3px 3px 0px 0px #000000;

  padding: 10px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  p {
    color: white;
    font-size: 30pt;
    text-align: center;
    margin-bottom: 4px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const InputLabel = styled.input`
  height: 30px;
  padding-left: 10px;
  font-weight: 10px;
  font-size: 12pt;
`;

export const TextArea = styled.textarea`
    margin-top: 1rem;
    height: 65%;
    resize: none;
    font-size: 12pt;
    font-weight: bold;
    padding: 5px;
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
