import { Link } from "react-router-dom"

export default function Header() {
    return(
        <div>
            <header>
                <Link to = "/">
                    <h2>Matthew Blog</h2>
                </Link>
            </header>
        </div>
    )
}