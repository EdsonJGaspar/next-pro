import { Send } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function ChatInput() {
  return (
    <div className="flex gap-3 items-center rounded-full border px-4 py-2">
      <Input
        placeholder="Faça sua questão!"
        className="border-none focus-visible:ring-transparent text-xl font-mono"
      />{" "}
      <Button className="cursor-pointer">
        <Send size={16} />
      </Button>
    </div>
  );
}
