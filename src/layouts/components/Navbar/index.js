import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import images from '../../../assets/images';

import config from '../../../configs';
import NoLoginHeader from './NoLoginHeader';
import LoginHeader from './LoginHeader';
import SearchInput from './SearchInput';

export default function Navbar() {
    const cx = classNames.bind(styles);

    let numberNotificationInbox = 29;
    let userLoggin = true;

    return (
        <nav className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div
                    className={cx('header-container', 'header-container__left')}
                >
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt="tiktok"></img>
                    </Link>
                </div>

                <div
                    className={cx(
                        'header-container',
                        'header-container__center'
                    )}
                >
                    <SearchInput />
                </div>

                <div
                    className={cx(
                        'header-container',
                        'header-container__right'
                    )}
                >
                    {userLoggin ? (
                        <LoginHeader
                            numberNotificationInbox={numberNotificationInbox}
                        />
                    ) : (
                        <NoLoginHeader />
                    )}
                </div>
            </div>
        </nav>
    );
}
