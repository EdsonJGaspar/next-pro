import { ListarAula } from "@/components/web/aulas/shared/listar-aula";
import Titulo from "@/components/web/aulas/shared/titulo";
import { aulas } from "@/data/constants/aulas";
import { VideoIcon } from "lucide-react";

export default function AulaPage() {
  return (
    <div className="flex h-screen flex-col max-w-7xl mx-auto py-10 gap-10 bg-zinc-300">
      <Titulo
        principal="Lista de aulas"
        secundario="Aqui você encontrará todas as aulas disponíveis"
        icone={VideoIcon}
      />

      <ul className="w-full space-y-10 border">
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
