import { createFileRoute } from "@tanstack/react-router";
import { authMiddleware } from "@/middleware/auth";
import { User } from "@/components/user-management";
import { JeoTabs } from "@/components/jeo/management";

export const Route = createFileRoute("/jeopardy")({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware],
  },
});

function RouteComponent() {
  return (
    <div>
      <div className="sticky top-0 w-full flex flex-row justify-between p-4 items-center">
        <h1 className="text-4xl font-semibold font-hand">Jeopardy</h1>
        <User />
      </div>
      <div className="p-2">
        <JeoTabs />
      </div>
    </div>
  );
}
