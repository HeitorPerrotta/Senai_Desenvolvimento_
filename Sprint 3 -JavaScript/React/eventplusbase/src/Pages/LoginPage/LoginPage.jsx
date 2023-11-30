import React, { useState, useEffect, useContext } from "react";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import logo from "../../assets/images/logo-pink.svg";
import { Input, Button } from "../../Components/FormComponents/FormComponents";
import api from "../../Services/Service";

import loginImage from "../../assets/images/login.svg";

import "./LoginPage.css";
import { UserContext, userDecodeToken } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: "", senha: "" });
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    if(userData.name) navigate("/")
  })

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (user.email.trim().length >= 3 && user.senha.trim().length >= 3) {
      //chamar a Api
      try {
        const promise = await api.post("/Login", {
          email: user.email,
          senha: user.senha,
        });
        console.log(promise.data.token);

        const userFullToken = userDecodeToken(promise.data.token);
        setUserData(userFullToken);//guardamentação dos dados decodificados (playload)
        localStorage.setItem("token", JSON.stringify(userFullToken));
        navigate("/")
      } catch (error) {
        alert(
          "Usuário ou Senha inválidos ou conexão com a internet foi interrompida"
        );

      }
    } else {
      alert("Preencha os campos corretamente");
    }
  }
  return (
    <div className="layout-grid-login">
      <div className="login">
        <div className="login__illustration">
          <div className="login__illustration-rotate"></div>
          <ImageIllustrator
            imageRender={loginImage}
            altText="Imagem de um homem em frente de uma porta de entrada"
            additionalClass="login-illustrator "
          />
        </div>

        <div className="frm-login">
          <img src={logo} className="frm-login__logo" alt="" />

          <form className="frm-login__formbox" onSubmit={handleSubmit}>
            <Input
              additionalClass="frm-login__entry"
              type="email"
              id="login"
              name="login"
              required={true}
              value={user.email}
              placeholder="Email"
              manipulationFunction={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />
            <Input
              additionalClass="frm-login__entry"
              type="password"
              id="senha"
              name="senha"
              required={true}
              value={user.senha}
              onChange={(e) => {}}
              placeholder="*****"
              manipulationFunction={(e) => {
                setUser({
                  ...user,
                  senha: e.target.value.trim(),
                });
              }}
            />

            <a href="" className="frm-login__link">
              Esqueceu a senha?
            </a>

            <Button
              textButton={"Login"}
              id="btn-login"
              name="btn-login"
              type="submit"
              className="frm-login__button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
