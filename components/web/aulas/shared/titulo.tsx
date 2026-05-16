import { ElementType } from "react";

export interface TituloProps {
  principal: string;
  secundario: string;
  icone: ElementType;
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex gap-4">
      <props.icone size={55} />

      <div>
        <h1>{props.principal}</h1>
        <h2>{props.secundario}</h2>
      </div>
    </div>
  );
}
