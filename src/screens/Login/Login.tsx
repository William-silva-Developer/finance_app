
import React from 'react';

import { SafeAreaView } from 'react-native';

import {
  Container,
  Contentheader,
  ContentBody,
  ContentFooter,
  Title,
  Description,
  ViewButton

} from './styles';

const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
          <Contentheader>
            <Title>Seja bem vindo(a) {'\n'} ao App Finance</Title>

            <Description>Entrar com redes sociais</Description>

            <ViewButton></ViewButton>
          </Contentheader>
          <ContentBody>

          </ContentBody>
          <ContentFooter>

          </ContentFooter>
      </Container>
    </SafeAreaView>
  )
}

export {Login}
