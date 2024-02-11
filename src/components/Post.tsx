import { FC, JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostProps } from '../interfaces/PostProps';
import { ButtonView, PostBody, PostTitle, Wrapper } from '../styles/post.style';

const Post: FC<PostProps> = ({id, title, body}): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <PostTitle>{id}. {title}</PostTitle>
            <PostBody>{body}</PostBody>
            <ButtonView onClick={() => navigate(`posts/${id}`)}>Просмотр</ButtonView>
        </Wrapper>
    );
};

export default Post;