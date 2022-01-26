import React from "react";
import Image from "next/image";
import { Box } from "@material-ui/core";
import Link from "next/link";

function Card({ image, text, hrefTo }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      mt={4}
      width="100%"
      padding="3vw"
    >
      <Link
        id="fill-out-form"
        href={hrefTo}
        style={{ color: "white", textDecoration: "none" }}
      >
        <Image width="100%" height="100%" src={image} />
      </Link>
      <div>{text}</div>
    </Box>
  );
}

export default Card;
