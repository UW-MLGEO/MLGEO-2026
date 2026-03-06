# Assignment Details:
### Does the embedding understand the same event if it is described differently?

Below are two descriptions of natural hazard events written in ways that differ from the originals —
one uses technical geoscience language, the other describes the human experience rather than the physical process.

**Before running any code**, write down:
- Which of the original descriptions (A–P) you think each one is most similar to and why.

Then run the code cell and compare the embedding's answer to your prediction.


**Description X** (technical language):

*"A Mw 7.1 interplate megathrust rupture occurred on the subduction interface, generating strong
ground motion with peak ground accelerations exceeding 0.3g in nearby urban areas."*

**My Prediction:** I predict that description A will be most similar to the description X because both descriptions mention a 7.1 magnitude event. Additionally, both mention ground movement, with description A mentioning ground skaing and description X mentioning strong ground motion. 

**Description Y** (consequence / human impact language):

*"Several skiers were reported missing after being buried under snow on a backcountry slope
following a loud rumbling sound."*

**My Prediction:** I predict that description P will be most similar to description Y because P mentions the release of snowpack. While P does not mention skiers getting buried under snow, it does mention that a trail was buried by snow during an avalanche, and description Y seems to describe an avalanche. 

### Written response

**1. Did the embedding agree with your predictions? For each of X and Y, explain why or why not.**

The embeddings did not agree with my prediction for description X. I predicted that A would be the most similar statement to X, when the embeddings found that C was actually the most similar. A was the second most similar description. Both A and C gave technical descriptions of earthquakes, so this was not too surprising. Both descriptions of earthquakes were determined by the embeddings to be similar to X. My prediction of statement P for Y agreed with the embeddings, which was expected, as it was the only description of an avalanche. 

**2. Compare the similarity scores for X against A, B, C to the within-group similarities
you found in Question 1. Is X as close to the earthquake descriptions as they are to each other?
What might explain any gap?**

The similarity scores for X with A, B, and C respectively are 0.397, 0.301, and 0.505. In contrast, the similarity between A and B was 0.641, the similarity between A and C was 0.456, and the similarity between B and C was 0.481. X is closer to the description C than A and B are, but A and B are much more similar to each other than X is to C or than A and B are to either C or X. I think C and X offer more technical descriptions of an earthquake than either A or B, which may lead to the differences observed. X is by far the most technical description, which explains why it is further away from A and B. A, B, and C are all less technical than X, explaining some of the gap. Additionally, both A and B discuss effects on coastal regions, which may be part of the reason why they are so similar.  

**3. For Y: the description says nothing about snow instability, slopes, or mass movement —
only about people being buried after a sound. Does the embedding still find the avalanche (P)?
What does this tell you about what the model has learned — and what it might be missing?**

The embedding found that the most similar description was P, as was predicted. This tells me that the model may have learned the association between avalanches and burial by debris. It may have also learned an association between loud sounds and avalanches/burial by debris. It may have also picked up on the snow connection between both statements, as they both mentioned either snow or snowpack. In my opinion, I think the model picked up on the snow language because other statements mentioned destabilization and burial but were not associated with snow and instead were associated with heavy rains. These statements, according to the embeddings, were much less similar to Y than P. Therefore, the model might be missing that burial can occur when snow is not a factor or that loud noises may not always indicate that an avalanche has occurred. Additionally, it might associate burial of objects with snow avalanches, but other natural disasters or debris flows can have similar effects. 