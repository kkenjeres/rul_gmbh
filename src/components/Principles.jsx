import React from "react";
import Image from "next/image";
import track from "../../public/images/track.svg";
const Principles = () => {
  return (
    <section className="my-20">
      <div className="m-auto w-[80%] text-center">
        <h2 className="mb-10 text-[40px]">
          Wissen Sie, wie beeindruckend eine makellose Reinigung sein kann?
          Dieses Erlebnis ist unser tägliches Bestreben.
        </h2>
        <Image
          src={track}
          alt="track"
          width={300}
          height={300}
          className=" w-full"
        />
      </div>
    </section>
  );
};

export default Principles;
