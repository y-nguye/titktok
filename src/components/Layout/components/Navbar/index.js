import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

function Navbar() {
    const cx = classNames.bind(styles);
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('inner')}>Navbar</div>
        </nav>
    );
}

export default Navbar;
