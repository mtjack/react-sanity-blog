import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client"

export default function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        client.fetch(
            `*[_type == "post"] {
                title,
                slug,
                body,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
        )
        .then((data) => setPosts(data))
        .catch(console.error)
    }, [])

    return (
        <section>
            <h1>Blog page</h1>
            <p>There are a total of {posts.length} posts</p>

            <div>
                {posts.map((post) => (
                    <article key = {post.slug.current}>
                        <img src = {post.mainImage.asset.url} alt = {post.title} />
                        <h4>{post.title}</h4>
                        <button>
                            <Link to={`/blog/${post.slug.current}`}>Read full article </Link>
                        </button>
                    </article>
                ))}
            </div>
        </section>
    )
}