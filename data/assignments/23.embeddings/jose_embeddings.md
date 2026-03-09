## Predictions
Description X: A because it also mentions the 7.1 magnitude earthquake same as the description. 
Description Y: P because it describes unstable snowpack burying a trail below which could lead to the consequence of missing skiers.

## 1. Did the embeddings agree with your predictions? For each of X and Y, explain why or why not?. 
For description X, I got it wrong but it was close. It turns out that C was the better choice compared to A. I think because C mentions "rupture", "subduction", and "area", it was a closer match compared to A that only mentions the 7.1 earthquake instead. For description Y, I got my predictions correct. Makes sense because the description mentions "skiers" and "snow", and P was the only one that has "unstable snowpack."

## 2. Compare the similarity score for X against A, B, C to the within-group similarities you found in question 1. Is X as close to the earthquake descriptions as they are to each other? What might explain any gap?
No, X is not as close to the earthquake descriptions as those descriptions are to each other. The within-group similarities between A and B are high because they both describe the same type of event using related vocabulary. While X uses more technical terms that are more closely aligned with C, which mentions a rupture and the impact to surrounding areas. 

## 3. For Y: description says nothing about snow instability, slopes, or mass movement - only about people being buried after a sound. Does the embedding still find the avalanche (P)? What does this tell you about what the model has learned - and what might it be missing?
Yes, the embedding still managed to find the avalanche (P). This tells me that the model learned the association between "skiers", "buried in snow", and "loud rumbling sound" leads to the event being an avalanche. The model might still be missing the ability to differentiate to other similar events that could occur with similar terms like earthquake or landslide. 