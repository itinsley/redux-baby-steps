# Redux in Baby Steps

The cognitive overhead of implementing Redux is significant. This is partly because it provides a solution to managing state in complex apps so appears crazily over-engineered when applied to a simple todo list example but also due to the following:

## A lot of components and concepts
Before you even consider Redux, you will need to be familiar with React concepts such as how state and properties are managed and the difference between pure and impure components. 

When you introduce React, there are a lot of components and concepts to introduce and a lot of them have names that are unintuitive to someone unfamiliar with the flux pattern. Most introductions to Redux require you to include all the following components to get an end-to-end app working. In addition, because Redux is designed for serious apps, all the different components are stored in separate files. 
  * Store
  * Reducer
  * Actions
  * State mapping to props
  * Dispatching
  * Subscriptions


## Abstraction/Indirection
With a framework like Redux your code is not making direct calls to your own functions, in fact you don't interact directly with the store at all - even for configurations! Instead you use further abstractions like Connectors, Providers and Mappings. This is great for an experienced user but for someone new to Redux this feels like a leap of faith and it's easy to get the feeling that this is all just magic - your code works but you don't really know how and as all framework users know, that tends to  mean you're in trouble when things go wrong.

## Staying out of the weeds
I have learnt that keeping my commits small (while keeping the code working) is essential for me to be productive - if I change too many things, then once it breaks I am "in the weeds" and have to undo everything and start again.

This repo is an attempt to go from a 5 line Hello World app to a Redux implementation in the smallest steps I can take - finding a way to introduce each component and each concept 1 baby step at a time, using only one file so that I understand all the code I am introducing to my app.

# Running the app

Dependent on [create-react-app](https://github.com/facebook/create-react-app) so install if necessary, then:

    $ npm install
    $ npm start