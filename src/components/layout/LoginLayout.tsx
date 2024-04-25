import { ReactNode } from "react"

function LoginLayout({ children }: { children: ReactNode }) {
    return (
        <div>{children}</div>
    )
}

export default LoginLayout