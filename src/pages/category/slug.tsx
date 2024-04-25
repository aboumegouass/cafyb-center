import HeaderTitle from '@/components/HeaderTitle'
import { GetCategoryDetailQuery, GetPostsListByCategoryIdQuery } from '@/query/posts'
import { Loader } from '@mantine/core'
import { Link, useParams } from 'react-router-dom'

function App() {
    const params = useParams()
    const { slug } = params
    const getCateDetails: any = GetCategoryDetailQuery({ slug: slug })
    const getCateID = !getCateDetails.isLoading && getCateDetails?.data[0]?.id
    const getPosts = GetPostsListByCategoryIdQuery({ id: getCateID })
    // const items = (!getPosts.isLoading || !getCateDetails.isLoading) && [
    //     {
    //         id: 1,
    //         title: <><Icon icon={`carbon:home`} className="w-4 h-4" /></>,
    //         href: "/"
    //     },
    // ].map((item, index) => (
    //     <Anchor href={''} key={index}>
    //         {getCateDetails?.data[0]?.name}
    //     </Anchor>
    // ));
    if (getPosts?.isLoading || getCateDetails.isLoading)
        return <div className='flex items-center justify-center p-4 h-60'><Loader size={44} /></div>
    return (
        <div className='p-4'>
            <HeaderTitle
                title={getCateDetails?.data[0]?.name} />

            <ul className='list-decimal pl-7'>
                {getPosts?.data?.map((item) => (
                    <li className='text-lg font-medium border-b border-b-slate-200 last:border-r-0' key={item.id}>
                        <Link to={`/${item.slug}`} className='flex p-4 transition-all duration-300 hover:text-slate-950 hover:pl-7'>
                            {item?.title?.rendered}
                        </Link>
                    </li>
                ))}
            </ul>
            {getPosts?.data?.length == 0 && <div className='flex items-center justify-center text-lg h-60 opacity-70'>Il n'y a aucune question dans cette section</div>}
        </div>
    )
}

export default App