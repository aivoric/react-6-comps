import Button from '../components/Button'
import useCounter from '../hooks/use-counter';

function CounterPage({ initialCount }) {
    const { count, increment } = useCounter(initialCount);

    return <div>
        <h1>Count is {count}</h1>
        <Button primary onClick={increment}>
            Increase
        </Button>
    </div>
}

export default CounterPage;