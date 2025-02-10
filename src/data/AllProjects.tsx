export const AllProjecs : AllProjectsInterface[]= [
  {
    title: "Retrieval-Augmented Generation for Internal Documentation",
    // date: "October 22, 2020",
    url: "https://github.com/pranavgoyanka/RAG-on-Markdown-Docs",
    tags: "RAG, LLMs",
    description:
      "Developed a RAG pipeline optimizing LLM responses using proprietary docs, with a Flask-based UI for uploads and interaction, leveraging ChromaDB for vector representation.",
  },
  {
    title: "Trending Movie Browser",
    // date: "May 7, 2020",
    url: "https://movie-browser-react-tau.vercel.app/",
    tags: "TypeScript, NodeJS, ReactJS, Tailwind CSS, Vite",
    description: "Built a movie browsing web app with debouncing support that features trending movies based on most searched titles.",
  },
  {
    title: "Open Poker",
    // date: "October 22, 2020",
    url: "https://openpoker.vercel.app/",
    tags: "TypeScript, NodeJS, ReactJS, Tailwind CSS",
    description:
      "Open Poker is a high-stakes (read silly) and speedy variant of traditional poker where all cards are dealt face-up, eliminating the element of hidden information. Once the deal is complete, the player with the best hand wins immediately.",
  },
  {
    title: "Automated Trading System",
    url: "https://github.com/pranavgoyanka/cs542-common-task",
    tags: "LSTM, TensorFlow",
    description: "Developed LSTM models to predict daily temperatures for four cities using multi-source weather data, leveraging predictions to execute automated trades on the Kalshi exchange and prediction market."
  },
  {
    title: "Operator Placement on the Edge",
    url: "",
    tags: "Streaming Systems, Edge Compute, Apache Flink",
    description: "Enhanced Apache Flink with heterogeneous device support and dynamic task offloading to edge nodes, enabling efficient edge computing for geo-distributed queries while minimizing latency."
  },
  {
    title: "Fault Tolerant Key-Value Store",
    url: "",
    tags: "Distributed Systems, Raft Consensus Algorithm, Go",
    description: "Built a scalable key-value storage service by implementing the Raft distributed consensus algorithm in Go."
  }

];

/*
{
  title: "Trending Movie Browser",
  url: "https://movie-browser-react-tau.vercel.app/",
  tags: "TypeScript, NodeJS, ReactJS, Tailwind CSS, Vite",
  description: ""
}
*/

interface AllProjectsInterface {
  title: string,
  url: string,
  tags: string,
  description: string
}