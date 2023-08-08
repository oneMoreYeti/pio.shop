import Btn from "./btn";

interface Props {
  name: string;
  url: string;
}
const pages: Props[] = [
  {
    name: "inicio",
    url: "/",
  },
  {
    name: "tienda",
    url: "/shop",
  },
  {
    name: "nosotros",
    url: "/about",
  },
  {
    name: "ofertas",
    url: "/offer",
  },
];

function Navbar() {
  return (
    <nav className="flex justify-between py-2.5 px-20 items-center bg-[var(--primary)] ">
      <div className="flex gap-2.5 items-center">
        <img src="/svg/icon.svg" alt="icon" />
        <span className="text-[36px] font-bold">Pio pio</span>
      </div>
      <ul className="flex gap-5">
        {pages.map((page) => (
          <a href={page.url}>
            <li className="p-2.5 min-w-[100px] text-center rounded-[10px] transition-all duration-300 hover:bg-[var(--primaryDark)]">
              {page.name}
            </li>
          </a>
        ))}
      </ul>
			<Btn name="iniciar sesion" url="/"/>
    </nav>
  );
}
export default Navbar;
