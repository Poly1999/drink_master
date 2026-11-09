import './UserLogo.css';
import Image from 'next/image';

interface UserLogoProps {
  name: string;
  avatarUrl: string | null;
}

function UserLogo({ name, avatarUrl }: UserLogoProps) {
  return (
    <button type='button' className='user-logo'>
      <Image
        src={avatarUrl ? avatarUrl : '/avatar-placeholder.svg'}
        alt={name}
        width={44}
        height={44}
        className='user-logo__avatar'
      />
      <span className='user-logo__name'>{name}</span>
    </button>
  );
}

export default UserLogo;
