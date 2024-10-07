
interface UserProps {
    user: {
        name: string;
        age: number;
        email: string;
    }; 
}

export default function User({ user }: UserProps) {
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}
