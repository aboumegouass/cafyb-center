import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as postsAPI from '@/axios/posts'

/* 
=====================================================================================
 Get Posts Query
=====================================================================================
*/
export const GetPostsQuery = (option?: any) => {
    const { data, isLoading, isError }: any = useQuery({
        ...option,
        queryKey: ['get-posts'],
        queryFn: () => postsAPI.getPosts(),
    })

    return { data: data, isLoading, isError }
}

/* 
=====================================================================================
 Get Categories Query
=====================================================================================
*/
export const GetCategoriesQuery = (option?: any) => {
    const { data, isLoading, isError }: any = useQuery({
        ...option,
        queryKey: ['get-categories'],
        queryFn: () => postsAPI.getCategories(),
    })

    return { data: data, isLoading, isError }
}

/* 
=====================================================================================
 Get Category Detail Query
=====================================================================================
*/
export const GetCategoryDetailQuery = ({ slug }: { slug: string }, option?: any) => {
    const { data, isLoading, isError }: any = useQuery({
        ...option,
        queryKey: slug ? [`get-category-${slug}`] : ['get-category'],
        queryFn: () => postsAPI.getCategoryDetails({ slug }),
    })

    return { data: data, isLoading, isError }
}

/* 
=====================================================================================
 Get Category Detail Query
=====================================================================================
*/
export const GetPostsListByCategoryIdQuery = ({ id }: { id: number }, option?: any) => {
    const { data, isLoading, isError }: any = useQuery({
        ...option,
        queryKey: id ? [`get-posts-by-${id}`] : ['get-posts'],
        queryFn: () => postsAPI.getPostsListByCatID({ id }),
    })

    return { data: data, isLoading, isError }
}

/* 
=====================================================================================
 Get Post Detail Query
=====================================================================================
*/
export const GetPostDetailsQuery = ({ slug }: { slug: string }, option?: any) => {
    const { data, isLoading, isError }: any = useQuery({
        ...option,
        queryKey: slug ? [`get-post-${slug}`] : ['get-post'],
        queryFn: () => postsAPI.getPostDetails({ slug }),
    })

    return { data: data, isLoading, isError }
}
