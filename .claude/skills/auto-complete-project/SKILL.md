# Auto Complete Project

Fully autonomous GSD workflow loop that advances the project from the current state through all remaining phases until the milestone is complete.

## Trigger

Invoked via `/auto-complete-project` or when user says "auto complete", "auto pilot project", "chạy auto đến khi xong".

## Workflow

### Phase Loop

For each uncompleted phase (read from `.planning/STATE.md` and `.planning/ROADMAP.md`):

```
discuss-phase → plan-phase → execute-phase → auto-verify → next phase
```

### Step Detection

Read `.planning/STATE.md` frontmatter to determine `status` and current phase number. Then pick the next action:

| STATE.md status | Current phase state in ROADMAP | Next action |
|----------------|-------------------------------|-------------|
| `ready_to_discuss` or no CONTEXT.md for phase | Phase not discussed | `/gsd-discuss-phase {N} --auto` |
| `ready_to_plan` or no PLAN.md for phase | Phase discussed, not planned | `/gsd-plan-phase {N} --skip-research` |
| `ready_to_execute` or has PLAN.md but not complete | Phase planned, not executed | `/gsd-execute-phase {N}` |
| Phase execution complete (all plans done) | Phase executed, not verified | **Auto-verify** (see below) |
| Phase verified | All phases complete | `/gsd-complete-milestone` |

### Auto-Verify (Build-Only)

Instead of manual `/gsd-verify-work`, run automated checks:

```bash
# Step 1: Build check
npm run build 2>&1

# Step 2: Lint check
npm run lint 2>&1
```

**If both pass:**
- Read `.planning/ROADMAP.md` to mark current phase as complete
- Update `.planning/STATE.md` to advance to next phase
- Use the GSD SDK if available:
  ```bash
  gsd-sdk query state.advance-phase 2>/dev/null || true
  ```
- Continue to next phase

**If either fails:**
- STOP the loop
- Display the error output
- Tell the user: "Auto-verify failed. Fix the issues then re-run `/auto-complete-project`"

### Discuss-Phase Handling

For discuss-phase in auto mode:
- Use `--auto` flag to skip interactive questions
- If discuss-phase requires user input and cannot proceed with `--auto`, use reasonable defaults:
  - Accept all Claude's Discretion items
  - Use decisions from CLAUDE.md tech stack recommendations
  - Skip deferred items

### Plan-Phase Handling

For plan-phase in auto mode:
- Use `--skip-research` to save time (research is optional)
- Use `--skip-verify` to skip plan-checker (faster iteration)
- If research already exists from a prior run, it will be reused automatically

### Execute-Phase Handling

For execute-phase:
- Run without special flags (executor handles wave ordering)
- If execution fails on a plan, STOP and report which plan failed

### Phase Transition

After auto-verify passes for a phase:

1. Mark phase complete in ROADMAP.md (change `[ ]` to `[x]`, add completion date)
2. Update STATE.md to point to the next phase
3. If this was the LAST phase → run `/gsd-complete-milestone` and stop

### Error Recovery

If any step fails:
1. Display which step failed and the error
2. Display the command to resume: `/auto-complete-project` (it will pick up from current state)
3. STOP — do not retry automatically

### Loop Guard

- Maximum 20 skill invocations per run to prevent infinite loops
- If a phase fails auto-verify 3 times, STOP and ask user to fix manually

## Output

After each phase completion:
```
Phase {N}: {Name} — COMPLETE
Progress: {completed}/{total} phases ({percent}%)
Next: Phase {N+1}: {Name}
```

On project completion:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PROJECT COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All {N} phases completed.
Milestone: {milestone_name}

Run /gsd-complete-milestone to archive and tag.
```

## Important Notes

- This skill uses **build-only verification** — no manual browser testing
- Each `/clear` between phases is recommended but not required
- The skill is **resumable** — if interrupted, re-run and it picks up from the current state
- Discuss-phase may still ask questions if `--auto` mode cannot resolve all decisions; answer and the loop continues
