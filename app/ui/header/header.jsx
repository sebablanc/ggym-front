import Link from "next/link";
import styles from './header.module.css';

const links = [
  { label: 'Home', route: '/' },
  { label: 'Ingresar', route: '/login' }
]

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Logo GGym</h1>
      <nav className={styles.navigation}>
        {links.map(({ label, route }) => (
          <Link key={route} className={styles.headerLink} href={route}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}