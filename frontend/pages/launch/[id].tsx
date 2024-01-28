import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client';
import client from '@/lib/apollo';
import SpaceXLaunchDetail from '@/components/SpaceXLaunchDetail';
import Error from 'next/error';

const GET_SPACE_X_LAUNCHES = gql`
  query getSpaceXLaunchById($id: String!) {
    getSpaceXLaunchById(id: $id) {
      fairings {
        reused
        recovery_attempt
        recovered
        ships
      }
      links {
        patch {
          small
          large
        }
        reddit {
          campaign
          launch
          media
          recovery
        }
        flickr {
          small
          original
        }
        presskit
        webcast
        youtube_id
        article
        wikipedia
      }
      static_fire_date_utc
      static_fire_date_unix
      net
      window
      rocket
      success
      failures {
        time
        altitude
        reason
      }
      details
      crew {
        crew
        role
      }
      ships
      capsules
      payloads
      launchpad
      flight_number
      name
      date_utc
      date_unix
      date_local
      date_precision
      upcoming
      cores {
        core
        flight
        gridfins
        legs
        reused
        landing_attempt
        landing_success
        landing_type
        landpad
      }
      auto_update
      tbd
      launch_library_id
      id
    }
  }
`;

export default function Launch() {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_SPACE_X_LAUNCHES, {
    client,
    variables: { id },
  });

  if (loading) return <div>Loading...</div>
  if (error) return <p>Error : {error.message}</p>

  let launch = data.getSpaceXLaunchById
  if (launch==null) return <Error statusCode={404} />

  return <SpaceXLaunchDetail launch={launch} />
}