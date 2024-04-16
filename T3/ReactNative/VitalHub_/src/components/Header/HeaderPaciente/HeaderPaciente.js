
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BoxUser, ContainerHeader, DataUser } from '../../Container/Style';
import { HeaderImage } from '../../Image/Style';
import { TextGray, UserTitle } from '../../Title/Style';

export const HeaderPaciente = () => {
    return(
        <ContainerHeader>
            <BoxUser>
                <HeaderImage
                    source={require('../../../assets/img/ImagePaciente.png')}
                    />
                <DataUser>
                    <TextGray>Bem vindo</TextGray>
                    <UserTitle>Richard Kosta</UserTitle>
                </DataUser>
            </BoxUser>
            <MaterialCommunityIcons name="bell" size={25} color='#ffffff' />
        </ContainerHeader>
    )
}