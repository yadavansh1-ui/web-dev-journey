# JavaScript Day 8 – Events

## 1. What is an Event?

An event is an action performed by the user.

Examples:
- click
- typing
- mouse hover
- keyboard press
- form submit

---

## 2. addEventListener()

Used to listen for events.

Syntax:

element.addEventListener(
  "event",
  function() {}
)

Example:

button.addEventListener(
  "click",
  function() {}
)

---

## 3. Click Event

Runs when user clicks element.

Example:

click

Used for:
- buttons
- menus
- toggles

---

## 4. Input Event

Runs whenever input value changes.

Example:

input

Used for:
- search bars
- forms
- live validation

---

## 5. Keydown Event

Runs when key is pressed.

Example:

keydown

Used for:
- shortcuts
- games
- keyboard navigation

---

## 6. Mouse Events

Common mouse events:

mouseenter
mouseleave
mouseover
mouseout

Used for:
- hover effects
- tooltips
- animations

---

## 7. Event Object

Every event automatically creates an object.

Example:

function(event)

Contains information like:
- target
- key pressed
- mouse position

---

## 8. Event Target

Returns element that triggered event.

Example:

event.target

---

## 9. Why Events Matter?

Events make websites interactive.

Without events:
websites remain static.

---

## 10. Common Events

click
input
submit
keydown
keyup
mouseenter
mouseleave

---

## 11. Quick Revision

event → user action

addEventListener →
listen for action

click →
button interaction

input →
typing detection

keydown →
keyboard action

---

## 12. One Line Understanding

Events allow JavaScript to react to user actions.

---