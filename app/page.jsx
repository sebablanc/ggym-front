import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Link className={styles.homeLink} href="/client-registration">Registrar cliente</Link>
      <Link className={styles.homeLink} href="/mark-shift">Marcar turno</Link>
    </>
  )
}
