import Image from "next/image";

const Landing = () => {
  return (
    <div className='mx-auto flex-row items-center justify-center md:flex md:space-x-8'>
      <Image
        className='rounded-lg'
        src={"/landing.jpg"}
        width={400}
        height={400}
        alt='Landing'
      />
      <p className='text-4xl leading-snug md:text-6xl'>
        Vereine verbinden,
        <br /> Zukunft gestalten
      </p>
    </div>
  );
};

export default Landing;
