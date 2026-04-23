# CSS Day 6 – Float, Clear, Overflow

## 1. Float (What it does)

The float property moves an element to the left or right side.

Example:
```
float: left;
float: right;
```

### Simple understanding
- The element sticks to one side
- Other content flows around it

Example idea:
Text wrapping around an image.

---

## Float Behavior

- The element leaves normal document flow
- Other elements move around it
- Parent may not detect its height

---

## 2. Problem with Float

Using float can break layout:

- Parent height may collapse
- Next elements may come up beside it
- Layout can look incorrect

---

## 3. Clear (Solution)

Clear is used to stop float effects.

Example:
```
clear: left;
clear: right;
clear: both;
```

### Simple understanding
Clear tells the element:
"Do not stay beside floated elements, go below them."

---

## Clear Behavior

- Moves element below floated elements
- Fixes layout issues caused by float

---

## 4. Overflow (What it does)

Overflow controls what happens when content is bigger than the container.

---

## Types of Overflow

### 1. hidden
```
overflow: hidden;
```
Extra content is cut and not visible.

---

### 2. scroll
```
overflow: scroll;
```
Scrollbars are always visible.

---

### 3. auto
```
overflow: auto;
```
Scrollbars appear only when needed.

---

## Simple understanding

If content is larger than the box:
Overflow decides how to handle it.

---

## 5. Key Concepts

- float → moves element left or right  
- clear → fixes float issues  
- overflow → handles extra content  

---

## 6. Real Use

- float → placing images left/right  
- clear → fixing layout after float  
- overflow → controlling extra content  

---

## 7. Modern Reality

- Float is an old method
- Now replaced by:
  - Flexbox
  - Grid

But still important to understand basics.

---

## 8. Common Mistakes

- Not using clear after float  
- Using float for complex layouts  
- Ignoring overflow in fixed containers  

---

## 9. Quick Revision

- float → move element left/right  
- clear → move element below float  
- overflow → control extra content  

---