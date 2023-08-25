import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Popper from './Popup';

function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
            <Popper />
        </aside>
    );
}

export default Sidebar;
