import Breadcrumb from "common/BreadCrumb";
import Header from "components/Header";
import Lumina from "common/Lumina";
import Footer from "common/Footer";

import Head from "next/head";

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us | AceCogAT</title>
                <meta name="description" content="Learn more about AceCogAT and our mission." />
            </Head>
            <Header />
            <Breadcrumb
                title="About Us "
                image="/cogatImage/aboutcogatchildrens.png"
                alt="Group of Students"
                size="large"
                />
          <Lumina/>
         
            <Footer/>
               
        </>
    );
};

export default AboutUs;
