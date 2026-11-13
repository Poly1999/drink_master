import AuthShell from '@/components/AuthShell/AuthShell';
import './auth-form.css';

function AuthLayout({ children }: LayoutProps<'/'>) {
  return <AuthShell>{children}</AuthShell>;
}

export default AuthLayout;
