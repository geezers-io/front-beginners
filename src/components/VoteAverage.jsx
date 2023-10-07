import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { css } from '@emotion/react';

const StarState = {
  Empty: 'Empty',
  Half: 'Half',
  Fill: 'Fill',
};
const getStarState = (average10, order) => {
  if (order * 2 - 1.5 >= average10 && order !== 1) {
    return StarState.Empty;
  }
  if (order * 2 - 0.5 <= average10) {
    return StarState.Fill;
  }
  return StarState.Half;
};

const VoteAverage = ({ average10, starSize }) => {
  return (
    <Container starSize={starSize}>
      <Star state={getStarState(average10, 1)} />
      <Star state={getStarState(average10, 2)} />
      <Star state={getStarState(average10, 3)} />
      <Star state={getStarState(average10, 4)} />
      <Star state={getStarState(average10, 5)} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  --star-size: ${({ starSize }) => starSize};
`;
const Star = styled.div`
  position: relative;
  width: var(--star-size);
  height: var(--star-size);
  aspect-ratio: 1 / 1;
  clip-path: polygon(50% 0%, 66% 30%, 98% 35%, 75% 59%, 79% 91%, 51% 77%, 21% 91%, 25% 59%, 2% 35%, 37% 30%);

  ${({ theme, state }) => {
    switch (state) {
      case StarState.Empty: {
        return css`
          background-color: ${theme.colors.gray};
        `;
      }
      case StarState.Fill: {
        return css`
          background-color: ${theme.colors.pink.primary};
        `;
      }
      case StarState.Half: {
        return css`
          background-color: ${theme.colors.gray};
          &::before {
            content: '';
            position: absolute;
            width: var(--star-size);
            height: var(--star-size);
            aspect-ratio: 1 / 1;
            clip-path: polygon(50% 0%, 50% 77%, 21% 91%, 25% 59%, 2% 35%, 37% 30%);
            background-color: ${theme.colors.pink.primary};
          }
        `;
      }
    }
  }};
`;

VoteAverage.propTypes = {
  average10: PropTypes.number,
  starSize: PropTypes.string,
};

export default memo(VoteAverage);
