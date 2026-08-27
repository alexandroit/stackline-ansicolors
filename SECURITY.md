# Security Policy

## Supported Versions

| Version | Supported |
| --- | --- |
| 1.x | Yes |
| 0.x upstream releases | No, report to the upstream project |

## Reporting A Vulnerability

Use the private security advisory form in the Stackline GitHub repository.
Do not open a public issue before maintainers have had a reasonable opportunity
to assess and coordinate a fix.

Include the affected version, runtime, minimal reproduction, expected impact,
and whether the issue is reachable through documented APIs. Maintainers will
acknowledge a complete report, investigate it, and publish remediation details
with the release when disclosure is appropriate.

## Scope

The consumer runtime has zero dependencies and emits fixed ANSI sequences.
Reports about development-only tooling, terminals interpreting ANSI control
sequences by design, or unrelated packages should identify the concrete path
through `@stackline/ansicolors`.
