import { FC, useState } from 'react'
import Count from '../components/Count'
import Button from '../components/Button'

const Counter: FC = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <section className='flex flex-col justify-center items-center mt-20 py-8 space-y-4'>
            <h1 className='text-2xl font-semibold'> Counter App</h1>
            <Count count={count} />
            <div className="space-x-5">
                <Button text="Increment" onClick={() => setCount(count + 1)} />
                <Button text="Decrement" onClick={() => setCount(count - 1)} />
                <Button text="Reset" onClick={() => setCount(0)} />
            </div>
        </section>
    )
}

export default Counter