import { execa } from "execa";
import { checkbox } from "@inquirer/prompts";

export interface FileChoice {
  path: string;
  label: string;
  disabled?: string;
}

async function fzfAvailable(): Promise<boolean> {
  try {
    await execa("which", ["fzf"]);
    return true;
  } catch {
    return false;
  }
}

export async function selectFiles(
  choices: FileChoice[],
): Promise<string[]> {
  if (choices.length === 0) return [];
  const selectable = choices.filter((c) => !c.disabled);
  if (selectable.length === 0) return [];

  if (await fzfAvailable()) {
    const input = selectable.map((c) => c.label).join("\n");
    const result = await execa("fzf", ["--multi", "--prompt", "ds-police> "], {
      input,
      reject: false,
      stdio: ["pipe", "pipe", "inherit"],
    });
    if (result.exitCode !== 0) return [];
    const picked = String(result.stdout)
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    const labelToPath = new Map(selectable.map((c) => [c.label, c.path]));
    return picked
      .map((label) => labelToPath.get(label))
      .filter((p): p is string => Boolean(p));
  }

  const answer = await checkbox({
    message: "Select files to enrol",
    choices: selectable.map((c) => ({ name: c.label, value: c.path })),
    pageSize: 20,
  });
  return answer;
}
