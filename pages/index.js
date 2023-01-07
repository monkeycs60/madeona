import React from "react";
import Head from "next/head";
import Image from "next/image";

const HelloWorld = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome to Madeona Photography, featuring the stunning and creative work of freelance photographer Madeona. Take a look at our galleries to see a selection of Madeona's best photos, or get in touch to discuss your own photography needs."
        />
        <title>Madeona Photography</title>
      </Head>
      <h1>Hello World</h1>
      <div className="container w-[100vw] h-[80vh] relative">
        <Image
          src="/chien-mignon-compressed2.webp"
          alt="Picture of the author"
          priority
          fill
        />
      </div>
      <p>hello la famille</p>
      <p>
        Coucou les bouffons Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Molestias vitae facilis nihil ad eligendi ipsam aliquid numquam,
        provident natus labore unde pariatur tempore iste quasi delectus ullam
        ipsum laborum placeat?
      </p>
      <p>hello à tous</p>
    </>
  );
};

export default HelloWorld;
