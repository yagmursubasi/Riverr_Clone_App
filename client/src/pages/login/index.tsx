import { Link } from "react-router-dom";
import Input from "../../components/input";
import type { FormEvent } from "react";
import type { ILoginUser } from "../../types";
import { useAuth } from "../../context/authProvider";

const Login = () => {
  const { login } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const user = Object.fromEntries(formData.entries());

    login(user as unknown as ILoginUser);
  };

  return (
    <div className="pt-24 max-w-[500px] mx-auto sm:min-w-[400px] max-sm:w-full ">
      <h1 className="title mb-10">Welcome back! Sign in</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Name" name="username" required />
        <Input label="Password" name="password" required />

        <button className="btn">Sign in</button>
      </form>
      <p className="mt-5 text-gray-500">
        Don’t have an account?
        <Link to="/register" className="ms-1 text-blue-500">
          Join
        </Link>
      </p>
    </div>
  );
};

export default Login;
