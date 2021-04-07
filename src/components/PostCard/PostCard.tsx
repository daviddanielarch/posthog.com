import React from 'react'
import { Link } from 'gatsby'
import { CallToAction } from '../CallToAction'
import dummyPostImg from '../LandingPage/RecentBlogPosts/images/blog-post.png'
import 'antd/lib/card/style/css'

interface PostType {
    id: string
    excerpt: string
    fields: {
        slug: string
    }
    frontmatter: {
        date: string
        title: string
    }
}

const ReadPost = ({ to }: { to: string }) => {
    return (
        <CallToAction
            type="secondary"
            icon="read-dark"
            iconBg="bg-gray-500"
            to={to}
            width="full"
            className="mt-8 border-gray-800 text-gray-600 hover:border-gray-900 hover:text-gray-900"
        >
            Read Post
        </CallToAction>
    )
}

const FeaturedPost = ({ post }: { post: PostType }) => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/2 md:pr-4 py-24">
                <span className="text-gray-400 text-xs uppercase">Latest Post</span>
                <header className="text-2xl text-gray-900 font-gosha mt-1">{post.frontmatter.title}</header>
                <div className="text-gray-500 mt-2">{post.excerpt}</div>
                <ReadPost to={post.fields.slug} />
            </div>
            <div className="w-full md:w-1/2 md:pl-4 rounded-lg overflow-hidden">
                <img className="min-w-full min-h-full" src={dummyPostImg} />
            </div>
        </div>
    )
}

const PostCard = ({ post, featured = false }: { post: PostType; featured?: boolean }) => (
    <div>
        {featured ? (
            <FeaturedPost post={post} />
        ) : (
            <div className="flex flex-col mb-12">
                <Link
                    to={post.fields.slug}
                    className="font-bold font-gosha text-2xl text-gray-900 hover:text-gray-900 hover:underline"
                >
                    {post.frontmatter.title}
                </Link>
                <div className="mt-4">{post.excerpt}</div>
                <ReadPost to={post.fields.slug} />
            </div>
        )}
    </div>
)

export default PostCard
