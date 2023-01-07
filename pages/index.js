import React from "react";
import Image from "next/image";



const HelloWorld = () => {
  return (
    <>
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
