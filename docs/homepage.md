---
title: Forgo
sidebar_label: Forgo
custom_edit_url: null
---

<div style={{ display: "flex", flexWrap: "wrap", paddingBottom: "2em" }}>
  <p style={{ paddingTop: "0.3em", paddingRight: "2em" }}>
    <img alt="Forgo Logo" src="/img/forgo.png" style={{ width: "150px", height: "150px", float: "left",  borderRadius: "1em" }} />
  </p>
  <div style={{ maxWidth: "360px" }}>
    <h2 style={{ fontSize: "1.6em" }}>
    Tiny UI runtime <br />
    for modern web apps.
    </h2>
    <p style={{ fontSize: "1.2em" }}>
      Forgo is a 4KB library that makes it super easy to create modern web apps using JSX (like React).</p>
    <p style={{ fontSize: "1.2em" }}>
      Unlike React, there are very few framework specific patterns and lingo to learn. Everything you already know about DOM APIs and JavaScript will easily carry over.
    </p>
  </div>  
</div>

# forgo

- Use HTML DOM APIs for accessing elements
- There are no synthetic events
- Use closures for maintaining component state
- There's no vDOM or DOM diffing
- Renders are manually triggered

## We'll be tiny. Always.

All of Forgo is in one small JS file (actually it's TypeScript). It is a goal of the project is to remain within that single file.

## Installation

```
npm i forgo
```

## A Forgo Component

A Forgo Component is a function that returns an object with a render() function. The render function is called for the first render, and then subsequently for each rerender.

```tsx
import { rerender } from "forgo";

function SimpleTimer() {
  let seconds = 0; // Look ma no useState

  return {
    render(props, args) {
      setTimeout(() => {
        seconds++;
        rerender(args.element); // rerender!
      }, 1000);

      return <div>{seconds} secs have elapsed...</div>;
    },
  };
}
```

## Mounting the Component

Use the mount() function once your document has loaded.

```js
import { mount } from "forgo";

window.addEventListener("load", () => {
  mount(<SimpleTimer />, document.getElementById("root"));
});
```

## Child Components and Passing Props

That works just as you'd have seen in React.

```jsx
function Parent(props) {
  return {
    render(props, args) {
      return (
        <div>
          <Greeter firstName="Jeswin" />
          <Greeter firstName="Kai" />
        </div>
      );
    },
  };
}

function Greeter(props) {
  return {
    render(props, args) {
      return <div>Hello {props.firstName}</div>;
    },
  };
}
```

## Reading Form Input Elements

You can read form input control values with regular DOM APIs.

There's a small hurdle though - how do you we get a reference to the actual DOM elements? Well, that's where the ref attribute comes in. An object referenced by the ref attribute in an element's markup will have its value property set to the actual DOM element.

Better explained with an example:

```jsx
function Component(props) {
  const myInputRef = {};

  return {
    render(props, args) {
      function onClick() {
        const inputElement = myInputRef.value;
        alert(inputElement.value); // Read the text input!
      }

      return (
        <div>
          <input type="text" ref={myInputRef} />
          <button onclick={onClick}>Click me!</button>
        </div>
      );
    },
  };
}
```

## Unmount

When a component is unmounted, Forgo will invoke the unmount() function if defined for a component. This is of course, totally optional.

```jsx
function Greeter(props) {
  return {
    render(props, args) {
      return <div>Hello {props.firstName}</div>;
    },
    unmount() {
      console.log("Got unloaded.");
    },
  };
}
```

## Recap with a complete example

Finally, let's do a recap with a more complete example. Let's make a Todo List app in TypeScript.

There will be three components:

1. TodoList (the main component)
2. TodoListItem
3. AddTodo

Here's the TodoList, which hosts the other two components.

```tsx
type TodoListProps = {};

function TodoList(props: TodoListProps) {
  let todos: string[] = [];

  return {
    render(props: TodoListProps, args: ForgoRenderArgs) {
      function onTodoAdd(text: string) {
        todos.push(text);
        rerender(args.element);
      }

      return (
        <div>
          <h1>Forgo Todos</h1>
          <ul>
            {todos.map((t) => (
              <TodoListItem text={t} />
            ))}
          </ul>
          <AddTodo onAdd={onTodoAdd} />
        </div>
      );
    },
  };
}
```

Here's the TodoList item, which simply displays a Todo.

```tsx
type TodoListItemProps = {
  text: string;
};

function TodoListItem(props: TodoListItemProps) {
  return {
    render() {
      return <li>{props.text}</li>;
    },
  };
}
```

And here's the AddTodo component. It takes an onAdd function from the parent, which gets called whenever a new todo is added.

```tsx
type AddTodoProps = {
  onAdd: (text: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const input: { value?: HTMLInputElement } = {};

  function onClick() {
    const inputEl = input.value;
    if (inputEl) {
      props.onAdd(inputEl.value);
      inputEl.value = "";
      inputEl.focus();
    }
  }

  return {
    render() {
      return (
        <div>
          <input type="text" ref={input} />
          <button onclick={onClick}>Add me!</button>
        </div>
      );
    },
  };
}
```

That's all. Mount it, and we're ready to go.

```ts
window.addEventListener("load", () => {
  mount(<TodoList />, document.getElementById("root"));
});
```

## Building

Forgo uses the latest JSX createElement factory changes, so you might need to enable this with Babel. More details here: https://babeljs.io/docs/en/babel-plugin-transform-react-jsx

For your babel config:

```json
{
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "throwIfNamespace": false,
        "runtime": "automatic",
        "importSource": "forgo"
      }
    ]
  ]
}
```

If you're using TypeScript, add the following lines to your tsconfig.json file.

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "forgo"
  }
}
```
