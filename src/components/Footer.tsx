import { FC } from "react"


const Footer:FC = () => {
  return (
    <footer className="text-center">
        <p>
            &copy; 2024-{new Date().getFullYear()} <a href=" https://www.mysite.com">Abdur Rahim</a> | All Rights Reserved  
        </p>
    </footer>
  )
}

export default Footer
