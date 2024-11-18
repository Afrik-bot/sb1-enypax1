"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/case-studies-data";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world examples of how we've helped our clients succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/60 transition-opacity group-hover:opacity-70" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-secondary font-medium mb-2">
                  {study.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-white/90 mb-4">{study.description}</p>
                <Link href={`/case-studies/${study.slug}`}>
                  <Button variant="secondary" className="w-fit">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}