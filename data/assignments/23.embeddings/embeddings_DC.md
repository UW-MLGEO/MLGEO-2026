# Semantic Embeddings Analysis: Natural Hazard Descriptions

David Caro assignment

## Predictions

### Description X (Technical Earthquake Language)
"A Mw 7.1 interplate megathrust rupture occurred on the subduction interface, generating strong ground motion with peak ground accelerations exceeding 0.3g in nearby urban areas."

**My prediction:** A

**Because:** Similar words are used in a similar context like ground motion and shaking, or earthquake and megathrust rupture, also using the same number in the text.


### Description Y (consequence - Human Impact Language)
"Several skiers were reported missing after being buried under snow on a backcountry slope following a loud rumbling sound."

**My prediction:** P

**Because:** In both cases snow, slope and burying are mentioned making the descriptions similar.
---
##  Written response

1 Did the embedding agree with your predictions? For each of X and Y, explain why or why not.

- For **Description X**:
My prediction did not agree with the embedding, C was determined to be closer maybe for 
mentioning the rupture on the subduction zone, and giving more weight to that than to the similar words in similar context. 

- For **Description Y**:
My prediction matched the embedding, P is the closest maybe for mentioning snow, slope and burying.

2 Compare the similarity scores for X against A, B, C to the within-group similarities
you found in Question 1. Is X as close to the earthquake descriptions as they are to each other?
What might explain any gap?

- A-B = 0.641, B-C = 0.481, A-C = 0.46, X-C = 0.505 The similarity score for X-C falls in the range of the earthquake descriptions but for X-A and X-B there is at least a 0.1 difference possibly due to not using words as seismic or earthquake.

3 For Y: the description says nothing about snow instability, slopes, or mass movement only about people being buried after a sound. Does the embedding still find the avalanche (P)?
What does this tell you about what the model has learned — and what it might be missing?

- It finds the avalanche, but still the similarity is not high (0.403), the model maybe is putting more attention on the use of keywords like slope or snow and not understanding the context of the avalanche.
