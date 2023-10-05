import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="mx-auto p-3 max-w-lg"> 
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" className="border p-3 rounded-lg " id="username"/>
        <input type="email" placeholder="Email" className="border p-3 rounded-lg " id="email"/>
        <input type="password" placeholder="Password" className="border p-3 rounded-lg " id="password"/>
        <button className="bg-slate-700 uppercase p-2 rounded-lg text-white hover:opacity-95 disabled:opacity-80 mb-2">Sign Up</button>
      </form>
      <div className="flex gap-2">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-600 font-bold p-1">Sign in</span>
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
