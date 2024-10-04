import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src={"/assets/crefilogo2.png"}
      width={166}
      height={50}
      alt={"logo"}
    />
  );
};
