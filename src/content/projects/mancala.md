---
title: Mancala
excerpt: A group project that applied a greedy algorithm to build an opponent agent for the Mancala board game.
description: A game AI exercise focused on using greedy search to choose high-scoring Mancala moves.
publishDate: 2023-11-10
tags:
  - Game AI
  - Greedy Algorithm
  - Streamlit
demoUrl: https://mancala-661990944024.asia-southeast2.run.app/?embed=true
references: []
---

This project came from an AI fundamentals course challenge: build a playable agent that demonstrates a core search idea in a way people can immediately understand. Our team chose Mancala because each move has a clear, measurable short-term payoff, making it a natural fit for a greedy strategy. The agent evaluates available moves by immediate score impact, then selects the option with the highest direct gain.

I helped translate that simple heuristic into a working game loop and interactive demo. We used Streamlit to keep the interface lightweight so the focus stayed on decision behavior rather than visual complexity. The result was a practical bridge between theory and implementation: a textbook greedy algorithm turned into an opponent that users can play against and inspect move by move.