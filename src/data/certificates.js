const badge = (file) => process.env.PUBLIC_URL + "/img/certificate/" + file;

export const certificates = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    issued: "2026-08",
    badge: badge("aws-developer-associate.png"),
    url: "https://www.credly.com/badges/baa2df0f-55d9-438c-9b38-1e476154fc51",
  },
  {
    title: "Astronomer Certified for AI Orchestration Fundamentals",
    issuer: "Astronomer",
    issued: "2026-10",
    badge: badge("astronomer-ai-orchestration.png"),
    url: "https://www.credly.com/badges/13159c0c-bdc3-43ef-a30a-301ea3e76aef",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    issued: "2026-04",
    badge: badge("anthropic-mcp-advanced-topics.jpg"),
    wide: true,
    url: "https://verify.skilljar.com/c/uxz77yqxsb4t",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    issued: "2026-04",
    badge: badge("anthropic-mcp-introduction.jpg"),
    wide: true,
    url: "https://verify.skilljar.com/c/gioccjsxkunp",
  },
  {
    title: "Multicloud Network Associate",
    issuer: "Aviatrix",
    issued: "2025-08",
    badge: badge("aviatrix.png"),
    url: "https://www.credly.com/badges/583ed43f-7d3a-4eda-837e-931a524c5161",
  },
];
