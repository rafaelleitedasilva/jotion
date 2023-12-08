"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export const CoverImageModal = () => {
    const params = useParams();
    const update = useMutation(api.documents.update);
    const coverImage = useCoverImage();
    const { edgestore } = useEdgeStore();

    const [file, setFile ] = useState<File>();
    const [isSubmitting, setIsSuubmitting] = useState(false);

    const onClose = () => {
        setFile(undefined);
        setIsSuubmitting(false);
        coverImage.onClose();
    }

    const onChange = async (file? : File) => {
        if(file){
            setIsSuubmitting(true);
            setFile(file);

            const res = await edgestore.publicFiles.upload({
                file
            });

            await update({
                id: params.documentId as Id<"documents">,
                coverImage: res.url
            });

            onClose();
        }
    }

    return(
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2 className="text-center text-lg font-semibold">
                    Imagem de Fundo</h2>
                    </DialogHeader>
                    <SingleImageDropzone className="w-full outline-none"
                    disabled={isSubmitting} 
                    value={file} 
                    onChange={onChange}>

                    </SingleImageDropzone>
            </DialogContent>
        </Dialog>
    )
}