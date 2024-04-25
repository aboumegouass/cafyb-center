import { axiosAPI } from '@/axios/axios'

// Get Posts info API `GET`
export const getPosts = async () => axiosAPI().get(`/posts`).then((res) => res.data);

// Get Categories info API `GET`
export const getCategories = async () => axiosAPI().get(`/categories`).then((res) => res.data);

// Get Single Category info API `GET`
export const getCategoryDetails = async ({ slug }: { slug: string }) => axiosAPI().get(`/categories?slug=${slug}`).then((res) => res.data);

// Get Posts list by Category ID info API `GET`
export const getPostsListByCatID = async ({ id }: { id: number }) => axiosAPI().get(`/posts?categories=${id}`).then((res) => res.data);

// Get Post Detail by slug info API `GET`
export const getPostDetails = async ({ slug }: { slug: string }) => axiosAPI().get(`/posts?slug=${slug}`).then((res) => res.data);
