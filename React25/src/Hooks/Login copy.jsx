import React, { useState } from "react";

let Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });
  let emailHandler = (event) => {
    setUser({
      ...user,
      email: event.target.value,
    });
  };
  let passwordHandler = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  };
  return (
    <>
      <pre>{JSON.stringify(user)}</pre>
      <form>
        <div className="form-group">
          <label for="inputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={emailHandler}
          />
        </div>
        <div className="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            onChange={passwordHandler}
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
