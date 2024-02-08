import Image from "next/image";
import { profileSidebarItems } from "@/constants";

const NavBar = ({activeRoute}) => {

    return (
      <nav className="w-full bg-green_700 text-white ">
        <div className="max-width padding-x flex-between">
        <h1 className=" font-bold md:text-[3rem] text-[1.5rem]">{profileSidebarItems.find(item => item.route === activeRoute)?.title}</h1>
        <Image src="/assets/image/brd-book.png" alt="header image" height={400} width={400} className="md:w-36 w-16"/>
        </div>
      </nav>
    );
  };

export default NavBar