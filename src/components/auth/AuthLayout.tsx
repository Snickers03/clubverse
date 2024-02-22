import Header from "@/components/layout/Header";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='mt-20'>
      <div className='mb-6 flex justify-center'>
        <Header />
      </div>
      <div className='flex justify-center'>{children}</div>
    </div>
  );
};

export default AuthLayout;
