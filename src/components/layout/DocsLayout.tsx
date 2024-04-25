import { ReactNode, useState } from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { useTranslation } from "react-i18next"
import { useHotkeys } from "@mantine/hooks"
import { Outlet } from "react-router-dom"

function DocsLayout({ children }: { children: ReactNode }) {
    const [isShow, setIsShow] = useState(false)
    const { i18n, t } = useTranslation()
    const lang = i18n.language
    const [pinned, setPinned] = useState(true)
    const [clickableItem, setClickableItem] = useState('')
    const brand = 'CAFYB'
    const version = '5.4.1.1'
    const date = new Date();
    const year = date.getFullYear();
    useHotkeys([
        ['ctrl+b', () => setPinned(!pinned)],
    ]);
    return (
        <>
            <div dir={lang == "ar" ? "rtl" : "ltr"} className="pt-16 bg-slate-100 dark:bg-slate-900">
                <Navbar
                    clickableItem={clickableItem}
                    setClickableItem={setClickableItem}
                    pinned={pinned}
                    setPinned={setPinned}
                    isShow={isShow}
                    setIsShow={setIsShow}
                    user={{ fullname: "Abdelhamid" }}
                    title="Dashboard"
                />
                <div className={`flex max-sm:flex-col`}>
                    <div className={`${pinned ? 'w-[320px]' : ''} ${pinned ? 'translate-x-0' : '-translate-x-[320px]'} transition-all  max-sm:w-full`}>
                        <Sidebar
                            clickableItem={clickableItem}
                            setClickableItem={setClickableItem}
                            setPinned={setPinned}
                            pinned={pinned}
                        />
                    </div>
                    <div className={`${!pinned ? 'w-full' : 'w-[calc(100%-320px)]'} max-sm:w-full`}>
                        {children}
                        <div className="flex items-center justify-center gap-2 py-8 mt-6 border-t-2 opacity-70 border-t-slate-300">
                            <p className="flex items-center justify-center gap-2 text-sm font-medium">
                                <a className="font-bold text-red-700" href="http://www.cafyb.com/">{brand}</a>
                                <span>{version}</span> &copy; {t("Copyright")} {year}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default DocsLayout