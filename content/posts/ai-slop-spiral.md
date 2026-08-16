---
title: "The AI Slop Spiral"
date: "2026-08-17"
excerpt: "AI is an incredibly powerful tool, but it also makes it easy to look like we understand work we have never really thought through. The result is faster output, worse handoffs, and an organizational process that slowly spirals into slop."
---

# **The AI Slop Spiral**

I open the document. My computer screen glares brightly as the sun sets outside my home office. A dying lamp hums faintly in the background, interrupted only by the click of the mouse wheel as I scroll.

Twelve pages.

At least this one is only twelve pages.

It is the fifth document I have received today. A steady stream of PRDs, technical specifications, incident reports, and QA testing plans. Each one looks impressive. They are thorough, professionally formatted, and full of tables, edge cases, diagrams, and implementation details.

At a surface level, they all seem smart and comprehensive, and it gives the confidence that the organizational engine continues to churn. Work continues moving through the process.

I pull up the latest PRD. It is long, however, and I have a growing pile to get through. I put it into AI and ask for a summary, risks, and priorities.

Seems good.

I roughly conceptualize the project in my head. AI assures me that the requirements are clear and the important implementation details have been accounted for.

It is twelve pages. What else could possibly be in there?

The PRD is asynchronously handed off to engineering. Engineering uses AI to turn it into a technical plan. QA runs it through AI to generate acceptance criteria. Work is underway.

Faster than ever, a pull request comes in. Copilot has already reviewed it and left a series of notes about error handling, naming, and possible edge cases. After some back and forth with a few coding agents, the code gets the approval of AI and another real human engineer.

It moves to testing.

QA uses AI to help validate the implementation against the acceptance criteria that AI generated from the PRD that AI helped write. The PM signs off. QA signs off. Both are real humans, but both are increasingly relying on AI to interpret, validate, and assess the work.

The feature goes to production in record time.

A day later, we roll it back.

Several events are missing. Important data is not being populated. There is a duplicate-record bug that can allow someone to create multiple subscriptions and potentially get charged twice had it gone unnoticed.

The next two weeks are spent triaging, level-setting, and trying to figure out what happened.

Meetings are scheduled. Requirements are clarified. Ownership is debated. Tests are added. The team goes back through the original documents and discovers that some things were never specified, other things were technically specified but interpreted differently, and a few critical assumptions existed only in someone’s head.

Eventually, we ship the feature again.

But now it has taken much longer than it should have. Multiple stakeholders are frustrated. The team has lost some trust in the process and in each other.

Still, every individual step appeared to move faster.

## **The AI Slop Spiral**

AI has changed the way we work.

This is not coming. It already happened.

It is an enormously powerful tool. It allows people to write, research, analyze, design, and build things faster than ever. A single person can produce an amount of work that would have seemed absurd only a few years ago.

But AI has also made it much easier not to think.

Worse, it has made it possible not to think while producing something that looks very much like thinking.

A twelve-page PRD gives the appearance of rigor. The corresponding technical specification is filled with jargon and detail that feels like understanding. Forty acceptance criteria look like comprehensive coverage. A pull request with dozens of comments and several follow-on commits looks like a careful review.

We live in a world now where none of those things mean that anybody understands what is being built. More to the point none of this means that at any point did the team have a shared understanding of the work being done and its impact area.

AI PRD to AI technical specification to AI acceptance criteria to AI-generated code to AI code review to AI testing. It is a game of AI telephone between teams and their AI tools, where context and shared understanding are lost at every step.

I call this **The AI Slop Spiral.**

It is a game of telephone played between teams, with AI participating at every step. Context is compressed, transformed, expanded, and then transformed again. Each new artifact looks more complete than the one before it, but shared understanding is lost along the way.

A PM uses AI to turn a loosely understood idea into a detailed PRD.

An engineer uses AI to interpret that PRD and produce a technical plan.

QA uses AI to interpret both and produce a testing plan.

Coding agents use those documents to write the implementation.

Review agents inspect the code against their own inferred model of the requirements.

At each step, the output is plausible.

At no step is it guaranteed that everyone is solving the same problem. Because AI says the document looks good, the code is solid, and the implementation details are covered, everyone has just enough confidence to keep moving.

## **Artificial Confidence**

The real danger is not that AI produces bad work, to be blunt, humans have always produced bad work. The danger is that AI produces work that looks finished, and is powerful enough to finish it, in whatever way that means.

It turns a vague thought into a polished document before the thought has been fully formed. It fills in the gaps, smooths over the contradictions, and confidently supplies the details that nobody actually discussed.

Those details may even be reasonable, but reasonable is not the same as agreed upon.

The more polished the output looks, the less likely someone is to challenge it. A messy two-page document invites questions. A twelve-page document with headings, matrices, diagrams, and a section called “Edge Cases and Failure Modes” creates the impression that the questions have already been answered.

So people skim it.

I skim it.

Then we ask AI whether the document is complete, and AI, being very good at evaluating documents as documents, tells us that it is.

This creates a kind of artificial confidence throughout the entire organization.

The PM assumes engineering understands the requirements because the PRD is detailed.

Engineering assumes the requirements are settled because the PRD was approved.

QA assumes the expected behavior is correct because it was extracted from the PRD.

Leadership assumes the process is working because output has increased and tickets are moving faster.

Everyone is locally correct. And even meetings are had, and everyone agrees that the documentation makes sense and we are good to move forward. Because AI told them it was.

The project still fails.

## **Local Efficiency, Global Failure**

AI is very good at making an individual step more efficient.

It can help someone write a PRD faster. It can generate code faster. It can review a pull request faster. It can create a testing plan faster.

But a software organization is not a collection of independent writing and coding tasks. It is a system for building and maintaining shared understanding.

That understanding includes what we are building, why we are building it, how it interacts with everything that already exists, what can go wrong, and who is responsible when reality does not match the plan.

If each individual step becomes 50 percent faster while the handoffs become worse, the organization may become slower overall.

The feature gets to production faster.

Then it gets rolled back.

Then engineering spends a week investigating.

Then product rewrites the requirements.

Then QA expands the testing plan.

Then leadership asks for an incident report.

Then everyone uses AI to produce twelve more pages explaining why the first twelve pages did not work.

At every step, we are maximizing local efficiency.

Globally, we are drowning.

## **The Return of the Silo**

There was already a tendency in technology organizations to treat product development like an assembly line.

Product writes the requirements.

Engineering builds them.

QA tests them.

Operations runs them.

When something fails, we walk backward through the assembly line looking for the defective station.

AI makes this model feel even more natural.

Why interrupt an engineer when AI can produce the technical specification?

Why meet with QA when AI can generate the acceptance criteria?

Why walk through the code when an agent can summarize the pull request?

Why get everyone in a room when every role can asynchronously produce its own comprehensive artifact?

The boundaries become sharper.

The handoffs become cleaner.

The shared responsibility disappears.

Product becomes responsible for the PRD, engineering for the code, and QA for the tests. Everyone performs their assigned function. Everyone produces impressive output. Everyone has an audit trail showing that AI reviewed it.

And when the project fails, everyone can point to the document they created.

The organization has produced a perfect record of nobody understanding the whole thing.

## **“Use More AI”**

Leadership is helping push us into this.

Nobody wants to fall behind.

There is a fear that exists in every technology hype cycle, but it is especially intense with AI. There is the fear of missing out, the fear that competitors are moving faster, and the fear that another company has discovered some magical new way of working while you are still holding meetings like an idiot.

So the direction comes down from the top:

“Use more AI.”

“Maximize tokens.”

“AI first.”

“Ninety-nine percent of code should be written by AI.”

These instructions are usually vague because leadership does not actually know what the correct implementation looks like. If they did, the instruction would be more useful.

It would identify which work benefits from AI, which work requires direct human judgment, what success looks like, and what failure modes should be measured.

Instead, AI usage itself becomes the goal.

This is encouraged by the marketing coming from AI companies, consultants, investors, and executives who do not have to live inside the daily reality of making these systems work.

They see the demos.

They see the benchmark improvements.

They see a person build an application in fifteen minutes.

Of course everyone should be using AI.

Then downtime increases. Rework increases. Costs increase. Projects somehow take longer. People lose track of how the systems work. Nobody can explain why productivity feels worse when every productivity metric appears to be improving.

We are maximizing output and assuming that output is the same thing as progress.

AI is very good at helping us maintain that illusion.

## **Humans Are Lazy**

This is not really an AI problem.

It is a human problem that AI is very good at exploiting.

Humans are lazy creatures, all told.

We are also creative, intelligent, adaptable, and incredible. But given the choice between deeply understanding a complex problem and generating something that looks like we deeply understand it, we will often choose the second option.

AI makes that choice incredibly easy.

It lets us be lazy while appearing thorough.

Better yet, the laziness is often mandated by leadership. We are not skipping the hard work. We are “leveraging AI.”

It is a win-win-win.

Except the feature does not work.

Or it works in the happy path but quietly corrupts data.

Or it launches in two days and takes the next month to stabilize.

Or six months later, nobody understands the generated system well enough to safely change it.

The problem is not that AI wrote the code or the document. The problem is that a person accepted responsibility for something they did not understand.

Recently, I started asking people to walk me through the documents they send me.

Not summarize them. Walk me through them.

What are we doing?

Why are we doing it this way?

What happens in this case?

Where does this data come from?

What assumptions are we making?

Every single time, we find something important.

Sometimes the author cannot explain a section. Sometimes they clearly did not read all of it. Sometimes the document says something they do not agree with. Sometimes two people have been using the same words while imagining entirely different behavior.

The document looked complete.

The understanding was not.

## **AI Is Not the Enemy**

I am not anti-AI.

Quite the opposite.

AI is a world-changing technology. It is an extraordinarily powerful tool, and I use it constantly. I want my teams to use it. I expect it to become a normal part of nearly every technical and creative workflow.

But it is not a magic wand.

It does not remove the need for understanding. It does not create alignment. It does not accept responsibility. It does not transform a series of isolated decisions into a coherent organizational strategy.

AI can help produce an artifact.

It cannot ensure that a team shares the mental model behind it.

That distinction matters more as AI gets better, not less.

Bad AI output is relatively easy to catch.

Good AI output that encodes the wrong assumptions is much more dangerous.

## **What Do We Do?**

I do not have a complete answer.

I am not going to stop using AI, and I do not want my team to stop using it. Banning AI would be both unrealistic and stupid.

But I do think we need to step back and become much more honest about what it is doing to our organizations.

For now, I have started with something simple.

If you hand something off, you present it.

A PRD, a technical specification, a testing plan, or a meaningful piece of code. Walk the other people through it. Talk about it together. Let them interrupt. Let them ask the questions. Discover that three people have three different definitions of the same sentence. Realize what has been written coherently, actually makes no sense and no one actually knows what it means.

Do not assume shared understanding. Make it explicit.

And for that part of the process, leave AI out of it.

AI can help us prepare. It can help us organize our thoughts. It can help identify questions we may have missed. It can help execute once we know what we are doing.

But the people responsible for the work need to understand one another.

That requires talking.

It requires attention.

It requires someone to say, “Wait, I thought this worked differently.”

It requires the slow, inefficient, deeply human process of building a shared model of reality.

Maybe we will produce fewer pages.

Maybe fewer tickets will move into development each week.

Maybe the dashboard will briefly look less impressive.

But perhaps the things we build will actually work.

From there, we’ll see.

