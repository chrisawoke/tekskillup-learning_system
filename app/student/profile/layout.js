'use client'

import { useState } from "react";
import NavBar from "./components/ProfileNavBar";
import SideBar from "./components/ProfileSideBar";

export default function ProfileLayout({ children }) {

  const initialActiveRoute = "/student/profile/my-courses";
  const [activeRoute, setActiveRoute] = useState(initialActiveRoute);

    return (
      <main>
        <NavBar activeRoute={activeRoute}/>
       <div className="max-width flex lg:flex-row flex-col justify-between items-start padding-x py-10 gap-7">
        <SideBar activeRoute={activeRoute} setActiveRoute={setActiveRoute}/>
        <div className="xl:w-[80rem] lg2:w-[70rem] lg:w-[55rem] w-[100%] box-shadow2 rounded-md md:p-8 p-4">
        {children}
        </div>
       </div>
      </main>
    );
  };