export default function Root() {
  return (
    <nav className="my-6">
      <ul className="flex justify-center underline cursor-pointer">
        <li className="mx-4">
          <a href={`/`}>Acceuil</a>
        </li>
        <li className="mx-4">
          <a href={`/lost`}>Je suis perdu</a>
        </li>
        <li className="mx-4">
          <a href={`/$http_code`}>Http code</a>
        </li>
        <li className="mx-4">
          <a href={`*`}>404</a>
        </li>
      </ul>
    </nav>
  );
}
