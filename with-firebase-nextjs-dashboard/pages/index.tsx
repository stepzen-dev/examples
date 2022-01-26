import { Box } from "@material-ui/core";
import Card from "../components/Card";
import Header from "../components/Header";
import { signOut, useSession } from "next-auth/client";
import { searchByOwnerEmail } from "../components/lib/dbUtil";
import { useState } from "react";
import router from "next/router";

function Home() {
  const [session] = useSession();
  const [verified, setVerified] = useState(false);
  async function validateUser(email): Promise<boolean> {
    const result = await searchByOwnerEmail(email);

    if (result) {
      setVerified(true);
      return true;
    } else {
      router.push("/notauthorized");
    }
  }

  if (session) {
    validateUser(session.user.email);
    if (verified) {
      return (
        <div>
          <Header />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="3vw"
            ml="5%"
            mr="5%"
          >
            <Card
              image={"/images/form.png"}
              text={"Check In"}
              hrefTo="/check-in"
            />
          </Box>
          <Box display="flex" justifyContent="center" ml="5%" mr="5%">
            <button onClick={() => signOut()}>Sign Out</button>
          </Box>
        </div>
      );
    }
  } else {
    router.push("/notauthorized");
  }
  return <></>;
}

Home.auth = true;

export default Home;
