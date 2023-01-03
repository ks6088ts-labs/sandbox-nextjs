import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type ISRProps = {
  message: string;
};

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Head>
        <title>Incremental Static Regeneration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>This page is using Incremental Static Regeneration</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `run getStaticProps at ${timestamp}`;
  console.log(message);
  return {
    props: {
      message,
    },
    revalidate: 10,
  };
};

export default ISR;
