# Day 5 - HTML Forms (Complete)

## What I Learned

Today I learned how to create complete forms and collect user input properly using different input types and attributes.

---

## Form Tag

- `<form>` is used to collect user data from users  

---

## Input Tag

- `<input>` is used to take user input  

### Input Types

- `text` → for name  
- `email` → for email  
- `password` → for password  
- `number` → numeric input  
- `date` → date selection  
- `radio` → select one option  
- `checkbox` → select multiple options  
- `file` → upload file  
- `range` → slider  

---

## Label

- `<label>` describes input fields  
- `for` attribute connects label with input `id`  
👉 Clicking label focuses the input  

---

## Select & Option

- `<select>` → dropdown  
- `<option>` → items inside dropdown  

---

## Textarea

- `<textarea>` → used for multi-line input  

---

## Button

- `<button>` → used to submit form  

---

## Important Attributes (with use)

### `id`
- unique identifier for element  
- connects with label  

Example:
```
<input id="name">
```

---

### `name`
- used to send data to backend  
- backend reads data using name  

Example:
```
<input name="username">
```

👉 Without `name`, data will NOT be sent ❌

---

### `value`
- actual value sent to backend  

Example:
```
<input type="radio" value="male">
```

---

### `placeholder`
- shows hint text inside input  

Example:
```
<input placeholder="Enter your name">
```

---

### `required`
- makes field mandatory  

Example:
```
<input required>
```

---

### `type`
- defines input type  

Example:
```
<input type="email">
```

---

### `for`
- used in label  
- connects label with input `id`  

Example:
```
<label for="email">Email</label>
<input id="email">
```

---

## ⚠️ Important Rules (Must Remember)

### 🧠 Label Rule
- `for` = input ka `id`  
👉 label click → input focus  

---

### 🧠 Radio Rule
- same `name` → only one option selected  

---

### 🧠 Checkbox Rule
- multiple options can be selected  

---

### 🧠 Name Rule (Most Important)
- `name` nahi = data send nahi hoga ❌  

---

### 🧠 Value Rule
- backend ko ye hi value bheji jati hai  

---

## Summary

Today I learned:
- complete form structure  
- all input types  
- attributes and their real use  
- important rules for forms  

---

This was Day 5 of my web development journey.