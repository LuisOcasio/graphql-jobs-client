import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_JOBS = gql`
  query jobs {
    jobs {
      id
      title
      company {
        name
      }
    }
  }
`;

const Card = () => {
  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) return 'loading...';
  if (error) return 'something went wrong';
  console.log('data', data);
  return <></>;
};
export default Card;
