import DrinkDetails from '@/components/DrinkDetails/DrinkDetails';
import { Suspense } from 'react';
import './page.css';

function DrinkPage() {
  return (
    <Suspense
      fallback={
        <div className='drink-page__loading'>
          <span className='drink-page__spinner'></span>
          <p className='drink-page__loading-text'>Loading...</p>
        </div>
      }
    >
      <DrinkDetails />
    </Suspense>
  );
}

export default DrinkPage;
