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

       <div className="m-10 flex w-[50vw] h-[40vh] relative"> 
        <Image
          src="/chien-mignon-compressed1-256px.png"
          alt="little dog"
          priority={true}
          width="100"
          height="100"
        />
      </div>


       {/* <div className="m-10 flex xl:hidden 2xl:hidden w-[50vw] h-[40vh] relative"> 
        <Image
          src="/chien-mignon-compressed1-256px.png"
          alt="little dog"
          priority={true}
          width="100"
          height="100"
        />
      </div>
      <div className="m-10 hidden xl:flex 2xl:flex w-[30vw] h-[50vh] relative">
        <Image
          src="/chien-mignon-compressed1-2048px.png"
          alt="big one"
          priority={true}
          width="1200"
          height="300"
        />
      </div>  */}


  

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
