import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href="https://github.com/golabisib">Golabisib</a> | Roozbeh Rigi Jangjo
        </p>
    </div>
  )
}

export default Header
