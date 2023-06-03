import React, { useEffect, useState } from 'react';
import { Button, ButtonContainer, Container, SelectContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import MenuLogo from '../../assets/icons/MenuLogo';

export const SelectMenu = () => {
  const [change, setChange] = useState<boolean>(false);
  document.title = 'MenuFooding';

  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setChange(true);
    }, 2000);
  }, []);

  const handleClient = () => {
    navigation('/client');
  }

  const handleServer = () => {
    navigation('/server');
  }

  return (
    <>
      {
        change ?
        <SelectContainer>
          <ButtonContainer>
            <Button onClick={handleClient}>Client</Button>
            <Button onClick={handleServer}>Server</Button>
          </ButtonContainer>
        </SelectContainer>
        :
        <Container>
          <MenuLogo />
        </Container>
    }
    </>
  )

}
