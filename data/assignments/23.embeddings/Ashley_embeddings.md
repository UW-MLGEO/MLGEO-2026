
### Written response
1. Did the embedding agree with your predictions? For each of X and Y, explain why or why not.

A: I predicted that the most similar statement to X would be statement A due to the inclusion of the magnitude and its urban impacts. However, the most similar statement was actually statement C, perhaps due to the similarity of the language used to describe the mechanism (e.g. "rupture", "subduction", "area"). The embedding agreed with my prediction for statement Y, which was most similar to P. This makes sense since P was the only avalanche statement and included similar descriptions of snow and burial.

2. Compare the similarity scores for X against A, B, C to the within-group similarities
you found in Question 1. Is X as close to the earthquake descriptions as they are to each other?
What might explain any gap?

A: The gap between the three earthquake statements (A, B, and C) when referenced to X was .397, .301, and .505 respectively, whereas the within group similarities were higher between A and B (0.641). The relationship between C and either A or B is weaker than A to B, but still stronger than the relationship of A or B to X. This could be due to the similarity of the technical description to events other than earthquakes. A and B also focus more on the outcome of the earthquake while C pays more attention to the mechanism.

3. For Y: the description says nothing about snow instability, slopes, or mass movement —
only about people being buried after a sound. Does the embedding still find the avalanche (P)?
What does this tell you about what the model has learned — and what it might be missing?

A: The embedding does still find the avalanche, so the model has learned the consequence-focused language that ties it to the avalanche statement. It could be missing the relationship between the snow burial consequence and the loud rumbling sound indicating that the snow was destabilized and moving downhill, which would have tied it more closely to some of the other statements like landslides.