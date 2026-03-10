### Does the embedding understand the same event if it is described differently?
Description X: I predict that it will be similar to C and then A, B.
Description Y: I predict that it will be similar to P since Y has similar situation with P where it is unstable snowpack on a steep slope.

## 1. Did the embedding agree with your predictions? For each of X and Y, explain why or why not.
The embedding agreed with my predictions. X shared similar features like "7.1", "rupture", and "urban areas" with A, B, C, so they are clustered with the earthquake group. C is really close with X because they share similar geophysical vocabulary. For Y, P is the closest since it uses phrases like "backcountry slope" and "buried under snow". These phrases fit the avalanche story.

## 2. Compare the similarity scores for X against A, B, C to the within-group similarities you found in Question 1. Is X as close to the earthquake descriptions as they are to each other? What might explain any gap?
No, X is not as close to the earthquake descrption as they are to each other. X has a lot of compact geophysical vocabularies but the model is trained for everyday language like "violent shaking"

## 3. For Y: the description says nothing about snow instability, slopes, or mass movement — only about people being buried after a sound. Does the embedding still find the avalanche (P)? What does this tell you about what the model has learned — and what it might be missing?
Yes, the embedding still finds P. The model has learned the pattern from the training data, and the model does not need specific word like "avalanche". It learns the phrases and can tell that it is an avalanche event. What might be missing are physcial grounding and unusual narratives. 