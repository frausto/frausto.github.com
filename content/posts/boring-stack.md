---
title: "The Boring Stack"
date: "2020-08-10"
excerpt: "Boring tech does not imply boring products or ancient languages. Boring simply means minimal surprises."
---

It’s a bright day in the office, and there are two people huddled around a whiteboard. It’s my first day as a consultant working with a startup, and the current topic is about building a recommendation engine that will suggest different products to their users.

The CTO turns to me with a self-assured nod, ‘TensorFlow seems like the optimal solution here, and the investors are excited by the possibilities’.

Silence fills the air for a moment while I gather my thoughts. I manage to make a quiet strangled noise in response. This is not what I was hoping to hear.

At the time, TensorFlow was the new hotness for machine-learning models. It was at the forefront of the AI “boom” and every engineer (and every investor) was hyped up to utilize it in one way or another. Recommendation system? Obviously TensorFlow was a no brainer. AI was the future, after all.

Had anyone on the team used TensorFlow before? Nope.

Did we have the amount and type of data that would be needed to make the recommendations meaningful? Not yet.

Was this feature an important, core part of the app? No, it was something to test if we could increase conversion.

Despite my objections, the project went forward with an AI solution, took triple the time estimated, generated odd results that were a pain to debug, and by the end, was simply replaced with several SQL queries running on a daily background job. The SQL query recommendation system took only a few days to implement and worked just fine for what was needed.

The AI-powered engine was quite exciting, but its complexity eclipsed its usefulness and wasted a lot of time and money as a result.

## **Suffice to say, it was not a boring solution**

It goes to show that as engineers, as leaders of engineers, and as people creating new products and tools, our “stack” should be as boring as we can make it. When I say “stack” I don’t just mean the tech stack (though that is a part of it), I mean codebases and systems, as well as processes and team structures. The stack of machines, tools, code, hierarchy and tech that we create to push ideas out into the world.

In the case highlighted above, it seems obvious that the solution was overkill for the task, but it can be harder to see that when you’re in it. It is tempting to use the latest tech, bleeding-edge systems, or hot new databases to power our projects. The background decision makers generally don’t like being bored. Engineers don’t like being bored. And if you’re a startup, part of the VC and investment opportunity is fueled by not choosing boring technology. In this way, we wind up with a Kubernetes Service Mesh using Istio as the answer for an app with less than one thousand users. All built out from the start just in case the thing we are building is the next unicorn startup.

Most of the time, you don’t need a service mesh, you don’t need Kafka, and it’s pretty easy to see why. But like everything else, there are tradeoffs to be made, considerations to take, and unique factors to consider. So how do we choose the right level of boring?

## **What even is boring?**

People usually miss the point of “boring”. Boring tech does not imply boring products or ancient languages. Boring simply means minimal surprises.

In any suitably large project, your codebase will start to introduce complexity whether your stack is boring or otherwise. The advantage with boring is that if there is an issue, it’s probably something that you’re able to fix in your own codebase. If not, you can Google it, and it’s likely that someone else will have already tackled the issue. Boring also means you can set alerts and thresholds for the common issues that pop up at scale, and you can prepare for the unknowns more efficiently because the unknowns are on a well-trodden path.

With boring, it’s easier to know what you don’t know. The more moving pieces, the newer the tech, and the more interesting things get, then the more we have things we don’t know that we don’t know.

It seems obvious, so why do we often end up with such complexity?

## **The drive to optimize**

The systems that we create could often benefit from the latest tech or new types of databases. Things could scale better, be faster, and generate better results. Many problems we encounter could be solved more directly with a different set of technologies than the existing ones the rest of the company is already using.

This is the trap of local optimization. The optimal solution is, in many cases, not the right solution. This seems counter-intuitive, so let’s look back to our recommendation engine. The AI-powered engine would have done a better job and given more personalized results than our SQL query solution. It was the optimal solution, but that didn’t make it the right solution for the task.

Local optimization is extremely tempting, no matter who you are. It’s easy to reach a point of frustration and start thinking along the lines of ‘why are we using old stuff when we could just use new stuff and ship it in the next week?’

This happens to engineers of all levels because local optimization does give you a boost. You can solve your problem easier and ship faster. However, in exchange you often end up with a long-term cost that eventually moves the organization in a direction of shipping less. It’s not that innovative technologies are wrong, it’s just that you have to think of the tradeoffs before diving into the “best” solution.

When using boring, well-established technology and tools, the limitations may indeed hold back solving the problem optimally. This can be especially hard to take when we know there are better solutions out there. We’re all about using the right tool for the job, but tools come with tradeoffs and in the vast number of cases, the right tool is what you are already using and what you already know. 

There’s a time and a place for complexity. And it’s often much later than we think.

## **When to be interesting**

I’m not arguing to only be boring. There are legitimate reasons to add complexity, and we can explore a few of them.

Sometimes the problem does warrant it. For example, the problem could be central to your product and have a huge impact, so it’s worth the extra effort and complexity.

Sometimes you want to explore newer tech or languages to keep engineers happy and help with hiring. Hiring is no joke, and you need to have a level of interesting tech to attract talent.

Sometimes the most boring things cost extra. Tools and systems that are reliable and easy are often expensive. New Relic, my favorite performance monitoring solution, is not for the thin-of-wallet. Heroku which makes Devops for simple web applications a breeze, has the same issue.

Sometimes you need to scale big. You may have millions of users or thousands upon thousands of requests per second. This necessitates a more complex architecture to handle the load.

Sometimes you need to sell the idea. People are fascinated by the newest trends. We see this everywhere from AI to Bitcoin, and more recently biotech and health-focused tech. You may have an easier time convincing your boss, an investor, or a team if you piggy-back on this hype. It may seem like one of the sillier reasons to increase complexity, but at the same time it can be one of the most important ones. If getting your investment relies on using the latest technology or newest database, well, you’ll probably be using it no matter how complex.

## **The Meaning of Boring**

We’ve gone over what boring means, when to be boring (i.e. most of the time), and the tradeoffs of boring versus interesting choices. We have seen how when the goal is to ship a stable product, complexity must be carefully considered and controlled. Choosing boring over optimal, and well-known over new, is not always an easy or satisfying choice, but it can often be the right one. In this way, the more boring our code and tech is, the more room we give our products to be interesting.

Each person’s boring stack will look different, and it should always depend on the team and situation. What’s your boring stack?  

**Like the article?** Check it out on [Lead Dev](https://leaddev.com/technical-direction/boring-stack)!