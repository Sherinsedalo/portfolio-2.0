import { css } from '@emotion/react';

export const TestEmotion = () => (
  <div css={css`color: red; font-size: 2rem;`}>If this is red, Emotion works!</div>
);