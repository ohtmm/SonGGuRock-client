import { Toast } from '@/app/hooks/useToast';

const Toast = ({ text }: Toast) => {
  return (
    <div className='inset-0 w-full fixed z-100 '>
      <div className='absolute left-0 bottom-16 flex justify-center w-full h-10'>
        <span className=' flex items-center justify-center bg-grey900  text-white text-sm h-full w-[343px] rounded-lg bg-opacity-90'>
          {text}
        </span>
      </div>
    </div>
  );
};

export default Toast;
