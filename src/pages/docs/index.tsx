import { useTranslation } from "react-i18next";
import HeaderTitle from "@/components/HeaderTitle";
import { Anchor, Breadcrumbs, Progress } from "@mantine/core";
import { Icon } from "@iconify/react";
import AppPanel from "@/components/AppPanel";

function App() {
    const { t } = useTranslation()
    const items = [
        {
            id: 1,
            title: <><Icon icon={`carbon:home`} className="w-4 h-4" /></>,
            href: "/"
        },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));
    return (
        <div className="p-4">
            <HeaderTitle
                title="Dashboard"
                children={<Breadcrumbs classNames={{ breadcrumb: "text-sm text-slate-700 dark:text-slate-100", root: "max-sm:flex-wrap" }}>{items}</Breadcrumbs>} />

            <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
                <div>
                    <AppPanel>
                        <div className="p-4">
                            <div className="flex items-center justify-between py-3 mb-3 border-b-2 border-b-slate-100 dark:border-b-slate-700">
                                <h3 className="text-base font-extrabold uppercase opacity-60">{t("Orders")}</h3>
                                <span>
                                    <Icon icon={`solar:bag-2-broken`} className="w-7 h-7 opacity-20" />
                                </span>
                            </div>
                            <p className="mb-1 text-sm font-semibold">5 (cette semaine) / 17 (ce mois)</p>
                            <div className="flex items-center justify-between mb-3.5"><p className="text-sm opacity-70">11 (semaine passée)</p> <p className="flex items-center gap-2 text-sm font-bold text-red-700"><Icon icon={`fa-solid:arrow-down`} /> 54.55%</p></div>
                            <Progress color="red" size={20} value={40} animated />
                        </div>
                    </AppPanel>
                </div>
                <div>
                    <AppPanel>
                        <div className="p-4">
                            <div className="flex items-center justify-between py-3 mb-3 border-b-2 border-b-slate-100 dark:border-b-slate-700">
                                <h3 className="text-base font-extrabold uppercase opacity-60">{t("Deliveries")}</h3>
                                <span>
                                    <Icon icon={`streamline:scanner-bar-code`} className="w-7 h-7 opacity-20" />
                                </span>
                            </div>
                            <p className="mb-1 text-sm font-semibold">5 (cette semaine) / 17 (ce mois)</p>
                            <div className="flex items-center justify-between mb-3.5"><p className="text-sm opacity-70">11 (semaine passée)</p> <p className="flex items-center gap-2 text-sm font-bold text-red-700"><Icon icon={`fa-solid:arrow-down`} /> 54.55%</p></div>
                            <Progress color="blue" size={20} value={40} animated />
                        </div>
                    </AppPanel>
                </div>
                <div>
                    <AppPanel>
                        <div className="p-4">
                            <div className="flex items-center justify-between py-3 mb-3 border-b-2 border-b-slate-100 dark:border-b-slate-700">
                                <h3 className="text-base font-extrabold uppercase opacity-60">{t("Sales Figure")}</h3>
                                <span>
                                    <Icon icon={`solar:money-bag-broken`} className="w-7 h-7 opacity-20" />
                                </span>
                            </div>
                            <p className="mb-1 text-sm font-semibold">5 (cette semaine) / 17 (ce mois)</p>
                            <div className="flex items-center justify-between mb-3.5"><p className="text-sm opacity-70">11 (semaine passée)</p> <p className="flex items-center gap-2 text-sm font-bold text-green-700"><Icon icon={`fa-solid:arrow-up`} /> 54.55%</p></div>
                            <Progress color="yellow" size={20} value={40} animated />
                        </div>
                    </AppPanel>
                </div>
            </div>
        </div>
    )
}

export default App