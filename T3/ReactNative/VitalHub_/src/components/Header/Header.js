import { BoxUser,  ContainerHeader,  DataUser } from '../Container/Style'
import { HeaderImage } from '../Image/Style';
import { TextGray, UserTitle } from '../Title/Style'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Header = () => {
    return(
        <ContainerHeader>
            <BoxUser>
                <HeaderImage
                    source={require('../../../src/assets/img/Chezzy.jpeg')}
                    />
                <DataUser>
                    <TextGray>Bem vindo</TextGray>
                    <UserTitle>Dr. Chezzy</UserTitle>
                </DataUser>
            </BoxUser>
            <MaterialCommunityIcons name="bell" size={25} color='#ffffff' />
        </ContainerHeader>
    )
}