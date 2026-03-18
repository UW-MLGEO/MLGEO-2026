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

## Mary Orrand
*Project: Predicting ocean pCO₂ from satellite remote sensing*

1. **Don't rely on just one number to judge your model.** I used RMSE (how far off predictions are on average), MAE (typical size of the error), and R² (how much of the pattern the model captures). Each one highlights something different — using all three gives a fuller picture.
2. **Plot your predictions against the real values.** I made scatter plots of predicted vs. actual pCO₂ for each model. This made it easy to visually see which model was closest to the 1:1 line and where the biggest misses were happening.
3. **Check if your model works better in some situations than others.** I looked at how each model performed at each of the 7 buoy sites separately. Some sites were much harder to predict than others — this kind of breakdown tells you where the model struggles and where you might need more data.
4. **Make sure the features your model relies on make physical sense.** The Random Forest told me which input variables it relied on most. SST (temperature) came out on top, which makes sense because temperature controls how much CO₂ the ocean can absorb. If something random had been the top feature, that would be a warning sign.
5. **Verify your input data is correct before you even start training.** I compared the satellite SST values to the actual buoy temperature readings and they matched almost perfectly (r = 0.998). If the input data is wrong, the model's predictions won't mean anything no matter how good the scores look.
