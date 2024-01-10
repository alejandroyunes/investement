"use client"

import { signIn } from "next-auth/react"
import React, { useRef } from "react"

const LoginPage = () => {
  const userName = useRef("")
  const pass = useRef("")

  const onSubmit = async () => {

    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  }
  return (
    <div>
      login page
    </div>

  )
}

export default LoginPage