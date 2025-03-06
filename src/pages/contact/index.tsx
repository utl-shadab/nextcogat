import Breadcrumb from "common/BreadCrumb";
import Footer from "common/Footer";
import ContactForm from "components/ContactForm";
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
                title="Contact Us"
                subtitle={"Mail us : support@coagatpractice.ai"}
                image="/cogatImage/bnrpic_contact-us.png"
                alt="Group of Students" />
                <ContactForm/>
                <Footer/>
        </>
    );
}
