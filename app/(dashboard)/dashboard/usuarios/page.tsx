import Link from "next/link";

interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}
[];

export default async function UsuariosPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Falha na busca dos usuários");
  }
  const users: UserProps[] = await response.json();

  return (
    <main>
      <h1>Pagina de usuários</h1>

      <section className="mt-10">
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link href={`/dashboard/usuarios/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
