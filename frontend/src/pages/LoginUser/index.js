import React from "react";

import Login from "../../components/users/Login";
import Main from "../templates/Main";

const LoginUser = () => {
  return (
    <Main>
      <section className="main-section">
        <h2 className="main-section__title">Página de Login</h2>
        <h3 className="main-section__subtitle">
          Preencha o formulário para entrar
        </h3>
      </section>
      <Login />
    </Main>
  );
};
export default LoginUser;
