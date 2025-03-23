"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {  useRouter } from "next/navigation";
import { CreateTokenByJwt } from "@/lib/jwtToken";




const LoginPage = () => {
  const router = useRouter() ; 
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    
      try {
        if(user.email ){
          const token = CreateTokenByJwt( user.email);
      localStorage.setItem("ACCESS_TOKEN", token);
      router.push("/dashboard") ; 
         }
      } catch (error) {
        console.error("Error While Login " , error)
      }
    
  };

  return (
    <>
    
    <div className=" flex items-center justify-center flex-col gap-3 p-5 ">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="******"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          minLength={6}
        />
      </div>

      <Button onClick={handleLogin}>Login </Button>
    </div>
    </>
  );
};

   
export default LoginPage;
