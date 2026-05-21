//Formatar duração
export function formatarDuracao(segundos: number): string {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;

  const horasFormatadas =
    horas > 0 ? `${horas.toString().padStart(2, "0")}h:` : "";
  const minutosFormatados =
    minutos > 0 ? `${minutos.toString().padStart(2, "0")}m` : "";
  const segundosFormatados =
    segundosRestantes > 0
      ? `:${segundosRestantes.toString().padStart(2, "0")}s`
      : "";

  return `${horasFormatadas}${minutosFormatados}${segundosFormatados}`;
}
