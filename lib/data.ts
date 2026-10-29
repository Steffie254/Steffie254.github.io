// All site content lives here. Edit this file to update the portfolio.

// Turn sections on or off
export const sections = { experience: false }

export const profile = {
  name: 'Ann Steffie Madigo',
  short: 'Ann',
  initials: 'AM',
  // Put a photo at /public/ann.jpg and set this to '/ann.jpg' to replace the monogram.
  photo: null as string | null,
  title: 'AI Engineer & Solutions Architect',
  org: 'Building AI for banking, healthcare, energy, tourism and science · Nairobi, Kenya',
  location: 'Nairobi, Kenya',
  email: 'madigoann@gmail.com',
  phone: '+254 701 760 045',
  github: 'https://github.com/Steffie254',
  cv: '/Ann_Madigo_CV.pdf',
  typewriter: [
    "Hi, I'm Ann Steffie Madigo",
    'I build AI that works in the real world',
    'GenAI · Computer Vision · ML · MLOps',
  ],
  about: [
    "I'm an AI engineer and solutions architect. I've built AI for banking, healthcare, energy, tourism, news and materials science: LLM assistants and agents, computer vision, predictive models, and the MLOps that keeps them running.",
    "Today I work in Co-operative Bank of Kenya's Digital Factory, where I wrote the Bank's AI roadmap and lead its generative AI work. I cover the whole lifecycle: choosing the use case, building the data pipelines, training and evaluating models, shipping them, and setting the guardrails they run under.",
    "I've been building with technology since 2015, when I co-founded my school's computer club. I'm completing an M.Tech in Computer Technology at the Technical University of Kenya and hold AWS Data Engineer and Developer certifications.",
  ],
}

export const stats = [
  { value: '16', label: 'AI & ML projects on this page' },
  { value: '7', label: 'industries, from banking to materials science' },
  { value: '2.5M', label: 'ID records through a verification pipeline I built' },
  { value: '2015', label: 'building with technology since' },
]

export type Experience = { role: string; org: string; dates: string; points: string[] }

export const experience: Experience[] = [
  {
    role: 'Solutions Architect / AI Engineer — AI Enablement',
    org: 'Co-operative Bank of Kenya',
    dates: 'Oct 2025 – Present',
    points: [
      'Authored the Unified AI Integration Roadmap: AI as shared services across 9 bank products.',
      'Architected and built Rafiki, a GenAI banking assistant on AWS Bedrock (Claude) with RAG, multilingual EN/SW/Sheng support, and a WhatsApp channel.',
      'Built the identity-verification platform: OCR, face-match ensemble, tamper detection and fraud scoring on AWS serverless.',
      'Built fraud detectors, from a K-means streaming prototype to a structuring/cycling detector on approved real transactions.',
      'Led architecture for CALEB (staff mass account opening) and 17+ solution designs across payments, KYC and authentication.',
    ],
  },
  {
    role: 'AWS Developer & Data Engineer',
    org: 'A1 Strategic Business Solutions',
    dates: 'Aug 2024 – Sep 2025',
    points: [
      'Built AWS ETL (Glue → Redshift → QuickSight), cutting monthly reporting time by ~60%.',
      'Built invoice automation with Amazon Textract and Bedrock LLMs.',
      'Designed a Bedrock RAG architecture for a 7-channel banking tender.',
    ],
  },
  {
    role: 'Data Engineer Intern',
    org: 'ViewTech Limited / SasaPay',
    dates: 'Jun 2023 – May 2024',
    points: [
      'Built mobile-money transaction data pipelines.',
      'Designed PostgreSQL schemas for transactions, customers and reporting.',
    ],
  },
  {
    role: 'AI Engineer Intern',
    org: 'Miradi Robotics',
    dates: '2020 – 2022',
    points: ['Worked on AI and blockchain features for a home raffle management system.'],
  },
]

export type Category = 'GenAI & Agents' | 'Conversational AI' | 'Computer Vision' | 'Machine Learning' | 'MLOps'

export type Project = {
  title: string
  category: Category
  domain: string
  year: string
  summary: string
  stack: string[]
  metrics?: string[]
  plain: string
  why: string
  link?: string
  note?: string
}

export const projects: Project[] = [
  {
    title: 'MaterialsGPT Africa — materials design copilot',
    category: 'GenAI & Agents', domain: 'Materials science', year: '2026',
    plain: "An AI assistant for scientists designing new materials for solar water treatment. It turns a goal into target properties, uses the team's models to suggest and rank candidates, and explains each choice with sources.",
    why: 'Cuts the slow trial-and-error in finding new materials, aimed at low-cost, off-grid water treatment for African communities.',
    summary:
      "Hackathon team with TU Kenya physics researchers, Track 2 (design candidate materials), in progress. I lead the LLM copilot (goal → target band gap and stability, tool calls to the team's conditional VAE generator and GNN band-gap predictor, ranking and cited explanations), the APIs and the demo UI.",
    stack: ['LLM agents', 'Conditional VAE', 'Graph neural network', 'Python APIs'],
    metrics: ['In progress · Oct 2026'],
  },
  {
    title: 'Rafiki — multilingual GenAI assistant',
    category: 'Conversational AI', domain: 'Banking', year: '2025–26',
    plain: "A digital assistant that answers customers' banking questions on WhatsApp and the web, any time, in English, Swahili or Sheng.",
    why: 'Serves young customers where they already are, cuts routine calls and branch visits, and gives the Bank its own AI channel.',
    summary:
      'RAG assistant for a 6M+ youth customer base on web and WhatsApp. Answers product questions from a curated knowledge base and handles authenticated balance and account-summary journeys, with automatic language detection and two-pass translation.',
    stack: ['AWS Bedrock (Claude)', 'Bedrock Knowledge Base', 'OpenSearch Serverless', 'Next.js 15', 'Kafka + SSE', 'Kubernetes / ArgoCD'],
    metrics: ['EN / Swahili / Sheng', 'Pre-production', '21 security findings remediated'],
    note: 'Employer project: no public code',
  },
  {
    title: 'Healthcare RAG assistant',
    category: 'GenAI & Agents', domain: 'Healthcare', year: '2025',
    plain: 'An AI that answers medical questions only from a trusted manual, running on a private machine so no data leaves it.',
    why: 'Grounded, private answers for clinicians, and a pattern that suits any organisation with confidential manuals and policies.',
    summary: 'Locally hosted RAG over the Merck Manual using an open-source LLM, answering clinical questions such as sepsis protocols from retrieved passages.',
    stack: ['Mistral-7B-Instruct', 'llama.cpp', 'LangChain', 'Sentence Transformers', 'Chroma'],
    metrics: ['Runs fully offline'],
    link: 'https://github.com/Steffie254/healthcare-NLP-RAG-project',
  },
  {
    title: 'Wellness Tourism — end-to-end MLOps',
    category: 'MLOps', domain: 'Tourism', year: '2026',
    plain: 'A model that predicts which customers are most likely to buy a holiday package, and retrains itself automatically when new data arrives. It finds 79 of every 100 real buyers.',
    why: 'Sales teams call the people most likely to say yes first: about 6 in 10 calls convert, against 2 in 10 when calling everyone.',
    summary:
      'Every push re-registers data, tunes XGBoost (144-configuration grid search), logs runs to MLflow, commits the model and redeploys a live Streamlit app.',
    stack: ['XGBoost', 'scikit-learn', 'MLflow', 'GitHub Actions', 'Streamlit'],
    metrics: ['ROC-AUC 0.92', 'Recall 0.79', 'Live app'],
    link: 'https://github.com/Steffie254/wellness-tourism-purchase-prediction-mlops',
  },
  {
    title: 'Identity verification platform',
    category: 'Computer Vision', domain: 'Banking', year: '2025–26',
    plain: "Software that checks a person's ID and selfie are genuine and match, so accounts can be opened safely without visiting a branch.",
    why: 'Faster, cheaper onboarding with less manual review and fewer fake accounts, and decisions that can be explained to a regulator.',
    summary:
      'Serverless KYC pipeline for all Kenyan ID types: Textract OCR, a Rekognition + ArcFace/SFace face-match ensemble, tamper detection and fraud scoring. Found that a commercial engine misclassified older laminated IDs as fraud.',
    stack: ['Python async', 'Textract', 'Rekognition', 'ArcFace / SFace', 'Lambda', 'Step Functions', 'Terraform'],
    metrics: ['72.1% auto-approval', '81.2% avg. match confidence', '~2.5M records'],
    note: 'Employer project: no public code',
  },
  {
    title: 'ReneWind — predictive maintenance',
    category: 'Machine Learning', domain: 'Energy', year: '2025',
    plain: 'Predicts when a wind turbine is about to fail. On unseen data it caught 87 of every 100 real failures.',
    why: 'Repairs happen before breakdowns, avoiding costly replacements and lost power generation.',
    summary:
      'Deep neural network on 40 sensor features. Seven architectures compared, with class weighting and dropout; selected for recall because a missed failure costs more than an inspection.',
    stack: ['TensorFlow / Keras', 'scikit-learn', 'class weights', 'dropout'],
    metrics: ['98.9% accuracy', 'Failure recall 0.87', 'Precision 0.93'],
    link: 'https://github.com/Steffie254/renewind-predictive-maintenance-dnn',
  },
  {
    title: 'NewsFindr — agentic news briefings',
    category: 'GenAI & Agents', domain: 'Media', year: '2026',
    plain: 'An AI that writes each reader a personal news briefing from their interests, checks sources are credible, and cites them.',
    why: 'Saves readers from wading through feeds, and shows only sources it can stand behind.',
    summary:
      "An agent that looks up a reader's interests in SQL, expands search queries, filters sources for credibility and writes cited briefings. Tools pass cache keys rather than data, which removed malformed tool calls.",
    stack: ['LangGraph', 'LangChain', 'Groq', 'SQL agent', 'DuckDuckGo'],
    metrics: ['Token-budget rate limiter', 'Deterministic fallback'],
  },
  {
    title: 'Birth-certificate reading for children\'s accounts',
    category: 'Computer Vision', domain: 'Banking', year: '2026',
    plain: "Parents open children's accounts by photographing a birth certificate. Sideways photos made the AI misread names or time out. Now, when a name looks wrong and confidence is low, it re-reads the certificate in three orientations.",
    why: 'Fewer families dropping off, correct child details on every account, and extra AI checks only when a photo needs them.',
    summary:
      "Multi-rotation handling in the Bedrock OCR handler (Claude vision), in production: if the extracted name is implausible and confidence is below 70%, the certificate is re-read in three orientations. Diagnosed production timeouts and the orientation bug, and fixed extraction returning the registrar's name instead of the child's.",
    stack: ['AWS Bedrock (Claude vision)', '.NET OCR engine', 'Image preprocessing', 'Prompt engineering'],
    metrics: ['In production', 'Retries only below 70% confidence'],
    note: 'Employer project: no public code',
  },
  {
    title: 'Fraud & structuring detection',
    category: 'Machine Learning', domain: 'Banking', year: '2024–26',
    plain: "The system learns what normal transactions look like and flags the ones that don't, so analysts review the risky few instead of everything.",
    why: 'Catches fraud schemes early, before losses grow, and focuses analyst time where the risk is.',
    summary:
      'Streaming anomaly scoring (Kafka → features → K-means → rules → analyst queue), extended to approved real transaction data to catch accounts cycling small deposits and withdrawals.',
    stack: ['Django REST', 'Kafka', 'scikit-learn', 'K-means'],
    metrics: ['Sub-100ms latency target'],
    link: 'https://github.com/AnnMadigo254/COOP-FRAUD-DETECTION',
  },
  {
    title: 'Invoice automation with GenAI',
    category: 'GenAI & Agents', domain: 'Finance operations', year: '2024–25',
    plain: 'An AI pipeline that reads supplier invoices, pulls out the details, checks them and enters them into the accounting system.',
    why: 'Less manual data entry and fewer keying errors for finance teams.',
    summary: 'Intelligent document processing with Amazon Textract and Bedrock LLMs to extract, classify and validate invoices, orchestrated with Step Functions and Lambda and posted to the accounting system via REST.',
    stack: ['Amazon Textract', 'AWS Bedrock', 'Step Functions', 'Lambda'],
    note: 'Client project: no public code',
  },
  {
    title: 'Nyuki — mobile AI writing app',
    category: 'GenAI & Agents', domain: 'Productivity', year: '2026',
    plain: 'An AI writing app: I took over the service, built its Android phone app and put it live.',
    why: 'Takes an open-source language model all the way to an app people can install.',
    summary: 'Took over a Django + Qwen 2.5 text-generation service, added a Flutter Android client and deployed it to Render.',
    stack: ['Qwen 2.5', 'Django', 'Flutter', 'Render'],
  },
  {
    title: 'Airbnb pricing model',
    category: 'Machine Learning', domain: 'Hospitality', year: '2025',
    plain: "Predicts a fair nightly price from a property's features, typically within about 8%.",
    why: 'Helps hosts price competitively instead of guessing.',
    summary: 'Linear regression on log-price with EDA-led pricing recommendations for hosts.',
    stack: ['pandas', 'scikit-learn', 'linear regression'],
    metrics: ['R² ≈ 0.51', 'MAPE ≈ 8.3%'],
    link: 'https://github.com/Steffie254/Airbnb-ML-business-insights',
  },
  {
    title: 'Unsupervised payment-fraud detection',
    category: 'Machine Learning', domain: 'Payments', year: '2024',
    plain: "Finds suspicious payments when nobody has labelled which ones are fraud, by grouping similar transactions and flagging the ones that don't fit.",
    why: 'Works from day one on new payment data, before any fraud cases have been confirmed.',
    summary: 'Clustering (K-means and MiniBatch K-means on scaled features) over the BankSim synthetic payments dataset, exposed through a Django app; the starting point for my later streaming fraud detector.',
    stack: ['scikit-learn', 'MiniBatch K-means', 'pandas', 'Django'],
    link: 'https://github.com/Steffie254/fraud-detection-in-python',
  },
  {
    title: 'VOCO — voice assistant',
    category: 'Conversational AI', domain: 'Productivity', year: '2022',
    plain: 'A voice assistant you talk to: it understands what you ask, then creates notes and adds, removes or reads out your to-do list.',
    why: 'Hands-free task management, and an early build of the speech and intent skills I now use in production assistants.',
    summary: 'Speech recognition and text-to-speech with a neural intent classifier (greeting, create note, add / show to-do, exit).',
    stack: ['SpeechRecognition', 'pyttsx3', 'neuralintents', 'NLTK'],
    link: 'https://github.com/Steffie254/VoiceAssistant',
  },
  {
    title: 'AI chatbot for banking FAQs',
    category: 'Conversational AI', domain: 'Banking', year: '2021',
    plain: 'My first chatbot: it learns from example questions to recognise what someone is asking about, such as account types or opening requirements, and replies.',
    why: 'Where my conversational-AI work started, years before building Rafiki.',
    summary: 'Bag-of-words intent classifier (NLTK lemmatisation, Keras neural network) trained on 15+ intents, served through a Flask web chat.',
    stack: ['TensorFlow / Keras', 'NLTK', 'Flask'],
    link: 'https://github.com/Steffie254/Chatbot',
  },
  {
    title: 'Handwritten digit recognition',
    category: 'Computer Vision', domain: 'Education', year: '2022',
    plain: 'An app that looks at a handwritten number and tells you which digit it is.',
    why: 'The classic first step into computer vision, and the foundation for the document-reading work I do now.',
    summary: 'Neural network trained on MNIST with TensorFlow, reading new digit images with OpenCV.',
    stack: ['TensorFlow / Keras', 'OpenCV', 'NumPy'],
    link: 'https://github.com/Steffie254/NumberRecognition',
  },
]

export const skills = [
  { group: 'GenAI & agents', items: ['AWS Bedrock (Claude)', 'RAG', 'Knowledge Bases', 'LangChain', 'LangGraph', 'Mistral', 'Qwen', 'Groq'] },
  { group: 'Machine learning', items: ['scikit-learn', 'XGBoost', 'TensorFlow / Keras', 'Deep learning', 'Anomaly detection', 'Clustering', 'Regression'] },
  { group: 'Computer vision & NLP', items: ['OCR (Textract, Claude vision)', 'Face matching (ArcFace, Rekognition)', 'OpenCV', 'NLTK', 'Sentence Transformers', 'Speech recognition'] },
  { group: 'MLOps & cloud', items: ['MLflow', 'GitHub Actions', 'Docker', 'Kubernetes', 'ArgoCD', 'Terraform', 'Lambda', 'Step Functions'] },
  { group: 'Data & integration', items: ['Kafka', 'PostgreSQL', 'Oracle', 'Redis', 'Glue', 'Redshift', 'REST / OpenAPI'] },
  { group: 'Engineering', items: ['Python', 'Django', 'TypeScript', 'Next.js', 'NestJS', 'Vue', 'Java / Spring'] },
  { group: 'Responsible AI', items: ['Human-in-the-loop', 'Security reviews', 'Audit trails', 'Data protection', 'Explainable ranking'] },
]

export const certifications = [
  'AWS Certified Data Engineer – Associate',
  'AWS Certified Developer – Associate',
  'Kaggle: Intro to ML · Intermediate ML · Intro to Deep Learning',
  'Meta Back-End Developer Professional Certificate',
]

export const education = [
  { degree: 'M.Tech, Computer Technology (in progress)', school: 'Technical University of Kenya' },
  { degree: 'B.Tech, Computer Science — Second Class Honours (Upper)', school: 'Technical University of Kenya, 2022' },
]

// Plain-language glossary for non-technical readers
export const glossary = [
  { term: 'Machine learning', text: 'Software that learns patterns from past examples instead of hand-written rules, the way an experienced engineer learns which machine sounds mean trouble.' },
  { term: 'Generative AI', text: 'AI that reads and writes human language. It can answer questions, summarise documents and draft text.' },
  { term: 'RAG', text: 'The AI first looks things up in trusted documents, such as a medical manual or a product guide, then answers from them, so answers are grounded instead of guessed.' },
  { term: 'AI agent', text: "An AI that can take steps as well as talk: look up a reader's interests, search the news and write a briefing, within limits you set." },
  { term: 'Computer vision', text: 'AI that understands images: reads the text on an ID, matches a selfie to a photo, recognises handwriting and spots edited documents.' },
  { term: 'MLOps', text: 'Keeping models reliable after launch: retraining on new data, monitoring accuracy and keeping an audit trail. Maintenance for AI.' },
]

// Where the work applies, by industry
export const priorities = [
  { area: 'Banking & payments', work: 'Rafiki, identity verification, fraud detection, birth-certificate OCR', value: 'Answers customers 24/7, opens accounts safely, flags fraud early' },
  { area: 'Healthcare', work: 'Healthcare RAG assistant', value: 'Answers clinical questions from a trusted manual, privately' },
  { area: 'Energy', work: 'ReneWind predictive maintenance', value: 'Spots turbine failures before they happen' },
  { area: 'Tourism & hospitality', work: 'Wellness purchase prediction, Airbnb pricing', value: 'Targets sales calls and suggests fair prices' },
  { area: 'Science & research', work: 'MaterialsGPT copilot', value: 'Speeds up designing materials for solar water treatment' },
  { area: 'Media & productivity', work: 'NewsFindr, Nyuki, VOCO', value: 'Personal briefings, writing help, voice-driven to-dos' },
  { area: 'Finance operations', work: 'Invoice automation', value: 'Reads and checks invoices with little manual entry' },
]

export const community = [
  { role: 'Teaching Assistant, AI-related units', org: 'Technical University of Kenya', dates: '2017 – 2022' },
  { role: 'Teaching Assistant, Mobile Entrepreneurship Program (also earned the certificate)', org: 'eMobilis Institute of Technology', dates: '2017' },
  { role: 'Co-founder, Computer Club: basic mobile programming in Java (IntelliJ IDEA), sponsored by eMobilis', org: 'Kisumu Girls High School', dates: '2015 – 2016' },
]
