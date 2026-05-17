# JavaScript Day 2 – Conditions and Loops

## 1. Why Conditions?

Conditions help JavaScript make decisions.

Example:
- login success
- marks check
- age validation

---

# CONDITIONS

## 2. if Statement

Runs code if condition is true.

Example:

if (age >= 18) {
  console.log("Adult");
}

---

## 3. if else

Used when two outcomes exist.

Example:

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

---

## 4. else if

Used for multiple conditions.

Example:
- grades
- traffic lights
- app states

---

## 5. switch

Alternative to multiple else if.

Best for:
- menu systems
- day selection
- fixed values

Important:
break prevents further execution.

---

## 6. Ternary Operator

Short form of if else.

Syntax:

condition ? trueValue : falseValue

Example:

age >= 18 ? "Adult" : "Minor"

---

## 7. Truthy and Falsy

Falsy values:
- false
- 0
- ""
- null
- undefined
- NaN

Everything else is mostly truthy.

---

# LOOPS

## 8. Why Loops?

Loops repeat code automatically.

Without loops:
same code written many times.

---

## 9. for Loop

Best when number of repetitions is known.

Syntax:

for (start; condition; increment)

---

## 10. while Loop

Runs while condition is true.

Used when repetitions are unknown.

---

## 11. do while

Runs at least once even if condition is false.

---

## 12. Nested Loop

Loop inside another loop.

Used for:
- patterns
- grids
- matrices

---

## 13. break

Stops loop completely.

---

## 14. continue

Skips current iteration.

---

## 15. Quick Revision

if → decision  
switch → multiple fixed cases  
for → repeat known times  
while → repeat until condition changes  
break → stop loop  
continue → skip iteration  

---

## 16. One Line Understanding

Conditions make decisions.  
Loops automate repetition.

---