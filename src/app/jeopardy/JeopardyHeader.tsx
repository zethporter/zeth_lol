import React, { useState } from "react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import {
  MapPinIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { atom, useAtom } from "jotai";
import clsx from "clsx";

import JeopardyScores from "./JeoparyScore";
import TeamEditor from "./TeamEditor";

type teamEditor = {
  open: boolean;
  index: number | null;
  name: string | null;
  score: number | null;
};

export const teamEditorAtom = atom<teamEditor>({
  open: false,
  index: null,
  name: null,
  score: null,
});

const MenuClassName =
  "group text-[13px] leading-none text-base-content rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-base-content data-[disabled]:pointer-events-none data-[highlighted]:bg-base-200";

const JeopardyHeader = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [teamEditorState, setTeamEditorState] = useAtom(teamEditorAtom);

  const openTeamEditor = () => {
    setTeamEditorState({
      open: true,
      index: null,
      name: null,
      score: null,
    });
  };

  return (
    <>
      <ContextMenu.Root>
        <ContextMenu.Trigger className="block w-full select-none rounded-box bg-base-100 p-1 text-center text-3xl text-primary">
          <JeopardyScores />
        </ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenu.Content
            className="min-w-2xl overflow-hidden rounded-btn border border-base-200 bg-base-100 p-1 shadow-xl"
            sideOffset={5}
            align="end"
          >
            <ContextMenu.Item
              className={MenuClassName}
              onSelect={() => openTeamEditor()}
            >
              Add Team
            </ContextMenu.Item>
            <ContextMenu.Item className={MenuClassName} disabled>
              Forward{" "}
              <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                ⌘+]
              </div>
            </ContextMenu.Item>
            <ContextMenu.Item className={MenuClassName}>
              Reload{" "}
              <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                ⌘+R
              </div>
            </ContextMenu.Item>
            <ContextMenu.Sub>
              <ContextMenu.SubTrigger className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-violet9 data-[highlighted]:data-[state=open]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
                More Tools
                <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                  <ChevronRightIcon />
                </div>
              </ContextMenu.SubTrigger>
              <ContextMenu.Portal>
                <ContextMenu.SubContent sideOffset={2} alignOffset={-5}>
                  <ContextMenu.Item className={MenuClassName}>
                    Save Page As…{" "}
                    <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                      ⌘+S
                    </div>
                  </ContextMenu.Item>
                  <ContextMenu.Item className={MenuClassName}>
                    Create Shortcut…
                  </ContextMenu.Item>
                  <ContextMenu.Item className={MenuClassName}>
                    Name Window…
                  </ContextMenu.Item>
                  <ContextMenu.Separator className="bg-violet6 m-[5px] h-[1px]" />
                  <ContextMenu.Item className={MenuClassName}>
                    Developer Tools
                  </ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Portal>
            </ContextMenu.Sub>

            <ContextMenu.Separator className="bg-violet6 m-[5px] h-[1px]" />

            <ContextMenu.CheckboxItem
              className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none"
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            >
              <ContextMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              Show Bookmarks{" "}
              <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                ⌘+B
              </div>
            </ContextMenu.CheckboxItem>
            <ContextMenu.CheckboxItem
              className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none"
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
            >
              <ContextMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              Show Full URLs
            </ContextMenu.CheckboxItem>

            <ContextMenu.Separator className="bg-violet6 m-[5px] h-[1px]" />

            <ContextMenu.Label className="text-mauve11 pl-[25px] text-xs leading-[25px]">
              People
            </ContextMenu.Label>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
      <TeamEditor />
    </>
  );
};

export default JeopardyHeader;
