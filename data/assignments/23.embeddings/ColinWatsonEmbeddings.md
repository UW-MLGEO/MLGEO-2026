## Description X
Descriptions C, then B, then A would have the closest similarity in that order, as the description shares key words describing the event (earthquake) and features (magnitude, subduction, and human impact).

## Description Y
Description P would have the highest similarity, as they both involve snow and burial.

## 1
The embeddings agreed with my predictions for the most similarity, but for description X, my prediction had the wrong order of similarity besides C. The predictions were correct because the SentenceTransformer encoded the descriptions close enough to how I interpreted them. After the first choices, I went off the similarity matrix for the next two options for description X, but similarity from C to A vs B didn't translate to similarity from X to A vs B.

## 2
X is closer to C than C is to any other description, but less to A or B than they are to each other. This may be because of the fact that A and B describe similar areas, whereas C and X are more vague in location description

## 3
The embedding still finds the avalanche (P), telling us that it has some values assigned connecting mass movement to human impact. This seems to value the type of mass movement higher than human impact as P doesn't mention people, but the next similar description does, but it has 1/2 to similarity.
