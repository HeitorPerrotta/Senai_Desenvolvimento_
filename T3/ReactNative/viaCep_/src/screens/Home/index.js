import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import {
  ContainerEstado,
  ContainerForm,
  ContainerInput,
  ContainerUf,
  ScrollForm,
} from "./style";
import axios from "axios";

export function Home() {
  //states - variaveis
  const [cep, setCep] = useState("00000-000");
  const [logradouro, setLogradouro] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [uf, setUf] = useState();

  useEffect(() => {
    async function GetEndereco() {
      const URL=`https://viacep.com.br/ws/${cep}/json/`
      const promise = await axios.get(URL);
      setCep (promise.data.cep);
       setLogradouro (promise.data.logradouro)
       setCidade (promise.data.localidade)
       setBairro (promise.data.bairro)
       setEstado (promise.data.uf)
       setUf (promise.data.uf)
    }
    GetEndereco();
  },[]);

  return (
    <ScrollForm>
      <ContainerForm>
        <BoxInput
          textLabel="informar CEP"
          placeholder="Cep..."
          editable={true}
          keyType="numeric"
          maxLength={9}
          fieldValue={cep}
          onChangeText={(tx) => {
            setCep(tx);
          }}
        />
        <BoxInput
          textLabel="Logradouro"
          placeholder="Logradouro..."
          editable={false}
          maxLength={50}
          fieldValue={logradouro}
          onChangeText={(tx) => {
            setLogradouro(tx);
          }}
        />
        <BoxInput
          textLabel="Bairro"
          placeholder="Bairro..."
          editable={false}
          maxLength={50}
          fieldValue={bairro}
          onChangeText={(tx) => {
            setBairro(tx);
          }}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          editable={false}
          maxLength={100}
          fieldValue={cidade}
          onChangeText={(tx) => {
            setCidade(tx);
          }}
        />

        <ContainerInput>
          <ContainerEstado>
            <BoxInput
              textLabel="Estado"
              placeholder="Estado..."
              editable={false}
              maxLength={20}
              fieldValue={estado}
              onChangeText={(tx) => {
                setEstado(tx);
              }}
            />
          </ContainerEstado>

          <ContainerUf>
            <BoxInput
              textLabel="UF"
              placeholder="UF"
              editable={false}
              maxLength={2}
              fieldValue={uf}
              onChangeText={(tx) => {
                setUf(tx);
              }}
            />
          </ContainerUf>
        </ContainerInput>
      </ContainerForm>
    </ScrollForm>
  );
}
