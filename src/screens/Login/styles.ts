
import styled from 'styled-components/native';

/*
OBS:
npm add react-native-responsive-fontsize react-native-iphone-x-helper
O responsive fontsize trabalha com a responsabilidade das fontes. 
Dependendo do tamanho do aparelho a tamanho da fonte poderá aumentar ou baixar.
Como usar:
${}
 */
import { RFValue } from 'react-native-responsive-fontsize';



export const Container = styled.View`
    padding: ${RFValue(10)}px;
  
`;

export const Contentheader = styled.View`
    padding: ${RFValue(20)}px;
    justify-content: center;
    align-items: center;

    background-color: tomato;
`;

export const ContentBody = styled.View`
`;

export const ContentFooter = styled.View`
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(25)}px;
    margin-top: ${RFValue(40)}px;
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description  = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
`;
export const ViewButton = styled.View`
`;
