## Altti
Evaluating the effectiveness of an AI/ML model [Evaluating AI/ML Model Performance](https://www.ll.mit.edu/sites/default/files/publication/doc/principles-evaluation-aiml-model-performance-brown-md-62.pdf):
1. Using a train validation test split is very important to prevent overfitting and get as close to the true model as possible. 
2. Testing the models sensitivity by slightly altering the input, a good model should be able to maintain performance despite these changes. 
3. Use more advanced metrics, simple ones can easily be misleading, such as accuracy where a model that memorizes the data will do very well in.
4. It is important to consider trade-offs between model performance and how long it would take to reach that performance
5. When assessing a model using a loss and cost function, plotting to see over epochs visualizes where to select the best point for the final model.

## Laura
* Compare multiple models

  As an example, in the Paleorocks group, we created two models and were able to compare their performance. We used transfer learning, which would allow for us to use different base models for comparison. One could also compare the performance of their model to others on some standardized or common dataset like MNIST.
  
* Utilize strategies like cross-validation and/or grid search when tuning hyperparameters to ensure that the model is as good as it can be
*  Test on totally unseen data
  
   As an example, in the Paleorocks group, we tested our fossil classification model on data from a different place and time period to see how sensitive it was to the input data.
 
* Utilize standard metrics like accuracy, precision, F1Score, etc. Use more than one metric and metrics appropriate for your use case!
