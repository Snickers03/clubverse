import { faqContentData } from "@/mocks/contentData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  return (
    <div className='mx-auto mt-4 w-full md:w-2/3 lg:w-1/2'>
      <Accordion
        type='single'
        collapsible
        className='w-full rounded-md bg-gray-100 px-3'
      >
        {faqContentData.map((faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
