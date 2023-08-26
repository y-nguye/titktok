import classNames from 'classnames/bind';
import { Dropdown, Tooltip, Switch } from 'antd';
import { FiUploadCloud } from 'react-icons/fi';
import { BsSend } from 'react-icons/bs';
import { BiMessageDetail, BiSupport } from 'react-icons/bi';
import { CgDarkMode } from 'react-icons/cg';
import { LuKeyboard } from 'react-icons/lu';
import { HiMiniLanguage } from 'react-icons/hi2';
import styles from './LoginHeader.module.scss';

import NumberNofitication from './NumberNofitication';

const cx = classNames.bind(styles);

export default function LoginHeader({ numberNotificationInbox }) {
    return (
        <div className={cx('wapper')}>
            <Tooltip title="Upload">
                <div>
                    <FiUploadCloud />
                </div>
            </Tooltip>
            <Tooltip title="Message">
                <div>
                    <BsSend />
                </div>
            </Tooltip>
            <Tooltip title="Inbox">
                <div>
                    <NumberNofitication number={numberNotificationInbox}>
                        <BiMessageDetail />
                    </NumberNofitication>
                </div>
            </Tooltip>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                placement="bottomLeft"
                overlayStyle={{ width: '220px' }}
            >
                <div>
                    <img
                        src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/345856193_627740588860690_1968665345529457682_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=xgP6uQTeYdEAX9KEwNT&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAiKjE01P6Tk402ZRxrL50xX3WeLZShizWy80oIFAT-fQ&oe=64ED5292"
                        alt="user-avatar"
                        className={cx('user-avatar')}
                    ></img>
                </div>
            </Dropdown>
        </div>
    );
}

const items = [
    {
        key: '1',
        icon: (
            <span className={cx('icon-avatar-menu')}>
                <HiMiniLanguage />
            </span>
        ),
        label: (
            <span
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                Tiếng Việt
            </span>
        ),

        children: [
            {
                key: '3-1',
                label: (
                    <span
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.antgroup.com"
                    >
                        Châu Á
                    </span>
                ),
                children: [
                    {
                        key: '3-1-1',
                        label: 'Tiếng Việt',
                    },
                ],
            },
            {
                key: '3-2',
                label: 'English',
            },
        ],
    },
    {
        key: '2',
        icon: <BiSupport className={cx('icon-avatar-menu')} />,
        label: (
            <span
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                Phản hồi và trợ giúp
            </span>
        ),
    },
    {
        key: '3',
        icon: <LuKeyboard className={cx('icon-avatar-menu')} />,
        label: (
            <span
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                Phím tắt trên bàn phím
            </span>
        ),
    },
    {
        type: 'divider',
    },
    {
        key: '4',
        icon: <CgDarkMode className={cx('icon-avatar-menu')} />,
        label: (
            <span
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                Chế độ tối
                <Switch className={cx('dark-mode-switch')} />
            </span>
        ),
    },
];
