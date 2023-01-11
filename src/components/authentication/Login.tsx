import { stripBasename } from "@remix-run/router";
import React, { FC, useState } from "react";
import { supabase } from "../../supabase-config";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function _handleSubmit(e: any): void {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Login</h2>
      <form action="/" onSubmit={_handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>Login</button>
      </form>
      <a href="/signup">Don't have an account? Sign up now</a>
    </div>
  );
};

export default Login;
