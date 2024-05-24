import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Hero from "./component/hero/Hero";
import Camp from "./component/camp/Camp";
import Skills from "./component/Skills/Skills";
import Work_Exprience from "./component/Work_Experience/Work_Exprience";
import Contact_me from "./component/Contact_me/Contact_me";

export default function Home() {
  return (
    <>
      <Hero />

      <Skills />
      <Work_Exprience />
      {/* <Contact_me /> */}
      {/* <Camp /> */}
    </>
  );
}
