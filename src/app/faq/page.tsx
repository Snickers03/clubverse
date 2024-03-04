import { AccordionDemo } from "@/components/faq/AccordionDemo";

export default function Page() {
  return (
    <main className='mt-10'>
      <p className='text-center text-2xl font-medium'>
        Häufig gestellte Fragen
      </p>
      <AccordionDemo />
      <p className='py-6 text-center text-slate-700'>
        Du hast keine Antwort gefunden?
      </p>
      <p className='text-center'>TODO: Support kontaktieren</p>
    </main>
  );
}
