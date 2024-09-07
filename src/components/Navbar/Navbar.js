// import { getByTitle } from "@testing-library/react"


function navbar({title, path}) {
    return (
        <li className="header-item">
            <a href={path} className="header-link">{title}</a>
        </li>
    )
}

export default navbar