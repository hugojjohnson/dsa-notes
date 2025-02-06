import { ReactNode, Children, isValidElement } from "react"

export default function VideoResource({children}: {children: ReactNode}) {
    for (const child of Children.toArray(children)) {
        console.log(child)
    }

    return <div className="mt-5">
        <p>Recommended video for this week:</p>
        { Children.toArray(children).map(child => isValidElement(child) ? (child.type === "a" ? <a target="blank" href={child.props.href}>{child.props.href}</a> : child) : child) }
    </div>
}