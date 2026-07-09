import { resumeData } from "@/data/resumeData";

export const dynamic = "force-static";

export function GET() {
  const cleanUrl = resumeData.personalInfo.portfolioUrl;

  const content = `# ${resumeData.personalInfo.name} — ${resumeData.personalInfo.title}

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

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
