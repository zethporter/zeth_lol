import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";

const CMDK = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal container={document.getElementById("jeopardyMain")}>
        <Dialog.Overlay
          onClick={() => setOpen(false)}
          className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/30"
        />
        <Dialog.Content className="max-w-1/3 fixed left-[50%] top-[20%] w-[800px] translate-x-[-50%] focus:outline-none">
          <motion.div
            initial={{ y: -20, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              duration: 0.2,
              ease: [1, 1, 1, 1],
            }}
            exit={{ y: 20, scale: 0.8 }}
            className="relative flex h-full flex-col gap-4 rounded-box bg-base-200 p-6 focus:outline-none"
          >
            <Command className="flex flex-col gap-4" label="Command Menu">
              <Command.Input className="input input-lg" />
              <Command.List>
                <Command.Empty>No results found.</Command.Empty>

                <Command.Group heading="Pages">
                  <Command.Item
                    onSelect={() => router.push("/jeopardy/my-games")}
                    className="data-[selected=true]:text-primary"
                  >
                    My Games
                  </Command.Item>
                  <Command.Item
                    onSelect={() => router.push("/jeopardy/editor")}
                    className="data-[selected=true]:text-primary"
                  >
                    Game Editor
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CMDK;
