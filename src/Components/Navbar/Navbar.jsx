import Linkss from "../Linkss/Linkss";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 1, path: "/about", name: "About" },
    { id: 1, path: "/services", name: "Services" },
    { id: 1, path: "/contact", name: "Contact" },
    { id: 1, path: "*", name: "Not Found" },
  ];

  return (
    <nav className="bg-amber-400">
      {/* <h2>My nav</h2> */}
      <ul className="flex gap-8 text-2xl">
        {routes.map((routeli) => {
          return <Linkss key={routeli.id} routeli={routeli}></Linkss>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
