import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Link href={"/"} className='flex items-center space-x-2'>
      <Image src={"/logo.png"} width={40} height={40} alt='ClubVerse Logo' />
      <h1 className='text-2xl font-medium'>ClubVerse</h1>
    </Link>
  );
};

export default Header;
