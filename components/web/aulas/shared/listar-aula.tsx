import AulaProps from "@/data/model/aula";

export function ListarAula({ nome, curso, duracao, status }: AulaProps) {
  return (
    <li className="border mx-auto flex items-center justify-between">
      <div>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold font-mono tracking-wider">
          {nome}
        </h2>
        <h3>{curso}</h3>
      </div>
      <div className="flex gap-5 items-center">
        {status === "publicada" && (
          <p className="bg-blue-500 p-2 rounded-md font-light">{status}</p>
        )}
        {status === "rascunho" && (
          <p className="bg-yellow-500 p-2 rounded-md font-light">{status}</p>
        )}
        {status === "desativada" && (
          <p className="bg-red-500 p-2 rounded-md font-light">{status}</p>
        )}

        <h3 className="font-bold text-xl font-mono">{duracao}</h3>
      </div>
    </li>
  );
}
