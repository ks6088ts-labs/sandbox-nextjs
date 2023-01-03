import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const envSample: NextPage = (props) => {
  console.log(`process.env.TEST`, process.env.TEST);
  console.log(`process.env.NEXT_PUBLIC_TEST`, process.env.NEXT_PUBLIC_TEST);
  return (
    <div>
      <Head>
        <title>Incremental Static Regeneration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Environment variables</p>
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
        {/* <p>{process.env.TEST}</p> */}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default envSample;
