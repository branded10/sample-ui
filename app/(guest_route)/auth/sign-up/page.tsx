"use client";

import InputField from "@/components/InputField";
import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, password } = userInfo;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const res = await fetch("/api/auth/users", {
      method: "POST",
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
    console.log(res);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="w-1/3" onSubmit={handleSubmit}>
        <InputField
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button
          className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          type="submit"
          disabled={isLoading}
          style={{ opacity: isLoading ? 0.5 : 1 }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
