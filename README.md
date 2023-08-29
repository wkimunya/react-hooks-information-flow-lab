# React Information Flow Lab

## Learning Goals

- Use callback functions to update state in a parent component
- Move state based on which components need access to it

## Introduction

Last time we worked on the Shopping List app, we ended up with the following
component hierarchy:

```txt
App
└── ShoppingList
    ├── Item
    ├── Item
    └── Item
```

However, it would probably make more sense to break the app down more like this:

![demo](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-information-flow-lab/demo.png)

```txt
App
├── Header
└── ShoppingList
    ├── Filter
    ├── Item
    ├── Item
    └── Item
```

Your goal is to refactor the code from the previous shopping list lab to match
the component structure in the image above. As you work on refactoring the code,
keep in mind:

- Which components should hold **state**? Which components need access to that state?
- How can we update state in one component from a child component?

Also, remember what we learned in the previous lesson:

- For information to propagate _down_ the component tree, parents pass `props`
  to their children
- For information to propagate _up_ the component tree, we typically invoke
  callbacks that were passed from parents to children as `props`
- Components of the same level (sibling components) cannot communicate directly!
  We can only communicate up and down the component tree. So if multiple
  components need to share the same information, that state should live in the
  parent component (or a more general ancestor).

## Deliverables

### Header


