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

This was a group project from an AI fundamentals course. The goal was to build something that used a greedy algorithm in a concrete and understandable way, so we chose Mancala.

Mancala is a turn-based strategy game where move quality can be estimated directly from the immediate score effect of selecting a pit. That made it a good fit for a greedy agent that evaluates the next move and chooses the best short-term gain.

We used Streamlit for the interface, so the visual layer was simple, but the project was a practical exercise in turning a textbook heuristic into a playable opponent.