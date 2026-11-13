import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

function MainLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
