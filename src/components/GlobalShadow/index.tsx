import React from 'react';

import { Container } from './styles';

interface Props {
    isActive: boolean;
}

const GlobalShadow: React.FC<Props> = ({ isActive }) => {
  return <Container isActive={isActive}/>;
}

export default GlobalShadow;