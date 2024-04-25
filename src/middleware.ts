import { clerkMiddleware } from "@clerk/nextjs/server";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default clerkMiddleware();

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
