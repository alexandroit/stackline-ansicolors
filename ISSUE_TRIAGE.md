# Issue And Pull Request Triage

Audit date: 2026-08-26

| Item | Decision | Reason |
| --- | --- | --- |
| Issue #1 non-color styles | Preserve upstream scope | Users needing bold/italic/etc. should use a style library; do not inflate a color-only drop-in |
| PR #2 bold style | Reject | Upstream maintainer intentionally separated this behavior into `ansistyles` |
| Issue #3 package listing | Preserve released outcome | `.travis.yml` exclusion shipped in 0.3.2; Stackline will use a strict files allowlist |
| DefinitelyTyped PR #70779 | Go further with first-party types | It removed one nonexistent nested property but the recursive callable shape still permits runtime-invalid calls |

There are no open upstream issues or pull requests and no unreleased runtime
patch to incorporate.
