# CSS Day 7 – Flexbox

## 1. What is Flexbox?

Flexbox is a layout system used to arrange elements easily in a row or column.

It helps in:
- alignment
- spacing
- responsive layouts

---

## 2. Basic Concept

Flexbox works on two parts:

- Parent → Flex Container  
- Children → Flex Items  

---

## 3. Activate Flexbox

```
display: flex;
```

This is applied on the parent.

---

## 4. Main Axis & Cross Axis

- Main Axis → direction of layout (row by default)  
- Cross Axis → perpendicular direction  

If direction is row:
- main axis = horizontal  
- cross axis = vertical  

---

## 5. Important Properties

### 5.1 justify-content (Main Axis)

Controls horizontal alignment.

Values:
- flex-start  
- flex-end  
- center  
- space-between  
- space-around  
- space-evenly  

---

### 5.2 align-items (Cross Axis)

Controls vertical alignment.

Values:
- flex-start  
- flex-end  
- center  
- stretch  

---

### 5.3 flex-direction

Changes layout direction.

```
row (default)
column
```

---

### 5.4 gap

Adds space between items.

```
gap: 20px;
```

---

### 5.5 flex-wrap

Controls wrapping of items.

```
flex-wrap: wrap;
```

- wrap → next line allowed  
- nowrap → default (no wrapping)  

---

## 6. Flex Item Properties

### 6.1 flex-grow

Controls how much an item can grow.

```
flex-grow: 1;
```

Higher value → takes more space  

---

### 6.2 flex-shrink

Controls shrinking when space is less.

```
flex-shrink: 1;
```

Higher value → shrinks more  

---

### 6.3 flex-basis

Defines initial size of item.

```
flex-basis: 100px;
```

---

## 7. Common Patterns

### Centering (very important)

```
display: flex;
justify-content: center;
align-items: center;
```

---

### Equal spacing

```
justify-content: space-between;
```

---

### Vertical layout

```
flex-direction: column;
```

---

## 8. Why Flexbox is Important

- Easy alignment  
- Replaces float  
- Responsive layouts  
- Used in almost every project  

---

## 9. Common Mistakes

- Applying flex on child instead of parent  
- Confusing justify-content and align-items  
- Forgetting flex-wrap  
- Overusing fixed widths  

---

## 10. Quick Revision

- display: flex → start flexbox  
- justify-content → horizontal  
- align-items → vertical  
- flex-direction → row / column  
- gap → space between items  
- flex-wrap → next line  

---

## 11. One Line Summary

Flexbox = simple way to align and arrange elements.

---