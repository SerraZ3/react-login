import React from "react";

import Register from "../../components/users/Register";
import Main from "../templates/Main";

const RegisterUser = () => {
  return (
    <Main>
      <main>
        <section className="main-section">
          <h2 className="main-section__title">Página de Registro de Usuário</h2>
          <h3 className="main-section__subtitle">
            Preencha o formulário e cadastre-o clicando em 'Adicionar Usuário'
          </h3>
        </section>
        <Register />
      </main>
    </Main>
  );
};
export default RegisterUser;
