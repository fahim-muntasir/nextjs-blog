import Link from "next/link";
import { useState } from "react";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: {
            posts,
        },
    };
}

export default function Home({ posts }) {
    const [loading, setLoading] = useState(false);

    let content = null;

    if (posts?.length > 0) {
        content = posts.map((post, i) => (
            <ul key={i}>
                <li>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            </ul>
        ));
    }

    if (posts?.length === 0) {
        content = <p>Empty post!</p>;
    }

    return content;
}
