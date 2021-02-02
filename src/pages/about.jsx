import { Link } from "react-router-dom";

const About = () => {

    const posts = [
        {title: 'post-1', path:'/posts/1'},
        {title: 'post-2', path:'/posts/2'},
        {title: 'post-3', path:'/posts/3'},
        {title: 'post-4', path:'/posts/4'},
    ]
    return ( 
        <>
            <h2>About components</h2>
        <ul>
            {posts.map(post => <li key={post.path}>
                <Link to = {post.path}>{post.title}</Link>
            </li>)}
        </ul>
        </>
    );
}

export default About;