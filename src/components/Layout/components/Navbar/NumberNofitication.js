import classNames from 'classnames/bind';
import styles from './NumberNofitication.module.scss';

export default function NumberNofitication({ number, children }) {
    const cx = classNames.bind(styles);
    return (
        <span className={cx('wrapper')}>
            {children}
            <span className={cx('number')}>{number}</span>
        </span>
    );
}
