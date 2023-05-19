import styles from '../styles/home.module.css'
import Header from '../components/header'
import Project from '../components/project'

export default function Home() {
  return (
    <main>
      <Header/>
      <h1 className={styles.placeholder}>Welcome to Dominick Birge's Portfolio!</h1>
      <h2>These are my projects heres three examples of my work</h2>
      <section>
        <ul>
      <Project name="Project 1" description="My first UI project"/>
      <Project name="Project 2" description="Food Website"/>
      <Project name="Project 3" description="Group Project using API"/>
      </ul>
      </section>
    </main>
  )
}
