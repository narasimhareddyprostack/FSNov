import React, { useState } from "react";
let Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });
  let inputHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  let getLoginDetaisl = (event) => {
    console.log(user);
  };
  return (
    <>
      <pre>{JSON.stringify(user)}</pre>
      <form onSubmit={getLoginDetaisl}>
        <div className="form-group">
          <label for="inputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            onChange={inputHandler}
            className="form-control"
            placeholder="Password"
            value={user.password}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
};
export default Login;
