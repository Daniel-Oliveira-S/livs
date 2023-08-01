import styles from '../page.module.css'

type linkProps = {
  href: string;
  children: React.ReactNode;
}

export default function Links(Props: linkProps) {
  return (
    <a href={Props.href}>{Props.children}</a>
  );
}




