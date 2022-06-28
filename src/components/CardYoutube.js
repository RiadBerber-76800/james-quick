import React from 'react'
import styled from 'styled-components';

// Fonction pour appeler les Cards de la section Video youtube page home

export default function CardYoutube({src}) {
  return <img src={src} className="lg:w-[350px]" />;
}

const CardVideo = styled.main`

`