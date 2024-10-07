import { FC } from "react";

type ButtonText = 'Increment' | 'Inc' | 'Decrement' | 'Dec' | 'Reset' | 'Res';
interface ButtonProps {
    text: ButtonText;
    onClick: () => void;
}

const Button:FC<ButtonProps> =({text, onClick})=> {
    return (
        <button className="bg-[#00D8FF] text-white font-semibold text-xl px-3 py-1 rounded-md" type="submit" onClick={onClick}>{text}</button>
    )
}

export default Button