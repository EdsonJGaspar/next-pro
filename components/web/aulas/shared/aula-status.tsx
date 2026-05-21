import AulaProps from "@/data/model/aula";
import { Circle, CircleDot } from "lucide-react";

export type AulaStatusProps = {
  status: AulaProps["status"];
};

export function AulaStatus({ status }: AulaStatusProps) {
  return (
    <div className="flex gap-5 items-center p-2">
      {status === "publicada" && (
        <p className="bg-blue-500 border px-4 py-2 rounded-md font-light flex items-center gap-2">
          <span>
            <Circle size={15} />
          </span>
          <span>{status}</span>
        </p>
      )}
      {status === "rascunho" && (
        <p className="text-yellow-500  border px-4 py-2 rounded-md font-light flex items-center gap-2">
          <span>
            <Circle size={15} />
          </span>
          <span>{status}</span>
        </p>
      )}
      {status === "desativada" && (
        <p className="bg-red-500 border px-4 py-2 rounded-md font-light flex items-center gap-2">
          <span>
            <Circle size={15} />
          </span>{" "}
          <span>{status}</span>
        </p>
      )}
    </div>
  );
}
