export const categories = [
    {
      "code": "AP", 
      "name": "Alignment Principles", 
      "pathology": "normative void", 
      "color": "#E6FFE9",
      "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
    }
  ];
   export const cards = [
    {
      "category": "AP",
      "name": "Transparency",
      "definition": "Make decision-making processes and system operations visible and understandable to stakeholders.",
      "human": "Being open about one's reasoning and intentions when making decisions that affect others.",
      "organizational": "Documenting and communicating how key decisions are made and what data informs them.",
      "professional": "Providing clear explanations of technical systems and their limitations to clients and users.",
      "machine": "Designing systems with interpretable outputs and accessible audit trails.",
      "failureModes": {
        "human": "A manager makes arbitrary decisions without explaining the rationale to their team.",
        "organizational": "A company deploys algorithms that affect users' lives without disclosing how they work.",
        "professional": "A data scientist builds a black-box model and refuses to explain its predictions to stakeholders.",
        "machine": "An AI system makes high-stakes recommendations with no explanation of how it reached its conclusions."
      }
    },
    {
      "category": "AP",
      "name": "Human Review of Automated Decisions",
      "definition": "Ensure meaningful human oversight of consequential automated decisions.",
      "human": "Seeking human judgment before accepting automated recommendations that significantly impact others.",
      "organizational": "Establishing processes for human experts to review and override automated systems.",
      "professional": "Designing workflows that keep humans in the loop for critical decisions.",
      "machine": "Building systems that flag uncertain or high-stakes cases for human review.",
      "failureModes": {
        "human": "A person blindly follows GPS directions into a dangerous situation without questioning them.",
        "organizational": "A company fires employees based solely on automated performance metrics without human consideration.",
        "professional": "An engineer designs a fully automated system for medical diagnoses with no physician oversight.",
        "machine": "An automated loan approval system denies applications without any human review process."
      }
    },
    {
      "category": "AP",
      "name": "Security by Design",
      "definition": "Build security and privacy protections into systems from the ground up.",
      "human": "Considering security implications before sharing information or taking actions.",
      "organizational": "Integrating security requirements into every stage of product development.",
      "professional": "Anticipating and mitigating security risks as a core part of system design.",
      "machine": "Implementing robust authentication, encryption, and access controls from the start.",
      "failureModes": {
        "human": "A person uses the same weak password across all their accounts and shares it with colleagues.",
        "organizational": "A startup rushes to market without implementing basic security measures, leading to a data breach.",
        "professional": "A developer adds security features as an afterthought, leaving critical vulnerabilities.",
        "machine": "A system stores sensitive user data in plain text without encryption or access controls."
      }
    },
    {
      "category": "AP",
      "name": "Representative and High Quality Data",
      "definition": "Use data that accurately reflects the diversity of affected populations and meets quality standards.",
      "human": "Seeking diverse perspectives and information sources before making judgments about groups.",
      "organizational": "Ensuring training datasets include representative samples from all relevant populations.",
      "professional": "Validating data quality and checking for biases before using it to build systems.",
      "machine": "Training models on datasets that are balanced, accurate, and representative of real-world diversity.",
      "failureModes": {
        "human": "A person forms stereotypes based on limited exposure to a particular group.",
        "organizational": "A company trains a hiring algorithm on historical data that reflects past discrimination.",
        "professional": "A researcher uses a convenience sample that excludes marginalized communities from their study.",
        "machine": "A facial recognition system performs poorly on certain demographics because they were underrepresented in training data."
      }
    },
    {
      "category": "AP",
      "name": "Ability to Restrict Processing",
      "definition": "Provide individuals with meaningful control over how their data is collected and used.",
      "human": "Respecting others' wishes about how their personal information is shared and used.",
      "organizational": "Implementing systems that allow users to opt out, delete their data, or limit processing.",
      "professional": "Designing interfaces that make privacy controls accessible and effective.",
      "machine": "Building technical mechanisms for data deletion, processing restrictions, and consent management.",
      "failureModes": {
        "human": "A person shares photos of others on social media without asking permission.",
        "organizational": "A company makes it nearly impossible for users to delete their accounts or data.",
        "professional": "A product manager designs dark patterns that trick users into consenting to data collection.",
        "machine": "A system continues to process user data even after they've requested deletion or opted out."
      }
    },
    {
      "category": "AP",
      "name": "Consideration of Long-Term Effects",
      "definition": "Evaluate and account for the extended consequences of decisions and systems over time.",
      "human": "Thinking beyond immediate outcomes to consider how actions might affect future generations.",
      "organizational": "Conducting impact assessments that examine long-term societal and environmental effects.",
      "professional": "Designing systems with sustainability and long-term societal impact in mind.",
      "machine": "Building systems that remain safe and beneficial as they scale and evolve over time.",
      "failureModes": {
        "human": "A person makes decisions based solely on short-term convenience without considering future consequences.",
        "organizational": "A company prioritizes quarterly profits over long-term sustainability and social responsibility.",
        "professional": "An engineer optimizes for immediate performance metrics without considering how the system might be misused at scale.",
        "machine": "An AI system optimized for engagement inadvertently promotes addictive behavior and mental health issues over time."
      }
    }
  ]