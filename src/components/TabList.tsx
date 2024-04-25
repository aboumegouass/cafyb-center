import { Tabs } from '@mantine/core'
import { useTranslation } from 'react-i18next'

function TabListApp({ data, activeTab, growApp = true }: {
    growApp?: boolean
    activeTab: string | null
    data: {
        id: number
        label: string
        href: string
    }[]
}) {
    const { t } = useTranslation()
    return (
        <Tabs.List grow={growApp}>
            {data.map((item) => (
                <Tabs.Tab className={`text-base py-4 transition-all duration-200 hover:opacity-100 ${activeTab === item.href ? 'font-semibold opacity-100 border-b-[3px] text-red-700 dark:text-red-400' : 'font-medium opacity-70'}`} value={item.href}>{t(item.label)}</Tabs.Tab>
            ))}
        </Tabs.List>
    )
}

export default TabListApp