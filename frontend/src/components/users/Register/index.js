import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/users", {
        nome,
        sobrenome,
        email,
        senha,
      });
      history.push("/users");
      console.log(response);
    } catch (error) {
      if (error.response.data) alert(error.response.data.message);
      else alert("Ops, deu ruim");
    }
  };
  return (
    <section id="addUserSection" className="register-user">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__input-container">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            required
            placeholder="Benedito"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="sobrenome">Sobrenome</label>
          <input
            type="text"
            name="sobrenome"
            id="sobrenome"
            required
            placeholder="Calixto"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="bene@dito.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            required
            placeholder="Senha123"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="form__btns">
          <button>Adicionar Usuário</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
