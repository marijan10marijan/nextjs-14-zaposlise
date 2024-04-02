import Image from "next/image";
import React from "react";

const SliderImage = ({ alt, src }) => {
  return <Image src={src} alt={alt} width={145} height={60} />;
};

export default SliderImage;
