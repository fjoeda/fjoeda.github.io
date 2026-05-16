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

Code-mixing is common in Indonesian social media, where Indonesian, Javanese, and English can appear in the same sentence. This project started from that challenge: identifying the language of each word, not just the language of the whole post.

I built a word-level language identification pipeline using a Conditional Random Field (CRF) model trained on a code-mixed Twitter dataset. The model learns token-level patterns from surrounding context, then assigns each token to Indonesian, Javanese, or English.

The system achieved around 90% accuracy and performed well on clearer boundaries between languages. The hardest cases were highly blended phrases where context and spelling cues overlap.

This work serves as a strong baseline for sequence labeling in low-resource, code-mixed settings, and it points naturally to transformer-based follow-ups such as BERT for better robustness on ambiguous text.