import styles from './Header.module.css';

export default function Header(): JSX.Element{
    return(
        <header className={styles.headerContainer}>
            <div>Ваш город: <div>СПБ</div></div>
            <h1>My-test-Shop-Name</h1>
            <div>
                <div>favorite</div>
                <div>basket</div>
            </div>
        </header>
    )
};
