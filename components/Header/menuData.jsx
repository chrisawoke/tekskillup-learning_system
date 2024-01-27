
const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Courses",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Courses",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Courses",
        path: "/vision",
        newTab: false,
      },
      {
        id: 43,
        title: "Courses",
        path: "/values",
        newTab: false,
      },
      {
        id: 44,
        title: "Board of Directors",
        path: "/board",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "About us",
    newTab: false,
    path: '/about'
  },
  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: '/contact'
  },
];
export default menuData;
