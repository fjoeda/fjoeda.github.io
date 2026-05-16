---
title: An Empirical Study of Retrieval-Augmented Generation for Corrective Maintenance
authors:
    - Yudanto, F.
    - Rafikhansa, R.
    - Bahiuddin, I.
    - Bahari, G.
    - Winarno, A.
year: 2025
link: 
presentedAt: ASPEN 2025, New Taipei, Taiwan
---

The critical nature of corrective maintenance in ensuring system functionality and minimizing downtime requires an immediate and well-informed response to unexpected failures of precise machining. However, the complexity of diagnosing and resolving such issues often involves sifting through a large amount of technical documents, a process that can be both demanding and time-consuming. To overcome these challenges, Retrieval-Augmented Generation (RAG) offers a solution, serving as an Intelligent Assistant. This solution offers maintenance personnel a streamlined approach to information access and faster decision-making during critical corrective maintenance scenarios.

Our solution employs three main processes: (1) document extraction; (2) context retrieval; and (3) response generation. We used the Qwen3-Embedding-0.6B model for both document and query embedding processes, producing vector representations during the document indexing phase. In the content retrieval process, we employed two retrieval methods, specifically keyword-based retrieval utilizing BM25 and semantic retrieval. The semantic retrieval involved comparing embedding vectors for similarity and then reranking content with the Qwen3-Reranker-0.6B model. This step selects the relevant content, which was then used by local Large Language Models (LLM) as the additional context within the prompt for response generation. We also performed a comparative analysis between thinking and non-thinking LLMs focusing on model faithfulness, context relevance, and answer accuracy. Overall, this work provides empirical evidence for developing AI-assisted solutions to enhance the efficiency and effectiveness of complex precision machine maintenance.
