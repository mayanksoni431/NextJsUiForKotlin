import Link from 'next/link';

export default function CreateUserPage() {
  return (
    <>
      <h1>New User Page</h1>
      <Link href={'/'}>
        <h6>Go to Home Page - Click here </h6>
      </Link>
    </>
  );
}
