## Writen Responses for embeddings.ipynb
### By: Michael Hemmett

### Does the embedding understand the same event if it is described differently?

Below are two descriptions of natural hazard events written in ways that differ from the originals —
one uses technical geoscience language, the other describes the human experience rather than the physical process.

**Before running any code**, write down:
- Which of the original descriptions (A–P) you think each one is most similar to and why.

Then run the code cell and compare the embedding's answer to your prediction.

Before: I think each description will be most linked to the descriptions in their same category, with the outliers being O and P. There is very similar language used in each category, and I think that will be learned. As for O, on drought, I think it will be most similar to the wildfire, with terms like "atmosphere" and "precipitation, "severe," and "rapidly spreading." P, on avalances, will be linked to the debris flow inputs, since there is similarity in terms like "hillside" and "slope."

After: It was mostly true that inputs were grouped to others in the same category, but some inputs with different themes but overlapping words were also grouped. The avalance input was grouped with the landslides, but interestingly the drought entry was grouped mostly with flooding: both focus on natural disasters centered on water, even if in different ways.


**Description X** (technical language):

*"A Mw 7.1 interplate megathrust rupture occurred on the subduction interface, generating strong
ground motion with peak ground accelerations exceeding 0.3g in nearby urban areas."*

Your prediction: This will be grouped most closely to A because: both use the term "7.1" and the phrases "ground motion" and "peak ground acceleration" are similar.


**Description Y** (consequence / human impact language):

*"Several skiers were reported missing after being buried under snow on a backcountry slope
following a loud rumbling sound."*

Your prediction: This will be grouped mostly closely to P because: "snow," "slope," and "buried" are all used in both sentences, making their vectors highly similar.

### Written response

1. Did the embedding agree with your predictions? For each of X and Y, explain why or why not.

Embedding X was not grouped with A as I expected. Even though they were describing the same event, C uses the same type of technical language, including "subduction zone" and "rupture," making them more similar. 

Embedding Y was grouped most closely to P, as I expected, which then grouped closely to the landslide entries as well. This makes sense: If Y is close to P, then Y is also similar to the other entries to which P is close.

2. Compare the similarity scores for X against A, B, C to the within-group similarities
you found in Question 1. Is X as close to the earthquake descriptions as they are to each other?
What might explain any gap?

X is closer to C than the other entries, since it uses similarly technical language, but is otherwise farther from the others in the same group, which use popular language as in a news headline.

3. For Y: the description says nothing about snow instability, slopes, or mass movement —
only about people being buried after a sound. Does the embedding still find the avalanche (P)?
What does this tell you about what the model has learned — and what it might be missing?

Yes, the embedding of Y still finds P - though it is not a very strong correlation. It does say the word "slope" which likely leads the correlation similarity, as well as "snow" and "bury." It is specific terms that is being learned here, but potentially missing the fundamental event similarity across a variety of descriptions. We may need a larger training set.