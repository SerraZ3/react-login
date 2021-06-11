const key = "aula@token-2021";
export const getToken = localStorage.getItem(key);
export const setToken = (token) => localStorage.setItem(key, token);
export const removeToken = () => localStorage.removeItem(key);
