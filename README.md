<br></br>

<span style="color: #00d8fe">React</span> _Reacts_ to state changes by re-rendering the ui

# Udemy - Master modern React

In deze repo komt alles wat ik gemaakt heb tijdens deze [udemy cursus](https://www.udemy.com/course/the-ultimate-react-course/).

Index:

- [Course files](https://github.com/jonasschmedtmann/ultimate-react-course)

1. [Challenges](./Challenges/)
   1. [Challenge 01 profile card](./Challenges/challenge-01-profilecard/)
2. [01 pure react](./01-pure-react/)
   1. React basics
3. [02 js review](./02-js-review/)
   1. Javascript deconstructing
   2. Deconstructing met array's
   3. Rest/spread operator
   4. Template literals
   5. Ternaries instead of if/else statements
   6. Arrow functions
   7. Short-circuiting en logical operators
      - &&
      - ||
      - ??
   8. Optionals chaining
      - .map
      - .filter
      - Array reduction
      - .sort
      - immutable arrays
      - Asynchoronous Javascript promises
      - Async/await
4. [03 pizza menu](./03-pizza-menu/)
   1. Versie 1
   2. Versie 2 (Met kennis van de sectie)

#### Emoji tip

`win + .` opent emoji menu op windows.

# Section 7 "thinking in react"

Thinking proces:

1. Break ui into components
2. Build static version in React (without state)
3. State menagement
   1. Think about state:
   - When to use state
   - Types of state: local vs. global
   - Where to place piece of state
   2. Establish data flow
   - One way data flow
   - Child to parent communication
   - Accessing global state

## Local vs global state

| Local state                                                      | Global state (shared state)          |
| ---------------------------------------------------------------- | ------------------------------------ |
| Can only be viewed by one or few components                      | Can be viewed by many components     |
| Only that component and child component can acces it (via props) | State is shared with many components |
| Always start with local state                                    | Only when really needed              |

## When and where?

The way of thinking can make it clear if you need to use state or a normal veriable.

1. You need to store data
2. Think to yourself: will this data change at some point?

   1. No, then use a regular variable
      Need to store data => Will data change at some point? => No, then use regular veriable
   2. Yes, can be computed from existing state/props?
      1. Yes, [Derive state]()
      2. No, should it re-render component?
         1. No, use [Ref]()
         2. Yes, place a new piece of state in component

3. Is state veriable only used by this component?
   1. Yes, leave it in that component
   2. no, it is only used by the child component?
      1. Yes, pass to child component via props
      2. No, lift state up to first common parent component (also called "lifting state up")
      3. No, use [global state]()
