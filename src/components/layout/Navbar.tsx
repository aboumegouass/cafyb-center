import Switcher from "@/Switcher"
import { useTranslation } from "react-i18next"
import SidebarMobile from "./SidebarMobile"
import { Icon } from "@iconify/react"
import { AnimatePresence, motion } from "framer-motion";
import { useDisclosure } from "@mantine/hooks"
import { Avatar, Kbd, Menu, Tooltip, rem } from "@mantine/core"
import { Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight } from "@mantine/spotlight"
import '@mantine/spotlight/styles.css';
import { useNavigate } from "react-router-dom";
import ContextualHelp from "../ContextualHelp";
import { menu_item } from "@/lib/style_classe";

type Props = {
    title: string
    user: any
    pinned: boolean
    setPinned?: (pinned: boolean) => void
    isShow: boolean
    clickableItem: string
    setClickableItem: (clickableItem: string) => void
    setIsShow: (isShow: boolean) => void
}
function Navbar({ title, user, isShow, setIsShow, pinned, setPinned, setClickableItem, clickableItem }: Props) {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
    const baseURL = 'https://cafyb.net/demos/tests'
    const menuSpotlight: (SpotlightActionGroupData | SpotlightActionData)[] = [
        {
            id: 'add_new_client',
            label: t('Add new Client'),
            description: `${baseURL}/third-parties/add/0`,
            onClick: () => window.location.replace(`${baseURL}/third-parties/add/0`),
            leftSection: <Icon style={{ width: rem(24), height: rem(24) }} icon={'uiw:user-add'} />,
        },
        {
            id: 'add_new_product',
            label: t('Add Product'),
            description: `${baseURL}/products/add/0`,
            onClick: () => window.location.replace(`${baseURL}/products/add/0`),
            leftSection: <Icon style={{ width: rem(24), height: rem(24) }} icon={'iconoir:shopping-bag-plus'} />,
        },
        {
            id: 'add_proforma_invoice',
            label: t('Add proforma invoice'),
            description: `${baseURL}/documents/add/7`,
            onClick: () => window.location.replace(`${baseURL}/documents/add/7`),
            leftSection: <Icon style={{ width: rem(24), height: rem(24) }} icon={'fluent:note-add-16-regular'} />,
        },
        {
            id: 'add_sales_order',
            label: t('Add client order'),
            description: `${baseURL}/documents/add/8`,
            onClick: () => window.location.replace(`${baseURL}/documents/add/8`),
            leftSection: <Icon style={{ width: rem(24), height: rem(24) }} icon={'streamline:shopping-cart-add'} />,
        },
        {
            id: 'add_sales_contract',
            label: t('Add sales contract'),
            description: `${baseURL}/documents/add/22`,
            onClick: () => window.location.replace(`${baseURL}/documents/add/22`),
            leftSection: <Icon icon={`clarity:contract-line`} style={{ width: rem(24), height: rem(24) }} />,
        },
        {
            id: 'add_credit',
            label: t('Add a credit'),
            description: `Add a credit`,
            onClick: () => setClickableItem("Credit"),
            leftSection: <Icon icon={`majesticons:creditcard-plus-line`} style={{ width: rem(24), height: rem(24) }} />,
        },
        {
            id: 'add_debit',
            label: t('Add a debit'),
            description: t(`Add a debit`),
            onClick: () => setClickableItem("Debit"),
            leftSection: <Icon icon={`mdi:credit-card-minus-outline`} style={{ width: rem(24), height: rem(24) }} />,
        },
        {
            id: 'home',
            label: t('Go to home'),
            description: `${baseURL}/`,
            onClick: () => window.location.replace(`${baseURL}/`),
            leftSection: <Icon icon={`carbon:home`} style={{ width: rem(24), height: rem(24) }} />,
        },

        {
            group: t("Sales"),
            actions: [
                {
                    id: 'sl1',
                    label: t('Profoma invoice'),
                    description: `${baseURL}/documents/add/7`,
                    onClick: () => window.location.replace(`${baseURL}/documents/add/7`),
                    leftSection: <Icon icon={`tdesign:icon`} style={{ width: rem(24), height: rem(24) }} />,
                },
                {
                    id: 'sl2',
                    label: t('Profoma invoice List'),
                    description: `${baseURL}/documents/index/7`,
                    onClick: () => window.location.replace(`${baseURL}/documents/add/7`),
                    leftSection: <Icon icon={`tdesign:icon`} style={{ width: rem(24), height: rem(24) }} />,
                },
            ],
        },
        {
            group: t("Purchases"),
            actions: [
                {
                    id: 'pr1',
                    label: t('Purchase contract'),
                    description: `${baseURL}/documents/add/31`,
                    onClick: () => window.location.replace(`${baseURL}/documents/add/31`),
                    leftSection: <Icon icon={`tdesign:icon`} style={{ width: rem(24), height: rem(24) }} />,
                },
            ],
        },
        {
            group: t("Procurement"),
            actions: [
                {
                    id: 'pr9',
                    label: t('Product request'),
                    description: `${baseURL}/procurements/documents/add/28`,
                    onClick: () => window.location.replace(`${baseURL}/procurements/documents/add/28`),
                    leftSection: <Icon icon={`tdesign:icon`} style={{ width: rem(24), height: rem(24) }} />,
                },
            ],
        },
        {
            group: t("Road bills"),
            actions: [
                {
                    id: 'rb1',
                    label: t('Add road bil'),
                    description: `${baseURL}/road-bills/documents/add`,
                    onClick: () => window.location.replace(`${baseURL}/road-bills/documents/add`),
                    leftSection: <Icon icon={`tdesign:icon`} style={{ width: rem(24), height: rem(24) }} />,
                },

                {
                    id: 'rb2',
                    label: t('Road bills list'),
                    description: `${baseURL}/road-bills/documents`,
                    onClick: () => window.location.replace(`${baseURL}/road-bills/documents`),
                    leftSection: <Icon icon={`tdesign:icon`} style={{ width: rem(24), height: rem(24) }} />,
                },
            ],
        },
        {
            group: t("Stocks"),
            actions: [
                {
                    id: 'stck1',
                    label: t('Products'),
                    description: `${baseURL}/products/index/0`,
                    onClick: () => window.location.replace(`${baseURL}/products/index/0`),
                    leftSection: <Icon icon={`tdesign:icon`} style={{ width: rem(24), height: rem(24) }} />,
                },
                {
                    id: 'stck2',
                    label: t('Stock per batch'),
                    description: `${baseURL}/batches`,
                    onClick: () => window.location.replace(`${baseURL}/batches`),
                    leftSection: <Icon icon={`tdesign:icon`} style={{ width: rem(24), height: rem(24) }} />,
                },
            ],
        },
    ]
    const animateX = 120
    const animateDuration = 0.36
    const draw = {
        hidden: { pathLength: 0, opacity: 0, x: animateX, rotate: 29 },
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                rotate: 0,
                x: 0,
                transition: {
                    pathLength: {
                        delay,
                        type: "spring",
                        duration: 4.5,
                    },
                    opacity: { delay, duration: 0.51 },
                    x: {
                        delay: 1,
                        type: "spring",
                        duration: animateDuration,
                        damping: 2,
                        stiffness: 50,
                        restDelta: 0.001
                    },
                    rotate: {
                        delay: 1,
                        type: "spring",
                        duration: animateDuration,
                        damping: 2,
                        stiffness: 50,
                        restDelta: 0.001
                    }
                },
            };
        }
    };
    const draw2 = {
        hidden: { pathLength: 0, opacity: 0, rotate: 40, scale: 0 },
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                rotate: 0,
                scale: 1,
                transition: {
                    pathLength: {
                        delay,
                        type: "spring",
                        duration: 4.5,
                    },
                    opacity: { delay, duration: 0.51 },
                    scale: {
                        delay: delay,
                        type: "spring",
                        duration: animateDuration,
                        damping: 2.3,
                        stiffness: 50,
                        restDelta: 0.001
                    },
                    rotate: {
                        delay: delay,
                        type: "spring",
                        duration: animateDuration,
                        damping: 2.1,
                        stiffness: 50,
                        restDelta: 0.001
                    }
                },
            };
        }
    };
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-[99] flex items-center justify-between p-4 mb-20 bg-gradient-to-bl to-[#fafcff] from-[#ffffff] max-sm:left-0 rtl:max-sm:right-0 rtl:left-0 rtl:right-0">
                <div className="flex items-center gap-4 max-sm:hidden">
                    <Tooltip
                        arrowSize={8}
                        label={<div className="flex items-center gap-2 text-sm">{t("Toggle Sidebar")}<div dir="ltr">
                            <Kbd>CTRL</Kbd> + <Kbd>B</Kbd>
                        </div></div>}
                        withArrow>
                        <button onClick={() => setPinned(!pinned)} type="button" className={`flex items-center justify-center w-8 h-8 text-slate-700 rounded-sm hover:bg-black/10`}>
                            <Icon className="w-4 h-4" icon={`teenyicons:menu-solid`} />
                        </button>
                    </Tooltip>
                    <motion.img
                        variants={draw2}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        src="/cafyb-icon.png"
                        className="h-8"
                        alt="" />
                    <motion.svg
                        initial="hidden"
                        animate="visible"
                        width="110"
                        height="24"
                        viewBox="0 0 110 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            variants={draw}
                            custom={3}
                            d="M10.9836 23.939C5.42983 23.3828 0.850606 19.0352 0.0777861 13.5847C-0.0259287 12.8532 -0.0259287 11.1425 0.0777861 10.411C0.783383 5.43466 4.67428 1.3225 9.67718 0.265753C14.5686 -0.767446 19.6626 1.26937 22.4619 5.37765C22.7174 5.75271 22.9042 6.08144 22.8769 6.10817C22.8497 6.1349 21.8955 6.52557 20.7567 6.97632L18.6859 7.79587L18.5904 7.65241C18.3457 7.28498 17.5756 6.43604 17.1973 6.1168C16.0793 5.17323 14.9859 4.60056 13.7052 4.28785C12.9955 4.11454 11.5336 4.10386 10.7699 4.26641C9.3789 4.56242 8.14645 5.21268 7.09655 6.20452C5.42705 7.78171 4.52949 9.80928 4.53195 11.9979C4.53431 14.2033 5.39721 16.1728 7.04954 17.745C8.50706 19.1318 10.3107 19.8705 12.2428 19.8718C14.478 19.8734 16.8783 18.593 18.3435 16.618C18.5275 16.3699 18.7055 16.1765 18.7391 16.1882C18.928 16.2543 22.7825 17.7946 22.8471 17.8299C23.0357 17.9328 21.8585 19.5452 20.9405 20.4415C18.3049 23.0147 14.6332 24.3044 10.9836 23.939ZM48.7536 13.8809C48.7536 3.1375 48.7305 3.78156 49.1485 2.8961C49.661 1.81053 50.5931 0.997197 51.7752 0.60396L52.265 0.441016L59.2114 0.424568L66.1578 0.40813V2.38565V4.36316H60.8545C55.7064 4.36316 55.5408 4.36667 55.1954 4.48319C54.2782 4.79262 53.5474 5.57243 53.3373 6.46582C53.2973 6.63598 53.275 9.69505 53.2741 15.1565L53.2727 23.5847H51.0132H48.7538L48.7536 13.8809ZM22.6169 23.4927C22.6169 23.4648 30.5047 8.33926 32.2024 5.11166C32.4969 4.55178 33.1695 3.26511 33.6971 2.25239L34.6562 0.411078H34.8912H35.1262L36.0557 2.1925C37.2217 4.42715 41.1559 11.9584 44.5623 18.477C45.9943 21.2171 47.1659 23.4739 47.1659 23.4919C47.1659 23.51 46.0666 23.5248 44.7231 23.5248H42.2803L41.3496 21.6985L40.4189 19.8721H35.4873C32.7749 19.8721 30.5556 19.8626 30.5556 19.851C30.5556 19.8395 30.9805 18.9774 31.4998 17.9354L32.4441 16.0409L35.3362 16.0254L38.2283 16.0098L37.0504 13.5548C36.4026 12.2045 35.6507 10.6426 35.3795 10.0841L34.8864 9.06845L33.1569 12.629C32.2057 14.5872 30.6034 17.8332 29.5962 19.8422L27.7649 23.4948L25.1909 23.5105C23.7752 23.5191 22.6169 23.5111 22.6169 23.4927ZM76.6002 19.1051C76.6002 15.3117 76.5875 14.6689 76.5106 14.5692C76.4613 14.5053 76.42 14.4202 76.419 14.3802C76.4179 14.3402 77.5252 12.4944 78.8796 10.2784C80.234 8.06246 81.9556 5.23891 82.7053 4.00388C84.6882 0.737541 84.8607 0.461012 84.9322 0.43412C84.9678 0.42072 86.1571 0.416783 87.575 0.425386L90.153 0.441036L89.8886 0.86019C89.7431 1.09073 89.2862 1.81827 88.8731 2.47695C88.0326 3.81732 85.5645 7.72835 83.8664 10.4111C83.2514 11.3826 82.3954 12.751 81.9642 13.452L81.1803 14.7264V19.1256V23.5248H78.8902H76.6002V19.1051ZM91.7449 11.935V0.345186L97.6837 0.367985C103.483 0.390218 103.639 0.393823 104.32 0.521398C105.666 0.773345 106.571 1.18323 107.308 1.87385C107.794 2.33039 108.046 2.66605 108.351 3.26338C108.854 4.24878 109.058 5.33815 109.013 6.79752C108.988 7.63855 108.974 7.71863 108.764 8.2818C108.158 9.90029 106.999 11.0351 105.638 11.3425C105.471 11.38 105.489 11.391 105.836 11.4626C106.331 11.5647 107.247 11.9945 107.723 12.3488C108.658 13.0432 109.449 14.1529 109.822 15.2913C110.014 15.8781 110.059 17.2354 109.917 18.1823C109.813 18.876 109.562 19.7286 109.327 20.1835C108.411 21.957 106.982 22.9339 104.646 23.3841C104.188 23.4722 103.613 23.4904 100.675 23.5096L97.2392 23.532L97.2553 21.5673L97.2715 19.6027L100.294 19.5727L103.317 19.5428L103.684 19.3647C104.176 19.1254 104.782 18.5211 105.071 17.9804C105.901 16.4294 105.447 14.8251 103.975 14.1003C103.252 13.7445 103.245 13.7439 99.6073 13.7191L96.2638 13.6963V18.6105V23.5248H94.0044H91.7449V11.935ZM102.248 9.74974C103.056 9.62448 103.761 9.11488 104.136 8.38517C104.91 6.88271 104.441 5.22854 103.035 4.50292L102.706 4.33322L99.4851 4.31621L96.2638 4.29924V7.05573V9.81224L99.0577 9.81157C100.672 9.81124 102.019 9.78532 102.248 9.74974ZM54.3107 12.1176V10.0518H59.5014H64.6921V12.1176V14.1835H59.5014H54.3107V12.1176ZM75.0415 12.1323C74.2799 10.8653 73.1218 9.03707 71.8273 7.05775C70.5838 5.15641 69.5908 3.57776 68.4938 1.75836C68.176 1.23142 67.8617 0.712712 67.7953 0.605677L67.6745 0.411068L70.3206 0.412391L72.9667 0.413714L73.1548 0.726901C73.2582 0.899155 73.6954 1.61944 74.1263 2.32752C74.5573 3.0356 75.3957 4.42332 75.9894 5.41134C76.5832 6.39936 77.346 7.66337 77.6846 8.22026C78.2395 9.13287 78.2924 9.24512 78.2214 9.35798C78.1781 9.42684 77.6268 10.332 76.9963 11.3694C76.3659 12.4068 75.8321 13.2757 75.8102 13.3002C75.7883 13.3247 75.4424 12.799 75.0415 12.1323Z" fill="black" />
                    </motion.svg>

                </div>
                <div className="items-center hidden gap-4 max-sm:flex">
                    <Tooltip
                        arrowSize={8}
                        label={<div className="flex items-center gap-2 text-sm">{t("Toggle Sidebar")}<div dir="ltr">
                            <Kbd>CTRL</Kbd> + <Kbd>B</Kbd>
                        </div></div>}
                        withArrow>
                        <button onClick={() => setIsShow(!isShow)} type="button" className={`flex items-center justify-center w-8 h-8 text-white rounded-sm hover:bg-black/20`}>
                            <Icon className="w-4 h-4" icon={`teenyicons:menu-solid`} />
                        </button>
                    </Tooltip>
                    <img src="/favicon.png" className="h-7" alt="" />
                </div>

                <div className="flex items-center gap-3">
                    <AnimatePresence>
                        <Tooltip
                            arrowSize={8}
                            label={<div className="flex items-center gap-2 text-sm">{t("Quick navigation between application links")}<div dir="ltr">
                                <Kbd>CTRL</Kbd> + <Kbd>/</Kbd> OR <Kbd>/</Kbd>
                            </div></div>}
                            withArrow>
                            <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} onClick={spotlight.open} className="flex items-center justify-center transition-all duration-150 rounded-full shadow-sm bg-slate-600 text-slate-100 hover:bg-slate-700 w-9 h-9 dark:bg-slate-700 dark:text-slate-900">
                                <Icon className="w-4 h-4" icon={`iconamoon:search-light`} />
                            </motion.button>
                        </Tooltip>
                        <Spotlight
                            withinPortal
                            shortcut={['/', 'ctrl+/']}
                            actions={menuSpotlight}
                            scrollable
                            limit={7}
                            nothingFound={`${t("Nothing found")}...`}
                            classNames={{
                                content: "dark:bg-slate-700",
                                search: 'dark:text-slate-200',
                                action: "dark:hover:bg-slate-800",
                                actionSection: "dark:text-slate-200"
                            }}
                            highlightQuery
                            searchProps={{
                                leftSection: <Icon className="w-4 h-4" icon={`iconamoon:search-light`} />,
                                placeholder: `${t('Search')}...`,
                            }}
                        />
                    </AnimatePresence>
                    <Switcher />
                    <Tooltip arrowSize={8} label={t("Contextual help")} withArrow>
                        <button onClick={open} className="flex items-center justify-center transition-all duration-150 rounded-full shadow-sm bg-slate-600 text-slate-100 hover:bg-slate-700 w-9 h-9 dark:bg-slate-700 dark:text-slate-900">
                            <Icon className="w-4 h-4" icon={`fluent:question-24-filled`} />
                        </button>
                    </Tooltip>
                </div>
            </div>
            <SidebarMobile clickableItem={clickableItem} setClickableItem={setClickableItem} isShow={isShow} setIsShow={setIsShow} />
            <ContextualHelp opened={opened} close={close} />
        </>
    )
}

export default Navbar