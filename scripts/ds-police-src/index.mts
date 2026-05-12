#!/usr/bin/env -S node --import tsx
import { Command } from "commander";
import { runAdd } from "./commands/add.mts";
import { runScore } from "./commands/score.mts";
import { runStatus, formatStatusTable } from "./commands/status.mts";

const program = new Command();
program
  .name("ds-police")
  .description("Design system component scoring tool")
  .version("0.1.0");

program
  .command("add")
  .description("Enrol files or folders for scoring")
  .argument("<paths...>", "file paths, folder paths, or globs")
  .option("--all", "enrol every matched file without showing the menu")
  .option(
    "--include-tests",
    "include *.test.{ts,tsx}, *.stories.{ts,tsx}, *.d.ts (excluded by default)",
  )
  .action(
    async (paths: string[], opts: { all?: boolean; includeTests?: boolean }) => {
    const cwd = process.cwd();
    try {
      const result = await runAdd(
        paths,
        { all: opts.all, includeTests: opts.includeTests },
        cwd,
      );
      console.log(`enrolled ${result.enrolled.length} file(s)`);
      for (const file of result.enrolled) {
        console.log(`  + ${file}`);
      }
      if (result.alreadyEnrolled.length > 0) {
        console.log(
          `${result.alreadyEnrolled.length} already enrolled (skipped)`,
        );
      }
    } catch (err) {
      console.error(`ds-police add: ${(err as Error).message}`);
      process.exit(1);
    }
  },
  );

program
  .command("score")
  .description("Score stale sidecars (run by pre-push hook)")
  .option("--guidance-dirty", "only re-score on guidance/weights changes")
  .option("--dry-run", "list stale sidecars without invoking the agent")
  .option(
    "--changed",
    "only re-score files modified vs base (default origin/main)",
  )
  .option("--base <ref>", "git ref for --changed comparison")
  .option("--no-warm", "disable cache-warm seed call")
  .option("--no-memo", "disable on-disk memoisation by sha-triple")
  .option(
    "--memo-dir <dir>",
    "memoisation cache directory (default: $XDG_CACHE_HOME/ds-police)",
  )
  .option("--no-prefilter", "disable cheap-rule prefilter")
  .action(
    async (opts: {
      guidanceDirty?: boolean;
      dryRun?: boolean;
      changed?: boolean;
      base?: string;
      warm?: boolean;
      memo?: boolean;
      memoDir?: string;
      prefilter?: boolean;
    }) => {
      const cwd = process.cwd();
      try {
        const result = await runScore(
          {
            guidanceDirty: opts.guidanceDirty,
            dryRun: opts.dryRun,
            changed: opts.changed,
            base: opts.base,
            warmCache: opts.warm,
            memo: opts.memo,
            memoDir: opts.memoDir,
            prefilter: opts.prefilter,
          },
          cwd,
        );
        process.exit(result.exitCode);
      } catch (err) {
        console.error(`ds-police score: ${(err as Error).message}`);
        process.exit(2);
      }
    },
  );

program
  .command("status")
  .description("Tabulate enrolled files and their last verdicts")
  .action(async () => {
    const cwd = process.cwd();
    try {
      const rows = await runStatus(cwd);
      console.log(formatStatusTable(rows));
    } catch (err) {
      console.error(`ds-police status: ${(err as Error).message}`);
      process.exit(1);
    }
  });

await program.parseAsync(process.argv);
