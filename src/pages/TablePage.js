import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 },
    ]

    const config = [
        { 
            label: "Name",
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        { 
            label: "Color",
            render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`} />,
        },
        { 
            label: "Score" ,
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
        { 
            label: "Ultra" ,
            render: (fruit) => fruit.score ** 2 * -1,
            sortValue: (fruit) => fruit.score ** 2 * -1,
        },
        { 
            label: "Monkey" ,
            render: (fruit) => (fruit.score**5/2 + 100),
            sortValue: (fruit) => (fruit.score**5/2 + 100),
        }
    ]

    const keyFn = (fruit) => {
        return fruit.name
    }

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
            <Table className="mt-10" data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage;