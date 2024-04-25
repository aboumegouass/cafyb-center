import { Anchor, Breadcrumbs, Checkbox, Space } from "@mantine/core";
import { useTranslation } from "react-i18next";
import HeaderTitle from "@/components/HeaderTitle";
import AppPanel from "@/components/AppPanel";
import { Icon } from "@iconify/react";
import 'mantine-react-table/styles.css'
import { useState } from 'react';
import { dinarFormat } from "@/utils/format";

function App() {
    const { t } = useTranslation()
    const [enableFullScreen, setEnableFullScreen] = useState(false)

    const items = [
        {
            id: 1,
            title: <><Icon icon={`carbon:home`} className="w-4 h-4" /></>,
            href: "/"
        },
        {
            id: 2,
            title: t("Statistics"),
            href: "/statistics"
        },
        {
            id: 2,
            title: t("Revenue by products in stock movement"),
            href: "/statistics/turnover-by-products"
        }
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));
    return (
        <div className="p-4">
            <HeaderTitle
                title="Revenue by products in stock movement"
                children={<Breadcrumbs classNames={{ breadcrumb: "text-sm text-slate-700 dark:text-slate-100", root: "max-sm:flex-wrap" }}>{items}</Breadcrumbs>} />

            <AppPanel>
                <div className="flex items-center justify-between gap-2 p-4 max-sm:flex-col">

                    <div className="flex items-center gap-2 max-sm:flex-col">

                        <Checkbox
                            defaultChecked
                            label={t("Show all products in stock movement")}
                            color="red"
                        />
                    </div>
                </div>
            </AppPanel>
            <div className={enableFullScreen ? "relative z-[9000]" : "mt-6"}>
                <Space h="md" />
                <AppPanel>
                    <div className="flex items-center justify-between gap-2 max-sm:flex-col">
                        <div className="flex items-center gap-2 p-4 max-sm:pb-0">
                            <p className="text-base font-bold">
                                {t("Total")}:
                            </p>
                            <p className="text-base">
                                {dinarFormat(29300002)}
                            </p>
                        </div>
                    </div>
                </AppPanel>
            </div>
        </div>
    )
}

export default App