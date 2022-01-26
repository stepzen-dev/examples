import React from "react";
import { signIn } from "next-auth/client";
import { Box } from "@material-ui/core";

export default function login() {
  return (
    <Box display="flex" my={5} justifyContent="center" width="100%">
      <Box
        display="flex"
        justifyContent="center"
        width="50%"
        flexDirection="column"
      >
        <Box display="flex" my={5} justifyContent="center">
          Login Page
        </Box>
        <Box display="flex" justifyContent="center">
          Not signed in
        </Box>
        <button
          onClick={
            () => signIn("google", { callbackUrl: "http://localhost:3000/dashboard" }) //Define CallBackURL Dashboard
          }
        >
          Sign in
        </button>
      </Box>
    </Box>
  );
}
