import Link from 'next/link';
import styles from '../styles/Home.module.css';

const arr = Array.from(Array(20).keys());

const Nav = () => (
  <nav>
    <ul className={styles.navlinks}>
      {arr.map((link, index) => {
        return (<li>
        <Link
          href="/product/[pid]"
          as={`/product/${index + 1}`}
        >
          <a>{index + 1}</a>
        </Link>
      </li>)
      })}
    </ul>
  </nav>
)

export default Nav;
