import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

type StateType = {
    id: number
    theme: string
    type: string
    number: number
    label: string
    icon: string
}
function StateCard({ icon, id, label, number, theme, type }: StateType) {
    const { t } = useTranslation()
    const themeHandle = () => {
        switch (theme) {
            case 'primary':
                return "#d84c55"
            case 'secondary':
                return '#334155'
            case 'default':
                return '#454544'

            default:
                return '#454544'
        }
    }
    return (
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: themeHandle() }}>
            <div className="flex items-center justify-center mb-2 w-14 h-14 rounded-xl bg-black/20 ">
                <Icon className='w-8 h-8 text-white' icon={icon} />
            </div>
            <div>
                <p className="text-sm text-white">{t(label)}</p>
                <h2 className='text-2xl font-extrabold text-white'>{number} {type == "cost" ? "DZD" : ""} {type == t("user") ? t("users") : ""}</h2>
            </div>
        </div>
    )
}

export default StateCard