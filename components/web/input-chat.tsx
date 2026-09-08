"use client";
import { Send } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm, useSelector } from "@tanstack/react-form-nextjs";

type MessageChatProps = {
  message: string;
  isUser?: boolean;
};
const defaultMessage: MessageChatProps = {
  message: "",
  isUser: false,
};
export function ChatInput() {
  const form = useForm({
    defaultValues: defaultMessage,
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  let isUser = useSelector(form.store, (state) => state.values.isUser);

  return (
    <div className="flex gap-3 items-center rounded-full border px-4 py-2">
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
        children={() => (
          <Button type="submit" className="cursor-pointer">
            <Send size={16} />
          </Button>
        )}
      />
    </div>
  );
}
