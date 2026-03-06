# Embeddings Assignment — Mary Orrand

## 1. Did the embedding agree with your predictions?

**X (technical earthquake language):**
Yes — the embedding correctly matched X to the earthquake descriptions. Its top match was **C** (subduction zone fault rupture) with a score of 0.505, followed by **A** (magnitude 7.1 earthquake) at 0.397. Even though X uses highly technical terms like "megathrust rupture" and "peak ground accelerations," the model still recognized it as describing an earthquake. This makes sense because words like "rupture," "subduction," and "ground motion" overlap with the vocabulary in C.

**Y (skiers buried in snow):**
Yes — the embedding found **P** (avalanche) as the top match with a score of 0.403. This was a bit surprising because Y never uses the words "avalanche," "snowpack," or "slope instability." Instead, it describes the *consequences* — skiers buried under snow after a rumbling sound. The model was able to connect those clues to the avalanche description.

## 2. Is X as close to the earthquake group as they are to each other?

Not quite. X's similarity scores to the earthquake descriptions (C = 0.505, A = 0.397, B = 0.301) are **lower** than the within-group similarities between A, B, and C themselves. The earthquake descriptions written in everyday language are closer to each other because they share common words like "earthquake," "shaking," and "coast."

X uses specialized jargon ("interplate megathrust," "0.3g," "peak ground accelerations") that doesn't appear in the original descriptions. The model still gets the gist, but the technical vocabulary creates a gap. This shows that embeddings capture meaning well, but **word overlap still matters** — the more different the wording, the lower the similarity score, even when the meaning is the same.

## 3. Does the embedding find the avalanche for Y? What does this tell us?

Yes! P (avalanche) is Y's top match at 0.403, even though Y describes the event entirely through human impact — missing skiers, being buried, a rumbling sound — without any geoscience terminology.

This tells us the model learned **contextual associations** from its training data. It has seen enough text connecting "buried under snow," "backcountry slope," and "rumbling sound" with avalanches to make that link. It's not just matching keywords — it understands that these clues point to the same type of event.

However, the score (0.403) is still moderate, not high. The model might be **missing** the deeper physical understanding — it doesn't truly *know* that unstable snowpack causes avalanches. It's pattern-matching based on how language is used, not reasoning about the physics. If a description used completely unfamiliar framing, the model might fail to make the connection.
