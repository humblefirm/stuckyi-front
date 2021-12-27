import Head from "next/head";
import { Tip } from "../components/Tip";
import { Container } from "../components/Container";

// A Smart Component from Framer
import Card from "https://framer.com/m/Card-Hz0R.js@J9UIwB5nPOhf4CSKQLLJ";

export default function Home() {
  return (
    <>
      <Head>
        <title>Framer</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <Card
          // Using default values:
          amount="5000"
          amount2="24%"
          amount3="3700원"
          // image={image}
          text="스투키 팀 짱짱"
        />
      </Container>
    </>
  );
}
