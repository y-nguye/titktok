import classNames from 'classnames/bind';
import { FiMoreVertical } from 'react-icons/fi';
import { BsPlusLg } from 'react-icons/bs';
import { Dropdown } from 'antd';

import styles from './NoLoginHeader.module.scss';

import Button from '../../../components/Button';
const cx = classNames.bind(styles);

export default function NoLoginHeader() {
    return (
        <div className={cx('wrapper')}>
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
                <div className={cx('see-more')}>
                    <FiMoreVertical className={cx('see-more-icon')} />
                </div>
            </Dropdown>
        </div>
    );
}

const items = [
    {
        key: '1',
        label: (
            <span
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
                className={cx('language-dropdown', 'avatar-dropdown')}
            >
                Tiếng Việt
            </span>
        ),
    },
];
