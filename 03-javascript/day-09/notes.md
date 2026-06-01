# JavaScript Day 9 – Events

## 1. What is an Event?

An event is an action performed by user or browser.

Examples:
- click
- typing
- submit
- key press
- mouse movement

---

## 2. addEventListener()

Used to listen for events.

Syntax:

element.addEventListener(
  "event",
  function() {}
)

---

# COMMON EVENTS

## 3. click

Triggered when user clicks.

Example:

button.addEventListener(
  "click",
  function() {}
)

---

## 4. input

Triggered when value changes.

Useful for:
- search bars
- forms
- live validation

---

## 5. keydown

Triggered when key is pressed.

Useful for:
- shortcuts
- games
- keyboard controls

---

## 6. mouseover

Triggered when mouse enters.

---

## 7. mouseout

Triggered when mouse leaves.

---

# EVENT OBJECT

## 8. event

Every event creates an event object.

Example:

function(event) {
  console.log(event);
}

Contains:
- target
- type
- key
- mouse position

---

# EVENT FLOW

## 9. Event Bubbling

Event travels:

Child → Parent → Document

Default behavior.

---

## 10. Event Capturing

Event travels:

Document → Parent → Child

Less commonly used.

---

## 11. preventDefault()

Stops default browser behavior.

Example:
- form submit
- link navigation

---

## 12. Event Delegation

Attach one listener to parent
instead of many children.

Improves performance.

---

## 13. Important Understanding

Events make web pages interactive.

Without events:
JavaScript cannot react to users.

---

## 14. Quick Revision

click → button click

input → typing

keydown → keyboard press

mouseover → mouse enter

mouseout → mouse leave

event → event details

---

## 15. One Line Understanding

Events allow JavaScript to respond to user actions.

---