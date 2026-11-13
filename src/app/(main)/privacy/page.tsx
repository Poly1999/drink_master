import '@/app/legal.css';

const privacy = [
  {
    title: 'What personal data do we collect:',
    text: 'We may collect various types of personal data that you voluntarily provide when interacting with our website, registering an account or filling out forms. This may include your name, email address, phone number and more.',
  },
  {
    title: 'How we use your personal data:',
    text: 'We use the collected personal data to provide services, manage your account, provide you with information about our products and services, and to communicate with you regarding inquiries and updates.',
  },
  {
    title: 'Protection of personal data:',
    text: 'We take every effort to protect your information and use modern technologies to prevent unauthorized access, loss, or disclosure of your personal information.',
  },
  {
    title: 'Disclosure to third parties:',
    text: 'We do not disclose your personal data to third parties without your consent, except when required by law or to provide the services you requested.',
  },
  {
    title: 'Changes to the Privacy Policy:',
    text: 'We may periodically update this Privacy Policy. Please refer to this page to stay informed about any changes.',
  },
  {
    title: 'Contact us:',
    text: 'If you have any questions or concerns regarding this Privacy Policy or your information, please contact us using the contact details provided on our website.',
  },
];

function PrivacyPage() {
  return (
    <main className='legal'>
      <h1 className='legal__title'>Privacy Policy</h1>
      <p className='legal__text'>
        Your privacy is important to us. This section outlines how we collect,
        use, process, and protect your personal data. This Privacy Policy
        applies to the use of our website, applications, and services, so please
        take a moment to read it.
      </p>
      <ul>
        {privacy.map(priv => (
          <li key={priv.title} className='legal__content'>
            <h2 className='legal__subtitle'>{priv.title}</h2>
            <p className='legal__text'>{priv.text}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default PrivacyPage;
