# CSS Day 13 – 3D Transforms

## 1. What are 3D Transforms?

3D transforms create depth and realistic movement.

Unlike 2D transforms, they use:
- X axis
- Y axis
- Z axis

---

## 2. Axes Understanding

X → left/right  
Y → up/down  
Z → depth (towards screen)

---

## 3. perspective

Used to create depth effect.

Example:
perspective: 1000px;

Without perspective:
3D effect looks flat.

---

## 4. rotateX()

Rotates element vertically.

Example:
transform: rotateX(60deg);

---

## 5. rotateY()

Rotates element horizontally.

Example:
transform: rotateY(60deg);

---

## 6. translateZ()

Moves element in depth.

Example:
transform: translateZ(100px);

Positive → comes forward  
Negative → goes backward

---

## 7. scale3d()

Scales element in 3 dimensions.

Example:
transform: scale3d(1.2, 1.2, 1.2);

---

## 8. transform-style

transform-style: preserve-3d;

Used to maintain 3D transformations.

---

## 9. Best Practices

- always use perspective
- keep rotations subtle
- combine with shadow
- use smooth transitions

---

## 10. Common Mistakes

- forgetting perspective
- overusing rotation
- too much movement

---

## 11. Quick Revision

rotateX → vertical tilt  
rotateY → horizontal tilt  
translateZ → depth movement  
perspective → depth feeling  

---

## 12. One Line Understanding

3D transforms create realistic depth and movement.

---