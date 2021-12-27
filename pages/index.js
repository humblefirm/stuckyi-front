import Head from "next/head";
import { Tip } from "../components/Tip";
import { Container } from "../components/Container";

// A Smart Component from Framer
import Login_page from "https://framer.com/m/Login-page-GVqL.js@JRhZ48vdG6r1sJg6RRAB";

export default function Home() {
  return (
    <>
      <Head>
        <title>Framer</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <Login_page />;
      </Container>
    </>
  );
}
