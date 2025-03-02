import Breadcrumb from "common/BreadCrumb";
import Header from "components/Header";
import Head from "next/head";

export default function AboutGiftedness() {
  return (
    <>
      <Head>
        <title>About Us | AceCogAT</title>
        <meta name="description" content="Learn more about AceCogAT and our mission." />
      </Head>
      <Header />
      <Breadcrumb
        title="About Giftedness"
        alt="Group of Students" />
    </>
  );
}
