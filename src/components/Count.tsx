import { FC } from "react";

type CountProps = {
    count: number;
}

const Count: FC<CountProps> = ({ count }) => {
    return (
        <h3 className="text-3xl font-bold">{count}</h3>
    );
}

export default Count;
