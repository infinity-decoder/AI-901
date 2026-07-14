// Study material controller for AI-901 Practice Portal
(function () {
  "use strict";

  // Default fallback modules (loaded out-of-the-box without server)
  const FALLBACK_NOTES = [
  {
    "filename": "00 Practice_Guide.md",
    "title": "Skills at a glance",
    "content": "# Skills at a glance\n\n[🏠 Back to Home](README.md)\n\n---\n\n- **Identify AI concepts and capabilities (40–45%)**\n- **Implement AI solutions by using Microsoft Foundry (55–60%)**\n\n---\n\n# Identify AI concepts and capabilities (40–45%)\n\n## Describe principles of responsible AI\n\n- Describe considerations for fairness in an AI solution.\n- Describe considerations for reliability and safety in an AI solution.\n- Describe considerations for privacy and security in an AI solution.\n- Describe considerations for inclusiveness in an AI solution.\n- Describe considerations for transparency in an AI solution.\n- Describe considerations for accountability in an AI solution.\n\n## Identify AI model components and configurations\n\n- Describe how generative AI models work.\n- Identify an appropriate AI model, based on capabilities.\n- Identify appropriate model deployment options and configuration parameters.\n\n## Identify AI workloads\n\n- Identify scenarios for common AI workloads, including generative and agentic AI, text analysis, speech, computer vision, and information extraction.\n- Describe common text analysis techniques, including keyword extraction, entity detection, sentiment analysis, and summarization.\n- Identify features and capabilities of speech recognition and speech synthesis.\n- Identify features and capabilities of computer vision and image-generation models.\n- Identify techniques to extract information from text, images, audio, and videos.\n\n---\n\n# Implement AI solutions by using Microsoft Foundry (55–60%)\n\n## Implement generative AI apps and agents by using Foundry\n\n- Create effective system and user prompts for generative AI models.\n- Deploy a model and interact with it in the Foundry portal.\n- Create a lightweight chat client application by using the Foundry SDK.\n- Create and test a single-agent solution in the Foundry portal.\n- Create a lightweight client application for an agent.\n\n## Implement AI solutions for text and speech by using Foundry\n\n- Build a lightweight application that includes text analysis.\n- Respond to spoken prompts by using a deployed multimodal model.\n- Build a lightweight application by using Azure Speech in Foundry Tools.\n\n## Implement AI solutions with computer vision and image-generation capabilities by using Foundry\n\n- Interpret visual input in prompts by using a deployed multimodal model.\n- Create new visual outputs by using generative models.\n- Build a lightweight application that includes vision capabilities.\n\n## Implement AI solutions for information extraction by using Foundry\n\n- Extract information from documents and forms by using Azure Content Understanding in Foundry Tools.\n- Extract information from images by using Content Understanding.\n- Extract information from audio and video by using Content Understanding.\n- Build a lightweight application with information extraction capabilities by using Content Understanding.\n\n---\n\n\n## Exam Domain Breakdown\n\n### Domain 1 — Identify AI Concepts and Responsibilities (40–45%)\n\n**Responsible AI Principles**\nCovers fairness, reliability and safety, privacy and security, inclusiveness,\ntransparency, and accountability in AI solutions.\n\n**AI Model Components**\nHow generative AI models work, choosing the right model based on capabilities,\nand understanding deployment options and configuration parameters.\n\n**AI Workloads**\nScenarios for generative and agentic AI, text analysis, speech, computer vision,\nand information extraction. Includes keyword extraction, entity detection,\nsentiment analysis, summarization, speech recognition/synthesis, and\nimage-generation models.\n\n---\n\n### Domain 2 — Implement AI Solutions with Microsoft Foundry (55–60%)\n\n**Generative AI and Agents**\nCreate system/user prompts, deploy models in the Foundry portal, build lightweight\nchat clients using the Foundry SDK, and create/test single-agent solutions.\n\n**Text and Speech**\nBuild apps with text analysis, respond to spoken prompts via deployed multimodal\nmodels, and use Azure Speech in Foundry Tools.\n\n**Computer Vision and Image Generation**\nInterpret visual input with multimodal models, generate new visual outputs with\ngenerative models, and build vision-capable lightweight apps.\n\n**Information Extraction**\nExtract data from documents, forms, images, audio, and video using Azure Content\nUnderstanding in Foundry Tools, and build extraction apps.\n\n---\n\n## AI-901 vs AI-900 — Key Differences\n\n| Area                  | AI-900 (Old)                   | AI-901 (New)                    |\n|-----------------------|--------------------------------|---------------------------------|\n| Focus                 | Theory and concepts            | Hands-on implementation         |\n| Platform              | Individual Azure AI services   | Microsoft Foundry (unified)     |\n| Coding                | Not required                   | Basic Python helpful            |\n| Agents                | Not covered                    | Core topic                      |\n| Content Understanding | Not covered                    | Core topic                      |\n\n---\n\n## Azure Services to Know\n\n**Azure AI Vision**\nImage classification, object detection, OCR fundamentals.\n\n**Azure AI Language and NLP**\nSentiment analysis, key phrase extraction, entity recognition.\n\n**Azure AI Speech**\nSpeech recognition and text-to-speech for voice-enabled solutions.\n\n**Azure OpenAI / Azure AI Foundry**\nModel deployment, prompt engineering, agent building.\n\n**Azure Content Understanding**\nMultimodal extraction from documents, images, audio, and video.\n\n---\n\n## Official Study Resources\n\n| Resource            | Link                                                                                      |\n|---------------------|-------------------------------------------------------------------------------------------|\n| Official Study Guide | https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901 |\n| Exam Page            | https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/               |\n| Learning Path 1      | https://learn.microsoft.com/en-us/training/paths/ai-concepts/                            |\n| Learning Path 2      | https://learn.microsoft.com/en-us/training/paths/get-started-ai-apps-agents/             |\n| Video Series         | https://learn.microsoft.com/en-us/shows/ai-show/                                         |\n| Community Hub        | https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI               |\n| Exam Sandbox         | https://aka.ms/examdemo                                                                   |\n\n---\n\n## Practice Tests\n\n| Resource           | Details                                                                                           |\n|--------------------|---------------------------------------------------------------------------------------------------|\n| SkillCertPro       | 450 AI-901 Questions 2026 with Master Cheat Sheet — https://skillcertpro.com/product/microsoft-azure-ai-fundamentals-ai-901-exam-questions/ |\n| Tutorials Dojo     | Detailed explanations and cheat sheets — https://tutorialsdojo.com/ai-901-azure-ai-fundamentals-study-guide/ |\n| Microsoft Free Assessment | Available on Microsoft Learn (within ~8 weeks of GA release)                            |\n\n---\n\n## Exam Tips\n\n- Target 85% or above in mock exams before booking the real exam.\n- Domain 2 (Foundry implementation) is 55–60% of the exam — spend at least 2 of your\n  3 study weeks here.\n- Expect 8–10 questions on Azure OpenAI, GPT-4, and responsible AI for generative models.\n- Basic Python familiarity helps with Foundry SDK topics, though concept-focused\n  candidates can still pass without it.\n- Many questions have two obviously wrong answers — understanding business use-cases\n  helps eliminate distractors quickly.\n- Use the Exam Sandbox at https://aka.ms/examdemo to get familiar with the interface\n  before exam day.\n\n---\n\n## Next Steps After AI-901\n\n- AI-103\n\n---\n\n*Last updated: April 2026 | Based on official Microsoft exam objectives dated April 15, 2026*\n\n---\n\n<div align='right'>\n\n[🏠 Back to Home](README.md) | [⬆️ Back to Top](#top)\n\n</div>\n"
  },
  {
    "filename": "01-ai-concepts-and-azure.md",
    "title": "Module 1 — AI Concepts & Getting Started with AI in Azure",
    "content": "# Module 1 — AI Concepts & Getting Started with AI in Azure\n\n> **Exam mapping:** *Identify AI concepts and capabilities* (~40%) and the foundations of\n> *Implement AI solutions with Microsoft Foundry* (~60%).\n> **Public references:** <https://aka.ms/mslearn-ai-concepts> · <https://aka.ms/mslearn-get-started-azure-ai>\n\n---\n\n## 1.1 What is Artificial Intelligence?\n\nArtificial Intelligence (AI) is **software that imitates human capabilities**. In practice that\nmeans software able to:\n\n- **predict outcomes and recognize patterns** from historic data,\n- **evaluate content and make decisions**, then take an appropriate action,\n- **understand and generate language**, holding natural conversations,\n- **interpret visual input** such as images and video,\n- **extract information** from documents and media to build knowledge.\n\nAI is transforming business, education, healthcare, manufacturing, agriculture and more — but\nevery capability above ultimately rests on **machine learning (ML)**: models trained on data to\nmap an input to an output, conceptually `f(x) = y`.\n\n## 1.2 The five common AI workloads\n\n![AI workloads](../diagrams/ai-workloads.svg)\n\n| Workload | What it does | Typical examples |\n|---|---|---|\n| **Generative AI & agents** | Creates original content from prompts; agents act on a user's behalf | Chat assistants, copilots, automated workflows |\n| **Text & language (NLP)** | Infers meaning from written language | Sentiment analysis, entity extraction, summarization |\n| **Computer speech** | Recognizes and synthesizes spoken language | Transcription, voice assistants, screen readers |\n| **Computer vision** | Interprets images and video | Object detection, image captioning |\n| **Information extraction** | Converts documents/media into structured data | Invoice processing, call analysis |\n\n**Key distinctions the exam loves:**\n- *Generative AI* uses a **language model to create original content in response to a prompt** —\n  it is **not** an \"old\" form of AI, and it is **not** restricted to data scientists.\n- An **AI agent** is *an application* that can perform tasks on behalf of a user — not a person.\n\n## 1.3 Responsible AI — the six principles\n\n![Responsible AI](../diagrams/responsible-ai.svg)\n\n| Principle | One-line meaning | Classic exam scenario |\n|---|---|---|\n| **Fairness** | Treat all people equitably; avoid bias | A loan model must not disadvantage a demographic group |\n| **Reliability & safety** | Work correctly within defined limits; test rigorously | Autonomous vehicle / medical prediction must be validated |\n| **Privacy & security** | Protect the data used to train and run models | Personal data must be secured during training & inference |\n| **Inclusiveness** | Benefit everyone, including people with disabilities | Add captions/audio descriptions to reach all users |\n| **Transparency** | Users should understand purpose, behavior, and limits | Publish what data a system uses and how it decides |\n| **Accountability** | Humans stay answerable for AI decisions | Governance framework; a person can override the system |\n\n> **Tip:** questions usually describe a scenario and ask *which principle applies*. Match the\n> action word: bias→Fairness, testing→Reliability, personal data→Privacy, disability→Inclusiveness,\n> \"explain/understand\"→Transparency, \"who is responsible\"→Accountability.\n\n## 1.4 Microsoft Azure — where AI solutions live\n\n![Azure hierarchy](../diagrams/azure-hierarchy.svg)\n\n- A **tenant** is the organizational **security boundary**; identities (users, services) are\n  managed and authenticated through **Microsoft Entra ID**.\n- A **subscription** is the **billing boundary** inside a tenant.\n- **Resource groups** organize and manage related resources.\n- **Resources** are the building blocks — including **Microsoft Foundry**, Azure's platform for\n  AI apps and agents.\n\n## 1.5 Microsoft Foundry\n\n![Foundry structure](../diagrams/foundry-structure.svg)\n\n**Microsoft Foundry** is a unified platform for building AI apps and agents **on top of Azure**\n(it uses Azure compute, networking, identity and security — it does not replace Azure).\n\n- A **Foundry resource** provides compute, storage, model delivery and related services.\n- A **Foundry project** is an isolated work environment for development. Within a project you\n  work with four asset types:\n  - **Models** — choose and deploy from an extensive multi-provider **model catalog**;\n  - **Agents** — create/manage agents that use models for language and reasoning;\n  - **Tools** — connect agents to capabilities so they can act and access information;\n  - **Knowledge** — manage the data sources agents use to ground their answers.\n\n## 1.6 Endpoints, keys and SDKs\n\n![Foundry endpoint](../diagrams/foundry-endpoint.svg)\n\n- An **endpoint** is an **HTTPS address** an application calls to reach a deployed model or\n  service.\n- Requests are authenticated with an **API key** or a **Microsoft Entra ID token**.\n- Endpoints expose **REST** interfaces: the request carries headers plus a **JSON** body; the\n  response returns headers plus JSON results.\n- In real projects you rarely call REST directly — **SDKs** (Python, C#, JavaScript, …) wrap the\n  API for you.\n\n> **Memory hook:** *endpoint = where to call; key = proof you're allowed to call it.* The key is\n> never a storage location, and the endpoint never \"stores secrets.\"\n\n## 1.7 Quick self-check\n\n1. Which boundary does a subscription define — security or billing? *(billing)*\n2. Name the four asset types in a Foundry project. *(models, agents, tools, knowledge)*\n3. A model must be tested to operate safely in bad weather — which principle? *(reliability & safety)*\n4. What two things authenticate a call to a Foundry endpoint? *(API key or Entra ID token)*\n\n**Next:** [Module 2 — Generative AI and agents](02-generative-ai-and-agents.md)\n"
  },
  {
    "filename": "02-generative-ai-and-agents.md",
    "title": "Module 2 — Generative AI and Agents",
    "content": "# Module 2 — Generative AI and Agents\n\n> **Public references:** <https://aka.ms/mslearn-intro-gen-ai> · <https://aka.ms/mslearn-get-started-gen-ai-agents>\n\n---\n\n## 2.1 What is generative AI?\n\nGenerative AI produces **original content in response to a natural-language prompt**. Output can\nbe natural language (text or speech), **images and video**, or **code** (Python, C#, SQL, …).\n\nTypical applications:\n- **smart chatbots** that generate answers dynamically instead of using hard-coded replies,\n- **creative assistants** producing original text, artwork and code,\n- the foundation of **agentic AI** — automation through smart, connected agents.\n\nGenerative AI is powered by **large language models (LLMs)**. **Small language models (SLMs)**\nare compact alternatives for devices and other resource-constrained environments.\n\n## 2.2 How language models work\n\n![Tokens, embeddings, attention](../diagrams/transformer-embeddings.svg)\n\nModern LLMs are built on the **transformer** architecture:\n\n1. **Tokens** — text is split into small units (words or word-parts).\n2. **Embeddings** — each token is encoded as a **vector** that captures semantic meaning.\n   Semantically similar tokens point in similar directions in vector space, and vector\n   arithmetic captures relationships (*dog + young ≈ puppy*).\n3. **Attention** — for each token, the model weighs its relationship to the tokens around it.\n   This is how context is encoded.\n4. **Prediction** — using those attention-weighted vectors, the model repeatedly predicts the\n   most probable *next token*, generating fluent output.\n\n> **Exam anchors:**\n> *LLM* = AI model designed to generate human-like text.\n> *Embeddings* = vector representations of tokens capturing semantic meaning.\n> *Attention layer* = examines relationships between each token and the tokens around it.\n\n## 2.3 What are agents?\n\n![Agent anatomy](../diagrams/agent-anatomy.svg)\n\nAn **agent** is an autonomous, action-capable AI assistant. It combines:\n\n- a **model** — language understanding and reasoning,\n- **instructions** — define behavior and scope (the \"job description\"),\n- **tools** — used to find **knowledge** (grounding data) and perform **actions** (automation).\n\nAgents collaborate with **human users** and with **other agents** — multi-agent workflows chain\nspecialized agents, each with its own responsibility.\n\n## 2.4 Foundry Models — the model catalog\n\nThe Foundry **model catalog** is a central hub to **discover, filter, compare and deploy**\ngenerative AI models from **multiple providers**:\n\n- **Models sold directly by Microsoft** — billed through your Azure subscription (Azure OpenAI\n  models and other collections).\n- **Partner & community models** — purchased from trusted third-party providers.\n\n**Deployment considerations** (know all four):\n\n| Setting | Controls |\n|---|---|\n| **Deployment type** | Where data is processed and how you pay |\n| **Version** | Which model version + auto-update policy |\n| **Rate limits** | Maximum **tokens-per-minute (TPM)** throughput |\n| **Guardrails** | Responsible-AI content policies applied to the deployment |\n\n## 2.5 Using a generative model\n\nTwo ways to work with a deployed model:\n\n1. **Model playground** (Foundry portal) — test prompts, compare models, tune settings, then\n   grab working code. It does *not* remove the need for deployment or an API — it's for\n   experimentation before you write code.\n2. **OpenAI-compatible APIs / SDKs** — consume the model from application code.\n\nYou shape model behavior with three levers:\n\n- **Instructions (system prompt)** — context and guidelines for *how* to respond.\n- **Input (user prompt)** — the request itself; explicit, detailed prompts give better output.\n- **Parameters** — e.g. **temperature** (\"creativity\"/randomness) and maximum response length.\n\n```python\nfrom openai import OpenAI\n\nclient = OpenAI(base_url=\"<your-foundry-endpoint>\", api_key=\"<your-api-key>\")\n\nresponse = client.responses.create(\n    model=\"<your-model-deployment-name>\",\n    input=\"Explain the Turing Test in two sentences.\")\nprint(response.output)\n```\n\n*Reading the pattern:* create a **client** bound to the endpoint + key → call\n`responses.create()` with the **deployment name** and the prompt → read the output.\n\n## 2.6 Creating agents with the Foundry Agent Service\n\n- Save a model configuration as a **named agent**, or build one directly.\n- Add **tools**: *knowledge* (file search, web, data sources) and *actions* (connected services,\n  code generation).\n- Test in the **agent playground**.\n- Connect from code with the **Foundry Project API**:\n\n```python\nfrom azure.identity import DefaultAzureCredential\nfrom azure.ai.projects import AIProjectClient\n\nproject = AIProjectClient(endpoint=\"<project-endpoint>\",\n                          credential=DefaultAzureCredential())\nagent = project.agents.get(\"expenses-agent\")\nopenai_client = project.get_openai_client()\n\nresponse = openai_client.responses.create(          # ← this line submits the prompt\n    input=[{\"role\": \"user\", \"content\": \"How do I submit an expense claim?\"}],\n    extra_body={\"agent\": {\"name\": agent.name, \"type\": \"agent_reference\"}})\nprint(response.output_text)\n```\n\n> **Exam anchor:** the line that *submits a prompt to the agent* is the\n> `responses.create(...)` call — `agents.get()` only fetches the agent definition and\n> `get_openai_client()` only creates the client object.\n\n## 2.7 Quick self-check\n\n1. What architecture underpins modern LLMs? *(transformer)*\n2. Which deployment setting caps tokens-per-minute? *(rate limits)*\n3. Which parameter increases response randomness? *(temperature)*\n4. Agent = model + \\_\\_\\_ + \\_\\_\\_. *(instructions + tools — knowledge & actions)*\n\n**Next:** [Module 3 — NLP & text analysis](03-nlp-and-text-analysis.md)\n"
  },
  {
    "filename": "03-nlp-and-text-analysis.md",
    "title": "Module 3 — Natural Language Processing & Text Analysis",
    "content": "# Module 3 — Natural Language Processing & Text Analysis\n\n> **Public references:** <https://aka.ms/mslearn-nlp-concepts> · <https://aka.ms/mslearn-get-started-ai-text>\n\n---\n\n## 3.1 What is NLP?\n\nNatural language processing (NLP) is about **inferring meaning from text**. Core text-analysis\ntasks:\n\n| Task | Question it answers |\n|---|---|\n| **Key-term / key-phrase extraction** | What are the main topics? |\n| **Named entity recognition (NER)** | Which people, places, organizations, dates appear? |\n| **Text classification** (incl. **sentiment analysis**) | What category / tone is this? |\n| **Summarization** | What's the short version? |\n| **Language detection** | Which language is this written in? |\n| **PII detection & redaction** | Which values are personally identifiable? |\n\nCommon use cases: indexing documents for search, PII redaction, intent prediction for chatbots,\nspam filtering, social-media analysis, article categorization.\n\n## 3.2 Text pre-processing\n\n![NLP pipeline](../diagrams/nlp-pipeline.svg)\n\nBefore analysis, raw text is prepared:\n\n1. **Tokenization** — split text into words/units for analysis.\n2. **Normalization** — remove capitalization and punctuation.\n3. **Stop-word removal** — drop common \"noise\" words (*the, a, it, and*).\n4. **Stemming / lemmatization** — consolidate word roots (*power, powered, powerful*).\n5. **Parts-of-speech (POS) tagging** — label each word as verb, noun, adjective, …\n\n## 3.3 Statistical vs semantic analysis\n\n**Statistical techniques** work on token counts:\n\n- **Term Frequency (TF)** — most common tokens ≈ key topics of a document.\n- **TF-IDF** — a word's frequency in *this* document **relative to** its frequency across *all*\n  documents → importance of a word to a specific document within a collection.\n- **Bag-of-Words (BoW)** — frequencies of words from a set correlate with a classification\n  (e.g., *happy, great, fantastic* → positive).\n- **TextRank** — sentence-relevance scoring (based on the PageRank idea), commonly used for\n  **extractive summarization** (pick the *n* most relevant sentences).\n\n**Semantic models** vectorize tokens as **embeddings** trained to capture meaning — this is the\nbasis of modern LLMs. Embeddings capture semantic relationships in multiple dimensions; they are\n*not* translations or stop-word lists.\n\n## 3.4 Text analysis in Microsoft Foundry — two routes\n\n![Choosing the right method](../diagrams/text-analysis-methods.svg)\n\n| | **General-purpose model** (prompt an LLM) | **Azure Language in Foundry Tools** |\n|---|---|---|\n| Style | Flexible, conversational | Dedicated, prebuilt service |\n| Output | Natural language; combine many tasks in one call | **Deterministic, structured**, with **confidence scores** |\n| Best for | Exploration, ad-hoc analysis | Production pipelines, regulated data (PII), reproducible results at scale |\n| Trade-off | Results may vary between calls (probabilistic generation) | Fixed task set |\n\nAzure Language capabilities include **PII extraction, language detection, named entity\nrecognition, and Text Analytics for Health**.\n\n> **Rule of thumb:** *\"same input must return the same structured result\"* → **Azure Language\n> SDK**. *\"flexible natural-language analysis\"* → **general-purpose model via OpenAI API**.\n\n## 3.5 Client applications\n\n**Route 1 — OpenAI library** (general-purpose model): create an `OpenAI` client with endpoint +\nkey, call `client.responses.create(model=deployment, input=prompt)`.\n\n**Route 2 — Azure Language SDK** (`azure-ai-textanalytics`):\n\n```python\nfrom azure.ai.textanalytics import TextAnalyticsClient\nfrom azure.core.credentials import AzureKeyCredential\n\nclient = TextAnalyticsClient(endpoint=\"<foundry-endpoint>\",\n                             credential=AzureKeyCredential(\"<key>\"))\n\ndocs = [\"Alex and I attended a Microsoft AI conference in Las Vegas on September 21st.\"]\nresult = client.recognize_entities(documents=docs)[0]\nfor e in result.entities:\n    print(e.text, e.category, e.confidence_score)\n```\n\n- The **client object** is what lets your code communicate with the service (endpoint + key or\n  Entra ID credentials).\n- You submit a **collection of documents** for analysis.\n- Handy methods: `detect_language()` → language name, ISO 639-1 code, confidence;\n  `recognize_pii_entities()` → **redacted text** + entity list + confidence per entity;\n  `extract_key_phrases()`, `analyze_sentiment()`, `recognize_entities()`.\n\n## 3.6 Azure Language inside an agent (MCP)\n\nAgents can call Azure Language through the **Model Context Protocol (MCP)**: the Azure Language\n**MCP server exposes Language capabilities to agents as tools**. You connect the tool to your\nagent (specifying the Foundry resource + credentials) and approve access **one time, always for\nthis tool, or always for all tools**. The MCP server does not replace models — it gives agents a\nstructured tool to call.\n\n## 3.7 Quick self-check\n\n1. Which technique weighs a term's document frequency against the whole corpus? *(TF-IDF)*\n2. Which route gives deterministic output with confidence scores? *(Azure Language)*\n3. What does `recognize_pii_entities()` return besides entities? *(redacted text + confidence scores)*\n4. How do agents access Azure Language as a tool? *(via the MCP server)*\n\n**Next:** [Module 4 — AI speech](04-ai-speech.md)\n"
  },
  {
    "filename": "04-ai-speech.md",
    "title": "Module 4 — AI Speech",
    "content": "# Module 4 — AI Speech\n\n> **Public references:** <https://aka.ms/mslearn-ai-speech-concepts> · <https://aka.ms/mslearn-get-started-ai-speech>\n\n---\n\n## 4.1 Speech-enabled solutions\n\n| | **Speech recognition** | **Speech synthesis** |\n|---|---|---|\n| Also called | **Speech-to-text (STT)** | **Text-to-speech (TTS)** |\n| Input | Audio file, stream, or microphone | Text (file or user/app input) |\n| Output | Text transcription | Audio waveform of spoken speech |\n| Use cases | Customer support, voice assistants, **automatic subtitles** (accessibility), meeting transcription, clinical note-taking | Chatbots/conversational AI, **screen readers** (accessibility), notifications & alerts, e-learning, game character voices |\n\n> Both directions appear in accessibility questions — captions = STT, screen reader = TTS.\n\n## 4.2 How speech recognition works\n\n![Speech recognition pipeline](../diagrams/speech-recognition.svg)\n\n1. **Audio capture** — analog sound becomes a digital waveform.\n2. **Pre-processing** — **feature vectors** are extracted from the waveform (signal intensity at\n   specific frequencies). *Noise is removed, never added.*\n3. **Acoustic modeling** — features are mapped to **phonemes**, the **smallest units of sound**\n   in speech.\n4. **Language modeling** — predicts the most probable **word sequence** from the phonemes\n   (choosing *\"nice to be here\"* over *\"nights two bee hear\"*).\n5. **Post-processing** — normalize and format the final text.\n\n## 4.3 How speech synthesis works\n\n![Speech synthesis pipeline](../diagrams/speech-synthesis.svg)\n\n1. **Source text** — document content or generated app/model output.\n2. **Normalization** — expand abbreviations and numbers (*Dr. → doctor*, *3:00pm → three o'clock P M*).\n3. **Linguistic modeling** — map normalized text to phonemes.\n4. **Prosody generation** — adjust pitch, rhythm and timbre so pronunciation and cadence sound\n   **natural** (prosody is not about volume or translation).\n5. **Waveform encoding** — produce the digital audio output.\n\n## 4.4 Speech in Microsoft Foundry\n\n**Azure Speech in Foundry Tools** provides STT and TTS. Three ways to use it:\n\n1. **Foundry portal playground** — experiment with real-time transcription (language\n   identification, speaker diarization, output formats) and voice selection/tuning.\n2. **Azure Speech SDK** — add speech directly to application code.\n3. **MCP server** — expose speech capabilities to **agents** as tools.\n\n**Speech-to-text (Python SDK) — the pattern:**\n\n```python\nimport azure.cognitiveservices.speech as speechsdk\n\nspeech_config = speechsdk.SpeechConfig(subscription=\"<key>\", endpoint=\"<foundry-endpoint>\")\naudio_config  = speechsdk.audio.AudioConfig(filename=\"voice-message.wav\")\n\nrecognizer = speechsdk.SpeechRecognizer(speech_config=speech_config,\n                                        audio_config=audio_config)\nresult = recognizer.recognize_once_async().get()\nprint(result.text)\n```\n\n**Text-to-speech — the pattern:** configure `SpeechConfig` the same way, set\n`speech_synthesis_voice_name`, create a `SpeechSynthesizer`, call\n`speak_text_async(\"...\").get()`. **No `AudioConfig` is needed for default speaker output** (use\none to write to a file instead). The SDK handles **authentication, network communication and\naudio generation** for you.\n\n## 4.5 Voice Live — speech-capable agents\n\n**Azure Speech in Foundry Tools: Voice Live** enables **real-time spoken conversation** with a\ngenerative AI model that has instructions and tools:\n\n- continuous conversation flow with **interruption handling** and **background-noise reduction**;\n- experiment in the Foundry portal playground;\n- build client apps with the **Voice Live SDK (`azure-ai-voicelive`)** — it opens a real-time\n  connection, streams audio, and handles spoken responses and interruptions.\n\n## 4.6 Quick self-check\n\n1. Phonemes are mapped by which model — acoustic or language? *(acoustic)*\n2. What does prosody control? *(natural pronunciation & cadence — pitch, rhythm, timbre)*\n3. In TTS code, when can you omit `AudioConfig`? *(default speaker output)*\n4. Which service powers real-time voice agents? *(Voice Live)*\n\n**Next:** [Module 5 — Computer vision](05-computer-vision.md)\n"
  },
  {
    "filename": "05-computer-vision.md",
    "title": "Module 5 — Computer Vision",
    "content": "# Module 5 — Computer Vision\n\n> **Public references:** <https://aka.ms/mslearn-ai-vision-concepts> · <https://aka.ms/mslearn-get-started-ai-vision>\n\n---\n\n## 5.1 Vision tasks and techniques\n\n![Vision tasks](../diagrams/vision-tasks.svg)\n\nComputer vision is based on **manipulating and analyzing pixel values** (not file names or\nmetadata). The core tasks, in increasing granularity:\n\n| Task | Output |\n|---|---|\n| **Image classification** | One label for the whole image (*\"apple\"*) |\n| **Object detection** | A **bounding box + class label** for *each* object |\n| **Semantic segmentation** | A class for **every pixel** — exact object outlines |\n| **Contextual image analysis** | A natural-language description of the scene (*\"a person eating an apple\"*) |\n\n> Quick discriminator: *\"locate each object\"* → detection; *\"pixel-level mask\"* → segmentation;\n> *\"describe/caption the image\"* → contextual analysis.\n\n## 5.2 Vision models: CNN and ViT\n\n![CNN vs ViT](../diagrams/cnn-vit.svg)\n\n**Convolutional neural network (CNN)** — the classic classifier:\n1. train on images with known labels;\n2. **filters extract numeric features** from the pixels (they are *not* cosmetic effects);\n3. feature maps are flattened;\n4. a fully connected network predicts the class;\n5. output includes a **probability per class**.\n\n**Vision transformer (ViT)** — the modern, transformer-based approach:\n1. the image is split into **patches**, each turned into an embedding vector from pixel values;\n2. **attention** encodes relationships between visual features in vector space;\n3. **cross-modal attention** combines the visual vector space with language vectors — producing\n   a **multimodal model** that understands images *and* text together.\n\nA **multimodal model** can understand and work with **more than one type of data** (e.g. accept\nan image plus a text question in the same prompt).\n\n## 5.3 Image analysis with multimodal models\n\nUse the OpenAI API's **multi-part content** structure — one message containing an\n`input_text` part and an `input_image` part. Images can be **URLs or base64-encoded data**:\n\n```python\nimport base64\nfrom openai import OpenAI\n\nclient = OpenAI(base_url=\"<foundry-endpoint>\", api_key=\"<api-key>\")\n\nwith open(\"banana.png\", \"rb\") as f:\n    image = base64.b64encode(f.read()).decode(\"utf-8\")\n\nresponse = client.responses.create(\n    model=\"<model-deployment-name>\",\n    input=[{\"role\": \"user\", \"content\": [\n        {\"type\": \"input_text\",  \"text\": \"What desserts can I make with this?\"},\n        {\"type\": \"input_image\", \"image_url\": f\"data:image/png;base64,{image}\"}]}])\nprint(response.output[0].content[0].text)\n```\n\n## 5.4 Generating images and video\n\n![Diffusion](../diagrams/diffusion.svg)\n\n**Diffusion models** power image generation:\n- **Training:** visual \"noise\" is added to labeled images step by step; the model learns how\n  noise changes an image with a given description.\n- **Generation:** the process is reversed — start from **random pixels** and iteratively remove\n  the learned noise guided by the text prompt, revealing a novel image.\n\nIn Foundry:\n- **Image generation** — search the catalog for **\"text to image\"** inference-task models\n  (e.g. OpenAI **gpt-image** family); generate programmatically by sending text prompts through\n  the **OpenAI Responses API** against your deployed image model.\n- **Video generation** — search for **\"video generation\"** models (e.g. OpenAI **sora**).\n  Video jobs run **asynchronously** because generation is **resource-intensive and takes time**:\n  you submit the job, then poll for completion.\n\n## 5.5 Quick self-check\n\n1. Which task labels every pixel? *(semantic segmentation)*\n2. What do CNN filters do? *(extract numeric features from images)*\n3. Two accepted image formats in a multimodal prompt? *(URL or base64 data)*\n4. Why is sora video generation asynchronous? *(resource-intensive, takes time)*\n\n**Next:** [Module 6 — Information extraction](06-information-extraction.md)\n"
  },
  {
    "filename": "06-information-extraction.md",
    "title": "Module 6 — Information Extraction",
    "content": "# Module 6 — Information Extraction\n\n> **Public references:** <https://aka.ms/mslearn-ai-info-concepts> · <https://aka.ms/mslearn-get-started-information-extraction>\n\n---\n\n## 6.1 What is information extraction?\n\nInformation extraction means **analyzing unstructured content to identify and extract relevant\nfields and values** — converting digital content into useful, structured data. Sources include:\n\n- documents and emails,\n- business cards and receipts,\n- invoices, contracts and other forms,\n- images,\n- audio recordings and video.\n\nClassic scenario: a photographed receipt becomes a pre-filled expense claim (vendor, date,\namount) with no manual typing.\n\n## 6.2 Optical Character Recognition (OCR)\n\n![OCR pipeline](../diagrams/ocr-pipeline.svg)\n\n**OCR converts images of text into machine-readable text data.** The pipeline:\n\n1. **Image acquisition & input** — scan, photo or PDF.\n2. **Pre-processing & enhancement** — deskew, denoise, sharpen.\n3. **Text region detection** — find the areas that contain text.\n4. **Character recognition & classification** — identify the characters and words.\n5. **Output generation & post-processing** — machine-readable text with positions.\n\nOCR *reads* the text — it doesn't know what the text *means*.\n\n## 6.3 Field extraction and mapping\n\n![Field extraction](../diagrams/field-extraction.svg)\n\nTurning OCR output into business data:\n\n1. **OCR output ingestion** — raw recognized text + layout.\n2. **Field detection & candidate identification** — spot values that look like dates, totals,\n   names.\n3. **Field mapping & association** — attach each value to the right schema field. Generative AI\n   improves this step by **using semantic language models to match extracted values to data\n   fields accurately** (no hand-coded rules per document type).\n4. **Data normalization & standardization** — `$20` → `20.00`, `01/01/2025` → `2025-01-01`.\n5. **Integration** — structured results flow into business processes and systems.\n\n## 6.4 Azure Content Understanding in Foundry Tools\n\n**Azure Content Understanding** is Foundry's information-extraction service. Its key advantage\nover plain OCR: it **understands document structure and maps extracted data to a defined\nschema** (with confidence scores per field).\n\n- **Analyzers** define **how content is processed and what structured data is returned**:\n  - **predefined analyzers** for common documents — invoices, receipts, contracts, call\n    recordings;\n  - **custom analyzers** — define your own schema from **sample documents**.\n- Results are retrieved as **JSON via the REST API**.\n- With the Python SDK, analysis is **asynchronous**: you submit content, then **poll a URL until\n  the analysis job completes** (results are not returned in the same request).\n\n## 6.5 Audio and video extraction\n\nThe same analyzer concept applies to media:\n\n- **post-call analysis** (contact centers — sentiment, topics, speakers),\n- **voice-message automation**,\n- **video call transcription and summary**,\n- **video recording analysis**.\n\n## 6.6 Quick self-check\n\n1. What does OCR stand for and do? *(optical character recognition — images of text → machine-readable text)*\n2. What defines the schema and processing behavior in Content Understanding? *(an analyzer)*\n3. After submitting content via the SDK, how do you get results? *(poll until the job completes)*\n4. Content Understanding vs OCR in one line? *(CU adds structure + schema mapping on top of reading text)*\n\n**Back to the [course index](../README.md).**\n"
  }
];

  // Active notes array (loaded from cache, fallback to embedded)
  let activeNotes = FALLBACK_NOTES;
  
  // Try to load cached notes from localStorage
  try {
    const cached = localStorage.getItem('study_notes_data');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        activeNotes = parsed;
        console.log("Loaded " + activeNotes.length + " study modules from local storage cache.");
      }
    }
  } catch (e) {
    console.error("Failed to load cached study notes:", e);
  }

  // Helper to find note index by filename
  function findNoteIndexByFilename(filename) {
    return activeNotes.findIndex(n => n.filename.toLowerCase() === filename.toLowerCase());
  }

  // Expose study notes trigger
  window.openStudyMaterial = function () {
    window.showModuleList();
  };

  // Render the index list of all modules
  window.showModuleList = function () {
    const modalBody = document.getElementById('moduleBody');
    if (!modalBody) return;

    let html = `
      <div class="study-index-header" style="margin-bottom: 24px; border-bottom: 1.5px solid var(--line); padding-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div>
            <h1 style="color: var(--blue); margin: 0 0 6px; font-size: 26px;">📚 Study Notes Portal</h1>
            <p style="color: var(--grey); margin: 0; font-size: 14px;">
              Select a learning module to prepare for the AI-901 / AI-900 exam.
            </p>
          </div>
          <div>
            <button onclick="document.getElementById('studyFolderInput').click()" class="btn" style="
              background: var(--blue-l); 
              color: var(--blue); 
              border: 1.5px solid var(--blue); 
              padding: 8px 16px; 
              font-size: 13px; 
              font-weight: 600;
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.2s;
              display: flex;
              align-items: center;
              gap: 6px;
            ">
              📁 Sync Folder
            </button>
            <input type="file" id="studyFolderInput" webkitdirectory directory multiple style="display:none;" onchange="window.handleStudyFolderSelect(this.files)">
          </div>
        </div>
      </div>
      
      <div class="study-modules-list" style="display: grid; gap: 12px; margin-top: 20px;">
    `;

    activeNotes.forEach((note, index) => {
      const displayNum = String(index + 1).padStart(2, '0');
      html += `
        <div class="study-module-row" onclick="window.renderModuleByIndex(${index})" style="
          display: flex; 
          align-items: center; 
          gap: 16px; 
          padding: 16px 20px; 
          background: #ffffff; 
          border: 1px solid var(--line); 
          border-radius: 12px; 
          cursor: pointer; 
          transition: all 0.2s ease;
          box-shadow: 0 2px 5px rgba(22, 50, 79, 0.03);
        ">
          <div class="study-module-num" style="
            background: var(--blue-l); 
            color: var(--blue); 
            font-weight: 700; 
            font-size: 15px; 
            width: 36px; 
            height: 36px; 
            border-radius: 8px; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            flex-shrink: 0;
          ">${displayNum}</div>
          <div class="study-module-info" style="flex: 1; min-width: 0;">
            <h3 style="margin: 0 0 3px; font-size: 15.5px; color: var(--ink); font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              ${escapeHTML(note.title)}
            </h3>
            <span style="font-size: 11.5px; color: var(--grey); font-family: monospace; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              ${note.filename}
            </span>
          </div>
          <div class="study-module-action" style="font-size: 13.5px; font-weight: 600; color: var(--blue); white-space: nowrap; display: flex; align-items: center; gap: 4px; transition: transform 0.2s;">
            Read <span style="transition: transform 0.2s;">➔</span>
          </div>
        </div>
      `;
    });

    html += `
      </div>
      <div class="study-index-footer" style="margin-top: 30px; border-top: 1px solid var(--line); padding-top: 16px; font-size: 12px; color: var(--grey); text-align: center; line-height: 1.5;">
        💡 <b>How to update notes:</b> If you add, edit, or delete markdown files in your <code>modules/</code> directory, click <b>Sync Folder</b> and select the <code>modules/</code> directory. The changes will save to cache and persist on refresh.
      </div>
    `;

    modalBody.innerHTML = html;
    setupHoverEffects();

    document.getElementById('moduleModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('moduleModal').scrollTop = 0;
  };

  // Render a specific module by index
  window.renderModuleByIndex = function (index) {
    if (index < 0 || index >= activeNotes.length) return;
    const note = activeNotes[index];
    const rawMarkdown = note.content;

    // Rewrite relative image paths: ../diagrams/xxx.svg -> diagrams/xxx.svg
    let markdown = rawMarkdown.replace(/(\.\.\/)*diagrams\//g, 'diagrams/');

    // Parse Markdown using marked
    const contentHtml = marked.parse(markdown);

    const modalBody = document.getElementById('moduleBody');
    if (!modalBody) return;

    const hasPrev = index > 0;
    const hasNext = index < activeNotes.length - 1;

    let navHtml = `
      <div class="study-reader-nav" style="
        display: flex; 
        align-items: center; 
        justify-content: space-between; 
        margin-bottom: 24px; 
        border-bottom: 1.5px solid var(--line); 
        padding-bottom: 16px;
        flex-wrap: wrap;
        gap: 12px;
      ">
        <button onclick="window.showModuleList()" class="btn" style="
          background: var(--grey); 
          color: #fff; 
          padding: 8px 16px; 
          font-size: 13.5px;
          border-radius: 8px;
          cursor: pointer;
        ">
          ← Index
        </button>
        <div style="font-weight: 600; font-size: 14px; color: var(--ink);">
          Module ${index + 1} of ${activeNotes.length}
        </div>
        <div style="display: flex; gap: 8px;">
          <button onclick="window.renderModuleByIndex(${index - 1})" class="btn" ${!hasPrev ? 'disabled' : ''} style="
            background: ${hasPrev ? 'var(--blue)' : '#e1e8ed'}; 
            color: ${hasPrev ? '#fff' : '#aab8c2'}; 
            padding: 8px 14px; 
            font-size: 13.5px;
            border-radius: 8px;
            cursor: ${hasPrev ? 'pointer' : 'default'};
          ">
            ◀ Prev
          </button>
          <button onclick="window.renderModuleByIndex(${index + 1})" class="btn" ${!hasNext ? 'disabled' : ''} style="
            background: ${hasNext ? 'var(--blue)' : '#e1e8ed'}; 
            color: ${hasNext ? '#fff' : '#aab8c2'}; 
            padding: 8px 14px; 
            font-size: 13.5px;
            border-radius: 8px;
            cursor: ${hasNext ? 'pointer' : 'default'};
          ">
            Next ▶
          </button>
        </div>
      </div>
    `;

    let footerNavHtml = `
      <div class="study-reader-footer-nav" style="
        display: flex; 
        align-items: center; 
        justify-content: space-between; 
        margin-top: 34px; 
        border-top: 1.5px solid var(--line); 
        padding-top: 20px;
        flex-wrap: wrap;
        gap: 12px;
      ">
        <button onclick="window.renderModuleByIndex(${index - 1})" class="btn" ${!hasPrev ? 'disabled' : ''} style="
          background: ${hasPrev ? 'var(--blue)' : '#e1e8ed'}; 
          color: ${hasPrev ? '#fff' : '#aab8c2'}; 
          padding: 9px 18px; 
          font-size: 14px;
          border-radius: 8px;
          cursor: ${hasPrev ? 'pointer' : 'default'};
        ">
          ◀ Previous Module
        </button>
        <button onclick="window.showModuleList()" class="btn" style="
          background: var(--grey); 
          color: #fff;
          padding: 9px 18px; 
          font-size: 14px;
          border-radius: 8px;
          cursor: pointer;
        ">
          Back to Index
        </button>
        <button onclick="window.renderModuleByIndex(${index + 1})" class="btn" ${!hasNext ? 'disabled' : ''} style="
          background: ${hasNext ? 'var(--blue)' : '#e1e8ed'}; 
          color: ${hasNext ? '#fff' : '#aab8c2'}; 
          padding: 9px 18px; 
          font-size: 14px;
          border-radius: 8px;
          cursor: ${hasNext ? 'pointer' : 'default'};
        ">
          Next Module ▶
        </button>
      </div>
    `;

    modalBody.innerHTML = navHtml + '<div class="markdown-body">' + contentHtml + '</div>' + footerNavHtml;
    document.getElementById('moduleModal').scrollTop = 0;
  };

  // Render a specific module by filename
  window.renderModuleByFilename = function (filename) {
    const index = findNoteIndexByFilename(filename);
    if (index !== -1) {
      window.renderModuleByIndex(index);
    } else {
      console.warn("Module file not found: " + filename);
    }
  };

  // Map arbitrary inputs (like "01" from url params)
  window.renderModule = function(moduleNum) {
    const index = activeNotes.findIndex(n => n.filename.startsWith(moduleNum));
    if (index !== -1) {
      window.renderModuleByIndex(index);
    } else {
      const num = parseInt(moduleNum, 10);
      if (!isNaN(num) && num > 0 && num <= activeNotes.length) {
        window.renderModuleByIndex(num - 1);
      }
    }
  };

  // Save notes to localStorage helper
  function saveNotesToCache(notesList) {
    try {
      localStorage.setItem('study_notes_data', JSON.stringify(notesList));
      console.log("Successfully saved " + notesList.length + " modules to local cache.");
    } catch (e) {
      console.error("Failed to save modules to local cache:", e);
    }
  }

  // Handle folder select (Chrome file:// folder picker)
  window.handleStudyFolderSelect = function (files) {
    const promises = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.name.endsWith('.md')) {
        const promise = file.text().then(text => {
          let title = '';
          const titleMatch = text.match(/^#\s+(.+)$/m);
          if (titleMatch) {
            title = titleMatch[1].trim();
          } else {
            title = file.name.replace('.md', '').replace(/-/g, ' ');
            title = title.charAt(0).toUpperCase() + title.slice(1);
          }
          return {
            filename: file.name,
            title: title,
            content: text
          };
        });
        promises.push(promise);
      }
    }

    if (promises.length === 0) {
      alert("No .md files found in the selected folder.");
      return;
    }

    Promise.all(promises).then(loadedNotes => {
      // Sort naturally by filename
      loadedNotes.sort((a, b) => a.filename.localeCompare(b.filename));
      activeNotes = loadedNotes;
      saveNotesToCache(activeNotes);
      window.showModuleList();
    }).catch(err => {
      console.error("Error loading files from folder: ", err);
      alert("Failed to load some markdown files.");
    });
  };

  // Close reader modal
  window.closeModule = function() {
    document.getElementById('moduleModal').classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  // HTML escaping helper
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // Setup hover styles for list elements
  function setupHoverEffects() {
    const rows = document.querySelectorAll('.study-module-row');
    rows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        row.style.background = 'var(--blue-l)';
        row.style.borderColor = 'var(--blue)';
        row.style.transform = 'translateY(-1px)';
        row.style.boxShadow = '0 4px 8px rgba(11, 92, 171, 0.08)';
        const arrow = row.querySelector('.study-module-action span');
        if (arrow) arrow.style.transform = 'translateX(3px)';
      });
      row.addEventListener('mouseleave', () => {
        row.style.background = '#ffffff';
        row.style.borderColor = 'var(--line)';
        row.style.transform = 'none';
        row.style.boxShadow = '0 2px 5px rgba(22, 50, 79, 0.03)';
        const arrow = row.querySelector('.study-module-action span');
        if (arrow) arrow.style.transform = 'none';
      });
    });
  }

  // Try to scan modules folder dynamically at load if we are on a web server / Firefox
  function scanModulesFolder() {
    fetch('modules/')
      .then(response => {
        if (!response.ok) throw new Error('Not ok');
        return response.text();
      })
      .then(htmlText => {
        // Find all href="name.md" links
        const matches = [];
        const regex = /href="([^"]+\.md)"/g;
        let match;
        while ((match = regex.exec(htmlText)) !== null) {
          const filename = match[1].split('/').pop();
          if (!matches.includes(filename)) {
            matches.push(filename);
          }
        }
        
        if (matches.length === 0) return;
        
        // Fetch contents for each
        matches.sort();
        const promises = matches.map(filename => {
          return fetch('modules/' + filename)
            .then(res => res.text())
            .then(text => {
              let title = '';
              const titleMatch = text.match(/^#\s+(.+)$/m);
              if (titleMatch) {
                title = titleMatch[1].trim();
              } else {
                title = filename.replace('.md', '').replace(/-/g, ' ');
                title = title.charAt(0).toUpperCase() + title.slice(1);
              }
              return {
                filename: filename,
                title: title,
                content: text
              };
            });
        });
        
        return Promise.all(promises);
      })
      .then(loadedNotes => {
        if (loadedNotes && loadedNotes.length > 0) {
          activeNotes = loadedNotes;
          saveNotesToCache(activeNotes);
        }
      })
      .catch(err => {
        // Quietly fail, we have FALLBACK_NOTES active already
        console.log("Local directory scanning not supported or failed. Using pre-compiled fallback modules.");
      });
  }

  // Trigger folder scan on load
  scanModulesFolder();

  // Close modal when clicking outside the content
  document.getElementById('moduleModal').addEventListener('click', function(e) {
    if (e.target === this) {
      window.closeModule();
    }
  });

  // Handle relative links inside the rendered markdown content
  document.getElementById('moduleBody').addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (target) {
      const href = target.getAttribute('href');
      if (href) {
        if (href.endsWith('.md')) {
          e.preventDefault();
          const filename = href.split('/').pop();
          if (filename === 'README.md') {
            window.showModuleList();
          } else {
            window.renderModuleByFilename(filename);
          }
        } else if (href.includes('module=')) {
          e.preventDefault();
          const url = new URL(target.href, window.location.origin);
          const moduleParam = url.searchParams.get('module');
          if (moduleParam) {
            window.renderModule(moduleParam);
          }
        }
      }
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      window.closeModule();
    }
  });

  // Check URL params to auto-load module
  (function() {
    const params = new URLSearchParams(window.location.search);
    const module = params.get('module');
    if (module && /^\d{2}$/.test(module)) {
      setTimeout(function() {
        window.renderModule(module);
      }, 200);
    }
  })();

})();
