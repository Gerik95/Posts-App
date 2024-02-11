import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Post = ({id, title, body}:any) => {
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

const Wrapper = styled('div') `
  margin: 0 auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 800px;
`

const PostTitle = styled('h1') `
  font-size: 18px;
  padding: 0;
  margin: 0;
`
const PostBody = styled('h3') `
  font-size: 16px;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ButtonView = styled('button') `
  font-size: 16px;
  width: 100px;
`