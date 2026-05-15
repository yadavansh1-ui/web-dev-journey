# CSS Day 14 – Real 3D Card UI

## 1. Goal

Create modern interactive UI using:
- transform
- perspective
- transition
- shadow

---

## 2. perspective

Creates depth feeling.

Example:
perspective: 1000px;

Without perspective:
3D effects look flat.

---

## 3. rotateX vs rotateY

rotateX → vertical tilt  
rotateY → horizontal tilt  

---

## 4. transform-style

transform-style: preserve-3d;

Maintains 3D transformations.

---

## 5. Combined Transform

Example:

transform:
  rotateY(15deg)
  rotateX(10deg)
  translateY(-10px)
  scale(1.05);

👉 Multiple transforms can work together.

---

## 6. Shadow

Shadow improves depth and realism.

Example:
box-shadow: 0 20px 30px rgba(0,0,0,0.5);

---

## 7. Transition

Makes hover smooth.

Example:
transition: 0.4s ease;

---

## 8. Real UI Flow

1. User hovers card  
2. Card tilts in 3D  
3. Shadow increases  
4. Card lifts slightly  

👉 creates premium UI feel

---

## 9. Best Practices

- keep movement subtle
- avoid too much rotation
- combine shadow + transform
- use smooth transitions

---

## 10. Quick Revision

perspective → depth  
rotateX/Y → tilt  
transition → smoothness  
shadow → realism  

---

## 11. One Line Understanding

Modern UI = transform + perspective + shadow + transition

---