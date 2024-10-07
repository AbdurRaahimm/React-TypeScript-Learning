import { useState } from 'react'

import Button from './Button'
import User from './User'
import Count from './Count'
import FetchPosts from './FetchPosts'
import posts from '../data/posts'




function Demo() {
  const [count, setCount] = useState<number>(0)

  const user = {
    name: 'John Doe',
    age: 25,
    email: 'john@mail.com',
  }

  return (
    <>
      <h1>React TypeScript aa </h1>
      <fieldset>
        <legend>Counter</legend>
        <Count count={count} />
        <Button text="Inc" onClick={() => setCount(count + 1)} />
        <Button text="Decrement" onClick={() => setCount(count - 1)} />
        <Button text="Reset" onClick={() => setCount(0)} />
      </fieldset>

      <fieldset>
        <legend>User</legend>
        <User user={user} />
      </fieldset>

      <fieldset>
        <legend>Fetch Posts</legend>
        <FetchPosts posts={posts} />
      </fieldset>
    </>
  )
}

export default Demo
