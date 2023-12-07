"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface BannerProps {
    documentId: Id<"documents">
}

export const Banner = ({
    documentId
}: BannerProps) =>{
    const router = useRouter();

    const remove = useMutation(api.documents.remove);
    const restore = useMutation(api.documents.restore);
    
    const onRemove = () =>{
        const promise = remove({id:documentId});

        toast.promise(promise,{
            loading:"Deletando nota...",
            success:"Nota deletada!",
            error: "Falha ao deletar a nota",
        })

        router.push("/documents");
    };

    const onRestore = () =>{
        const promise = restore({id:documentId});

        toast.promise(promise,{
            loading:"Restaurando nota...",
            success:"Nota restaurada!",
            error:"Falha ao restaurar nota."
        })
    }

    return (
        <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
            <p>
                Essa página está na Lixeira.
            </p>
            <ConfirmModal onConfirm={onRemove}>
                <Button size="sm" onClick={onRestore} variant="outline" className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal">
                    Deletar para sempre
                </Button>
            </ConfirmModal>
        </div>
    )
}