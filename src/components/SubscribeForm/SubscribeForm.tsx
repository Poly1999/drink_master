import './SubscribeForm.css';

function SubscribeForm() {
  return (
    <form className='subscribe-form'>
      <p className='subscribe-form__text'>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <input
        type='email'
        placeholder='Enter your email'
        autoComplete='email'
        aria-label='Email'
        className='subscribe-form__input'
      />
      <button type='submit' className='subscribe-form__btn'>
        Subscribe
      </button>
    </form>
  );
}

export default SubscribeForm;
