import { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Loading from '@/components/Loading';

const InfiniteScroll = ({ children, load, hasMore, endMessage = 'No more data' }) => {
  const observerRef = useRef(null);
  const observedRef = useRef(null);

  const handleIntersect = useCallback(
    (entries, _observer) => {
      // Check if the sentinel element is intersecting, and if so, call the load function
      if (entries[0].isIntersecting && hasMore) {
        load();
      }
    },
    [load],
  );

  useEffect(() => {
    // Create a new IntersectionObserver when the component mounts
    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });

    // Attach the observer to the sentinel element
    if (observedRef.current) {
      observerRef.current.observe(observedRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [load]);

  useEffect(() => {
    // When the hasMore prop changes, disconnect the previous observer and reattach it to the new sentinel element
    if (observerRef.current && observedRef.current) {
      observerRef.current.disconnect();
      observerRef.current.observe(observedRef.current);
    }
  }, [hasMore]);

  return (
    <div>
      {children}
      <Observed ref={observedRef}>{hasMore ? <Loading /> : endMessage}</Observed>
    </div>
  );
};

const Observed = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

InfiniteScroll.propTypes = {
  load: PropTypes.func,
  hasMore: PropTypes.bool,
  loader: PropTypes.node,
  children: PropTypes.node,
  endMessage: PropTypes.oneOf([PropTypes.node, PropTypes.any]),
};

export default InfiniteScroll;
