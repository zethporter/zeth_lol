import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "@/lib/auth/auth-client";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };
  const handleMicrosoftSignIn = async () => {
    await signIn.social({
      provider: "microsoft",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Zeth.lol</CardTitle>
          <CardDescription>Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            size="lg"
            className="w-full"
          >
            <svg
              className="mr-2"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M17.6 9.2l-.1-1.8H9v3.4h4.8C13.6 12 13 13 12 13.6v2.2h3a8.8 8.8 0 0 0 2.6-6.6z"
                  fill="#4285F4"
                  fillRule="nonzero"
                />
                <path
                  d="M9 18c2.4 0 4.5-.8 6-2.2l-3-2.2a5.4 5.4 0 0 1-8-2.9H1V13a9 9 0 0 0 8 5z"
                  fill="#34A853"
                  fillRule="nonzero"
                />
                <path
                  d="M4 10.7a5.4 5.4 0 0 1 0-3.4V5H1a9 9 0 0 0 0 8l3-2.3z"
                  fill="#FBBC05"
                  fillRule="nonzero"
                />
                <path
                  d="M9 3.6c1.3 0 2.5.4 3.4 1.3L15 2.3A9 9 0 0 0 1 5l3 2.4a5.4 5.4 0 0 1 5-3.7z"
                  fill="#EA4335"
                  fillRule="nonzero"
                />
              </g>
            </svg>
            Sign in with Google
          </Button>
          <Button
            onClick={handleMicrosoftSignIn}
            variant="outline"
            size="lg"
            className="w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 512 512"
            >
              <path d="M0 0h512v512H0z" fill="transparent" />
              <path d="M22.3 22.3h222.6v222.6H22.3z" fill="#f35325" />
              <path d="M267.1 22.3h222.6v222.6H267.1z" fill="#81bc06" />
              <path d="M22.3 267.1h222.6v222.6H22.3z" fill="#05a6f0" />
              <path d="M267.1 267.1h222.6v222.6H267.1z" fill="#ffba08" />
            </svg>
            Sign in with Microsoft
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
