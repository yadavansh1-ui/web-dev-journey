# CSS Day 4 – Display Property

## Core Concept

The display property defines how an element behaves in layout.

---

## 1. Block

- Takes full width  
- Starts on new line  

Example:
```
display: block;
```

---

## 2. Inline

- Takes only content width  
- Stays in same line  
- Cannot set width/height  

Example:
```
display: inline;
```

---

## 3. Inline-Block

- Stays in same line  
- Can set width and height  

Example:
```
display: inline-block;
```

---

## 4. None

- Element is removed from layout  

Example:
```
display: none;
```

---

## Key Differences

| Property | New Line | Width Control |
|---------|---------|--------------|
| Block   | Yes     | Yes          |
| Inline  | No      | No           |
| Inline-Block | No | Yes          |

---

## Important Points

- Block elements stack vertically  
- Inline elements flow horizontally  
- Inline-block gives best control  
- display: none removes element completely  

---

## Quick Revision

- block → full width  
- inline → same line  
- inline-block → best of both  
- none → hidden  

---