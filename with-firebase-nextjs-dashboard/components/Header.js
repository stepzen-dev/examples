import React from "react";
import Image from "next/image";
import Banner from "./Banner";
import { Box } from "@material-ui/core/";
import Head from "next/head";

function Header() {
  return (
    <>
      <Head>
        <title>Firebase App</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Box display="flex" flexDirection="column">
        <Banner />
        <Box display="flex" justifyContent="center" mr="5%" ml="5%">
          <Image
            src="/images/firebase.png"
            alt="firebase"
            layout="intrinsic"
            width={180}
            height={180}
          />
        </Box>
      </Box>
    </>
  );
}

export default Header;
