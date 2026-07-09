import type { NextConfig } from "next";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { resumeData } from "./src/data/resumeData";

function stripHtml(html: string): string {
  return html
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "$1")
    .replace(/<em[^>]*>(.*?)<\/em>/gi, "$1")
    .replace(/<a[^>]*>(.*?)<\/a>/gi, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

const PUBLIC_DIR = join(process.cwd(), "public");

try {
  mkdirSync(PUBLIC_DIR, { recursive: true });
} catch (e) {}

// 1. Generate llms.txt
const cleanUrl = resumeData.personalInfo.portfolioUrl;
const llmsContent = `# ${resumeData.personalInfo.name} — ${resumeData.personalInfo.title}

> ${resumeData.personalInfo.summary}

This is a machine-readable portal for ${resumeData.personalInfo.name}'s interactive resume, providing curated links and full context for AI crawlers, search agents, and LLMs.

## Core Resume
- [Full Markdown Resume](${cleanUrl}/index.html.md) : Detailed text-based representation of Dhruv's experience, skills, and background.
- [Live Interactive Resume](${cleanUrl}) : The main interactive web page.

## Professional Profiles
- [GitHub Profile](${resumeData.personalInfo.github}) : Open-source repositories, packages, and code contributions.
- [LinkedIn Profile](${resumeData.personalInfo.linkedin}) : Professional network, history, and endorsements.
- [CodePen Profile](https://codepen.io/${resumeData.personalInfo.codepenUsername}) : Frontend code pens and UI/UX design experiments.

## Verified Credentials
- [HackerRank JavaScript Certification](https://www.hackerrank.com/certificates/8d3c5a1e057d) : Verified certification in JavaScript.
- [HackerRank SQL Certification](https://www.hackerrank.com/certificates/9ccd8ad6e376) : Verified certification in SQL database design and query writing.

## Contact Channels
- [Email](mailto:${resumeData.personalInfo.email}) : Direct contact for projects and employment opportunities.
- [WhatsApp Chat](https://wa.me/${resumeData.personalInfo.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}) : Direct chat link.

## Optional
- [Gitfolio Portfolio](https://dhruvakbarigitfolio.netlify.app) : Alternative portfolio page showcasing GitHub repository stats.
- [Print Version](${cleanUrl}?print=true) : Optimized CSS layout for physical printing or PDF generation.
`;

try {
  writeFileSync(join(PUBLIC_DIR, "llms.txt"), llmsContent, "utf-8");
  console.log("Successfully generated public/llms.txt during config load");
} catch (error) {
  console.error("Failed to generate public/llms.txt:", error);
}

// 2. Generate index.html.md
const info = resumeData.personalInfo;
const mdContent = `# Resume: ${info.name}
**${info.title}**

Location: ${info.address}
Email: ${info.email}
Phone: ${info.phone}
WhatsApp: ${info.whatsapp}
Website: [${info.portfolio}](${info.portfolioUrl})
LinkedIn: [linkedin.com/in/${info.linkedinUsername}](${info.linkedin})
GitHub: [github.com/${info.githubUsername}](${info.github})
CodePen: [codepen.io/${info.codepenUsername}](https://codepen.io/${info.codepenUsername})

---

## Professional Summary
${info.summary}

---

## Core Competencies & Skills
${resumeData.skills
  .map((group) => {
    const skillList = group.skills.map((s) => s.name).join(", ");
    return `- **${group.category}**: ${skillList}`;
  })
  .join("\n")}

---

## Professional Experience
${resumeData.experiences
  .map((exp) => {
    const techStack = exp.tech.map((t) => t.name).join(", ");
    const responsibilitiesList = exp.responsibilities
      .map((r) => `- ${stripHtml(r)}`)
      .join("\n");

    return `### ${exp.position}
**${exp.company}** | ${exp.duration} | ${exp.location}
${responsibilitiesList}
- **Key Achievement**: ${stripHtml(exp.achievements)}
- **Technologies**: ${techStack}`;
  })
  .join("\n\n")}

---

## Certifications & Verifications
${resumeData.certifications
  .map((cert) => {
    return `- **${cert.title}** (Issued by ${cert.issuer})
  ${cert.description}
  Verification Link: [${cert.verifyUrl}](${cert.verifyUrl})`;
  })
  .join("\n")}

---

## Education
${resumeData.education
  .map((edu) => {
    return `- **${edu.degree}**
  ${edu.school} (${edu.duration})
  Key Courses/Focus: ${edu.tags.join(", ")}`;
  })
  .join("\n")}

---

## Languages
${resumeData.languages
  .map((lang) => {
    return `- **${lang.name}**: ${lang.level}`;
  })
  .join("\n")}
`;

try {
  writeFileSync(join(PUBLIC_DIR, "index.html.md"), mdContent, "utf-8");
  console.log("Successfully generated public/index.html.md during config load");
} catch (error) {
  console.error("Failed to generate public/index.html.md:", error);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
export type nextConfig = typeof nextConfig;
export type stripHtml = typeof stripHtml;
