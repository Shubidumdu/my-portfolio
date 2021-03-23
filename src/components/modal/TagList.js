import { lighten } from 'polished';
import React from 'react';
import { useTheme, Tag as T } from 'styled-components';

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
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </TagWrap>
  );
};

export default TagList;
