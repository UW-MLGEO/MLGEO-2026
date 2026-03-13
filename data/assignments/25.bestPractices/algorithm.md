## Sophia and Dahlia Algorithm Best Practices
1. Looking for a review paper that talks about AI/ML in the field of interest
An Example: For Image Analysis, we learned in our project that neural networks and computer vision were the standard approaches for the type of project we wanted to do. 
    Source: Marques et al. (2025) "A Review of Machine Learning Applications for Identification and Classification Problems in Paleontology" 
    - Defining what is standard in the field for machine learning applications 
    - Can access data from these papers as a resource for your project, transfer learning applications
    - Context about previous work (What locations have been focused on, time periods, types of fossils, etc.)
    - Data Augmentation strategies to impliment 
2. Contacting experts in the field or authors of review papers as a resource for your project.
    - Examine current challenges in the field
An Example: For Image Analysis, we learned in our project that neural networks and computer vision were the standard approaches for the type of project we wanted to do. 
    Source: Marques et al. (2025) "A Review of Machine Learning Applications for Identification and Classification Problems in Paleontology"

## Michael and Lucy
- Data Characterization: You must really understand your question and explore your data before you select a model! This should be your last step - your question, data, and goals should ultimately inform your model choice, not the other way around. If you select a model before characterizing your data well, you may not select the best model for your particular data and application.
    Ex: Michael's group considered two different model architectures for two different training sets, and made the final decision at the very end. This left flexibility - your model should serve your project goals.

- Lit Review: When it comes to model selection, start with a literature review! What kind of models did similar projects use? This can help inform your decision and direct your search for the right model.
    Ex: Lucy's group saved a lot of time by finding similar ML applications in the same field!

- Background Research: Don't reinvent the wheel! Do you need to train a model from scratch, or can you do transfer learning on someone's existing project? We can waste a lot of time in science if we aren't aware of what's already been done.

- Computational Cost + Timeline: Consider your dataset size, project timeline, and computational resources before committing to a model and training. 
    Ex: Michael's group trained two regression models, a random forest on features extracted from time series data and a convolutional neural network trained on raw, large time series data. The first model had a small dataset and architecture, which made training quick. The second model had to train overnight! On the scale of a quarter-long project, this was okay - but taking a week to train a model would not be appropriate for the scope of the project.

## Laura
* Use existing ML best practices and techniques. Techniques like transfer learning can decrease computational cost of a model and decrease complexity in implementation. Using existing models that have been optimized by machine learning experts can make implementation of a model both more user friendly and more efficient.

* Talk to an expert about what models may best suit your problem and how best to implement them!

    For example, in our group's implementation, I discussed the problem with a few machine learning experts in the Applied Math department. They had suggestions for implementation and some well-documented example code for neural networks. They also had suggestions for what packages to use. Getting insight from someone who knows machine learning well can help guide your approach, and they may have code or learning materials that are quick to implement. 
  
* Conduct a literature search. Learn what is standard practice in your field for the problem you are interested in. There may be standard techniques that you can either implement or build off of or areas that have yet to be explored!

    For example, the Paleorocks group conducted a literature search that gave us ideas for data augmentation techniques and image resolution resizing. We also learned about models that are commonly implemented for transfer learning in fossil image classification and were able to use these same models in our own implementation. 

## Mary Orrand
*Project: Predicting ocean pCO₂ from satellite remote sensing*

1. **Look at what's already been done with your type of data.** Before choosing a model, I looked into how other oceanography projects have used satellite data to predict ocean chemistry. This helped me understand that tabular oceanographic data (like CSV tables of SST and chlorophyll measurements) tends to work well with tree-based models like Random Forest, rather than neural networks which are better suited for image or sequence data.
2. **Start simple and build up.** I began with Linear Regression as a baseline before trying anything more complex. This made it easy to see whether a more advanced model (Random Forest) was actually worth the added effort, and it was, because the relationships between SST and pCO₂ turned out to be non-linear.
3. **Let your data exploration inform your model choice.** Early scatter plots showed that the relationship between temperature and pCO₂ looked different at each buoy site in that there was no single straight-line trend. That told me I needed a model flexible enough to handle those site-dependent patterns, which is what led me to Random Forest.
4. **Think about how your data is grouped before splitting it.** Since my data came from 7 different ocean sites, I made sure each site was proportionally represented in both training and test sets. A random split could have put most of one site's data in training and none in testing, giving misleading results.
