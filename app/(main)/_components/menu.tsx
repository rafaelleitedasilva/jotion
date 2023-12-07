"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { MoreHorizontal, Trash } from "lucide-react";

import { Id } from "@/convex/_generated/dataModel";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface MenuProps {
  documentId: Id<"documents">;
};

export const Menu = ({
    documentId
}: MenuProps)=>{
    const router = useRouter();
    const {user} = useUser();

    const archive = useMutation(api.documents.archive);

    const onArchive = () => {
        const promise = archive({
            id:documentId
        });

        toast.promise(promise,{
            loading:"Movendo para a lixeira...",
            success:"Nota movida para a lixeira!",
            error:"Falha ao arquivar a nota"
        })

        router.push("/documents");
    }
    
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost">
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60" align="end" alignOffset={8} forceMount>
                <DropdownMenuItem onClick={onArchive}>
                    <Trash className="h-4 w-4 mr-2" />
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <div className="text-sm text-muted-foreground p-2">
                    Última vez editado por: {user?.fullName}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

Menu.Skeleton = function MenuSkeleton(){
    return(
        <Skeleton className="h-10 w-10"/>
    )
}