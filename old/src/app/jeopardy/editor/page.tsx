"use-client";

import EditorForm from "./EditorForm";
import { Toaster } from "react-hot-toast";

export default function Editor() {
  return (
    <main>
      <EditorForm />
      <Toaster />
    </main>
  );
}
