# CSS Day 2 – Colors & Fonts (Complete Notes)

## What I Learned

Today I learned how to apply different types of colors and font styling in CSS to improve the visual appearance of a webpage.

---

## 🎨 CSS Colors

CSS provides multiple ways to define colors.

---

### 1. Named Colors

Simple predefined color names.

Example:
```
color: red;
color: blue;
```

---

### 2. HEX Colors

- Written using `#` followed by 6 characters  
- Format: `#RRGGBB`

Example:
```
color: #00ffcc;
```

👉 Most commonly used in real projects.

---

### 3. RGB (Red, Green, Blue)

- Values range from 0 to 255  

Example:
```
color: rgb(255, 0, 0);   /* red */
```

---

### 4. RGBA (with transparency)

- Same as RGB but includes alpha (opacity)  
- Range: 0 (transparent) to 1 (solid)

Example:
```
color: rgba(255, 0, 0, 0.5);
```

👉 Used when transparency is needed.

---

### 5. HSL (Hue, Saturation, Lightness)

- Hue → color type (0–360)  
- Saturation → intensity (%)  
- Lightness → brightness (%)  

Example:
```
color: hsl(200, 100%, 50%);
```

---

## 🧠 Color Usage Summary

- HEX and RGB → most commonly used  
- RGBA → for transparency  
- HSL → less common but useful  

---

## 🔤 CSS Fonts

Fonts control the appearance of text.

---

### 1. font-size

Defines the size of text.

Example:
```
font-size: 18px;
```

---

### 2. font-weight

Controls boldness.

Values:
- normal  
- bold  
- 100–900  

Example:
```
font-weight: bold;
```

---

### 3. font-style

Controls text style.

Values:
- normal  
- italic  

Example:
```
font-style: italic;
```

---

### 4. font-family

Defines the font type.

Example:
```
font-family: Arial, sans-serif;
```

👉 Always provide a backup font.

---

## ⚠️ Important Rules

- Always give fallback fonts in `font-family`  
- Use readable font sizes (16px+)  
- Avoid too many different fonts  
- Maintain consistency in design  

---

## 🚀 Summary

- CSS colors can be defined in multiple formats  
- Fonts improve readability and design  
- HEX and RGB are most commonly used  
- Proper font selection enhances user experience  

---

## ⚡ Hinglish Quick Revision (Important Points)

👉 color likhne ke multiple tareeke hote hain (HEX, RGB sabse common)  

👉 RGBA use hota hai jab transparency chahiye hoti hai  

👉 font-size = text ka size  
👉 font-weight = boldness  
👉 font-style = italic  

👉 font-family me hamesha backup font dena  

👉 zyada fonts use mat karo (UI kharab hota hai)  

---