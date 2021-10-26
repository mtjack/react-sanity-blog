import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

export default function SinglePost() {
const [SinglePost, setSinglePost] = useState([])
const [isLoading, setIsLoading] = useState(true)
const { slug } = useParams()

useEffect(() => {
    client.fetch(
        `*[slug.current  == "${slug}"] {
            title,
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
    .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
}, [slug])

    return(
       <>
        {isLoading ? <h1>Loading...</h1> : 
            <section>
                <h1>{SinglePost.title}</h1>
                {SinglePost.mainImage && SinglePost.mainImage.asset && (
                    <img src = {SinglePost.mainImage.asset.url} alt = {SinglePost.title} title = {SinglePost.title} />
                )}
                <p>By Matthew Jack</p>
                <button>
                    <Link to = "/blog">Read more articles</Link>
                </button>
                <div>
                    <BlockContent blocks = {SinglePost.body} projectId = "a4w5cc74" dataset = "production" />
                </div>
            </section>
        }
       </>
    )
}