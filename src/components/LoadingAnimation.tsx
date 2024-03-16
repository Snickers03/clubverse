import { ScaleLoader } from "react-spinners";

const LoadingAnimation = () => {
  return (
    <div>
      <div className='flex py-20'>
        <ScaleLoader className='mx-auto text-slate-600' />
      </div>
    </div>
  );
};

export default LoadingAnimation;
