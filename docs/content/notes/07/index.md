---
title: "Filtering and resampling"
date: 2026-01-21
toc: true
tocBorder: true
mathjax: true
---

## Date

{{< date >}}

## Links of interest

- [A visual exploration of randomization/permutation](https://www.jwilber.me/permutationtest/).

## Notes

We discussed:

...

Below are formal definitions of several different resampling methods: 

{{< slide-setup >}}

{{< slide >}}
### Randomization/permutation

Given two populations, $A$ and $B$, and a statistic, $x$, how might we determine if $x_A$ differs from $x_B$?

Well, we can randomly assign observations to either $A$ or $B$, calculate $x_A - x_B$ and repeat to build a **distribution of differences**.

We then ask: what proportion of combinations give a difference as large (or larger) than our sample's $x_A - x_B$? The answer to this question is a p-value.

If you use every possible combination of rearranging data, then you are **permutation testing**.

{{< /slide >}}

{{< slide >}}
### Bootstrap

Let us assume that you have some data, $D$, that describe some true population well (which is not always true!).

Let us also assume that you've calculated some parameter, $x$, using $D$. You are interested in how $x$ might vary.

In such a case, you might decided to repeatedly generate new samples, each time drawing from $D$ independently and *with replacement*. For each new sample, you could calculate a new value, $x_s$, for the parameter you are interested in. The distribution of $x_s$ can provide additional information about $x$.

This process is known as **bootstrapping**.
{{< /slide >}}

{{< slide >}}
### Jackknife

Given a dataset, $D$ and a target statistic/parameter, $x$, you can systematically leave out one observation from $D$ and calculate a *pseudovalue*, $k$, of the target of interest.

As before, you can use the collection of $k$ values to better estimate $x$.

This so-called **jackknife** estimate predates many other resampling techniques.
{{< /slide >}}

{{< slide >}}
### A note on Monte Carlo methods

We have been taking draws from samples of populations, where the true distribution of data is unknown.

But what if we have knowledge about some underlying distributions or a model in mind?

Monte Carlo methods are one class of resampling techniques. When implementing a Monte Carlo approach, you take draws from predefined distributions in order to better answer some question.

These draws can be independent or not (e.g., **Markov Chains**).

Monte Carlo approaches have many applications, from approximations of complex functions to error propagation.
{{< /slide >}}
