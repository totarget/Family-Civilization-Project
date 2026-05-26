# Local-First AI Family Advisor Architecture  
# 本地优先AI家庭文明顾问技术架构

**File Name / 文件名**  
`technical-architecture/local-first-ai-family-advisor.md`

**Project / 项目**  
AI Family Civilization Advisor / AI家庭文明顾问

**Parent Project / 所属工程**  
Family Civilization Project / 家庭文明工程

**Status / 状态**  
Foundational Architecture Draft / 基础架构初稿

**Core Principle / 核心原则**  
Humans Are Ends, Not Means.  
人是目的，不是手段。

---

# 中文版

# 本地优先AI家庭文明顾问技术架构

## 一、架构总原则

AI家庭文明顾问如果要真正进入家庭，第一问题不是模型能力，而是信任。

家庭数据是一个人和一个家庭最敏感、最私密、最深层的数据。它不仅包括照片、视频、文档和聊天记录，也包括家庭冲突、孩子痛苦、夫妻矛盾、原生家庭创伤、个人羞耻、财务压力、教育焦虑、情绪崩溃、家庭会议、关系修复过程，以及许多从未对外公开的秘密。

如果这些数据默认上传云端，AI家庭文明顾问就无法获得真正信任。

因此，AI家庭文明顾问必须从第一天起建立“本地优先”的技术架构：

**家庭数据默认不出家门。**  
**本地保存真实人生，云端只提供通用智慧。**  
**AI必须服务人的尊严，而不是占有人的隐私。**

本地优先不是一个技术偏好，而是本项目的伦理基础、产品基础和信任基础。

---

## 二、为什么必须本地优先

### 1. 家庭数据极其敏感

家庭中的数据不同于普通办公数据或公开内容。

它可能包含：

- 孩子的日记；
- 亲子冲突记录；
- 夫妻争吵内容；
- 家庭会议记录；
- 家庭暴力或情绪伤害线索；
- 财务压力；
- 医疗和心理状态；
- 个人羞耻；
- 原生家庭创伤；
- 家庭成员之间尚未公开的真实感受。

这些数据一旦泄露，不只是信息泄露，而可能造成家庭成员之间的二次伤害、信任崩塌、羞耻扩散和现实风险。

因此，AI家庭文明顾问必须默认把家庭原始数据保留在本地。

### 2. 家庭内部也存在隐私边界

家庭不是一个没有边界的数据共同体。

孩子对父母有隐私。  
伴侣之间有隐私。  
父母对孩子也有合理边界。  
每个家庭成员都应当拥有自己的私密空间。

因此，不能简单说“家庭数据属于家庭”。更准确地说：

**家庭数据必须按人、按关系、按场景、按授权分层管理。**

AI家庭文明顾问不能成为父母监控孩子的工具，也不能成为伴侣控制彼此的工具。

### 3. 隐私保护是产品护城河

本项目不同于普通AI陪伴产品、心理聊天产品或家庭管理工具。

它的核心信任来自：

- 原始数据本地保存；
- 云端分析必须授权；
- 数据上传前明确提示；
- 优先上传脱敏摘要；
- 用户可以删除和导出数据；
- 家庭成员拥有独立权限；
- AI不帮助任何人控制另一个人。

隐私不是负担。隐私是AI家庭文明顾问最重要的护城河之一。

---

## 三、总体三层架构

AI家庭文明顾问建议采用三层架构：

```text
┌────────────────────────────────────────────┐
│            Cloud General Intelligence       │
│            云端通用能力层                   │
│  通用推理 / 模型升级 / 脱敏摘要分析 / 知识进化 │
└────────────────────────────────────────────┘
                    ▲
                    │ 授权、脱敏、可选
                    ▼
┌────────────────────────────────────────────┐
│            Local AI Understanding Layer     │
│            本地AI理解层                     │
│  本地LLM / RAG / 语义搜索 / 总结 / 模式识别    │
└────────────────────────────────────────────┘
                    ▲
                    ▼
┌────────────────────────────────────────────┐
│            Local Family Data Layer          │
│            本地家庭数据层                   │
│  NAS / 本地文件夹 / 日记 / 会议 / 照片 / 文档    │
└────────────────────────────────────────────┘
```

核心原则：

**本地数据层保存真实家庭数据。**  
**本地AI层理解、整理和调用家庭记忆。**  
**云端能力层只在授权后提供通用智慧和高级推理。**

---

## 四、本地家庭数据层

本地家庭数据层是整个系统的基础。

它可以部署在：

- 家庭NAS；
- 本地小服务器；
- 迷你主机；
- 个人电脑；
- 家庭私有云；
- 未来的家庭文明AI盒子。

### 1. 数据类型

第一版可支持：

- Markdown；
- TXT；
- PDF；
- DOCX；
- 手动输入记录；
- 家庭会议记录；
- 日记；
- 亲子对话记录；
- 夫妻沟通记录；
- 家庭冲突复盘；
- 重要家庭文件。

未来可扩展：

- 图片；
- 语音；
- 视频；
- 聊天记录导入；
- 邮件；
- 家庭群记录；
- 孩子成长档案；
- 学习资料；
- 医疗和心理资料。

### 2. 数据分类

数据应至少分为四类：

#### 个人私密数据

仅个人可见。  
例如：个人日记、自我反思、羞耻感记录、创伤记录。

#### 双方共享数据

由两个人共同授权查看。  
例如：夫妻沟通记录、亲子谈话记录。

#### 全家共享数据

全家可以查看。  
例如：家庭会议纪要、家庭规则、共同计划。

#### 保护性数据

涉及儿童安全、暴力、自伤、他伤、虐待等风险时，需要特殊保护和安全提示。

### 3. 数据生命周期

每条数据应支持：

- 创建；
- 标签；
- 权限；
- 摘要；
- 检索；
- 关联；
- 导出；
- 删除；
- 审计记录。

用户必须拥有最终数据控制权。

---

## 五、本地AI理解层

本地AI理解层负责把沉睡数据变成可理解的家庭记忆。

它不追求一开始达到云端顶级大模型能力，而是强调：

**安全、私有、常驻、低成本、可离线、懂这个家庭。**

### 1. 本地模型

可使用本地运行的小型或中型开源模型。

主要功能：

- 基础问答；
- 文档总结；
- 家庭会议纪要；
- 冲突复盘；
- 个人成长反思；
- 与本地知识库结合的RAG问答。

### 2. 本地向量检索

家庭资料进入系统后，应进行：

- 文档切分；
- 本地向量化；
- 标签识别；
- 摘要生成；
- 语义索引；
- 原文引用。

这样用户可以问：

- 最近三个月我们最常见的冲突是什么？
- 孩子最近表达过哪些压力？
- 哪些记录与“控制”有关？
- 哪些内容体现了“没有被看见”？
- 上次家庭会议约定了什么？

### 3. 模式识别

AI顾问需要识别的不只是关键词，而是关系模式：

- 控制模式；
- 讨好模式；
- 羞耻模式；
- 受害者模式；
- 牺牲模式；
- 情绪勒索模式；
- 攻击—退缩循环；
- 压迫—反抗循环；
- 自我否定—自我破坏循环。

### 4. 文明语言转换

系统应帮助家庭把攻击性语言转化为更可沟通的表达。

例如：

“你从来不听我说话。”  
转换为：  
“我感到自己没有被看见，也很孤独。”

“你不懂感恩。”  
转换为：  
“我害怕自己的付出没有意义。”

“我恨这个家。”  
转换为：  
“我在这里太痛苦了，以至于无法感到安全。”

### 5. 离线能力

没有互联网时，系统仍应支持：

- 本地资料搜索；
- 本地问答；
- 家庭会议总结；
- 冲突复盘；
- 个人成长记录；
- 本地知识库阅读。

离线能力是信任的一部分。

---

## 六、云端通用能力层

云端大模型不应默认读取家庭原始数据。

云端只承担三类职责：

### 1. 通用智慧支持

例如：

- 家庭文明理论；
- 心理学通用知识；
- 关系模式解释；
- 教育与沟通建议；
- 多语言表达；
- 高质量写作和总结。

### 2. 模型与系统进化

云端可以帮助：

- 更新提示词；
- 更新关系模式库；
- 更新家庭文明知识库；
- 更新本地模型能力；
- 更新伦理规则和安全边界。

### 3. 授权后的高级分析

如果用户明确授权，可以将脱敏摘要上传云端进行高级分析。

原则是：

- 不上传原始家庭数据；
- 优先上传摘要；
- 摘要需脱敏；
- 上传前明确提示；
- 用户可取消；
- 云端不应默认保存家庭隐私。

---

## 七、数据流设计

### 1. 默认本地数据流

```text
家庭资料 → 本地存储 → 本地索引 → 本地模型 → 本地回答
```

无云端参与。

### 2. 授权云端数据流

```text
家庭资料 → 本地摘要 → 脱敏处理 → 用户确认 → 云端分析 → 返回本地 → 本地保存
```

### 3. 禁止默认数据流

```text
家庭原始资料 → 自动上传云端
```

这一数据流应被明确禁止。

---

## 八、权限设计

AI家庭文明顾问必须支持家庭成员级权限。

### 1. 个人空间

每个家庭成员拥有独立私密空间。

### 2. 共享空间

经授权后，部分内容可进入共享空间。

### 3. 家庭空间

全家共同使用的会议、规则、计划和公开记录。

### 4. 儿童保护空间

儿童数据必须有额外保护。  
父母不能以“我是监护人”为理由无限制读取孩子所有内心记录。  
系统应鼓励尊重孩子人格，而不是帮助父母监控孩子。

### 5. 审计机制

重要数据访问应有记录：

- 谁查看了什么；
- 何时查看；
- 是否导出；
- 是否上传云端；
- 是否删除。

---

## 九、安全与伦理边界

AI家庭文明顾问必须明确知道自身边界。

### 1. 不能成为控制工具

系统不得帮助父母监控孩子、操纵孩子、逼迫孩子服从。

### 2. 不能成为关系武器

系统不得帮助伴侣搜集对方弱点、证明对方有罪、制造新的控制。

### 3. 不能制造依赖

系统应帮助人提升现实沟通能力，而不是让人逃避现实关系。

### 4. 不能替代专业帮助

涉及自伤、他伤、家暴、虐待、严重精神危机、违法风险时，必须引导现实世界求助。

### 5. 不能收割焦虑

商业功能不得以制造恐惧、夸大危机、诱导依赖为基础。

---

## 十、部署形态

### 1. 本地电脑版

第一阶段最现实。

用户选择本地文件夹作为家庭文明档案库，在电脑上运行本地AI与Web界面。

### 2. Docker Compose 版

适合开发者和NAS用户。

一键启动：

- Web界面；
- 本地LLM接口；
- 文档处理服务；
- 向量数据库；
- 本地数据库。

### 3. NAS插件版

适合已有NAS用户。

未来可适配：

- Synology；
- QNAP；
- TrueNAS；
- Unraid；
- CasaOS；
- 其他家庭服务器系统。

### 4. 家庭文明AI盒子

未来硬件方向。

可能形态：

- 迷你主机；
- 家庭AI服务器；
- NAS + AI一体设备；
- 离线家庭文明顾问终端。

---

## 十一、最小技术模块

第一版技术模块建议：

```text
local-first-ai-family-advisor/
├── web-ui/
├── document-ingestion/
├── local-llm/
├── local-rag/
├── vector-store/
├── family-memory-db/
├── permission-system/
├── advisor-prompts/
├── ethics-rules/
└── export-delete-tools/
```

### Web UI

提供上传、搜索、问答、会议总结、权限设置。

### Document Ingestion

处理Markdown、TXT、PDF、DOCX。

### Local LLM

本地模型问答与总结。

### Local RAG

基于家庭资料进行检索增强生成。

### Vector Store

本地向量检索。

### Family Memory DB

保存事件、标签、权限、摘要、行动项。

### Permission System

家庭成员级权限控制。

### Advisor Prompts

家庭文明顾问提示词与角色原则。

### Ethics Rules

禁止控制、羞辱、操纵、焦虑收割等规则。

### Export/Delete Tools

支持用户导出和删除数据。

---

## 十二、长期架构方向

最终，AI家庭文明顾问应发展为：

```text
家庭数据中心
+ 家庭文明知识库
+ 本地私有AI
+ 云端通用智慧
+ 家庭成员权限系统
+ 家庭会议系统
+ 个人成长系统
+ 亲子关系系统
+ 夫妻关系系统
+ 危机识别与转介系统
+ 多语言文明传播系统
```

它不是一个聊天机器人。

它是：

**家庭关系操作系统。**  
**家庭文明记忆系统。**  
**人格尊严保护系统。**  
**AI文明基础设施。**

---

## 十三、核心产品口号

**把家庭数据变成家庭记忆。**  
**把家庭记忆变成关系理解。**  
**把关系理解变成文明行动。**

或者：

**家庭数据不出家门，家庭文明从理解开始。**

---

## English Version

# Local-First AI Family Advisor Architecture

## I. Core Architectural Principle

If the AI Family Civilization Advisor is to truly enter the home, the first issue is not model capability. It is trust.

Family data is among the most sensitive, intimate, and deeply personal data a human being can have. It includes not only photos, videos, documents, and chat records, but also family conflicts, children’s pain, marital tension, wounds from the family of origin, shame, financial stress, educational anxiety, emotional breakdowns, family meetings, repair processes, and many secrets never revealed to the outside world.

If such data is uploaded to the cloud by default, the AI Family Civilization Advisor cannot earn real trust.

Therefore, from day one, the Advisor must be built on a local-first architecture:

**Family data stays at home.**  
**Real family life is stored locally; the cloud provides only general intelligence.**  
**AI must serve human dignity, not possess human privacy.**

Local-first is not merely a technical preference. It is the ethical, product, and trust foundation of this project.

---

## II. Why Local-First Is Necessary

### 1. Family data is extremely sensitive

Family data is different from ordinary office data or public content.

It may include:

- children’s diaries;
- parent-child conflict records;
- marital arguments;
- family meeting notes;
- signs of domestic violence or emotional harm;
- financial stress;
- medical and psychological states;
- personal shame;
- family-of-origin trauma;
- unspoken feelings between family members.

Once exposed, such data does not merely become an information leak. It may cause secondary harm, collapse of trust, spread of shame, and real-world risk.

Therefore, the original data of the family must be stored locally by default.

### 2. Privacy exists inside the family

A family is not a boundaryless data collective.

Children have privacy from parents.  
Partners have privacy from each other.  
Parents also have legitimate boundaries with children.  
Every family member should have a private space.

Therefore, it is not enough to say “family data belongs to the family.” More accurately:

**Family data must be managed by person, relationship, context, and consent.**

The Advisor must not become a tool for parents to monitor children or for partners to control one another.

### 3. Privacy is a moat

This project is different from ordinary AI companion products, psychological chatbots, or family management tools.

Its trust comes from:

- original data stored locally;
- cloud analysis only with consent;
- explicit notice before upload;
- anonymized summaries before raw text;
- user-controlled deletion and export;
- member-level permissions;
- AI never helping one person control another.

Privacy is not a burden. It is one of the most important moats of the AI Family Civilization Advisor.

---

## III. Three-Layer Architecture

The AI Family Civilization Advisor should use a three-layer architecture:

```text
┌────────────────────────────────────────────┐
│            Cloud General Intelligence       │
│  General reasoning / model upgrade /        │
│  anonymized analysis / knowledge evolution  │
└────────────────────────────────────────────┘
                    ▲
                    │ consent-based, anonymized, optional
                    ▼
┌────────────────────────────────────────────┐
│            Local AI Understanding Layer     │
│  Local LLM / RAG / semantic search /         │
│  summarization / pattern recognition        │
└────────────────────────────────────────────┘
                    ▲
                    ▼
┌────────────────────────────────────────────┐
│            Local Family Data Layer          │
│  NAS / local folders / diaries / meetings /  │
│  photos / documents                         │
└────────────────────────────────────────────┘
```

Core principles:

**The local data layer stores real family data.**  
**The local AI layer understands, organizes, and retrieves family memory.**  
**The cloud layer provides general intelligence only after consent.**

---

## IV. Local Family Data Layer

The local family data layer is the foundation of the entire system.

It may be deployed on:

- a home NAS;
- a local small server;
- a mini PC;
- a personal computer;
- a private home cloud;
- a future Family Civilization AI Box.

### 1. Data types

The first version may support:

- Markdown;
- TXT;
- PDF;
- DOCX;
- manually entered records;
- family meeting notes;
- diaries;
- parent-child conversations;
- couple communication records;
- family conflict reviews;
- important family documents.

Future versions may support:

- images;
- audio;
- video;
- chat import;
- email;
- family group records;
- child growth archives;
- learning materials;
- medical and psychological documents.

### 2. Data categories

Data should be divided into at least four categories:

#### Personal private data

Visible only to the individual.  
Examples: diaries, self-reflection, shame records, trauma records.

#### Shared data between two people

Visible only after mutual authorization.  
Examples: couple communication records, parent-child conversation records.

#### Whole-family shared data

Visible to the family.  
Examples: family meeting notes, family rules, shared plans.

#### Protective data

Data involving child safety, violence, self-harm, harm to others, or abuse requires special protection and safety guidance.

### 3. Data lifecycle

Each record should support:

- creation;
- tagging;
- permissions;
- summarization;
- retrieval;
- linking;
- export;
- deletion;
- audit logs.

The user must retain ultimate control over the data.

---

## V. Local AI Understanding Layer

The local AI understanding layer turns sleeping data into understandable family memory.

It does not need to match the strongest cloud models at first. It must emphasize:

**safety, privacy, persistence, low cost, offline capability, and deep familiarity with this family.**

### 1. Local model

A locally running small or medium open model can support:

- basic Q&A;
- document summarization;
- family meeting notes;
- conflict review;
- personal growth reflection;
- RAG-based answers over the local knowledge base.

### 2. Local vector retrieval

When family materials enter the system, they should be:

- chunked;
- embedded locally;
- tagged;
- summarized;
- semantically indexed;
- linked to original references.

Then users can ask:

- What are our most common conflicts over the past three months?
- What pressures has the child expressed recently?
- Which records are related to “control”?
- Which content reflects “not being seen”?
- What did we agree on in the last family meeting?

### 3. Pattern recognition

The Advisor must recognize not only keywords, but relationship patterns:

- control pattern;
- pleasing pattern;
- shame pattern;
- victim pattern;
- sacrifice pattern;
- emotional blackmail pattern;
- attack-withdraw cycle;
- oppression-rebellion cycle;
- self-denial and self-sabotage cycle.

### 4. Civilized language translation

The system should help families transform attacking language into more communicable expressions.

For example:

“You never listen to me.”  
becomes:  
“I feel unseen and alone.”

“You are ungrateful.”  
becomes:  
“I am afraid that my sacrifice has no meaning.”

“I hate this family.”  
becomes:  
“I am in so much pain here that I cannot feel safe.”

### 5. Offline capability

Without the internet, the system should still support:

- local search;
- local Q&A;
- family meeting summaries;
- conflict reviews;
- personal growth records;
- local knowledge reading.

Offline capability is part of trust.

---

## VI. Cloud General Intelligence Layer

The cloud model should not read raw family data by default.

It should serve only three purposes:

### 1. General intelligence support

For example:

- Family Civilization theory;
- general psychological knowledge;
- relationship pattern explanation;
- education and communication suggestions;
- multilingual expression;
- high-quality writing and summarization.

### 2. Model and system evolution

The cloud may help update:

- prompts;
- relationship pattern libraries;
- Family Civilization knowledge bases;
- local model capabilities;
- ethical rules and safety boundaries.

### 3. Advanced analysis after consent

If the user explicitly authorizes it, anonymized summaries may be sent to the cloud for advanced analysis.

Principles:

- no raw family data by default;
- summaries before raw content;
- anonymization;
- explicit user confirmation;
- cancellable upload;
- no default retention of family privacy.

---

## VII. Data Flow Design

### 1. Default local flow

```text
Family material → local storage → local indexing → local model → local answer
```

No cloud involvement.

### 2. Consent-based cloud flow

```text
Family material → local summary → anonymization → user confirmation → cloud analysis → return to local system → local storage
```

### 3. Prohibited default flow

```text
Raw family material → automatic cloud upload
```

This flow should be explicitly prohibited.

---

## VIII. Permission Design

The Advisor must support member-level permissions.

### 1. Personal space

Each family member has an independent private space.

### 2. Shared space

Some content may enter a shared space only after consent.

### 3. Family space

Meetings, rules, plans, and public records shared by the family.

### 4. Child protection space

Children’s data requires extra protection.  
Parents should not have unlimited access to a child’s inner records simply because they are guardians.  
The system should encourage respect for children’s personhood, not parental surveillance.

### 5. Audit mechanism

Important data access should be logged:

- who viewed what;
- when;
- whether it was exported;
- whether it was uploaded to the cloud;
- whether it was deleted.

---

## IX. Safety and Ethical Boundaries

The Advisor must know its limits.

### 1. It must not become a control tool

The system must not help parents monitor, manipulate, or force children into obedience.

### 2. It must not become a relationship weapon

The system must not help partners collect weaknesses, prove guilt, or create new forms of control.

### 3. It must not create dependency

The system should help people develop real-world communication skills, not escape real relationships.

### 4. It must not replace professional help

When self-harm, harm to others, domestic violence, abuse, severe mental crisis, or legal risk is involved, it must guide people toward real-world help.

### 5. It must not exploit anxiety

Commercial features must not be based on fear, crisis exaggeration, or induced dependency.

---

## X. Deployment Forms

### 1. Local desktop version

The most realistic first stage.

Users choose a local folder as the Family Civilization archive and run local AI with a Web interface.

### 2. Docker Compose version

For developers and NAS users.

One-click startup:

- Web interface;
- local LLM API;
- document processing service;
- vector database;
- local database.

### 3. NAS plugin version

For existing NAS users.

Future targets:

- Synology;
- QNAP;
- TrueNAS;
- Unraid;
- CasaOS;
- other home server systems.

### 4. Family Civilization AI Box

Future hardware direction.

Possible forms:

- mini PC;
- home AI server;
- NAS + AI integrated device;
- offline Family Civilization Advisor terminal.

---

## XI. Minimum Technical Modules

The first version may use:

```text
local-first-ai-family-advisor/
├── web-ui/
├── document-ingestion/
├── local-llm/
├── local-rag/
├── vector-store/
├── family-memory-db/
├── permission-system/
├── advisor-prompts/
├── ethics-rules/
└── export-delete-tools/
```

---

## XII. Long-Term Architecture

Eventually, the AI Family Civilization Advisor should become:

```text
family data center
+ Family Civilization knowledge base
+ local private AI
+ cloud general intelligence
+ family member permission system
+ family meeting system
+ personal growth system
+ parent-child relationship system
+ couple relationship system
+ crisis detection and referral system
+ multilingual civilizational communication system
```

It is not a chatbot.

It is:

**a family relationship operating system;**  
**a family civilization memory system;**  
**a personhood dignity protection system;**  
**AI civilization infrastructure.**

---

## XIII. Product Slogans

**Turn family data into family memory.**  
**Turn family memory into relationship understanding.**  
**Turn relationship understanding into civilized action.**

Or:

**Family data stays at home. Family civilization begins with understanding.**
