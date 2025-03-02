import Breadcrumb from "common/BreadCrumb";
import Header from "components/Header";
import Head from "next/head";

export default function contact() {
    return (
        <>
            <Head>
                <title>About Us | AceCogAT</title>
                <meta name="description" content="Learn more about AceCogAT and our mission." />
            </Head>
            <Header />
            <Breadcrumb
                title="contact"
                subtitle={"Mail us : support@coagatpractice.ai"}
                image="/cogatImage/children.png"
                alt="Group of Students" />
        </>
    );
}
