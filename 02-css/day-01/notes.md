# CSS Day 1 – Fundamentals & Selectors

## What I Learned

Today I began my journey with CSS and understood how to separate structure (HTML) from design (CSS). I also learned how to target elements using selectors.

---

## Core Concept

HTML defines the structure of a webpage.  
CSS is used to control its appearance and layout.

👉 Clean development flow:
1. Build HTML structure  
2. Apply CSS styling  

---

## Ways to Add CSS

### External CSS (Best Practice)

```
<link rel="stylesheet" href="style.css">
```

- `rel="stylesheet"` → defines the relationship (CSS file)  
- `href` → path to the CSS file  

💡 This is the standard approach used in real-world projects.

---

### Internal CSS

- Defined inside `<style>` tag in `<head>`  
- Used for small projects or testing  

---

### Inline CSS

- Applied directly inside HTML elements  
- Not recommended for scalable projects  

---

## CSS Selectors (Targeting Elements)

### Element Selector
```
h1 {
  color: blue;
}
```
Targets all `<h1>` elements.

---

### Class Selector
```
.box {
  background-color: black;
}
```
- Reusable  
- Can be applied to multiple elements  

---

### ID Selector
```
#title {
  color: red;
}
```
- Unique  
- Used for a single element  

---

### Group Selector
```
h1, p {
  color: green;
}
```
Applies same styling to multiple elements.

---

## Common CSS Properties

- `color` → text color  
- `background-color` → background color  
- `font-size` → text size  
- `font-family` → font style  

---

## Key Takeaways

- Always separate structure and styling  
- Use external CSS for maintainability  
- Selectors are the core of CSS control  
- Class is reusable, ID is unique  

---

## Summary

- CSS adds visual styling to HTML  
- External CSS is preferred  
- Selectors define which elements to style  
- Clean structure leads to better scalability  

---
