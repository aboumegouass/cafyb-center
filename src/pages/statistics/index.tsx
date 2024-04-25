import { Anchor, Breadcrumbs, Tabs } from "@mantine/core";
import { useTranslation } from "react-i18next";
import HeaderTitle from "@/components/HeaderTitle";
function App() {
    const { t } = useTranslation()

    const items = [
        {
            id: 1,
            title: t("Dashboard"),
            href: "/"
        },
        {
            id: 2,
            title: t("Statistics"),
            href: "/statistics"
        }
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    return (
        <div className="p-4">
            <HeaderTitle title="Statistics" children={<Breadcrumbs classNames={{ breadcrumb: "text-sm" }}>{items}</Breadcrumbs>} />

        </div>
    )
}

export default App