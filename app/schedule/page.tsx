import { Metadata } from "next";
import { CalendarForm } from "@/components/calendar-form";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Negus Legal",
  description: "Schedule a consultation with our legal experts",
};

export default function Schedule() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-playfair text-4xl font-bold text-primary mb-8">Schedule a Consultation</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Book a consultation with our legal experts to discuss your needs and how we can help protect your interests.
      </p>
      <CalendarForm />
    </div>
  );
}