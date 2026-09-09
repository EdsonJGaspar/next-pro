import { BotMessageSquare, UserRound } from "lucide-react";

type MessageChatProps = {
  message: string;
  isUser?: boolean;
};

export function MessageChat(props: MessageChatProps) {
  return (
    <div className="flex gap-4 items-center justify-between bg-accent p-4 rounded-lg my-2">
      {props.isUser ? (
        <>
          <p className="flex-1">{props.message}</p> <UserRound size={40} />
        </>
      ) : (
        <>
          <BotMessageSquare size={40} />
          <p className="flex-1">{props.message}</p>
        </>
      )}
    </div>
  );
}
