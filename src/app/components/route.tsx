import styles from '../page.module.css'

type RouteProps = {
  href: string;
  children: React.ReactNode;
}

export default function Route(Props: RouteProps) {
    return (
      <a href={Props.href} className={styles.submit}>{Props.children}</a>
    )
}