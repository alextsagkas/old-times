import Image from "next/image";

const Separator = () => {
  return (
    <Image
      height={5}
      width={200}
      src="/separatorIcon.png"
      alt="separator"
      className="my-6 mx-auto w-64"
    />
  );
};

export default Separator;
