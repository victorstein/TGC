---
name: conventional-pr-titles
description: Use when opening a pull request or writing a PR title in this repo. PRs are squash-merged, so the PR title becomes the commit message release-please parses — a non-conventional title silently produces no release.
---

<!-- Managed by stein-infra (tofu/shared-claude.tf); edits here are overwritten on the next apply. -->

# Conventional PR titles

This repo squash-merges PRs, and the **PR title becomes the squash commit
message** that release-please parses. Get the title wrong and the release just
doesn't fire.

Title format: `<type>(<optional-scope>): <subject>`

Allowed types: `feat` `fix` `chore` `docs` `ci` `refactor` `perf` `test` `build` `style` `revert`

- `feat:` → minor bump
- `fix:` → patch bump
- everything else → no release (correct for non-shipping changes)

Examples:
- `feat(auth): add token refresh`
- `fix: handle empty cursor`
- `chore: bump dependencies`

Subject: imperative mood, lowercase, no trailing period.
