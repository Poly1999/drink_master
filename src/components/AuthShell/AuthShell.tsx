import Image from 'next/image';
import './AuthShell.css';

interface AuthProps {
  children: React.ReactNode;
}

function AuthShell({ children }: AuthProps) {
  return (
    <div className='auth'>
      <Image
        src='/welcome.png'
        alt='Welcome Page Image'
        className='auth__img'
        width={700}
        height={980}
      />
      {children}
    </div>
  );
}

export default AuthShell;
