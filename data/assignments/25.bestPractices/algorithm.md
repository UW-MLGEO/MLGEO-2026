












## Michael and Lucy
- Data Characterization: You must really understand your question and explore your data before you select a model! This should be your last step - your question, data, and goals should ultimately inform your model choice, not the other way around. If you select a model before characterizing your data well, you may not select the best model for your particular data and application.
    Ex: Michael's group considered two different model architectures for two different training sets, and made the final decision at the very end. This left flexibility - your model should serve your project goals.

- Lit Review: When it comes to model selection, start with a literature review! What kind of models did similar projects use? This can help inform your decision and direct your search for the right model.
    Ex: Lucy's group saved a lot of time by finding similar ML applications in the same field!

- Background Research: Don't reinvent the wheel! Do you need to train a model from scratch, or can you do transfer learning on someone's existing project? We can waste a lot of time in science if we aren't aware of what's already been done.

- Computational Cost + Timeline: Consider your dataset size, project timeline, and computational resources before committing to a model and training. 
    Ex: Michael's group trained two regression models, a random forest on features extracted from time series data and a convolutional neural network trained on raw, large time series data. The first model had a small dataset and architecture, which made training quick. The second model had to train overnight! On the scale of a quarter-long project, this was okay - but taking a week to train a model would not be appropriate for the scope of the project.