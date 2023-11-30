"use client";
import Image from "next/image";

import { useUser } from "@clerk/nextjs";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () =>{
    const promise = create({
      title:"Sem Título"
    });

    toast.promise(promise,{
      loading: "Criando uma nova nota...",
      success: "Nova nota criada!",
      error: "Erro ao tentar criar uma nova nota!"
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"/>

        <Image src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"/>
        <h2 classNametext-lg font-medium>
            Bem-vindo ao Jotion de {user?.firstName}
        </h2>
        <Button onClick={onCreate}>
          <PlusCircle classNameh-4 w-4 mr-2/>
          <span className="m-1">Crie uma nota</span>
        </Button>
    </div>
  );
};

export default DocumentsPage;
