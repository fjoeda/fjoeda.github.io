---
title: Automatic ICD Coding
excerpt: An experimental demo for automatic ICD-10 and ICD-9-CM coding of clinical notes using zero-shot named entity recognition and semantic search.
description: A dashboard project exploring the potential of automatic ICD-10 and ICD-9-CM coding for clinical notes using zero-shot named entity recognition and ICD code mapping with semantic search.
publishDate: 2026-07-05
tags:
  - Medical NLP
  - GLiNER Biomed
  - Zero-shot NER
  - Keyword and Semantic Search
demoUrl: https://auto-icd-streamlit-661990944024.asia-southeast2.run.app/?embed=true
references: []
---

This project explores the potential of automatic ICD-10 and ICD-9-CM coding for clinical notes using zero-shot named entity recognition (NER) and ICD code mapping using keyword and semantic search. The goal is to streamline the process of assigning standardized medical codes to unstructured clinical text, which can enhance data analysis, billing, and research in healthcare.

The demo leverages the GLiNER Biomed model for zero-shot NER, specifically model from [`Ihor/gliner-biomed-small-v1.0`](https://huggingface.co/Ihor/gliner-biomed-small-v1.0), allowing it to identify relevant disease and procedure entities in clinical notes without requiring extensive labeled training data. Once entities are recognized, they are mapped to the corresponding ICD-10 codes for diseases diagnosis and ICD-9-CM codes for procedures with a combination of keyword search and semantic search, leveraging MedEmbed model ([`abhinand/MedEmbed-small-v0.1`](https://huggingface.co/abhinand/MedEmbed-small-v0.1)). Both GLiNER Biomed and MedEmbed are encoder-based models, enabling the inference process to be performed quickly and can be run on a CPU, making it accessible for various applications. Re-ranking model can be used to improve the accuracy of the mapping but due to the limited size of the demo, it is not included in this implementation.