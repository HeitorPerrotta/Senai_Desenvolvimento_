import { NomeEspecialidade, SelecionarMedicoContainer } from "../Container/style";
import { ImagePerfilMedico } from "../Image/Image";
import { Especialidade, NomeMedico } from "../Text/style";

export const CardMedico = ({ name, profissao, source }) => {
  return (
    // Container
    <SelecionarMedicoContainer>
      {/* imagem do perfil */}
      <ImagePerfilMedico source={source} />

      {/* container do nome e especialidade  */}
      <NomeEspecialidade>
        {/* nome do medico */}
        <NomeMedico>{name}</NomeMedico>

        {/* especialidade do medico */}
        <Especialidade>{profissao}</Especialidade>
      </NomeEspecialidade>
    </SelecionarMedicoContainer>
  );
};
