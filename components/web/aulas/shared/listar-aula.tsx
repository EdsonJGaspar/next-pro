import AulaProps from "@/data/model/aula";

export function ListarAula({ nome, curso, duracao, status }: AulaProps) {
  return (
    <li className="flex items-center justify-between bg-zinc-900 border">
      <div>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold font-mono tracking-wider">
          {nome}
        </h2>
        <h3 className="text-zinc-400">{curso}</h3>
      </div>
      <div className="flex gap-5 items-center">
        {status === "publicada" && (
          <p className="bg-blue-500 border px-2.5 rounded-md font-light">
            {status}
          </p>
        )}
        {status === "rascunho" && (
          <p className="text-yellow-500  border px-2.5 rounded-md font-light">
            {status}
          </p>
        )}
        {status === "desativada" && (
          <p className="bg-red-500 border px-2.5 rounded-md font-light">
            {status}
          </p>
        )}

        <h3 className="font-bold text-xl font-mono">{duracao}</h3>
      </div>
    </li>
  );
}
