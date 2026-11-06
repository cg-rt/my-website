---
title: "SuppClaimCheck, an AI service I designed, direct and operate"
client: "Independent project, October 2026 to present"
role: "Owner: product, delivery, evaluation, security and operations"
scope: "A production LLM service · 5 modules in 6 containers · 507 automated tests · 10 measured pipeline versions (as of 6 November 2026)"
responsibility: "I set the rules before any code existed, directed Claude Code agents that wrote the code, tests and docs under those rules, reviewed and merged every change, ran the evals, had the service reviewed against the OWASP Top 10 and the OWASP Top 10 for LLM Applications, and built and operate the production environment."
result: "Live since 25 October 2026. Verdict accuracy went from 47 to 53% to 75 to 81% across ten measured versions; quote verification, citations, refusals and clarifications at 100%; injection resistance 100% on the held-out set. All inside a budget of EUR 25 a month, enforced in code."
resultNote: "Figures are from 6 November 2026 and the project continues. The service was owner-only at that point, with a small beta next."
attribution: "Independent project. Code written by AI coding agents under my direction."
---

### Why I built it this way

SuppClaimCheck checks a claim about a dietary supplement against open-access biomedical literature and returns a verdict, a 0 to 100 score and word-for-word quotes with citations. The one rule I set before anything else was that the model never decides and never acts. Code searches PubMed, keeps the articles whose licence allows text mining, computes the verdict and score from a versioned rubric and verifies every quote word for word; quotes that fail are dropped and logged. The model only fills schema-validated fields.

I wanted to see what the discipline I used on client AI rollouts looks like when I own the whole thing. So every prompt, model, retrieval or config change had to be measured against a labelled eval set, 35 cases with 9 held out for release candidates, which replays in CI on every pull request and fails on a regression. That’s how I learned that more articles, ranking by study type and hybrid retrieval moved accuracy, while five prompt-wording variants didn’t.

The code is agent-written. Claude Code agents worked under a written never-list enforced by hooks that fail closed, and I reviewed and merged about 60 pull requests and ran every deploy and drill myself, including a restore drill and a database-down drill that found a worker hanging silently. The repository is public at [github.com/cg-rt/suppclaimcheck](https://github.com/cg-rt/suppclaimcheck).

It’s an independent project with no external users yet, and it doesn’t make me a software engineer. What it shows is that I can specify, direct, evaluate, secure, release and run an LLM application end to end, and that I can get useful work out of AI coding agents without losing control of what ships.
