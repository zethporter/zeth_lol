"use client";
import { useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Toaster } from "sonner";

export const themeAtom = atomWithStorage<string>("theme", "dark");

const ThemeContainer = ({ children }: { children: React.ReactNode }) => {
  const theme = useAtomValue(themeAtom);
  return (
    <main data-theme={theme} className="min-h-screen">
      {children}
      <Toaster
        visibleToasts={5}
        toastOptions={{
          unstyled: false,
          classNames: {
            error: "bg-error text-error-content border-none",
            success: "bg-success text-success-content border-none",
            info: "bg-info text-info-content border-none",
            warning: "bg-warning text-warning-content border-none",
          },
        }}
      />
    </main>
  );
};

export default ThemeContainer;
