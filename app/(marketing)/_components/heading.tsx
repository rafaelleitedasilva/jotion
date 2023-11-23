"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Suas Ideias, Documentos, & Planos. Unificados. Sejam Bem-vindos ao{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion é o workspace onde conecta <br /> a eficiência com a velocidade.
      </h3>
      <Button>
        Entre para a equipe
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
