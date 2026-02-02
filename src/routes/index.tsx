import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraText } from "@/components/ui/aurora-text";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="relative h-screen w-full">
      <div className="flex flex-col gap-3 items-center absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] z-20">
        <AuroraText
          colors={["#022c22", "#047857", "#34d399", "#6ee7b7"]}
          className="text-6xl font-bold"
        >
          Zeth.lol
        </AuroraText>
        <Link to="/jeopardy">
          <Button variant="default" size="lg">
            Jeopardy <ChevronRight />
          </Button>
        </Link>
      </div>

      <FlickeringGrid
        className="relative inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        color="#10b981"
        gridGap={6}
        maxOpacity={0.5}
        flickerChance={0.1}
      />
    </div>
  );
}
