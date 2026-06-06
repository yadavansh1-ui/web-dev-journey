# JavaScript Day 11 – Timing Functions

## 1. What are Timing Functions?

Timing functions allow JavaScript
to execute code later or repeatedly.

Examples:
- countdown timer
- OTP resend
- auto slideshow
- notifications

---

# setTimeout()

## 2. What is setTimeout()?

Runs code once after a delay.

Syntax:

setTimeout(
  function() {},
  timeInMilliseconds
)

Example:

setTimeout(function() {

  console.log("Hello");

}, 2000);

Runs after 2 seconds.

---

## 3. Milliseconds

1000 ms = 1 second

Examples:

1000 → 1 sec

2000 → 2 sec

5000 → 5 sec

---

# clearTimeout()

## 4. What is clearTimeout()?

Cancels timeout before execution.

Example:

const id = setTimeout(...)

clearTimeout(id)

---

# setInterval()

## 5. What is setInterval()?

Runs code repeatedly
after fixed intervals.

Example:

setInterval(function() {

  console.log("Running");

}, 1000);

Runs every second.

---

# clearInterval()

## 6. What is clearInterval()?

Stops setInterval execution.

Example:

clearInterval(intervalId)

---

## 7. Real World Uses

### setTimeout()

- welcome messages
- notifications
- delayed actions

### setInterval()

- clocks
- countdowns
- live updates

---

## 8. Important Understanding

setTimeout()

Runs:
ONE TIME

setInterval()

Runs:
AGAIN AND AGAIN

---

## 9. Common Mistakes

- forgetting clearInterval()
- creating multiple intervals accidentally
- confusing milliseconds with seconds

---

## 10. Quick Revision

setTimeout → run later once

clearTimeout → cancel timeout

setInterval → run repeatedly

clearInterval → stop interval

---

## 11. One Line Understanding

Timing functions help JavaScript control when and how often code runs.

---