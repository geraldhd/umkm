import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

type UserType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginPage = () => {

  //ini backendnya sy msi pake template adit, biar da ntr gerald atur hehehe maap ge
  const router = useRouter();
  const [error, setError] = useState<{ message: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setError(undefined);
    setIsLoading(true);
    const Form = e.target as HTMLFormElement;
    const formData = new FormData(Form);
    const formDataObject = Object.fromEntries(formData.entries()) as UserType;

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(formDataObject),
    });
    const result = await response.json();

    if (response.status !== 200) {
      setError(result);
      setIsLoading(false);
      return;
    }

    router.push("/login");
    setIsLoading(false);
  };
  //ini backendnya sy msi pake template adit, biar da ntr gerald atur hehehe maap ge

  return (  
    <>
        <div className="flex justify-center items-center mt-5 mb-10">
          <Image
            src={"/ntbmall.png"}
            alt="left-arrow"
            width={180}
            height={80}
          />
        </div>

        <h1 className="mb-6 text-center text-3xl font-bold">Log In</h1>
        <form className="flex justify-center items-center flex-col gap-6" onSubmit={handleSignIn}>
          <div className="flex flex-col gap-1">
            <label htmlFor="signin" className="text-sm font-medium">
              Email
            </label>
            <input
              name="email"
              type="text"
              id="email"
              className="rounded-md p-3"
              placeholder="Masukkan email anda"
              required
              style={{ width: '400px', height: '50px', backgroundColor: '#F8F9FB', border: '2px solid #E5E5E7' }}
              // onFocus={(e) => e.target.style.borderColor = '#CF7E1A'}
              // onBlur={(e) => e.target.style.borderColor = '#E5E5E7'}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="signin" className="text-sm font-medium">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="rounded-md p-3"
              placeholder="Masukkan kata sandi anda"
              required
              style={{ width: '400px', height: '50px', backgroundColor: '#F8F9FB', border: '2px solid #E5E5E7' }}
              // onFocus={(e) => e.target.style.borderColor = '#CF7E1A'}
              // onBlur={(e) => e.target.style.borderColor = '#E5E5E7'}
            />
          </div>

          {/* {error?.message && (
            <p className="text-sm font-medium text-error">{error.message}</p>
          )} */}
          <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-md py-3 text-center font-semibold text-white"
            style={{backgroundColor: '#CF7E1A', width: '400px', height: '50px'}}
          >
            Log In
          </button>
          </div>
        </form>

        <div className="flex justify-center items-center mt-20">
          <Image
            src={"/garislogin.svg"}
            alt="left-arrow"
            width={1540}
            height={50}
          />
        </div>

    </>
  );
};

export default LoginPage;
