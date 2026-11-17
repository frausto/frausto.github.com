---
title: "The AI Slop Spiral"
date: "2026-08-18"
excerpt: "AI is an incredibly powerful tool, but it also makes it easy not to think while producing something that looks very much like thinking. The result is faster output, worse handoffs, and an organizational process that slowly spirals into slop."
---

I squint at my monitor, the brightness is set too high. A dying lamp hums faintly in the background, interrupted only by the click of the mouse wheel. At least this document is only twelve pages.

It is the seventh document I have received today. A steady stream of PRDs, technical specifications, incident reports, and QA testing plans. Each one looks impressive, giving me confidence that the organizational engine continues to churn. Work continues moving through the machine.

I put the latest PRD into AI and ask for a summary, risks, and priorities. I sketch out the project in my head, ask a few questions, and sign off with notes about what someone downstream should validate.

The PRD is asynchronously handed off to engineering and design. Design uses AI to build out assets and mockups. Engineering uses AI to turn it into a technical plan. QA runs it through AI to generate acceptance criteria. 

Work is underway and the feature goes to production in record time. A day later, we roll it back.

Several events are missing. Important data isn't being populated. A duplicate-record bug lets people create multiple accounts. And the feature itself is different from what the stakeholders had envisioned.

The next two weeks are spent triaging, level-setting, and trying to figure out what happened.

Meetings are scheduled. Requirements are clarified. Ownership is debated. Tests are added. The team goes back through the original documents and assets, and discovers that some things were never specified, other things were technically specified but interpreted differently, and a few critical assumptions existed only in someone's head or not at all.

Eventually, we ship the feature again. But now everyone is frustrated and the team has lost some trust in the process and in each other.

Still, from the outset, every individual step appeared to move faster.

## **The AI Slop Spiral**

AI has changed the way we work.

This is not coming. It already happened.

AI lets one person write, analyze, design, and build at a pace that would have seemed absurd a few years ago. It also makes it possible to **skip the thinking while producing something that looks very much like thinking.**

A twelve-page PRD looks rigorous. Forty acceptance criteria look comprehensive. A pull request with dozens of comments looks carefully reviewed. Each artifact becomes the input for the next team. The PRD becomes mockups, a spec, and a test plan. Those become code, review comments, and tests. It's a game of telephone with AI at every step. 

At each step context is compressed, transformed, expanded, and then transformed again, and shared understanding is lost along the way. The documents get more detailed as the people working from them lose track of what they actually agreed to build.

I call this **The AI Slop Spiral.**

## **Artificial Confidence**

The real danger is not that AI produces bad work, to be fair, humans have always produced bad work. The danger is that AI can turn a vague thought into a finished-looking document before you've finished thinking it. It fills in gaps, smooths over contradictions, and supplies details nobody discussed. Those details might be perfectly reasonable. Did anyone agree to them?

The more polished the document looks, the less likely anyone is to question it. And the more agents you're managing, the less time you have to read their work closely.

That confidence spreads. The PM assumes engineering understands the requirements because the PRD is detailed. Engineering assumes the requirements are settled because the PRD was approved. QA assumes the expected behavior is correct because it came from the PRD. Leadership assumes the process is working because output is up and tickets are moving faster.

Then the project fails, and the organization has produced a perfect record of nobody understanding the whole thing.

## **"Use More AI"**

We are all complacent in this to a degree.

Nobody wants to find out that a competitor has discovered some magical new way of working while you're still holding meetings like an idiot. So the direction comes down from the top. "Use more AI." "Maximize tokens." "Ninety-nine percent of code should be written by AI."

AI usage itself becomes the goal.

The cost of two weeks spent figuring out what we meant in the first place lands somewhere else. Then we wonder why productivity feels worse while every productivity metric is improving.

This drive is encouraged by the marketing coming from AI companies, consultants, investors, and executives who do not have to live inside the daily reality of making these systems work.

They see the demos. They see the benchmark improvements. They see a person build an application in fifteen minutes. And with everything screaming at you that AI use is the golden key that will unlock all potential in existence, well then of course everyone should be using AI.

Then downtime increases. Rework increases. Costs increase. Projects somehow take longer. People lose track of how the systems work. Nobody can explain why productivity feels worse when every productivity metric appears to be improving.

We are maximizing output and assuming that output is the same thing as progress.

AI is very good at helping us maintain that illusion.

## **AI Is Not the Enemy**

I know this whole thing may make me sound like an old man yelling at clouds about how things aren't what they used to be. Let me be clear: **I am pro-AI.** I used AI to edit this very blog post. The important word there is *edit*. I wrote the initial version myself and had AI clean it up afterward, and I edited it again after that. I'm still figuring out how to best leverage it with writing, but I figured it was a meaningful exercise to undertake when writing this specific post. 

In life, sometimes the problem can be the solution. As technology continues to evolve, as we learn into the ways AI affects scalability and organizational efficiencies, we may optimize the best way in which to leverage it. 

I use AI constantly, and I want my teams to use it too. We're currently building AI tools so people across the company can work from the same tools, data, and context. When a project moves from product to design, engineering, or QA, the next person should be able to see what's been decided, why, and what still needs to be verified. We're baking our workflows into the tools themselves, with steps, guidelines, and guardrails tailored to each role and checks that help people and agents work from the right information.

These new workflows raise a bigger question. How many of these handoffs do we need in the first place? Perhaps traditional role segmentation makes less sense in a world where AI is doing more of the work. If handoffs and the loss of shared context are a problem, why have so many handoff points? In theory, one or two people could use AI agents to act as the PM, designer, engineer, and QA, maintaining the full context from the idea through implementation and validation. That kind of end-to-end ownership has historically been a startup superpower. The question is whether AI now makes it possible at a larger scale.

In the big scheme of things, this technology is still in its early stages. There will be growing pains, and they will show up in all kinds of ways. The internet completely changed how we work, but the deeper organizational changes came well after the technology itself had matured. Technology can change quickly. People and organizations change much more slowly. You can fight that reality, or accept it and optimize your teams, processes, and systems around it while working toward a better and brighter future. 

Or at least a less sloppy one.