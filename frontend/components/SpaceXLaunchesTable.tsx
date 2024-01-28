import Link from 'next/link';

interface SpaceXLaunchesTableProps {
  launches: Array<{
    id: string
    name: string
    date_local: string
  }>;
}

const SpaceXLaunchesTable: React.FC<SpaceXLaunchesTableProps> = ({ launches }) => (
  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Date</th>
    </tr>
    </thead>
    <tbody>
    {launches.map((launch: any) => (
      <tr key={launch.id}>
        <td>
          <Link href={`/launch/${launch.id}`}>{launch.id}</Link>
        </td>
        <td>{launch.name}</td>
        <td>{launch.date_local}</td>
      </tr>
    ))}
    </tbody>
  </table>
);

export default SpaceXLaunchesTable;