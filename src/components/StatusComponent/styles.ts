import styled from 'styled-components';

type StatusColor = {
  color: string;
}

export const Status = styled.div<StatusColor>`
  background-color: ${props => props.color};
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin-left: 1rem;
`;
