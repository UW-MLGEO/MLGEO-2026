#### Sofia Vakhutinsky 
#### Embedding Assignment

### Does the embedding understand the same event if it is described differently?

Below are two descriptions of natural hazard events written in ways that differ from the originals —
one uses technical geoscience language, the other describes the human experience rather than the physical process.

**Before running any code**, write down:
- Which of the original descriptions (A–P) you think each one is most similar to and why.

Then run the code cell and compare the embedding's answer to your prediction.


**Description X** (technical language):

*"A Mw 7.1 interplate megathrust rupture occurred on the subduction interface, generating strong
ground motion with peak ground accelerations exceeding 0.3g in nearby urban areas."*

Your prediction: __A___ because: _it is talking about the same event, and uses some of the same words (e.g. 7.1)

**Description Y** (consequence / human impact language):

*"Several skiers were reported missing after being buried under snow on a backcountry slope
following a loud rumbling sound."*

Your prediction: ___P___ because: ___it's the only other sentence about this event

### Written response

1. Did the embedding agree with your predictions? For each of X and Y, explain why or why not.

- For X, the embedding though my prediction was the second most similar, with C being the most similar. I think this is because C had "rupture" in it, and it also focused a bit more on the technical stuff, i.e. the "energy" of the rupture which was more similar to the original sentence than A. 
- For Y, my prediction was correct, and I think it's because P was the only other sentence talking about the avalanche. 

2. Compare the similarity scores for X against A, B, C to the within-group similarities
you found in Question 1. Is X as close to the earthquake descriptions as they are to each other?
What might explain any gap?

- I would say when looking broadly, X is as close to A, B, and C as they are to each other. The similarity scores between A, B, and C range from .46 - .64, with the similarity between X and C being .505, right in the middle of the range. 
- However, when looking closer at individual relationships, X is only really close to C, with lower scores for A and B. At the same time, C has the lowest similarity scores with A and B than they do for each other. The explanation for the gap is likely X and C are closest to each other and A and B are closest to each other, but they are all still related to each other and are talking about the same event. 

3. For Y: the description says nothing about snow instability, slopes, or mass movement —
only about people being buried after a sound. Does the embedding still find the avalanche (P)?
What does this tell you about what the model has learned — and what it might be missing?

- Yes the embedding still finds the avalanch sentence (P). 
- This tells us that the model has learned that the subject or earth material is they key to identifying what sentences are most similar to each other. For example the sentences about water are similar to each other, same with snow, earth, lava, etc. 
- This however could cause issues if you are trying to find similarities with the event that is actually happening, i.e. a sound was heard and people were buried, rather than classifying disasters such as "snow disasters" or "earthquake disasters".

### Bonus question
- The PCA analysis did just the thing missing from the model in the question above. Instead of focusing on the event subject itself, it's grouped the sentences by what was actually happening in each event. 

