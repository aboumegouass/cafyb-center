import { modal_class } from '@/lib/style_classe'
import { Icon } from '@iconify/react'
import { Drawer } from '@mantine/core'
import { useTranslation } from 'react-i18next'

type CompsProps = {
    opened: boolean
    close: () => void
}

function ContextualHelp({ opened, close }: CompsProps) {
    const { t } = useTranslation()
    const item_item_calss = "border-b border-b-slate-200 dark:border-b-slate-700 last:border-b-0"
    const item_link_calss = "flex items-center gap-2 p-3 px-4 opacity-80 hover:opacity-100"
    return (
        <Drawer
            position="right"
            offset={8}
            classNames={modal_class}
            radius="md"
            opened={opened}
            onClose={close}
            title={t("Contextual help")}
        >
            <ul>
                <li className={item_item_calss}>
                    <a className={item_link_calss} href=""><Icon className="w-6 h-6" icon={`pepicons-print:book`} />{t("Documentation")}</a>
                </li>
                <li className={item_item_calss}>
                    <a className={item_link_calss} href=""><Icon className="w-7 h-7" icon={`material-symbols-light:support-agent-outline`} />{t("Support center")}</a>
                </li>
                <li className={item_item_calss}>
                    <a className={item_link_calss} href=""><Icon className="w-6 h-6" icon={`ph:star-duotone`} />{t("Whats new?")}</a>
                </li>
                <li className={item_item_calss}>
                    <a className={item_link_calss} href=""><Icon className="w-6 h-6" icon={`ph:download-duotone`} />{t("Contact us")}</a>
                </li>
            </ul>
            <h3 className="p-3 py-5 mb-2 text-sm font-bold uppercase border-b-2 opacity-60 border-b-slate-200 dark:border-b-slate-700">{t("Support services")}</h3>
            <ul>
                <li className={item_item_calss}>
                    <a className="flex items-center gap-2 p-2 px-4 text-sm font-medium text-[#ed1e24] opacity-80 hover:opacity-100" href="tel:+213560988820"><Icon className="w-4 h-4" icon={`pepicons-print:phone`} />+213 560 98 88 20</a>
                </li>
                <li className={item_item_calss}>
                    <a className="flex items-center gap-2 p-2 px-4 text-sm font-medium text-[#ed1e24] opacity-80 hover:opacity-100" href="tel:>+213560057575"><Icon className="w-4 h-4" icon={`pepicons-print:phone`} />+213 560 05 75 75</a>
                </li>
                <li className={item_item_calss}>
                    <a className="flex items-center gap-2 p-2 px-4 text-sm font-medium text-[#ed1e24] opacity-80 hover:opacity-100" href="mailto:support@cafyb.com"><Icon className="w-4 h-4" icon={`line-md:email-twotone-alt`} />support@cafyb.com</a>
                </li>
            </ul>
            <h3 className="p-3 py-5 mb-2 text-sm font-bold uppercase border-b-2 opacity-60 border-b-slate-200 dark:border-b-slate-700">{t("Commercial services")}</h3>
            <ul>
                <li className={item_item_calss}>
                    <a className="flex items-center gap-2 p-2 px-4 text-sm font-medium text-[#ed1e24] opacity-80 hover:opacity-100" href="tel:+213560988822"><Icon className="w-4 h-4" icon={`pepicons-print:phone`} />+213 560 98 88 22</a>
                </li>
                <li className={item_item_calss}>
                    <a className="flex items-center gap-2 p-2 px-4 text-sm font-medium text-[#ed1e24] opacity-80 hover:opacity-100" href="mailto:commercial@cafyb.com"><Icon className="w-4 h-4" icon={`line-md:email-twotone-alt`} />commercial@cafyb.com</a>
                </li>
            </ul>
        </Drawer>
    )
}

export default ContextualHelp