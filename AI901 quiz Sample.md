# AZ901 Quiz sample

[🏠 Back to Home](README.md)

---

## Table of Contents
- [Module 01](#module-01)
- [Module 02](#module-02)
- [Module 03](#module-03)
- [Module 04](#module-04)
- [Module 05](#module-05)




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


Module 2: Machine Learning Fundamentals
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


Module 3: Computer Vision
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


Module 4: Natural Language Processing (NLP)
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


Module 5: Generative AI
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

<div align='right'>

[🏠 Back to Home](README.md) | [⬆️ Back to Top](#top)

</div>
