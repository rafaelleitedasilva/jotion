"use client";
import Image from "next/image";

import { useUser } from "@clerk/nextjs";

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
        <h2>
            Bem-vindo ao {user?.firstName}'s Jotion
        </h2>
    </div>
  );
};

export default DocumentsPage;
