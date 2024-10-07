import Card from "./Card";

interface FetchPostsProps {
    posts: {
        id: number;
        title: string;
        content: string;
        date: string;
    }[];
}

export default function FetchPosts({ posts }: FetchPostsProps) {
  return (
    <div>
        <h2>Posts</h2>
        <>
            {posts.map((post) => (
            <Card key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>{post.date}</p>
            </Card>
            ))}
        </>
    </div>
  )
}
