import Head from "next/head";
import { Tip } from "../components/Tip";
import { Container } from "../components/Container";

// A Smart Component from Framer
import Login_page from "https://framer.com/m/Login-page-1NYj.js@7Q8AMAVjvG0nWsyZV3A3";

export default function Home() {
  return (
    <>
      <Head>
        <title>Framer</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <Login_page
          // Using default values:
          label="이름을 입력해주세요."
        />
        ;
      </Container>
    </>
  );
}
