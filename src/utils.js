const setCredentials = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
  };
  
  const getCredentials = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    return token;
  };
  
  export { setCredentials, getCredentials };
  