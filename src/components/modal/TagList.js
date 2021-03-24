import { lighten } from 'polished';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Tag as T } from 'antd';

const StyledTag = styled(T)`
  & + & {
    margin: 0 10px 10px 0;
  }
`;

const TagWrap = styled.div`
  margin-top: 1rem;
`;

const Tag = ({ children }) => {
  const theme = useTheme();
  const color =
    theme.mode === 'light' ? 'default' : lighten(0.1, theme.colors.base);
  return <StyledTag color={color}>{children}</StyledTag>;
};

const TagList = ({ tags }) => {
  return (
    <TagWrap>
      {tags.map((tag, idx) => (
        <Tag key={idx}>{tag}</Tag>
      ))}
    </TagWrap>
  );
};

export default TagList;
