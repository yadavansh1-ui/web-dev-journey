# CSS Day 3 – Box Model

## Core Concept

Every HTML element is a rectangular box.

Structure (inside → outside):
Content → Padding → Border → Margin

---

## 1. Content

- The actual text or element
- `width` and `height` apply here

Example:
```
width: 200px;
height: 100px;
```

---

## 2. Padding (Inner Space)

- Space between content and border
- Increases the total size of the element

Example:
```
padding: 20px;
```

Shorthand:
```
padding: 10px 20px;   /* top-bottom, left-right */
```

---

## 3. Border

- Surrounds padding and content
- Defines the visible boundary

Example:
```
border: 2px solid black;
```

---

## 4. Margin (Outer Space)

- Space outside the element
- Controls distance between elements

Example:
```
margin: 30px;
```

Shorthand:
```
margin: 10px 20px;
```

---

## Box Size Calculation

### Default Behavior

```
Total width = width + padding + border
```

This means increasing padding or border increases the overall size.

---

### Using border-box

```
box-sizing: border-box;
```

- Width remains fixed
- Padding and border are included inside the defined width

---

## Important Differences

| Property | Affects Size | Purpose |
|---------|-------------|--------|
| Padding | Yes         | Space inside |
| Border  | Yes         | Boundary |
| Margin  | No          | Space outside |

---

## Common Use Cases

- Padding → spacing inside buttons, cards
- Margin → spacing between sections or elements
- Border → highlighting or separating elements

---

## Key Points to Remember

- Width applies to content only (by default)
- Padding increases box size
- Margin does not increase size, it shifts the element
- Use `box-sizing: border-box` for predictable layouts
- Consistent spacing improves UI quality

---

## Quick Revision

- Box = Content + Padding + Border + Margin
- Padding → inside space
- Margin → outside space
- Border → boundary
- Default → size increases with padding
- `border-box` → size stays fixed

---