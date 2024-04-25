import { ReactNode } from 'react'
type CompsProps = {
    children: ReactNode
}
function AppPanel({ children }: CompsProps) {
    return (
        <div className='overflow-hidden relative z-10 after:content-[""] after:absolute after:z-10 after:bg-red-400 dark:after:bg-red-300 after:left-0 after:right-0 after:top-0 after:h-1 bg-white dark:bg-slate-800 rounded-md shadow-md'>
            {children}
        </div>
    )
}

export default AppPanel