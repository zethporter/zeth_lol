import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/solid";

const QuestionModal = ({
  points,
  question,
}: {
  points: number;
  question: string;
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="glass border-base-300 btn h-full w-full rounded-lg border text-2xl shadow-xl">
        {points}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/80" />
      <Dialog.Content className="data-[state=open]:animate-contentShow bgfocus:outline-none fixed left-[50%] top-[50%] h-5/6 w-5/6 translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-500">
        {/* <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Edit profile
        </Dialog.Title> */}
        <Dialog.Description className="flex justify-center text-3xl font-bold">
          {question}
        </Dialog.Description>
        {/* <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <XMarkIcon />
          </button>
        </Dialog.Close> */}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default QuestionModal;
