import {useRef, useState} from 'react';
import Link from 'next/link';

export default function CreateUserPage() {
  const [message, setMessage] = useState<any>({});
  const fn = useRef<any>('');
  const ln = useRef<any>('');
  const em = useRef<any>('');
  const mb = useRef<any>('');

  const createUser = async () => {
    const enteredData = JSON.stringify({
      fn: fn.current.value,
      ln: ln.current.value,
      em: em.current.value,
      mb: mb.current.value,
    });
    const data: any = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: enteredData,
    });
    setMessage(await data.json());
  };

  return (
    <>
      <h1>Create User Page</h1>
      <Link href={'/'}>
        <h6>Go to Home Page - Click here </h6>
      </Link>
      <h6>First Name</h6>
      <input ref={fn} type="text" />
      <h6>Last Name</h6>
      <input ref={ln} type="text" />
      <h6>Email</h6>
      <input ref={em} type="text" />
      <h6>Phone :</h6>
      <input ref={mb} type="text" />
      <br />
      <br />
      <button onClick={createUser}>Create User</button>
      <h6>Response: {message.fn && message.fn + ' Created SuccessFully'} </h6>
    </>
  );
}
