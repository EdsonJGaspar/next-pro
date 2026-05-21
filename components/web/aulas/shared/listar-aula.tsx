import AulaProps from "@/data/model/aula";
import { formatarDuracao } from "@/data/utils/duracao";
import { AulaStatus } from "./aula-status";

type ListarAulaProps = Omit<AulaProps, "id">;

export function ListarAula({ nome, curso, duracao, status }: ListarAulaProps) {
  return (
    <li className="flex items-center justify-between bg-zinc-800 hover:bg-zinc-900 cursor-pointer border px-5 py-2 rounded-md transition-all duration-300">
      <div>
        <h2 className="text-base md:text-lg lg:text-xl font-semibold font-mono tracking-wide">
          {nome}
        </h2>
        <h3 className="text-zinc-400">{curso}</h3>
      </div>
      <div className="flex items-center gap-4">
        <AulaStatus status={status} />
        <h3 className="font-bold text-xl font-mono w-40 text-right">
          {formatarDuracao(duracao)}
        </h3>
      </div>
    </li>
  );
}
