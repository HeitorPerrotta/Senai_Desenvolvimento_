import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #fafafa;
`

export const ContentInput = styled.View`
    flex-direction: row;
    justify-content: space-between;
    /* background-color: brown; */
    width: 90%;
`

export const UserBoxInput = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`

export const CardContainer = styled.View.attrs({
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10
})`
   margin-bottom: 12px;
    background-color: #ffffff;
    border-radius: 8px;
    width: 320px;
    /* height: 102px; */
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 10px;
`

export const InfoContainer = styled.View`
    position: absolute;
    top: 220px;
    /* left: 15%; */
    border-radius: 5px;
    background-color: #FFFFFF;
    height: 100px;
    width: 280px;
    justify-content: center;
    align-items: center;
    elevation: 10px;
`

export const ContentInfosDoc = styled.View`
    margin-left: 10px;
`

export const DoctorBox = styled.View`
    flex-direction: row;
    align-items: center;
`
export const ButtonsContainer = styled.View`
    flex-direction:row;
    margin-top: 38px;
    margin-bottom: 8px;
    width: 90%;
    justify-content: space-around;
`


