import Image from "next/image";
import { profileSidebarItems } from "@/constants";
import Link from "next/link";

const SideBar = ({ activeRoute, setActiveRoute }) => {
  const handleNavClick = (route) => {
    setActiveRoute(route);
  };

  // get img url from backend
  let imgUrl = "";

  return (
    <main className="box-shadow2 lg:w-[18rem] w-full rounded-md md:px-5 px-2 md:py-10 py-5 mb-8 flex flex-col">
      <div className="flex-center flex-col my-8">
        <Image
          src={imgUrl ? imgUrl : '/assets/image/no-user.jpg'}
          alt="header image"
          height={1000}
          width={1000}
          className=" rounded-full bg-slate-400 w-32 h-32 object-cover"
        />
        <h2 className="mt-5 font-bold text-[1.5rem]">Jhon Doe</h2>
        <span className="">jhondoe@mail.com</span>
      </div>
      {profileSidebarItems.map((item, index) => (
        <Link key={index} href={item.route} onClick={() => handleNavClick(item.route)}>
        <div
          className={`flex rounded-md px-6 py-2 mt-1 hover:bg-green_700 hover:text-white cursor-pointer transition-all duration-300 ${
            item.route === activeRoute
              ? "bg-green_700 text-white"
              : "bg-transparent text-black"
          }`}
          >
          <div className="relative top-[3px]">{item.icon}</div>
          <span className="ml-3">{item.title}</span>
        </div>
        </Link>
      ))}
    </main>
  );
};

export default SideBar;
