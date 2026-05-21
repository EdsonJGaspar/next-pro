export default interface AulaProps {
  id: string;
  nome: string;
  curso: string;
  duracao: number;
  status?: "publicada" | "rascunho" | "desativada";
}
