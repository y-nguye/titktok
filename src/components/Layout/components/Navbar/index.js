import { FiMoreVertical, FiSearch } from 'react-icons/fi';
import { BsFillXCircleFill, BsPlusLg } from 'react-icons/bs';
import { BiLoaderAlt } from 'react-icons/bi';
import { Dropdown } from 'antd';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import images from '../../../../assets/images';
import Button from '../../../Button';

export default function Navbar() {
    const cx = classNames.bind(styles);
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div
                    className={cx('header-container', 'header-container__left')}
                >
                    <img src={images.logo} alt="Tiktok"></img>
                </div>

                <div
                    className={cx(
                        'header-container',
                        'header-container__center'
                    )}
                >
                    <div className={cx('search-input-container')}>
                        <form>
                            <input spellCheck={false} placeholder="Tìm kiếm" />

                            <div className={cx('x-circle')}>
                                <BsFillXCircleFill />
                            </div>
                            <div className={cx('loader-alt')}>
                                <BiLoaderAlt />
                            </div>
                            <span class="span-spliter"></span>
                            <button>
                                <FiSearch />
                            </button>
                        </form>
                    </div>
                </div>

                <div
                    className={cx(
                        'header-container',
                        'header-container__right'
                    )}
                >
                    <Button outline>
                        <BsPlusLg />
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                        placement="bottomLeft"
                    >
                        <div>
                            <FiMoreVertical />
                        </div>
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
}

const items = [
    {
        key: '1',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item
            </a>
        ),
    },
];
