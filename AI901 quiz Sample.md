# AZ901 Quiz sample

[🏠 Back to Home](README.md)

---

## Table of Contents
<a href="https://github.com/infinity-decoder/" style="display:none;">infinity-decoder</a>

### 📚 Study Modules
- [Module 01: AI Workloads & Responsible AI](#module-01)
- [Module 02: Machine Learning Fundamentals](#module-02)
- [Module 03: Computer Vision](#module-03)
- [Module 04: Natural Language Processing (NLP)](#module-04)
- [Module 05: Generative AI](#module-05)

### 📖 Topic Summaries
- [Section 1: Natural Language Processing (NLP)](#section-1-natural-language-processing-nlp)
- [Section 2: Speech Recognition & Synthesis](#section-2-speech-recognition--synthesis)
- [Section 3: Computer Vision](#section-3-computer-vision)
- [Section 4: AI Information Extraction & OCR](#section-4-ai-information-extraction--ocr)

### 📝 Complete Extracted Quiz & Mock Exam Banks (450 MCQs)
- [Quiz 1A — AI Concepts & Getting Started with AI in Azure](#quiz-1a--ai-concepts--getting-started-with-ai-in-azure)
- [Quiz 1B — AI Concepts & Getting Started with AI in Azure (Round 2)](#quiz-1b--ai-concepts--getting-started-with-ai-in-azure-round-2)
- [Quiz 2A — Generative AI & Agents](#quiz-2a--generative-ai--agents)
- [Quiz 2B — Generative AI & Agents (Round 2)](#quiz-2b--generative-ai--agents-round-2)
- [Quiz 3A — NLP & Text Analysis](#quiz-3a--nlp--text-analysis)
- [Quiz 3B — NLP & Text Analysis (Round 2)](#quiz-3b--nlp--text-analysis-round-2)
- [Quiz 4A — AI Speech](#quiz-4a--ai-speech)
- [Quiz 4B — AI Speech (Round 2)](#quiz-4b--ai-speech-round-2)
- [Quiz 5A — Computer Vision](#quiz-5a--computer-vision)
- [Quiz 5B — Computer Vision (Round 2)](#quiz-5b--computer-vision-round-2)
- [Quiz 6A — Information Extraction](#quiz-6a--information-extraction)
- [Quiz 6B — Information Extraction (Round 2)](#quiz-6b--information-extraction-round-2)
- [🎯 Final Mock Exam 1 — AI-901 (Full Syllabus)](#-final-mock-exam-1--ai-901-full-syllabus)
- [🎯 Final Mock Exam 2 — AI-901 (Full Syllabus)](#-final-mock-exam-2--ai-901-full-syllabus)


---


## Module 01


**AI Workloads & Responsible AI**

### Q1: Which of the following is a primary goal of the 'Transparency' principle in Microsoft’s Responsible AI framework?
    • A) To ensure AI systems are understandable and their limitations are documented.
    • B) To ensure the system works equally for all ethnic groups.
    • C) To protect user data from external hackers.
    • D) To make sure a human is legally responsible for the AI.
**Correct Answer:** A
**Rationale:** Transparency focuses on openness—ensuring that users and developers understand how a model arrives at a decision and being honest about where the model might fail. Option B is Fairness; C is Privacy/Security; D is Accountability.

### Q2: A company publishes their AI ethics policy and establishes a dedicated oversight committee to review AI outcomes. Which principle does this specifically address?
    • A) Inclusiveness
    • B) Accountability
    • C) Reliability
    • D) Transparency
**Correct Answer:** B
**Rationale:** Accountability requires that the people who design and deploy AI systems must be responsible for how those systems operate and the impact they have on society.

### Q3: An AI system is designed to detect fraudulent credit card transactions by identifying patterns that differ from a user’s normal spending habits. What type of AI workload is this?
    • A) Natural Language Processing
    • B) Computer Vision
    • C) Anomaly Detection
    • D) Knowledge Mining
**Correct Answer:** C
**Rationale:** Anomaly detection is used to identify outliers or unusual patterns in data that do not match the expected norm, such as credit card fraud or system failures.



### Q4: You are using Azure Machine Learning to group thousands of images of different bird species into categories without providing any pre-existing labels. What type of ML is this?
    • A) Supervised Learning
    • B) Unsupervised Learning (Clustering)
    • C) Regression
    • D) Binary Classification
**Correct Answer:** B
**Rationale:** Because the data is unlabeled, the algorithm must find its own patterns to group the data. This is known as Clustering, a form of Unsupervised Learning.

### Q5: Which tool provides a visual 'canvas' for building and deploying machine learning models using a drag-and-drop interface?
    • A) Azure Machine Learning Designer
    • B) Azure Databricks
    • C) Visual Studio Code
    • D) Azure AI Search
**Correct Answer:** A
**Rationale:** The Designer is the specific low-code/no-code tool within Azure Machine Learning Studio used to create ML pipelines visually.

### Q6: You are building a model to predict the specific temperature (in degrees) for tomorrow based on historical weather data. What type of Machine Learning task is this?
    • A) Classification
    • B) Clustering
    • C) Regression
    • D) Image Tagging
**Correct Answer:** C
**Rationale:** Regression is used to predict a continuous, numeric value (like temperature, price, or weight). Classification is used for categories (like "Hot" or "Cold").



### Q7: You need a solution that identifies the location of specific products on a retail shelf and provides their X and Y coordinates. Which service should you use?
    • A) Image Classification
    • B) Object Detection
    • C) Optical Character Recognition (OCR)
    • D) Face API
**Correct Answer:** B
**Rationale:** While Image Classification tells you what is in an image, Object Detection tells you what it is AND where it is located using bounding boxes and coordinates.

### Q8: Which Azure service is best suited for automatically reading and extracting structured data (like table rows and totals) from standardized invoices?
    • A) Azure AI Vision
    • B) Azure AI Document Intelligence
    • C) Azure AI Custom Vision
    • D) Azure AI Video Indexer
**Correct Answer:** B
**Rationale:** Document Intelligence (formerly Form Recognizer) is optimized for extracting structured data from documents, forms, and receipts.

### Q9: What type of Computer Vision task is used to determine if a human face is present in a photo?
    • A) Face Detection
    • B) Object Detection
    • C) Image Classification
    • D) Spatial Analysis
**Correct Answer:** A
**Rationale:** Face Detection specifically identifies the presence and location of human faces in an image.



### Q10: Which NLP feature identifies 'Microsoft' as an Organization and 'New York' as a Location within a text document?
    • A) Sentiment Analysis
    • B) Named Entity Recognition (NER)
    • C) Key Phrase Extraction
    • D) Language Detection
**Correct Answer:** B
**Rationale:** NER is the process of identifying and categorizing entities (people, places, organizations) in text.

### Q11: A global agency wants to translate their website content from English into 100 different languages. Which service is designed for this task?
    • A) Azure AI Speech
    • B) Azure AI Translator
    • C) Azure AI Vision
    • D) Azure AI Search
**Correct Answer:** B
**Rationale:** Azure AI Translator is the dedicated service for text-to-text translation across dozens of languages.

### Q12: What is the purpose of Conversational Language Understanding (CLU)?
    • A) To translate text from one language to another.
    • B) To understand the intent behind a user's command and extract key information.
    • C) To read text from a handwritten note.
    • D) To detect fraudulent login attempts.
**Correct Answer:** B
**Rationale:** CLU is the core of modern chatbots; it helps the bot understand what the user wants to do (Intent) and what they are talking about (Entities).



### Q13: Which Azure service provides enterprise-grade access to models like GPT-4 and DALL-E?
    • A) Azure Machine Learning
    • B) Azure OpenAI Service
    • C) Azure AI Search
    • D) Azure AI Vision
**Correct Answer:** B
**Rationale:** Azure OpenAI is the specific service that hosts OpenAI’s generative models within the secure Azure cloud environment.

### Q14: In the context of Generative AI, what is 'Prompt Engineering'?
    • A) Designing the hardware that runs the AI models.
    • B) Creating specific text inputs to guide the AI toward a desired output.
    • C) Writing the core Python code that trains the model from scratch.
    • D) Managing the electrical power to the data center.
**Correct Answer:** B
**Rationale:** Prompt Engineering is the art of crafting inputs (prompts) to get the most accurate or creative response from a generative model.

### Q15: To prevent an AI from generating harmful or offensive content in a chat application, which service should you integrate?
    • A) Azure AI Search
    • B) Azure AI Content Safety
    • C) Azure AI Speech
    • D) Azure AI Vision
**Correct Answer:** B
**Rationale:** Azure AI Content Safety provides the guardrails to filter out inappropriate content in both user inputs and AI outputs.


---


## Module 02

### Q1: Based on Lesson 2.1, what is the defining characteristic of Generative AI compared to traditional AI?
    • A) It only analyzes historical data without making predictions.
    • B) It creates original content, such as text, images, or code, rather than just classifying existing data.
    • C) It requires manual coding for every possible output.
    • D) It is used exclusively for managing cloud hardware.
**Correct Answer:** B
**Rationale:** Generative AI focuses on "Original Creation" (as noted in Lesson 2.1), moving beyond simple pattern recognition to generating new data.

### Q2: According to Lesson 2.2, how do Small Language Models (SLMs) typically differ from Large Language Models (LLMs)?
    • A) SLMs are more expensive to run and require more memory.
    • B) SLMs are optimized for efficiency and can often run on-device with fewer parameters.
    • C) SLMs are incapable of understanding human language.
    • D) LLMs are only used for image generation, while SLMs are for text.
**Correct Answer:** B
**Rationale:** Lesson 2.2 explores the trade-offs between size and efficiency; SLMs are designed to be more lightweight and efficient than their "Large" counterparts.

### Q3: In Lesson 2.3, what is a "Token" in the context of how AI reads text?
    • A) A physical security key used to log into Azure.
    • B) The fundamental unit of text (such as a word or part of a word) that an AI processes.
    • C) A type of cryptocurrency used to pay for AI services.
    • D) A complete paragraph of text.
**Correct Answer:** B
**Rationale:** Lesson 2.3 explains that AI doesn't read words like humans; it breaks text into "tokens" to process information numerically.

### Q4: According to Lesson 2.4, what is the primary purpose of Vector Embeddings?
    • A) To compress images so they take up less disk space.
    • B) To convert data into numerical representations that capture semantic meaning and relationships.
    • C) To act as a firewall for the Azure AI Gateway.
    • D) To delete old data from a database automatically.
**Correct Answer:** B
**Rationale:** Vector Embeddings give "Meaning to Data" by placing related concepts closer together in a multi-dimensional mathematical space.

### Q5: Lesson 2.5 mentions "The Transformer" and the phrase "Attention is All You Need." What does the "Attention" mechanism allow a model to do?
    • A) It allows the model to ignore the user and focus on internal logs.
    • B) It allows the model to focus on the most relevant parts of an input sequence when generating an output.
    • C) It forces the user to wait longer for a response.
    • D) It limits the number of tokens a user can send.
**Correct Answer:** B
**Rationale:** The Transformer architecture uses "Attention" to weigh the importance of different words in a sentence, regardless of their distance from each other.

### Q6: In Lesson 2.6, which of the following is considered a core component of an "AI Agent"?
    • A) Memory, Tools, and Reasoning.
    • B) A physical robotic arm.
    • C) High-speed internet cables only.
    • D) A standard SQL database without AI features.
**Correct Answer:** A
**Rationale:** As defined in Lesson 2.6, an Intelligent Agent is distinguished by its ability to use memory, interact with tools, and apply reasoning to solve tasks.

### Q7: According to Lesson 2.7, what is the primary role of the "Azure AI Gateway"?
    • A) To act as a physical router in a data center.
    • B) To manage and secure traffic, including load balancing and policy enforcement, for AI model APIs.
    • C) To generate images from text prompts.
    • D) To provide a storage space for training datasets.
**Correct Answer:** B
**Rationale:** The Gateway serves as a management layer (Lesson 2.7) for controlling how applications interact with AI models.

### Q8: In Lab 2.1, why is "Token Limiting" an important configuration on an API Gateway?
    • A) To prevent the AI from learning too much information.
    • B) To control costs and prevent a single user or application from exhausting the service quota.
    • C) To make the AI respond in shorter sentences only.
    • D) To encrypt the data being sent to the model.
**Correct Answer:** B
**Rationale:** Lab 2.1 focuses on practical management; limiting tokens is essential for resource management and cost control.

### Q9: Based on Lab 2.2, what is the first step in "Building Your First Agent"?
    • A) Deleting all existing models.
    • B) Defining the agent's persona and the tools it is permitted to use.
    • C) Training a Large Language Model from scratch.
    • D) Purchasing a new physical server.
**Correct Answer:** B
**Rationale:** Lab 2.2 guides the user through the initial setup of an agent, which requires defining its purpose and capabilities.

### Q10: According to Lab 2.3, why is "Tracing" necessary when working with Intelligent Agents?
    • A) To draw pictures of the agent's logic.
    • B) To follow the step-by-step "thought process" and tool calls an agent makes to debug its reasoning.
    • C) To speed up the model's response time.
    • D) To hide the agent's actions from the administrator.
**Correct Answer:** B
**Rationale:** Monitoring and Tracing (Lab 2.3) are vital for understanding how an agent reached a specific conclusion or where a workflow failed.

### Q11: Lab 2.4 covers "Agent to Agent Workflow." What does this workflow imply?
    • A) One agent is replaced by another agent to save money.
    • B) Multiple agents work together, passing tasks or information between them to complete a complex goal.
    • C) An agent starts fighting with another agent over resources.
    • D) An agent is used to train a human.
**Correct Answer:** B
**Rationale:** "End to End - Agent to Agent Workflow" describes a multi-agent system where different specialized agents collaborate.

### Q12: According to the hierarchy in Section 4, which lesson would you refer to if you wanted to understand how AI represents the "meaning" of a word numerically?
    • A) Lesson 2.1: What is Generative AI.
    • B) Lesson 2.4: Vector Embeddings.
    • C) Lab 2.3: Monitoring and Tracing.
    • D) Lesson 2.7: The Azure AI Gateway.
**Correct Answer:** B
**Rationale:** Lesson 2.4 specifically addresses how embeddings give "meaning to data" through numerical vectors.

### Q13: If an agent needs to calculate a complex math equation and doesn't have the internal capability, it uses a "Tool." Which lesson covers this concept?
    • A) Lesson 2.3: Understanding Tokens.
    • B) Lesson 2.6: Defining AI Agents.
    • C) Lesson 2.2: LLMs vs. SLMs.
    • D) Lesson 2.5: The Transformer.
**Correct Answer:** B
**Rationale:** Lesson 2.6 defines agents as entities that use "Memory, Tools, and Reasoning."

### Q14: What is the primary focus of the "Transformer" architecture discussed in Lesson 2.5?
    • A) It is used to transform physical hardware into cloud servers.
    • B) It is the underlying architecture that allows models to process sequences of data (like text) efficiently using attention.
    • C) It is a tool for translating video files into audio files.
    • D) It is a specific type of Azure AI Gateway.
**Correct Answer:** B
**Rationale:** The Transformer is the breakthrough architecture (Lesson 2.5) that powers modern LLMs and generative AI.

### Q15: When "Monitoring and Tracing" an agent in Lab 2.3, which of the following are you most likely looking for?
    • A) The color of the agent's icon.
    • B) The sequence of inputs, reasoning steps, and tool outputs.
    • C) The number of emails the agent has deleted.
    • D) The physical location of the Azure data center.
**Correct Answer:** B
**Rationale:** Lab 2.3 focuses on observability—ensuring the agent's internal logic and external tool usage are working as intended.


---


## Module 03


### Q1: What is the defining characteristic of Generative AI compared to traditional Artificial Intelligence?
    • A) It only analyzes historical data without making predictions.
    • B) It creates original content, such as text, images, or code, rather than just classifying existing data.
    • C) It requires manual coding for every possible output string.
    • D) It is used exclusively for managing physical cloud hardware.
**Correct Answer:** B
**Rationale:** Generative AI is distinguished by its ability to generate "new" data (content creation) rather than just analyzing or labeling "existing" data.

### Q2: How do Small Language Models (SLMs) typically differ from Large Language Models (LLMs)?
    • A) SLMs are more expensive to run and require significantly more memory.
    • B) SLMs are optimized for efficiency and can often run on-device with fewer parameters.
    • C) SLMs are technically incapable of understanding human language.
    • D) LLMs are used for image generation, while SLMs are strictly for audio.
**Correct Answer:** B
**Rationale:** SLMs are designed to be lightweight and efficient, making them ideal for specific tasks or edge devices where the massive scale of an LLM isn't necessary.

### Q3: What is a "Token" in the context of how a Large Language Model processes text?
    • A) A physical security key used to log into the Azure portal.
    • B) The fundamental unit of text (such as a word or a cluster of characters) that an AI processes numerically.
    • C) A type of digital currency used to pay for API calls.
    • D) A complete, unformatted document file.
**Correct Answer:** B
**Rationale:** AI models break down human language into "tokens" to perform mathematical calculations. A token is usually a word or a part of a word.

### Q4: What is the primary purpose of using Vector Embeddings in an AI system?
    • A) To compress images so they occupy less storage space.
    • B) To convert data into numerical representations that capture semantic meaning and relationships.
    • C) To act as a network firewall for an Azure subscription.
    • D) To automatically delete outdated training data.
**Correct Answer:** B
**Rationale:** Vector Embeddings represent the "meaning" of data as coordinates in a multi-dimensional space, allowing the AI to find related concepts mathematically.

### Q5: Which mechanism in the Transformer architecture allows a model to focus on the most relevant parts of a long input sequence when generating an answer?
    • A) Sequential Processing
    • B) Attention
    • C) Data Indexing
    • D) Token Limiting
**Correct Answer:** B
**Rationale:** The "Attention" mechanism allows the model to "attend" to specific words in a sentence that provide the most context, regardless of how far apart they are.

### Q6: Which three components are generally considered the core pillars of an "Intelligent AI Agent"?
    • A) Memory, Tools, and Reasoning.
    • B) Speed, Storage, and Bandwidth.
    • C) Python, Java, and C++.
    • D) Electricity, Servers, and Cables.
**Correct Answer:** A
**Rationale:** An agent is defined by its ability to remember past interactions (Memory), use external APIs (Tools), and plan its steps (Reasoning).

### Q7: What is the primary role of an AI Gateway within an enterprise AI architecture?
    • A) To generate high-resolution images from text.
    • B) To manage and secure traffic, including load balancing and policy enforcement, between applications and AI models.
    • C) To act as a physical router inside a local office.
    • D) To host the raw training datasets for a model.
**Correct Answer:** B
**Rationale:** An AI Gateway serves as the "management layer," ensuring that AI requests are secure, governed, and distributed efficiently across models.


Part 2: Vector Databases & Orchestration
### Q8: Which pattern is used to provide a Large Language Model with specific, up-to-date data from your own organization to improve the accuracy of its responses?
    • A) Zero-Shot Prompting
    • B) Retrieval Augmented Generation (RAG)
    • C) Deep Learning Training
    • D) Hard-coding
**Correct Answer:**  B
**Rationale:**  RAG "augments" the model's generation process by first "retrieving" relevant facts from a private data source.

### Q9: Which Azure service is designed to create high-performance indexes that allow for Semantic Search across large datasets?
    • A) Azure AI Search
    • B) Azure SQL Database
    • C) Azure Virtual Machines
    • D) Azure Monitor
**Correct Answer:** A
**Rationale:** Azure AI Search is the primary tool for building search indexes that support both keyword and semantic (meaning-based) retrieval.

### Q10: Why are Vector Databases essential for modern AI applications?
    • A) They store data in traditional rows and columns for easier human reading.
    • B) They store and query high-dimensional mathematical vectors to enable similarity-based searching.
    • C) They are the only databases that can store plain text files.
    • D) They are required to turn the AI on and off.
**Correct Answer:** B
**Rationale:** Because AI models understand the world through vectors (embeddings), a Vector Database is needed to find the "nearest" or most "similar" pieces of information quickly.

### Q11: What is the role of an Orchestration framework, such as Semantic Kernel, in an AI application?
    • A) To cool down the physical servers in the data center.
    • B) To act as an integration layer that connects AI models with traditional code, plugins, and data connectors.
    • C) To design the user interface of a mobile application.
    • D) To monitor the electrical usage of a cloud subscription.
**Correct Answer:** B
**Rationale:** Orchestration frameworks manage the complex "flow" of a request, calling the model, then a tool, then a database in the correct order.

### Q12: Which of the following is the best definition of "Prompt Engineering"?
    • A) Programming the neural weights of a model using Python.
    • B) The practice of refining and optimizing input text to guide an AI model to produce specific, high-quality results.
    • C) Building the physical cooling systems for AI supercomputers.
    • D) Deleting user prompts to save disk space.
**Correct Answer:** B
**Rationale:** Prompt Engineering is the "art" of communicating with the model to get the desired behavior through text instructions.

### Q13: In an AI system, what does the process of "Grounding" refer to?
    • A) Disconnecting the AI from the internet for safety.
    • B) Ensuring the AI’s responses are based on verifiable, provided data sources rather than its own internal training only.
    • C) Limiting the AI to only one single language.
    • D) Training the AI on a local computer instead of the cloud.
**Correct Answer:** B
**Rationale:** Grounding "anchors" the AI's response in reality (your data), which significantly reduces the risk of the model making things up (hallucinating).

### Q14: What is the benefit of "Semantic Search" compared to traditional keyword-based search?
    • A) It is always faster because it skips the text and only looks at numbers.
    • B) It understands the intent and context of a query, finding relevant results even if the exact words don't match.
    • C) It only works for image data and ignores text.
    • D) It does not require any computing power to function.
**Correct Answer:** B
**Rationale:** Semantic search looks for the meaning behind the words. Searching for "tiny feline" would successfully find results for "small cat."

### Q15: When using an Orchestration tool to build an agent, what is a "Plugin" or "Tool"?
    • A) A physical attachment to the server.
    • B) A piece of code that allows the AI to perform a specific action, like checking the weather or searching a database.
    • C) A specific brand of laptop.
    • D) A type of computer monitor.
**Correct Answer:** B
**Rationale:** Plugins/Tools give an AI "hands"—the ability to interact with the real world or other software systems beyond just generating text.


---


## Module 04


### Q1: Which NLP feature is used to determine the emotional tone of a piece of text, such as identifying if a product review is "Positive," "Negative," or "Neutral"?
    • A) Named Entity Recognition (NER)
    • B) Sentiment Analysis
    • C) Language Detection
    • D) Key Phrase Extraction
**Correct Answer:** B
**Rationale:** Sentiment Analysis evaluates the "feeling" or emotional weight behind a text to categorize the user's opinion.

### Q2: What is the primary function of Named Entity Recognition (NER)?
    • A) To translate text from one language to another.
    • B) To identify and categorize specific items in text, such as names of people, locations, and organizations.
    • C) To convert spoken audio files into written transcripts.
    • D) To summarize a long article into a single paragraph.
**Correct Answer:** B
**Rationale:** NER extracts "entities" like "Microsoft" (Organization) or "London" (Location) to help software understand the subjects within a document.

### Q3: A company needs to automatically detect if a customer's email is written in French, German, or Spanish. Which service feature should they use?
    • A) Key Phrase Extraction
    • B) Entity Linking
    • C) Language Detection
    • D) Text Analytics for Health
**Correct Answer:** C
**Rationale:** Language Detection identifies the specific human language used in a block of text, providing an ISO language code as output.

### Q4: Which feature allows an AI to identify the most important "talking points" or main concepts in a long document without reading the whole thing?
    • A) Key Phrase Extraction
    • B) PII Detection
    • C) Sentiment Analysis
    • D) Tokenization
**Correct Answer:** A
**Rationale:** Key Phrase Extraction identifies the main concepts or "talking points" that represent the core subject matter of the text.

### Q5: What is the purpose of PII (Personally Identifiable Information) Detection in Azure AI Language?
    • A) To identify and redact sensitive data like credit card numbers or social security numbers for privacy compliance.
    • B) To find the name of the most important person in a news story.
    • C) To translate personal letters into different languages.
    • D) To check the spelling and grammar of a personal email.
**Correct Answer:** A
**Rationale:** PII detection is a security-focused NLP task that ensures sensitive personal data is identified (and often masked) to protect user privacy.

### Q6: Which service allows you to convert an audio file of a business meeting into a written text document?
    • A) Text-to-Speech (TTS)
    • B) Speech-to-Text (STT)
    • C) Speech Translation
    • D) Optical Character Recognition (OCR)
**Correct Answer:** B
**Rationale:** Speech-to-Text (also known as transcription) takes spoken vocal input and converts it into written digital text.

### Q7: You want to build a smart home assistant that reads out the weather forecast in a natural, human-sounding voice. Which service should you use?
    • A) Speech-to-Text
    • B) Text-to-Speech
    • C) Language Detection
    • D) Sentiment Analysis
**Correct Answer:** B
**Rationale:** Text-to-Speech (Speech Synthesis) converts digital text into spoken audio that mimics human vocal patterns.

### Q8: What does "Speech Translation" enable in a real-time conversation?
    • A) It allows the AI to recognize who is speaking by their voice.
    • B) It translates spoken audio from one language directly into another spoken language or text.
    • C) It detects if the speaker is angry or happy.
    • D) It converts a person's speech into a musical melody.
**Correct Answer:** B
**Rationale:** Speech translation handles the end-to-end process of listening in one language and outputting the meaning in a different target language.

### Q9: Which feature is used to build a conversational bot that can understand a user's intent, such as "Book a flight" or "Check the weather"?
    • A) Sentiment Analysis
    • B) Conversational Language Understanding (CLU)
    • C) PII Detection
    • D) Key Phrase Extraction
**Correct Answer:** B
**Rationale:** CLU is the specialized NLP technology that maps user utterances to specific "Intents" (actions) and "Entities" (details).

### Q10: In a chatbot scenario, what is an "Utterance"?
    • A) The physical speaker hardware used by the bot.
    • B) Anything the user says or types to the AI (e.g., "Hello, I need help").
    • C) The internal code used to train the model.
    • D) The bill sent to the customer for using the service.
**Correct Answer:** B
**Rationale:** An utterance is the raw input provided by the user that the AI must analyze to find an intent.

### Q11: Which Azure service should you use to create a "Question Answering" bot using an existing FAQ document?
    • A) Azure AI Search
    • B) Azure AI Language (Question Answering)
    • C) Azure AI Vision
    • D) Azure AI Translator
**Correct Answer:** B
**Rationale:** Azure AI Language has a built-in "Question Answering" feature specifically designed to ingest FAQs and knowledge bases to provide direct answers.

### Q12: What is "Entity Linking" in the context of NLP?
    • A) Connecting two different users in a chat room.
    • B) Distinguishing between identical words by linking them to a specific knowledge base (e.g., distinguishing "Mars" the planet from "Mars" the chocolate bar).
    • C) Deleting identical words from a sentence to save space.
    • D) Connecting a microphone to a computer.
**Correct Answer:** B
**Rationale:** Entity Linking provides context by disambiguating words and linking them to a known reference (like Wikipedia).

### Q13: Which component of a conversational bot represents the action the user wants to perform?
    • A) The Entity
    • B) The Intent
    • C) The Token
    • D) The Prompt
**Correct Answer:** B
**Rationale:** The "Intent" is the goal of the user's message (e.g., "Cancel Reservation" is the intent).

### Q14: If you use the Azure AI Translator service to translate a PDF document while keeping its original layout and formatting, what is this called?
    • A) Text Translation
    • B) Document Translation
    • C) Speech Translation
    • D) Object Detection
**Correct Answer:** B
**Rationale:** Document Translation is a specialized feature that translates entire files (PDF, Word, etc.) while preserving the visual structure of the document.

### Q15: When a bot extracts the "Date" and "Destination" from the sentence "I want to fly to Paris on Friday," what are these pieces of information called?
    • A) Intents
    • B) Entities
    • C) Key Phrases
    • D) Sentiments
**Correct Answer:** B
**Rationale:** While "Booking a flight" is the intent, "Paris" and "Friday" are the specific details, or "Entities," required to complete the task.


---

## Module 05


### Q1: Which of the following is a primary reason a developer would choose an API-first approach when integrating Generative AI into an existing application?
    • A) To avoid writing any code at all.
    • B) To leverage powerful, pre-trained models without needing to manage the underlying infrastructure.
    • C) To ensure the application can only run on a local offline server.
    • D) To replace the need for a user interface.
**Correct Answer:** B
**Rationale:** Using APIs (like those in Azure OpenAI) allows developers to access state-of-the-art models via simple HTTP requests, significantly reducing the complexity of deployment.

### Q2: What is the main purpose of an "API Key" in the context of Azure AI services?
    • A) To encrypt the hard drive of the user's computer.
    • B) To authenticate requests and ensure that only authorized applications can access and bill the service.
    • C) To change the language of the AI's output.
    • D) To speed up the typing speed of the developer.
**Correct Answer:** B
**Rationale:** API Keys are essential security credentials used to identify the calling application and manage usage quotas and billing.

### Q3: When a developer wants to test AI prompts and see immediate responses without writing any code, which Azure web-based tool is most appropriate?
    • A) Azure AI Studio (Playgrounds)
    • B) Azure PowerShell
    • C) Windows File Explorer
    • D) Azure SQL Management Studio
**Correct Answer:** A
**Rationale:** The "Playground" environment in Azure AI Studio allows for rapid prototyping and testing of prompts and model parameters.

### Q4: Which parameter would a developer adjust to control the "creativity" or randomness of a model's response?
    • A) Token Limit
    • B) Temperature
    • C) Deployment Name
    • D) Region
**Correct Answer:** B
**Rationale:** Temperature is a hyperparameter; a lower value makes the output more deterministic (focused), while a higher value makes it more creative/diverse.

### Q5: In a real-world implementation, why is it considered a best practice to use "System Messages" in your prompt?
    • A) To send an email to the system administrator.
    • B) To define the persona, boundaries, and specific rules the AI must follow throughout the conversation.
    • C) To increase the cost of the API call.
    • D) To bypass the safety filters of the model.
**Correct Answer:** B
**Rationale:** System messages set the context for the model (e.g., "You are a helpful customer support assistant for a bank"), ensuring consistent behavior.

### Q6: According to the Capstone project requirements, what is the "Solution Design" phase intended to accomplish?
    • A) To start writing code immediately without a plan.
    • B) To map out the architecture, identify the necessary AI services, and define the data flow to solve a specific business problem.
    • C) To choose the color of the office furniture.
    • D) To hire new staff members for the marketing department.
**Correct Answer:** B
**Rationale:** Solution design is the blueprinting phase where you decide which AI tools (Vision, NLP, etc.) best fit the customer's needs.

### Q7: Which service is most effective for a developer building a solution that needs to summarize thousands of legal documents and answer questions about them?
    • A) Azure AI Vision
    • B) Azure OpenAI (using the GPT model)
    • C) Azure AI Face
    • D) Azure AI Video Indexer
**Correct Answer:** B
**Rationale:** GPT models are specifically optimized for natural language tasks like summarization and complex reasoning over text.

### Q8: What is the benefit of using "Managed Identity" instead of an API Key for authenticating an Azure application?
    • A) It makes the AI smarter.
    • B) It eliminates the need for developers to manage and store secrets/credentials, improving security.
    • C) It allows the app to run without an internet connection.
    • D) It reduces the number of tokens used.
**Correct Answer:** B
**Rationale:** Managed Identity is a more secure way to handle authentication by letting Azure manage the credentials between services automatically.

### Q9: During the "Implementation" phase of the Capstone project, what is the role of a "Prototype"?
    • A) To serve as the final, finished product for all global customers.
    • B) To create a small-scale version of the solution to prove the concept works before full-scale investment.
    • C) To replace the need for a developer.
    • D) To act as a backup of the database.
**Correct Answer:** B
**Rationale:** Prototyping allows teams to test the AI's effectiveness and get feedback before committing to a full production build.

### Q10: Which of the following is a common developer task when "Optimizing" an AI solution?
    • A) Deleting the documentation.
    • B) Refining prompts and adjusting parameters to improve response accuracy and reduce latency.
    • C) Turning off the security firewall.
    • D) Moving all data to a physical filing cabinet.
**Correct Answer:** B
**Rationale:** Optimization involves fine-tuning the interaction with the model to get the best results for the least cost and time.

### Q11: In an AI-powered application, what does "Latency" refer to?
    • A) The total number of tokens in the response.
    • B) The time it takes for the AI to generate a response after receiving a prompt.
    • C) The physical weight of the server.
    • D) The price of the Azure subscription.
**Correct Answer:** B
**Rationale:** Low latency is critical for a good user experience, especially in real-time chat applications.

### Q12: Why should a developer implement "Content Filtering" in their AI application?
    • A) To make the response text appear in different fonts.
    • B) To ensure the model does not generate or display harmful, hateful, or inappropriate content.
    • C) To limit the AI to only using five-letter words.
    • D) To prevent the AI from accessing the computer's mouse.
**Correct Answer:** B
**Rationale:** Content filtering is a fundamental part of Responsible AI, protecting both the user and the company's reputation.

### Q13: What is the primary advantage of using a "Low-Code" tool like Azure Logic Apps to connect to AI services?
    • A) It requires a PhD in computer science.
    • B) It allows business users and developers to build AI workflows quickly using a visual designer.
    • C) It makes the AI model run faster than high-code versions.
    • D) It is only used for playing games.
**Correct Answer:** B
**Rationale:** Low-code tools allow for faster integration of AI into business processes without needing deep expertise in programming languages like Python or C#.

### Q14: When building a solution for the Capstone project, why is "User Feedback" critical?
    • A) To make the users do the developer's work.
    • B) To identify if the AI's responses are actually helpful and accurate for the intended business goal.
    • C) To increase the number of tokens used per day.
    • D) To stop the project from being finished.
**Correct Answer:** B
**Rationale:** AI is probabilistic; user feedback is the only way to verify that the "most likely" answer the AI gives is actually the "correct" answer for the human user.

### Q15: What is the final step in the AI project lifecycle before a solution is considered "Live"?
    • A) Deleting the source code.
    • B) Deployment to a production environment and setting up monitoring.
    • C) Restarting the cloud.
    • D) Writing the first prompt.
**Correct Answer:** B
**Rationale:** Moving to production and establishing monitoring ensures the system is available to users and performing as expected over time.

---


# Artificial Intelligence & Machine Learning Quiz

## Section 1: Natural Language Processing (NLP)

### Question 1
What is the purpose of tokenization?
- [ ] To translate text into another language.
- [ ] To summarize large documents.
- [x] **To break down text into smaller units for analysis.**

### Question 2
Which of the following techniques is used to determine the importance of words in a specific document within the context of a larger collection of documents?
- [ ] Naïve Bayes
- [x] **TF-IDF (Term Frequency-Inverse Document Frequency)**
- [ ] Word2Vec

### Question 3
Which of the following best describes the role of embedding vectors in natural language processing (NLP)?
- [ ] They duplicate tokens in multiple languages.
- - [ ] They define stopwords that should be ignored.
- [x] **They capture semantic token relationships in multiple dimensions.**

---

## Section 2: Speech Recognition & Synthesis

### Question 1
What activity happens during the pre-processing stage of speech recognition?
- [ ] The audio is converted to .wmv format.
- [ ] Background noise is added to the audio signal.
- [x] **Feature vectors are extracted from the audio waveform for modeling.**

### Question 2
What are phonemes?
- [ ] Artifacts that are removed from the signal as part of the clean-up process.
- [x] **The smallest unit of sound in speech.**
- [ ] AI models that generate audio.

### Question 3
Why is it important to generate prosody in speech synthesis?
- [ ] Prosody maximizes the volume of the audio output.
- [ ] Prosody translates the speech to the language of the listener.
- [x] **Prosody ensures natural pronunciation and speech cadence.**

---

## Section 3: Computer Vision

### Question 1
Computer vision is based on the manipulation and analysis of what kinds of values in an image?
- [ ] Timestamps in photograph metadata
- [x] **Pixels**
- [ ] Image file names

### Question 2
What is the primary role of filters in a convolutional neural network (CNN) used for image classification?
- [ ] To apply visual effects to enhance image appearance.
- [x] **To extract numeric features from images for use in a neural network.**
- [ ] To compress image size for faster processing.

### Question 3
Which description best matches a Vision Transformer (ViT)?
- [ ] A tool that applies filters to images, changing their visual appearance.
- [ ] An AI agent that converts a large language model to a vision model.
- [x] **A model that uses attention to process image patches and create contextual embeddings.**

---

## Section 4: AI Information Extraction & OCR

### Question 1
Which of these statements accurately defines AI information extraction?
- [ ] Using SQL code to query a database.
- [ ] Copying files from cloud storage to local disks.
- [x] **Analyzing unstructured content to identify and extract relevant fields and values.**

### Question 2
How is OCR used in the information extraction process?
- [ ] Online Content Retrieval (OCR) is used to copy cloud data to a local device for processing.
- [x] **Optical character recognition (OCR) is used to convert images of text into machine-readable text data.**
- [ ] Open Conversion Routine (OCR) is a method for converting JSON data into images.

### Question 3
How does generative AI enhance the data extraction process?
- [x] **By using semantic language models to accurately match extracted values to data fields.**
- [ ] By manually coding extraction rules for each document type.
- [ ] By generating new documents from scratch.


---

## Quiz 1A — AI Concepts & Getting Started with AI in Azure

### Q1: Which statement best describes artificial intelligence?
- A) Software that imitates human capabilities such as prediction, decision-making, and language understanding
- B) Any program that stores large amounts of data in the cloud
- C) Hardware designed to run spreadsheets faster
- D) A database technology for structured records

**✅ Correct Answer: A**
**Rationale:** AI is software that imitates human capabilities — predicting outcomes, evaluating content and making decisions, understanding language, interpreting visual input, and extracting information.

---

### Q2: Which technology underpins every AI workload, conceptually expressed as f(x) = y?
- A) Blockchain
- B) Machine learning
- C) Virtualization
- D) Edge computing

**✅ Correct Answer: B**
**Rationale:** Machine learning — models trained on historic data that map an input (x) to an output (y) — is the foundation on which all AI workloads are built.

---

### Q3: An application that can perform tasks on behalf of a user is called:
- A) A data pipeline
- B) A REST API
- C) An AI agent
- D) A virtual machine

**✅ Correct Answer: C**
**Rationale:** An AI agent is an AI application that performs tasks on behalf of a user — it is software, not a person who builds or uses AI.

---

### Q4: In Azure, which construct defines the organizational security boundary?
- A) Resource group
- B) Subscription
- C) Tenant
- D) Region

**✅ Correct Answer: C**
**Rationale:** The tenant is the security boundary of an organization; users and services in it are identified and authenticated using Microsoft Entra ID.

---

### Q5: Which Azure construct provides the billing boundary?
- A) Tenant
- B) Subscription
- C) Resource group
- D) Management certificate

**✅ Correct Answer: B**
**Rationale:** Within a tenant, subscriptions define billing boundaries. Resource groups exist for organization and management, not billing.

---

### Q6: Which service authenticates users and services within an Azure tenant?
- A) Azure DNS
- B) Microsoft Entra ID
- C) Azure Monitor
- D) Azure Key Vault

**✅ Correct Answer: B**
**Rationale:** Microsoft Entra ID is Azure's identity service — it identifies and authenticates users and services within a tenant.

---

### Q7: What is Microsoft Foundry?
- A) A version-control system for AI code
- B) A unified Azure platform for building AI apps and agents
- C) A Windows desktop application for editing images
- D) A subscription tier of Microsoft 365

**✅ Correct Answer: B**
**Rationale:** Microsoft Foundry is a unified platform — a comprehensive set of Azure services — for building AI apps and agents.

---

### Q8: In a Foundry project, which asset type is used to choose and deploy AI models from a catalog?
- A) Knowledge
- B) Tools
- C) Models
- D) Agents

**✅ Correct Answer: C**
**Rationale:** The Models asset lets you browse the extensive model catalog and deploy models. Agents use models; tools and knowledge extend agents.

---

### Q9: A company publishes documentation explaining what data its AI hiring system uses and how it reaches decisions. Which responsible AI principle is being applied?
- A) Inclusiveness
- B) Transparency
- C) Reliability & safety
- D) Privacy & security

**✅ Correct Answer: B**
**Rationale:** Transparency means making an AI system's purpose, behavior, and limitations understandable to the people who use it.

---

### Q10: A medical-prediction model must be rigorously tested to confirm it operates correctly under all expected conditions before release. Which principle does this address?
- A) Fairness
- B) Accountability
- C) Reliability & safety
- D) Transparency

**✅ Correct Answer: C**
**Rationale:** Reliability & safety requires AI systems to perform dependably within defined operational limits and to be tested rigorously.

---

### Q11: Which sequence correctly orders Azure constructs from outermost to innermost?
- A) Subscription → Tenant → Resource → Resource group
- B) Tenant → Subscription → Resource group → Resource
- C) Resource group → Subscription → Tenant → Resource
- D) Tenant → Resource group → Subscription → Resource

**✅ Correct Answer: B**
**Rationale:** A tenant (security boundary) contains subscriptions (billing boundaries), which contain resource groups, which contain resources.

---

### Q12: What is the role of a Foundry project?
- A) It replaces the Azure subscription for billing purposes
- B) It provides an isolated work environment for app and agent development
- C) It stores API keys for all Azure services in the tenant
- D) It hosts the physical GPUs used by models

**✅ Correct Answer: B**
**Rationale:** Foundry projects are isolated work environments where you develop apps and agents, working with models, agents, tools, and knowledge.

---

### Q13: Which TWO items together let an application call a deployed Foundry model?
- A) A storage account and a virtual network
- B) An endpoint URL and an API key (or Entra ID token)
- C) A resource group and a subscription ID
- D) A model version number and a region name

**✅ Correct Answer: B**
**Rationale:** Applications call the endpoint (an HTTPS address) and authenticate with an API key or a Microsoft Entra ID token.

---

### Q14: What data format do Foundry endpoint requests and responses use in their bodies?
- A) XML
- B) CSV
- C) JSON
- D) YAML

**✅ Correct Answer: C**
**Rationale:** Requests carry function details and data as JSON, and responses return operation results as JSON, along with metadata headers.

---

### Q15: Why do developers typically use SDKs rather than calling Foundry REST APIs directly?
- A) SDKs bypass authentication requirements
- B) SDKs abstract the REST APIs into language-specific libraries that are easier to code against
- C) REST APIs are deprecated in Azure
- D) SDKs run models locally without an endpoint

**✅ Correct Answer: B**
**Rationale:** REST APIs are typically abstracted by language-specific SDKs (Python, C#, …) that simplify coding. Auth is still required and models still run in the cloud.

---

### Q16: A bank discovers its loan-approval model recommends rejections far more often for one postal region with a specific demographic profile, despite similar financial data. Which responsible AI principle is MOST directly violated?
- A) Transparency
- B) Fairness
- C) Inclusiveness
- D) Accountability

**✅ Correct Answer: B**
**Rationale:** Fairness requires AI to treat all people equitably and avoid bias linked to demographic characteristics. Transparency concerns explainability, not equitable outcomes.

---

### Q17: A voice assistant is updated so users who are deaf can receive the same information through real-time captions. Which principle does this BEST demonstrate?
- A) Inclusiveness
- B) Reliability & safety
- C) Fairness
- D) Privacy & security

**✅ Correct Answer: A**
**Rationale:** Inclusiveness means AI should empower everyone, including people with disabilities. Fairness is about equitable treatment across groups in decisions, which is different from designing for accessibility.

---

### Q18: An AI vendor establishes a governance board with authority to override the system's automated decisions and answer for its outcomes. Which principle is applied?
- A) Transparency
- B) Reliability & safety
- C) Accountability
- D) Fairness

**✅ Correct Answer: C**
**Rationale:** Accountability keeps humans answerable for AI systems — governance structures and human override authority are its hallmark.

---

### Q19: A company trains a model using customer purchase histories. To comply with responsible AI, personal details must be protected both during training AND when the deployed model handles requests. Which principle covers this end-to-end obligation?
- A) Privacy & security
- B) Transparency
- C) Inclusiveness
- D) Reliability & safety

**✅ Correct Answer: A**
**Rationale:** Privacy & security applies to the data used for training and to data processed at inference time — protection must span the whole lifecycle.

---

### Q20: Which statement about the relationship between Microsoft Foundry and Azure is accurate?
- A) Foundry replaces Azure services entirely as a standalone AI cloud
- B) Foundry runs independently and needs no Azure resources
- C) Foundry is built on Azure and relies on Azure compute, networking, identity, and security
- D) Foundry is an on-premises product that synchronizes with Azure

**✅ Correct Answer: C**
**Rationale:** Foundry is built on top of Azure and uses Azure resources — compute, networking, identity, security — to host and operate AI applications.

---

### Q21: A developer says: 'The endpoint stores our secrets, and the key controls how much data the endpoint may return.' What is wrong with this statement?
- A) Nothing — it is accurate
- B) Endpoints are URLs for calling deployed models, and keys authenticate requests; neither stores secrets nor limits data volume
- C) Keys actually store the model responses
- D) Endpoints authenticate requests while keys address the model

**✅ Correct Answer: B**
**Rationale:** The endpoint is simply the HTTPS address of the deployed model; the key (or Entra ID token) proves the caller is authorized. Secrets storage is a different concern (e.g., Key Vault).

---

### Q22: Your team needs separate development and production AI workspaces whose costs must appear on different invoices. At which Azure level should the environments be separated?
- A) Two resource groups in one subscription
- B) Two subscriptions
- C) Two regions in one resource group
- D) Two tenants sharing one subscription

**✅ Correct Answer: B**
**Rationale:** Subscriptions are the billing boundary — separate invoices require separate subscriptions. Resource groups organize resources but share their subscription's bill.

---

### Q23: Within a Foundry project, an agent must look up company policy documents before answering staff questions. Which project asset type manages the agent's access to those data sources?
- A) Models
- B) Knowledge
- C) Tools (actions)
- D) Deployments

**✅ Correct Answer: B**
**Rationale:** Knowledge manages data-source access for agents so they have the information they need. Actions automate tasks; models provide reasoning.

---

### Q24: Which capability list belongs to AI as defined in this course?
- A) Predicting outcomes, interpreting visual input, extracting information from sources
- B) Compiling source code, defragmenting disks, routing network packets
- C) Rendering 3D graphics, mining cryptocurrency, compressing files
- D) Hosting websites, load balancing, DNS resolution

**✅ Correct Answer: A**
**Rationale:** AI imitates human capabilities: prediction and pattern recognition, decision-making, language understanding, visual interpretation, and information extraction.

---

### Q25: A request to a Foundry endpoint fails with an authentication error even though the URL is correct. Which is the MOST likely cause?
- A) The JSON body used lowercase field names
- B) The API key or Entra ID token supplied is missing or invalid
- C) The resource group is in a different region
- D) The response format was set to JSON

**✅ Correct Answer: B**
**Rationale:** Connections to endpoints are authenticated by an authorization key or Microsoft Entra ID token — an auth failure points to the credential, not to JSON formatting or resource-group location.

---

### Q26: Which pairing of AI workload to scenario is INCORRECT?
- A) Computer vision — detecting helmets in factory CCTV footage
- B) Information extraction — pulling totals from scanned invoices
- C) Computer speech — summarizing a legal contract PDF
- D) Text & language — classifying support tickets by sentiment

**✅ Correct Answer: C**
**Rationale:** Summarizing a contract PDF is a text/language (or information-extraction) task. Computer speech deals with spoken audio — recognition and synthesis.

---

### Q27: A solution generates original marketing copy from short text briefs and can also draft images for the campaign. Which workload is this?
- A) Information extraction
- B) Generative AI
- C) Computer vision
- D) Machine-learning regression

**✅ Correct Answer: B**
**Rationale:** Generative AI creates original content — text, images, code — in response to natural-language prompts.

---

### Q28: Your Foundry-based chatbot needs to both search the web for fresh information and file support tickets automatically. In agent terms, these two capabilities are examples of:
- A) Models and endpoints
- B) Knowledge and actions provided through tools
- C) Subscriptions and resource groups
- D) Instructions and parameters

**✅ Correct Answer: B**
**Rationale:** Agents use tools for two purposes: finding knowledge to contextualize their work (web/file search) and performing actions to automate tasks (filing tickets).

---

### Q29: Which statement about Foundry resources vs Foundry projects is TRUE?
- A) Projects provide compute and storage; resources are isolated dev environments
- B) Resources provide compute, storage, and model delivery; projects are isolated environments inside them
- C) Resources and projects are interchangeable names for the same object
- D) A project can exist without any Foundry resource

**✅ Correct Answer: B**
**Rationale:** The Foundry resource supplies the underlying services (compute, storage, model delivery); projects are the isolated work environments created within it.

---

### Q30: A university lab wants students to experiment with AI without affecting the faculty's production resources, while all costs stay on the university's single invoice. What is the BEST structure?
- A) Separate tenants for each student
- B) One subscription with separate resource groups for student and production workloads
- C) One resource group containing everything
- D) Separate subscriptions for every student

**✅ Correct Answer: B**
**Rationale:** Resource groups organize and manage resources independently within one subscription (one bill). Separate tenants/subscriptions would split billing and identity unnecessarily.

---

## Quiz 1B — AI Concepts & Getting Started with AI in Azure (Round 2)

### Q1: How many principles make up Microsoft's responsible AI framework?
- A) Four
- B) Five
- C) Six
- D) Eight

**✅ Correct Answer: C**
**Rationale:** Six principles: fairness, reliability & safety, privacy & security, inclusiveness, transparency, and accountability.

---

### Q2: Which AI workload converts documents, receipts, audio, and video into structured, usable data?
- A) Computer speech
- B) Information extraction
- C) Generative AI
- D) Text classification

**✅ Correct Answer: B**
**Rationale:** Information extraction analyzes unstructured content (documents, forms, images, audio, video) and extracts relevant fields and values.

---

### Q3: An HTTPS address that applications use to access a deployed model or Foundry service is called:
- A) A resource lock
- B) An endpoint
- C) A service principal
- D) A namespace

**✅ Correct Answer: B**
**Rationale:** An endpoint is the HTTP(S) address through which applications access Foundry assets such as deployed models.

---

### Q4: Which of the following is one of the four asset types you work with in a Foundry project?
- A) Firewalls
- B) Agents
- C) Containers
- D) Pipelines

**✅ Correct Answer: B**
**Rationale:** Foundry projects contain models, agents, tools, and knowledge.

---

### Q5: Which responsible AI principle focuses on protecting the data used to train and operate AI systems?
- A) Privacy & security
- B) Fairness
- C) Transparency
- D) Inclusiveness

**✅ Correct Answer: A**
**Rationale:** Privacy & security requires safeguarding the data an AI system is trained on and the data it processes when running.

---

### Q6: What kind of boundary does a resource group provide?
- A) Billing boundary
- B) Security/identity boundary
- C) Organization and management grouping
- D) Network isolation boundary

**✅ Correct Answer: C**
**Rationale:** Resource groups exist to organize and manage related resources. Billing is the subscription; security/identity is the tenant.

---

### Q7: Which of these is an example of generative AI output?
- A) A sorted database table
- B) An original poem written from a prompt
- C) A compressed ZIP archive
- D) A disk-usage report

**✅ Correct Answer: B**
**Rationale:** Generative AI creates original content — text, images, code — in response to prompts.

---

### Q8: Interpreting the content of images and video belongs to which workload?
- A) Computer vision
- B) Information extraction
- C) Computer speech
- D) Text & language

**✅ Correct Answer: A**
**Rationale:** Computer vision is the workload concerned with interpreting visual input such as images and video.

---

### Q9: Which HTTP elements accompany the JSON body in a Foundry endpoint request?
- A) Binary attachments only
- B) Metadata headers
- C) XML envelopes
- D) Cookies signed by the model

**✅ Correct Answer: B**
**Rationale:** Requests include the function details and data as JSON plus metadata headers; responses likewise return headers and JSON results.

---

### Q10: A city deploys an AI traffic system and assigns a named officer with authority to review and reverse its decisions. Which principle is this?
- A) Accountability
- B) Transparency
- C) Reliability & safety
- D) Fairness

**✅ Correct Answer: A**
**Rationale:** Accountability keeps people answerable for AI systems — designated humans who can review and override decisions.

---

### Q11: What is the correct description of the Foundry model catalog's scope?
- A) Only Microsoft-built models
- B) Models from Microsoft plus partner and community providers
- C) Only open-source models
- D) Only speech models

**✅ Correct Answer: B**
**Rationale:** The catalog includes models sold directly by Microsoft (billed via Azure) and models from partner/community providers.

---

### Q12: Your app authenticates to a Foundry endpoint without storing any secret in code, using the identity assigned to the app. Which mechanism is this?
- A) An API key embedded in HTML
- B) A Microsoft Entra ID token
- C) A shared CSV of passwords
- D) An anonymous connection

**✅ Correct Answer: B**
**Rationale:** Endpoint connections can be authenticated by an authorization key or by a Microsoft Entra ID token — token-based auth avoids embedding secrets.

---

### Q13: Which scenario is text & language (NLP) rather than information extraction?
- A) Reading vendor and total from scanned receipts
- B) Determining that incoming product reviews are mostly negative
- C) Pulling invoice numbers from PDF files into a database
- D) Transcribing a recorded phone call

**✅ Correct Answer: B**
**Rationale:** Sentiment analysis of reviews is a classic NLP text-classification task. Receipt/invoice field extraction is information extraction; call transcription is speech.

---

### Q14: Which statement about machine learning's relationship to AI workloads is correct?
- A) Only computer vision uses machine learning
- B) Machine learning is a legacy approach replaced by generative AI
- C) Machine learning models underpin all the AI workloads, including generative AI
- D) Machine learning applies only to numeric data

**✅ Correct Answer: C**
**Rationale:** Every workload — language, speech, vision, extraction, generative AI — is built on machine-learned models that map inputs to outputs.

---

### Q15: Where do agents get the ability to perform actions such as booking a meeting?
- A) From larger context windows
- B) From tools connected to the agent
- C) From higher rate limits
- D) From the resource group configuration

**✅ Correct Answer: B**
**Rationale:** Tools connect agents to capabilities: knowledge tools supply information, action tools let the agent automate tasks.

---

### Q16: A recruitment AI is found to score candidates from one university systematically higher because historic hiring data favored them. The vendor fixes the training data. Which principle drove the fix?
- A) Fairness
- B) Transparency
- C) Privacy & security
- D) Reliability & safety

**✅ Correct Answer: A**
**Rationale:** Bias inherited from unrepresentative historic data is a fairness problem — AI must treat all people equitably.

---

### Q17: An autonomous forklift is certified only for dry indoor floors, and the manufacturer blocks operation when moisture sensors trigger. Which principle is being enforced?
- A) Inclusiveness
- B) Reliability & safety
- C) Accountability
- D) Fairness

**✅ Correct Answer: B**
**Rationale:** Reliability & safety means systems operate only within the limits they were designed and tested for — refusing unsafe conditions enforces this.

---

### Q18: A public-sector chatbot displays a notice describing what it can and cannot answer and warns users that responses may contain mistakes. Which TWO principles does the notice serve?
- A) Transparency and accountability
- B) Fairness and inclusiveness
- C) Privacy & security and reliability
- D) Inclusiveness and accountability

**✅ Correct Answer: A**
**Rationale:** Explaining capabilities/limits is transparency; publicly owning responsibility for the system's behavior supports accountability.

---

### Q19: Which statement about tenants and subscriptions is FALSE?
- A) A tenant can contain multiple subscriptions
- B) Users are authenticated at the tenant level via Microsoft Entra ID
- C) A subscription defines the security boundary of an organization
- D) Resource groups live inside subscriptions

**✅ Correct Answer: C**
**Rationale:** The tenant, not the subscription, is the security boundary. Subscriptions are billing boundaries within a tenant.

---

### Q20: A developer creates a Foundry project and wants an app to call its deployed model. Which minimal information must the app be given?
- A) Tenant ID and region
- B) Project endpoint plus a key or token, and the model deployment name
- C) Resource group name and subscription ID
- D) The model's training-data location

**✅ Correct Answer: B**
**Rationale:** Client code targets the endpoint, authenticates with a key or Entra ID token, and names the model deployment it wants to invoke.

---

### Q21: Why might an organization choose Entra ID tokens over API keys for production endpoint access?
- A) Tokens make responses faster
- B) Identity-based access removes shared static secrets and supports centralized control
- C) Keys only work in the playground
- D) Tokens are required for JSON responses

**✅ Correct Answer: B**
**Rationale:** Entra ID authentication ties access to managed identities — no shared static secret to leak or rotate manually. Both methods are otherwise functionally supported.

---

### Q22: Which is the BEST example of the 'evaluating content, making decisions, and taking action' capability of AI?
- A) A model that flags fraudulent transactions and automatically holds them for review
- B) A script that renames files by date
- C) A dashboard that charts last month's sales
- D) A backup job that runs nightly

**✅ Correct Answer: A**
**Rationale:** Evaluating input (transactions), deciding (fraud or not), and acting (holding the payment) is decision-making AI. The others are conventional automation or reporting.

---

### Q23: A Foundry-hosted agent must consult the company's HR policy PDFs (stored as project data) AND send emails via a connected service. Map each need to the correct agent concept:
- A) PDFs → actions; email → knowledge
- B) PDFs → knowledge; email → actions
- C) PDFs → instructions; email → model
- D) PDFs → model; email → instructions

**✅ Correct Answer: B**
**Rationale:** Knowledge grounds the agent in data sources (the PDFs); actions let it perform tasks (sending email) through tools.

---

### Q24: Which consequence follows from subscriptions being billing boundaries?
- A) Resources in different subscriptions cannot communicate
- B) Cost separation between departments is achieved by giving each its own subscription
- C) Each subscription requires its own tenant
- D) Only one resource group may exist per subscription

**✅ Correct Answer: B**
**Rationale:** Separate subscriptions produce separate billing scopes — the standard way to separate departmental costs. Communication across subscriptions is still possible.

---

### Q25: A startup wants to prototype a chatbot today with minimal setup: create a place to work, pick a model, get an endpoint. Which sequence matches the Foundry workflow?
- A) Create a Foundry project → deploy a model from the catalog → call the project endpoint from code
- B) Create a virtual machine → install the model → open port 80
- C) Create a storage account → upload weights → email Microsoft for a key
- D) Buy a dedicated GPU cluster → configure Kubernetes → train from scratch

**✅ Correct Answer: A**
**Rationale:** Foundry's flow: create a project (isolated environment), deploy a catalog model, then connect apps via the endpoint with a key/token.

---

### Q26: Which option correctly distinguishes generative AI from 'traditional' predictive ML?
- A) Generative AI creates new content from prompts; predictive ML estimates outcomes/labels from features
- B) Generative AI needs no training data; predictive ML does
- C) Predictive ML runs only on-premises; generative AI only in the cloud
- D) Generative AI is rule-based; predictive ML is learned

**✅ Correct Answer: A**
**Rationale:** Both are machine learning, but generative models produce original content in response to prompts, whereas predictive models output classifications or estimates.

---

### Q27: An accessibility review recommends adding descriptive audio to your app's visual dashboards so blind users benefit from the AI insights. Refusing this on cost grounds would MOST directly conflict with:
- A) Inclusiveness
- B) Reliability & safety
- C) Privacy & security
- D) Transparency

**✅ Correct Answer: A**
**Rationale:** Inclusiveness says AI should empower everyone, expressly including people with disabilities.

---

### Q28: Which claim about Foundry projects and their assets is FALSE?
- A) A project can contain multiple deployed models
- B) Agents in a project can be connected to tools
- C) Knowledge configuration controls the data sources agents can use
- D) Each project must contain exactly one agent

**✅ Correct Answer: D**
**Rationale:** Projects are flexible workspaces — they may contain zero or many agents, along with models, tools, and knowledge configurations.

---

## Quiz 2A — Generative AI & Agents

### Q1: What is a large language model (LLM)?
- A) A type of AI model designed to generate human-like text
- B) A model that processes only images
- C) A database optimized for storing long documents
- D) A compression algorithm for text files

**✅ Correct Answer: A**
**Rationale:** LLMs are AI models built to understand and generate human-like language; they power generative AI.

---

### Q2: Which model architecture do modern LLMs use?
- A) Decision tree
- B) Transformer
- C) K-means clustering
- D) Linear regression

**✅ Correct Answer: B**
**Rationale:** LLMs are based on the transformer architecture, which uses embeddings and attention to model language.

---

### Q3: What are embeddings?
- A) Vector-based representations of tokens that capture semantic meaning
- B) Extra words a model inserts to improve fluency
- C) Compressed copies of the training data
- D) Rules that filter inappropriate content

**✅ Correct Answer: A**
**Rationale:** Embeddings encode tokens as vectors; semantically similar tokens have similar vector directions.

---

### Q4: What is a 'prompt' in generative AI?
- A) The model's internal error log
- B) The natural-language input a user provides to get a response
- C) The GPU that runs the model
- D) The license agreement for the model

**✅ Correct Answer: B**
**Rationale:** Models generate responses based on natural-language prompts supplied by the user or application.

---

### Q5: Small language models (SLMs) are best suited to:
- A) Devices and resource-constrained environments
- B) Replacing all cloud models
- C) Only image generation
- D) Training other models

**✅ Correct Answer: A**
**Rationale:** SLMs are compact models used on devices and in other resource-constrained environments.

---

### Q6: Which output type is NOT commonly produced by generative AI?
- A) Natural-language text
- B) Images and video
- C) Program code
- D) Physical hardware prototypes

**✅ Correct Answer: D**
**Rationale:** Generative AI produces digital content — text/speech, images/video, and code — not physical objects.

---

### Q7: In Foundry, where can you interactively test a deployed model before writing any code?
- A) The model playground
- B) Azure DNS
- C) The billing portal
- D) The resource lock pane

**✅ Correct Answer: A**
**Rationale:** The model playground lets you explore and test models, try prompts, and adjust settings interactively.

---

### Q8: An AI agent combines a model, tools, and which third ingredient that defines its behavior and scope?
- A) Instructions
- B) A GPU quota
- C) A storage account
- D) A DNS zone

**✅ Correct Answer: A**
**Rationale:** Agents use a model (reasoning), instructions (behavior and scope), and tools (knowledge and actions).

---

### Q9: What does the attention mechanism in a transformer do?
- A) Removes irrelevant words from input
- B) Examines the relationships between each token and the tokens around it
- C) Flags offensive language
- D) Chooses which GPU processes the request

**✅ Correct Answer: B**
**Rationale:** Attention weighs how strongly each token relates to surrounding tokens, letting the model encode context.

---

### Q10: Which vector-space fact about embeddings is TRUE?
- A) Semantically similar tokens have similar directions in vector space
- B) All vectors have identical values
- C) Vectors store the literal spelling of words
- D) Vector length always equals word length

**✅ Correct Answer: A**
**Rationale:** Embeddings form a multidimensional space where similar meanings point in similar directions — enabling relationships like dog + young ≈ puppy.

---

### Q11: Which model-deployment setting determines where data is processed and how you pay?
- A) Guardrails
- B) Deployment type
- C) Version pinning
- D) Content filter level

**✅ Correct Answer: B**
**Rationale:** Deployment type controls the processing location and payment model. Version controls updates; rate limits control TPM; guardrails apply responsible-AI policies.

---

### Q12: Increasing a model's temperature parameter generally makes responses:
- A) More deterministic and repetitive
- B) More random and 'creative'
- C) Shorter
- D) Grammatically incorrect

**✅ Correct Answer: B**
**Rationale:** Temperature controls randomness — higher values yield more varied, creative output; lower values are more predictable.

---

### Q13: What is the primary benefit of using the model playground before writing code?
- A) It removes the need to deploy a model
- B) You can test prompts, compare models, and capture working settings to reuse in code
- C) It automatically writes the perfect system prompt
- D) It eliminates API authentication

**✅ Correct Answer: B**
**Rationale:** The playground is for experimentation — testing prompts and settings you can then carry into application code. It doesn't replace deployment or the API.

---

### Q14: In the OpenAI Python pattern for Foundry, which two values configure the client object?
- A) base_url (endpoint) and api_key
- B) subscription ID and tenant ID
- C) region and SKU
- D) model weights and vocabulary

**✅ Correct Answer: A**
**Rationale:** OpenAI(base_url=<foundry endpoint>, api_key=<key>) creates the client; the model deployment name is passed per request.

---

### Q15: Agents can collaborate with which of the following?
- A) Human users only
- B) Other agents only
- C) Both human users and other agents
- D) Neither — agents work in isolation

**✅ Correct Answer: C**
**Rationale:** Agents assist human users and can also participate in multi-agent workflows where specialized agents cooperate.

---

### Q16: A support chatbot must always answer in formal English, stay on-topic about billing, and refuse legal advice. Which mechanism implements these requirements?
- A) Raising the temperature
- B) Writing them into the instructions (system prompt)
- C) Increasing the rate limit
- D) Choosing a larger resource group

**✅ Correct Answer: B**
**Rationale:** Instructions/system prompts specify context and guidelines for responses — tone, scope, and refusal rules belong there.

---

### Q17: Your model deployment intermittently rejects requests during peak hours with throttling errors. Which deployment setting should you examine FIRST?
- A) Guardrails
- B) Rate limits (tokens-per-minute)
- C) Model version
- D) System prompt length

**✅ Correct Answer: B**
**Rationale:** Rate limits cap maximum TPM throughput; exceeding them causes throttling. Guardrails filter content, they don't throttle.

---

### Q18: A compliance team wants inappropriate content blocked at the deployment level regardless of what the application sends. Which setting applies?
- A) Guardrails (responsible AI policies)
- B) Deployment type
- C) Temperature
- D) Auto-update policy

**✅ Correct Answer: A**
**Rationale:** Guardrails attach responsible-AI content policies to the deployment itself, independent of application logic.

---

### Q19: Why can two identical prompts to the same LLM return different answers?
- A) The endpoint caches corrupt data
- B) Generation is probabilistic — the model samples from a distribution over next tokens
- C) JSON encoding randomizes text
- D) Keys expire between calls

**✅ Correct Answer: B**
**Rationale:** LLMs generate probabilistically; sampling (influenced by temperature) means outputs can vary between identical calls.

---

### Q20: A team wants their agent to cite the company travel policy when answering expense questions. The policy lives in uploaded files. Which tool category should be added to the agent?
- A) An action tool for code generation
- B) A knowledge tool such as file search
- C) A larger model deployment
- D) A billing export tool

**✅ Correct Answer: B**
**Rationale:** Knowledge tools (e.g., file search) ground the agent in data sources so it can contextualize answers.

---

### Q21: Which statement about the Foundry model catalog is FALSE?
- A) It contains models from multiple providers
- B) Microsoft-sold models are billed through your Azure subscription
- C) You can filter and compare models
- D) Using the catalog removes the need for an Azure subscription

**✅ Correct Answer: D**
**Rationale:** The catalog is a discovery/compare/deploy hub — you still need an Azure subscription; Microsoft-sold models bill through it.

---

### Q22: Your multi-agent workflow has a 'triage' agent that hands tickets to a 'refunds' agent. What enables this pattern?
- A) Agents can collaborate with other agents, each with its own responsibility
- B) Both agents must share one system prompt
- C) Azure only permits one agent per tenant
- D) Refunds require a special GPU

**✅ Correct Answer: A**
**Rationale:** Agents can form workflows of specialized agents that cooperate — a core agentic-AI capability.

---

### Q23: Which option lists the THREE levers for configuring generative model behavior at request time?
- A) Instructions, user input, parameters
- B) Region, SKU, tier
- C) Tenant, subscription, resource group
- D) Firewall, VNet, NSG

**✅ Correct Answer: A**
**Rationale:** You shape behavior via instructions (system prompt), the user prompt itself, and parameters such as temperature and response length.

---

## Quiz 2B — Generative AI & Agents (Round 2)

### Q1: Which is the most accurate description of generative AI?
- A) It uses a language model to create original content in response to a prompt
- B) It is an obsolete form of AI replaced by machine learning
- C) It can only be operated by professional data scientists
- D) It retrieves pre-written answers from a database

**✅ Correct Answer: A**
**Rationale:** Generative AI creates original content from prompts via a language model. It's neither obsolete nor specialist-only, and it doesn't just look up canned answers.

---

### Q2: What is a token in the context of language models?
- A) A unit of text (a word or word-part) that the model processes
- B) A hardware security device
- C) A billing credit for API calls
- D) A synonym for an API key

**✅ Correct Answer: A**
**Rationale:** Models split text into tokens — words or word-parts — which are then embedded and processed.

---

### Q3: Which prompt element sets overall context and guidelines for how a model should respond?
- A) The system prompt (instructions)
- B) The response body
- C) The rate limit
- D) The resource tag

**✅ Correct Answer: A**
**Rationale:** Instructions/system prompts specify context and behavioral guidelines for the model's responses.

---

### Q4: An agent's 'tools' serve which two purposes?
- A) Finding knowledge and performing actions
- B) Compiling code and formatting disks
- C) Billing and monitoring
- D) Authentication and encryption

**✅ Correct Answer: A**
**Rationale:** Tools let agents find knowledge (context/grounding) and perform actions (task automation).

---

### Q5: Smart chatbots powered by generative AI differ from older chatbots because they:
- A) Generate responses dynamically instead of using hard-coded answers
- B) Only work by telephone
- C) Cannot understand questions
- D) Require no model at all

**✅ Correct Answer: A**
**Rationale:** Generative chatbots produce answers dynamically from a model rather than following hard-coded scripts and logic.

---

### Q6: Which family of API does Foundry expose for consuming generative models from code?
- A) OpenAI-compatible APIs
- B) FTP APIs
- C) SMTP APIs
- D) Direct SQL queries

**✅ Correct Answer: A**
**Rationale:** You consume Foundry generative models via OpenAI-compatible APIs (typically through SDKs).

---

### Q7: Which parameter most directly limits how long a model's answer can be?
- A) Maximum response length / max tokens
- B) Temperature
- C) Deployment region
- D) API version

**✅ Correct Answer: A**
**Rationale:** Response-length (max token) parameters cap output size; temperature controls randomness, not length.

---

### Q8: Agentic AI is best described as:
- A) Automation through smart, connected agents built on generative AI
- B) A spreadsheet plug-in
- C) A way to compress models
- D) Manual scripting of business rules

**✅ Correct Answer: A**
**Rationale:** Generative AI is the foundation for agentic AI — automation through smart, connected agents.

---

### Q9: Where do embedding values come from during model training?
- A) They are hand-written by engineers
- B) They are learned, with attention weighing each token's relationship to surrounding tokens in training data
- C) They are copied from a dictionary
- D) They are random and never change

**✅ Correct Answer: B**
**Rationale:** Embedding values are learned during training; attention encodes each token's contextual relationships with the tokens around it.

---

### Q10: Which statement correctly contrasts LLMs and SLMs?
- A) SLMs are compact models suited to devices; LLMs are larger and more capable
- B) SLMs only handle images
- C) LLMs run only on phones
- D) There is no difference

**✅ Correct Answer: A**
**Rationale:** Small language models trade capability for footprint, fitting devices and constrained environments; LLMs are larger.

---

### Q11: You want repeatable demo output from a model. Which parameter should be LOWERED?
- A) Temperature
- B) Max tokens
- C) TPM rate limit
- D) Number of tools

**✅ Correct Answer: A**
**Rationale:** Lower temperature reduces randomness, making outputs more deterministic and repeatable.

---

### Q12: Which situation calls for creating an AGENT rather than calling a model directly?
- A) The solution must autonomously look up order data and issue refunds via connected tools
- B) You need one-off text completion in a script
- C) You want to lower response randomness
- D) You need to change the JSON schema of a response

**✅ Correct Answer: A**
**Rationale:** When the solution needs autonomy plus tools (knowledge + actions), that's the agent pattern; a direct model call suffices for simple completion.

---

### Q13: Which capability distinguishes an agent's ACTION tools from its KNOWLEDGE tools?
- A) Actions change external state (create tickets, send mail); knowledge retrieves information to ground responses
- B) Actions are read-only; knowledge is write-only
- C) Actions run before the model; knowledge after
- D) There is no distinction

**✅ Correct Answer: A**
**Rationale:** Knowledge tools fetch information for context; action tools automate tasks by operating on connected services.

---

## Quiz 3A — NLP & Text Analysis

### Q1: What is the purpose of tokenization in NLP?
- A) To break text into smaller units for analysis
- B) To translate text into another language
- C) To encrypt sensitive documents
- D) To compress text for storage

**✅ Correct Answer: A**
**Rationale:** Tokenization splits text into words or word-parts so it can be analyzed or vectorized.

---

### Q2: Which NLP task determines whether a product review is positive or negative?
- A) Sentiment analysis
- B) Language detection
- C) Named entity recognition
- D) Stemming

**✅ Correct Answer: A**
**Rationale:** Sentiment analysis is a text-classification task that evaluates tone/opinion.

---

### Q3: Named entity recognition (NER) identifies which items in text?
- A) People, places, organizations, dates and similar entities
- B) Grammatical errors
- C) Font styles
- D) Passwords

**✅ Correct Answer: A**
**Rationale:** NER labels entities such as persons, organizations, locations, and dates found in text.

---

### Q4: 'The', 'a', 'it', and 'and' are examples of what in text pre-processing?
- A) Stop words
- B) Phonemes
- C) Embeddings
- D) Key phrases

**✅ Correct Answer: A**
**Rationale:** Stop words are common 'noise' words removed during pre-processing because they add little meaning.

---

### Q5: Which technique consolidates 'power', 'powered' and 'powerful' into a shared root?
- A) Stemming / lemmatization
- B) Tokenization
- C) Normalization
- D) POS tagging

**✅ Correct Answer: A**
**Rationale:** Stemming and lemmatization reduce word variants to a common root form.

---

### Q6: Parts-of-speech (POS) tagging labels words as:
- A) Verbs, nouns, adjectives, and other word types
- B) Positive or negative
- C) English or French
- D) Long or short

**✅ Correct Answer: A**
**Rationale:** POS tagging identifies each token's grammatical role — verb, noun, adjective, etc.

---

### Q7: Which pre-processing step removes capitalization and punctuation?
- A) Normalization
- B) Stop-word removal
- C) Vectorization
- D) Summarization

**✅ Correct Answer: A**
**Rationale:** Normalization standardizes text by lower-casing and stripping punctuation.

---

### Q8: Which of these is a common NLP use case?
- A) Spam filtering in email systems
- B) Rendering 3D game scenes
- C) Defragmenting hard disks
- D) Encrypting network traffic

**✅ Correct Answer: A**
**Rationale:** NLP powers spam filtering, search indexing, chatbot intent prediction, PII redaction, and social-media analysis.

---

### Q9: Which technique measures a word's importance to one document relative to its frequency across an entire collection?
- A) TF-IDF
- B) Bag-of-Words
- C) TextRank
- D) Naïve Bayes

**✅ Correct Answer: A**
**Rationale:** Term Frequency–Inverse Document Frequency scores words high when frequent in a document but rare across the corpus.

---

### Q10: Bag-of-Words classification works by:
- A) Correlating the frequency of words from a defined set with a category
- B) Translating text into vectors of pixels
- C) Sorting words alphabetically
- D) Counting sentences only

**✅ Correct Answer: A**
**Rationale:** BoW correlates word-set frequencies with classifications — e.g., 'happy/great/fantastic' indicating positive sentiment.

---

### Q11: TextRank is commonly used for which purpose, and what inspired it?
- A) Extractive summarization; based on the PageRank web-search idea
- B) Machine translation; based on RSA encryption
- C) Speech synthesis; based on MP3 encoding
- D) Spam detection; based on firewalls

**✅ Correct Answer: A**
**Rationale:** TextRank scores sentence relevance (a PageRank-style algorithm) and is used to extract the n most relevant sentences as a summary.

---

### Q12: Azure Language in Foundry Tools offers which capability set?
- A) PII extraction, language detection, named entity recognition, Text Analytics for Health
- B) Video rendering and 3D capture
- C) GPU scheduling
- D) Database indexing

**✅ Correct Answer: A**
**Rationale:** Azure Language provides PII extraction, language detection, NER, and health-domain text analytics as prebuilt capabilities.

---

### Q13: What does client.detect_language([text]) return?
- A) Language name, ISO 639-1 code, and a confidence score
- B) A translated document
- C) The text with all verbs removed
- D) A list of stop words

**✅ Correct Answer: A**
**Rationale:** Language detection returns the detected language name, its ISO 639-1 code, and a 0–1 confidence score.

---

### Q14: A hospital wants entities like medication names and dosages extracted from clinical notes. Which Azure Language capability is designed for this?
- A) Text Analytics for Health
- B) Key-phrase extraction
- C) Language detection
- D) Spell check

**✅ Correct Answer: A**
**Rationale:** Text Analytics for Health specializes in clinical/medical entity extraction from unstructured health text.

---

### Q15: Your extractive summarizer must pick the 3 most relevant sentences from each article. Which technique matches?
- A) TextRank sentence scoring
- B) Bag-of-Words
- C) Stop-word removal
- D) Language detection

**✅ Correct Answer: A**
**Rationale:** TextRank scores sentence relevance from shared terms and is commonly used to extract the top n sentences.

---

## Quiz 3B — NLP & Text Analysis (Round 2)

### Q1: Natural language processing (NLP) is best summarized as:
- A) Inferring meaning from text
- B) Rendering fonts on screen
- C) Compressing documents
- D) Encrypting messages

**✅ Correct Answer: A**
**Rationale:** NLP is the workload concerned with understanding and inferring meaning from written language.

---

### Q2: Which task produces a short version of a long document?
- A) Summarization
- B) Tokenization
- C) POS tagging
- D) Language detection

**✅ Correct Answer: A**
**Rationale:** Summarization condenses a document; extractive approaches pick the most relevant sentences.

---

### Q3: PII stands for:
- A) Personally identifiable information
- B) Public internet index
- C) Partial input inference
- D) Primary integer identifier

**✅ Correct Answer: A**
**Rationale:** PII = personally identifiable information — names, addresses, ID numbers, emails, etc.

---

### Q4: Which of these is an example of a named entity?
- A) 'Microsoft' (an organization)
- B) 'quickly' (an adverb)
- C) A comma
- D) A blank line

**✅ Correct Answer: A**
**Rationale:** Named entities are real-world items — organizations, people, places, dates — like 'Microsoft'.

---

### Q5: Key-phrase extraction answers which question about a document?
- A) What are the main topics or talking points?
- B) Who wrote it?
- C) How many bytes is it?
- D) What font does it use?

**✅ Correct Answer: A**
**Rationale:** Key-phrase extraction surfaces the main concepts/terms in a document.

---

### Q6: Which Python package provides TextAnalyticsClient?
- A) azure.ai.textanalytics
- B) numpy
- C) matplotlib
- D) flask

**✅ Correct Answer: A**
**Rationale:** The Azure Language SDK's TextAnalyticsClient comes from the azure.ai.textanalytics library.

---

### Q7: A chatbot deciding a user wants to 'book a flight' from their message is an example of:
- A) Intent prediction
- B) Speech synthesis
- C) Image classification
- D) OCR

**✅ Correct Answer: A**
**Rationale:** Intent prediction — an NLP use case — maps user utterances to intended actions for bots and assistants.

---

### Q8: Which credential object authenticates TextAnalyticsClient with a key?
- A) AzureKeyCredential
- B) StorageSharedKey
- C) X509Certificate
- D) BasicAuthHeader

**✅ Correct Answer: A**
**Rationale:** AzureKeyCredential wraps the resource key; alternatively Microsoft Entra ID credentials can be used.

---

### Q9: Why remove stop words before statistical analysis?
- A) They occur everywhere and add noise, diluting meaningful frequency signals
- B) They contain personal data
- C) They break JSON encoding
- D) They are illegal in some locales

**✅ Correct Answer: A**
**Rationale:** Stop words are high-frequency, low-information words; removing them sharpens topic and classification signals.

---

### Q10: Which statement about general-purpose models for text analysis is TRUE?
- A) They can be prompted to do key-term extraction, entity recognition, sentiment, and summarization
- B) They can only chat casually
- C) They always return confidence scores per entity
- D) They guarantee identical output per call

**✅ Correct Answer: A**
**Rationale:** LLMs can be prompted into any of these tasks flexibly — the trade-off is probabilistic, unstructured output.

---

### Q11: In pre-processing, what does lemmatization do that simple stemming may not?
- A) Maps words to proper dictionary roots (e.g., 'better' → 'good') rather than just trimming suffixes
- B) Removes punctuation
- C) Counts word frequency
- D) Translates the text

**✅ Correct Answer: A**
**Rationale:** Lemmatization uses vocabulary/morphology to find true base forms; stemming just chops endings.

---

### Q12: Which choice pairs a use case with the RIGHT approach?
- A) Regulated PII redaction → Azure Language; exploratory review analysis → general-purpose model
- B) Regulated PII redaction → chat playground; production pipeline → manual notes
- C) Deterministic pipeline → maximum temperature LLM
- D) Confidence scores → free-form prose

**✅ Correct Answer: A**
**Rationale:** Regulated/deterministic → Azure Language; flexible/exploratory → prompt an LLM.

---

### Q13: Which analysis flow correctly describes semantic similarity search over documents?
- A) Embed documents and query as vectors, then compare vector similarity
- B) Sort documents alphabetically and binary-search
- C) Count commas per paragraph
- D) Hash each file with SHA-256 and compare digests

**✅ Correct Answer: A**
**Rationale:** Semantic search embeds text into vector space; similar meanings yield nearby vectors regardless of exact wording.

---

### Q14: Which statement about combining tasks in ONE LLM call is TRUE?
- A) An LLM prompt can request sentiment, key phrases, and a summary together; dedicated APIs would need separate calls
- B) Dedicated APIs always combine tasks automatically
- C) LLMs may only do one task per day
- D) Combining tasks requires MCP

**✅ Correct Answer: A**
**Rationale:** Multi-task-in-one-call flexibility is a documented advantage of general-purpose models.

---

## Quiz 4A — AI Speech

### Q1: Speech-to-text (STT) is also known as:
- A) Speech recognition
- B) Speech synthesis
- C) Prosody generation
- D) Language modeling

**✅ Correct Answer: A**
**Rationale:** STT = speech recognition: audio input becomes text output. TTS = speech synthesis: text becomes audio.

---

### Q2: What are phonemes?
- A) The smallest units of sound in speech
- B) AI models that generate audio
- C) Artifacts removed during noise clean-up
- D) Musical notation symbols

**✅ Correct Answer: A**
**Rationale:** Phonemes are the smallest sound units of word-parts — the units acoustic models map audio features to.

---

### Q3: Which input sources can speech recognition accept?
- A) Audio files, streams, or a microphone
- B) Only WAV files
- C) Only landline telephones
- D) Text documents

**✅ Correct Answer: A**
**Rationale:** STT input can come from an audio file, an audio stream, or live microphone capture.

---

### Q4: Text-to-speech outputs what?
- A) An audio waveform of spoken speech
- B) A text transcription
- C) A JSON entity list
- D) An image

**✅ Correct Answer: A**
**Rationale:** TTS converts text into an audio waveform — synthesized speech.

---

### Q5: Automatic subtitles for videos are an accessibility use case of:
- A) Speech-to-text
- B) Text-to-speech
- C) Image classification
- D) OCR

**✅ Correct Answer: A**
**Rationale:** Captions/subtitles transcribe spoken audio — a speech recognition (STT) use case.

---

### Q6: A screen reader that voices on-screen text aloud uses:
- A) Text-to-speech
- B) Speech-to-text
- C) Named entity recognition
- D) Semantic segmentation

**✅ Correct Answer: A**
**Rationale:** Screen readers synthesize speech from text — TTS.

---

### Q7: Which Foundry feature lets you try real-time transcription without writing code?
- A) The Foundry portal speech playground
- B) The billing page
- C) Azure CLI
- D) Resource tags

**✅ Correct Answer: A**
**Rationale:** The portal playground lets you experiment with speech-to-text (and text-to-speech voices) interactively.

---

### Q8: What happens during the pre-processing stage of speech recognition?
- A) Feature vectors are extracted from the audio waveform for modeling
- B) Background noise is added to the signal
- C) The audio is converted to a video format
- D) The text is translated

**✅ Correct Answer: A**
**Rationale:** Pre-processing featurizes the signal — intensity at specific frequencies becomes feature vectors. Noise is removed, never added.

---

### Q9: In speech recognition, what does the acoustic model do?
- A) Maps audio features to phonemes
- B) Predicts word sequences
- C) Formats the final text
- D) Captures the analog signal

**✅ Correct Answer: A**
**Rationale:** The acoustic model converts feature vectors into phonemes; the language model then predicts the word sequence.

---

### Q10: In speech recognition, what does the language model contribute?
- A) It predicts the most probable word sequence from the phonemes
- B) It amplifies quiet audio
- C) It selects a synthetic voice
- D) It compresses the waveform

**✅ Correct Answer: A**
**Rationale:** Given candidate phoneme interpretations, the language model picks the likeliest words — 'nice to be here' over 'nights two bee hear'.

---

### Q11: Why is prosody generation important in speech synthesis?
- A) It ensures natural pronunciation and speech cadence
- B) It maximizes output volume
- C) It translates speech for the listener
- D) It encrypts the audio

**✅ Correct Answer: A**
**Rationale:** Prosody adjusts pitch, timbre, and rhythm so synthesized speech sounds natural — not louder or translated.

---

### Q12: Arrange the speech recognition pipeline correctly:
- A) Audio capture → pre-processing → acoustic modeling → language modeling → post-processing
- B) Language modeling → audio capture → acoustic modeling → pre-processing → post-processing
- C) Pre-processing → audio capture → post-processing → acoustic modeling → language modeling
- D) Acoustic modeling → language modeling → audio capture → pre-processing → post-processing

**✅ Correct Answer: A**
**Rationale:** Capture the waveform, extract features, map features to phonemes (acoustic), choose probable words (language), then normalize/format the text.

---

### Q13: Arrange the speech synthesis pipeline correctly:
- A) Source text → normalization → linguistic modeling → prosody generation → waveform encoding
- B) Waveform encoding → prosody → normalization → linguistic modeling → text
- C) Normalization → waveform encoding → prosody → source text → linguistic modeling
- D) Source text → prosody → normalization → waveform → phonemes

**✅ Correct Answer: A**
**Rationale:** Text is normalized, mapped to phonemes (linguistic modeling), given natural prosody, then encoded as an audio waveform.

---

### Q14: Which property selects the synthetic voice in the Speech SDK?
- A) speech_config.speech_synthesis_voice_name
- B) audio_config.filename
- C) recognizer.language_model
- D) speech_config.rate_limit

**✅ Correct Answer: A**
**Rationale:** You assign a voice (e.g., a neural voice name) to speech_synthesis_voice_name on the SpeechConfig.

---

### Q15: What does recognize_once_async().get() return in the STT pattern?
- A) A result object whose .text property holds the transcription
- B) A raw waveform
- C) A list of stop words
- D) The service invoice

**✅ Correct Answer: A**
**Rationale:** The async recognition returns a result; result.text contains the recognized transcript.

---

## Quiz 4B — AI Speech (Round 2)

### Q1: Which pair correctly matches abbreviation to direction?
- A) STT = audio → text; TTS = text → audio
- B) STT = text → audio; TTS = audio → text
- C) Both convert text to audio
- D) Both convert audio to text

**✅ Correct Answer: A**
**Rationale:** Speech-to-text transcribes audio; text-to-speech synthesizes audio from text.

---

### Q2: Meeting and interview transcription is a use case of:
- A) Speech recognition
- B) Speech synthesis
- C) Image generation
- D) Field extraction

**✅ Correct Answer: A**
**Rationale:** Transcription converts spoken audio into text — speech recognition (STT).

---

### Q3: Video-game characters speaking dynamic dialogue lines use:
- A) Text-to-speech
- B) Speech-to-text
- C) OCR
- D) POS tagging

**✅ Correct Answer: A**
**Rationale:** Generating character voices from text is a listed TTS entertainment/media use case.

---

### Q4: Which SDK object actually performs speech-to-text?
- A) SpeechRecognizer
- B) SpeechSynthesizer
- C) AudioConfig
- D) AzureKeyCredential

**✅ Correct Answer: A**
**Rationale:** SpeechRecognizer (built from SpeechConfig + AudioConfig) performs recognition; SpeechSynthesizer performs TTS.

---

### Q5: Which method speaks a string through the synthesizer?
- A) speak_text_async('...').get()
- B) recognize_once_async().get()
- C) detect_language()
- D) responses.create()

**✅ Correct Answer: A**
**Rationale:** SpeechSynthesizer.speak_text_async() synthesizes and plays/writes the audio.

---

### Q6: Speaker diarization in the transcription playground refers to:
- A) Distinguishing which speaker said what
- B) Louder playback
- C) Emoji insertion
- D) Language translation

**✅ Correct Answer: A**
**Rationale:** Diarization separates and labels different speakers in the audio — useful for meeting transcripts.

---

### Q7: A contact-center bot must let callers interrupt ('barge in') mid-answer, like a human agent. Which capability handles this natively?
- A) Voice Live — continuous conversation flow with interruption support
- B) Batch STT
- C) Playground screenshots
- D) AudioConfig file output

**✅ Correct Answer: A**
**Rationale:** Interruption handling in continuous conversation is a core Voice Live feature.

---

### Q8: A university records lectures and wants same-day searchable text plus spoken summaries for visually impaired students. Which capability pair applies?
- A) STT for transcription + TTS for spoken summaries
- B) TTS twice
- C) STT twice
- D) OCR + segmentation

**✅ Correct Answer: A**
**Rationale:** Transcription is speech recognition; reading summaries aloud is speech synthesis — both accessibility use cases.

---

### Q9: Which exam-style statement about STT vs TTS use cases is CORRECT?
- A) Customer-support call transcription is STT; reading chatbot replies aloud is TTS
- B) Both are TTS
- C) Both are STT
- D) Neither involves audio

**✅ Correct Answer: A**
**Rationale:** Transcribing calls converts audio→text (STT); voicing replies converts text→audio (TTS).

---

### Q10: Why do STT systems post-process ('normalize and format') recognized text?
- A) Raw word sequences need punctuation, casing, and formatting to be readable
- B) To re-add background noise
- C) To convert text back to phonemes
- D) To compress the transcript

**✅ Correct Answer: A**
**Rationale:** Post-processing turns the raw predicted word sequence into clean, formatted text.

---

## Quiz 5A — Computer Vision

### Q1: Computer vision fundamentally analyzes and manipulates what kind of values?
- A) Pixels
- B) File names
- C) Timestamps in metadata
- D) Folder paths

**✅ Correct Answer: A**
**Rationale:** Vision works on pixel values — numeric representations of the image itself, not metadata.

---

### Q2: Assigning a single label such as 'banana' to an entire image is called:
- A) Image classification
- B) Object detection
- C) Semantic segmentation
- D) Prosody generation

**✅ Correct Answer: A**
**Rationale:** Classification labels the whole image with one class.

---

### Q3: Which vision task returns a bounding box and class for each object found?
- A) Object detection
- B) Image classification
- C) Contextual analysis
- D) Tokenization

**✅ Correct Answer: A**
**Rationale:** Object detection localizes each object with a box plus its class label.

---

### Q4: Which task classifies every individual pixel in an image?
- A) Semantic segmentation
- B) Image classification
- C) Key-phrase extraction
- D) Language detection

**✅ Correct Answer: A**
**Rationale:** Semantic segmentation gives pixel-level classification — exact object outlines.

---

### Q5: Producing the caption 'a person eating an apple' from a photo is an example of:
- A) Contextual image analysis
- B) Stemming
- C) Speaker diarization
- D) Field mapping

**✅ Correct Answer: A**
**Rationale:** Contextual image analysis describes the scene in natural language.

---

### Q6: A model that can accept both an image and a text question in one prompt is called:
- A) Multimodal
- B) Monolingual
- C) Deterministic
- D) Recursive

**✅ Correct Answer: A**
**Rationale:** Multimodal models understand and work with more than one type of data, such as text and images.

---

### Q7: Which model family generates images from text prompts?
- A) Diffusion models
- B) Decision trees
- C) Regression models
- D) Bag-of-Words

**✅ Correct Answer: A**
**Rationale:** Diffusion models power modern text-to-image generation.

---

### Q8: What is the primary role of filters in a CNN used for image classification?
- A) Extracting numeric features from images for the neural network
- B) Applying cosmetic visual effects
- C) Compressing files for faster upload
- D) Encrypting the image

**✅ Correct Answer: A**
**Rationale:** CNN filters extract feature maps — numeric features — that feed the fully connected layers.

---

### Q9: Which description matches a Vision Transformer (ViT)?
- A) A model that uses attention over image patches to create contextual embeddings
- B) A tool that recolors images
- C) An agent that converts LLMs to vision models
- D) A codec for video compression

**✅ Correct Answer: A**
**Rationale:** ViTs split images into patches, embed them, and apply attention to encode visual relationships.

---

### Q10: How is a diffusion model trained?
- A) By iteratively adding visual noise to labeled images and learning how the noise changes them
- B) By removing pixels until images vanish
- C) By ranking images alphabetically
- D) By transcribing image captions to audio

**✅ Correct Answer: A**
**Rationale:** Training adds noise step-by-step to described images; generation reverses the process from random pixels.

---

### Q11: A retailer needs to know WHERE each product sits on a shelf photo and WHAT each product is. Which task fits exactly?
- A) Object detection
- B) Image classification
- C) Contextual captioning
- D) Language detection

**✅ Correct Answer: A**
**Rationale:** Location (bounding box) + identity (class) per object = object detection. Classification would give one label for the whole photo.

---

### Q12: A medical team needs tumor outlines precise to the pixel on scans. Which task do they need?
- A) Semantic segmentation
- B) Object detection
- C) Image classification
- D) Key-phrase extraction

**✅ Correct Answer: A**
**Rationale:** Pixel-exact boundaries require segmentation; detection only yields rectangular boxes.

---

### Q13: How does image GENERATION work at inference time with a diffusion model?
- A) Start from random pixels and iteratively remove learned noise guided by the description
- B) Copy the closest training image
- C) Ask a CNN to reverse-classify
- D) Sort noise alphabetically

**✅ Correct Answer: A**
**Rationale:** Generation reverses the training process: denoise random pixels toward an image matching the prompt.

---

### Q14: Which statement about ViTs vs CNNs is TRUE?
- A) ViTs process image patches with attention; CNNs slide filters to build feature maps
- B) CNNs use attention; ViTs use filters
- C) Both are identical internally
- D) ViTs cannot do classification

**✅ Correct Answer: A**
**Rationale:** The architectures differ: convolutional filters vs patch embeddings + attention.

---

## Quiz 5B — Computer Vision (Round 2)

### Q1: Which vision task gives the LEAST granular output?
- A) Image classification (one label per image)
- B) Object detection
- C) Semantic segmentation
- D) They are equally granular

**✅ Correct Answer: A**
**Rationale:** Classification labels the whole image; detection localizes objects; segmentation labels every pixel.

---

### Q2: Detecting whether factory workers in CCTV footage wear helmets, and where they are, needs:
- A) Object detection
- B) Sentiment analysis
- C) Speech synthesis
- D) TF-IDF

**✅ Correct Answer: A**
**Rationale:** Locating and classifying people/helmets in frames is object detection.

---

### Q3: A model producing an image from the prompt 'a lighthouse at sunset' is performing:
- A) Image generation
- B) Image classification
- C) OCR
- D) Summarization

**✅ Correct Answer: A**
**Rationale:** Text-to-image generation creates novel images from descriptions.

---

### Q4: Which two data types does a typical multimodal vision prompt combine?
- A) Text and image
- B) Audio and SQL
- C) CSV and XML
- D) Video and firmware

**✅ Correct Answer: A**
**Rationale:** Image-to-text inferencing combines an input_text part with an input_image part.

---

### Q5: What does 'base64-encoded' mean for an image in an API call?
- A) The binary image bytes are represented as text so they can travel inside JSON
- B) The image is reduced to 64 pixels
- C) The image is encrypted
- D) The image is split into 64 tiles

**✅ Correct Answer: A**
**Rationale:** Base64 turns binary data into text characters — JSON-safe transport for the image bytes.

---

### Q6: Which is an example of contextual image analysis output?
- A) 'Two children playing football in a park'
- B) [0.98, 0.01, 0.01]
- C) A bounding box list
- D) A pixel mask

**✅ Correct Answer: A**
**Rationale:** Contextual analysis yields a natural-language scene description.

---

### Q7: An autonomous drone must distinguish road, grass, and water for EVERY point in view to plan landing. Which task and why?
- A) Semantic segmentation — pixel-level class map of the scene
- B) Classification — one label suffices
- C) Detection — boxes are enough
- D) Captioning — text description is enough

**✅ Correct Answer: A**
**Rationale:** Safe landing requires knowing the class of every pixel — segmentation, not boxes or single labels.

---

### Q8: Why can't a plain image CLASSIFIER count the apples in a crate photo?
- A) It outputs one label for the whole image; counting needs per-object localization (detection)
- B) Apples cannot be classified
- C) Classifiers only work on video
- D) Counting requires audio

**✅ Correct Answer: A**
**Rationale:** Counting requires finding each instance — object detection; classification collapses the image to one label.

---

### Q9: Which capability list belongs to MULTIMODAL models (vs single-modality)?
- A) Answering questions about an uploaded photo, captioning scenes, reasoning over image + text together
- B) Only transcribing audio
- C) Only tokenizing text
- D) Only compressing files

**✅ Correct Answer: A**
**Rationale:** Multimodal models reason across data types — image+text prompts, captions, visual Q&A.

---

### Q10: Which statement about image generation randomness is TRUE?
- A) The same prompt can yield different images because generation starts from random noise
- B) The same prompt always yields the identical image
- C) Randomness comes from the file name
- D) Only videos are random

**✅ Correct Answer: A**
**Rationale:** Diffusion starts from random pixels, so each run of the same prompt can produce a different valid image.

---

## Quiz 6A — Information Extraction

### Q1: Which statement accurately defines AI information extraction?
- A) Analyzing unstructured content to identify and extract relevant fields and values
- B) Running SQL queries against a database
- C) Copying files from cloud storage to a laptop
- D) Compressing PDF files

**✅ Correct Answer: A**
**Rationale:** Information extraction converts unstructured digital content — documents, images, audio, video — into useful structured data.

---

### Q2: OCR stands for:
- A) Optical character recognition
- B) Online content retrieval
- C) Open conversion routine
- D) Operational cache register

**✅ Correct Answer: A**
**Rationale:** Optical character recognition converts images of text into machine-readable text data.

---

### Q3: Which content types can information extraction process?
- A) Documents, receipts, invoices, images, audio, and video
- B) Only spreadsheets
- C) Only plain-text files
- D) Only web pages

**✅ Correct Answer: A**
**Rationale:** Extraction spans documents, emails, business cards, receipts, invoices, contracts, images, audio recordings, and video.

---

### Q4: Which Foundry service specializes in extracting structured data from documents and media?
- A) Azure Content Understanding in Foundry Tools
- B) Azure DNS
- C) Azure Load Balancer
- D) Azure Backup

**✅ Correct Answer: A**
**Rationale:** Azure Content Understanding is Foundry's information-extraction service with predefined and custom analyzers.

---

### Q5: In Content Understanding, what is an analyzer?
- A) The definition of how content is processed and what structured data is returned
- B) A person who reviews documents
- C) A GPU monitoring tool
- D) A file-compression utility

**✅ Correct Answer: A**
**Rationale:** Analyzers define processing behavior and the output schema — predefined for common documents or custom from samples.

---

### Q6: In what format does the Content Understanding REST API return results?
- A) JSON
- B) MP3
- C) BMP
- D) ZIP

**✅ Correct Answer: A**
**Rationale:** Analyzer results are retrieved as JSON via the REST API.

---

### Q7: Order the OCR pipeline correctly:
- A) Image acquisition → pre-processing → text region detection → character recognition → output generation
- B) Character recognition → acquisition → detection → output → pre-processing
- C) Output → detection → acquisition → recognition → enhancement
- D) Detection → output → acquisition → enhancement → recognition

**✅ Correct Answer: A**
**Rationale:** Acquire the image, enhance it, find text regions, recognize/classify characters, then produce post-processed output.

---

### Q8: After OCR, which process attaches recognized values to meaningful business fields?
- A) Field extraction and mapping
- B) Prosody generation
- C) Tokenization
- D) Stemming

**✅ Correct Answer: A**
**Rationale:** Field extraction/mapping detects candidate values and associates them with schema fields.

---

### Q9: What does data normalization do in the extraction pipeline?
- A) Standardizes formats — e.g., $20 → 20.00 and 01/01/2025 → 2025-01-01
- B) Deletes all numbers
- C) Adds random noise
- D) Translates the document

**✅ Correct Answer: A**
**Rationale:** Normalization standardizes extracted values so downstream systems receive consistent formats.

---

### Q10: How does generative AI enhance field mapping?
- A) Semantic language models match extracted values to data fields accurately, replacing hand-coded rules per document type
- B) It generates new invoices from scratch
- C) It photocopies documents faster
- D) It removes the need for OCR input

**✅ Correct Answer: A**
**Rationale:** Semantic understanding lets the mapper handle layout variations without manually coded rules for each document type.

---

### Q11: Why do analyzers attach a CONFIDENCE score to each extracted field?
- A) So downstream processes can route low-confidence values to human review
- B) To rank vendors
- C) To measure GPU heat
- D) Scores are decorative

**✅ Correct Answer: A**
**Rationale:** Confidence enables human-in-the-loop workflows — auto-accept high confidence, review low confidence.

---

### Q12: Which requirement clearly needs a CUSTOM analyzer rather than a predefined one?
- A) Extracting fields unique to your company's proprietary inspection form
- B) Reading a standard sales invoice
- C) Reading a typical retail receipt
- D) Post-call transcript summary

**✅ Correct Answer: A**
**Rationale:** Proprietary layouts/fields aren't covered by predefined analyzers — define a custom schema from samples.

---

### Q13: What is the correct division of labor: OCR vs analyzer vs business system?
- A) OCR reads text; the analyzer structures it against a schema; the business system consumes the JSON
- B) The analyzer reads pixels; OCR does schemas; JSON prints invoices
- C) The business system does OCR
- D) All three are the same component

**✅ Correct Answer: A**
**Rationale:** Reading, structuring, and consuming are distinct stages — OCR → analyzer schema mapping → integration.

---

## Quiz 6B — Information Extraction (Round 2)

### Q1: Information extraction is best summarized as converting digital content into:
- A) Useful, structured data
- B) Compressed archives
- C) Encrypted blobs
- D) Printed booklets

**✅ Correct Answer: A**
**Rationale:** The goal is turning unstructured content (documents, media) into structured, actionable data.

---

### Q2: What does OCR produce from a photo of a printed page?
- A) Machine-readable text
- B) A higher-resolution photo
- C) An audio narration
- D) A vector logo

**✅ Correct Answer: A**
**Rationale:** OCR converts images of text into machine-readable text data.

---

### Q3: Predefined analyzers exist for which common items?
- A) Invoices, receipts, and contracts
- B) Firewall rules
- C) DNS zones
- D) CSS stylesheets

**✅ Correct Answer: A**
**Rationale:** Content Understanding ships predefined analyzers for common documents and forms.

---

### Q4: Results from an analyzer are retrieved using which interface?
- A) The REST API (JSON results)
- B) A COM port
- C) A USB cable
- D) A fax gateway

**✅ Correct Answer: A**
**Rationale:** You call the REST API (or SDK wrapper) and receive JSON results.

---

### Q5: Transcribing and summarizing a recorded video call is handled by:
- A) An audio/video analyzer in Content Understanding
- B) A CNN classifier
- C) A stop-word filter
- D) A resource lock

**✅ Correct Answer: A**
**Rationale:** Video call transcription and summary is a listed audio/video analyzer scenario.

---

### Q6: The last stage of field extraction feeds data into:
- A) Business processes and systems
- B) The GPU fan
- C) The DNS resolver
- D) The image sensor

**✅ Correct Answer: A**
**Rationale:** Extraction ends with integration — structured values flowing into business systems.

---

### Q7: Field DETECTION differs from field MAPPING how?
- A) Detection finds candidate values; mapping associates each value with the right schema field
- B) Detection prints; mapping scans
- C) They are identical
- D) Mapping happens before OCR

**✅ Correct Answer: A**
**Rationale:** First candidates are identified (dates, totals, names), then each is bound to its schema field.

---

### Q8: Which scenario is NOT information extraction?
- A) Generating a fictional invoice image from a text prompt
- B) Pulling PO numbers from supplier PDFs
- C) Summarizing topics from a recorded call
- D) Reading fields from ID cards

**✅ Correct Answer: A**
**Rationale:** Creating new content is generative AI. Extraction pulls structured data OUT of existing content.

---

### Q9: Why does generative-AI-based field matching generalize better than rule-based matching?
- A) Semantic models understand that 'Amt Due', 'Total Payable' and 'Balance' can all mean the invoice total
- B) It memorizes every layout on Earth
- C) Rules are faster so they generalize worse
- D) It doesn't — rules always win

**✅ Correct Answer: A**
**Rationale:** Semantic equivalence across varied labels/layouts is what language models capture and rules miss.

---

### Q10: Which statement about the relationship between information extraction and NLP is MOST accurate?
- A) Extraction often uses NLP techniques (like NER) on recognized text to identify field values
- B) They are unrelated workloads
- C) NLP replaces OCR
- D) Extraction only works on audio

**✅ Correct Answer: A**
**Rationale:** After OCR, entity recognition and other NLP techniques help identify and classify candidate values.

---

## 🎯 Final Mock Exam 1 — AI-901 (Full Syllabus)

### Q1: Which option correctly describes the two AI-901 skill areas and their weights?
- A) Identify AI concepts and capabilities (~40%); Implement AI solutions with Microsoft Foundry (~60%)
- B) Networking (~50%); Databases (~50%)
- C) Only responsible AI is examined
- D) Coding in C# (~90%); theory (~10%)

**✅ Correct Answer: A**
**Rationale:** The exam measures AI concepts/capabilities at roughly 40% and Foundry implementation at roughly 60%.

---

### Q2: Generative AI is best described as:
- A) Using a language model to create original content in response to a prompt
- B) A retrieval system for stored answers
- C) A replacement for all databases
- D) An old technique superseded by machine learning

**✅ Correct Answer: A**
**Rationale:** Generative AI creates original content — text, images, code — from prompts via language models.

---

### Q3: Within a tenant, what does an Azure subscription provide?
- A) A billing boundary
- B) A security boundary
- C) A DNS namespace
- D) A GPU cluster

**✅ Correct Answer: A**
**Rationale:** Subscriptions are billing boundaries; the tenant is the security boundary.

---

### Q4: Which principle of responsible AI concerns making an AI system's purpose and limitations understandable?
- A) Transparency
- B) Fairness
- C) Privacy & security
- D) Inclusiveness

**✅ Correct Answer: A**
**Rationale:** Transparency = users can understand what the system does, how it behaves, and its limits.

---

### Q5: Breaking text into words or word-parts for analysis is called:
- A) Tokenization
- B) Diarization
- C) Vectorization of pixels
- D) Prosody

**✅ Correct Answer: A**
**Rationale:** Tokenization splits text into analyzable units (tokens).

---

### Q6: Converting text into an audio waveform of speech is:
- A) Speech synthesis (TTS)
- B) Speech recognition (STT)
- C) OCR
- D) NER

**✅ Correct Answer: A**
**Rationale:** TTS synthesizes speech from text; STT does the reverse.

---

### Q7: Which vision task outputs bounding boxes with class labels?
- A) Object detection
- B) Image classification
- C) Semantic segmentation
- D) Summarization

**✅ Correct Answer: A**
**Rationale:** Object detection localizes each object with a box and label.

---

### Q8: OCR converts:
- A) Images of text into machine-readable text
- B) Text into images
- C) Audio into text
- D) JSON into XML

**✅ Correct Answer: A**
**Rationale:** Optical character recognition reads text out of images/documents.

---

### Q9: In a Foundry project, models, agents, tools and ______ are the four asset types.
- A) Knowledge
- B) Firewalls
- C) Queues
- D) Certificates

**✅ Correct Answer: A**
**Rationale:** Knowledge manages the data sources that ground agents.

---

### Q10: An endpoint in Foundry is:
- A) An HTTPS address applications call to reach a deployed model or service
- B) A physical network port
- C) A storage account
- D) The model's training data

**✅ Correct Answer: A**
**Rationale:** Endpoints are the HTTP entry points for models and services, authenticated by key or Entra ID token.

---

### Q11: A car-safety model is stress-tested across weather, lighting and sensor-failure conditions before release. Which responsible AI principle?
- A) Reliability & safety
- B) Inclusiveness
- C) Transparency
- D) Accountability

**✅ Correct Answer: A**
**Rationale:** Rigorous testing to ensure safe, correct operation within defined limits is reliability & safety.

---

### Q12: Which THREE things configure generative model behavior at request time?
- A) Instructions (system prompt), user input, and parameters such as temperature
- B) Region, VM size, disk type
- C) Tenant, subscription, resource group
- D) Filters, feature maps, flattening

**✅ Correct Answer: A**
**Rationale:** System prompt, user prompt, and parameters are the three behavior levers.

---

### Q13: Which statistical technique scores a term by frequency in one document relative to the whole collection?
- A) TF-IDF
- B) Bag-of-Words
- C) TextRank
- D) Word2Vec

**✅ Correct Answer: A**
**Rationale:** TF-IDF balances local term frequency against corpus-wide document frequency.

---

### Q14: In speech recognition, phonemes are produced by the ______ model and turned into probable word sequences by the ______ model.
- A) acoustic; language
- B) language; acoustic
- C) linguistic; prosody
- D) waveform; encoder

**✅ Correct Answer: A**
**Rationale:** Acoustic modeling maps audio features to phonemes; language modeling selects the probable words.

---

### Q15: What does an analyzer do in Azure Content Understanding?
- A) Defines how content is processed and what structured data is returned
- B) Stores extracted data in a database
- C) Converts JSON to prose
- D) Encrypts documents

**✅ Correct Answer: A**
**Rationale:** Analyzers (predefined or custom) define processing behavior and the output schema.

---

### Q16: Which authentication options secure a Foundry endpoint call?
- A) An API key or a Microsoft Entra ID token
- B) A CAPTCHA
- C) An SMS to the admin
- D) No authentication is supported

**✅ Correct Answer: A**
**Rationale:** Endpoints accept an authorization key or an Entra ID token.

---

### Q17: Azure Language differs from prompting a general-purpose model because it provides:
- A) Deterministic, structured output with confidence scores
- B) More creative responses
- C) Combined multi-task natural-language replies
- D) Image analysis

**✅ Correct Answer: A**
**Rationale:** Azure Language is the deterministic, production-oriented route; LLM prompting is flexible but probabilistic.

---

### Q18: A hiring tool underrates candidates who attended evening programs, which correlates with socioeconomic status. Fixing the training data addresses which principle, and why?
- A) Fairness — the system must treat all groups equitably and avoid proxy bias
- B) Transparency — the model must be documented
- C) Privacy — evening data is private
- D) Reliability — the servers must stay up

**✅ Correct Answer: A**
**Rationale:** Bias via correlated proxies is a fairness failure; equitable treatment requires removing such bias.

---

### Q19: Which Azure structure should a company use to give its AI experiments a separate invoice from production, under one identity system?
- A) Same tenant, two subscriptions
- B) Two tenants
- C) One subscription, two resource groups
- D) One resource group, two regions

**✅ Correct Answer: A**
**Rationale:** One tenant preserves shared identity (Entra ID); separate subscriptions split billing.

---

### Q20: Match the tool need: an agent must (1) search uploaded policy files and (2) create calendar events. Which agent tool categories?
- A) (1) knowledge tool; (2) action tool
- B) (1) action tool; (2) knowledge tool
- C) Both are models
- D) Both are guardrails

**✅ Correct Answer: A**
**Rationale:** Knowledge tools retrieve grounding information; action tools change external state.

---

### Q21: An exam scenario requires the SAME summary sentence count from every article and traceable sentence origins. Which summarization style fits?
- A) Extractive summarization (e.g., TextRank) selecting the top-n sentences
- B) Freeform LLM abstractive summarization
- C) Speech diarization
- D) Bag-of-Words

**✅ Correct Answer: A**
**Rationale:** Extractive methods pick n existing sentences — countable and traceable; abstractive output varies.

---

### Q22: Which design keeps a customer-facing model from discussing competitors, regardless of user prompts?
- A) Behavior rules in the system instructions plus deployment guardrails
- B) Higher temperature
- C) A bigger context window
- D) Renaming the deployment

**✅ Correct Answer: A**
**Rationale:** Scope restrictions belong in instructions; guardrails add policy-level enforcement.

---

### Q23: Which statement about MCP (Model Context Protocol) in Foundry is TRUE?
- A) MCP servers expose service capabilities (like Azure Language or Speech) to agents as callable tools
- B) MCP replaces the agent's model
- C) MCP is a video codec
- D) MCP is only for image generation

**✅ Correct Answer: A**
**Rationale:** MCP is the tool-integration protocol connecting agents to Foundry Tools services.

---

## 🎯 Final Mock Exam 2 — AI-901 (Full Syllabus)

### Q1: Which list contains ONLY common AI workloads?
- A) Generative AI & agents, text & language, speech, vision, information extraction
- B) DNS, DHCP, TCP/IP, HTTP
- C) Backup, patching, monitoring
- D) Spreadsheets, word processing, e-mail

**✅ Correct Answer: A**
**Rationale:** The five workloads: generative AI & agents, text & language, computer speech, computer vision, information extraction.

---

### Q2: Users and services in an Azure tenant are authenticated by:
- A) Microsoft Entra ID
- B) Azure CDN
- C) Azure Files
- D) Windows Update

**✅ Correct Answer: A**
**Rationale:** Microsoft Entra ID is the identity service at the tenant level.

---

### Q3: An agent's 'instructions' define its:
- A) Behavior and scope
- B) GPU allocation
- C) Billing account
- D) IP address

**✅ Correct Answer: A**
**Rationale:** Instructions are the agent's job description — behavior, scope, and tone.

---

### Q4: Which responsible AI principle says AI should empower everyone, including people with disabilities?
- A) Inclusiveness
- B) Fairness
- C) Accountability
- D) Reliability & safety

**✅ Correct Answer: A**
**Rationale:** Inclusiveness covers benefiting all people, expressly including those with disabilities.

---

### Q5: Vector representations of tokens that capture semantic meaning are called:
- A) Embeddings
- B) Checksums
- C) Indexes
- D) Cookies

**✅ Correct Answer: A**
**Rationale:** Embeddings are the semantic vectors at the heart of language models.

---

### Q6: Sentiment analysis is a form of:
- A) Text classification
- B) Speech synthesis
- C) Object detection
- D) Field mapping

**✅ Correct Answer: A**
**Rationale:** Sentiment analysis classifies text by tone — a text-classification task.

---

### Q7: The smallest unit of sound in speech is a:
- A) Phoneme
- B) Pixel
- C) Token
- D) Byte

**✅ Correct Answer: A**
**Rationale:** Phonemes are the smallest units of sound — the currency of acoustic and linguistic modeling.

---

### Q8: Which model type generates images from random noise guided by a text description?
- A) Diffusion model
- B) Decision tree
- C) Naïve Bayes
- D) TF-IDF

**✅ Correct Answer: A**
**Rationale:** Diffusion models denoise random pixels toward the prompt.

---

### Q9: A model that accepts text AND images in the same prompt is:
- A) Multimodal
- B) Multithreaded
- C) Multitenant
- D) Multicast

**✅ Correct Answer: A**
**Rationale:** Multimodal models work with more than one data type.

---

### Q10: Content Understanding analyzers come in which two kinds?
- A) Predefined and custom
- B) Public and private
- C) Fast and slow
- D) Local and remote

**✅ Correct Answer: A**
**Rationale:** Predefined analyzers cover common documents; custom analyzers use your own schema from samples.

---

### Q11: Which portal surface lets you interactively chat with a deployed model?
- A) The model playground
- B) The billing blade
- C) Azure DNS zones
- D) The activity log

**✅ Correct Answer: A**
**Rationale:** The playground is the interactive test surface for deployed models (and agents).

---

### Q12: A council must show residents which factors its benefits-eligibility AI considers. Which principle is served?
- A) Transparency
- B) Reliability & safety
- C) Privacy & security
- D) Fairness

**✅ Correct Answer: A**
**Rationale:** Explaining what the system considers and how it behaves is transparency.

---

### Q13: What is the role of a system prompt (instructions)?
- A) To specify context and guidelines for how the model responds
- B) To store the API key
- C) To set the rate limit
- D) To choose the Azure region

**✅ Correct Answer: A**
**Rationale:** Instructions guide response behavior — tone, scope, format, refusals.

---

### Q14: client.recognize_pii_entities(docs) returns which trio?
- A) Redacted text, entity list with categories, confidence per entity
- B) A translation, a summary, a poem
- C) Language name, ISO code, confidence
- D) Bounding boxes, masks, captions

**✅ Correct Answer: A**
**Rationale:** PII detection yields redaction plus categorized entities with confidence scores.

---

### Q15: Which pipeline stage of speech recognition produces the FINAL formatted transcript?
- A) Post-processing
- B) Audio capture
- C) Acoustic modeling
- D) Feature extraction

**✅ Correct Answer: A**
**Rationale:** Post-processing normalizes and formats the recognized word sequence into clean text.

---

### Q16: Which is the correct high-level flow for an app calling a Foundry model with the OpenAI library?
- A) Create client (endpoint+key) → responses.create(model=deployment, input=prompt) → read output
- B) Upload weights → compile → run locally
- C) Open a socket → send raw text → parse HTML
- D) Email the prompt → await reply

**✅ Correct Answer: A**
**Rationale:** Client construction then responses.create is the standard consumption pattern.

---

### Q17: Foundry agents gain access to Azure Language capabilities through:
- A) The Azure Language MCP server connected as a tool
- B) A CSV import
- C) The billing API
- D) Editing the model weights

**✅ Correct Answer: A**
**Rationale:** The MCP server exposes Language functions to agents as tools, with approval options.

---

### Q18: A triage model for loan APPROVALS also logs who overrode each AI decision and why. Which TWO principles does the logging support?
- A) Accountability and transparency
- B) Fairness and inclusiveness
- C) Privacy and reliability
- D) Inclusiveness and privacy

**✅ Correct Answer: A**
**Rationale:** Override logs keep humans answerable (accountability) and make system behavior traceable/understandable (transparency).

---

### Q19: Which architecture statement is TRUE of both LLMs and Vision Transformers?
- A) Both use attention over embedded units (tokens or image patches) to encode contextual relationships
- B) Both use convolution filters
- C) Both output audio
- D) Neither can be deployed in Foundry

**✅ Correct Answer: A**
**Rationale:** ViTs adapt the transformer's attention mechanism from language tokens to image patches.

---

### Q20: Rank these for making an LLM's answers use YOUR company's leave policy: (best practice first)
- A) Attach the policy as agent knowledge (file search) so answers are grounded
- B) Hope the base model memorized your policy
- C) Raise max tokens
- D) Lower the rate limit

**✅ Correct Answer: A**
**Rationale:** Grounding via knowledge tools is the correct mechanism; base models don't know private policies.

---

### Q21: Why does TF-IDF assign a LOW score to the word 'the' in every document?
- A) Its document frequency across the corpus is maximal, so the inverse-document-frequency factor approaches zero
- B) It is too short to count
- C) Stop words are encrypted
- D) TF ignores articles

**✅ Correct Answer: A**
**Rationale:** Words appearing in virtually all documents get near-zero IDF, wiping out their weight.

---

### Q22: A meeting-transcription feature must label WHO spoke each sentence. Which capability must be enabled?
- A) Speaker diarization
- B) Language identification
- C) Prosody generation
- D) Guardrails

**✅ Correct Answer: A**
**Rationale:** Diarization attributes transcript segments to distinct speakers.

---

### Q23: A farm robot must treat weeds but spare crops, requiring per-pixel plant identification in real time. Which task and typical model?
- A) Semantic segmentation, e.g., built on CNN/ViT-based vision models
- B) Whole-image classification with a BoW model
- C) OCR with an invoice analyzer
- D) TTS with neural voices

**✅ Correct Answer: A**
**Rationale:** Pixel-level discrimination is segmentation, implemented with modern vision architectures.

---

### Q24: Which claim about agents versus plain model calls is FALSE?
- A) Agents cannot use more than one tool
- B) Agents pair a model with instructions and tools
- C) Plain model calls suit simple one-shot completions
- D) Agents can collaborate in multi-agent workflows

**✅ Correct Answer: A**
**Rationale:** Agents may use multiple tools (knowledge + actions). The other statements are true.

---

### Q25: Which statement about Foundry endpoints and REST is CORRECT?
- A) Requests carry function details, headers, and JSON data; responses return headers and JSON results
- B) Requests use XML; responses use CSV
- C) Endpoints only accept binary protobuf
- D) Responses omit headers entirely

**✅ Correct Answer: A**
**Rationale:** Foundry endpoints expose REST interfaces exchanging JSON payloads with metadata headers.

---

### Q26: Final synthesis: a startup will (1) chat over docs, (2) transcribe calls, (3) extract invoice fields, (4) generate product images. Map each to Foundry capabilities:
- A) (1) agent with knowledge tools; (2) Azure Speech STT; (3) Content Understanding analyzer; (4) text-to-image model deployment
- B) (1) sora; (2) gpt-image; (3) Voice Live; (4) TextAnalytics
- C) (1) OCR; (2) diffusion; (3) TTS; (4) NER
- D) (1) guardrails; (2) rate limits; (3) versions; (4) deployment types

**✅ Correct Answer: A**
**Rationale:** Doc chat = agent + knowledge; transcription = Speech; invoice fields = Content Understanding; image generation = text-to-image models.

---

<div align='right'>

<a href="https://github.com/infinity-decoder/" style="display:none;">infinity-decoder</a>
[​](https://github.com/infinity-decoder/)

[🏠 Back to Home](README.md) | [⬆️ Back to Top](#top)

</div>

---

<a href="https://github.com/infinity-decoder/" style="display:none;">infinity-decoder</a>
[​](https://github.com/infinity-decoder/)

# Complete Extracted Quiz & Mock Test Question Banks (450 MCQs from JS)

## Quiz 1A — AI Concepts & Getting Started with AI in Azure

### Q1: Which statement best describes artificial intelligence?
- A) Software that imitates human capabilities such as prediction, decision-making, and language understanding
- B) Any program that stores large amounts of data in the cloud
- C) Hardware designed to run spreadsheets faster
- D) A database technology for structured records

**✅ Correct Answer: A**
**Rationale:** AI is software that imitates human capabilities — predicting outcomes, evaluating content and making decisions, understanding language, interpreting visual input, and extracting information.

---

### Q2: Which technology underpins every AI workload, conceptually expressed as f(x) = y?
- A) Blockchain
- B) Machine learning
- C) Virtualization
- D) Edge computing

**✅ Correct Answer: B**
**Rationale:** Machine learning — models trained on historic data that map an input (x) to an output (y) — is the foundation on which all AI workloads are built.

---

### Q3: An application that can perform tasks on behalf of a user is called:
- A) A data pipeline
- B) A REST API
- C) An AI agent
- D) A virtual machine

**✅ Correct Answer: C**
**Rationale:** An AI agent is an AI application that performs tasks on behalf of a user — it is software, not a person who builds or uses AI.

---

### Q4: In Azure, which construct defines the organizational security boundary?
- A) Resource group
- B) Subscription
- C) Tenant
- D) Region

**✅ Correct Answer: C**
**Rationale:** The tenant is the security boundary of an organization; users and services in it are identified and authenticated using Microsoft Entra ID.

---

### Q5: Which Azure construct provides the billing boundary?
- A) Tenant
- B) Subscription
- C) Resource group
- D) Management certificate

**✅ Correct Answer: B**
**Rationale:** Within a tenant, subscriptions define billing boundaries. Resource groups exist for organization and management, not billing.

---

### Q6: Which service authenticates users and services within an Azure tenant?
- A) Azure DNS
- B) Microsoft Entra ID
- C) Azure Monitor
- D) Azure Key Vault

**✅ Correct Answer: B**
**Rationale:** Microsoft Entra ID is Azure's identity service — it identifies and authenticates users and services within a tenant.

---

### Q7: What is Microsoft Foundry?
- A) A version-control system for AI code
- B) A unified Azure platform for building AI apps and agents
- C) A Windows desktop application for editing images
- D) A subscription tier of Microsoft 365

**✅ Correct Answer: B**
**Rationale:** Microsoft Foundry is a unified platform — a comprehensive set of Azure services — for building AI apps and agents.

---

### Q8: In a Foundry project, which asset type is used to choose and deploy AI models from a catalog?
- A) Knowledge
- B) Tools
- C) Models
- D) Agents

**✅ Correct Answer: C**
**Rationale:** The Models asset lets you browse the extensive model catalog and deploy models. Agents use models; tools and knowledge extend agents.

---

### Q9: A company publishes documentation explaining what data its AI hiring system uses and how it reaches decisions. Which responsible AI principle is being applied?
- A) Inclusiveness
- B) Transparency
- C) Reliability & safety
- D) Privacy & security

**✅ Correct Answer: B**
**Rationale:** Transparency means making an AI system's purpose, behavior, and limitations understandable to the people who use it.

---

### Q10: A medical-prediction model must be rigorously tested to confirm it operates correctly under all expected conditions before release. Which principle does this address?
- A) Fairness
- B) Accountability
- C) Reliability & safety
- D) Transparency

**✅ Correct Answer: C**
**Rationale:** Reliability & safety requires AI systems to perform dependably within defined operational limits and to be tested rigorously.

---

### Q11: Which sequence correctly orders Azure constructs from outermost to innermost?
- A) Subscription → Tenant → Resource → Resource group
- B) Tenant → Subscription → Resource group → Resource
- C) Resource group → Subscription → Tenant → Resource
- D) Tenant → Resource group → Subscription → Resource

**✅ Correct Answer: B**
**Rationale:** A tenant (security boundary) contains subscriptions (billing boundaries), which contain resource groups, which contain resources.

---

### Q12: What is the role of a Foundry project?
- A) It replaces the Azure subscription for billing purposes
- B) It provides an isolated work environment for app and agent development
- C) It stores API keys for all Azure services in the tenant
- D) It hosts the physical GPUs used by models

**✅ Correct Answer: B**
**Rationale:** Foundry projects are isolated work environments where you develop apps and agents, working with models, agents, tools, and knowledge.

---

### Q13: Which TWO items together let an application call a deployed Foundry model? (choose the single option that lists both)
- A) A storage account and a virtual network
- B) An endpoint URL and an API key (or Entra ID token)
- C) A resource group and a subscription ID
- D) A model version number and a region name

**✅ Correct Answer: B**
**Rationale:** Applications call the endpoint (an HTTPS address) and authenticate with an API key or a Microsoft Entra ID token.

---

### Q14: What data format do Foundry endpoint requests and responses use in their bodies?
- A) XML
- B) CSV
- C) JSON
- D) YAML

**✅ Correct Answer: C**
**Rationale:** Requests carry function details and data as JSON, and responses return operation results as JSON, along with metadata headers.

---

### Q15: Why do developers typically use SDKs rather than calling Foundry REST APIs directly?
- A) SDKs bypass authentication requirements
- B) SDKs abstract the REST APIs into language-specific libraries that are easier to code against
- C) REST APIs are deprecated in Azure
- D) SDKs run models locally without an endpoint

**✅ Correct Answer: B**
**Rationale:** REST APIs are typically abstracted by language-specific SDKs (Python, C#, …) that simplify coding. Auth is still required and models still run in the cloud.

---

### Q16: A bank discovers its loan-approval model recommends rejections far more often for one postal region with a specific demographic profile, despite similar financial data. Which responsible AI principle is MOST directly violated?
- A) Transparency
- B) Fairness
- C) Inclusiveness
- D) Accountability

**✅ Correct Answer: B**
**Rationale:** Fairness requires AI to treat all people equitably and avoid bias linked to demographic characteristics. Transparency concerns explainability, not equitable outcomes.

---

### Q17: A voice assistant is updated so users who are deaf can receive the same information through real-time captions. Which principle does this BEST demonstrate?
- A) Inclusiveness
- B) Reliability & safety
- C) Fairness
- D) Privacy & security

**✅ Correct Answer: A**
**Rationale:** Inclusiveness means AI should empower everyone, including people with disabilities. Fairness is about equitable treatment across groups in decisions, which is different from designing for accessibility.

---

### Q18: An AI vendor establishes a governance board with authority to override the system's automated decisions and answer for its outcomes. Which principle is applied?
- A) Transparency
- B) Reliability & safety
- C) Accountability
- D) Fairness

**✅ Correct Answer: C**
**Rationale:** Accountability keeps humans answerable for AI systems — governance structures and human override authority are its hallmark.

---

### Q19: A company trains a model using customer purchase histories. To comply with responsible AI, personal details must be protected both during training AND when the deployed model handles requests. Which principle covers this end-to-end obligation?
- A) Privacy & security
- B) Transparency
- C) Inclusiveness
- D) Reliability & safety

**✅ Correct Answer: A**
**Rationale:** Privacy & security applies to the data used for training and to data processed at inference time — protection must span the whole lifecycle.

---

### Q20: Which statement about the relationship between Microsoft Foundry and Azure is accurate?
- A) Foundry replaces Azure services entirely as a standalone AI cloud
- B) Foundry runs independently and needs no Azure resources
- C) Foundry is built on Azure and relies on Azure compute, networking, identity, and security
- D) Foundry is an on-premises product that synchronizes with Azure

**✅ Correct Answer: C**
**Rationale:** Foundry is built on top of Azure and uses Azure resources — compute, networking, identity, security — to host and operate AI applications.

---

### Q21: A developer says: 'The endpoint stores our secrets, and the key controls how much data the endpoint may return.' What is wrong with this statement?
- A) Nothing — it is accurate
- B) Endpoints are URLs for calling deployed models, and keys authenticate requests; neither stores secrets nor limits data volume
- C) Keys actually store the model responses
- D) Endpoints authenticate requests while keys address the model

**✅ Correct Answer: B**
**Rationale:** The endpoint is simply the HTTPS address of the deployed model; the key (or Entra ID token) proves the caller is authorized. Secrets storage is a different concern (e.g., Key Vault).

---

### Q22: Your team needs separate development and production AI workspaces whose costs must appear on different invoices. At which Azure level should the environments be separated?
- A) Two resource groups in one subscription
- B) Two subscriptions
- C) Two regions in one resource group
- D) Two tenants sharing one subscription

**✅ Correct Answer: B**
**Rationale:** Subscriptions are the billing boundary — separate invoices require separate subscriptions. Resource groups organize resources but share their subscription's bill.

---

### Q23: Within a Foundry project, an agent must look up company policy documents before answering staff questions. Which project asset type manages the agent's access to those data sources?
- A) Models
- B) Knowledge
- C) Tools (actions)
- D) Deployments

**✅ Correct Answer: B**
**Rationale:** Knowledge manages data-source access for agents so they have the information they need. Actions automate tasks; models provide reasoning.

---

### Q24: Which capability list belongs to AI as defined in this course?
- A) Predicting outcomes, interpreting visual input, extracting information from sources
- B) Compiling source code, defragmenting disks, routing network packets
- C) Rendering 3D graphics, mining cryptocurrency, compressing files
- D) Hosting websites, load balancing, DNS resolution

**✅ Correct Answer: A**
**Rationale:** AI imitates human capabilities: prediction and pattern recognition, decision-making, language understanding, visual interpretation, and information extraction.

---

### Q25: A request to a Foundry endpoint fails with an authentication error even though the URL is correct. Which is the MOST likely cause?
- A) The JSON body used lowercase field names
- B) The API key or Entra ID token supplied is missing or invalid
- C) The resource group is in a different region
- D) The response format was set to JSON

**✅ Correct Answer: B**
**Rationale:** Connections to endpoints are authenticated by an authorization key or Microsoft Entra ID token — an auth failure points to the credential, not to JSON formatting or resource-group location.

---

### Q26: Which pairing of AI workload to scenario is INCORRECT?
- A) Computer vision — detecting helmets in factory CCTV footage
- B) Information extraction — pulling totals from scanned invoices
- C) Computer speech — summarizing a legal contract PDF
- D) Text & language — classifying support tickets by sentiment

**✅ Correct Answer: C**
**Rationale:** Summarizing a contract PDF is a text/language (or information-extraction) task. Computer speech deals with spoken audio — recognition and synthesis.

---

### Q27: A solution generates original marketing copy from short text briefs and can also draft images for the campaign. Which workload is this?
- A) Information extraction
- B) Generative AI
- C) Computer vision
- D) Machine-learning regression

**✅ Correct Answer: B**
**Rationale:** Generative AI creates original content — text, images, code — in response to natural-language prompts.

---

### Q28: Your Foundry-based chatbot needs to both search the web for fresh information and file support tickets automatically. In agent terms, these two capabilities are examples of:
- A) Models and endpoints
- B) Knowledge and actions provided through tools
- C) Subscriptions and resource groups
- D) Instructions and parameters

**✅ Correct Answer: B**
**Rationale:** Agents use tools for two purposes: finding knowledge to contextualize their work (web/file search) and performing actions to automate tasks (filing tickets).

---

### Q29: Which statement about Foundry resources vs Foundry projects is TRUE?
- A) Projects provide compute and storage; resources are isolated dev environments
- B) Resources provide compute, storage, and model delivery; projects are isolated environments inside them
- C) Resources and projects are interchangeable names for the same object
- D) A project can exist without any Foundry resource

**✅ Correct Answer: B**
**Rationale:** The Foundry resource supplies the underlying services (compute, storage, model delivery); projects are the isolated work environments created within it.

---

### Q30: A university lab wants students to experiment with AI without affecting the faculty's production resources, while all costs stay on the university's single invoice. What is the BEST structure?
- A) Separate tenants for each student
- B) One subscription with separate resource groups for student and production workloads
- C) One resource group containing everything
- D) Separate subscriptions for every student

**✅ Correct Answer: B**
**Rationale:** Resource groups organize and manage resources independently within one subscription (one bill). Separate tenants/subscriptions would split billing and identity unnecessarily.

---

## Quiz 1B — AI Concepts & Getting Started with AI in Azure (Round 2)

### Q1: How many principles make up Microsoft's responsible AI framework?
- A) Four
- B) Five
- C) Six
- D) Eight

**✅ Correct Answer: C**
**Rationale:** Six principles: fairness, reliability & safety, privacy & security, inclusiveness, transparency, and accountability.

---

### Q2: Which AI workload converts documents, receipts, audio, and video into structured, usable data?
- A) Computer speech
- B) Information extraction
- C) Generative AI
- D) Text classification

**✅ Correct Answer: B**
**Rationale:** Information extraction analyzes unstructured content (documents, forms, images, audio, video) and extracts relevant fields and values.

---

### Q3: An HTTPS address that applications use to access a deployed model or Foundry service is called:
- A) A resource lock
- B) An endpoint
- C) A service principal
- D) A namespace

**✅ Correct Answer: B**
**Rationale:** An endpoint is the HTTP(S) address through which applications access Foundry assets such as deployed models.

---

### Q4: Which of the following is one of the four asset types you work with in a Foundry project?
- A) Firewalls
- B) Agents
- C) Containers
- D) Pipelines

**✅ Correct Answer: B**
**Rationale:** Foundry projects contain models, agents, tools, and knowledge.

---

### Q5: Which responsible AI principle focuses on protecting the data used to train and operate AI systems?
- A) Privacy & security
- B) Fairness
- C) Transparency
- D) Inclusiveness

**✅ Correct Answer: A**
**Rationale:** Privacy & security requires safeguarding the data an AI system is trained on and the data it processes when running.

---

### Q6: What kind of boundary does a resource group provide?
- A) Billing boundary
- B) Security/identity boundary
- C) Organization and management grouping
- D) Network isolation boundary

**✅ Correct Answer: C**
**Rationale:** Resource groups exist to organize and manage related resources. Billing is the subscription; security/identity is the tenant.

---

### Q7: Which of these is an example of generative AI output?
- A) A sorted database table
- B) An original poem written from a prompt
- C) A compressed ZIP archive
- D) A disk-usage report

**✅ Correct Answer: B**
**Rationale:** Generative AI creates original content — text, images, code — in response to prompts.

---

### Q8: Interpreting the content of images and video belongs to which workload?
- A) Computer vision
- B) Information extraction
- C) Computer speech
- D) Text & language

**✅ Correct Answer: A**
**Rationale:** Computer vision is the workload concerned with interpreting visual input such as images and video.

---

### Q9: Which HTTP elements accompany the JSON body in a Foundry endpoint request?
- A) Binary attachments only
- B) Metadata headers
- C) XML envelopes
- D) Cookies signed by the model

**✅ Correct Answer: B**
**Rationale:** Requests include the function details and data as JSON plus metadata headers; responses likewise return headers and JSON results.

---

### Q10: A city deploys an AI traffic system and assigns a named officer with authority to review and reverse its decisions. Which principle is this?
- A) Accountability
- B) Transparency
- C) Reliability & safety
- D) Fairness

**✅ Correct Answer: A**
**Rationale:** Accountability keeps people answerable for AI systems — designated humans who can review and override decisions.

---

### Q11: What is the correct description of the Foundry model catalog's scope?
- A) Only Microsoft-built models
- B) Models from Microsoft plus partner and community providers
- C) Only open-source models
- D) Only speech models

**✅ Correct Answer: B**
**Rationale:** The catalog includes models sold directly by Microsoft (billed via Azure) and models from partner/community providers.

---

### Q12: Your app authenticates to a Foundry endpoint without storing any secret in code, using the identity assigned to the app. Which mechanism is this?
- A) An API key embedded in HTML
- B) A Microsoft Entra ID token
- C) A shared CSV of passwords
- D) An anonymous connection

**✅ Correct Answer: B**
**Rationale:** Endpoint connections can be authenticated by an authorization key or by a Microsoft Entra ID token — token-based auth avoids embedding secrets.

---

### Q13: Which scenario is text & language (NLP) rather than information extraction?
- A) Reading vendor and total from scanned receipts
- B) Determining that incoming product reviews are mostly negative
- C) Pulling invoice numbers from PDF files into a database
- D) Transcribing a recorded phone call

**✅ Correct Answer: B**
**Rationale:** Sentiment analysis of reviews is a classic NLP text-classification task. Receipt/invoice field extraction is information extraction; call transcription is speech.

---

### Q14: Which statement about machine learning's relationship to AI workloads is correct?
- A) Only computer vision uses machine learning
- B) Machine learning is a legacy approach replaced by generative AI
- C) Machine learning models underpin all the AI workloads, including generative AI
- D) Machine learning applies only to numeric data

**✅ Correct Answer: C**
**Rationale:** Every workload — language, speech, vision, extraction, generative AI — is built on machine-learned models that map inputs to outputs.

---

### Q15: Where do agents get the ability to perform actions such as booking a meeting?
- A) From larger context windows
- B) From tools connected to the agent
- C) From higher rate limits
- D) From the resource group configuration

**✅ Correct Answer: B**
**Rationale:** Tools connect agents to capabilities: knowledge tools supply information, action tools let the agent automate tasks.

---

### Q16: A recruitment AI is found to score candidates from one university systematically higher because historic hiring data favored them. The vendor fixes the training data. Which principle drove the fix?
- A) Fairness
- B) Transparency
- C) Privacy & security
- D) Reliability & safety

**✅ Correct Answer: A**
**Rationale:** Bias inherited from unrepresentative historic data is a fairness problem — AI must treat all people equitably.

---

### Q17: An autonomous forklift is certified only for dry indoor floors, and the manufacturer blocks operation when moisture sensors trigger. Which principle is being enforced?
- A) Inclusiveness
- B) Reliability & safety
- C) Accountability
- D) Fairness

**✅ Correct Answer: B**
**Rationale:** Reliability & safety means systems operate only within the limits they were designed and tested for — refusing unsafe conditions enforces this.

---

### Q18: A public-sector chatbot displays a notice describing what it can and cannot answer and warns users that responses may contain mistakes. Which TWO principles does the notice serve? (pick the option naming both)
- A) Transparency and accountability
- B) Fairness and inclusiveness
- C) Privacy & security and reliability
- D) Inclusiveness and accountability

**✅ Correct Answer: A**
**Rationale:** Explaining capabilities/limits is transparency; publicly owning responsibility for the system's behavior supports accountability.

---

### Q19: Which statement about tenants and subscriptions is FALSE?
- A) A tenant can contain multiple subscriptions
- B) Users are authenticated at the tenant level via Microsoft Entra ID
- C) A subscription defines the security boundary of an organization
- D) Resource groups live inside subscriptions

**✅ Correct Answer: C**
**Rationale:** The tenant, not the subscription, is the security boundary. Subscriptions are billing boundaries within a tenant.

---

### Q20: A developer creates a Foundry project and wants an app to call its deployed model. Which minimal information must the app be given?
- A) Tenant ID and region
- B) Project endpoint plus a key or token, and the model deployment name
- C) Resource group name and subscription ID
- D) The model's training-data location

**✅ Correct Answer: B**
**Rationale:** Client code targets the endpoint, authenticates with a key or Entra ID token, and names the model deployment it wants to invoke.

---

### Q21: Why might an organization choose Entra ID tokens over API keys for production endpoint access?
- A) Tokens make responses faster
- B) Identity-based access removes shared static secrets and supports centralized control
- C) Keys only work in the playground
- D) Tokens are required for JSON responses

**✅ Correct Answer: B**
**Rationale:** Entra ID authentication ties access to managed identities — no shared static secret to leak or rotate manually. Both methods are otherwise functionally supported.

---

### Q22: An insurer's claims triage bot must decide payouts. Regulators demand that a human can always be identified as responsible for each decision. Which principle does the requirement target, and which supporting practice fits?
- A) Accountability — human review workflow with named owners
- B) Transparency — publishing the model architecture
- C) Fairness — rebalancing training data
- D) Privacy — encrypting the claims database

**✅ Correct Answer: A**
**Rationale:** Naming responsible humans and adding review workflows is the accountability principle in action.

---

### Q23: Which is the BEST example of the 'evaluating content, making decisions, and taking action' capability of AI?
- A) A model that flags fraudulent transactions and automatically holds them for review
- B) A script that renames files by date
- C) A dashboard that charts last month's sales
- D) A backup job that runs nightly

**✅ Correct Answer: A**
**Rationale:** Evaluating input (transactions), deciding (fraud or not), and acting (holding the payment) is decision-making AI. The others are conventional automation or reporting.

---

### Q24: A Foundry-hosted agent must consult the company's HR policy PDFs (stored as project data) AND send emails via a connected service. Map each need to the correct agent concept:
- A) PDFs → actions; email → knowledge
- B) PDFs → knowledge; email → actions
- C) PDFs → instructions; email → model
- D) PDFs → model; email → instructions

**✅ Correct Answer: B**
**Rationale:** Knowledge grounds the agent in data sources (the PDFs); actions let it perform tasks (sending email) through tools.

---

### Q25: Which consequence follows from subscriptions being billing boundaries?
- A) Resources in different subscriptions cannot communicate
- B) Cost separation between departments is achieved by giving each its own subscription
- C) Each subscription requires its own tenant
- D) Only one resource group may exist per subscription

**✅ Correct Answer: B**
**Rationale:** Separate subscriptions produce separate billing scopes — the standard way to separate departmental costs. Communication across subscriptions is still possible.

---

### Q26: A startup wants to prototype a chatbot today with minimal setup: create a place to work, pick a model, get an endpoint. Which sequence matches the Foundry workflow?
- A) Create a Foundry project → deploy a model from the catalog → call the project endpoint from code
- B) Create a virtual machine → install the model → open port 80
- C) Create a storage account → upload weights → email Microsoft for a key
- D) Buy a dedicated GPU cluster → configure Kubernetes → train from scratch

**✅ Correct Answer: A**
**Rationale:** Foundry's flow: create a project (isolated environment), deploy a catalog model, then connect apps via the endpoint with a key/token.

---

### Q27: Which option correctly distinguishes generative AI from 'traditional' predictive ML?
- A) Generative AI creates new content from prompts; predictive ML estimates outcomes/labels from features
- B) Generative AI needs no training data; predictive ML does
- C) Predictive ML runs only on-premises; generative AI only in the cloud
- D) Generative AI is rule-based; predictive ML is learned

**✅ Correct Answer: A**
**Rationale:** Both are machine learning, but generative models produce original content in response to prompts, whereas predictive models output classifications or estimates.

---

### Q28: During a demo, a model returns results but the JSON body of the request had to describe 'details of the function' being invoked. Which architectural style does this reflect?
- A) SOAP remote procedure calls
- B) REST interfaces exposed by the endpoint
- C) FTP file exchange
- D) WebSocket streaming only

**✅ Correct Answer: B**
**Rationale:** Foundry endpoints expose REST interfaces: clients send requests with function details, headers, and JSON data, and receive JSON results.

---

### Q29: An accessibility review recommends adding descriptive audio to your app's visual dashboards so blind users benefit from the AI insights. Refusing this on cost grounds would MOST directly conflict with:
- A) Inclusiveness
- B) Reliability & safety
- C) Privacy & security
- D) Transparency

**✅ Correct Answer: A**
**Rationale:** Inclusiveness says AI should empower everyone, expressly including people with disabilities.

---

### Q30: Which claim about Foundry projects and their assets is FALSE?
- A) A project can contain multiple deployed models
- B) Agents in a project can be connected to tools
- C) Knowledge configuration controls the data sources agents can use
- D) Each project must contain exactly one agent

**✅ Correct Answer: D**
**Rationale:** Projects are flexible workspaces — they may contain zero or many agents, along with models, tools, and knowledge configurations.

---

## Quiz 2A — Generative AI & Agents

### Q1: What is a large language model (LLM)?
- A) A type of AI model designed to generate human-like text
- B) A model that processes only images
- C) A database optimized for storing long documents
- D) A compression algorithm for text files

**✅ Correct Answer: A**
**Rationale:** LLMs are AI models built to understand and generate human-like language; they power generative AI.

---

### Q2: Which model architecture do modern LLMs use?
- A) Decision tree
- B) Transformer
- C) K-means clustering
- D) Linear regression

**✅ Correct Answer: B**
**Rationale:** LLMs are based on the transformer architecture, which uses embeddings and attention to model language.

---

### Q3: What are embeddings?
- A) Vector-based representations of tokens that capture semantic meaning
- B) Extra words a model inserts to improve fluency
- C) Compressed copies of the training data
- D) Rules that filter inappropriate content

**✅ Correct Answer: A**
**Rationale:** Embeddings encode tokens as vectors; semantically similar tokens have similar vector directions.

---

### Q4: What is a 'prompt' in generative AI?
- A) The model's internal error log
- B) The natural-language input a user provides to get a response
- C) The GPU that runs the model
- D) The license agreement for the model

**✅ Correct Answer: B**
**Rationale:** Models generate responses based on natural-language prompts supplied by the user or application.

---

### Q5: Small language models (SLMs) are best suited to:
- A) Devices and resource-constrained environments
- B) Replacing all cloud models
- C) Only image generation
- D) Training other models

**✅ Correct Answer: A**
**Rationale:** SLMs are compact models used on devices and in other resource-constrained environments.

---

### Q6: Which output type is NOT commonly produced by generative AI?
- A) Natural-language text
- B) Images and video
- C) Program code
- D) Physical hardware prototypes

**✅ Correct Answer: D**
**Rationale:** Generative AI produces digital content — text/speech, images/video, and code — not physical objects.

---

### Q7: In Foundry, where can you interactively test a deployed model before writing any code?
- A) The model playground
- B) Azure DNS
- C) The billing portal
- D) The resource lock pane

**✅ Correct Answer: A**
**Rationale:** The model playground lets you explore and test models, try prompts, and adjust settings interactively.

---

### Q8: An AI agent combines a model, tools, and which third ingredient that defines its behavior and scope?
- A) Instructions
- B) A GPU quota
- C) A storage account
- D) A DNS zone

**✅ Correct Answer: A**
**Rationale:** Agents use a model (reasoning), instructions (behavior and scope), and tools (knowledge and actions).

---

### Q9: What does the attention mechanism in a transformer do?
- A) Removes irrelevant words from input
- B) Examines the relationships between each token and the tokens around it
- C) Flags offensive language
- D) Chooses which GPU processes the request

**✅ Correct Answer: B**
**Rationale:** Attention weighs how strongly each token relates to surrounding tokens, letting the model encode context.

---

### Q10: Which vector-space fact about embeddings is TRUE?
- A) Semantically similar tokens have similar directions in vector space
- B) All vectors have identical values
- C) Vectors store the literal spelling of words
- D) Vector length always equals word length

**✅ Correct Answer: A**
**Rationale:** Embeddings form a multidimensional space where similar meanings point in similar directions — enabling relationships like dog + young ≈ puppy.

---

### Q11: Which model-deployment setting determines where data is processed and how you pay?
- A) Guardrails
- B) Deployment type
- C) Version pinning
- D) Content filter level

**✅ Correct Answer: B**
**Rationale:** Deployment type controls the processing location and payment model. Version controls updates; rate limits control TPM; guardrails apply responsible-AI policies.

---

### Q12: Increasing a model's temperature parameter generally makes responses:
- A) More deterministic and repetitive
- B) More random and 'creative'
- C) Shorter
- D) Grammatically incorrect

**✅ Correct Answer: B**
**Rationale:** Temperature controls randomness — higher values yield more varied, creative output; lower values are more predictable.

---

### Q13: What is the primary benefit of using the model playground before writing code?
- A) It removes the need to deploy a model
- B) You can test prompts, compare models, and capture working settings to reuse in code
- C) It automatically writes the perfect system prompt
- D) It eliminates API authentication

**✅ Correct Answer: B**
**Rationale:** The playground is for experimentation — testing prompts and settings you can then carry into application code. It doesn't replace deployment or the API.

---

### Q14: In the OpenAI Python pattern for Foundry, which two values configure the client object?
- A) base_url (endpoint) and api_key
- B) subscription ID and tenant ID
- C) region and SKU
- D) model weights and vocabulary

**✅ Correct Answer: A**
**Rationale:** OpenAI(base_url=<foundry endpoint>, api_key=<key>) creates the client; the model deployment name is passed per request.

---

### Q15: Agents can collaborate with which of the following?
- A) Human users only
- B) Other agents only
- C) Both human users and other agents
- D) Neither — agents work in isolation

**✅ Correct Answer: C**
**Rationale:** Agents assist human users and can also participate in multi-agent workflows where specialized agents cooperate.

---

### Q16: A support chatbot must always answer in formal English, stay on-topic about billing, and refuse legal advice. Which mechanism implements these requirements?
- A) Raising the temperature
- B) Writing them into the instructions (system prompt)
- C) Increasing the rate limit
- D) Choosing a larger resource group

**✅ Correct Answer: B**
**Rationale:** Instructions/system prompts specify context and guidelines for responses — tone, scope, and refusal rules belong there.

---

### Q17: Your model deployment intermittently rejects requests during peak hours with throttling errors. Which deployment setting should you examine FIRST?
- A) Guardrails
- B) Rate limits (tokens-per-minute)
- C) Model version
- D) System prompt length

**✅ Correct Answer: B**
**Rationale:** Rate limits cap maximum TPM throughput; exceeding them causes throttling. Guardrails filter content, they don't throttle.

---

### Q18: A compliance team wants inappropriate content blocked at the deployment level regardless of what the application sends. Which setting applies?
- A) Guardrails (responsible AI policies)
- B) Deployment type
- C) Temperature
- D) Auto-update policy

**✅ Correct Answer: A**
**Rationale:** Guardrails attach responsible-AI content policies to the deployment itself, independent of application logic.

---

### Q19: In this Foundry Project API snippet, which line actually submits the user's question to the agent?

1: agent = project.agents.get("helper")
2: oc = project.get_openai_client()
3: r = oc.responses.create(input=[...], extra_body={"agent": {...}})
- A) Line 1
- B) Line 2
- C) Line 3
- D) None — a separate submit() call is required

**✅ Correct Answer: C**
**Rationale:** responses.create() sends the prompt. Line 1 only retrieves the agent definition and line 2 only constructs the client.

---

### Q20: Why can two identical prompts to the same LLM return different answers?
- A) The endpoint caches corrupt data
- B) Generation is probabilistic — the model samples from a distribution over next tokens
- C) JSON encoding randomizes text
- D) Keys expire between calls

**✅ Correct Answer: B**
**Rationale:** LLMs generate probabilistically; sampling (influenced by temperature) means outputs can vary between identical calls.

---

### Q21: A team wants their agent to cite the company travel policy when answering expense questions. The policy lives in uploaded files. Which tool category should be added to the agent?
- A) An action tool for code generation
- B) A knowledge tool such as file search
- C) A larger model deployment
- D) A billing export tool

**✅ Correct Answer: B**
**Rationale:** Knowledge tools (e.g., file search) ground the agent in data sources so it can contextualize answers.

---

### Q22: Which statement about the Foundry model catalog is FALSE?
- A) It contains models from multiple providers
- B) Microsoft-sold models are billed through your Azure subscription
- C) You can filter and compare models
- D) Using the catalog removes the need for an Azure subscription

**✅ Correct Answer: D**
**Rationale:** The catalog is a discovery/compare/deploy hub — you still need an Azure subscription; Microsoft-sold models bill through it.

---

### Q23: A prompt asks for 'a fun limerick about databases' and the system prompt says 'You are a formal technical writer; never write humor.' What is the LIKELY behavior and why?
- A) Humor is produced — user prompts always win
- B) The model follows the system instructions and declines or answers formally, since instructions define behavior and scope
- C) The endpoint returns an HTTP 500
- D) The model switches providers automatically

**✅ Correct Answer: B**
**Rationale:** Instructions (system prompts) set the governing context and guidelines; well-behaved models respect them over conflicting user prompts.

---

### Q24: Which change is MOST likely to make a vague prompt produce the desired output?
- A) Adding explicit details and requirements to the user prompt
- B) Doubling the rate limit
- C) Switching from JSON to XML
- D) Restarting the resource group

**✅ Correct Answer: A**
**Rationale:** Explicit prompts with sufficient detail produce better output — prompt quality is the main lever for response quality.

---

### Q25: An architect proposes: 'Deploy once, then let the auto-update policy move us to new model versions automatically.' Which deployment consideration governs this behavior?
- A) Version
- B) Deployment type
- C) Guardrails
- D) Knowledge

**✅ Correct Answer: A**
**Rationale:** The version setting covers both the model version and its auto-update policy.

---

### Q26: Your multi-agent workflow has a 'triage' agent that hands tickets to a 'refunds' agent. What enables this pattern?
- A) Agents can collaborate with other agents, each with its own responsibility
- B) Both agents must share one system prompt
- C) Azure only permits one agent per tenant
- D) Refunds require a special GPU

**✅ Correct Answer: A**
**Rationale:** Agents can form workflows of specialized agents that cooperate — a core agentic-AI capability.

---

### Q27: To test an agent interactively — including its tools — before wiring it into an app, you should use:
- A) The agent playground in the Foundry portal
- B) A production deployment slot
- C) The Azure pricing calculator
- D) The tenant properties blade

**✅ Correct Answer: A**
**Rationale:** The agent playground is where you experiment with and test agents, including tool behavior, prior to coding against the Project API.

---

### Q28: Which is a TRUE statement about how the Foundry Agent Service relates to models?
- A) Agents replace models entirely
- B) An agent references a deployed model for language understanding and reasoning
- C) Agents run models locally in the browser
- D) Each model may serve only one agent

**✅ Correct Answer: B**
**Rationale:** An agent's 'brain' is a model it references for understanding and reasoning; instructions and tools complete the agent.

---

### Q29: A developer complains: 'The playground works, but my code gets 401 errors on responses.create().' Which pair of values should they verify FIRST?
- A) Temperature and max tokens
- B) The endpoint URL (base_url) and the API key
- C) The billing account owner and invoice ID
- D) The agent's flag colors

**✅ Correct Answer: B**
**Rationale:** 401 = authentication failure — check the base_url and api_key used to build the client. Parameters affect content, not auth.

---

### Q30: Which option lists the THREE levers for configuring generative model behavior at request time?
- A) Instructions, user input, parameters
- B) Region, SKU, tier
- C) Tenant, subscription, resource group
- D) Firewall, VNet, NSG

**✅ Correct Answer: A**
**Rationale:** You shape behavior via instructions (system prompt), the user prompt itself, and parameters such as temperature and response length.

---

## Quiz 2B — Generative AI & Agents (Round 2)

### Q1: Which is the most accurate description of generative AI?
- A) It uses a language model to create original content in response to a prompt
- B) It is an obsolete form of AI replaced by machine learning
- C) It can only be operated by professional data scientists
- D) It retrieves pre-written answers from a database

**✅ Correct Answer: A**
**Rationale:** Generative AI creates original content from prompts via a language model. It's neither obsolete nor specialist-only, and it doesn't just look up canned answers.

---

### Q2: What is a token in the context of language models?
- A) A unit of text (a word or word-part) that the model processes
- B) A hardware security device
- C) A billing credit for API calls
- D) A synonym for an API key

**✅ Correct Answer: A**
**Rationale:** Models split text into tokens — words or word-parts — which are then embedded and processed.

---

### Q3: Which prompt element sets overall context and guidelines for how a model should respond?
- A) The system prompt (instructions)
- B) The response body
- C) The rate limit
- D) The resource tag

**✅ Correct Answer: A**
**Rationale:** Instructions/system prompts specify context and behavioral guidelines for the model's responses.

---

### Q4: An agent's 'tools' serve which two purposes?
- A) Finding knowledge and performing actions
- B) Compiling code and formatting disks
- C) Billing and monitoring
- D) Authentication and encryption

**✅ Correct Answer: A**
**Rationale:** Tools let agents find knowledge (context/grounding) and perform actions (task automation).

---

### Q5: Smart chatbots powered by generative AI differ from older chatbots because they:
- A) Generate responses dynamically instead of using hard-coded answers
- B) Only work by telephone
- C) Cannot understand questions
- D) Require no model at all

**✅ Correct Answer: A**
**Rationale:** Generative chatbots produce answers dynamically from a model rather than following hard-coded scripts and logic.

---

### Q6: Which family of API does Foundry expose for consuming generative models from code?
- A) OpenAI-compatible APIs
- B) FTP APIs
- C) SMTP APIs
- D) Direct SQL queries

**✅ Correct Answer: A**
**Rationale:** You consume Foundry generative models via OpenAI-compatible APIs (typically through SDKs).

---

### Q7: Which parameter most directly limits how long a model's answer can be?
- A) Maximum response length / max tokens
- B) Temperature
- C) Deployment region
- D) API version

**✅ Correct Answer: A**
**Rationale:** Response-length (max token) parameters cap output size; temperature controls randomness, not length.

---

### Q8: Agentic AI is best described as:
- A) Automation through smart, connected agents built on generative AI
- B) A spreadsheet plug-in
- C) A way to compress models
- D) Manual scripting of business rules

**✅ Correct Answer: A**
**Rationale:** Generative AI is the foundation for agentic AI — automation through smart, connected agents.

---

### Q9: Where do embedding values come from during model training?
- A) They are hand-written by engineers
- B) They are learned, with attention weighing each token's relationship to surrounding tokens in training data
- C) They are copied from a dictionary
- D) They are random and never change

**✅ Correct Answer: B**
**Rationale:** Embedding values are learned during training; attention encodes each token's contextual relationships with the tokens around it.

---

### Q10: Which statement correctly contrasts LLMs and SLMs?
- A) SLMs are compact models suited to devices; LLMs are larger and more capable
- B) SLMs only handle images
- C) LLMs run only on phones
- D) There is no difference

**✅ Correct Answer: A**
**Rationale:** Small language models trade capability for footprint, fitting devices and constrained environments; LLMs are larger.

---

### Q11: You want repeatable demo output from a model. Which parameter should be LOWERED?
- A) Temperature
- B) Max tokens
- C) TPM rate limit
- D) Number of tools

**✅ Correct Answer: A**
**Rationale:** Lower temperature reduces randomness, making outputs more deterministic and repeatable.

---

### Q12: In the OpenAI responses API call, the 'model' argument for a Foundry deployment should be set to:
- A) Your model deployment name
- B) The literal string 'gpt'
- C) The subscription ID
- D) The tenant domain

**✅ Correct Answer: A**
**Rationale:** You pass the deployment name you assigned when deploying the model in your project.

---

### Q13: Which action turns a tuned playground configuration into a reusable agent?
- A) Saving the model configuration as a named agent
- B) Exporting the chat as PDF
- C) Deleting the project
- D) Lowering the rate limit

**✅ Correct Answer: A**
**Rationale:** Foundry lets you save a model configuration as a named agent, or you can build the agent directly in the Agent Service.

---

### Q14: The Foundry Project API authenticates with DefaultAzureCredential in the sample pattern. What does this represent?
- A) Microsoft Entra ID-based authentication resolved from the running environment
- B) A hard-coded password
- C) Anonymous access
- D) A GPU reservation

**✅ Correct Answer: A**
**Rationale:** DefaultAzureCredential acquires a Microsoft Entra ID token from the environment (login, managed identity, etc.) — no key in code.

---

### Q15: Which pairing of provider category and billing is correct for Foundry Models?
- A) Microsoft-sold models — billed through your Azure subscription; partner/community models — purchased from third-party providers
- B) All models are free
- C) Partner models bill through Microsoft 365
- D) Microsoft models require a separate retail store account

**✅ Correct Answer: A**
**Rationale:** Models sold directly by Microsoft bill via the Azure subscription; partner and community models are purchased from the third parties.

---

### Q16: A prompt engineer notices the phrase 'bark' is interpreted as a dog sound in pet-related sentences but as tree covering in gardening text. Which mechanism enables this context sensitivity?
- A) Attention relating each token to its surrounding tokens
- B) A spelling dictionary
- C) The rate limiter
- D) Response streaming

**✅ Correct Answer: A**
**Rationale:** Attention encodes contextual relationships, so the same token is represented differently depending on the tokens around it.

---

### Q17: Which analogy for vector arithmetic in embedding space is aligned with how semantic models behave?
- A) dog + young ≈ puppy
- B) dog + young ≈ database
- C) cat − kitten ≈ airplane
- D) vector math is impossible on embeddings

**✅ Correct Answer: A**
**Rationale:** Embedding spaces capture semantic relationships, allowing arithmetic like dog + young ≈ puppy and cat + young ≈ kitten.

---

### Q18: A regulated customer must ensure prompts and completions are processed only in a specific geography. Which deployment consideration addresses this?
- A) Deployment type — it controls where data is processed
- B) Temperature
- C) Guardrails
- D) System prompt

**✅ Correct Answer: A**
**Rationale:** Deployment type determines where data is processed (and the payment model) — the setting to review for data-residency needs.

---

### Q19: Your agent answers from stale policy files after HR uploads new ones. Which area of the agent's configuration should you check?
- A) The knowledge/tools configuration pointing at the data sources
- B) The temperature parameter
- C) The billing plan
- D) The palette colors of the playground

**✅ Correct Answer: A**
**Rationale:** Knowledge tools define which data sources ground the agent — the file-search source must reference the updated files.

---

### Q20: What does extra_body={"agent": {"name": ..., "type": "agent_reference"}} accomplish in a responses.create() call?
- A) It routes the request to a named Foundry agent instead of a bare model
- B) It doubles the token limit
- C) It disables authentication
- D) It converts the response to XML

**✅ Correct Answer: A**
**Rationale:** The agent_reference tells the Project API's OpenAI client to run the request through the named agent (with its instructions and tools).

---

### Q21: A team compares three catalog models for summarization quality and cost before deploying. Which Foundry capability supports this directly?
- A) The model catalog's discover / filter / compare features
- B) The tenant switcher
- C) Resource locks
- D) The activity log

**✅ Correct Answer: A**
**Rationale:** The catalog is a central hub to discover, filter, and compare models from multiple providers before deployment.

---

### Q22: Which situation calls for creating an AGENT rather than calling a model directly?
- A) The solution must autonomously look up order data and issue refunds via connected tools
- B) You need one-off text completion in a script
- C) You want to lower response randomness
- D) You need to change the JSON schema of a response

**✅ Correct Answer: A**
**Rationale:** When the solution needs autonomy plus tools (knowledge + actions), that's the agent pattern; a direct model call suffices for simple completion.

---

### Q23: An exam question shows code that only does: client = OpenAI(base_url=..., api_key=...). What has this code achieved so far?
- A) It created a client object bound to the endpoint — no prompt has been sent yet
- B) It generated a model response
- C) It deployed a new model
- D) It created a Foundry project

**✅ Correct Answer: A**
**Rationale:** Instantiating the client configures connection + auth. Only responses.create() (or similar) actually sends a prompt.

---

### Q24: Why do organizations pin a model VERSION rather than always auto-updating?
- A) To keep behavior stable and re-validate before adopting new versions
- B) Because new versions cost nothing
- C) Because auto-update disables the endpoint
- D) Version pinning is required for JSON output

**✅ Correct Answer: A**
**Rationale:** Pinning gives predictable behavior; teams validate new versions before switching. The version setting includes the auto-update policy.

---

### Q25: A junior developer sets temperature to the maximum for a legal-summary bot and users report inconsistent, embellished summaries. What is the BEST fix?
- A) Lower the temperature so output is more focused and deterministic
- B) Increase max tokens
- C) Remove the system prompt
- D) Switch the response format to plain text

**✅ Correct Answer: A**
**Rationale:** High temperature increases randomness/creativity — inappropriate for precision tasks like legal summaries; lower it.

---

### Q26: Which statement about multi-agent workflows is TRUE?
- A) Specialized agents can each own a responsibility and hand work to one another
- B) Only two agents may ever interact
- C) Agents cannot share a project
- D) Multi-agent systems remove the need for models

**✅ Correct Answer: A**
**Rationale:** Agents collaborate with other agents — workflows chain specialized agents, each with its own role and tools.

---

### Q27: The playground shows excellent answers, but production code with identical settings misbehaves. Which explanation is MOST plausible?
- A) The code targets a different deployment, or omits the instructions/parameters used in the playground
- B) Playgrounds use a secret superior model
- C) JSON responses randomize behavior
- D) API keys change model quality

**✅ Correct Answer: A**
**Rationale:** Behavior differences usually mean the code isn't reproducing the playground configuration — deployment name, system prompt, or parameters differ.

---

### Q28: Which capability distinguishes an agent's ACTION tools from its KNOWLEDGE tools?
- A) Actions change external state (create tickets, send mail); knowledge retrieves information to ground responses
- B) Actions are read-only; knowledge is write-only
- C) Actions run before the model; knowledge after
- D) There is no distinction

**✅ Correct Answer: A**
**Rationale:** Knowledge tools fetch information for context; action tools automate tasks by operating on connected services.

---

### Q29: For an internal hackathon, students need to call a deployed Foundry model from Python quickly. Which minimal artifact set do they need?
- A) Endpoint URL, API key, deployment name, openai package
- B) Domain controller access and a VPN
- C) The model's training corpus
- D) A Kubernetes cluster

**✅ Correct Answer: A**
**Rationale:** The OpenAI SDK client needs the endpoint, a key (or token), and the deployment name — nothing heavier.

---

### Q30: An auditor asks how you prevent your deployed model from producing harmful categories of content organization-wide. Your BEST answer references:
- A) Guardrails — responsible AI policies applied to the model deployment
- B) Raising temperature
- C) Hiding the playground
- D) Renaming the resource group

**✅ Correct Answer: A**
**Rationale:** Guardrails attach responsible-AI content policies at the deployment, enforcing content rules regardless of the calling app.

---

## Quiz 3A — NLP & Text Analysis

### Q1: What is the purpose of tokenization in NLP?
- A) To break text into smaller units for analysis
- B) To translate text into another language
- C) To encrypt sensitive documents
- D) To compress text for storage

**✅ Correct Answer: A**
**Rationale:** Tokenization splits text into words or word-parts so it can be analyzed or vectorized.

---

### Q2: Which NLP task determines whether a product review is positive or negative?
- A) Sentiment analysis
- B) Language detection
- C) Named entity recognition
- D) Stemming

**✅ Correct Answer: A**
**Rationale:** Sentiment analysis is a text-classification task that evaluates tone/opinion.

---

### Q3: Named entity recognition (NER) identifies which items in text?
- A) People, places, organizations, dates and similar entities
- B) Grammatical errors
- C) Font styles
- D) Passwords

**✅ Correct Answer: A**
**Rationale:** NER labels entities such as persons, organizations, locations, and dates found in text.

---

### Q4: 'The', 'a', 'it', and 'and' are examples of what in text pre-processing?
- A) Stop words
- B) Phonemes
- C) Embeddings
- D) Key phrases

**✅ Correct Answer: A**
**Rationale:** Stop words are common 'noise' words removed during pre-processing because they add little meaning.

---

### Q5: Which technique consolidates 'power', 'powered' and 'powerful' into a shared root?
- A) Stemming / lemmatization
- B) Tokenization
- C) Normalization
- D) POS tagging

**✅ Correct Answer: A**
**Rationale:** Stemming and lemmatization reduce word variants to a common root form.

---

### Q6: Parts-of-speech (POS) tagging labels words as:
- A) Verbs, nouns, adjectives, and other word types
- B) Positive or negative
- C) English or French
- D) Long or short

**✅ Correct Answer: A**
**Rationale:** POS tagging identifies each token's grammatical role — verb, noun, adjective, etc.

---

### Q7: Which pre-processing step removes capitalization and punctuation?
- A) Normalization
- B) Stop-word removal
- C) Vectorization
- D) Summarization

**✅ Correct Answer: A**
**Rationale:** Normalization standardizes text by lower-casing and stripping punctuation.

---

### Q8: Which of these is a common NLP use case?
- A) Spam filtering in email systems
- B) Rendering 3D game scenes
- C) Defragmenting hard disks
- D) Encrypting network traffic

**✅ Correct Answer: A**
**Rationale:** NLP powers spam filtering, search indexing, chatbot intent prediction, PII redaction, and social-media analysis.

---

### Q9: Which technique measures a word's importance to one document relative to its frequency across an entire collection?
- A) TF-IDF
- B) Bag-of-Words
- C) TextRank
- D) Naïve Bayes

**✅ Correct Answer: A**
**Rationale:** Term Frequency–Inverse Document Frequency scores words high when frequent in a document but rare across the corpus.

---

### Q10: Bag-of-Words classification works by:
- A) Correlating the frequency of words from a defined set with a category
- B) Translating text into vectors of pixels
- C) Sorting words alphabetically
- D) Counting sentences only

**✅ Correct Answer: A**
**Rationale:** BoW correlates word-set frequencies with classifications — e.g., 'happy/great/fantastic' indicating positive sentiment.

---

### Q11: TextRank is commonly used for which purpose, and what inspired it?
- A) Extractive summarization; based on the PageRank web-search idea
- B) Machine translation; based on RSA encryption
- C) Speech synthesis; based on MP3 encoding
- D) Spam detection; based on firewalls

**✅ Correct Answer: A**
**Rationale:** TextRank scores sentence relevance (a PageRank-style algorithm) and is used to extract the n most relevant sentences as a summary.

---

### Q12: What best describes the role of embedding vectors in NLP?
- A) They capture semantic relationships between tokens in multiple dimensions
- B) They duplicate tokens in several languages
- C) They define which stop words to ignore
- D) They store the alphabet

**✅ Correct Answer: A**
**Rationale:** Embeddings represent tokens as multidimensional vectors capturing meaning — the basis of modern semantic models and LLMs.

---

### Q13: Azure Language in Foundry Tools offers which capability set?
- A) PII extraction, language detection, named entity recognition, Text Analytics for Health
- B) Video rendering and 3D capture
- C) GPU scheduling
- D) Database indexing

**✅ Correct Answer: A**
**Rationale:** Azure Language provides PII extraction, language detection, NER, and health-domain text analytics as prebuilt capabilities.

---

### Q14: What does client.detect_language([text]) return?
- A) Language name, ISO 639-1 code, and a confidence score
- B) A translated document
- C) The text with all verbs removed
- D) A list of stop words

**✅ Correct Answer: A**
**Rationale:** Language detection returns the detected language name, its ISO 639-1 code, and a 0–1 confidence score.

---

### Q15: What is the purpose of the client object in the Azure Language SDK?
- A) It lets application code communicate with the Azure Language service
- B) It stores the analyzed text permanently
- C) It configures the app's UI theme
- D) It trains a new language model

**✅ Correct Answer: A**
**Rationale:** The client object (e.g., TextAnalyticsClient) wraps the endpoint + credentials so your code can call the service.

---

### Q16: A compliance pipeline must return IDENTICAL structured results every time the same contract is analyzed, with confidence scores. Which approach is correct?
- A) Azure Language SDK — deterministic structured output
- B) Prompting a general-purpose LLM
- C) The chat playground
- D) Manual review only

**✅ Correct Answer: A**
**Rationale:** Azure Language returns deterministic, structured results with confidence metrics. LLM prompting is probabilistic and may vary between calls.

---

### Q17: An analyst wants ONE call that simultaneously summarizes a review, lists its key complaints, and drafts a polite reply. Which approach fits BEST?
- A) A general-purpose model prompt combining the tasks
- B) The Azure Language detect_language method
- C) recognize_pii_entities
- D) A TF-IDF batch job

**✅ Correct Answer: A**
**Rationale:** General-purpose models excel at flexible, conversational analysis combining multiple tasks in one call — something the fixed Language APIs don't do.

---

### Q18: recognize_pii_entities() is preferred over an LLM prompt for redacting customer records because it provides:
- A) Redacted text plus per-entity categories and confidence scores, deterministically
- B) More creative rewording
- C) Longer responses
- D) Automatic translation

**✅ Correct Answer: A**
**Rationale:** For regulated data you want deterministic redaction with confidence per entity — exactly what the PII API returns.

---

### Q19: Why can TF alone mislead when identifying a document's distinctive topics, and how does TF-IDF fix it?
- A) Common corpus-wide words dominate raw counts; IDF down-weights words frequent across all documents
- B) TF ignores capital letters; IDF restores them
- C) TF counts sentences; IDF counts paragraphs
- D) TF works only in English

**✅ Correct Answer: A**
**Rationale:** Words common everywhere (e.g., 'company') score high on TF in every document; dividing by document frequency (IDF) surfaces terms distinctive to this document.

---

### Q20: Which statement about the Azure Language MCP server is TRUE?
- A) It exposes Azure Language capabilities to agents through the Model Context Protocol
- B) It replaces the generative model inside an agent
- C) It generates website layouts
- D) It is required for all text analysis

**✅ Correct Answer: A**
**Rationale:** The MCP server makes Azure Language functions callable as agent tools; the agent's model remains responsible for reasoning.

---

### Q21: When connecting the Azure Language tool to an agent, which approval options exist for tool access?
- A) One-time, always for this tool, or always for all tools
- B) Per-word approval only
- C) No approval is ever needed
- D) Only tenant admins may approve, per call

**✅ Correct Answer: A**
**Rationale:** Foundry prompts you to approve tool access one-time, always for that tool, or always for all tools.

---

### Q22: A dataset of multilingual support tickets must first be routed to language-specific teams. Which method call fits?
- A) client.detect_language(documents)
- B) client.extract_key_phrases(documents)
- C) client.analyze_sentiment(documents)
- D) client.recognize_entities(documents)

**✅ Correct Answer: A**
**Rationale:** Language detection identifies each ticket's language (name, ISO code, confidence) so it can be routed correctly.

---

### Q23: Which is a CORRECT ordering of a typical statistical text-analysis flow?
- A) Tokenize → normalize → remove stop words → stem → analyze frequencies
- B) Analyze frequencies → tokenize → stem → normalize
- C) Stem → summarize → tokenize → tag
- D) Remove stop words → capture audio → tokenize

**✅ Correct Answer: A**
**Rationale:** Pre-processing (tokenization, normalization, stop-word removal, stemming) prepares tokens before frequency-based analysis.

---

### Q24: A marketing team asks why the LLM's entity list for the same press release differed slightly between Monday and Tuesday runs. The BEST explanation:
- A) LLM generation is probabilistic, so outputs can vary; a deterministic Language API would not
- B) The press release file was corrupted
- C) Azure regions rotate nightly
- D) JSON cannot represent entities

**✅ Correct Answer: A**
**Rationale:** Probabilistic generation is the documented trade-off of using general-purpose models for analysis; Azure Language is the deterministic alternative.

---

### Q25: In the Azure Language SDK, what is passed to recognize_entities()?
- A) A collection (list) of documents to analyze
- B) A single character
- C) The endpoint URL
- D) A trained model file

**✅ Correct Answer: A**
**Rationale:** You submit a collection of documents; results are returned per document with entities, categories, and confidence scores.

---

### Q26: A hospital wants entities like medication names and dosages extracted from clinical notes. Which Azure Language capability is designed for this?
- A) Text Analytics for Health
- B) Key-phrase extraction
- C) Language detection
- D) Spell check

**✅ Correct Answer: A**
**Rationale:** Text Analytics for Health specializes in clinical/medical entity extraction from unstructured health text.

---

### Q27: Which is TRUE about combining approaches in one solution?
- A) You can use Azure Language for deterministic PII redaction, then prompt an LLM on the redacted text for flexible analysis
- B) The two approaches cannot coexist in one app
- C) LLMs must always run before any API
- D) PII detection requires an agent

**✅ Correct Answer: A**
**Rationale:** A common production pattern: deterministic redaction first (compliance), then flexible LLM analysis on safe text.

---

### Q28: Your extractive summarizer must pick the 3 most relevant sentences from each article. Which technique matches?
- A) TextRank sentence scoring
- B) Bag-of-Words
- C) Stop-word removal
- D) Language detection

**✅ Correct Answer: A**
**Rationale:** TextRank scores sentence relevance from shared terms and is commonly used to extract the top n sentences.

---

### Q29: Which statement about semantic models vs statistical techniques is TRUE?
- A) Semantic models vectorize tokens to capture meaning, and are the basis of modern LLMs; statistical methods rely on token counts
- B) Statistical methods understand meaning; semantic models count words
- C) Both are identical in mechanism
- D) Semantic models cannot be trained

**✅ Correct Answer: A**
**Rationale:** Statistical analysis (TF, TF-IDF, BoW) counts tokens; semantic models embed tokens as vectors trained to encapsulate relationships — the LLM foundation.

---

### Q30: An exam scenario: 'Structured results based on statistical techniques, same input → same output.' Which option should you eliminate FIRST and why?
- A) The chat playground — interactive LLM chat is neither structured nor deterministic
- B) The Azure Language SDK — it is too deterministic
- C) REST APIs — they cannot return JSON
- D) Nothing can satisfy the requirement

**✅ Correct Answer: A**
**Rationale:** Playground chat is exploratory and probabilistic. The Azure Language SDK is the fit; REST/JSON support structured output fine.

---

## Quiz 3B — NLP & Text Analysis (Round 2)

### Q1: Natural language processing (NLP) is best summarized as:
- A) Inferring meaning from text
- B) Rendering fonts on screen
- C) Compressing documents
- D) Encrypting messages

**✅ Correct Answer: A**
**Rationale:** NLP is the workload concerned with understanding and inferring meaning from written language.

---

### Q2: Which task produces a short version of a long document?
- A) Summarization
- B) Tokenization
- C) POS tagging
- D) Language detection

**✅ Correct Answer: A**
**Rationale:** Summarization condenses a document; extractive approaches pick the most relevant sentences.

---

### Q3: PII stands for:
- A) Personally identifiable information
- B) Public internet index
- C) Partial input inference
- D) Primary integer identifier

**✅ Correct Answer: A**
**Rationale:** PII = personally identifiable information — names, addresses, ID numbers, emails, etc.

---

### Q4: Which of these is an example of a named entity?
- A) 'Microsoft' (an organization)
- B) 'quickly' (an adverb)
- C) A comma
- D) A blank line

**✅ Correct Answer: A**
**Rationale:** Named entities are real-world items — organizations, people, places, dates — like 'Microsoft'.

---

### Q5: Key-phrase extraction answers which question about a document?
- A) What are the main topics or talking points?
- B) Who wrote it?
- C) How many bytes is it?
- D) What font does it use?

**✅ Correct Answer: A**
**Rationale:** Key-phrase extraction surfaces the main concepts/terms in a document.

---

### Q6: Which Python package provides TextAnalyticsClient?
- A) azure.ai.textanalytics
- B) numpy
- C) matplotlib
- D) flask

**✅ Correct Answer: A**
**Rationale:** The Azure Language SDK's TextAnalyticsClient comes from the azure.ai.textanalytics library.

---

### Q7: A chatbot deciding a user wants to 'book a flight' from their message is an example of:
- A) Intent prediction
- B) Speech synthesis
- C) Image classification
- D) OCR

**✅ Correct Answer: A**
**Rationale:** Intent prediction — an NLP use case — maps user utterances to intended actions for bots and assistants.

---

### Q8: Which credential object authenticates TextAnalyticsClient with a key?
- A) AzureKeyCredential
- B) StorageSharedKey
- C) X509Certificate
- D) BasicAuthHeader

**✅ Correct Answer: A**
**Rationale:** AzureKeyCredential wraps the resource key; alternatively Microsoft Entra ID credentials can be used.

---

### Q9: Why remove stop words before statistical analysis?
- A) They occur everywhere and add noise, diluting meaningful frequency signals
- B) They contain personal data
- C) They break JSON encoding
- D) They are illegal in some locales

**✅ Correct Answer: A**
**Rationale:** Stop words are high-frequency, low-information words; removing them sharpens topic and classification signals.

---

### Q10: Which output would you expect from analyzing: 'Priya from Contoso visited Delhi on March 3rd' with NER?
- A) Priya (person), Contoso (organization), Delhi (location), March 3rd (date)
- B) A sentiment score of 0.99
- C) A French translation
- D) A list of stop words

**✅ Correct Answer: A**
**Rationale:** NER labels each detected entity with a category — person, organization, location, date.

---

### Q11: Which statement about general-purpose models for text analysis is TRUE?
- A) They can be prompted to do key-term extraction, entity recognition, sentiment, and summarization
- B) They can only chat casually
- C) They always return confidence scores per entity
- D) They guarantee identical output per call

**✅ Correct Answer: A**
**Rationale:** LLMs can be prompted into any of these tasks flexibly — the trade-off is probabilistic, unstructured output.

---

### Q12: A sentiment API returns 'mixed' with document- and sentence-level scores. What advantage does this structured output give a production system?
- A) Programmatic routing/thresholds without parsing free text
- B) Prettier emails
- C) Lower network latency only
- D) It removes the need for storage

**✅ Correct Answer: A**
**Rationale:** Structured results (labels + scores) can be consumed directly by code — no fragile parsing of natural-language answers.

---

### Q13: In pre-processing, what does lemmatization do that simple stemming may not?
- A) Maps words to proper dictionary roots (e.g., 'better' → 'good') rather than just trimming suffixes
- B) Removes punctuation
- C) Counts word frequency
- D) Translates the text

**✅ Correct Answer: A**
**Rationale:** Lemmatization uses vocabulary/morphology to find true base forms; stemming just chops endings.

---

### Q14: Which choice pairs a use case with the RIGHT approach?
- A) Regulated PII redaction → Azure Language; exploratory review analysis → general-purpose model
- B) Regulated PII redaction → chat playground; production pipeline → manual notes
- C) Deterministic pipeline → maximum temperature LLM
- D) Confidence scores → free-form prose

**✅ Correct Answer: A**
**Rationale:** Regulated/deterministic → Azure Language; flexible/exploratory → prompt an LLM.

---

### Q15: The Word2Vec family of techniques is associated with:
- A) Learning semantic vector representations (embeddings) of words
- B) Counting term frequency only
- C) Optical character recognition
- D) Audio waveform encoding

**✅ Correct Answer: A**
**Rationale:** Word2Vec pioneered learned word embeddings — semantic vectors — as opposed to count-based statistics like TF-IDF.

---

### Q16: A news site auto-categorizes articles into Sports/Politics/Tech using frequencies of hand-picked indicator words. Which classic technique is this?
- A) Bag-of-Words classification
- B) TextRank
- C) Prosody generation
- D) Semantic segmentation

**✅ Correct Answer: A**
**Rationale:** Correlating frequencies of a word set with categories is Bag-of-Words classification.

---

### Q17: The same 500 support emails are analyzed nightly; results feed automated dashboards, and auditors demand reproducibility. A developer proposes GPT prompting. What is the STRONGEST objection?
- A) Probabilistic generation may give different results between runs, breaking reproducibility
- B) LLMs cannot read emails
- C) GPT models return XML only
- D) Dashboards cannot display LLM output

**✅ Correct Answer: A**
**Rationale:** For audited, repeatable pipelines the documented trade-off of LLMs — run-to-run variation — is disqualifying; use Azure Language.

---

### Q18: Which line correctly creates an Azure Language client?
- A) client = TextAnalyticsClient(endpoint=ep, credential=AzureKeyCredential(key))
- B) client = TextAnalyticsClient(key=ep, url=key)
- C) client = OpenAI(model='language')
- D) client = AzureKeyCredential(endpoint)

**✅ Correct Answer: A**
**Rationale:** TextAnalyticsClient takes the service endpoint and a credential object (key or Entra ID).

---

### Q19: After running recognize_pii_entities on 'Call me at 555-0142', what should the redacted text look like?
- A) 'Call me at ************' with the phone number masked
- B) The original text unchanged
- C) An empty string
- D) A rhyming poem

**✅ Correct Answer: A**
**Rationale:** The PII API returns redacted text with detected PII values masked, plus the entity list and confidence scores.

---

### Q20: A team building an agent wants it to call Azure Language for entity extraction mid-conversation. Which integration and protocol are involved?
- A) Connect the Azure Language in Foundry Tools MCP server as an agent tool (Model Context Protocol)
- B) Give the agent the resource's connection string in the prompt
- C) Export entities to CSV manually
- D) Retrain the base model

**✅ Correct Answer: A**
**Rationale:** The MCP server exposes Azure Language capabilities as callable tools for agents — with configured resource and credentials.

---

### Q21: Why does TF-IDF beat raw TF for search indexing across a large corpus?
- A) It highlights terms that characterize a document rather than terms common to every document
- B) It runs on GPUs only
- C) It ignores rare words entirely
- D) It requires no tokenization

**✅ Correct Answer: A**
**Rationale:** IDF suppresses corpus-wide common terms and boosts distinctive ones — better matching of documents to distinctive queries.

---

### Q22: Which analysis flow correctly describes semantic similarity search over documents?
- A) Embed documents and query as vectors, then compare vector similarity
- B) Sort documents alphabetically and binary-search
- C) Count commas per paragraph
- D) Hash each file with SHA-256 and compare digests

**✅ Correct Answer: A**
**Rationale:** Semantic search embeds text into vector space; similar meanings yield nearby vectors regardless of exact wording.

---

### Q23: A junior dev prompts an LLM: 'Extract entities as JSON.' Sometimes the reply includes commentary that breaks the JSON parser. Which mitigation aligns with course guidance?
- A) Use the Azure Language SDK for guaranteed structured output in the pipeline
- B) Parse harder with regex forever
- C) Ban JSON
- D) Raise temperature so it varies more

**✅ Correct Answer: A**
**Rationale:** When structure matters, use the deterministic service; LLM output structure is not guaranteed.

---

### Q24: Which scenario matches Text Analytics for Health rather than generic NER?
- A) Extracting drug names, dosages, and diagnoses from discharge summaries
- B) Finding city names in travel blogs
- C) Detecting French vs Spanish
- D) Counting adjectives

**✅ Correct Answer: A**
**Rationale:** The health capability specializes in clinical entities (medications, dosages, conditions) that generic NER handles poorly.

---

### Q25: Your pipeline detects language, then routes English texts to sentiment and others to translation. What structured fields from detect_language make the routing reliable?
- A) ISO 639-1 code and confidence score
- B) The document's word count
- C) The service region
- D) The API version string

**✅ Correct Answer: A**
**Rationale:** The ISO code identifies the language programmatically, and the confidence score lets you set a routing threshold.

---

### Q26: An exam item claims: 'The client object stores the text to be analyzed.' Why is this WRONG?
- A) The client wraps connection + credentials; documents are passed per method call
- B) Clients store text but only in XML
- C) It is actually correct
- D) Clients can only store one sentence

**✅ Correct Answer: A**
**Rationale:** The client is the communication object; text goes in as arguments to methods like recognize_entities(documents=...).

---

### Q27: A social team wants trend detection across millions of posts daily with consistent metrics month over month. Rank the PRIMARY requirement and the matching tech:
- A) Determinism at scale → Azure Language batch analysis
- B) Creativity → maximum-temperature LLM
- C) Human review of each post
- D) Manual spreadsheets

**✅ Correct Answer: A**
**Rationale:** Consistent longitudinal metrics require deterministic, scalable analysis — Azure Language's strength.

---

### Q28: Which statement about combining tasks in ONE LLM call is TRUE?
- A) An LLM prompt can request sentiment, key phrases, and a summary together; dedicated APIs would need separate calls
- B) Dedicated APIs always combine tasks automatically
- C) LLMs may only do one task per day
- D) Combining tasks requires MCP

**✅ Correct Answer: A**
**Rationale:** Multi-task-in-one-call flexibility is a documented advantage of general-purpose models.

---

### Q29: For 'article categorization on web sites and feeds', which pair of techniques could implement it, simplest first?
- A) Bag-of-Words classification, or embedding-based semantic classification
- B) OCR then diffusion
- C) Prosody then phoneme mapping
- D) Bounding boxes then segmentation

**✅ Correct Answer: A**
**Rationale:** Categorization can be count-based (BoW) or semantic (embeddings); the other options belong to speech/vision workloads.

---

### Q30: A colleague says 'embeddings duplicate tokens in multiple languages.' Correct the statement.
- A) Embeddings are vector representations capturing semantic token relationships in multiple dimensions — not duplicates or translations
- B) The statement is accurate
- C) Embeddings are stop-word lists
- D) Embeddings are just longer tokens

**✅ Correct Answer: A**
**Rationale:** Embeddings encode meaning as multidimensional vectors; they neither duplicate nor translate tokens.

---

## Quiz 4A — AI Speech

### Q1: Speech-to-text (STT) is also known as:
- A) Speech recognition
- B) Speech synthesis
- C) Prosody generation
- D) Language modeling

**✅ Correct Answer: A**
**Rationale:** STT = speech recognition: audio input becomes text output. TTS = speech synthesis: text becomes audio.

---

### Q2: What are phonemes?
- A) The smallest units of sound in speech
- B) AI models that generate audio
- C) Artifacts removed during noise clean-up
- D) Musical notation symbols

**✅ Correct Answer: A**
**Rationale:** Phonemes are the smallest sound units of word-parts — the units acoustic models map audio features to.

---

### Q3: Which input sources can speech recognition accept?
- A) Audio files, streams, or a microphone
- B) Only WAV files
- C) Only landline telephones
- D) Text documents

**✅ Correct Answer: A**
**Rationale:** STT input can come from an audio file, an audio stream, or live microphone capture.

---

### Q4: Text-to-speech outputs what?
- A) An audio waveform of spoken speech
- B) A text transcription
- C) A JSON entity list
- D) An image

**✅ Correct Answer: A**
**Rationale:** TTS converts text into an audio waveform — synthesized speech.

---

### Q5: Automatic subtitles for videos are an accessibility use case of:
- A) Speech-to-text
- B) Text-to-speech
- C) Image classification
- D) OCR

**✅ Correct Answer: A**
**Rationale:** Captions/subtitles transcribe spoken audio — a speech recognition (STT) use case.

---

### Q6: A screen reader that voices on-screen text aloud uses:
- A) Text-to-speech
- B) Speech-to-text
- C) Named entity recognition
- D) Semantic segmentation

**✅ Correct Answer: A**
**Rationale:** Screen readers synthesize speech from text — TTS.

---

### Q7: Which Foundry feature lets you try real-time transcription without writing code?
- A) The Foundry portal speech playground
- B) The billing page
- C) Azure CLI
- D) Resource tags

**✅ Correct Answer: A**
**Rationale:** The portal playground lets you experiment with speech-to-text (and text-to-speech voices) interactively.

---

### Q8: Which is a common TTS use case?
- A) Notifications and alerts read aloud
- B) Meeting transcription
- C) Voice-mail transcription
- D) Subtitling a lecture

**✅ Correct Answer: A**
**Rationale:** TTS speaks text: alerts, e-learning narration, chatbot voices. The other three transcribe audio (STT).

---

### Q9: What happens during the pre-processing stage of speech recognition?
- A) Feature vectors are extracted from the audio waveform for modeling
- B) Background noise is added to the signal
- C) The audio is converted to a video format
- D) The text is translated

**✅ Correct Answer: A**
**Rationale:** Pre-processing featurizes the signal — intensity at specific frequencies becomes feature vectors. Noise is removed, never added.

---

### Q10: In speech recognition, what does the acoustic model do?
- A) Maps audio features to phonemes
- B) Predicts word sequences
- C) Formats the final text
- D) Captures the analog signal

**✅ Correct Answer: A**
**Rationale:** The acoustic model converts feature vectors into phonemes; the language model then predicts the word sequence.

---

### Q11: In speech recognition, what does the language model contribute?
- A) It predicts the most probable word sequence from the phonemes
- B) It amplifies quiet audio
- C) It selects a synthetic voice
- D) It compresses the waveform

**✅ Correct Answer: A**
**Rationale:** Given candidate phoneme interpretations, the language model picks the likeliest words — 'nice to be here' over 'nights two bee hear'.

---

### Q12: Why is prosody generation important in speech synthesis?
- A) It ensures natural pronunciation and speech cadence
- B) It maximizes output volume
- C) It translates speech for the listener
- D) It encrypts the audio

**✅ Correct Answer: A**
**Rationale:** Prosody adjusts pitch, timbre, and rhythm so synthesized speech sounds natural — not louder or translated.

---

### Q13: During TTS normalization, '3:00pm' typically becomes:
- A) 'three o'clock P M'
- B) '3 3 3'
- C) 'fifteen hundred hours' always
- D) It is deleted

**✅ Correct Answer: A**
**Rationale:** Normalization expands abbreviations and numbers into speakable words before phoneme mapping.

---

### Q14: Which SDK class configures the key and endpoint for Azure Speech?
- A) SpeechConfig
- B) AudioConfig
- C) SpeechRecognizer
- D) VoiceProfile

**✅ Correct Answer: A**
**Rationale:** SpeechConfig(subscription=key, endpoint=...) holds the connection settings; AudioConfig selects the audio source/sink.

---

### Q15: In the Speech SDK, AudioConfig(filename='msg.wav') specifies:
- A) The audio source to transcribe (a file rather than the microphone)
- B) The output voice name
- C) The billing account
- D) The text to synthesize

**✅ Correct Answer: A**
**Rationale:** AudioConfig points the recognizer at its audio source — here a .wav file instead of default microphone input.

---

### Q16: Arrange the speech recognition pipeline correctly:
- A) Audio capture → pre-processing → acoustic modeling → language modeling → post-processing
- B) Language modeling → audio capture → acoustic modeling → pre-processing → post-processing
- C) Pre-processing → audio capture → post-processing → acoustic modeling → language modeling
- D) Acoustic modeling → language modeling → audio capture → pre-processing → post-processing

**✅ Correct Answer: A**
**Rationale:** Capture the waveform, extract features, map features to phonemes (acoustic), choose probable words (language), then normalize/format the text.

---

### Q17: Arrange the speech synthesis pipeline correctly:
- A) Source text → normalization → linguistic modeling → prosody generation → waveform encoding
- B) Waveform encoding → prosody → normalization → linguistic modeling → text
- C) Normalization → waveform encoding → prosody → source text → linguistic modeling
- D) Source text → prosody → normalization → waveform → phonemes

**✅ Correct Answer: A**
**Rationale:** Text is normalized, mapped to phonemes (linguistic modeling), given natural prosody, then encoded as an audio waveform.

---

### Q18: A transcription result reads 'weather four cast' instead of 'weather forecast'. Which pipeline component most directly failed?
- A) The language model — it chose an improbable word sequence from the phonemes
- B) The waveform encoder
- C) Prosody generation
- D) The microphone driver's color profile

**✅ Correct Answer: A**
**Rationale:** Homophone confusion is the language model's job to resolve — it should prefer the most probable word sequence.

---

### Q19: Why would a developer use the Azure Speech SDK instead of only the Foundry playground?
- A) The SDK lets speech recognition be embedded directly into application code
- B) The SDK replaces the need for speech models
- C) The playground forbids audio files
- D) SDKs work without endpoints

**✅ Correct Answer: A**
**Rationale:** The playground is for experimentation; production apps integrate speech via the SDK, which still calls deployed service endpoints.

---

### Q20: In TTS code, no AudioConfig was created, yet synthesis works. Why?
- A) Default speaker output requires no AudioConfig; you'd add one to write audio to a file
- B) AudioConfig is deprecated
- C) The model guessed the output device
- D) TTS never uses audio configuration

**✅ Correct Answer: A**
**Rationale:** Omitting AudioConfig sends synthesized audio to the default speaker; file output needs an explicit AudioConfig.

---

### Q21: Which property selects the synthetic voice in the Speech SDK?
- A) speech_config.speech_synthesis_voice_name
- B) audio_config.filename
- C) recognizer.language_model
- D) speech_config.rate_limit

**✅ Correct Answer: A**
**Rationale:** You assign a voice (e.g., a neural voice name) to speech_synthesis_voice_name on the SpeechConfig.

---

### Q22: What does recognize_once_async().get() return in the STT pattern?
- A) A result object whose .text property holds the transcription
- B) A raw waveform
- C) A list of stop words
- D) The service invoice

**✅ Correct Answer: A**
**Rationale:** The async recognition returns a result; result.text contains the recognized transcript.

---

### Q23: What does the Azure Text-to-Speech SDK handle on the developer's behalf?
- A) Authentication, network communication, and audio generation
- B) Only voice selection
- C) Permanent audio archiving in Azure Storage
- D) Grammar correction of the input text

**✅ Correct Answer: A**
**Rationale:** The SDK abstracts auth, transport, and synthesis; storage/archiving is the app's own concern.

---

### Q24: Which Voice Live capabilities distinguish it from basic STT+TTS chaining?
- A) Continuous conversation flow with interruption handling and background-noise reduction, tied to a generative model with instructions and tools
- B) Higher audio bitrate only
- C) Free unlimited usage
- D) It removes the need for microphones

**✅ Correct Answer: A**
**Rationale:** Voice Live provides real-time conversational speech with a generative model — interruptions and noise handling included.

---

### Q25: What role does the Voice Live Python SDK (azure-ai-voicelive) play?
- A) It opens a real-time connection, streams audio, and handles spoken responses and interruptions
- B) It stores recordings permanently in Azure Storage
- C) It replaces the device's microphone and speakers
- D) It trains custom voices offline

**✅ Correct Answer: A**
**Rationale:** The SDK manages the live bidirectional audio session for voice agents — streaming, responses, interruptions.

---

### Q26: A hospital wants clinicians to dictate notes hands-free into the EHR. Map the need to the right capability:
- A) Speech-to-text (audio note-taking use case)
- B) Text-to-speech alerts
- C) Semantic segmentation
- D) Diffusion image generation

**✅ Correct Answer: A**
**Rationale:** Dictation → transcription → STT; audio note-taking in healthcare is a listed STT use case.

---

### Q27: Which agent-integration option exposes speech capabilities to Foundry agents?
- A) The Azure Speech in Foundry Tools MCP server
- B) A CSV export
- C) A VPN gateway
- D) Editing the agent's temperature

**✅ Correct Answer: A**
**Rationale:** Like Azure Language, Azure Speech offers an MCP server so agents can use speech recognition/synthesis as tools.

---

### Q28: 'The pre-processing stage converts audio to .wmv format.' What is wrong with this claim?
- A) Pre-processing extracts feature vectors from the waveform; .wmv is a video container, not a recognition step
- B) Nothing — it is accurate
- C) .wmv is used but only for phone calls
- D) Pre-processing happens after language modeling

**✅ Correct Answer: A**
**Rationale:** Recognition pre-processing is featurization of the signal, not media-format conversion.

---

### Q29: A voice-banking app must speak balances aloud AND accept spoken commands, in one continuous, interruptible conversation. Which single Foundry capability fits BEST?
- A) Voice Live (real-time speech with a generative model)
- B) Batch transcription API
- C) The image playground
- D) TF-IDF

**✅ Correct Answer: A**
**Rationale:** Bidirectional, continuous, interruptible voice conversation is exactly the Voice Live scenario — richer than separate STT/TTS calls.

---

### Q30: Why does TTS normalization expand 'Dr.' to 'doctor' BEFORE phoneme mapping?
- A) Phoneme mapping needs speakable words; abbreviations would otherwise be spelled out or mispronounced
- B) To save storage
- C) Because phonemes only exist for medical terms
- D) To encrypt titles

**✅ Correct Answer: A**
**Rationale:** Linguistic modeling maps normalized, speakable text to phonemes; un-expanded abbreviations and digits would map incorrectly.

---

## Quiz 4B — AI Speech (Round 2)

### Q1: Which pair correctly matches abbreviation to direction?
- A) STT = audio → text; TTS = text → audio
- B) STT = text → audio; TTS = audio → text
- C) Both convert text to audio
- D) Both convert audio to text

**✅ Correct Answer: A**
**Rationale:** Speech-to-text transcribes audio; text-to-speech synthesizes audio from text.

---

### Q2: Meeting and interview transcription is a use case of:
- A) Speech recognition
- B) Speech synthesis
- C) Image generation
- D) Field extraction

**✅ Correct Answer: A**
**Rationale:** Transcription converts spoken audio into text — speech recognition (STT).

---

### Q3: Video-game characters speaking dynamic dialogue lines use:
- A) Text-to-speech
- B) Speech-to-text
- C) OCR
- D) POS tagging

**✅ Correct Answer: A**
**Rationale:** Generating character voices from text is a listed TTS entertainment/media use case.

---

### Q4: What does a digital waveform represent in speech processing?
- A) The captured audio signal in digital form
- B) The text transcript
- C) The GPU temperature
- D) A JSON schema

**✅ Correct Answer: A**
**Rationale:** Audio capture converts the analog sound signal into a digital waveform for processing.

---

### Q5: The Python package for the Azure Speech SDK is imported as:
- A) azure.cognitiveservices.speech
- B) azure.storage.blob
- C) openai.audio
- D) numpy.speech

**✅ Correct Answer: A**
**Rationale:** The Speech SDK is azure.cognitiveservices.speech (commonly aliased as speechsdk).

---

### Q6: Which SDK object actually performs speech-to-text?
- A) SpeechRecognizer
- B) SpeechSynthesizer
- C) AudioConfig
- D) AzureKeyCredential

**✅ Correct Answer: A**
**Rationale:** SpeechRecognizer (built from SpeechConfig + AudioConfig) performs recognition; SpeechSynthesizer performs TTS.

---

### Q7: A voice-activated assistant that hears 'What's the weather?' first applies:
- A) Speech recognition to transcribe the question
- B) Speech synthesis
- C) Image classification
- D) Data normalization

**✅ Correct Answer: A**
**Rationale:** The spoken question must be recognized (STT) before any language understanding or response.

---

### Q8: Which method speaks a string through the synthesizer?
- A) speak_text_async('...').get()
- B) recognize_once_async().get()
- C) detect_language()
- D) responses.create()

**✅ Correct Answer: A**
**Rationale:** SpeechSynthesizer.speak_text_async() synthesizes and plays/writes the audio.

---

### Q9: Which stage differs MOST between recognition and synthesis pipelines?
- A) Recognition ends by producing text; synthesis ends by encoding an audio waveform
- B) Both end with waveform encoding
- C) Both start from text
- D) Neither uses phonemes

**✅ Correct Answer: A**
**Rationale:** They are mirror images: STT goes audio→features→phonemes→words→text; TTS goes text→phonemes→prosody→waveform.

---

### Q10: Phonemes appear in BOTH pipelines. In synthesis, they are produced by:
- A) Linguistic modeling from normalized text
- B) The acoustic model from audio features
- C) The waveform encoder
- D) The billing meter

**✅ Correct Answer: A**
**Rationale:** In TTS, linguistic modeling maps normalized text to phonemes. (In STT, the acoustic model maps audio features to phonemes.)

---

### Q11: Speaker diarization in the transcription playground refers to:
- A) Distinguishing which speaker said what
- B) Louder playback
- C) Emoji insertion
- D) Language translation

**✅ Correct Answer: A**
**Rationale:** Diarization separates and labels different speakers in the audio — useful for meeting transcripts.

---

### Q12: Language identification in speech transcription is used to:
- A) Detect which language is being spoken so the right recognition model applies
- B) Score grammar
- C) Encrypt audio
- D) Slow down playback

**✅ Correct Answer: A**
**Rationale:** Language ID (at start or continuous) determines the spoken language for correct transcription.

---

### Q13: For a notification service that reads alerts aloud on servers with no sound card, the synthesized audio should go to:
- A) A file output via an explicit AudioConfig
- B) The default speaker
- C) The microphone
- D) The tenant portal

**✅ Correct Answer: A**
**Rationale:** With no speaker, configure AudioConfig for file (or stream) output rather than default speaker.

---

### Q14: Which statement about the speech playground vs SDK is TRUE?
- A) Playground = interactive experimentation; SDK = integration into applications; both use the same underlying service
- B) The playground is required before every SDK call
- C) The SDK cannot transcribe files
- D) The playground writes production code automatically

**✅ Correct Answer: A**
**Rationale:** They are two consumption modes of the same Azure Speech capabilities.

---

### Q15: In Voice Live, 'background noise reduction' matters because:
- A) Real-world conversations happen in noisy environments and recognition quality would otherwise degrade
- B) It makes billing cheaper
- C) It converts noise into words
- D) It is required for JSON output

**✅ Correct Answer: A**
**Rationale:** Noise robustness keeps continuous conversation usable outside quiet studios.

---

### Q16: A caller says 'I want to recognize speech'. The system transcribes 'I want to wreck a nice beach'. Which two stages are involved in fixing this, and which is decisive?
- A) Acoustic model produces phonemes; the language model is decisive in selecting the probable word sequence
- B) Waveform encoding then prosody, prosody decisive
- C) Normalization then POS tagging, POS decisive
- D) Region detection then character classification, OCR decisive

**✅ Correct Answer: A**
**Rationale:** The classic homophone example: phonemes are ambiguous; the language model must choose the statistically probable phrase.

---

### Q17: Your STT code passes an endpoint but transcription always uses the microphone instead of the intended file. Which object was misconfigured?
- A) AudioConfig — it must specify filename to use a file source
- B) SpeechConfig — endpoints select files
- C) The synthesizer voice name
- D) The palette color

**✅ Correct Answer: A**
**Rationale:** AudioConfig selects the audio source; without filename it defaults to the microphone.

---

### Q18: Rank the correct SDK object construction order for file-based STT:
- A) SpeechConfig → AudioConfig → SpeechRecognizer → recognize_once_async()
- B) SpeechRecognizer → SpeechConfig → AudioConfig → get()
- C) AudioConfig → recognize → SpeechConfig → print
- D) recognize_once_async → SpeechRecognizer → SpeechConfig

**✅ Correct Answer: A**
**Rationale:** Configure the service (SpeechConfig), the source (AudioConfig), build the recognizer, then invoke recognition.

---

### Q19: A synthesized voice sounds robotic and flat with odd pauses. Which pipeline stage should be improved?
- A) Prosody generation — pitch, rhythm and timbre create natural cadence
- B) Audio capture
- C) Text region detection
- D) The language model of STT

**✅ Correct Answer: A**
**Rationale:** Flat, unnatural cadence is a prosody problem — the stage responsible for natural-sounding articulation.

---

### Q20: Why does the TTS pipeline normalize numbers BEFORE linguistic modeling, using '2026' as an example?
- A) '2026' must become words ('twenty twenty-six') so phoneme mapping has speakable input
- B) Numbers are removed from all speech
- C) Digits map to a single phoneme each
- D) Normalization happens last

**✅ Correct Answer: A**
**Rationale:** Linguistic modeling maps words to phonemes; digits must first be expanded into their spoken word form.

---

### Q21: A contact-center bot must let callers interrupt ('barge in') mid-answer, like a human agent. Which capability handles this natively?
- A) Voice Live — continuous conversation flow with interruption support
- B) Batch STT
- C) Playground screenshots
- D) AudioConfig file output

**✅ Correct Answer: A**
**Rationale:** Interruption handling in continuous conversation is a core Voice Live feature.

---

### Q22: Which claim about the Speech SDK is FALSE?
- A) It permanently archives all synthesized audio in Azure Storage automatically
- B) It authenticates using a key and endpoint
- C) It supports both microphone and file input
- D) It can output speech to the default speaker

**✅ Correct Answer: A**
**Rationale:** The SDK does not auto-archive audio; storage is your application's responsibility.

---

### Q23: A university records lectures and wants same-day searchable text plus spoken summaries for visually impaired students. Which capability pair applies?
- A) STT for transcription + TTS for spoken summaries
- B) TTS twice
- C) STT twice
- D) OCR + segmentation

**✅ Correct Answer: A**
**Rationale:** Transcription is speech recognition; reading summaries aloud is speech synthesis — both accessibility use cases.

---

### Q24: Voice Live sessions pair speech with 'a generative AI model that has instructions and tools'. What does this enable beyond plain transcription?
- A) The agent can reason about requests, follow its defined behavior, and act via tools — all by voice
- B) Higher audio sample rates
- C) Automatic invoicing
- D) GPU passthrough

**✅ Correct Answer: A**
**Rationale:** Voice Live is agentic: the model reasons and acts (tools), with speech as the interface.

---

### Q25: Which real-world factor does feature extraction (pre-processing) make recognition robust to?
- A) Variations in raw signal so the model sees consistent frequency-intensity features
- B) Different invoice layouts
- C) Font changes
- D) JSON schema drift

**✅ Correct Answer: A**
**Rationale:** Featurization converts variable raw audio into normalized feature vectors the acoustic model can handle.

---

### Q26: A demo needs the SAME sentence spoken in two different neural voices for comparison. What changes between the two runs?
- A) speech_config.speech_synthesis_voice_name
- B) The subscription key
- C) The resource group
- D) The recognizer object

**✅ Correct Answer: A**
**Rationale:** The selected voice is a SpeechConfig property; the rest of the pipeline stays identical.

---

### Q27: Which exam-style statement about STT vs TTS use cases is CORRECT?
- A) Customer-support call transcription is STT; reading chatbot replies aloud is TTS
- B) Both are TTS
- C) Both are STT
- D) Neither involves audio

**✅ Correct Answer: A**
**Rationale:** Transcribing calls converts audio→text (STT); voicing replies converts text→audio (TTS).

---

### Q28: An app streams a caller's audio and needs partial results while they are still talking. Which recognition style is implied?
- A) Continuous/streaming recognition rather than single-shot recognize-once
- B) Batch overnight processing
- C) Manual typing
- D) Image OCR

**✅ Correct Answer: A**
**Rationale:** recognize_once handles one utterance; streaming/continuous recognition delivers live partial results.

---

### Q29: Why do STT systems post-process ('normalize and format') recognized text?
- A) Raw word sequences need punctuation, casing, and formatting to be readable ('nice to be here' → 'Nice to be here!')
- B) To re-add background noise
- C) To convert text back to phonemes
- D) To compress the transcript

**✅ Correct Answer: A**
**Rationale:** Post-processing turns the raw predicted word sequence into clean, formatted text.

---

### Q30: A team argues the playground alone is enough for their production IVR system. What is the STRONGEST counter-argument?
- A) Production systems must call the service from application code — that requires the SDK (or API), not a portal UI
- B) Playgrounds are usually offline
- C) Playgrounds cannot play audio
- D) IVR systems don't use speech

**✅ Correct Answer: A**
**Rationale:** The playground is an experimentation surface; integration into applications requires the SDK/API.

---

## Quiz 5A — Computer Vision

### Q1: Computer vision fundamentally analyzes and manipulates what kind of values?
- A) Pixels
- B) File names
- C) Timestamps in metadata
- D) Folder paths

**✅ Correct Answer: A**
**Rationale:** Vision works on pixel values — numeric representations of the image itself, not metadata.

---

### Q2: Assigning a single label such as 'banana' to an entire image is called:
- A) Image classification
- B) Object detection
- C) Semantic segmentation
- D) Prosody generation

**✅ Correct Answer: A**
**Rationale:** Classification labels the whole image with one class.

---

### Q3: Which vision task returns a bounding box and class for each object found?
- A) Object detection
- B) Image classification
- C) Contextual analysis
- D) Tokenization

**✅ Correct Answer: A**
**Rationale:** Object detection localizes each object with a box plus its class label.

---

### Q4: Which task classifies every individual pixel in an image?
- A) Semantic segmentation
- B) Image classification
- C) Key-phrase extraction
- D) Language detection

**✅ Correct Answer: A**
**Rationale:** Semantic segmentation gives pixel-level classification — exact object outlines.

---

### Q5: Producing the caption 'a person eating an apple' from a photo is an example of:
- A) Contextual image analysis
- B) Stemming
- C) Speaker diarization
- D) Field mapping

**✅ Correct Answer: A**
**Rationale:** Contextual image analysis describes the scene in natural language.

---

### Q6: A model that can accept both an image and a text question in one prompt is called:
- A) Multimodal
- B) Monolingual
- C) Deterministic
- D) Recursive

**✅ Correct Answer: A**
**Rationale:** Multimodal models understand and work with more than one type of data, such as text and images.

---

### Q7: Which model family generates images from text prompts?
- A) Diffusion models
- B) Decision trees
- C) Regression models
- D) Bag-of-Words

**✅ Correct Answer: A**
**Rationale:** Diffusion models power modern text-to-image generation.

---

### Q8: In Foundry's catalog, which example model family handles video generation?
- A) sora models
- B) gpt-image models
- C) text-embedding models
- D) whisper-like STT models

**✅ Correct Answer: A**
**Rationale:** OpenAI sora models are the video-generation example; gpt-image models generate images.

---

### Q9: What is the primary role of filters in a CNN used for image classification?
- A) Extracting numeric features from images for the neural network
- B) Applying cosmetic visual effects
- C) Compressing files for faster upload
- D) Encrypting the image

**✅ Correct Answer: A**
**Rationale:** CNN filters extract feature maps — numeric features — that feed the fully connected layers.

---

### Q10: Which description matches a Vision Transformer (ViT)?
- A) A model that uses attention over image patches to create contextual embeddings
- B) A tool that recolors images
- C) An agent that converts LLMs to vision models
- D) A codec for video compression

**✅ Correct Answer: A**
**Rationale:** ViTs split images into patches, embed them, and apply attention to encode visual relationships.

---

### Q11: What does a CNN output for a classification task?
- A) A probability for each class
- B) A bounding polygon per pixel
- C) A text summary
- D) An audio waveform

**✅ Correct Answer: A**
**Rationale:** The final layer produces class probabilities; the highest probability is the prediction.

---

### Q12: How is a diffusion model trained?
- A) By iteratively adding visual noise to labeled images and learning how the noise changes them
- B) By removing pixels until images vanish
- C) By ranking images alphabetically
- D) By transcribing image captions to audio

**✅ Correct Answer: A**
**Rationale:** Training adds noise step-by-step to described images; generation reverses the process from random pixels.

---

### Q13: In a multimodal prompt via the OpenAI API, images can be supplied as:
- A) URLs or base64-encoded data
- B) Only local file paths
- C) Only TIFF scans
- D) Printed photographs

**✅ Correct Answer: A**
**Rationale:** The content structure accepts image URLs or base64 data URIs.

---

### Q14: Which content structure carries a multimodal request?
- A) A content array mixing input_text and input_image parts
- B) Two separate HTTP verbs
- C) A CSV with two columns
- D) An FTP upload

**✅ Correct Answer: A**
**Rationale:** Multi-part prompts put text and image parts together in one message's content array.

---

### Q15: Cross-modal attention in a ViT serves what purpose?
- A) Combining visual vector space with language vectors to create a multimodal model
- B) Sharpening blurry photos
- C) Reducing GPU memory
- D) Sorting images by size

**✅ Correct Answer: A**
**Rationale:** Cross-modal attention aligns image and text embeddings so the model reasons across both.

---

### Q16: A retailer needs to know WHERE each product sits on a shelf photo and WHAT each product is. Which task fits exactly?
- A) Object detection
- B) Image classification
- C) Contextual captioning
- D) Language detection

**✅ Correct Answer: A**
**Rationale:** Location (bounding box) + identity (class) per object = object detection. Classification would give one label for the whole photo.

---

### Q17: A medical team needs tumor outlines precise to the pixel on scans. Which task do they need?
- A) Semantic segmentation
- B) Object detection
- C) Image classification
- D) Key-phrase extraction

**✅ Correct Answer: A**
**Rationale:** Pixel-exact boundaries require segmentation; detection only yields rectangular boxes.

---

### Q18: Order the CNN classification flow correctly:
- A) Labeled images → filters extract features → feature maps flattened → fully connected network → class probabilities
- B) Class probabilities → filters → labels → flattening
- C) Flattening → labeling → filtering → probabilities → training
- D) Filters → probabilities → labeled images → flattening

**✅ Correct Answer: A**
**Rationale:** Train on labeled images; filters produce feature maps; flatten; classify through dense layers; output per-class probabilities.

---

### Q19: How does image GENERATION work at inference time with a diffusion model?
- A) Start from random pixels and iteratively remove learned noise guided by the description
- B) Copy the closest training image
- C) Ask a CNN to reverse-classify
- D) Sort noise alphabetically

**✅ Correct Answer: A**
**Rationale:** Generation reverses the training process: denoise random pixels toward an image matching the prompt.

---

### Q20: Why is sora video generation exposed as an asynchronous job?
- A) Video generation is resource-intensive and takes time, so you submit and poll rather than wait synchronously
- B) REST cannot return video
- C) Videos require user interaction during rendering
- D) Async is needed for JSON

**✅ Correct Answer: A**
**Rationale:** Long-running, heavy workloads are modeled as async jobs — submit, then poll for completion.

---

### Q21: How do developers programmatically generate images with a Foundry image model?
- A) Send text prompts through the OpenAI Responses API to the deployed image model
- B) Upload prompts via the portal UI only
- C) Call any chat model's endpoint
- D) Email the prompt to support

**✅ Correct Answer: A**
**Rationale:** Image generation is programmatic via the Responses API against your deployed text-to-image model.

---

### Q22: Which finding would tell you a model is NOT multimodal?
- A) It rejects prompts containing an input_image part and accepts only text
- B) It answers in French
- C) It runs in a project
- D) It has a system prompt

**✅ Correct Answer: A**
**Rationale:** A text-only model can't consume image parts; multimodal models accept multiple input types.

---

### Q23: A base64 data URI for a PNG in a multimodal prompt looks like:
- A) data:image/png;base64,<encoded-bytes>
- B) png://base64/data
- C) http://localhost/image.png.b64
- D) base64:image=png

**✅ Correct Answer: A**
**Rationale:** The image_url field accepts either a normal URL or a data URI of the form data:image/png;base64,…

---

### Q24: To FIND image-generation models in the Foundry catalog, you should filter by:
- A) The 'text to image' inference task
- B) The provider's country
- C) Alphabetical order
- D) Price descending only

**✅ Correct Answer: A**
**Rationale:** The catalog is filtered by inference task — 'text to image' for image generation, 'video generation' for video.

---

### Q25: An inspection system must first decide IF a defect exists (whole image), and a second stage must outline the defect precisely. Which task pair is correct?
- A) Classification first, then semantic segmentation
- B) Segmentation first, then captioning
- C) Detection first, then classification of the whole image
- D) Captioning twice

**✅ Correct Answer: A**
**Rationale:** Stage 1 is a whole-image yes/no (classification); stage 2 needs pixel-accurate outlines (segmentation).

---

### Q26: Which statement about ViTs vs CNNs is TRUE?
- A) ViTs process image patches with attention; CNNs slide filters to build feature maps
- B) CNNs use attention; ViTs use filters
- C) Both are identical internally
- D) ViTs cannot do classification

**✅ Correct Answer: A**
**Rationale:** The architectures differ: convolutional filters vs patch embeddings + attention.

---

### Q27: A user uploads a fridge photo and asks 'what can I cook?'. Which capability chain answers this?
- A) A multimodal model analyzes the image and reasons over the recognized items in one prompt
- B) OCR followed by TF-IDF
- C) STT followed by prosody
- D) A diffusion model denoises the fridge

**✅ Correct Answer: A**
**Rationale:** Image-to-text inferencing with a multimodal model handles 'look at this image and answer' scenarios.

---

### Q28: Why does contextual image analysis exceed plain classification for describing scenes?
- A) It produces a natural-language description capturing objects AND their relationships/actions
- B) It is always cheaper
- C) It ignores pixels
- D) It outputs bounding boxes only

**✅ Correct Answer: A**
**Rationale:** Captions like 'a person eating an apple' encode relationships classification labels can't express.

---

### Q29: In ViT step 1, patch embeddings are created from what raw material?
- A) Pixel values of each image patch
- B) The EXIF metadata
- C) The file's checksum
- D) A text dictionary

**✅ Correct Answer: A**
**Rationale:** Patches of the image are converted to embedding vectors from their pixel values.

---

### Q30: A marketing team wants 30 original product-shot variations from one text brief, programmatically, plus one short teaser video. Which model/task pairing is correct?
- A) gpt-image ('text to image') via Responses API for stills; sora ('video generation') as async jobs for the teaser
- B) sora for stills; gpt-image for video
- C) A CNN classifier for both
- D) Azure Language for both

**✅ Correct Answer: A**
**Rationale:** Stills = text-to-image models (gpt-image family); video = video-generation models (sora family), run asynchronously.

---

## Quiz 5B — Computer Vision (Round 2)

### Q1: Which vision task gives the LEAST granular output?
- A) Image classification (one label per image)
- B) Object detection
- C) Semantic segmentation
- D) They are equally granular

**✅ Correct Answer: A**
**Rationale:** Classification labels the whole image; detection localizes objects; segmentation labels every pixel.

---

### Q2: Detecting whether factory workers in CCTV footage wear helmets, and where they are, needs:
- A) Object detection
- B) Sentiment analysis
- C) Speech synthesis
- D) TF-IDF

**✅ Correct Answer: A**
**Rationale:** Locating and classifying people/helmets in frames is object detection.

---

### Q3: A model producing an image from the prompt 'a lighthouse at sunset' is performing:
- A) Image generation
- B) Image classification
- C) OCR
- D) Summarization

**✅ Correct Answer: A**
**Rationale:** Text-to-image generation creates novel images from descriptions.

---

### Q4: gpt-image models in the Foundry catalog belong to which inference task?
- A) Text to image
- B) Video generation
- C) Chat completion
- D) Speech-to-text

**✅ Correct Answer: A**
**Rationale:** gpt-image family models are text-to-image; sora models are video generation.

---

### Q5: Which two data types does a typical multimodal vision prompt combine?
- A) Text and image
- B) Audio and SQL
- C) CSV and XML
- D) Video and firmware

**✅ Correct Answer: A**
**Rationale:** Image-to-text inferencing combines an input_text part with an input_image part.

---

### Q6: What does 'base64-encoded' mean for an image in an API call?
- A) The binary image bytes are represented as text so they can travel inside JSON
- B) The image is reduced to 64 pixels
- C) The image is encrypted
- D) The image is split into 64 tiles

**✅ Correct Answer: A**
**Rationale:** Base64 turns binary data into text characters — JSON-safe transport for the image bytes.

---

### Q7: Which is an example of contextual image analysis output?
- A) 'Two children playing football in a park'
- B) [0.98, 0.01, 0.01]
- C) A bounding box list
- D) A pixel mask

**✅ Correct Answer: A**
**Rationale:** Contextual analysis yields a natural-language scene description.

---

### Q8: Which statement about vision and pixels is TRUE?
- A) Vision algorithms compute over numeric pixel values
- B) Vision reads the picture's filename to decide content
- C) Vision needs printed photos
- D) Vision only works in grayscale

**✅ Correct Answer: A**
**Rationale:** All vision techniques — CNNs, ViTs, diffusion — operate on pixel values.

---

### Q9: In a CNN, what happens to feature maps before classification?
- A) They are flattened and passed to a fully connected network
- B) They are printed
- C) They are converted to phonemes
- D) They are emailed to the trainer

**✅ Correct Answer: A**
**Rationale:** Flattening converts 2-D feature maps into a vector consumed by the dense layers that predict the class.

---

### Q10: During CNN training, what data is required?
- A) Images with known labels
- B) Unlabeled audio
- C) Only text prompts
- D) Spreadsheets of prices

**✅ Correct Answer: A**
**Rationale:** Supervised classification training uses images paired with their known labels.

---

### Q11: What is the FIRST step a ViT applies to an input image?
- A) Splitting it into patches that become embedding vectors
- B) Removing color
- C) Detecting text regions
- D) Adding noise

**✅ Correct Answer: A**
**Rationale:** ViTs tile the image into patches, embedding each from its pixel values.

---

### Q12: 'The advances from ViTs let one model answer questions about pictures.' Which mechanism makes that possible?
- A) Cross-modal attention combining vision and language vector spaces
- B) Larger hard drives
- C) Anti-aliasing
- D) Batch normalization alone

**✅ Correct Answer: A**
**Rationale:** Cross-modal attention aligns visual and language embeddings into one multimodal space.

---

### Q13: A generated image slowly 'emerges' from static-like noise during creation. Which model behavior is being observed?
- A) Diffusion denoising steps
- B) CNN flattening
- C) Bag-of-Words
- D) Beam search

**✅ Correct Answer: A**
**Rationale:** Diffusion generation iteratively removes noise, so intermediate steps look like progressively cleaner images.

---

### Q14: Which API field carries the picture in an OpenAI multimodal request?
- A) image_url inside an input_image content part
- B) audio_config
- C) system_fingerprint
- D) stop_sequences

**✅ Correct Answer: A**
**Rationale:** The input_image content part holds an image_url (real URL or data URI).

---

### Q15: Which task/scenario pairing is WRONG?
- A) Semantic segmentation — counting how many total images are cats
- B) Object detection — locating cars in a parking lot photo
- C) Classification — deciding if an X-ray is normal or abnormal
- D) Contextual analysis — describing a holiday photo

**✅ Correct Answer: A**
**Rationale:** Counting images by overall content is classification applied per image; segmentation is pixel-level labeling.

---

### Q16: An autonomous drone must distinguish road, grass, and water for EVERY point in view to plan landing. Which task and why?
- A) Semantic segmentation — pixel-level class map of the scene
- B) Classification — one label suffices
- C) Detection — boxes are enough
- D) Captioning — text description is enough

**✅ Correct Answer: A**
**Rationale:** Safe landing requires knowing the class of every pixel — segmentation, not boxes or single labels.

---

### Q17: Why can't a plain image CLASSIFIER count the apples in a crate photo?
- A) It outputs one label for the whole image; counting needs per-object localization (detection)
- B) Apples cannot be classified
- C) Classifiers only work on video
- D) Counting requires audio

**✅ Correct Answer: A**
**Rationale:** Counting requires finding each instance — object detection; classification collapses the image to one label.

---

### Q18: Your multimodal request fails: the content array has an input_text part but the picture was pasted as raw binary into the JSON. What is the fix?
- A) Encode the image as base64 (data URI) or host it and pass a URL
- B) Rename the file to .txt
- C) Use FTP
- D) Add more text parts

**✅ Correct Answer: A**
**Rationale:** JSON can't carry raw binary — supply the image as a base64 data URI or a fetchable URL.

---

### Q19: Rank the diffusion TRAINING process correctly:
- A) Take labeled images → add noise step-by-step → learn how noise changes images given their descriptions
- B) Generate random pixels → classify → label
- C) Remove noise from clean images → save weights
- D) Sort images → flatten → caption

**✅ Correct Answer: A**
**Rationale:** Training corrupts described images progressively with noise so the model learns the noise process to reverse later.

---

### Q20: A video-generation job was submitted 10 seconds ago and the client blocks waiting for the MP4 in the HTTP response. What is wrong?
- A) Video jobs are asynchronous — the client should poll the job status until complete
- B) Videos must be requested by email
- C) The MP4 arrives via DNS
- D) Nothing — sora responds instantly

**✅ Correct Answer: A**
**Rationale:** Resource-intensive video generation is a submit-then-poll workflow, not a synchronous call.

---

### Q21: Which capability list belongs to MULTIMODAL models (vs single-modality)?
- A) Answering questions about an uploaded photo, captioning scenes, reasoning over image + text together
- B) Only transcribing audio
- C) Only tokenizing text
- D) Only compressing files

**✅ Correct Answer: A**
**Rationale:** Multimodal models reason across data types — image+text prompts, captions, visual Q&A.

---

### Q22: A quality-control lead asks why the CNN reports 'defect: 0.83'. What does the number represent?
- A) The predicted probability for the 'defect' class from the network's output layer
- B) 83 defects were found
- C) 83% of pixels are dark
- D) The image is 83% compressed

**✅ Correct Answer: A**
**Rationale:** CNN classifiers output per-class probabilities; 0.83 is the model's confidence in the 'defect' class.

---

### Q23: Which pipeline choice matches 'generate marketing stills programmatically at scale'?
- A) Deploy a text-to-image model and call it via the OpenAI Responses API from code
- B) Manually use the playground for each image
- C) Train a CNN from scratch
- D) Use the speech SDK

**✅ Correct Answer: A**
**Rationale:** Scale = code: deployed image model + Responses API. The playground is manual experimentation.

---

### Q24: An exam item asks the difference between DETECTION output and SEGMENTATION output for the same street photo. Correct answer:
- A) Detection: labeled bounding boxes per object; segmentation: a class for every pixel including exact outlines
- B) They output identical structures
- C) Detection outputs pixel masks; segmentation outputs boxes
- D) Both output captions

**✅ Correct Answer: A**
**Rationale:** Boxes vs pixel masks is the canonical distinction.

---

### Q25: Which factor explains why ViT-based multimodal models emerged AFTER text transformers?
- A) The transformer's attention mechanism was extended from language tokens to image patches, then linked across modalities
- B) Cameras were invented later
- C) Pixels were only standardized recently
- D) CNNs banned attention

**✅ Correct Answer: A**
**Rationale:** ViTs adapt the proven attention architecture to vision, and cross-modal attention then unifies the two spaces.

---

### Q26: A teacher uploads a hand-drawn physics diagram and asks the model to explain the forces shown. Which THREE capabilities combine?
- A) Multimodal image understanding, language reasoning, and generation of an explanatory answer
- B) OCR, FTP, and DNS
- C) Segmentation, diarization, and prosody
- D) Detection, invoicing, and tagging

**✅ Correct Answer: A**
**Rationale:** Visual understanding + reasoning + text generation is the multimodal Q&A pattern.

---

### Q27: Why might a team choose an image URL over base64 in production prompts?
- A) URLs keep request payloads small; base64 inflates the JSON body size
- B) URLs are more colorful
- C) Base64 is deprecated
- D) URLs bypass authentication

**✅ Correct Answer: A**
**Rationale:** Base64 encoding grows payloads ~33%; hosting the image and passing a URL keeps requests lean.

---

### Q28: An image-generation deployment must NOT produce photorealistic images of real politicians. Where should this restriction live?
- A) In the deployment's guardrails (responsible AI policies), reinforced by app-level checks
- B) In the resource group name
- C) In the billing tier
- D) In the temperature parameter

**✅ Correct Answer: A**
**Rationale:** Content restrictions are enforced through responsible-AI guardrails on the deployment, plus application safeguards.

---

### Q29: Which statement about image generation randomness is TRUE?
- A) The same prompt can yield different images because generation starts from random noise
- B) The same prompt always yields the identical image
- C) Randomness comes from the file name
- D) Only videos are random

**✅ Correct Answer: A**
**Rationale:** Diffusion starts from random pixels, so each run of the same prompt can produce a different valid image.

---

### Q30: A museum app should let visitors photograph any exhibit and receive an engaging spoken description. Chain the correct capabilities in order:
- A) Multimodal image analysis → text description → text-to-speech audio
- B) TTS → STT → OCR
- C) Segmentation → invoicing → detection
- D) Diffusion → denoising → classification

**✅ Correct Answer: A**
**Rationale:** Understand the photo (multimodal), generate the description (text), then voice it (TTS).

---

## Quiz 6A — Information Extraction

### Q1: Which statement accurately defines AI information extraction?
- A) Analyzing unstructured content to identify and extract relevant fields and values
- B) Running SQL queries against a database
- C) Copying files from cloud storage to a laptop
- D) Compressing PDF files

**✅ Correct Answer: A**
**Rationale:** Information extraction converts unstructured digital content — documents, images, audio, video — into useful structured data.

---

### Q2: OCR stands for:
- A) Optical character recognition
- B) Online content retrieval
- C) Open conversion routine
- D) Operational cache register

**✅ Correct Answer: A**
**Rationale:** Optical character recognition converts images of text into machine-readable text data.

---

### Q3: Which content types can information extraction process?
- A) Documents, receipts, invoices, images, audio, and video
- B) Only spreadsheets
- C) Only plain-text files
- D) Only web pages

**✅ Correct Answer: A**
**Rationale:** Extraction spans documents, emails, business cards, receipts, invoices, contracts, images, audio recordings, and video.

---

### Q4: Reading the vendor name, date, and total from a photographed receipt to pre-fill an expense claim is an example of:
- A) Information extraction
- B) Speech synthesis
- C) Semantic segmentation
- D) Temperature tuning

**✅ Correct Answer: A**
**Rationale:** The receipt-to-expense-claim scenario is the classic information-extraction example.

---

### Q5: Which Foundry service specializes in extracting structured data from documents and media?
- A) Azure Content Understanding in Foundry Tools
- B) Azure DNS
- C) Azure Load Balancer
- D) Azure Backup

**✅ Correct Answer: A**
**Rationale:** Azure Content Understanding is Foundry's information-extraction service with predefined and custom analyzers.

---

### Q6: In Content Understanding, what is an analyzer?
- A) The definition of how content is processed and what structured data is returned
- B) A person who reviews documents
- C) A GPU monitoring tool
- D) A file-compression utility

**✅ Correct Answer: A**
**Rationale:** Analyzers define processing behavior and the output schema — predefined for common documents or custom from samples.

---

### Q7: In what format does the Content Understanding REST API return results?
- A) JSON
- B) MP3
- C) BMP
- D) ZIP

**✅ Correct Answer: A**
**Rationale:** Analyzer results are retrieved as JSON via the REST API.

---

### Q8: Which is a predefined-analyzer scenario for common business documents?
- A) Invoice data extraction
- B) Video game rendering
- C) Firewall configuration
- D) Wi-Fi optimization

**✅ Correct Answer: A**
**Rationale:** Predefined analyzers cover common documents and forms such as invoices, receipts, and contracts.

---

### Q9: Order the OCR pipeline correctly:
- A) Image acquisition → pre-processing → text region detection → character recognition → output generation
- B) Character recognition → acquisition → detection → output → pre-processing
- C) Output → detection → acquisition → recognition → enhancement
- D) Detection → output → acquisition → enhancement → recognition

**✅ Correct Answer: A**
**Rationale:** Acquire the image, enhance it, find text regions, recognize/classify characters, then produce post-processed output.

---

### Q10: After OCR, which process attaches recognized values to meaningful business fields?
- A) Field extraction and mapping
- B) Prosody generation
- C) Tokenization
- D) Stemming

**✅ Correct Answer: A**
**Rationale:** Field extraction/mapping detects candidate values and associates them with schema fields.

---

### Q11: What does data normalization do in the extraction pipeline?
- A) Standardizes formats — e.g., $20 → 20.00 and 01/01/2025 → 2025-01-01
- B) Deletes all numbers
- C) Adds random noise
- D) Translates the document

**✅ Correct Answer: A**
**Rationale:** Normalization standardizes extracted values so downstream systems receive consistent formats.

---

### Q12: How does generative AI enhance field mapping?
- A) Semantic language models match extracted values to data fields accurately, replacing hand-coded rules per document type
- B) It generates new invoices from scratch
- C) It photocopies documents faster
- D) It removes the need for OCR input

**✅ Correct Answer: A**
**Rationale:** Semantic understanding lets the mapper handle layout variations without manually coded rules for each document type.

---

### Q13: Which audio/video scenarios does Content Understanding support?
- A) Post-call analysis, voice-message automation, video transcription and summary, recording analysis
- B) Live concert mixing
- C) Codec development
- D) Ringtone composition

**✅ Correct Answer: A**
**Rationale:** Predefined and custom analyzers cover post-call analysis, voice messages, video call transcription/summary, and recording analysis.

---

### Q14: How is a CUSTOM analyzer created?
- A) By defining a schema based on sample documents
- B) By emailing Microsoft support
- C) By retraining GPT from scratch
- D) By exporting a firewall rule

**✅ Correct Answer: A**
**Rationale:** You define your own schema from sample content; the analyzer then extracts those fields from new documents.

---

### Q15: With the Content Understanding Python SDK, what happens after you submit content?
- A) You poll a URL until the analysis job completes
- B) Results return instantly in the same response
- C) The analyzer retrains itself
- D) The content is printed

**✅ Correct Answer: A**
**Rationale:** Analysis is asynchronous — submit, then poll the operation until it completes and fetch the JSON results.

---

### Q16: What is the KEY advantage of Azure Content Understanding over basic OCR?
- A) It understands document structure and maps extracted data to a defined schema
- B) It skips image pre-processing for speed
- C) It produces prettier fonts
- D) It only works on typed text

**✅ Correct Answer: A**
**Rationale:** OCR reads text; Content Understanding adds structural understanding and schema mapping with confidence scores.

---

### Q17: A logistics firm receives delivery notes from 200 suppliers, each with different layouts. Hand-coded extraction rules keep breaking. Which approach fixes the root problem?
- A) A semantic, generative-AI-assisted analyzer that maps values to schema fields regardless of layout
- B) More regex rules per supplier
- C) Asking suppliers to fax instead
- D) Manual data entry

**✅ Correct Answer: A**
**Rationale:** Semantic field mapping generalizes across layouts — the documented advantage of generative AI in extraction.

---

### Q18: Which output would you expect from a predefined invoice analyzer?
- A) JSON fields like CustomerName, InvoiceDate, InvoiceId with confidence scores
- B) A rendered 3D invoice
- C) An MP3 narration
- D) A trained model file

**✅ Correct Answer: A**
**Rationale:** Predefined analyzers return schema-mapped fields (with per-field confidence) as JSON.

---

### Q19: A scanned page is skewed and low-contrast, and OCR accuracy suffers. Which pipeline stage addresses this?
- A) Pre-processing and image enhancement
- B) Field mapping
- C) Output generation
- D) Post-call analysis

**✅ Correct Answer: A**
**Rationale:** Deskewing, denoising, and contrast enhancement happen in OCR pre-processing.

---

### Q20: Why does OCR include a text REGION detection step before recognizing characters?
- A) Locating text areas first avoids wasting recognition on graphics/background and preserves layout structure
- B) Regions are needed for billing
- C) Characters cannot exist outside regions
- D) It converts text to speech

**✅ Correct Answer: A**
**Rationale:** Region detection isolates where text lives so character recognition runs only there and layout is retained.

---

### Q21: Which statement correctly contrasts OCR output and field-mapped output for '01/01/2025 … total $20'?
- A) OCR yields raw text tokens; field mapping yields Date=2025-01-01 and Amount=20.00 bound to schema fields
- B) OCR yields normalized fields; mapping yields raw pixels
- C) Both yield identical structures
- D) Neither yields text

**✅ Correct Answer: A**
**Rationale:** OCR gives text; extraction/mapping/normalization turn it into typed, standardized fields.

---

### Q22: A contact center wants each call summarized with topics, companies mentioned, and speaker breakdown. Which Content Understanding scenario is this?
- A) Post-call analysis with an audio analyzer
- B) Invoice extraction
- C) Image classification
- D) Text-to-speech

**✅ Correct Answer: A**
**Rationale:** Post-call analysis applies an audio analyzer to produce transcripts, summaries, topics, and entities.

---

### Q23: 'The results are returned immediately in the same request' — why is this WRONG for the Content Understanding SDK?
- A) Analysis is a long-running job; the SDK submits it and you poll the result URL until completion
- B) Results arrive by post
- C) The SDK never returns results
- D) It is actually correct

**✅ Correct Answer: A**
**Rationale:** Content analysis is asynchronous by design — submit, poll, then read the completed JSON.

---

### Q24: Which choice lists the field-extraction pipeline in the right order?
- A) OCR ingestion → field detection → field mapping → normalization → integration with business systems
- B) Integration → OCR → normalization → detection → mapping
- C) Mapping → OCR → integration → detection → normalization
- D) Normalization → integration → OCR → mapping → detection

**✅ Correct Answer: A**
**Rationale:** Ingest recognized text, detect candidate values, map to schema, normalize formats, then integrate.

---

### Q25: An exam distractor claims OCR means 'Online Content Retrieval used to copy cloud data locally.' Identify the error:
- A) OCR is optical character recognition — converting images of text into machine-readable text
- B) The definition is correct
- C) OCR is Open Conversion Routine for JSON→image
- D) OCR is a network protocol

**✅ Correct Answer: A**
**Rationale:** Watch for plausible-sounding expansions; OCR = optical character recognition.

---

### Q26: A firm needs contract clauses (parties, term, renewal date) pulled from legal PDFs into their CLM system. Map the correct solution stack:
- A) Content Understanding analyzer (predefined contract or custom schema) → JSON via REST → CLM integration
- B) Speech SDK → WAV → CLM
- C) Diffusion model → PNG → CLM
- D) Playground screenshots → email

**✅ Correct Answer: A**
**Rationale:** Document analyzers extract schema fields as JSON, which integrates with business systems.

---

### Q27: Why do analyzers attach a CONFIDENCE score to each extracted field?
- A) So downstream processes can route low-confidence values to human review
- B) To rank vendors
- C) To measure GPU heat
- D) Scores are decorative

**✅ Correct Answer: A**
**Rationale:** Confidence enables human-in-the-loop workflows — auto-accept high confidence, review low confidence.

---

### Q28: Which requirement clearly needs a CUSTOM analyzer rather than a predefined one?
- A) Extracting fields unique to your company's proprietary inspection form
- B) Reading a standard sales invoice
- C) Reading a typical retail receipt
- D) Post-call transcript summary

**✅ Correct Answer: A**
**Rationale:** Proprietary layouts/fields aren't covered by predefined analyzers — define a custom schema from samples.

---

### Q29: A voicemail system should transcribe messages, extract callback numbers and reasons, and create tickets automatically. Which scenario name fits?
- A) Voice-message automation using an audio analyzer
- B) Semantic segmentation
- C) Image generation
- D) Stop-word removal

**✅ Correct Answer: A**
**Rationale:** Voice-message automation is a listed audio scenario for Content Understanding.

---

### Q30: What is the correct division of labor: OCR vs analyzer vs business system?
- A) OCR reads text; the analyzer structures it against a schema; the business system consumes the JSON
- B) The analyzer reads pixels; OCR does schemas; JSON prints invoices
- C) The business system does OCR
- D) All three are the same component

**✅ Correct Answer: A**
**Rationale:** Reading, structuring, and consuming are distinct stages — OCR → analyzer schema mapping → integration.

---

## Quiz 6B — Information Extraction (Round 2)

### Q1: Information extraction is best summarized as converting digital content into:
- A) Useful, structured data
- B) Compressed archives
- C) Encrypted blobs
- D) Printed booklets

**✅ Correct Answer: A**
**Rationale:** The goal is turning unstructured content (documents, media) into structured, actionable data.

---

### Q2: What does OCR produce from a photo of a printed page?
- A) Machine-readable text
- B) A higher-resolution photo
- C) An audio narration
- D) A vector logo

**✅ Correct Answer: A**
**Rationale:** OCR converts images of text into machine-readable text data.

---

### Q3: Which pair belongs to the SAME workload?
- A) Receipt field extraction and contract clause extraction
- B) Receipt extraction and text-to-speech
- C) Contract extraction and image generation
- D) OCR and prosody

**✅ Correct Answer: A**
**Rationale:** Both extract structured fields from documents — information extraction.

---

### Q4: Which item is NOT a typical information-extraction source?
- A) A GPU driver installer
- B) A scanned invoice
- C) A recorded support call
- D) A business card photo

**✅ Correct Answer: A**
**Rationale:** Extraction sources are content: documents, forms, images, audio, video — not software installers.

---

### Q5: Predefined analyzers exist for which common items?
- A) Invoices, receipts, and contracts
- B) Firewall rules
- C) DNS zones
- D) CSS stylesheets

**✅ Correct Answer: A**
**Rationale:** Content Understanding ships predefined analyzers for common documents and forms.

---

### Q6: Results from an analyzer are retrieved using which interface?
- A) The REST API (JSON results)
- B) A COM port
- C) A USB cable
- D) A fax gateway

**✅ Correct Answer: A**
**Rationale:** You call the REST API (or SDK wrapper) and receive JSON results.

---

### Q7: Transcribing and summarizing a recorded video call is handled by:
- A) An audio/video analyzer in Content Understanding
- B) A CNN classifier
- C) A stop-word filter
- D) A resource lock

**✅ Correct Answer: A**
**Rationale:** Video call transcription and summary is a listed audio/video analyzer scenario.

---

### Q8: The last stage of field extraction feeds data into:
- A) Business processes and systems
- B) The GPU fan
- C) The DNS resolver
- D) The image sensor

**✅ Correct Answer: A**
**Rationale:** Extraction ends with integration — structured values flowing into business systems.

---

### Q9: Which OCR stage classifies the individual characters found in text regions?
- A) Character recognition and classification
- B) Image acquisition
- C) Field normalization
- D) Post-call analysis

**✅ Correct Answer: A**
**Rationale:** After regions are detected, character recognition identifies and classifies the characters and words.

---

### Q10: '$20' becoming '20.00' and '01/01/2025' becoming '2025-01-01' happens during:
- A) Data normalization and standardization
- B) Text region detection
- C) Image acquisition
- D) Speaker diarization

**✅ Correct Answer: A**
**Rationale:** Normalization standardizes value formats for downstream systems.

---

### Q11: Field DETECTION differs from field MAPPING how?
- A) Detection finds candidate values; mapping associates each value with the right schema field
- B) Detection prints; mapping scans
- C) They are identical
- D) Mapping happens before OCR

**✅ Correct Answer: A**
**Rationale:** First candidates are identified (dates, totals, names), then each is bound to its schema field.

---

### Q12: To build an analyzer for your company's unique lab-report format, you would:
- A) Define a custom schema based on sample lab reports
- B) Use the predefined receipt analyzer unchanged
- C) Convert reports to MP3
- D) Lower the temperature

**✅ Correct Answer: A**
**Rationale:** Custom analyzers are created by defining a schema from your own sample documents.

---

### Q13: Which benefit does schema mapping give an expense system consuming receipt data?
- A) It can rely on consistent field names/types (Vendor, Date, Amount) regardless of receipt layout
- B) It makes receipts prettier
- C) It eliminates all taxes
- D) It removes the need for storage

**✅ Correct Answer: A**
**Rationale:** Schema-mapped output is stable and typed, so integrations don't depend on each receipt's layout.

---

### Q14: For a batch of 10,000 scanned forms, why is the asynchronous submit-and-poll model appropriate?
- A) Analysis is long-running at scale; async jobs let clients continue and collect results when ready
- B) Polling is decorative
- C) Synchronous calls are illegal
- D) JSON requires polling

**✅ Correct Answer: A**
**Rationale:** Long-running batch analysis fits the async pattern — submit jobs, poll for completion.

---

### Q15: Which statement about audio analyzers is TRUE?
- A) They can produce transcripts plus structured fields like summary, topics, and people mentioned
- B) They only measure volume
- C) They convert audio to invoices
- D) They require video input

**✅ Correct Answer: A**
**Rationale:** Audio analyzers output transcripts and schema fields (summary, topics, companies, people) from recordings.

---

### Q16: A scanned contract produces perfect OCR text, but the system still can't tell WHICH date is the renewal date. What is missing?
- A) Field extraction and mapping against a schema — OCR alone has no semantic understanding
- B) A better camera
- C) Higher DPI
- D) A louder microphone

**✅ Correct Answer: A**
**Rationale:** OCR reads text; identifying which value plays which business role requires field mapping to a schema.

---

### Q17: Rank the FULL journey of a paper receipt to an ERP entry:
- A) Photo → OCR pipeline → field detection/mapping → normalization → JSON via API → ERP integration
- B) ERP → JSON → OCR → photo
- C) Normalization → photo → ERP → OCR
- D) Photo → ERP → OCR → JSON

**✅ Correct Answer: A**
**Rationale:** Capture, read (OCR), structure (mapping), standardize (normalization), then integrate via the API's JSON.

---

### Q18: Your custom analyzer returns 'InvoiceTotal' at 0.42 confidence for some suppliers. What is the BEST operational response?
- A) Route low-confidence extractions to human review while auto-accepting high-confidence ones
- B) Ignore confidence entirely
- C) Reject all documents
- D) Multiply the value by the confidence

**✅ Correct Answer: A**
**Rationale:** Confidence thresholds enable a human-in-the-loop pattern — the reason scores are provided.

---

### Q19: Which scenario is NOT information extraction?
- A) Generating a fictional invoice image from a text prompt
- B) Pulling PO numbers from supplier PDFs
- C) Summarizing topics from a recorded call
- D) Reading fields from ID cards

**✅ Correct Answer: A**
**Rationale:** Creating new content is generative AI. Extraction pulls structured data OUT of existing content.

---

### Q20: A team asks whether to use Azure Content Understanding or plain OCR + custom code. Which factor argues for Content Understanding?
- A) Built-in schema mapping with confidence scores and predefined analyzers reduce custom engineering
- B) OCR licenses are illegal
- C) Custom code is always faster to build
- D) Content Understanding works offline only

**✅ Correct Answer: A**
**Rationale:** The service's structural understanding + schema mapping is precisely what you'd otherwise hand-build.

---

### Q21: An insurer processes claim forms, damage photos, AND recorded claim calls. Which capability claim about Content Understanding is accurate?
- A) Analyzers cover documents, images, audio, and video — one service can structure all three inputs
- B) It handles documents only
- C) It handles audio only
- D) Photos require a separate tenant

**✅ Correct Answer: A**
**Rationale:** Content Understanding spans documents and media — analyzers exist for document, audio, and video scenarios.

---

### Q22: During polling, the analysis job status is 'running'. What should the client do?
- A) Wait and poll again until the status indicates completion, then fetch results
- B) Resubmit the same content immediately
- C) Delete the analyzer
- D) Switch to synchronous mode

**✅ Correct Answer: A**
**Rationale:** Async pattern: keep polling until completion; resubmitting duplicates work.

---

### Q23: Which pre-processing failure mode most hurts region DETECTION (not recognition)?
- A) Severe page skew making text lines hard to localize
- B) A single ambiguous character
- C) An unusual font for one word
- D) A misspelled word

**✅ Correct Answer: A**
**Rationale:** Skew disrupts locating text areas; single-character issues affect recognition, not region detection.

---

### Q24: Map each item to its pipeline: (1) deskewing, (2) matching '20.00' to the Amount field, (3) ISO date formatting.
- A) 1 = OCR pre-processing; 2 = field mapping; 3 = normalization
- B) 1 = normalization; 2 = OCR; 3 = mapping
- C) 1 = mapping; 2 = deskewing; 3 = OCR
- D) All three are OCR

**✅ Correct Answer: A**
**Rationale:** Image cleanup is OCR pre-processing; associating values to fields is mapping; standardizing formats is normalization.

---

### Q25: Why does generative-AI-based field matching generalize better than rule-based matching?
- A) Semantic models understand that 'Amt Due', 'Total Payable' and 'Balance' can all mean the invoice total
- B) It memorizes every layout on Earth
- C) Rules are faster so they generalize worse
- D) It doesn't — rules always win

**✅ Correct Answer: A**
**Rationale:** Semantic equivalence across varied labels/layouts is what language models capture and rules miss.

---

### Q26: A predefined receipt analyzer works well, but your receipts include a company-specific 'CostCenter' code it never returns. Best path forward?
- A) Create a custom analyzer whose schema includes CostCenter, trained from sample receipts
- B) Ask staff to memorize codes
- C) Use the speech playground
- D) Turn confidence off

**✅ Correct Answer: A**
**Rationale:** Fields outside the predefined schema call for a custom analyzer defined from your samples.

---

### Q27: Which statement about the relationship between information extraction and NLP is MOST accurate?
- A) Extraction often uses NLP techniques (like NER) on recognized text to identify field values
- B) They are unrelated workloads
- C) NLP replaces OCR
- D) Extraction only works on audio

**✅ Correct Answer: A**
**Rationale:** After OCR, entity recognition and other NLP techniques help identify and classify candidate values.

---

### Q28: An auditor wants evidence of WHERE on the page each extracted value was found. Which OCR/analyzer output supports this?
- A) Positional/layout information (regions, offsets) returned with recognized text
- B) The document's file size
- C) The GPU model used
- D) The analyst's name

**✅ Correct Answer: A**
**Rationale:** OCR output includes text positions; analyzers preserve source location so values are traceable to page regions.

---

### Q29: Video recording analysis of a training session should yield chapter summaries and key topics. Which analyzer characteristics make this possible?
- A) Analyzers define a schema of fields (summary, topics) generated from the video's transcript and content
- B) Analyzers edit the video
- C) Analyzers upscale resolution
- D) Analyzers require live streams

**✅ Correct Answer: A**
**Rationale:** Custom/predefined video analyzers return schema fields derived from transcript + content analysis.

---

### Q30: Which end-to-end design correctly automates supplier-invoice intake with LOW manual effort and HIGH auditability?
- A) Invoice analyzer with schema mapping → confidence-based human review queue → normalized JSON into the ERP
- B) Manual typing with no logs
- C) Screenshot each invoice into a chat model with no structure
- D) Store PDFs unprocessed

**✅ Correct Answer: A**
**Rationale:** Schema mapping automates structure, confidence routing preserves accuracy, and JSON integration completes the flow.

---

## 🎯 Final Mock Exam 1 — AI-901 (Full Syllabus)

### Q1: Which option correctly describes the two AI-901 skill areas and their weights?
- A) Identify AI concepts and capabilities (~40%); Implement AI solutions with Microsoft Foundry (~60%)
- B) Networking (~50%); Databases (~50%)
- C) Only responsible AI is examined
- D) Coding in C# (~90%); theory (~10%)

**✅ Correct Answer: A**
**Rationale:** The exam measures AI concepts/capabilities at roughly 40% and Foundry implementation at roughly 60%.

---

### Q2: Generative AI is best described as:
- A) Using a language model to create original content in response to a prompt
- B) A retrieval system for stored answers
- C) A replacement for all databases
- D) An old technique superseded by machine learning

**✅ Correct Answer: A**
**Rationale:** Generative AI creates original content — text, images, code — from prompts via language models.

---

### Q3: Within a tenant, what does an Azure subscription provide?
- A) A billing boundary
- B) A security boundary
- C) A DNS namespace
- D) A GPU cluster

**✅ Correct Answer: A**
**Rationale:** Subscriptions are billing boundaries; the tenant is the security boundary.

---

### Q4: An AI application that performs tasks on behalf of a user is:
- A) An agent
- B) A resource lock
- C) A blob container
- D) A subnet

**✅ Correct Answer: A**
**Rationale:** That is the definition of an AI agent.

---

### Q5: Which principle of responsible AI concerns making an AI system's purpose and limitations understandable?
- A) Transparency
- B) Fairness
- C) Privacy & security
- D) Inclusiveness

**✅ Correct Answer: A**
**Rationale:** Transparency = users can understand what the system does, how it behaves, and its limits.

---

### Q6: Breaking text into words or word-parts for analysis is called:
- A) Tokenization
- B) Diarization
- C) Vectorization of pixels
- D) Prosody

**✅ Correct Answer: A**
**Rationale:** Tokenization splits text into analyzable units (tokens).

---

### Q7: Converting text into an audio waveform of speech is:
- A) Speech synthesis (TTS)
- B) Speech recognition (STT)
- C) OCR
- D) NER

**✅ Correct Answer: A**
**Rationale:** TTS synthesizes speech from text; STT does the reverse.

---

### Q8: Which vision task outputs bounding boxes with class labels?
- A) Object detection
- B) Image classification
- C) Semantic segmentation
- D) Summarization

**✅ Correct Answer: A**
**Rationale:** Object detection localizes each object with a box and label.

---

### Q9: OCR converts:
- A) Images of text into machine-readable text
- B) Text into images
- C) Audio into text
- D) JSON into XML

**✅ Correct Answer: A**
**Rationale:** Optical character recognition reads text out of images/documents.

---

### Q10: In a Foundry project, models, agents, tools and ______ are the four asset types.
- A) Knowledge
- B) Firewalls
- C) Queues
- D) Certificates

**✅ Correct Answer: A**
**Rationale:** Knowledge manages the data sources that ground agents.

---

### Q11: An endpoint in Foundry is:
- A) An HTTPS address applications call to reach a deployed model or service
- B) A physical network port
- C) A storage account
- D) The model's training data

**✅ Correct Answer: A**
**Rationale:** Endpoints are the HTTP entry points for models and services, authenticated by key or Entra ID token.

---

### Q12: A car-safety model is stress-tested across weather, lighting and sensor-failure conditions before release. Which responsible AI principle?
- A) Reliability & safety
- B) Inclusiveness
- C) Transparency
- D) Accountability

**✅ Correct Answer: A**
**Rationale:** Rigorous testing to ensure safe, correct operation within defined limits is reliability & safety.

---

### Q13: Which THREE things configure generative model behavior at request time?
- A) Instructions (system prompt), user input, and parameters such as temperature
- B) Region, VM size, disk type
- C) Tenant, subscription, resource group
- D) Filters, feature maps, flattening

**✅ Correct Answer: A**
**Rationale:** System prompt, user prompt, and parameters are the three behavior levers.

---

### Q14: What is an embedding?
- A) A vector representation of a token capturing semantic meaning
- B) A compressed image
- C) An encrypted key
- D) A duplicate word

**✅ Correct Answer: A**
**Rationale:** Embeddings place tokens in a multidimensional vector space where similar meanings are near each other.

---

### Q15: Which deployment consideration caps a model's tokens-per-minute throughput?
- A) Rate limits
- B) Guardrails
- C) Version
- D) Deployment type

**✅ Correct Answer: A**
**Rationale:** Rate limits define maximum TPM; exceeding them causes throttling.

---

### Q16: Which statistical technique scores a term by frequency in one document relative to the whole collection?
- A) TF-IDF
- B) Bag-of-Words
- C) TextRank
- D) Word2Vec

**✅ Correct Answer: A**
**Rationale:** TF-IDF balances local term frequency against corpus-wide document frequency.

---

### Q17: In speech recognition, phonemes are produced by the ______ model and turned into probable word sequences by the ______ model.
- A) acoustic; language
- B) language; acoustic
- C) linguistic; prosody
- D) waveform; encoder

**✅ Correct Answer: A**
**Rationale:** Acoustic modeling maps audio features to phonemes; language modeling selects the probable words.

---

### Q18: Which statement about the Foundry model playground is TRUE?
- A) It lets you test prompts and settings interactively, which you can then reuse in code
- B) It removes the need to deploy models
- C) It writes production apps automatically
- D) It is only available to administrators

**✅ Correct Answer: A**
**Rationale:** The playground is the experimentation surface; deployment and APIs are still required for apps.

---

### Q19: A multimodal prompt contains which content parts?
- A) input_text and input_image parts in one content array
- B) Two separate exam sessions
- C) Only audio parts
- D) A CSV attachment

**✅ Correct Answer: A**
**Rationale:** Multimodal requests mix text and image parts in a single message's content array.

---

### Q20: What does an analyzer do in Azure Content Understanding?
- A) Defines how content is processed and what structured data is returned
- B) Stores extracted data in a database
- C) Converts JSON to prose
- D) Encrypts documents

**✅ Correct Answer: A**
**Rationale:** Analyzers (predefined or custom) define processing behavior and the output schema.

---

### Q21: Which authentication options secure a Foundry endpoint call?
- A) An API key or a Microsoft Entra ID token
- B) A CAPTCHA
- C) An SMS to the admin
- D) No authentication is supported

**✅ Correct Answer: A**
**Rationale:** Endpoints accept an authorization key or an Entra ID token.

---

### Q22: Azure Language differs from prompting a general-purpose model because it provides:
- A) Deterministic, structured output with confidence scores
- B) More creative responses
- C) Combined multi-task natural-language replies
- D) Image analysis

**✅ Correct Answer: A**
**Rationale:** Azure Language is the deterministic, production-oriented route; LLM prompting is flexible but probabilistic.

---

### Q23: A hiring tool underrates candidates who attended evening programs, which correlates with socioeconomic status. Fixing the training data addresses which principle, and why?
- A) Fairness — the system must treat all groups equitably and avoid proxy bias
- B) Transparency — the model must be documented
- C) Privacy — evening data is private
- D) Reliability — the servers must stay up

**✅ Correct Answer: A**
**Rationale:** Bias via correlated proxies is a fairness failure; equitable treatment requires removing such bias.

---

### Q24: Which Azure structure should a company use to give its AI experiments a separate invoice from production, under one identity system?
- A) Same tenant, two subscriptions
- B) Two tenants
- C) One subscription, two resource groups
- D) One resource group, two regions

**✅ Correct Answer: A**
**Rationale:** One tenant preserves shared identity (Entra ID); separate subscriptions split billing.

---

### Q25: In the Project API snippet — a=project.agents.get('x'); c=project.get_openai_client(); r=c.responses.create(...) — what has happened after the FIRST two lines only?
- A) The agent definition was fetched and a client created; no prompt has been sent yet
- B) The prompt was answered twice
- C) The agent was deleted
- D) The model was retrained

**✅ Correct Answer: A**
**Rationale:** Only responses.create() submits a prompt; the first lines are setup.

---

### Q26: Your model gives perfect answers at temperature 0.2 but the business wants 'more variety' in creative taglines. What is the correct adjustment and trade-off?
- A) Raise temperature — more varied/creative output, at the cost of predictability
- B) Lower temperature further — more variety
- C) Increase rate limits — more creativity
- D) Add guardrails — more randomness

**✅ Correct Answer: A**
**Rationale:** Temperature controls randomness: higher = more variety, less determinism.

---

### Q27: Attention in a transformer enables which concrete behavior?
- A) The same word is interpreted differently depending on surrounding tokens
- B) Faster disk writes
- C) Automatic translation of prompts
- D) Image compression

**✅ Correct Answer: A**
**Rationale:** Attention encodes each token's relationships with context, making meaning context-sensitive.

---

### Q28: A regulated bank requires: PII redacted deterministically, THEN flexible summarization of the redacted text. Choose the correct two-stage design:
- A) Azure Language recognize_pii_entities → general-purpose model summarization
- B) LLM redaction → LLM summarization
- C) Playground for both stages
- D) OCR → prosody

**✅ Correct Answer: A**
**Rationale:** Compliance-critical redaction uses the deterministic API; the flexible LLM then works on safe text.

---

### Q29: Why do identical LLM analysis calls sometimes return different entity lists, and which property of Azure Language fixes it?
- A) LLM generation is probabilistic; Azure Language is deterministic — same input, same output
- B) Network jitter changes text
- C) JSON reorders letters
- D) Keys mutate responses

**✅ Correct Answer: A**
**Rationale:** Probabilistic sampling explains LLM variance; determinism is the documented Azure Language strength.

---

### Q30: Which sequence of the speech-synthesis pipeline explains why '2:30pm w/ Dr. Lee' is spoken naturally?
- A) Normalization expands abbreviations/numbers → linguistic model maps to phonemes → prosody adds natural cadence → waveform encodes audio
- B) Waveform first, then normalization
- C) Prosody expands the abbreviations
- D) Phonemes are skipped for numbers

**✅ Correct Answer: A**
**Rationale:** Normalization ('two thirty P M with doctor Lee') precedes phoneme mapping, prosody, and waveform encoding.

---

### Q31: A voice agent must handle users interrupting mid-sentence in noisy cafés while calling tools to book tables. Which Foundry capability set matches?
- A) Voice Live — real-time speech + generative model with instructions/tools, interruption handling, noise reduction
- B) Batch transcription
- C) The image playground
- D) Content Understanding analyzers

**✅ Correct Answer: A**
**Rationale:** Continuous, interruptible, tool-using voice conversation is exactly Voice Live.

---

### Q32: In STT code, SpeechRecognizer(speech_config=sc, audio_config=ac) — what do sc and ac respectively supply?
- A) sc: service key/endpoint configuration; ac: the audio source (file or microphone)
- B) sc: the voice name; ac: the temperature
- C) sc: the transcript; ac: the language
- D) sc: billing; ac: encryption

**✅ Correct Answer: A**
**Rationale:** SpeechConfig carries connection settings; AudioConfig selects the input source.

---

### Q33: A wildlife camera system must (1) decide if any animal is present, then (2) outline each animal's exact shape for research. Choose the task pair:
- A) Classification, then semantic segmentation
- B) Segmentation, then classification
- C) Detection, then captioning
- D) Captioning, then OCR

**✅ Correct Answer: A**
**Rationale:** Whole-image presence check = classification; exact shapes = pixel-level segmentation.

---

### Q34: How does a diffusion model generate a fresh image at inference time?
- A) It starts from random pixels and iteratively removes learned noise guided by the prompt
- B) It averages all training images
- C) It searches the web for a match
- D) It reverses a CNN's filters

**✅ Correct Answer: A**
**Rationale:** Generation reverses the noise-adding training process, denoising toward the description.

---

### Q35: Why must a client POLL for sora video-generation results?
- A) Video generation is resource-intensive and long-running, so it is exposed as an asynchronous job
- B) HTTP cannot carry video
- C) Polling reduces cost to zero
- D) sora only works at night

**✅ Correct Answer: A**
**Rationale:** Async submit-and-poll is the documented pattern for heavy video workloads.

---

### Q36: Which line correctly supplies a local photo to a multimodal model?
- A) {'type':'input_image','image_url':'data:image/png;base64,' + encoded}
- B) {'type':'photo','bytes':rawBinary}
- C) {'type':'input_image','path':'C:/pics/photo.png'}
- D) {'type':'image','ftp':'ftp://pics/photo.png'}

**✅ Correct Answer: A**
**Rationale:** Local images are base64-encoded into a data URI (or hosted and passed as a URL).

---

### Q37: OCR reads a form perfectly, yet the expense system receives 'Aug 15 2024' in one record and '2024-08-15' in another. Which pipeline stage is missing?
- A) Data normalization and standardization
- B) Text region detection
- C) Audio capture
- D) Attention

**✅ Correct Answer: A**
**Rationale:** Normalization standardizes extracted values into consistent formats.

---

### Q38: A team needs invoice fields extracted with per-field confidence and a defined schema, exposed as JSON. Which service and artifact?
- A) Azure Content Understanding with an invoice analyzer
- B) Azure Speech with Voice Live
- C) The model catalog's leaderboard
- D) A resource lock

**✅ Correct Answer: A**
**Rationale:** Content Understanding analyzers return schema-mapped fields with confidence, via the REST API as JSON.

---

### Q39: Match the tool need: an agent must (1) search uploaded policy files and (2) create calendar events. Which agent tool categories?
- A) (1) knowledge tool; (2) action tool
- B) (1) action tool; (2) knowledge tool
- C) Both are models
- D) Both are guardrails

**✅ Correct Answer: A**
**Rationale:** Knowledge tools retrieve grounding information; action tools change external state.

---

### Q40: Which claim about Foundry and Azure infrastructure is FALSE?
- A) Foundry can operate with no Azure subscription
- B) Foundry uses Azure identity and security
- C) Foundry resources provide compute and model delivery
- D) Foundry projects live inside Foundry resources

**✅ Correct Answer: A**
**Rationale:** Foundry is built on Azure — a subscription and its resources are required.

---

### Q41: An exam scenario requires the SAME summary sentence count from every article and traceable sentence origins. Which summarization style fits?
- A) Extractive summarization (e.g., TextRank) selecting the top-n sentences
- B) Freeform LLM abstractive summarization
- C) Speech diarization
- D) Bag-of-Words

**✅ Correct Answer: A**
**Rationale:** Extractive methods pick n existing sentences — countable and traceable; abstractive output varies.

---

### Q42: Which design keeps a customer-facing model from discussing competitors, regardless of user prompts?
- A) Behavior rules in the system instructions plus deployment guardrails
- B) Higher temperature
- C) A bigger context window
- D) Renaming the deployment

**✅ Correct Answer: A**
**Rationale:** Scope restrictions belong in instructions; guardrails add policy-level enforcement.

---

### Q43: A model deployment auto-updated overnight and outputs changed. Which deployment consideration would have prevented surprise, and how?
- A) Version — pinning the model version / controlling the auto-update policy
- B) Rate limits — throttling updates
- C) Guardrails — blocking versions
- D) Deployment type — changing region

**✅ Correct Answer: A**
**Rationale:** The version setting governs which model version runs and whether it auto-updates.

---

### Q44: Which statement about MCP (Model Context Protocol) in Foundry is TRUE?
- A) MCP servers expose service capabilities (like Azure Language or Speech) to agents as callable tools
- B) MCP replaces the agent's model
- C) MCP is a video codec
- D) MCP is only for image generation

**✅ Correct Answer: A**
**Rationale:** MCP is the tool-integration protocol connecting agents to Foundry Tools services.

---

### Q45: A proof-of-concept works via the playground. To ship it, the team must move to code. Which minimal Python stack applies for a chat feature?
- A) openai package + endpoint + API key/token + deployment name
- B) kubernetes + helm + docker
- C) pandas + matplotlib
- D) azure.storage.blob only

**✅ Correct Answer: A**
**Rationale:** The OpenAI-compatible SDK against the Foundry endpoint with credentials and the deployment name is the minimal path.

---

## 🎯 Final Mock Exam 2 — AI-901 (Full Syllabus)

### Q1: Which list contains ONLY common AI workloads?
- A) Generative AI & agents, text & language, speech, vision, information extraction
- B) DNS, DHCP, TCP/IP, HTTP
- C) Backup, patching, monitoring
- D) Spreadsheets, word processing, e-mail

**✅ Correct Answer: A**
**Rationale:** The five workloads: generative AI & agents, text & language, computer speech, computer vision, information extraction.

---

### Q2: Users and services in an Azure tenant are authenticated by:
- A) Microsoft Entra ID
- B) Azure CDN
- C) Azure Files
- D) Windows Update

**✅ Correct Answer: A**
**Rationale:** Microsoft Entra ID is the identity service at the tenant level.

---

### Q3: An agent's 'instructions' define its:
- A) Behavior and scope
- B) GPU allocation
- C) Billing account
- D) IP address

**✅ Correct Answer: A**
**Rationale:** Instructions are the agent's job description — behavior, scope, and tone.

---

### Q4: Which responsible AI principle says AI should empower everyone, including people with disabilities?
- A) Inclusiveness
- B) Fairness
- C) Accountability
- D) Reliability & safety

**✅ Correct Answer: A**
**Rationale:** Inclusiveness covers benefiting all people, expressly including those with disabilities.

---

### Q5: Vector representations of tokens that capture semantic meaning are called:
- A) Embeddings
- B) Checksums
- C) Indexes
- D) Cookies

**✅ Correct Answer: A**
**Rationale:** Embeddings are the semantic vectors at the heart of language models.

---

### Q6: Sentiment analysis is a form of:
- A) Text classification
- B) Speech synthesis
- C) Object detection
- D) Field mapping

**✅ Correct Answer: A**
**Rationale:** Sentiment analysis classifies text by tone — a text-classification task.

---

### Q7: The smallest unit of sound in speech is a:
- A) Phoneme
- B) Pixel
- C) Token
- D) Byte

**✅ Correct Answer: A**
**Rationale:** Phonemes are the smallest units of sound — the currency of acoustic and linguistic modeling.

---

### Q8: Which model type generates images from random noise guided by a text description?
- A) Diffusion model
- B) Decision tree
- C) Naïve Bayes
- D) TF-IDF

**✅ Correct Answer: A**
**Rationale:** Diffusion models denoise random pixels toward the prompt.

---

### Q9: A model that accepts text AND images in the same prompt is:
- A) Multimodal
- B) Multithreaded
- C) Multitenant
- D) Multicast

**✅ Correct Answer: A**
**Rationale:** Multimodal models work with more than one data type.

---

### Q10: Content Understanding analyzers come in which two kinds?
- A) Predefined and custom
- B) Public and private
- C) Fast and slow
- D) Local and remote

**✅ Correct Answer: A**
**Rationale:** Predefined analyzers cover common documents; custom analyzers use your own schema from samples.

---

### Q11: Which portal surface lets you interactively chat with a deployed model?
- A) The model playground
- B) The billing blade
- C) Azure DNS zones
- D) The activity log

**✅ Correct Answer: A**
**Rationale:** The playground is the interactive test surface for deployed models (and agents).

---

### Q12: A council must show residents which factors its benefits-eligibility AI considers. Which principle is served?
- A) Transparency
- B) Reliability & safety
- C) Privacy & security
- D) Fairness

**✅ Correct Answer: A**
**Rationale:** Explaining what the system considers and how it behaves is transparency.

---

### Q13: Which model-catalog capability directly helps you pick between two summarization models?
- A) Comparing models side by side in the catalog
- B) Deleting one of them
- C) Renaming deployments
- D) Changing the resource group

**✅ Correct Answer: A**
**Rationale:** The catalog supports discovering, filtering, and comparing models across providers.

---

### Q14: What is the role of a system prompt (instructions)?
- A) To specify context and guidelines for how the model responds
- B) To store the API key
- C) To set the rate limit
- D) To choose the Azure region

**✅ Correct Answer: A**
**Rationale:** Instructions guide response behavior — tone, scope, format, refusals.

---

### Q15: Stop-word removal, stemming, and POS tagging all belong to:
- A) Text pre-processing
- B) Speech synthesis
- C) Image generation
- D) Field normalization

**✅ Correct Answer: A**
**Rationale:** These steps prepare raw text for statistical or semantic analysis.

---

### Q16: client.recognize_pii_entities(docs) returns which trio?
- A) Redacted text, entity list with categories, confidence per entity
- B) A translation, a summary, a poem
- C) Language name, ISO code, confidence
- D) Bounding boxes, masks, captions

**✅ Correct Answer: A**
**Rationale:** PII detection yields redaction plus categorized entities with confidence scores.

---

### Q17: Which pipeline stage of speech recognition produces the FINAL formatted transcript?
- A) Post-processing
- B) Audio capture
- C) Acoustic modeling
- D) Feature extraction

**✅ Correct Answer: A**
**Rationale:** Post-processing normalizes and formats the recognized word sequence into clean text.

---

### Q18: Which is the correct high-level flow for an app calling a Foundry model with the OpenAI library?
- A) Create client (endpoint+key) → responses.create(model=deployment, input=prompt) → read output
- B) Upload weights → compile → run locally
- C) Open a socket → send raw text → parse HTML
- D) Email the prompt → await reply

**✅ Correct Answer: A**
**Rationale:** Client construction then responses.create is the standard consumption pattern.

---

### Q19: A CNN's final output layer for classification provides:
- A) A probability for each class
- B) A pixel mask
- C) A text caption
- D) An audio clip

**✅ Correct Answer: A**
**Rationale:** Classification networks output per-class probabilities.

---

### Q20: Which use case belongs to information extraction rather than NLP text analysis?
- A) Turning scanned purchase orders into structured records
- B) Scoring tweet sentiment
- C) Detecting the language of an email
- D) Extracting key phrases from typed notes

**✅ Correct Answer: A**
**Rationale:** Unstructured scanned documents → structured fields is information extraction; the others analyze born-digital text.

---

### Q21: Foundry agents gain access to Azure Language capabilities through:
- A) The Azure Language MCP server connected as a tool
- B) A CSV import
- C) The billing API
- D) Editing the model weights

**✅ Correct Answer: A**
**Rationale:** The MCP server exposes Language functions to agents as tools, with approval options.

---

### Q22: Why are Fundamentals-level Microsoft certifications attractive for students?
- A) They validate skills and do not expire
- B) They require ten years' experience
- C) They replace university degrees
- D) They grant Azure for free forever

**✅ Correct Answer: A**
**Rationale:** Microsoft fundamentals certifications don't expire and provide industry-recognized validation.

---

### Q23: A triage model for loan APPROVALS also logs who overrode each AI decision and why. Which TWO principles does the logging support?
- A) Accountability and transparency
- B) Fairness and inclusiveness
- C) Privacy and reliability
- D) Inclusiveness and privacy

**✅ Correct Answer: A**
**Rationale:** Override logs keep humans answerable (accountability) and make system behavior traceable/understandable (transparency).

---

### Q24: Which architecture statement is TRUE of both LLMs and Vision Transformers?
- A) Both use attention over embedded units (tokens or image patches) to encode contextual relationships
- B) Both use convolution filters
- C) Both output audio
- D) Neither can be deployed in Foundry

**✅ Correct Answer: A**
**Rationale:** ViTs adapt the transformer's attention mechanism from language tokens to image patches.

---

### Q25: A dev requests 'always route my requests through the refunds agent' in code. Which API element accomplishes it?
- A) extra_body={'agent': {'name': agent.name, 'type': 'agent_reference'}} on responses.create
- B) A higher temperature
- C) A base64 image part
- D) A DNS CNAME

**✅ Correct Answer: A**
**Rationale:** The agent_reference in extra_body directs the request to the named Foundry agent.

---

### Q26: Rank these for making an LLM's answers use YOUR company's leave policy: (best practice first)
- A) Attach the policy as agent knowledge (file search) so answers are grounded
- B) Hope the base model memorized your policy
- C) Raise max tokens
- D) Lower the rate limit

**✅ Correct Answer: A**
**Rationale:** Grounding via knowledge tools is the correct mechanism; base models don't know private policies.

---

### Q27: Your text pipeline must classify 100k historic tickets ONCE for a migration, then never again, and leadership wants rich natural-language rationales per ticket. Which trade-off decision is defensible?
- A) A general-purpose model — flexibility and rationale text matter more than run-to-run determinism for a one-off job
- B) Azure Language only — rationales are forbidden
- C) Neither can classify text
- D) Manual review of all 100k

**✅ Correct Answer: A**
**Rationale:** For a one-time, explanation-rich task, LLM flexibility fits; determinism matters for repeated pipelines.

---

### Q28: Why does TF-IDF assign a LOW score to the word 'the' in every document?
- A) Its document frequency across the corpus is maximal, so the inverse-document-frequency factor approaches zero
- B) It is too short to count
- C) Stop words are encrypted
- D) TF ignores articles

**✅ Correct Answer: A**
**Rationale:** Words appearing in virtually all documents get near-zero IDF, wiping out their weight.

---

### Q29: A meeting-transcription feature must label WHO spoke each sentence. Which capability must be enabled?
- A) Speaker diarization
- B) Language identification
- C) Prosody generation
- D) Guardrails

**✅ Correct Answer: A**
**Rationale:** Diarization attributes transcript segments to distinct speakers.

---

### Q30: In TTS, which stage failure produces 'three-zero-zero-p-m' being read out letter by letter?
- A) Normalization failed to expand '3:00pm' into speakable words
- B) Prosody was too natural
- C) The waveform encoder clipped
- D) The acoustic model mapped phonemes wrongly

**✅ Correct Answer: A**
**Rationale:** Un-normalized numerals/abbreviations reach phoneme mapping in unspeakable form.

---

### Q31: An engineer claims: 'The Voice Live SDK stores all call audio permanently in Azure Storage.' Correct them.
- A) The SDK opens a real-time connection, streams audio, and handles responses/interruptions — persistence is the app's responsibility
- B) The claim is accurate
- C) Voice Live has no SDK
- D) Storage is mandatory for TTS

**✅ Correct Answer: A**
**Rationale:** azure-ai-voicelive manages the live session; it does not archive audio.

---

### Q32: A farm robot must treat weeds but spare crops, requiring per-pixel plant identification in real time. Which task and typical model?
- A) Semantic segmentation, e.g., built on CNN/ViT-based vision models
- B) Whole-image classification with a BoW model
- C) OCR with an invoice analyzer
- D) TTS with neural voices

**✅ Correct Answer: A**
**Rationale:** Pixel-level discrimination is segmentation, implemented with modern vision architectures.

---

### Q33: Which line of reasoning best explains why image URLs and base64 are BOTH supported for multimodal prompts?
- A) URLs suit hosted images with small payloads; base64 suits local/private images that must travel inside the request
- B) URLs are for PNG, base64 for JPEG only
- C) Base64 is faster than URLs in all cases
- D) URLs bypass content policies

**✅ Correct Answer: A**
**Rationale:** The two options cover hosted vs local/private image scenarios.

---

### Q34: Your gpt-image deployment returns policy-refusal errors for certain prompt categories. Which mechanism is acting?
- A) Guardrails / responsible-AI policies on the deployment
- B) TPM rate limits
- C) The version pin
- D) The resource lock

**✅ Correct Answer: A**
**Rationale:** Content refusals stem from responsible-AI guardrails, not throughput or versioning settings.

---

### Q35: A submitted sora job returns an ID immediately. What does the client hold, and what must it do next?
- A) A job reference — poll the job's status endpoint until generation completes, then download the video
- B) The finished MP4 in the ID string
- C) A refund voucher
- D) The model's weights

**✅ Correct Answer: A**
**Rationale:** Async jobs return a reference; clients poll for completion before retrieving output.

---

### Q36: Which OCR-pipeline reasoning is CORRECT?
- A) Enhancing the image before region detection improves recognition because cleaner input yields better localization and classification of characters
- B) Recognition happens before acquisition
- C) Region detection outputs the final JSON
- D) Post-processing captures the photo

**✅ Correct Answer: A**
**Rationale:** Pipeline order matters: early enhancement improves every downstream stage. Acquisition → enhance → detect → recognize → output.

---

### Q37: An analyzer schema defines 'PolicyNumber' but incoming letters write it as 'Policy #', 'Pol. No.' and 'Reference'. Why can a semantic analyzer still map these?
- A) Generative/semantic models match values to fields by meaning, not exact labels
- B) Regex is built into every PDF
- C) The schema renames the letters
- D) It cannot — mapping requires identical labels

**✅ Correct Answer: A**
**Rationale:** Semantic field mapping generalizes across label variants — the generative-AI advantage in extraction.

---

### Q38: Contrast the OUTPUT of recognize_entities (Azure Language) with an LLM prompted for entities:
- A) The SDK returns typed objects with categories and confidence deterministically; the LLM returns free-form text that may vary
- B) Both return identical typed objects
- C) The SDK returns prose; the LLM returns typed objects
- D) Neither returns entities

**✅ Correct Answer: A**
**Rationale:** Structured determinism vs flexible prose is the core contrast the exam tests.

---

### Q39: Your Foundry project has one deployed model shared by a chatbot and a batch summarizer. The batch job starves the chatbot at month-end. Which lever addresses this?
- A) Rate limits / separate deployments to allocate tokens-per-minute appropriately
- B) System prompt changes
- C) Bigger guardrails
- D) A new tenant

**✅ Correct Answer: A**
**Rationale:** Throughput contention is managed via TPM rate limits and deployment separation.

---

### Q40: Which claim about agents versus plain model calls is FALSE?
- A) Agents cannot use more than one tool
- B) Agents pair a model with instructions and tools
- C) Plain model calls suit simple one-shot completions
- D) Agents can collaborate in multi-agent workflows

**✅ Correct Answer: A**
**Rationale:** Agents may use multiple tools (knowledge + actions). The other statements are true.

---

### Q41: A campus wants ID-card photos matched to names on file for event check-in, plus consent notices displayed. Which pairing of workload and principle applies?
- A) Computer vision, with privacy & security (and transparency) obligations
- B) Speech synthesis with fairness
- C) Information extraction with inclusiveness
- D) NLP with reliability

**✅ Correct Answer: A**
**Rationale:** Face/photo matching is vision; handling biometric data invokes privacy (and consent notices support transparency).

---

### Q42: Which statement about Foundry endpoints and REST is CORRECT?
- A) Requests carry function details, headers, and JSON data; responses return headers and JSON results
- B) Requests use XML; responses use CSV
- C) Endpoints only accept binary protobuf
- D) Responses omit headers entirely

**✅ Correct Answer: A**
**Rationale:** Foundry endpoints expose REST interfaces exchanging JSON payloads with metadata headers.

---

### Q43: An intern's script calls the Language SDK once per sentence in a 10,000-sentence corpus and hits throttling. Which improvement matches the SDK's design?
- A) Submit documents in batches — the API accepts a collection of documents per call
- B) Add a GPU
- C) Switch to XML
- D) Call the playground instead

**✅ Correct Answer: A**
**Rationale:** The SDK methods take document collections; batching reduces calls and throttling.

---

### Q44: To let faculty grade consistently, a mock-exam generator must ALWAYS produce the same difficulty distribution. Which design choice mirrors the deterministic-vs-probabilistic lesson?
- A) Author a fixed question bank with tagged difficulties, rather than generating questions live with an LLM per student
- B) Generate fresh questions per student at temperature 1.0
- C) Let each student pick their difficulty
- D) Randomize the pass mark

**✅ Correct Answer: A**
**Rationale:** Fixed, tagged banks give reproducible distributions; live LLM generation varies run to run — the same trade-off as text analysis routes.

---

### Q45: Final synthesis: a startup will (1) chat over docs, (2) transcribe calls, (3) extract invoice fields, (4) generate product images. Map each to Foundry capabilities:
- A) (1) agent with knowledge tools; (2) Azure Speech STT; (3) Content Understanding analyzer; (4) text-to-image model deployment
- B) (1) sora; (2) gpt-image; (3) Voice Live; (4) TextAnalytics
- C) (1) OCR; (2) diffusion; (3) TTS; (4) NER
- D) (1) guardrails; (2) rate limits; (3) versions; (4) deployment types

**✅ Correct Answer: A**
**Rationale:** Doc chat = agent + knowledge; transcription = Speech; invoice fields = Content Understanding; image generation = text-to-image models.

---

👨‍💻Author: INFINITY DECODER

[![GitHub](https://img.shields.io/badge/GitHub-Profile-red?style=for-the-badge&logo=github)](https://github.com/infinity-decoder) [![Kaggle](https://img.shields.io/badge/Kaggle-Profile-orange?style=for-the-badge&logo=kaggle)](https://www.kaggle.com/infinitydecoder) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-yellow?style=for-the-badge&logo=linkedin)](https://pk.linkedin.com/in/infinitydecoder)\
[![Facebook](https://img.shields.io/badge/Facebook-Profile-green?style=for-the-badge&logo=facebook)](https://www.facebook.com/infinitydecoder.me) [![Coursera](https://img.shields.io/badge/coursera-Profile-blue?style=for-the-badge&logo=coursera)](https://www.coursera.org/learner/infinitydecoder) [![Website](https://img.shields.io/badge/website-visit-indigo?style=for-the-badge&logo=wordpress)](https://www.coursera.org/learner/infinitydecoder) [![profile](https://img.shields.io/badge/portfolio-visit-violet?style=for-the-badge&logo=About.me)](https://profile.infinitydecoder.com/) [![Email](https://img.shields.io/badge/Email-Contact%20Me-black?style=for-the-badge&logo=email)](mailto:developer@infinitydecoder.com)

------------------------------------------------------------------------
