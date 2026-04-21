# CSS – Size Units

## 1. Introduction

CSS units are used to define the size of elements such as width, height, font-size, margin, and padding.

Units are divided into two categories:

1. Absolute Units → fixed size  
2. Relative Units → flexible and responsive  

---

## 2. Absolute Units

These units have fixed values and do not change based on screen size.

### px (Pixels)

- Most commonly used unit
- Represents a fixed size on the screen

Example:
```
width: 200px;
font-size: 16px;
```

Use Case:
- Borders
- Small spacing
- Precise control

Limitation:
- Not responsive

---

## 3. Relative Units

These units adapt based on parent, root, or screen size.

---

### 3.1 Percentage (%)

- Relative to parent element

Example:
```
width: 50%;
```

Use Case:
- Layouts
- Responsive widths

---

### 3.2 em

- Relative to parent font-size

Example:
```
font-size: 2em;
```

Behavior:
- Multiplies based on parent
- Can become difficult to manage in nested elements

Use Case:
- Rarely used for layouts

---

### 3.3 rem (Root em)

- Relative to root (`html`) font-size

Example:
```
font-size: 1.5rem;
```

Default:
```
1rem = 16px
```

Advantages:
- Consistent across the page
- Easy to scale

Use Case:
- Recommended for font sizes

---

### 3.4 vw (Viewport Width)

- 1vw = 1% of screen width

Example:
```
width: 50vw;
```

Use Case:
- Full-width layouts
- Responsive sections

---

### 3.5 vh (Viewport Height)

- 1vh = 1% of screen height

Example:
```
height: 100vh;
```

Use Case:
- Full screen sections

---

### 3.6 auto

- Automatically calculated by browser

Example:
```
margin: auto;
```

Use Case:
- Centering elements

---

## 4. Unit Comparison

| Unit | Based On | Responsive |
|------|----------|-----------|
| px   | fixed    | No        |
| %    | parent   | Yes       |
| em   | parent font | Yes    |
| rem  | root font | Yes      |
| vw   | viewport width | Yes |
| vh   | viewport height | Yes |

---

## 5. Best Practices (Industry)

### Fonts
- Use `rem`
- Avoid px for scalable design

---

### Layout (Width)
- Use `%` or `vw`

---

### Height
- Use `vh` for full screen sections

---

### Spacing
- Use `px` or `rem`

---

## 6. Important Concepts

### Default Root Size
```
1rem = 16px
```

---

### Responsiveness

Bad:
```
width: 500px;
```

Good:
```
width: 50%;
```

---

### Consistency

- Do not mix too many units randomly
- Maintain uniform scaling system

---

## 7. Most Used Units (Remember)

```
px + rem + % + vh/vw
```

These cover almost all real-world use cases.

---

## 8. Common Mistakes

- Overusing `em` (creates nesting issues)
- Using fixed `px` everywhere
- Mixing many units unnecessarily

---

## 9. Summary

- Absolute units are fixed (px)
- Relative units are flexible (% , rem , vw , vh)
- rem is best for fonts
- % and vw are best for layout
- vh is useful for full screen sections

---

## 10. Quick Revision

- px → fixed size  
- % → relative to parent  
- rem → relative to root  
- vw → screen width  
- vh → screen height  
- auto → automatic  

---