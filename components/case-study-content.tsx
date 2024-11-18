import React from "react";

export function CaseStudyContent({ content }: { content: string[] }) {
  return (
    <div className="prose prose-lg max-w-none">
      {content.map((section, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: section }} />
      ))}
    </div>
  );
}