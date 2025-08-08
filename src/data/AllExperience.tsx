export const AllExperienceData: AllExperienceDataInterface[] = [
  {
    company: "Goldman Sachs",
    role: "Associate Software Development Engineer",
    start_date: "April 2025",
    end_date: "Present",
    description: [
      "Part of the Client Assets Engineering Team.",
    ],
    url: "https://www.goldmansachs.com",
  },
  {
    company: "Mobile Premier League",
    role: "Software Development Engineer",
    start_date: "Oct 2022",
    end_date: "Jul 2023",
    description: [
      "Achieved a 40% reduction in infrastructure costs and utilization by implementing a library for metrics collection and auto-scaling using OpenTelemetry, enabling graceful node shutdowns and adoption multiple cross-functional teams.",
      "Boosted user engagement and retention by 70% by expanding matchmaking systems with cross-country support, enabling seamless interactions across international user bases.",
      "Accelerated development and enhanced stability by designing backend systems and libraries with extensive end-to-end testing for Node.js-based microservice games, streamlining processes and eliminating boilerplate code across 7 games.",
      "Halved testing time for the Node.js team by using Kubernetes to run required non-Node.js services locally, enabling quick tests without full deployment.",
      "Simplified payment and game data storage and access across the organization, by developing centralized Java services and a Kafka-powered data pipeline.",
      "Played a key role in the successful Go-To-Market execution by contributing to the Distributed Systems team and leading backend development for a new application.",
    ],
    url: "https://mpl.live",
  },
  {
    company: "Amadeus Software Labs",
    role: "Software Development Engineer",
    start_date: "Jan 2021",
    end_date: "Oct 2022",
    description: [
      "Reduced chatbot development effort by over 50% by creating 'Chatbot as a Service,' a modular Java framework using Spring Boot, which integrated multiple NLP APIs and streamlined database interactions to accelerate bootstrapping.",
      "Pitched the solution to cross-functional teams, driving adoption by 3 teams and enabling efficient chatbot development.",
      "Reduced incidents by 40% by enhancing the stability, recovery mechanisms and regression tests of the C++ backend.",
      "Increased data recovery efficiency by 80% by developing a Splunk dashboard to monitor incidents in real time.",
      "Fixed Oracle SQL database cron job scripts, enabling the automated periodic purging of 10+ TB of unwanted SQL data, significantly reducing database storage usage.",
    ],
    url: "https://amadeus.com/",
  },
  {
    company: "Google Summer of Code",
    role: "Software Developer",
    start_date: "Jun 2020",
    end_date: "Aug 2020",
    description: [
      "Generated and deployed serverless Machine Learning models, CI/CD pipelines, and APIs for fake news detection.",
      "Reduced model size of TensorFlow machine learning models by 85% and hosted them on AWS Lambda.",
      "Developed APIs and a Chrome extension to detect fake news, clickbait, and misinformation in images on the internet.",
    ],
    url: "https://summerofcode.withgoogle.com/archive/2020/projects/5793865656696832",
  },
];

interface AllExperienceDataInterface {
  company: string;
  role: string;
  start_date: string;
  end_date: string;
  description: string[];
  url: string;
}
