# Week 13 

Last week we started talking about components, layouts and things like that from Twitter bootstrap. Today we're going to get really lost. From the frying pan to the fire as the saying goes. 
# Expo.dev

Remember Expo? Yeah, well, go to https://expo.dev/ and sign into your account. If you don't have an account you need to sign up for one. 
# Speed ramps up

The speed is going to ramp up. We've covered the very basics, if/else, loops, functions, objects, methods, arrays, json and working with HTML, Javascript and CSS. To keep up you have to do the homework. You have to do some out of AWOL reading and studying. 

CodePen is going away unless we're exploring very basic concepts like useState in react. Use it for practice but you won't be using it in class anymore. 
# To practice skills

* Javascript - Do coding katas, here are some options
* https://jskatas.org/
* https://www.codewars.com/collections/best-javascript-katas
* https://dev.to/miku86/javascript-katas-well-of-ideas-easy-3k4d 

* HTML & CSS
* https://csskatas.com/
* https://codepen.io/collection/ABLwQb

# Schedule 

* 12:45 - 1:00 - Overview and expectations 
* 1:00 - 1:30 - Lecture, imperative programming vs declarative, how react uses this, over view of some basic react native components, import statements / export, nodejs intro, etc... 
* 1:30 - 2:00 - Live coding on expo.dev. Hello world introduction. Handling user input, etc.. Talk about the in class independant assignment
* 2:00 - 2:45 - Adam attends a meeting and the class works solo on building the todo list application 

# Lecture 
## imperative programming vs declarative 

Declarative programming is a programming paradigm … that expresses the logic of a computation without describing its control flow.
Imperative programming is a programming paradigm that uses statements that change a program’s state.

Declarative Programming is like asking your friend to fix your car. You don’t care how to fix it, that’s up to her.

Imperative Programming is like your friend calling your father that tells her how to fix your car step by step.

Outline

* Anatomy of a react app 
* Import statements 
* 3rd party Modules / npm 

# LIVE CODING

# Challenge 

Using Todolist mvc as your model implement your own version in React Native. 

https://todomvc.com/ 

* Ability to take an to do item and add it to the list to be done 
* Ability to mark item as complete 
* Ability to delete item 
* Ability to clear the completed items
* Ability to toggle between (All items and completed items)


# Code we completed in class, a list of students and their ages 

```jsx
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function App() {
  const [name, setName] = React.useState(''); 
  const [age, setAge] = React.useState(''); 
  const [list, setList] = React.useState([]);


  const renderItem = ({ item }) => (
    <>
      {item.name} is {item.age} years old
    </>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        <h1> Hello World! </h1>
      </Text>
      
      <Card>
        Student Name
        <TextInput placeholder="Please enter your name" 
        onChangeText={(text) => setName(text)} />

        <br />
        Student Age
        <TextInput placeholder="Please enter your age" 
        onChangeText={(text) => setAge(text)} />

        <br />
        <Button
          onPress={ () => {
            setList([
              ...list, 
              {name, age}
            ])
          }}
          title="Save"
         />
      </Card>

      <h1> Student List</h1>
      
      <FlatList
        data={list}
        renderItem={renderItem}      
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
```
