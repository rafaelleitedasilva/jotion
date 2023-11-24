"use client";
import Image from "next/image";

import { useUser } from "@clerk/nextjs";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
const { user } = useUser();
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
            Bem-vindo ao {user?.firstName}'s Jotion
        </h2>
        <Button>
          <PlusCircle classNameh-4 w-4 mr-2/>
          Crie uma nota
        </Button>
    </div>
  );
};

export default DocumentsPage;
