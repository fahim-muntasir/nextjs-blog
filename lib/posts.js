export const getPosts = async () => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${process.env.REACT_APP_LIMIT}`
    );
    const postData = response.json();

    return postData;
};

export const getPostId = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${process.env.REACT_APP_LIMIT}`
    );
    const postData = await res.json();

    const paths = postData?.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return paths;
};

export const getSinglePost = async (id) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const postData = response.json();

    return postData;
};
