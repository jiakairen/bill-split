import { stripBasename } from "@remix-run/router";
import React, { FC, useState } from "react";
import { supabase } from "../../supabase-config";

const Signup: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [name, setName] = useState<string>("");

  function _handleSubmit(e: any): void {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Sign up</h2>
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
        <input
          type="password"
          name="password-confirmation"
          placeholder="Password again"
          onChange={(e) => setPasswordRepeat(e.target.value)}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button>Sign Up</button>
      </form>
      <a href="/">Already have an account? Login now</a>
    </div>
  );
};

export default Signup;
