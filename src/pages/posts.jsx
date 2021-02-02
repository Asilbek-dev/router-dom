const Posts = ({history: {replace}}) => {

const handleClick = () =>{
        replace("/asilbek")
    }
    return ( 
        <>
            <h2>Posts components</h2>
            <button onClick={handleClick}>click replace page</button>
        </>
    );
}

export default Posts;