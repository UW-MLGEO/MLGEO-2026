## Description X: Your prediction: A because: It has the correct number of 7.1 along with mentions of the ground shaking

## Description Y: Your prediction: P because: It mentions snow on a mountain slope which is similar to the context of P


# 1. Did the embedding agree with your predictions? For each of X and Y, explain why or why not.

### My prediction was spot on for Y, however for X, my prediction was the second option from the embedding. For Y, the embedding showed that P was the closest option by far which I believe is because P is the only option that mentions snow at all. For X, the embedding showed that C was the closest option when I selected A. I believe this may be the case because the terms used in the X sentence such as megathrust and interplate are difficult for the model to figure out the context and therefore it relied on similar words such as rupture and subduction being in both C and X.

# 2. Compare the similarity scores for X against A, B, C to the within-group similarities you found in Question 1. Is X as close to the earthquake descriptions as they are to each other? What might explain any gap?

### The similarity scores for X against A, B, and C range from 0.301 to 0.505 whereas the within-group similarity scores ranged from 0.456 to 0.641. Therefore, some of these pairs such as X and C (0.505) are closer in similarity than the within groups like A and C (0.456), but there is a large gap between the A and B pair (0.641) and the X and A pair(0.397). This gap may be explained by both A and B containing similar simple terminology whereas X uses more technical vocabulary.

# 3. For Y: the description says nothing about snow instability, slopes, or mass movement — only about people being buried after a sound. Does the embedding still find the avalanche (P)? What does this tell you about what the model has learned — and what it might be missing?

### Although the description says nothing about snow instability, the embedding found big similarities with P. This tells us that the model learned some form of clustering with context because it understands that with the context of skiing along with something getting buried leads to an avalanche in the model's eyes. Something it may be missing is it being able to distinguish between similar situations such as landslides in L or debris flow in K which were relatively high similarity scores of 0.256 and 0.229 respectively. This shows that it has a difficult time distinguishing between different materials like snow and mud.
