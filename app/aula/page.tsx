import { FiltrarStatus } from "@/components/web/aulas/filtrar-status";
import { ListarAula } from "@/components/web/aulas/shared/listar-aula";
import Titulo from "@/components/web/aulas/shared/titulo";
import { aulas } from "@/data/constants/aulas";
import { ArrowLeft, VideoIcon } from "lucide-react";
import Link from "next/link";

export default function AulaPage() {
  return (
    <div className="h-screen max-w-7xl mx-auto flex-col flex gap-10">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Link href={"./"} className=" w-fit">
            <ArrowLeft stroke-width="2" size={30} />
          </Link>

          <Titulo
            principal="Lista de aulas"
            secundario="Aqui você encontrará todas as aulas disponíveis"
            icone={VideoIcon}
          />
        </div>
        <FiltrarStatus />
      </div>

      <ul className="w-full space-y-5">
        {aulas.map((aula) => {
          return (
            <ListarAula
              nome={aula.nome}
              curso={aula.curso}
              duracao={aula.duracao}
              status={aula.status}
              key={aula.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
