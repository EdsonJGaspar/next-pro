import Link from "next/link";

export default function UsuariosPage() {
  return (
    <main>
      <h1>Pagina de usuários</h1>

      <div className="mt-10">
        <ul>
          <li>
            <Link href={"/dashboard/usuarios/1"}>Usuário 1</Link>{" "}
          </li>
          <li>
            <Link href={"/dashboard/usuarios/2"}>Usuário 2</Link>{" "}
          </li>
          <li>
            <Link href={"/dashboard/usuarios/3"}>Usuário 3</Link>{" "}
          </li>
          <li>
            <Link href={"/dashboard/usuarios/4"}>Usuário 4</Link>{" "}
          </li>
        </ul>
      </div>
    </main>
  );
}
