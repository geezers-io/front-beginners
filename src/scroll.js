import InfiniteScroll from 'react-infinite-scroll-component';
import App from './App';
import { useState } from 'react';

const scroll = () => {
  const [dataSource, setDataSource] = useState(Array.from({ App }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (dataSource.length < 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array, from({ App })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };
  return (
    <InfiniteScroll
      dataLength={dataSource.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={<p>You are all set!</p>}
    >
      <App />
    </InfiniteScroll>
  );
};
