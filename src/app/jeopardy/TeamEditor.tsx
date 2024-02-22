import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useAtom } from "jotai";

import { teamEditorAtom } from "./JeopardyHeader";
import { teamsAtom } from "./page";

const TeamEditor = () => {
  const [teamEditorState, setTeamEditorState] = useAtom(teamEditorAtom);
  const [teams, setTeams] = useAtom(teamsAtom);

  const closeDialog = () => {
    setTeamEditorState({
      open: false,
      index: null,
      name: null,
      score: null,
    });
  };

  const updateTeam = () => {
    if (teamEditorState.index === null) {
      const tempArray = teams;
      tempArray.push({
        name: teamEditorState.name,
        score: teamEditorState.score,
      });
      setTeams(tempArray);
    } else {
      const tempArray = teams.map((team, i) =>
        i === teamEditorState.index
          ? { name: teamEditorState.name, score: teamEditorState.score }
          : team,
      );
      setTeams(tempArray);
    }
    setTeamEditorState({
      open: false,
      index: null,
      name: null,
      score: null,
    });
  };
  return (
    <Dialog.Root open={teamEditorState.open}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-base-300/40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-5 rounded-[6px] bg-base-100 p-[25px] shadow-xl focus:outline-none">
          <Dialog.Title className="m-0 text-3xl font-semibold text-primary">
            {teamEditorState.index == null ? "Add New Team" : "Update Team"}
          </Dialog.Title>
          <fieldset className="mb-[15px] flex flex-col items-center gap-3">
            <label className="input input-bordered flex w-full items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                placeholder="Some Meme or something"
                onChange={(e) =>
                  setTeamEditorState({
                    ...teamEditorState,
                    name: e.target.value,
                  })
                }
              />
            </label>
            <label className="input input-bordered flex w-full items-center gap-2">
              Score
              <input
                onChange={(e) =>
                  setTeamEditorState({
                    ...teamEditorState,
                    score: parseInt(e.target.value),
                  })
                }
                type="tel"
                className="grow"
                placeholder="0"
              />
            </label>
          </fieldset>
          <div className="flex justify-end gap-2">
            <div
              onClick={() => closeDialog()}
              className="btn btn-outline btn-accent"
            >
              Cancel
            </div>
            <div onClick={() => updateTeam()} className="btn btn-secondary">
              {teamEditorState.index == null ? "Add Team" : "Update Team"}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default TeamEditor;
