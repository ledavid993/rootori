export interface NavLinkProps {
  href: string;
  as: string;
  onClick?: () => void;
  children: React.ReactNode;
}
