# 🎲 Tenzies Game (React Edition)

A fun and interactive dice game built with React, where your goal is to roll until all dice show the same number. You can "hold" specific dice to lock their value between rolls. Celebrate your win with confetti and reset the game with a single click!

---

## 🚀 Features

- Roll 10 dice at once with random values from 1–6
- Click on any die to hold its value between rolls
- Win condition: all dice are held **and** have the same value
- Automatic confetti celebration on win 🎉
- Responsive layout and accessibility enhancements
- Auto-focus on the "New Game" button after winning

---

## 🛠️ Tech Stack

- **React** – functional components with Hooks
- **react-use** – for window sizing
- **react-confetti** – for celebratory effects
- **CSS Grid** – clean layout of dice
- **UUID** – unique IDs for dice using `crypto.randomUUID()`

---

## 📦 Installation

```bash
npm install
npm start
