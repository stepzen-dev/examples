import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/client";
import React, { useEffect } from "react";
import { Box, CircularProgress } from "@material-ui/core";
export const Auth = ({ children }) => {
  const [session, loading] = useSession();
  const hasUser = !!session?.user;
  const router = useRouter();

  useEffect(() => {
    if (!loading && !hasUser) {
      router.push("/login");
    }
  }, [loading, hasUser]);
  if (loading || !hasUser) {
    return (
      <Box display="flex" justifyContent="center">
        <div>
          Loading...
          <CircularProgress />
        </div>
      </Box>
    );
  }
  return children;
};
