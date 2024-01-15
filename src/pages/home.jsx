import styles from '../styles/home.module.css'
import Project from '../components/project'


export default function Home() {
  return (
   
    <main>
      <h1 className={styles.placeholder}>Dominck Birge's Portfolio</h1>
      <h2>Here are some of my projects I have worked on</h2>
      <h2>Click the links to go to my vercel account</h2>

      <Project className={styles.placeholder} title="Project 1" description="My Capstone Project"  />
      <Project title="Project 2" description="My Web design pdf"/> 
      <Project title="Project 3" description="Link to another pdf"/>
    </main>
  )
}