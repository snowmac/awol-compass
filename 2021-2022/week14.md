# Week 14

Welcome Back! I hope everyone had a good holiday season. 

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
        "type": "array",
        "items": {
            "type": "string",
            "enum": ["open", "done", "deleted"]
        }
    }
  },
  "required": [ "todoId", "title", "status" ]
}
```