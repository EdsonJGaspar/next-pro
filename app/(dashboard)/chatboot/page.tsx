import { ChatInput } from "@/components/web/input-chat";
import { MessageChat } from "@/components/web/message-chat";

export default function ChatBootPage() {
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-3xl ">
        <ChatInput />
        <MessageChat
          message="Ola oala anf ahedj fhegi ajgfe wqyg FQGWYB QYGDBA gygyfhe kYYD gyjab qfbgnq pelos visto gostas muto de passar o tempo aqui programando e ficando cada vez mais calmo quando acabas por suluucionar um bug."
          isUser
        />
        <MessageChat message="Optimo e voce? Ola oala anf ahedj fhegi ajgfe wqyg FQGWYB QYGDBA gygyfhe kYYD gyjab qfbgnq pelos visto gostas muto de passar o tempo aqui programando e ficando cada vez mais calmo quando acabas por suluucionar um bug." />
      </div>
    </div>
  );
}
