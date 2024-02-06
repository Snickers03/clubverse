import { currentUser } from "@clerk/nextjs";

export default async function Page() {
  const user = await currentUser();
  console.log("user: ", user);

  return (
    <div className='mt-20 text-center'>
      <p className='text-2xl font-medium'>Main Page</p>
      <div>
        <p>User: {user?.firstName + " " + user?.lastName}</p>
        <p>Email: {user?.emailAddresses[0].emailAddress}</p>
      </div>
    </div>
  );
}
