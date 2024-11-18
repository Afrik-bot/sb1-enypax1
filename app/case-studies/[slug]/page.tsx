import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies-data";
import { CaseStudyContent } from "@/components/case-study-content";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = caseStudies.find((study) => study.slug === params.slug);
  
  if (!study) {
    return {
      title: "Case Study Not Found | Negus Legal",
    };
  }

  return {
    title: `${study.title} | Negus Legal Case Studies`,
    description: study.description,
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((study) => study.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="mb-8">
        <h1 className="font-playfair text-4xl font-bold text-primary mb-4">
          {study.title}
        </h1>
        <p className="text-secondary font-medium">
          {study.category}
        </p>
      </div>

      <CaseStudyContent content={study.content} />
    </article>
  );
}