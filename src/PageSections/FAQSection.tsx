import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQSectionI {
    title?: string
    FAQs: {
        question: string;
        answer: string;
    }[];
}

const FAQSection = ({ FAQs, title = "FAQ" }: FAQSectionI) => {
    return (
        <div>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <div className='mt-2 flex flex-col'>
                <Accordion type="single" collapsible>
                    {FAQs && FAQs.map((items, i: number) => (
                        <AccordionItem key={i} value={"item-" + i}>
                            <AccordionTrigger className='text-left md:text-2xl sm:text-xl text-lg font-semibold !no-underline hover:text-secondary transition-all duration-300'>
                                {items.question}
                            </AccordionTrigger>
                            <AccordionContent className='sm:!text-base text-sm -mt-1'>
                                {items.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default FAQSection