import { SignUp } from "@clerk/nextjs";

import Header from "@/components/layout/Header";

export default function Page() {
  return (
    <div className='mt-20'>
      <div className='mb-6 flex justify-center'>
        <Header />
      </div>
      <div className='flex justify-center'>
        <SignUp />
      </div>
    </div>
  );
}
