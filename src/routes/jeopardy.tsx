import { createFileRoute } from "@tanstack/react-router";
import { authMiddleware } from "@/middleware/auth";
import { User } from "@/components/user-management";

export const Route = createFileRoute("/jeopardy")({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware],
  },
});

function RouteComponent() {
  return (
    <div>
      Hello "/jeopardy"!
      <User />
    </div>
  );
}
