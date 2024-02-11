import { JSX } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostQuery } from '../store/api';
import { ButtonView, PostBody, PostTitle, Wrapper } from '../styles/postView.style';

const PostView = (): JSX.Element => {
    const navigate = useNavigate();
    const params = useParams();
    const {data: post, isSuccess} = useGetPostQuery(params.id!);

    return (
        isSuccess ? (
            <Wrapper>
                <PostTitle>{post.id}. {post.title}</PostTitle>
                <PostBody>{post.body}</PostBody>
                <ButtonView onClick={() => navigate(-1)}>Назад</ButtonView>
            </Wrapper>
        ) : <></>
    );
};

export default PostView;
