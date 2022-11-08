import React from 'react'
import { SimpleText, Title } from '../../styles/styledGlobal'
import { ContactContainer, ContactContent, EmailBox, PhoneBox } from './styles'

export const Contact = () => {
  return (
    <>
    <ContactContainer id='Contact'>
        <ContactContent>
            <EmailBox>
            <Title color='#32E7F0'>Email</Title>
            <SimpleText color='#fff'>renanincioprgmdr@gmail.com</SimpleText>
            </EmailBox>
            <PhoneBox>
            <Title color='#32E7F0'>Celular</Title>
            <SimpleText color='#fff'>(21) 97494-1136</SimpleText>
            </PhoneBox>
        </ContactContent>
    </ContactContainer>
    </>
  )
}
