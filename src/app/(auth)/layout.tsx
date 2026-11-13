import AuthShell from '@/components/AuthShell/AuthShell';

function AuthLayout({ children }: LayoutProps<'/'>) {
  return <AuthShell>{children}</AuthShell>;
}

export default AuthLayout;
