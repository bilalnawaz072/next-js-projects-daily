import Head from "next/head";
import Header from "./Header";
import Banner from "./Banner";
import FetchData from "./FetchData";
export default function Base() {
 
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Banner />
        <FetchData />
      </main>
    </div>
  );
}
