"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
};

const DocumentIdPage = ({params}:DocumentIdPageProps) => {
    const document = useQuery(api.documents.getById,{
        documentId: params.documentId
    });

    if(document === undefined) {
        return(
            <div>
                Carregando...
            </div>
        )
    }

    if(document === null){
        return <div> Não Encontrado</div>
    }

    return(
        <div className="pb-40">
            <div className="h-[35vh]"/>
            <div className="md:max-w-3x1 lg:max-w-4x1 mx-auto">
                <Toolbar initialData={document} />
            </div>
        </div>
    );
}

export default DocumentIdPage;