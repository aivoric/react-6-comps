import Link from './Link';
import useNavigation from '../hooks/use-navigation';

function Sidebar() {
    const { currentPath } = useNavigation();

    const links = [
        { label: 'Dropdown', path: '/'},
        { label: 'Accordion', path: '/accordion'},
        { label: 'Buttons', path: '/buttons'},
        { label: 'Modal', path: '/modal'},
        { label: 'Table', path: '/table'},
        { label: 'Counter', path: '/counter'}
    ]

    const renderedLinks = links.map((link) => {
        let className = "mb-3";
        if(currentPath === link.path) {
            className += " font-bold border-l-4 border-blue-500 pl-2"
        }

        return <Link key={link.label} to={link.path} className={className}>{link.label}</Link>
    });

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;