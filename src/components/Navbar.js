import React from 'react'
import stlyed from "styled-components"

export default function Navbar() {
  return (
    <Container>
        <Title>
            Al-Klimat
        </Title>
    </Container>
    )
}

const Container = stlyed.div`
    width: 100%;
    heignt: 55px;
    border-bottom: 1px solid #003260;
` 
const Title = stlyed.p`
    color: #003260;
    margin: 0 0;
`