import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="xs:hidden flex px-5 py-3 gradient-vertical">
      <Link href="/">
        <Image src="/icons/logo.svg" width={40} height={40} alt="site-logo" />
      </Link>
    </header>
  );
};

export default Header;
