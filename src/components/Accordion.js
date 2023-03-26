import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        // if nextIndex === expandedIndex then collapse current selection
        const newIndex = nextIndex === expandedIndex ? -1 : nextIndex
        setExpandedIndex(newIndex);
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        // && returns the last truthy value, or the first false value
        // react does not render booleans, so if isExpanded is false, then
        // in this return statement it will not be renderered

        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)} 
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion;