import { Link, Outlet, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GetCategoriesQuery, GetPostsListByCategoryIdQuery, GetPostsQuery } from "@/query/posts";
type CompsProps = {
    pinned: boolean
    setPinned?: (pinned: boolean) => void
    showModal?: (pinned: boolean) => void
    clickableItem?: string
    setClickableItem?: (clickableItem: string) => void
}
function Sidebar({ pinned, setPinned, showModal, clickableItem, setClickableItem }: CompsProps) {
    const location = useLocation();
    const { t } = useTranslation()
    const [activeItem, setActiveItem] = useState(0);
    const { data: categoriesData } = GetCategoriesQuery()
    const getPosts = GetPostsListByCategoryIdQuery({ id: activeItem })
    return (
        <>
            <div className={`h-full max-sm:hidden transition-all duration-500 ${pinned ? 'w-[320px]' : ''} sticky z-[98] top-16 bg-[#fafcff] dark:bg-[#141e36]`}>
                <ul>
                    {categoriesData?.map((el) => (
                        <li key={el.id} className="relative">
                            <Link
                                onClick={() => activeItem == el.id ? setActiveItem(0) : setActiveItem(el.id)}
                                className={`flex p-4 gap-2.5 relative font-semibold text-[13px] items-center hover:to-[#ebeef1] hover:from-[#f1f4f8] dark:hover:from-[#172637] dark:hover:to-[#203244] hover:text-[#2c3e50] bg-gradient-to-bl ${`/category/${el.slug}` == location.pathname ? "font-bold text-slate-950 to-[#ebeef1] from-[#f1f4f8]" : "text-[#2c3e50] dark:text-[#dae4ee]"}`}
                                to={`/category/${el.slug}`}
                            >

                                {el.name}
                                {el.slug == location.pathname && <div className="w-0 h-0 border-t-[10px] absolute right-0 border-t-transparent border-r-[10px] border-r-slate-200 dark:border-r-[#0f172a] border-b-[10px] border-b-transparent" />}
                            </Link>
                            <AnimatePresence>
                                {activeItem == el.id && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`bg-[#ffffff]`}>
                                    <ul>
                                        {getPosts?.data?.map((item) => (
                                            <li key={item.id} className="relative border-b border-b-slate-200 last:border-b-0">
                                                <Link to={`/${item.slug}`} className={`flex ps-7 p-3 gap-2.5 relative text-[12px] items-center hover:opacity-100 hover:text-black ${`/${item.slug}` === location.pathname ? "font-bold text-black" : "text-slate-700 font-medium"}`}>
                                                    {item?.title?.rendered}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Sidebar