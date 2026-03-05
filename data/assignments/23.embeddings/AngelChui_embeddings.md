# MLGeo-2026 Embedding Assignment
2026, March 2 <br>
Angel Chui <br>

## Does the embedding understand the same event if it is described differently?
Which of the original descriptions (A-P) you think each one is most similar to and why? <br>
- Description X (technical language) - I think this one is most similar to A, B, and C becuase it seems to be describing an earthquake and mentions "nearby urban areas" without any mention of the other categories of natural hazard (e.g. flooding, rain, fire, etc). <br>
- Description Y (human language) - I think this one is most similar to P, L, A, B, and C, because of rumbling (A, B, C), snowpack/mountain slopes/burying (P), and mention of buried road (L).

## Written Responses
1. Did the embedding agree with your predictions? For each of X and Y, explain why or why not. <br>
X - This was pretty close to my predictions of C, A, and B, but I did not include L and P. I did not include P because P does not specify it is from an earthquake but seems to be mostly from other reasons that avalanches are caused by. I did not include L because the description X does not mention rain at all. <br>
Y - This one only had P and L match with mine, likely due to the snow and burying aspects. I can see why it chose J because of the "displacing thousands of residents" part being similar to burying skiers, but Description Y did not seem to be related to rain and flooding. I can see why it chose K because of the "steep hillside gave way" being similar. I cannot really understand why it chose O besides a mention of precipitation. I'm a bit surprised it did not choose A, B, or C due to the rumbling, but I guess it makes sense since avalanches are not usually caused by earthquakes.

2. Compare the similarity scores for X against A, B, C to the within-group similarities
you found in Question 1. Is X as close to the earthquake descriptions as they are to each other? What might explain any gap? <br>
For A, B, and C, within-group similarities (the group consisting of A,B, and C) are all between 0.456 and 0.641. For the similarity of X to A, B, and C, only C was within that range with 0.505. A and B were 0.397 and 0.301, respectively, which shows that X is generally not as similar to A, B, and C, than they are as a group to each other but is more similar to C than A is to C (0.456) and B is to C (0.481). The gap could be due to less overlaping words (i.e. for C, both X and C use "subduction" wherease for A and B there are less overlaping word usage).

3. For Y: the description says nothing about snow instability, slopes, or mass movement —
only about people being buried after a sound. Does the embedding still find the avalanche (P)? <br>
Yes, the embedding still found the avalanche (it identified P with 0.403 similarity). Although I would say that Y does mention "slope". <br>
What does this tell you about what the model has learned — and what it might be missing? <br>
It seems the model is able to relate the "buried under snow" in Y to "snowpack" and "burying a trail" in P. This seems pretty straightforward. The model seems to have learned that "slope" from Y corresponds to hillsides (seen in L and K). It seems to be missing the cause of an avalanche (often/usually human caused but during existing/natural avalanche conditions) which may be causing it to pull in the J, K, and L, which involve hills or "low-lying areas" (J) which may be the model learning that "slope" is related to hills/changes in elevation giving a low-lying area. But the model not knowing the cause of avalanches may be what's leading to involving O with the precipitation. 

