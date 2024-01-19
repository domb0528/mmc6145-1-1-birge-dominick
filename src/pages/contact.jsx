import styles from '../styles/home.module.css'
export default function Contact () {
    return  (
        
        <main>
         <h1 className={styles.placeholder}>Contact Page</h1>

         <div className="contact">

         <p>To reach me click the links below</p>

         <img src="/linkdin.png" alt="logo" width="180" height="50"  />

         <p>Add me on my account <a href="https://www.linkedin.com/feed/" target="blank">Linkedin</a></p>

         <img src="/github.png" alt="logo" width="180" height="50" />

         <p>Here is my Repositories <a href="https://github.com/domb0528" target="blank">Git-Hub</a></p>
         
         </div>
         
         </main>
         
    ) 
}