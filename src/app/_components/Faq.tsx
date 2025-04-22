import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

function Faq() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="security" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <span className="text-lg font-medium">
                How secure is my data?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              We employ bank-level security measures including end-to-end
              encryption, regular security audits, and compliance with PCI DSS
              standards. Your data is never shared with third parties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <span className="text-lg font-medium">
                What's included in the free tier?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              Our free plan includes all core features: unlimited transactions,
              basic budgeting tools, and access to financial reports. Premium
              features include advanced analytics and priority support.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
