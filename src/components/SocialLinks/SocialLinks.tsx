import Image from 'next/image';

const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
    icon: '/icons/facebook.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: '/icons/instagram.svg',
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com',
    icon: '/icons/youtube.svg',
  },
];

function SocialLinks() {
  return (
    <ul className='social-links'>
      {socials.map(social => (
        <li key={social.name} className='social-links__item'>
          <a
            href={social.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={social.name}
            className='social-links__link'
          >
            <Image
              src={social.icon}
              alt=''
              width={20}
              height={20}
              className='social-links__icon'
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
