import { FC } from 'react'
import { useTodo } from '../context/todo'

interface TodoType  {
    id: number;
    title: string;
    completed: boolean;
}

const Todo: FC = () => {
    const { state, dispatch } = useTodo();

    const { todos } = state;

    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Type assertion to correctly access the form elements
        const target = e.target as typeof e.target & {
            todo: {
                value: string
            }  // Adding type for the todo input field
        };

        const title = target.todo.value;
        console.log(title)
        if (!title) return;

        // Dispatching the ADD_TODO action with title and some random ID
        dispatch({ type: 'ADD_TODO', payload: { id: Math.random(), title, completed: false } });

        // Reset the form
        target.todo.value = '';
    };

    const handleDeleteTodo=(id:number)=>{
        dispatch({ type: 'DELETE_TODO', payload:id})
    }

    const handleToggleTodo=(id:number)=>{
        dispatch({ type: 'TOGGLE_TODO', payload:id})
    }

    const handleUpdateTodo=(todo:TodoType)=>{
        dispatch({ type: 'UPDATE_TODO', payload:todo})
    }
    return (
        <>
            <section className='flex flex-col justify-center items-center mt-16 space-y-7'>
                <h1 className='text-2xl font-semibold'>Todo App</h1>
                <form className='space-x-2' onSubmit={handleAddTodo}>
                    <input type="text" name='todo' className='
                    border border-[#00D8FF] px-2 py-1 rounded-md
                    focus:outline-none focus:ring-1 focus:ring-[#00D8FF]
                    ' placeholder="Enter todo" />

                    <button type="submit" className='
                    bg-[#00D8FF] text-white px-3 py-1 rounded-md
                    hover:bg-[#00E8FF] capitalize
                '>Add todo</button>
                </form>
                {todos.length === 0 && <p className='text-lg'>No todos</p>}
                {
                    todos.map(todo => {
                        return (
                            <fieldset key={todo.id} className="space-y-3">
                                <div className="grid grid-cols-[1fr_24px] items-center gap-6">
                                    <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 ">
                                        <input  
                                        type="checkbox" 
                                        className="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-pink-500 dark:accent-pink-600 checked:appearance-auto" 
                                        checked={todo.completed } 
                                        onChange={()=>handleToggleTodo(todo.id)}
                                        />
                                        <input type="text" value={todo.title} className="peer-checked:line-through" disabled={
                                            todo.completed
                                        } onChange={(e)=>handleUpdateTodo({
                                            ...todo,
                                            title:e.target.value
                                        })}/>

                                    </label>
                                    <div onClick={()=>handleDeleteTodo(todo.id)} className="size-[26px] rounded-md p-1 hover:bg-red-50 hover:text-red-500 peer-has-[:checked]:hidden">
                                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </div>
                                </div>

                            </fieldset>
                        )
                    })
                }

            </section >
        </>

    )
}

export default Todo