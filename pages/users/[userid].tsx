import Link from '../../node_modules/next/link';
import {useRouter} from '../../node_modules/next/router';

export default function User() {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.userid} Page</h1>
      <Link href={'/users'}>
        <h1>Go to Default User Page - Click here </h1>
      </Link>
    </>
  );
}
