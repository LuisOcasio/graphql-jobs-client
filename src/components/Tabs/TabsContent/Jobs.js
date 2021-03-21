import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_JOB = gql`
    {
        jobs {
            id
            title
        }
    }
`;

const Jobs = () => {
    const { loading, error, data } = useQuery(GET_JOB);

    if (loading) return 'loading...';
    if (error) return 'something went wrong';
    console.log(data);

    return (
        <>
            <select>
                {data.jobs.map((element) => {
                    return (
                        <option key={element.id} value={`element.title`}>
                            {element.title}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default Jobs;
