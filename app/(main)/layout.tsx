"use client";

import { useConvexAuth } from "convex/react";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";
import { Navigation } from "./_components/navigation";

import { SearchCommand } from "@/components/search-command";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        )
    }

    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/");
        }
    }, [isLoading, isAuthenticated, router]);

    return (
        <div className="h-full flex dark:bg-[#1F1F1F]">
            <Navigation />
            <main className="flex-1 h-full overflow-y-auto">
                <SearchCommand />
                {children}

            </main>
        </div>
    );
};

export default MainLayout;
