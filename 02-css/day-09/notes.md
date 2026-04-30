# CSS Day 9 – Shadows

## 1. box-shadow

Used to add shadow to elements.

Syntax:
box-shadow: x y blur spread color;

---

## 2. Values

x → horizontal movement  
y → vertical movement  
blur → softness  
spread → size  
color → shadow color  

---

## 3. Types

Soft:
box-shadow: 0 4px 12px rgba(0,0,0,0.2);

Deep:
box-shadow: 0 10px 25px rgba(0,0,0,0.4);

Inset:
box-shadow: inset 2px 2px 8px rgba(0,0,0,0.6);

Multiple:
box-shadow:
  0 2px 5px rgba(0,0,0,0.2),
  0 8px 20px rgba(0,0,0,0.3);

---

## 4. text-shadow

Used for text.

Example:
text-shadow: 2px 2px 5px black;

---

## 5. Important

- box-shadow is shorthand
- spread is optional
- inset is optional

---

## 6. Best Practice

- use rgba instead of black
- keep shadows soft
- avoid very dark shadows

---

## 7. Quick Revision

box-shadow → element  
text-shadow → text  

---