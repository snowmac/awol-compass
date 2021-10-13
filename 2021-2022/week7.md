# Welcome to week 7 

Today we're going to start working on learning how to build mobile apps using React Native.  

# Resources

* The ReactNative Tutorial: https://reactnative.dev/docs/tutorial 
* Sign up for an expo account so we can develop on the web: https://expo.dev/

# How we're going to get there 

1. Sign up for a free Expo account: https://expo.dev/
2. Once signed up head to https://snack.expo.dev/
3. Download the mobile app for your phone https://expo.dev/client 

# What's a snack? 

Other then a delicious thing to eat, it's a online code editor like code pen but specifically for the development of mobile apps 

# Our first shared snack

Lets start here: 
https://snack.expo.dev/@adambourg/compass-week-7-sample 

# Overview 

* What is react and react native? 
* What are components? 
* What are classes? 

# RN Components? 

https://reactnative.dev/docs/components-and-apis

# On the fly development

What do we want to build together? Has to be something simple. 

Options: 

1- Implement the product list from last week into a mobile app
Picked this: 2- Simple Calculator app 
3- A weather app, put in your zip and it will fetch the weather and display an image for the weather condition, temp and the city name. 

# React & Native 

What is it? 

=> Library for the web. UI / user interface 

// old way of doing web and app dev 
$('.submit').on('click', function(){  });

Small reusable components

<Modal>
<ConfirmationBox>
<Logo>
<Menu>
<Events>

Component Library 
-> Common collections of UI design elements to reuse through out the applications. 

<Button onClick={this.state.okPress}> Okay </Button> 

Declarative programming
// button, behavior 

Old way 
// button
// event listener 
// behavior

React is for the web, UI library, all about presentation and behavior. 

React Native -> All about building applications using web based tech. JS, HTML, CSS. Compile to natives 
-> Android
-> IOS
-> Roku
-> Smart Watches
-> Chrome OS

1 app source code that can run anywhere

Under the hood you use React and ReactNative almost everyday. 

# Simple Calculator app -- Plan it out 

* Bar for the sum / total 
* 0 - 9 numbers 
* Addition 
* Subtraction
* Multiplication 
* Division
* Equals button
* Clear button

# Whats the diff between == and === 

A lot actually. So much so, this is a common interview question, even on senior developer interviews. 

== -- double equals. It checks the values, not type. Eg, 
1 == '1' // true 
'hello' = hello // true

=== - triple equals. Cares about the value and the type. 
1 === 1 // true 
1 === '1' // false

