import styled from "styled-components";

export const BoxFooter = styled.View.attrs({
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5
})
    `
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-evenly;
    /* margin-top: 25px; */
    background-color: white;
    position: absolute;
    bottom: 0;

    /* border-top-width: 2px; */
    border-color: #607EC5;
`

export const OptionsFooter = styled.View`
    /* background-color: red; */
    justify-content: center;
    align-items: center;    
`

export const OptionsFooterSelected = styled(OptionsFooter)`
   border-top-width: 2px;
    border-color: #607EC5;
`

export const FooterText = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 12px;
`

export const FooterTextSelected = styled(FooterText)`
   color: #607EC5;
`