import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";

const FAQ = () => {
    return (
       <div>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <h1 className="text-xl font-bold text-[#222622]">What is Bevel Space?</h1>
                </AccordionTrigger>
                <AccordionContent>
                    <p className="text-[#545952]">Bevel Space is a platform that helps you find the perfect property for your needs.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <h1 className="text-xl font-bold text-[#222622]"> Is my personal information safe on BevelSpace?</h1>
                </AccordionTrigger>
                <AccordionContent>
                    <p className="text-[#545952]"> Absolutely. We take privacy seriously and use encrypted connections to protect your data. Your information is never shared without your consent.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>
                    <h1 className="text-xl font-bold text-[#222622]">How do I create an account on BevelSpace?</h1>
                </AccordionTrigger>
                <AccordionContent>
                    <p className="text-[#545952]">Click on the Sign Up button at the top-right corner, fill in your basic details, and verify your email. You can then start browsing, saving listings, and making inquiries.</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>
                    <h1 className="text-xl font-bold text-[#222622]">Is BevelSpace free to use?</h1>
                </AccordionTrigger>
                <AccordionContent>
                    <p className="text-[#545952]">Yes, creating an account and browsing property listings is completely free. Only agents or admins have access to special features like listing management.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>
                    <h1 className="text-xl font-bold text-[#222622]">How can I contact the property owner or agent?</h1>
                </AccordionTrigger>
                <AccordionContent>
                    <p className="text-[#545952]">On each property detail page, you&apos;ll find a &quot;Contact Agent&quot; button. Fill out the form, and your inquiry will be sent directly to the agent or admin managing the listing.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger>
                    <h1 className="text-xl font-bold text-[#222622]">Can I save properties I&apos;m interested in?</h1>
                </AccordionTrigger>
                <AccordionContent>
                    <p className="text-[#545952]">Yes! Logged-in users can click the heart icon on any property to add it to their Saved Properties list for easy access later.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
       </div>
    )
}

export default FAQ;
