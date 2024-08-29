import styles from './index.module.css'

const TestableExample = ({ title = 'Test me!' }: { title: string }) => (
  <main className={styles.main}>
    <h1 className={styles.title}>{title}</h1>
  </main>
)

export default TestableExample
