"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { type gameCardType } from "./page";

export default function GameCards({ games }: { games: gameCardType }) {
  const [search, setSearch] = useState("");

  return (
    <div className="container mx-auto grid grid-cols-1 gap-2 md:grid-cols-3">
      <div className="pb-4 md:col-start-3">
        <label className="input flex items-center gap-2 bg-base-200/60">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {games
        .filter((game) =>
          game.name.toLowerCase().includes(search.toLowerCase()),
        )
        .map((game) => (
          <div
            key={game.id}
            className={twMerge("card card-compact bg-base-300 shadow-xl")}
          >
            <div className="card-body">
              <h2 className="card-title">{game.name}</h2>
              <p>{`Last edited: ${game.lastEdited.toLocaleDateString()}`}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm bg-gradient-to-tr from-accent from-40% to-secondary text-accent-content hover:from-5% hover:text-secondary-content">
                  Edit
                </button>
                <button className="btn btn-sm bg-gradient-to-tr from-primary from-40% to-secondary text-primary-content hover:from-5% hover:text-secondary-content">
                  Play
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
