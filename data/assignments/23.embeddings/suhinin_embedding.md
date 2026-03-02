## In-Class Assignment: Embeddings
Sofia Suhinin, ESS 469


Before running any code, write down: Which of the original descriptions (A–P) you think each one is most similar to and why.

**Description X** (technical language):

*"A Mw 7.1 interplate megathrust rupture occurred on the subduction interface, generating strong
ground motion with peak ground accelerations exceeding 0.3g in nearby urban areas."*

Your prediction: A because a megathrust rupture is a type of earthquakethat occurs at a subduction interfact

**Description Y** (consequence / human impact language):

*"Several skiers were reported missing after being buried under snow on a backcountry slope
following a loud rumbling sound."*

Your prediction: P because unstable snow can lead to avalanches or snow fall that can pose risks to people and the environment

### Written response

1. Did the embedding agree with your predictions? For each of X and Y, explain why or why not.

For X my prediction did not agree with the embedding. However, the prediction I made was the next most similar original, and they only differed by a similarity value of 0.1. I would think the embedding chose Option C because there was similarity between the words large/mega, subduction, and ground motion/shaking. For Y my prediction agreed with the embedding. This makes sense given the description mentions snow, a slope and backcountry.

2. Compare the similarity scores for X against A, B, C to the within-group similarities
you found in Question 1. Is X as close to the earthquake descriptions as they are to each other?
What might explain any gap?

A: 0.397 (my prediction), B: 0.301, C: 0.505 (the embedding choice)
A, B, and C are all withing 0.204 of each other in terms of similairty, while X has a similarity value of 0.505 comapred to C. From that, I would say that X is NOT as close to the earthquake descriptions as they are to each other. This gap may be explained by the fact that while it can take key words or ideas from the descriptions, because they are all similar it might not be able to distinguish what is different. 


3. For Y: the description says nothing about snow instability, slopes, or mass movement —
only about people being buried after a sound. Does the embedding still find the avalanche (P)?
What does this tell you about what the model has learned — and what it might be missing?

Y does not directly mention an avalanche and neither do the descriptions. However, there are several repeated key words that would indicate that there is an avalanche, suggesting that maybe the embedding inferred/ learnt a physical process despite it not being mentioned. 

