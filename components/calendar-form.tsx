"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM"
];

export function CalendarForm() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) {
      toast({
        variant: "destructive",
        title: "Please select both date and time",
      });
      return;
    }

    try {
      // Here you would integrate with your scheduling service
      toast({
        title: "Consultation scheduled!",
        description: "We'll send you a confirmation email shortly.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to schedule consultation",
        description: "Please try again or contact us directly.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Select Date</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            disabled={(date) => {
              const day = date.getDay();
              return day === 0 || day === 6; // Disable weekends
            }}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Time</h3>
            <Select onValueChange={setTimeSlot}>
              <SelectTrigger>
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input type="email" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Brief Description of Your Legal Needs
            </label>
            <Textarea rows={4} required />
          </div>
        </div>
      </div>

      <Button type="submit" size="lg">
        Schedule Consultation
      </Button>
    </form>
  );
}