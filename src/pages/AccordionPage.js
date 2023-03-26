import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'f2i3mf2',
            label: "Can I use react for my projects?",
            content: "You can use react for all projects"
        },
        {
            id: 'm2034j3',
            label: "Can I use css for my projects?",
            content: "You can use css for all projects"
        },
        {
            id: 'xmicm0234',
            label: "Can I use python for my projects?",
            content: "You can use python for all projects"
        }
    ]

    return (
        <div>
           <Accordion items={items} />
        </div>
    );
}

export default AccordionPage;