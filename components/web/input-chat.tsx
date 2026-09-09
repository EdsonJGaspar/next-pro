"use client";
import { Send } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "@tanstack/react-form-nextjs";

type MessageChatProps = {
  message: string;
};
const defaultMessage: MessageChatProps = {
  message: "",
};
export function ChatInput({
  onSend,
}: {
  onSend: (message: MessageChatProps) => void;
}) {
  defaultMessage;
  const form = useForm({
    defaultValues: defaultMessage,
    onSubmit: ({ value }) => {
      const messageSended = {
        message: value.message,
        isUser: true,
      };
      onSend(messageSended);
      form.reset();
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex gap-3 items-center rounded-full border px-4 py-2"
      >
        <form.Field
          name="message"
          children={(field) => (
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Faça sua questão!"
              className="border-none focus-visible:ring-transparent text-xl font-mono"
            />
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="cursor-pointer"
            >
              {isSubmitting ? "..." : <Send size={16} />}
            </Button>
          )}
        />
      </form>
    </div>
  );
}
