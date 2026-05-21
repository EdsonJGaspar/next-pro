import { ElementType } from "react";

export interface TituloProps {
  principal: string;
  secundario: string;
  icone: ElementType;
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex gap-4">
      <props.icone size={55} strokeWidth="1" />

      <div>
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold font-mono tracking-wider">
          {props.principal}
        </h1>
        <h2 className="text-zinc-200 font-light">{props.secundario}</h2>
      </div>
    </div>
  );
}
