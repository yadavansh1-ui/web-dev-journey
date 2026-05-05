# CSS Day 11 – Animations

## 1. What is Animation?

Animation = continuous movement over time

Difference:
- Transition → happens once (on hover)
- Animation → runs continuously

---

## 2. Key Concept

Animation has 2 parts:

1. animation property (on element)
2. @keyframes (defines movement)

---

## 3. animation property

Example:
animation: moveBox 2s infinite;

👉 Means:
- moveBox → animation name
- 2s → duration
- infinite → repeat forever

---

## 4. @keyframes

Defines steps of animation

Example:

@keyframes moveBox {
  from { transform: translateX(0); }
  to   { transform: translateX(200px); }
}

---

## 5. Using %

Instead of from/to:

0% → start  
50% → middle  
100% → end  

Example:

@keyframes scaleBox {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.5); }
  100% { transform: scale(1); }
}

---

## 6. Animation Properties

animation-name → name  
animation-duration → time  
animation-iteration-count → repeat  
animation-timing-function → speed  
animation-delay → delay  
animation-direction → reverse/alternate  

---

## 7. Example (Full)

animation: moveBox 2s ease infinite;

---

## 8. Timing Functions

ease → smooth  
linear → constant  
ease-in → slow start  
ease-out → slow end  

---

## 9. Important Difference

Transition:
- needs trigger (hover)
- runs once

Animation:
- no trigger needed
- runs continuously

---

## 10. Best Practices

- keep animations smooth  
- use transform for movement  
- avoid heavy animations  
- don’t overuse  

---

## 11. Common Mistakes

- forgetting keyframes  
- wrong animation name  
- too fast/too slow  

---

## 12. Quick Revision

animation → continuous motion  
keyframes → define steps  
duration → time  
infinite → repeat  

---

## 13. One Line Understanding

Animation = repeated smooth movement controlled by keyframes

---