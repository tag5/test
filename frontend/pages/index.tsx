import { useQuery, gql } from '@apollo/client';
import client from '../lib/apollo';
import SpaceXLaunchesTable from '@/components/SpaceXLaunchesTable';

const GET_SPACE_X_LAUNCHES = gql`
  query getSpaceXLaunchesWithOffsetAndLimit($offset: Int, $limit: Int) {
    getSpaceXLaunchesWithOffsetAndLimit(offset: $offset, limit: $limit) {
      id
      name
      date_local
    }
    countSpaceXLaunches
  }
`;

const PAGE_SIZE = 10;

export default function Home() {
  const { loading, error, data } = useQuery(GET_SPACE_X_LAUNCHES, {
    client,
    variables: { offset: 0, limit: PAGE_SIZE },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data && (
        <div>
          <SpaceXLaunchesTable launches={data.getSpaceXLaunchesWithOffsetAndLimit} />
        </div>
      )}
    </div>
  );
};