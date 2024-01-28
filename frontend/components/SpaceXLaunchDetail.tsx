import Image from 'next/image';

interface SpaceXLaunchDetailProps {
  launch: {
    fairings: {
      reused: boolean | null;
      recovery_attempt: boolean | null;
      recovered: boolean | null;
      ships: string[] | [];
    } | null;
    links: {
      patch: {
        small: string | null;
        large: string | null;
      } | null;
      reddit: {
        campaign: string | null;
        launch: string | null;
        media: string | null;
        recovery: string | null;
      } | null;
      flickr: {
        small: string[];
        original: string[];
      } | null;
      presskit: string | null;
      webcast: string | null;
      youtube_id: string | null;
      article: string | null;
      wikipedia: string | null;
    } | null;
    static_fire_date_utc: string | null;
    static_fire_date_unix: number | null;
    net: boolean;
    window: number | null;
    rocket: string;
    success: boolean | null;
    failures: {
      time: number | null;
      altitude: number | null;
      reason: string | null;
    }[] | [];
    details: string | null;
    crew: {
      crew: string | null;
      role: string | null;
    }[] | [];
    ships: string[] | [];
    capsules: string[] | [];
    payloads: string[] | [];
    launchpad: string | null;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: {
      core: string | null;
      flight: number | null;
      gridfins: boolean | null;
      legs: boolean | null;
      reused: boolean | null;
      landing_attempt: boolean | null;
      landing_success: boolean | null;
      landing_type: string | null;
      landpad: string | null;
    }[] | [];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: string | null;
    id: string;
  };
}

const SpaceXLaunchDetail: React.FC<SpaceXLaunchDetailProps> = ({ launch }) => (
  <div>
    <h2>Launch Details</h2>
    {launch.fairings && (
      <div>
        <h3>Fairings</h3>
        <table>
          <tbody>
          <tr>
            <td>Reused:</td>
            <td>{launch.fairings.reused ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td>Recovery Attempt:</td>
            <td>{launch.fairings.recovery_attempt ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td>Recovered:</td>
            <td>{launch.fairings.recovered ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td>Ships:</td>
            <td>{launch.fairings.ships.join(', ')}</td>
          </tr>
          </tbody>
        </table>
      </div>
    )}

    {launch.links && (
      <div>
        <h3>Links</h3>
        <table>
          <tbody>
          {launch.links.patch && launch.links.patch.small && (
            <tr>
              <td>Patch (Small):</td>
              <td><Image alt="Patch (Small)" src={launch.links.patch.small} width="100" height="100" /></td>
            </tr>
          )}
          {launch.links.patch && launch.links.patch.large && (
            <tr>
              <td>Patch (Large):</td>
              <td><Image alt="Patch (Large)" src={launch.links.patch.large} width="100" height="100" /></td>
            </tr>
          )}
          {launch.links.reddit && (
            <>
              <tr>
                <td>Reddit Campaign:</td>
                <td>{launch.links.reddit.campaign}</td>
              </tr>
              <tr>
                <td>Reddit Launch:</td>
                <td>{launch.links.reddit.launch}</td>
              </tr>
              <tr>
                <td>Reddit Media:</td>
                <td>{launch.links.reddit.media}</td>
              </tr>
              <tr>
                <td>Reddit Recovery:</td>
                <td>{launch.links.reddit.recovery}</td>
              </tr>
            </>
          )}
          {launch.links.flickr && (
            <>
              <tr>
                <td>Flickr Small:</td>
                <td>{launch.links.flickr.small.join(', ')}</td>
              </tr>
              <tr>
                <td>Flickr Original:</td>
                <td>{launch.links.flickr.original.join(', ')}</td>
              </tr>
            </>
          )}
          <tr>
            <td>Presskit:</td>
            <td>{launch.links.presskit}</td>
          </tr>
          {launch.links.webcast && (
            <tr>
              <td>Webcast:</td>
              <td><a target="_blank" href={launch.links.webcast}>Webcast</a></td>
            </tr>
          )}
          <tr>
            <td>YouTube ID:</td>
            <td>{launch.links.youtube_id}</td>
          </tr>
          {launch.links.article && (
            <tr>
              <td>Article:</td>
              <td><a target="_blank" href={launch.links.article}>Article</a></td>
            </tr>
          )}
          {launch.links.wikipedia && (
            <tr>
              <td>Wikipedia:</td>
              <td><a target="_blank" href={launch.links.wikipedia}>Wikipedia</a></td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    )}

    <table>
      <tbody>
      <tr>
        <td>Static Fire Date (UTC):</td>
        <td>{launch.static_fire_date_utc}</td>
      </tr>
      <tr>
        <td>Static Fire Date (Unix):</td>
        <td>{launch.static_fire_date_unix}</td>
      </tr>
      <tr>
        <td>NET:</td>
        <td>{launch.net ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>Window:</td>
        <td>{launch.window}</td>
      </tr>
      <tr>
        <td>Rocket:</td>
        <td>{launch.rocket}</td>
      </tr>
      <tr>
        <td>Success:</td>
        <td>{launch.success ? 'Yes' : 'No'}</td>
      </tr>
      </tbody>
    </table>

    {launch.failures && launch.failures.length>0 && (
      <div>
        <h3>Failures</h3>
        <table>
          <thead>
          <tr>
            <th>Time</th>
            <th>Altitude</th>
            <th>Reason</th>
          </tr>
          </thead>
          <tbody>
          {launch.failures.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.altitude}</td>
              <td>{item.reason}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )}

    <table>
      <tbody>
      <tr>
        <td>Details:</td>
        <td>{launch.details}</td>
      </tr>
      </tbody>
    </table>

    {launch.crew && launch.crew.length>0 && (
      <div>
        <h3>Crew</h3>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
          </thead>
          <tbody>
          {launch.crew.map((item, index) => (
            <tr key={index}>
              <td>{item.crew}</td>
              <td>{item.role}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )}

    {launch.ships && launch.ships.length>0 && (
      <div>
        <h3>Ships</h3>
        <p>{launch.ships.join(', ')}</p>
      </div>
    )}

    {launch.capsules && launch.capsules.length>0 && (
      <div>
        <h3>Capsules</h3>
        <p>{launch.capsules.join(', ')}</p>
      </div>
    )}

    {launch.payloads && launch.payloads.length>0 && (
      <div>
        <h3>Payloads</h3>
        <p>{launch.payloads.join(', ')}</p>
      </div>
    )}

    <table>
      <tbody>
      <tr>
        <td>Launchpad:</td>
        <td>{launch.launchpad}</td>
      </tr>
      <tr>
        <td>Flight_number:</td>
        <td>{launch.flight_number}</td>
      </tr>
      <tr>
        <td>Name:</td>
        <td>{launch.name}</td>
      </tr>
      <tr>
        <td>Date (utc):</td>
        <td>{launch.date_utc}</td>
      </tr>
      <tr>
        <td>Date (unix):</td>
        <td>{launch.date_unix}</td>
      </tr>
      <tr>
        <td>Date (local):</td>
        <td>{launch.date_local}</td>
      </tr>
      <tr>
        <td>Date precision:</td>
        <td>{launch.date_precision}</td>
      </tr>
      <tr>
        <td>Upcoming:</td>
        <td>{launch.upcoming ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>Auto update:</td>
        <td>{launch.auto_update ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>TBD:</td>
        <td>{launch.tbd ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>Launch library_id:</td>
        <td>{launch.launch_library_id}</td>
      </tr>
      <tr>
        <td>ID:</td>
        <td>{launch.id}</td>
      </tr>
      </tbody>
    </table>

    {launch.cores && launch.cores.length>0 && (
      <div>
        <h3>Cores</h3>

        <table>
          <thead>
          <tr>
            <th>Core</th>
            <th>Flight</th>
            <th>Gridfins</th>
            <th>Legs</th>
            <th>Reused</th>
            <th>Landing Attempt</th>
            <th>Landing Success</th>
            <th>Landing Type</th>
            <th>Landpad</th>
          </tr>
          </thead>
          <tbody>

          {launch.cores.map((item, index) => (
            <tr key={index}>
              <td>{item.core}</td>
              <td>{item.flight}</td>
              <td>{item.gridfins ? 'Yes' : 'No'}</td>
              <td>{item.legs ? 'Yes' : 'No'}</td>
              <td>{item.reused ? 'Yes' : 'No'}</td>
              <td>{item.landing_attempt ? 'Yes' : 'No'}</td>
              <td>{item.landing_success ? 'Yes' : 'No'}</td>
              <td>{item.landing_type}</td>
              <td>{item.landpad}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

export default SpaceXLaunchDetail;