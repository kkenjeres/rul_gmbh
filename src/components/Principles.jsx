import React from "react";
import Image from "next/image";
import track from "../../public/images/track.svg";
const Principles = () => {
  return (
    <section className="my-20">
      <div className="m-auto w-[80%] text-center">
        <h2 className="mb-10 text-[40px] font-spaceGrotesk">
          Wissen Sie, wie beeindruckend eine makellose Reinigung sein kann?
          <br />
          Dieses Erlebnis ist unser tägliches Bestreben.
        </h2>
        <Image
          src={track}
          alt="track"
          width={200}
          height={200}
          className=" w-[80%] m-auto"
        />
      </div>
    </section>
  );
};

export default Principles;
