export default function FooterList({title,children}) {
    return(
        <div>
            <h4>{title}</h4>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export function FooterLi({children}) {
    return(
        <li>
            <p>{children}</p>
        </li>
    )
}