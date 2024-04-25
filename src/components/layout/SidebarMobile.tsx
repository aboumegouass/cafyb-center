import { Link, Outlet, useLocation } from "react-router-dom"
import { Icon } from '@iconify/react';
import { sidebarMenu } from "@/lib/menu";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from 'framer-motion'
import { ScrollArea } from "@mantine/core";
import { useState } from "react";
import Icofont from 'react-icofont';

type CompsProps = {
    isShow: boolean
    setIsShow: (isShow: boolean) => void
    clickableItem?: string
    setClickableItem?: (clickableItem: string) => void
}
function SidebarMobile({ isShow, setIsShow, clickableItem, setClickableItem }: CompsProps) {
    const { t } = useTranslation()
    const [activeItem, setActiveItem] = useState(0);
    const location = useLocation();
    const [activeSubItem, setActiveSubItem] = useState(0);

    return (
        <>
            <AnimatePresence>
                {isShow &&
                    <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -200, opacity: 0 }} className={`shadow-lg w-[280px] fixed top-16 bottom-0 max-sm:z-[105] bg-[#e9ecf0]`}>
                        <div className="p-3 py-4 bg-[#2c3e50]/90">
                            <h3 className="font-extrabold text-center text-white">
                                {t("MODULE")}
                            </h3>
                        </div>
                        <ScrollArea className="h-[76vh]">
                            <ul>
                                {sidebarMenu.map((el) => (
                                    <li key={el.id} className="relative">
                                        {el.hasMenu ? <span
                                            onClick={() => activeItem == el.id ? setActiveItem(0) : setActiveItem(el.id)}
                                            className={`flex cursor-pointer ${activeItem == el.id ? "bg-[#c8d6e4]" : ""} p-3 gap-2.5 relative justify-between text-[13px] items-center hover:to-[#c3d4e6] hover:from-[#dce2e9] hover:text-[#2c3e50] bg-gradient-to-bl ${el.href == location.pathname ? "font-semibold text-white to-[#2c3e50] from-[#2c3e50] hover:to-[#2c3e50] hover:from-[#3b5670]" : 'text-[#2c3e50]'}`}
                                        >
                                            <span className="flex items-center gap-2.5">
                                                <Icofont className="text-[16px]" icon={el.icon} />{t(el.label)}
                                                {el.href == location.pathname && <div className="w-0 h-0 border-t-[10px] absolute right-0 border-t-transparent border-r-[10px] border-r-slate-200 border-b-[10px] border-b-transparent" />}
                                            </span>
                                            <Icon icon={`mage:plus`} className="w-4 h-4" />
                                        </span> :
                                            <Link
                                                className={`flex p-4 gap-2.5 relative text-[13px] items-center hover:to-[#c3d4e6] hover:from-[#dce2e9] hover:text-[#2c3e50] bg-gradient-to-bl ${el.href == location.pathname ? "font-semibold text-white to-[#2c3e50] from-[#2c3e50] hover:to-[#2c3e50] hover:from-[#3b5670]" : "text-[#2c3e50]"}`}
                                                to={el.href}
                                            >
                                                <Icofont className="text-[16px]" icon={el.icon} />{t(el.label)}
                                                {el.href == location.pathname && <div className="w-0 h-0 border-t-[10px] absolute right-0 border-t-transparent border-r-[10px] border-r-slate-200 border-b-[10px] border-b-transparent" />}
                                            </Link>}
                                        <AnimatePresence>
                                            {(activeItem == el.id) && <motion.div initial={{ opacity: 0, skewY: 19 }} animate={{ opacity: 1, skewY: 0 }} exit={{ opacity: 0, skewY: 19 }} className={`bg-[#2c3e50]`}>
                                                <ScrollArea className="max-h-[55vh]">
                                                    <ul>
                                                        {el.subMenu?.map((item) => (
                                                            <li key={item.id} className="mb-0.5 last:mb-0">
                                                                {item.clickable ? <span
                                                                    onClick={() => clickableItem == item.label ? setClickableItem(item.label) : setClickableItem(item.label)}
                                                                    className={`flex ps-7 cursor-pointer justify-between text-white p-3 gap-2.5 relative text-[12px] items-center hover:to-[#00000057] hover:from-[#00000027] bg-gradient-to-bl ${el.href == location.pathname ? "font-semibold to-[#2c3e50] from-[#2c3e50] hover:to-[#2c3e50] hover:from-[#3b5670]" : ""}`}>
                                                                    {t(item.label)}
                                                                </span>
                                                                    : (!item.hasMenu ? <Link to={`${item.baseURL}${item.href}`} className={`flex ps-7 text-white p-3 gap-2.5 relative text-[12px] items-center hover:to-[#00000057] hover:from-[#00000027] bg-gradient-to-bl ${el.href == location.pathname ? "font-semibold to-[#2c3e50] from-[#2c3e50] hover:to-[#2c3e50] hover:from-[#3b5670]" : ""}`}>
                                                                        {t(item.label)}
                                                                    </Link> :
                                                                        <span
                                                                            onClick={() => activeSubItem == item.id ? setActiveSubItem(0) : setActiveSubItem(item.id)}
                                                                            className={`flex ps-7 cursor-pointer justify-between text-white p-3 gap-2.5 relative text-[12px] items-center hover:to-[#00000057] hover:from-[#00000027] bg-gradient-to-bl ${el.href == location.pathname ? "font-semibold to-[#2c3e50] from-[#2c3e50] hover:to-[#2c3e50] hover:from-[#3b5670]" : ""}`}>
                                                                            {t(item.label)}
                                                                            <Icon icon={`mage:plus`} className="w-4 h-4" />
                                                                        </span>)}
                                                                <AnimatePresence>
                                                                    {(activeSubItem == item.id) &&
                                                                        <motion.div
                                                                            initial={{ opacity: 0, skewY: 19 }}
                                                                            animate={{ opacity: 1, skewY: 0 }}
                                                                            exit={{ opacity: 0, skewY: 19 }}
                                                                            className={`bg-[#3a536b]`}>
                                                                            <ul>
                                                                                {item.subMenu.map((subitem) => (
                                                                                    <li key={subitem.id}>
                                                                                        <Link to={`${subitem.baseURL}${subitem.href}`} className={`flex ps-10 opacity-75 text-white p-3 gap-2.5 relative text-[12px] items-center hover:to-[#00000057] hover:from-[#00000027] bg-gradient-to-bl ${el.href == location.pathname ? "font-semibold to-[#2c3e50] from-[#2c3e50] hover:to-[#2c3e50] hover:from-[#3b5670]" : ""}`}>
                                                                                            {subitem.label}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </motion.div>}
                                                                </AnimatePresence>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </ScrollArea>
                                            </motion.div>}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                    </motion.div>
                }
            </AnimatePresence>
            <Outlet />
        </>
    )
}

export default SidebarMobile