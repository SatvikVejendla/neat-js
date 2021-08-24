# NEAT.JS

A VERY simple implementation of the NEAT algorithm coded from scratch in javascript to simulate neuroevolution.

NOTE: This project only works for very simple data and isn't suitable for complicated tasks.

## Installation


```npm install neat.node.js```


## Why I made it

I made this project as an introduction to creating my own AI algorithms. Neuroevolution seemed as one of the more promising ones and I decided to implement the NEAT algorithm from scratch. This would give me the hands on experience for other forms of AI algorithms.

## Usage


See "example.js" for a boilerplate for this package. Most of the code is pretty self-explanatory.



First, you need to create a config variable with your model structure. Here, you can customize the network, selection, mutation, and crossovers of the algorithm.

The model is run for 100 generations on a VERY simple dataset of predicting "1" when given an input of "[0,0]".

The fitness is then measured at a maximum value of 1. And however much off the predictions were is how much the fitness is decreased. The highest fitness creatures have the best prediction values.


After running for 100 generations, the model tests itself by looking at the best genome from the last generation and running the data on it. Because of this package's simplicity, THE DATA WILL NOT ALWAYS CONVERGE. THERE WILL BE A ONE IN EVERY FEW THAT FAILS. This is okay. It's common in NEAT algorithms.