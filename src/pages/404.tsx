import Head from "next/head";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | AceCogAT</title>
        <meta name="description" content="Oops! The page you are looking for does not exist. Return to the homepage." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-7xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4 text-gray-700">
          Oops! The page you are looking for does not exist.
        </p>

        {/* Redirect Button */}
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-400 hover:text-black transition duration-300">
            Go to Homepage
          </button>
        </Link>
      </div>
    </>
  );
};

export default Custom404;
