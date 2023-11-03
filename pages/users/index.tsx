import Link from '../../node_modules/next/link';

export default function Users(props: {
  title: string;
  link: string;
  users: any[];
}) {
  return (
    <>
      <h1>{props?.title}</h1>
      <Link href={'/'}>
        <h6>{props?.link} </h6>
      </Link>
      {props.users.map((user: any, index) => (
        <>
          <h5>User : {index + 1} </h5>
          <h6>First Name : {user?.fn}</h6>
          <h6>Last Name : {user?.ln}</h6>
          <h6>Email : {user?.em}</h6>
          <h6>Phone : : {user?.mb}</h6>
          <br />
        </>
      ))}
    </>
  );
}

export async function getStaticProps() {
 // const data = await (
  //   await fetch('http://localhost:3000/api/user', {
  //     method: 'GET',
  //   })
  // ).json();

  // console.log(data);

  return {
    props: {
      title: 'Default Users Page',
      link: 'Go to Home Page - Click here',
      users: [],
    },
  };
}
