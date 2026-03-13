## Prediction before running the code

**Description X** (technical language): I predicted description **A** because both describe a magnitude 7.1 earthquake and reference ground shaking. While X uses more technical language (megathrust rupture, peak ground acceleration), it still describes the same type of event.

**Description Y** (human/consequence language): I predicted **P** because it describes an avalanche caused by unstable snowpack. Description Y focuses on the human impact, but the presence of snow, slopes, and burial strongly suggests an avalanche.

## Written Responses

### 1. Did the embedding agree with your predictions?

For Description X, the embedding did not fully agree with my prediction. I predicted A, but the embedding identified C as the most similar description, with A being the second closest. The difference was small (about 0.1 in similarity score). The model likely selected C because both X and C use more technical earthquake terminology, like subduction and strong ground motion.

For Description Y, the embedding did agree with my prediction and identified P as the most similar description. This makes sense because both descriptions include snow, slopes, and burial, which are common indicators of an avalanche.

### 2. Compare similarity scores for X against A, B, and C

Similarity scores:
- X vs A: 0.397
- X vs B: 0.301
- X vs C: 0.505

The similarities among A, B, and C range from 0.456 to 0.641, meaning they are generally closer to each other than X is to them. This suggests that X is not as close to the earthquake descriptions as they are to each other, although it is relatively close to C. One reason may be that X uses more technical geophysical terms, while the other descriptions use simpler wording. Because embeddings rely on word relationships and phrasing, differences in vocabulary can create some distance even when the events are the same.

### 3. Did the embedding still find the avalanche (P) for Y?

Yes, the embedding still identified P as the most similar description, even though Y does not explicitly describe avalanche mechanics. This indicates the model has learned associations between snow, burial, and slopes with avalanche events. Even when the physical process is not described directly, the embedding can still connect the human impact description with the correct hazard type. However, this also shows a limitation that the model may rely heavily on keywords like snow and buried rather than understanding the underlying process. Because of this, it could confuse avalanches with other hazards that involve burial or debris movement, such as landslides.
