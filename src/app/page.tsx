import Link from '../../node_modules/next/link';

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href={'/users'}>
        <h6>Go to Users Page - Click here </h6>
      </Link>
      <Link href={'/createUser'}>
        <h6>Go to Create User Page - Click here </h6>
      </Link>
    </>
  );
}
