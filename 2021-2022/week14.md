# Week 14

Welcome Back! I hope everyone had a good holiday season. We're going to use Expo Dev. I have opened a example here: 
https://snack.expo.dev/@adambourg/compass-week14-todo-list 

# Today's Agenda

We're going to build another React Native App using Expo. We're going to build a simple ToDo list Application. 

# App Features 

* Create item 
* Delete Item
* Add description
* Mark as completed
* Add to category / label

# Todo list item details

It will be a JSON object, here is the example JSON schema: 

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/todo-list-item.schema.json",
  "title": "Todo List Item",
  "description": "A todo list item",
  "type": "object",
  "properties": {
    "todoId": {
      "description": "The unique identifier for a todo item",
      "type": "integer"
    },
    "title": {
      "description": "The title todo item",
      "type": "string"
    },
    "description": {
      "description": "The longer description of an item",
      "type": "string"
    },
    "labels": {
      "description": "An array of labels",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "status": {
      "description": "The status of the todo item",
      "type": "string"
    }
  },
  "required": [
    "todoId",
    "title",
    "status"
  ]
}
```

# Examples

```json
{
  "todoId": 66830491,
  "title": "Pay your mortgage",
  "status": "done",
  "description": "None needed",
  "labels": [
    "house",
    "important"
  ]
}
```

# Homework and the rest of the day 

https://snack.expo.dev/@adambourg/compass-week14-todo-list

```javascript
import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card, Paragraph, TextInput, Button } from 'react-native-paper';

export default function App() {
  const [item, setItem] = useState(''); 
  const [description, setDescription] =  useState(''); 
  const [todoListItems, setTodoListItems] = useState([
    {
      title: 'Mortgage',
      status: 'open',
      description: 'Pay you', 
      labels: ['pizza','woodys','cheese']
    }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Todo List
      </Text>

      <TextInput label="Item" value={item} onChangeText={(text) => setItem(text)} />
      <TextInput label="Description" value={description} onChangeText={(e) => setDescription(e)} />

      <Button onPress={() => {
        setTodoListItems(
          [{
            title: item, 
            description,
            status: 'open'
          },
          ...todoListItems
          ]
        );

        setDescription('');
        setItem(''); 
      }}> Save </Button>


      {todoListItems.map((item) => {
        return (
        <Card style={styles.todoItem}>
          <Card.Title title={item.title} />
          <Card.Content>
            <Paragraph>
              {item.description}
            </Paragraph>

            <Paragraph style={styles.labels}>
              { item.labels ? item.labels.join(', ') : '' }
            </Paragraph>
          </Card.Content>

          <Card.Actions>
            <Button>Done</Button>
            <Button>Delete</Button>
          </Card.Actions>
        </Card>
        );
      })}           

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
  labels: {
    fontSize: 12, 
    fontStyle: 'italic',
    color: '#C2B280',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  todoItem: {
    marginTop: 10
  }
});
```

To do: 

* Wire up the buttons on each card. One to delete the card / todo item and the other to mark it as done. 
* Style the buttons so they are pretty
* Add a labels input field, then render it
