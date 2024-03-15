import { useState } from "react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { z } from "zod";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { atom, useSetAtom, useAtom } from "jotai";
import clsx from "clsx";
import { useRouter } from "next/navigation";

import JeopardyScores from "./JeoparyScore";
import TeamEditor from "./TeamEditor";
import GameUploadModal from "./GameUploadModal";
import { themeAtom, teamsAtom, type Team, gameMapAtom } from "./GameBoard";
import { createGameMap } from "~/utils/gameMapping";

const teamEditor = z.optional(
  z
    .object({
      index: z.number().nullable(),
      name: z.string(),
      score: z.number(),
    })
    .nullable(),
);

type TeamEditor = z.infer<typeof teamEditor>;

export const teamEditorAtom = atom<TeamEditor>(null);

const MenuClassName =
  "group leading-none text-base-content rounded-btn flex items-center h-8 p-2 relative select-none outline-none data-[disabled]:text-base-content data-[disabled]:pointer-events-none data-[highlighted]:bg-base-200";

const JeopardyHeader = () => {
  const router = useRouter();
  const [gameUploadOpen, setGameUploadOpen] = useState<boolean>(false);
  const [theme, setTheme] = useAtom(themeAtom);

  const setTeamEditorState = useSetAtom(teamEditorAtom);
  const setGameMap = useSetAtom(gameMapAtom);
  const [teams, setTeams] = useAtom(teamsAtom);

  const openTeamEditor = () => {
    setTeamEditorState({ index: null, name: "", score: 0 });
  };

  const editTeam = (team: Team, index: number) => {
    setTeamEditorState({
      index: index,
      name: team.name,
      score: team.score,
    });
  };

  const resetScores = () => {
    const newTeams = teams.map((team) => ({ ...team, score: 0 }));
    setTeams(newTeams);
  };

  return (
    <>
      <ContextMenu.Root>
        <ContextMenu.Trigger className="block min-h-28 w-full select-none rounded-box bg-base-100 p-1 text-center text-3xl text-primary">
          <JeopardyScores />
        </ContextMenu.Trigger>
        <ContextMenu.Content className="min-w-52 overflow-hidden rounded-btn border border-base-200 bg-base-100 px-2 py-3 shadow-xl">
          <ContextMenu.Item
            className={MenuClassName}
            onSelect={() => openTeamEditor()}
          >
            Add Team
          </ContextMenu.Item>
          <ContextMenu.Item
            className={MenuClassName}
            onClick={() => setGameUploadOpen(true)}
          >
            Upload Game
          </ContextMenu.Item>
          <ContextMenu.Item
            className={MenuClassName}
            onClick={() => createGameMap(setGameMap)}
          >
            Reset Game
          </ContextMenu.Item>
          <ContextMenu.Item
            className={MenuClassName}
            onClick={() => resetScores()}
          >
            All teams to Zero
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className="items-between relative flex h-8 select-none flex-row items-center justify-between rounded-btn p-2 leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-base-200 data-[highlighted]:data-[state=open]:bg-base-200 data-[state=open]:bg-base-200">
              Themes
              <svg className="h-5 w-5 fill-base-content">
                <ChevronRightIcon />
              </svg>
            </ContextMenu.SubTrigger>
            <ContextMenu.SubContent
              className="w-52 rounded-btn border border-base-200 bg-base-100 px-2 py-3 shadow-xl"
              sideOffset={2}
              alignOffset={-5}
            >
              <ContextMenu.RadioGroup
                value={theme}
                onValueChange={setTheme}
                className="theme-controller"
              >
                <ContextMenu.RadioItem
                  className={clsx(
                    MenuClassName,
                    "date-[state=checked]:from-20% data-[state=checked]:border data-[state=checked]:border-primary data-[state=checked]:bg-gradient-to-l data-[state=checked]:from-primary",
                  )}
                  value={"light"}
                >
                  Light
                </ContextMenu.RadioItem>
                <ContextMenu.RadioItem
                  className={clsx(
                    MenuClassName,
                    "date-[state=checked]:from-20% data-[state=checked]:border data-[state=checked]:border-primary data-[state=checked]:bg-gradient-to-l data-[state=checked]:from-primary",
                  )}
                  value={"dark"}
                >
                  dark
                </ContextMenu.RadioItem>
                <ContextMenu.RadioItem
                  className={clsx(
                    MenuClassName,
                    "date-[state=checked]:from-20% data-[state=checked]:border data-[state=checked]:border-primary data-[state=checked]:bg-gradient-to-l data-[state=checked]:from-primary",
                  )}
                  value={"dracula"}
                >
                  dracula
                </ContextMenu.RadioItem>
                <ContextMenu.RadioItem
                  className={clsx(
                    MenuClassName,
                    "date-[state=checked]:from-20% data-[state=checked]:border data-[state=checked]:border-primary data-[state=checked]:bg-gradient-to-l data-[state=checked]:from-primary",
                  )}
                  value={"cupcake"}
                >
                  cupcake
                </ContextMenu.RadioItem>
                <ContextMenu.RadioItem
                  className={clsx(
                    MenuClassName,
                    "date-[state=checked]:from-20% data-[state=checked]:border data-[state=checked]:border-primary data-[state=checked]:bg-gradient-to-l data-[state=checked]:from-primary",
                  )}
                  value={"valentine"}
                >
                  valentine
                </ContextMenu.RadioItem>
                <ContextMenu.RadioItem
                  className={clsx(
                    MenuClassName,
                    "date-[state=checked]:from-20% data-[state=checked]:border data-[state=checked]:border-primary data-[state=checked]:bg-gradient-to-l data-[state=checked]:from-primary",
                  )}
                  value={"AFCU"}
                >
                  Zeth&apos;s afcu
                </ContextMenu.RadioItem>
              </ContextMenu.RadioGroup>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className="items-between relative flex h-8 select-none flex-row items-center justify-between rounded-btn p-2 leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-base-200 data-[highlighted]:data-[state=open]:bg-base-200 data-[state=open]:bg-base-200">
              Edit Team
              <svg className="h-5 w-5 fill-base-content">
                <ChevronRightIcon />
              </svg>
            </ContextMenu.SubTrigger>
            <ContextMenu.SubContent
              className="w-52 rounded-btn border border-base-200 bg-base-100 px-2 py-3 shadow-xl"
              sideOffset={2}
              alignOffset={-5}
            >
              {teams.map((team, i) => (
                <ContextMenu.Item
                  key={i}
                  onSelect={() => editTeam(team, i)}
                  className={MenuClassName}
                >
                  {team.name}
                </ContextMenu.Item>
              ))}
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Item
            className={MenuClassName}
            onClick={() => router.push("/jeopardy/editor")}
          >
            Game Editor
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
      <TeamEditor />
      <GameUploadModal open={gameUploadOpen} setOpen={setGameUploadOpen} />
    </>
  );
};

export default JeopardyHeader;
