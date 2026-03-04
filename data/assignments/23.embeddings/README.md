## To load the embeddings later:

```python

import pickle

with open('embeddings.pkl', 'rb') as f:
    data = pickle.load(f)

labels = data['labels']
sentences = data['sentences']
embeddings = data['embeddings']

print(f'Loaded {len(labels)} embeddings of dimension {embeddings.shape[1]}')
