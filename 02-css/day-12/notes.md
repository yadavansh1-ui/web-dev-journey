# CSS Day 12 – 2D Transforms

## 1. What is Transform?

Transform is used to change:
- position
- size
- rotation
- shape

without affecting normal document flow.

---

## 2. Why Transform is Important?

Transforms are used in:
- hover effects
- animations
- buttons
- cards
- modern UI interactions

---

## 3. Types of 2D Transforms

### A. Translate

Used to move element.

Example:
transform: translate(30px, 20px);

👉 first value = X axis (left/right)  
👉 second value = Y axis (up/down)

---

### B. Rotate

Used to rotate element.

Example:
transform: rotate(45deg);

👉 deg = degree

---

### C. Scale

Used to increase or decrease size.

Example:
transform: scale(1.2);

👉 1 = original size  
👉 >1 = bigger  
👉 <1 = smaller

---

### D. Skew

Used to tilt element.

Example:
transform: skew(20deg);

---

## 4. Combining Transforms

You can combine multiple transforms.

Example:

transform:
  translateY(-10px)
  rotate(10deg)
  scale(1.1);

---

## 5. Important Concept

Transforms do NOT affect surrounding layout.

They visually move the element only.

---

## 6. Best Practices

- use transform with transition
- prefer transform over top/left movement
- keep effects smooth and simple

---

## 7. Common Mistakes

- forgetting transition
- overusing rotate/skew
- using too much scale

---

## 8. Quick Revision

translate → move  
rotate → turn  
scale → resize  
skew → tilt  

---

## 9. One Line Understanding

Transform changes how element looks without changing layout.

---