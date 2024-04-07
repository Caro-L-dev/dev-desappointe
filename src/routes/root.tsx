import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <nav>
      <ul className="flex justify-center items-center underline cursor-pointer mt-3">
        <li className="mx-4">
          <Link to={`/`}>Acceuil</Link>
        </li>
        <li className="mx-4">
          <Link to={`/lost`}>Je suis perdu</Link>
        </li>
        <li className="mx-4">
          <Link to={`/:code`}>http code</Link>
        </li>
        <li className="mx-4">
          <Link to={`*`}>404</Link>
        </li>
      </ul>
      <div id="detail">
        <Outlet />
      </div>
    </nav>
  );
}
