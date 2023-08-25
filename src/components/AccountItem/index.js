import { Link } from 'react-router-dom';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

export default function AccountItem({ data }) {
    const cx = classNames.bind(styles);
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')} key={data.id}>
            <img
                className={cx('avatar')}
                src={data.avatar}
                alt={data.nickname}
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    {data.first_name} {data.last_name}
                    {data.tick && (
                        <IoCheckmarkCircleSharp className={cx('tick')} />
                    )}
                </div>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
