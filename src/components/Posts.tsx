import { JSX } from 'react';
import Post from './Post';
import { useGetDataQuery } from '../store/api';
import { IPost } from '../interfaces/Post';

const Posts = (): JSX.Element => {
    const {data: posts, isSuccess} = useGetDataQuery({});

    return (
        isSuccess ? (
            <div>
                {posts.map((el: IPost) => <Post id={el.id} title={el.title} body={el.body} key={el.id}/>)}
            </div>
        ) : <></>
    );
};

export default Posts;