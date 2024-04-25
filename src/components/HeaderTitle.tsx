import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type CompsProps = {
    title: string
    children?: ReactNode
}
function HeaderTitle({ title, children }: CompsProps) {
    const { t } = useTranslation()
    return (
        <div className='flex items-center justify-between p-4 mb-3 border-b-2 max-sm:flex-col max-sm:gap-2 border-slate-300 dark:border-slate-800'>
            <h2 className="text-xl font-extrabold text-slate-600 dark:text-slate-100">{t(title)}</h2>
            {children}
        </div>
    )
}

export default HeaderTitle