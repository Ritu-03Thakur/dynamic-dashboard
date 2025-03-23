"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiOutlineMail, AiOutlineWarning } from "react-icons/ai";
import { Button } from "./ui/button";
// import { CreateTokenByJwt } from "@/lib/jwtToken";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const passwordValidation = () => {
    const password = user.password;
    if (password.length < 6){
     return false ; 
    }
   return true ; 
  }
  const handleLogin = async () => {
    try {
      // const token = CreateTokenByJwt();
      localStorage.setItem("ACCESS_TOKEN", "token");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error while logging in:", error);
    }
  };

  return (
    <>
    <section className="p-2   min-h-screen">
        <div className="flex  items-center  justify-center  px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
            <div className="mb-2 flex justify-center"></div>
            <h2 className="text-primary text-center text-2xl  leading-tight">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-primary ">
              Don&apos;t have an account?{" "}
              <Link
                href={"/"}
                title=""
                className="text-primary transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <div className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-primary"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center p-1 pointer-events-none">
                      <AiOutlineMail className="w-4 h-4 text-cyan-100 dark:text-cyan-100" />
                    </div>
                    <input
                      className="flex h-10 w-full rounded-md border text-cyan-100 border-gray-300 bg-transparent px-6 py-2 text-sm placeholder:text-cyan-100 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-primary"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <Link
                      href="/"
                      className="text-primary text-sm hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </Link>
                  </div>
                  <div className="mt-2 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center p-1 pointer-events-none">
                      <BiSolidLockAlt className="w-4 h-4 text-cyan-100 dark:text-cyan-100" />
                    </div>
                    <input
                      className="flex h-10 w-full rounded-md border text-cyan-200 border-gray-300 bg-transparent px-6 py-2 text-sm placeholder:text-cyan-100 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="******"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                        
                      }
                    />
                  </div>
                    {
                      ! passwordValidation() && (
                        <div className="  flex items-center p-1 pointer
                        events-none text-red-500">
                          <AiOutlineWarning className="w-4 h-4" />
                          <span>Password must be at least 6 characters</span>
                          </div>
                      )
                    }
                </div>
                <div>
                  <Button
                    type="button"
                    className="button-primary"
                    onClick={handleLogin}
                    disabled = {!passwordValidation()}
                  >
                    SIGN IN
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default LoginPage;
