import Image from "next/image";
import React from "react";

const Follow = () => {
  return (
    <>
      <h1 className="text-center my-20 text-5xl font-bold ">
        Follow Me On Instagram
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10 p-5">
        <Image
          src="/Images/follow1.jpg"
          alt=""
          width={350}
          height={200}
          className="w-full "
        />
        <Image
          src="/Images/follow2.jpg"
          alt=""
          width={350}
          height={200}
          className="w-full "
        />
        <Image
          src="/Images/follow3.jpg"
          alt=""
          width={350}
          height={200}
          className="w-full "
        />
        <Image
          src="/Images/follow4.jpg"
          alt=""
          width={350}
          height={200}
          className="w-full "
        />
        <Image
          src="/Images/follow5.jpg"
          alt=""
          width={350}
          height={200}
          className="w-full "
        />
        <Image
          src="/Images/follow6.jpg"
          alt=""
          width={350}
          height={200}
          className="w-full "
        />
      </div>
    </>
  );
};

export default Follow;
