import React, { useEffect, useState } from "react";
import List from "../../components/users/List";
import Main from "../templates/Main";
import api from "../../services/api";

const ListUser = () => {
  const [data, setData] = useState({ users: [] });

  useEffect(() => {
    // fetch("/users")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));

    // axios.get("/users").then((res) => setData(res.data));
    const getData = async () => {
      try {
        const response = await api.get("/users");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <Main>
      <section className="main-section">
        <h2 className="main-section__title">Página de usuários</h2>
        <h3 className="main-section__subtitle">
          Confira a seguir os usuários cadastrados em nosso banco de dados
        </h3>
      </section>
      <List users={data.users} />
    </Main>
  );
};
export default ListUser;
