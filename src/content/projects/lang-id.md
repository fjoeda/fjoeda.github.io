---
title: Word Level Language Identification
excerpt: Detecting code-mixed Indonesian, Javanese, and English text at word level with a CRF-based NLP pipeline.
description: An NLP experiment focused on identifying the language of each token in Indonesian social-media text written in a code-mixed style.
publishDate: 2024-01-20
tags:
  - NLP
  - CRF
  - Language Identification
  - Python
demoUrl: https://portofolio-demos-sbathld7ya-et.a.run.app/?page=word-level-lang-id&embed=true&embed_options=dark_theme
references:
  - Hidayatullah, Ahmad Fathan. (2022). Code-mixed Indonesian-Javanese-English Twitter Dataset (Version v1) [Data set]. Zenodo. https://doi.org/10.5281/zenodo.7567573
---

Nowadays, user-generated Indonesian social-media text is often written in a code-mixed form. This project explores language identification at the word level so each token can be labeled as Indonesian, Javanese, or English.

The model was trained with code-mixed Twitter data and implemented using Conditional Random Field (CRF). The result reached roughly 90% accuracy and was able to separate the language of individual words reasonably well, although mixed-language patterns are still the hardest edge case.

This experiment became a useful baseline for thinking about richer sequence models. A BERT-based approach is the most obvious next step if the goal shifts from proof of concept to stronger robustness on ambiguous or highly mixed text.