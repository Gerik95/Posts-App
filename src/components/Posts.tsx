import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = () => {
    const [responseData, setResponseData] = useState<any>([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setResponseData(json))
    }, [])


    return (
        <div>
            {responseData.map((el:any, index:any) => {
                return (
                    <>
                        <Post id={el.id} title={el.title} body={el.body}/>
                    </>
                )
            })}
        </div>
    );
};

export default Posts;