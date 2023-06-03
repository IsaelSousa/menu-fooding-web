import React, { useState } from 'react';
import { Button, CardContainer, InputLabel, TextArea } from './styles';

type CardProps = {
  user: string;
  text: string;
  number: number;
  onClick: () => void;
}

export const Card = ({
  user,
  text,
  number,
  onClick
}: CardProps) => {

  return (
    <CardContainer>
      <p>Pedido {number}</p>
      <InputLabel
        placeholder='Nome do solicitante'
        readOnly
        value={user}
      />
      <TextArea
        placeholder='Informações'
        value={text}
        readOnly
      />
      <Button onClick={onClick}>Excluir</Button>
    </CardContainer>
  );
}
