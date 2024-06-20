import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useSetAtom } from "jotai";
import { toast } from "sonner";

import { gameAtom } from "./GameBoard";
import { game } from "./DefaultGame";

const GameUploadModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (c: boolean) => void;
}) => {
  const setGame = useSetAtom(gameAtom);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const readJsonFile = (file: Blob) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        if (event.target) {
          resolve(JSON.parse(event.target.result as string));
        }
      };

      fileReader.onerror = (error) => reject(error);
      fileReader.readAsText(file);
    });

  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // @ts-expect-error because this thing sucks balls. Why should I have to ignore something that works??
      const parsedData = await readJsonFile(event.target.files[0]);

      try {
        const tempJson = game.parse(parsedData);
        setGame(tempJson);
        setOpen(false);
        toast.success("Uploaded Game!");
      } catch (error) {
        toast.error("oops something went wrong. Try again.");
      }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal container={document.getElementById("jeopardyMain")}>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-base-300/40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-5 rounded-[6px] bg-base-100 p-[25px] shadow-xl focus:outline-none">
          <Dialog.Title className="m-0 text-3xl font-semibold text-primary">
            Load a Game
          </Dialog.Title>
          <fieldset className="mb-[15px] flex flex-col items-center gap-3">
            <input
              type="file"
              accept=".json,application/json"
              className="file-input file-input-bordered file-input-secondary w-full"
              onChange={uploadFile}
            />
          </fieldset>
          <div className="flex justify-end gap-2">
            <div
              onClick={() => setOpen(false)}
              className="btn btn-outline btn-accent"
            >
              Cancel
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GameUploadModal;
