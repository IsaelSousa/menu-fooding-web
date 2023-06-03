import React, { useState } from 'react';
import { Button, CardContainer, InputLabel, TextArea } from './styles';

type CardProps = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}

export const CardRequest = ({
  user,
  setText,
  text,
  setUser,
  onClick
}: CardProps) => {

  return (
    <CardContainer>
      <p>Pedido</p>
      <InputLabel
        placeholder='Nome do solicitante'
        value={user}
        onChange={(e: any) => setUser(e.target.value)}
      />
      <TextArea
        placeholder='Informações'
        value={text}
        onChange={(e: any) => setText(e.target.value)}
      />
      <Button onClick={onClick}>Enviar</Button>
    </CardContainer>
  );
}
