import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=60" />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/123343987?v=4" />
        <strong>Byanka Ramos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="a">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}
