import React, { useState } from 'react';
import { Status } from './styles';

type StatusProps = {
  active: boolean;
}

export const StatusComponent = ({
  active
}: StatusProps) => {
  return (
    <>
      {
        active ?
        <Status color='#258803'/>
        :
        <Status color='lightgray'/>
      }
    </>
  );
}
