import { getPostDetails } from '@/axios/posts'
import HeaderTitle from '@/components/HeaderTitle'
import { GetCategoryDetailQuery, GetPostDetailsQuery, GetPostsListByCategoryIdQuery } from '@/query/posts'
import { Loader } from '@mantine/core'
import { useParams } from 'react-router-dom'

function App() {
    const params = useParams()
    const { slug } = params
    const getPost: any = GetPostDetailsQuery({ slug: slug })
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

    if (getPost.isLoading)
        return <div className='flex items-center justify-center p-4 h-60'><Loader size={44} /></div>
    return (
        <div className='p-4'>
            <HeaderTitle
                title={getPost?.data[0]?.title?.rendered} />

            <div className='content-help-center' dangerouslySetInnerHTML={{ __html: getPost?.data[0]?.content?.rendered }} />
        </div>
    )
}

export default App