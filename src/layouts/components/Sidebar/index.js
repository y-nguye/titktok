import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '../../../configs';
import Menu, { MenuItem } from './Menu';

import { RiHome5Line, RiHome5Fill } from 'react-icons/ri';
import {
    IoPeopleOutline,
    IoPeopleSharp,
    IoCompassOutline,
    IoCompassSharp,
    IoVideocamOutline,
    IoVideocam,
} from 'react-icons/io5';

function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title={'For you'}
                    to={config.routes.home}
                    icon={('RiHome5Line', 'RiHome5Fill')}
                />
                <MenuItem
                    title={'Following'}
                    to={config.routes.following}
                    icon={<IoPeopleOutline />}
                />
                <MenuItem
                    title={'Khám phá'}
                    to={config.routes.discovered}
                    icon={<IoCompassOutline />}
                />
                <MenuItem
                    title={'LIVE'}
                    to={config.routes.live}
                    icon={<IoVideocamOutline />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
