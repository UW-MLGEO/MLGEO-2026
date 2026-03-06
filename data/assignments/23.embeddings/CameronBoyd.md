# Cameron's Embedding Assignment

## Predictions
### Description X (technical language):

*"A Mw 7.1 interplate megathrust rupture occurred on the subduction interface, generating strong
ground motion with peak ground accelerations exceeding 0.3g in nearby urban areas."*

**My prediction:** A

**because:** I threw out D, E, I, & J because water was not mentioned. No lava, so remove F & G. It doesn't discuss the atmosphere or air, so not H. There is no mention of debris flow, so I ignore K & L. There's no discussion of precipitation, so M, N, O, & P are unlikely. Of the remaining options, there are similarities:

A: 7.1, ground motion, urban areas

B: strong ground motion

C: subduction zone, ground shaking

B is the least similar of the remaining 3. C has less specific similarities than A, so I think A will come up as the most similar.



### Description Y (consequence / human impact language):

*"Several skiers were reported missing after being buried under snow on a backcountry slope
following a loud rumbling sound."*

**My prediction:** P

**because:** There's no discussion of earthquakes, so I throw out A, B, & C. No tsunamis or volcanoes, so remove D, E, F, & G. On and on... The sentence focuses in on snow. P talks about snow and burying. 

---

## Questions

**1. Did the embedding agree with your predictions? For each of X and Y, explain why or why not.**

**X:** I was wrong, but pretty close. I said A & C should be the closest, it just turns out that C is more similar than A. C shares more broader themes, whereas A has more similar specifics. It's interesting to me that the algorithm seems to care more about the big themes.

**Y:** I was right. P is the most similar, which makes sense because it is the only one that talks about snow and snow burrials. 


**2. Compare the similarity scores for X against A, B, C to the within-group similarities
you found in Question 1. Is X as close to the earthquake descriptions as they are to each other?
What might explain any gap?**

**X:**   
A &rarr; (0.397)  
B &rarr; (0.301)  
C &rarr; (0.505)

**A:**   
B &rarr; (0.641)   
C &rarr; (0.456)

**B:**   
C &rarr; (0.481)  

A & B seem to be a lot more similar than any of the others. Both mention strong ground shaking, focusing on offshore or coastal areas. The similarites between X and A or C are fairly similar. But X is a lot less similar to B than the in between group similarites. X lacks any coastal information, and B doesn't discuss large magnitudes or ruptures.


**3. For Y: the description says nothing about snow instability, slopes, or mass movement —
only about people being buried after a sound. Does the embedding still find the avalanche (P)?
What does this tell you about what the model has learned — and what it might be missing?**

The embedding of Y still finds the avalanche (P). As per my justifications in the predictions, Y & P are the only two statements that discuss snow. So the embedding has found that statement Y discusses snow, but not necessarily an avalanche specifically. The model has learned about different kinds of precipitation, evidenced by low similarity scores with discussions of rain. The model is missing more baseline information to make comparisons to, which would have let it get more into the specifics of the statement. 
