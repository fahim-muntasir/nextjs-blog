import { getPostId, getSinglePost } from "../../lib/posts";

export async function getStaticPaths() {
    const paths = await getPostId();

    console.log(paths);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = await getSinglePost(params.id);

    return {
        props: { post },
    };
}

export default function Post({ post }) {
    return (
        <div>
            <span>{post.id}</span>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
