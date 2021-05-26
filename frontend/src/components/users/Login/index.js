import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleSubmit = () => {};
  return (
    <section id="addUserSection" className="register-user">
      <form className="form" onSubmit={handleSubmit}>
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
          <button>Entrar</button>
        </div>
      </form>
    </section>
  );
};
export default Login;
