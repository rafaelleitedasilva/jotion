import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background dark:bg-[#1F1F1F] z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Políticas de Privacidade
        </Button>
        <Button variant="ghost" size="sm">
          Termos e Condições
        </Button>
      </div>
    </div>
  );
};
