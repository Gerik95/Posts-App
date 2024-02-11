import styled from 'styled-components';

export const Wrapper = styled('div')`
  margin: 0 auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 800px;
`;

export const PostTitle = styled('h1')`
  font-size: 18px;
  padding: 0;
  margin: 0;
`;
export const PostBody = styled('h3')`
  font-size: 16px;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ButtonView = styled('button')`
  font-size: 16px;
  width: 100px;
`;