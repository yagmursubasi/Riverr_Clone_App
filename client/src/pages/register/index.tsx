import { useState, type FormEvent } from "react";
import Input from "../../components/input";
import Toggle from "../../components/input/toggle";
import { Link } from "react-router-dom";
import type { IFormUser } from "../../types";

import { useAuth } from "../../context/authProvider";

const Register = () => {
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const { register } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //formdata örneği oluştur
    const formData = new FormData(e.target as HTMLFormElement);

    //bütün inputlardaki verileri nesne haline getir
    const newUser = Object.fromEntries(formData.entries());
    //satıcı hesabı bilgisini nesne içerisine kaydet
    (newUser as unknown as IFormUser).isSeller = isSeller;

    register(newUser as unknown as IFormUser);
  };

  return (
    <div className="max-w-[900px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 md:gap-10 md:pt-24"
      >
        <div>
          <h1 className="title">Create a New Account</h1>
          <Input label="Username" required={true} name="username" />
          <Input label="Email" required={true} name="email" />
          <Input
            label="Profile Photo"
            required={true}
            name="photo"
            type="file"
          />
          <Input label="Country" required={true} name="country" />
          <Input label="Password" required={true} name="password" />
        </div>
        <div>
          <h1 className="title">I Want to Become a Seller</h1>
          <Toggle setIsSeller={setIsSeller} />
          <Input
            label="Phone"
            type="number"
            name="phone"
            disabled={!isSeller}
            required={!isSeller}
          />
          <Input
            label="Description"
            type="textarea"
            name="desc"
            disabled={!isSeller}
            required={!isSeller}
          />
          <button type="submit" className="btn">
            Register
          </button>
          <p className="mt-4">
            Already have an account?
            <Link to="/login" className="ms-1 text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
