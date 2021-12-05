export interface CustomLinkProps {
  href: string;
  as: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
