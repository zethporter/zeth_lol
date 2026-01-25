"use client";

import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import GameBoard from "./GameBoard";

export default function Jeopardy() {
  return (
    <main>
      <AnimatePresence>
        <GameBoard />
      </AnimatePresence>
      <Toaster />
    </main>
  );
}
