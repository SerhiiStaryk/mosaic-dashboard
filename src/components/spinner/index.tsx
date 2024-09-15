import { Spinner } from '@blueprintjs/core';

const SpinnerComponent: React.FC = () => {
  return (
    <div className='z-50 flex w-[100%] h-[100vh] absolute justify-center backdrop-blur-sm'>
      <Spinner
        size={60}
        intent='primary'
      />
    </div>
  );
};

export default SpinnerComponent;
