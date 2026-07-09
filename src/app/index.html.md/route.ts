import { resumeData } from "@/data/resumeData";

export const dynamic = "force-static";

function stripHtml(html: string): string {
  return html
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "$1") // Keep content of strong tag but remove tags
    .replace(/<em[^>]*>(.*?)<\/em>/gi, "$1")
    .replace(/<a[^>]*>(.*?)<\/a>/gi, "$1")
    .replace(/<[^>]*>/g, "") // Strip any remaining tags
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

export function GET() {
  const info = resumeData.personalInfo;

  const content = `# Resume: ${info.name}
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

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
