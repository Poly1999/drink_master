import '@/app/legal.css';

const terms = [
  {
    title: 'Acceptance of Terms:',
    text: 'By accessing or using the Drink Master app, you agree to comply with and be bound by the terms and conditions of this Agreement. If you do not agree with any part of this Agreement, you should immediately discontinue the use of the App.',
  },
  {
    title: 'App Features and Services:',
    text: 'The Drink Master app provides users with access to a collection of cocktail recipes, both curated and user-generated. Users can explore, search, and create their own cocktail recipes using the provided tools.',
  },
  {
    title: 'User Accounts and Content:',
    text: 'To fully utilize the App’s features, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and any content you submit, including your own cocktail recipes. You retain ownership of your content, but by submitting, you grant the App a non-exclusive, royalty-free license to use, modify, and distribute your content within the App.',
  },
  {
    title: 'Intellectual Property:',
    text: 'All content provided by the Drink Master app, including cocktail recipes, images, and text, is protected by copyright and other intellectual property laws. Users may not reproduce, distribute, or use these materials for commercial purposes without explicit permission from the App’s operators.',
  },
  {
    title: 'User-Generated Content Guidelines:',
    text: 'When creating and sharing user-generated cocktail recipes, you agree not to submit content that is offensive, unlawful, infringing, or harmful. The App reserves the right to remove or moderate user-generated content that violates these guidelines.',
  },
  {
    title: 'App Updates and Changes:',
    text: 'The features and functionality of the Drink Master app may evolve over time. The App reserves the right to modify, update, or discontinue any aspect of the App without prior notice.',
  },
  {
    title: 'Disclaimer of Liability:',
    text: 'While we strive to provide accurate and reliable information, the Drink Master app does not warrant the accuracy, completeness, or reliability of the content provided. Users acknowledge that cocktail recipes involve the use of alcohol and potentially hazardous ingredients and should exercise caution when using the recipes. The App’s liability is limited to the extent permitted by applicable law.',
  },
  {
    title: 'Governing Law and Dispute Resolution:',
    text: 'This Agreement shall be governed by the applicable laws. Any disputes arising from or related to this Agreement or the use of the App shall be resolved by the competent courts.',
  },
];

function TermsPage() {
  return (
    <main className='legal'>
      <h1 className='legal__title'>Terms of Service</h1>
      <p className='legal__text'>
        This “User Agreement” (the “Agreement”) sets forth the terms and
        conditions governing the use of the Drink Master application (“App”) and
        its services.
      </p>
      <ul>
        {terms.map(term => (
          <li key={term.title} className='legal__content'>
            <h2 className='legal__subtitle'>{term.title}</h2>
            <p className='legal__text'>{term.text}</p>
          </li>
        ))}
      </ul>
      <p className='legal__text'>
        By accessing or using the Drink Master app, you acknowledge that you
        have read, understood, and agreed to be bound by this User Agreement. If
        you do not agree to these terms, you must cease using the App
        immediately.
      </p>
    </main>
  );
}

export default TermsPage;
