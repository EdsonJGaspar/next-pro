import AulaProps from "@/data/model/aula";
import { formatarDuracao } from "@/data/utils/duracao";

export function ListarAula({ nome, curso, duracao, status }: AulaProps) {
  return (
    <li className="flex items-center justify-between bg-zinc-800 hover:bg-zinc-900 cursor-pointer border px-5 py-2 rounded-md transition-all duration-300">
      <div>
        <h2 className="text-base md:text-lg lg:text-xl font-semibold font-mono tracking-wide">
          {nome}
        </h2>
        <h3 className="text-zinc-400">{curso}</h3>
      </div>
      <div className="flex gap-5 items-center justify-center p-2">
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

        <h3 className="font-bold text-xl font-mono">
          {formatarDuracao(duracao)}
        </h3>
      </div>
    </li>
  );
}
