import { Flex, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

const GithubLink = ({ endpoint }) => {
  return (
    <Link href={`https://github.com/${endpoint}`} textDecoration="none" isExternal>
      <Flex alignItems="center" gap={2}>
        <svg
          width="1.2em"
          height="1.2em"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M128,6.9C62.8,6.9,10,61.1,10,128c0,66.9,52.8,121.1,118,121.1c65.2,0,118-54.2,118-121.1C246,61.1,193.2,6.9,128,6.9z M163.4,236.8c-5.7,1.1-7.7-2.4-7.7-5.5c0-3.8,0.1-16.1,0.1-31.4c0-10.7-3.6-17.7-7.6-21.3c24.9-2.8,51-12.5,51-56.6c0-12.5-4.3-22.8-11.5-30.8c1.1-2.9,5-14.5-1.1-30.3c0,0-9.4-3.1-30.7,11.8c-8.9-2.5-18.5-3.8-28-3.9c-9.5,0-19.1,1.3-28,3.9C78.7,57.9,69.3,60.9,69.3,60.9c-6.1,15.8-2.2,27.4-1.1,30.3c-7.1,8-11.5,18.2-11.5,30.8c0,43.9,26.1,53.8,50.9,56.7c-3.2,2.9-6.1,7.9-7.1,15.3c-6.4,2.9-22.6,8-32.5-9.5c0,0-5.9-11-17.1-11.8c0,0-10.9-0.1-0.8,7c0,0,7.3,3.5,12.4,16.8c0,0,6.6,22.3,37.7,15.4c0,9.6,0.1,16.8,0.1,19.5c0,3-2,6.6-7.6,5.5C48.2,221.6,16.2,178.6,16.2,128c0-63.3,50-114.6,111.8-114.6c61.7,0,111.8,51.3,111.8,114.6C239.8,178.7,207.8,221.6,163.4,236.8z"
          />
        </svg>
        {endpoint}
        <ExternalLinkIcon />
      </Flex>
    </Link>
  );
};

GithubLink.propTypes = {
  endpoint: PropTypes.string,
};

export default GithubLink;
