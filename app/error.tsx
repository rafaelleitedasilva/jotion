"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image src="/error.png" height="300" width="300" alt="Error" className="dark:hidden" />
            <Image src="/error-dark.png" height="300" width="300" alt="Error" className="hidden dark:block" />
            <h2 className="text-xl font-medium">
                Alguma coisa está errada!
            </h2>
            <Button asChild>
                <Link href="/documents">
                    Voltar
                </Link>
            </Button>
        </div>
    )
}

export default Error;