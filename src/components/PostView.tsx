import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";

const PostView = () => {
    const [post, setPost] = useState<any>({});
    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [params.id])


    return (
        <Wrapper>
            <PostTitle>{post.id}. {post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
            <ButtonView onClick={() => navigate(-1)}>Назад</ButtonView>
        </Wrapper>
    );
};

export default PostView;

const Wrapper = styled('div') `
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 800px;
`

const PostTitle = styled('h1') `
  font-size: 21px;
  padding: 0;
  margin: 0;
`
const PostBody = styled('h3') `
  font-size: 18px;
  padding: 0;
  margin: 0;
`
const ButtonView = styled('button') `
  font-size: 16px;
  width: 100px;
`