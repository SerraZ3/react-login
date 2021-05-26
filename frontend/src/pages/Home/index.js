import React from "react";
import Main from "../templates/Main";

const Home = () => {
  return (
    <Main>
      <section className="main-section">
        <h2 className="main-section__title">Página Principal</h2>
        <h3 className="main-section__subtitle">
          Bem vindo à prática de Sequelize #02!
        </h3>
        <p className="main-section__description">
          Nesse repositório criaremos um projeto simples, onde poderemos criar,
          consultar, editar e excluir usuários a partir de um banco de dados
          MySQL.
        </p>
        <p className="main-section__description">
          O intuito é entendermos como conectar o backend (node.js) a um banco
          de dados, realizar o CRUD (Create, Read, Update e Delete) através do
          Sequelize e utilizarmos queries SQL baseadas em modelos para
          executarmos as ações (Model Queries).
        </p>
      </section>
      <div className="cta">
        <a
          href="/users"
          rel="next"
          target="_self"
          title="Ver listagem de usuários"
          className="cta__btn"
        >
          Ver Lista de Usuários
        </a>
      </div>
    </Main>
  );
};
export default Home;
