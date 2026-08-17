---
title: "The AI Slop Spiral"
date: "2026-08-17"
excerpt: "AI is an incredibly powerful tool, but it also makes it easy to look like we understand work we have never really thought through. The result is faster output, worse handoffs, and an organizational process that slowly spirals into slop."
---

I open the document. My computer screen glares brightly as the sun sets outside my home office windows. A dying lamp hums faintly in the background, interrupted only by the click of the mouse wheel as I scroll.

Twelve pages.

At least this one is only twelve pages.

It is the seventh document I have received today. A steady stream of PRDs, technical specifications, incident reports, and QA testing plans. Each one looks impressive. They are thorough, professionally formatted, and full of tables, edge cases, diagrams, and implementation details.

At a surface level, they all seem smart and comprehensive, and it gives the confidence that the organizational engine continues to churn. Work continues moving through the process.

I pull up the latest PRD. It is long, however, and I have a growing pile to get through, not to mention all the other tasks on my plate. I put it into AI and ask for a summary, risks, and priorities. Once I get the response, I then take the time to roughly conceptualize the project in my head and ask a few questions and validate several assumptions. AI assures me that the requirements are clear and the important specifics have been accounted for, so I sign-off with a few notes that someone downstream should validate certain implementation details.

The PRD is asynchronously handed off to engineering and design. Design uses AI to build out assets and mockups. Engineering uses AI to turn it into a technical plan. QA runs it through AI to generate acceptance criteria. 

Work is underway.

Faster than ever, a pull request comes in, the code is done. Copilot has already reviewed it and left a series of notes about error handling, naming, and possible edge cases. After some back and forth with a few coding agents, the code gets the approval of AI and another real human engineer and it moves to testing.

QA uses AI to help validate the implementation against the acceptance criteria that AI generated from the AI generated PRD and design that AI distilled from someone higher-up’s AI stream of conscious notes. The PM signs off. Design signs off. QA signs off. All are real humans.

The feature goes to production in record time.

A day later, we roll it back.

Several events are missing. Important data is not being populated. There is a duplicate-record bug that can allow someone to create multiple accounts, and even if it had gone out, we learn that the feature was not actually what was envisioned by the key stakeholders at conception.

The next two weeks are spent triaging, level-setting, and trying to figure out what happened.

Meetings are scheduled. Requirements are clarified. Ownership is debated. Tests are added. The team goes back through the original documents and assets, and discovers that some things were never specified, other things were technically specified but interpreted differently, and a few critical assumptions existed only in someone’s head or not at all.

Eventually, we ship the feature again. But now it has taken much longer than it should have. Multiple stakeholders are frustrated. The team has lost some trust in the process and in each other.

Still, from the outset, every individual step appeared to move faster.

## **The AI Slop Spiral**

AI has changed the way we work.

This is not coming. It already happened.

It is an enormously powerful tool. It allows people to write, research, analyze, design, and build things faster than ever. A single person can produce an amount of work that would have seemed absurd only a few years ago.

But AI has also made it much easier not to think. Worse, it has made it possible **not to think while producing something that looks very much like thinking**.

A twelve-page PRD gives the appearance of rigor. The corresponding technical specification is filled with jargon and detail that exudes understanding. A set of polished mockups makes it look like the user experience has been carefully considered. Forty acceptance criteria look like comprehensive and well-thought coverage. A pull request with dozens of comments and several follow-on commits looks like a careful review.

We live in a world now where none of those things mean that anybody understands what is being built. More to the point, none of this means that at any point did the team have a shared understanding of the work being done and its impact area.

An AI product requirement document begets → AI mockups and assets begets → AI technical specification begets → AI acceptance criteria begets → AI-generated code begets → AI code review begets → AI testing. It is a game of telephone played between teams, with AI participating at every step. Context is compressed, transformed, expanded, and then transformed again. Each new artifact looks more complete than the one before it, but shared understanding is lost along the way.

I call this **The AI Slop Spiral.**

## **Artificial Confidence**

The real danger is not that AI produces bad work, to be fair, humans have always produced bad work. The danger is that AI produces work that looks finished, and is powerful enough to finish it, in whatever way that means.

It turns a vague thought into a polished document before the thought has been fully formed. It fills in the gaps, smooths over the contradictions, and confidently supplies the details that nobody actually discussed. Those details may even be reasonable, but reasonable is not the same as agreed upon.

The more polished the output looks, the less likely someone is to challenge it. And the more AI-agents one is managing, the less time there is to monitor closely. A messy two-page document invites questions. A twelve-page document with headings, matrices, diagrams, and a section called “Edge Cases and Failure Modes” creates the impression that the questions have already been answered.

So people skim it. I skim it. I get so much of it lately, I’d be doing nothing but reviewing documentation and code all day if I didn’t. Then we ask AI whether the document is complete, and AI, being very good at evaluating documents as documents, tells us that it is.

This creates a kind of artificial confidence throughout the organization. The PM assumes engineering understands the requirements because the PRD is detailed. Engineering assumes the requirements are settled because the PRD was approved. QA assumes the expected behavior is correct because it was pulled from the PRD. Leadership assumes the process is working because output is up and tickets are moving faster. 

We are all supposed to be getting a 100 percent productivity increase from AI, so we need to show results. Any back-and-forth between humans starts to look messy and slow. 

Everyone is locally correct. Sometimes we even have the meetings. Everyone walks through the documentation, agrees that it makes sense, and says we are ready to move forward. Because AI told us it was good. Everyone can point to the document they created.

Instead the project fails and the organization has produced a perfect record of nobody understanding the whole thing.

## **“Use More AI”**

We are all complacent in this to a degree.

Nobody wants to fall behind.

There is a fear that exists in every technology hype cycle, but it is especially intense with AI. There is the fear of missing out, the fear that competitors are moving faster, and the fear that another company has discovered some magical new way of working while you are still holding meetings like an idiot.

So the direction comes down from the top:

“Use more AI.” “Maximize tokens.” “AI first.” “Ninety-nine percent of code should be written by AI.” So on and so forth.

These instructions are usually vague because no one actually knows what the correct implementation looks like. If they did, the instruction would be more useful. It would identify which work benefits from AI, which work requires direct human judgment, what success looks like, and what failure modes should be measured.

Instead, AI usage itself becomes the goal.

This is encouraged by the marketing coming from AI companies, consultants, investors, and executives who do not have to live inside the daily reality of making these systems work.

They see the demos. They see the benchmark improvements. They see a person build an application in fifteen minutes. And with everything screaming at you that AI use is the golden key that will unlock all potential in existence, well then of course everyone should be using AI.

Then downtime increases. Rework increases. Costs increase. Projects somehow take longer. People lose track of how the systems work. Nobody can explain why productivity feels worse when every productivity metric appears to be improving.

We are maximizing output and assuming that output is the same thing as progress.

AI is very good at helping us maintain that illusion.

## **Humans Are Lazy**

All that said, this is not really an AI problem, it is a human problem that AI is very good at exploiting. Humans are lazy creatures, all told.

We are also creative, intelligent, adaptable, and incredible. But given the choice between deeply understanding a complex problem and generating something that looks like we deeply understand it, many will often choose the second option. And AI makes that choice incredibly easy by letting us be lazy while appearing thorough.

Better yet, the laziness is often mandated by the company. We are not skipping the hard work. We are “leveraging AI.” We’ve been told non-stop that we need to be at the forefront of AI usage. This is a win-win.

Except the feature does not work. Or it works in the happy path but quietly corrupts data. Or it launches in two days and takes the next month to stabilize. Or six months later, nobody understands the generated system well enough to safely change it, and what was once a simple solution has become exponentially more complex.

The problem is not that AI wrote the code or the document. The problem is that a person accepted responsibility for something they did not understand.

Recently, I started asking people to walk me through the documents that they send my way. Whether that's a PRD, or code, a testing plan, or something else. Get in a meeting with me and walk me through it, non-async. Talk it over as a team. Make sure the shared understanding is not implicit but explicit and make sure AI is not involved in at least that part of the process. And every single time, we find something important.

Sometimes the author cannot explain a section. Sometimes they clearly did not read all of it or really understand every piece written. Sometimes the document says something they do not agree with. Sometimes two people have been using the same words while imagining entirely different behavior.

It’s been wild.

## **AI Is Not the Enemy**

I know this whole thing may make me sound like an old man yelling at clouds about how things aren’t what they used to be. Let me be clear: I am not anti-AI. Quite the opposite. **I am pro-AI.** Case in point: I used AI to edit this very blog post. The important word there is *edit*. I wrote the initial version myself and had AI clean it up afterward.

AI is a world-changing technology. It is an extraordinarily powerful tool, and I use it constantly. I want my teams to use it. I expect it to become a normal part of nearly every technical and creative workflow.

Even as it stands, my doomsday examples aside, it has generally been a huge net positive for us. But, as they say, with great power comes great responsibility. Anything with this much potential for change is going to come with a period of adjustment, along with new problems created by the change itself.

But it is not a magic wand. Even when we build AI-forward shared context systems for teams to use on every project, such that theoretically nothing gets lost and we are all operating under the same context models, we end up losing context through laziness, AI hallucinations, documents contradictions, and there are any number of other ways information gets distorted or quietly dropped along the way. We are still figuring out how to solve that.

## **So What Do We Do?**

I do not have a complete answer.

I am not going to stop using AI, and I do not want my team to stop using it. Banning AI would be both unrealistic and stupid. But I do think we need to step back and become much more honest about what it is doing to our organizations.

As I mentioned earlier, I have started with something simple: if you hand something off, you present it.

A PRD, a technical specification, a testing plan, or a meaningful piece of code. Walk the other people through it. Talk about it together. Let them interrupt. Let them ask the questions. Discover that three people have three different definitions of the same sentence. Realize what has been written coherently, actually makes no sense and no one actually knows what it means.

At the same time, in life, sometimes the problem can be the solution. As technology continues to evolve, as we learn into the ways AI affects scalability and organizational efficiencies, we may optimize the best way in which to leverage it at scale. 

Perhaps traditional role segmentation makes less sense in a world where AI is doing more of the work. If handoffs and the loss of shared context are a problem, why have so many handoff points? In theory, one or two people could use AI to act as the PM, designer, engineer, and QA, maintaining the full context from the idea through implementation and validation. That kind of end-to-end ownership has historically been a startup superpower. The question is whether AI now makes it possible at a larger scale.

In the meantime, my team is continuing to build out an internal MCP server and the surrounding systems, with the goal of making sure context is shared and understood across projects, teams, and tools. We are trying to build a human version of the same guardrails and harnesses we use to make AI perform well: reliable context, clear boundaries, useful tools, and some way to verify that the system is operating on the right information.

In the big scheme of things, this technology is still in its early stages. There will be growing pains, and they will show up in all kinds of ways. The internet completely changed how we work, but the deeper organizational changes came well after the technology itself had matured. Technology can change quickly. People and organizations change much more slowly. You can fight that reality, or accept it and optimize your teams, processes, and systems around it while working toward a better and brighter future. 

Or at least a less sloppy one.