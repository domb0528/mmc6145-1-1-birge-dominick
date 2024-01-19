import styles from '../styles/home.module.css'
import Project from '../components/project'


export default function Home() {
  return (
   
    <main>
      <h1 className={styles.placeholder}>Dominick Birge's Portfolio</h1>
      <h2>Here are some of my projects I have worked on</h2>
      <h2>Click the links to go to my vercel account</h2>

      <Project className={styles.placeholder} title="Project 1" description="My Capstone Project Website" link="https://mmc6950-capstone-final2.vercel.app/" />
      <Project title="Project 2" description="My Capstone Creative Brief PDF" link="/creative-brief-mockup.pdf"/> 
      <Project title="Project 3" description="My Capstone Brand Identity PDF" link="/Brand-Identity-Style-Guide.pdf"/>
    </main>
  )
}