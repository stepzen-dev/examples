import { Box } from "@material-ui/core";
import { signOut } from "next-auth/client";
import React from "react";

export default function notauthorized() {
  return (
    <Box display="flex" my={5} justifyContent="center" width="100%">
      <Box
        display="flex"
        justifyContent="center"
        width="50%"
        flexDirection="column"
      >
        <Box display="flex" justifyContent="center">
          Not authorized.
        </Box>
        <button
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
        >
          Sign out
        </button>
      </Box>
    </Box>
  );
}
