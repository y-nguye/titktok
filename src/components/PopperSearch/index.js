import React from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import AccountItem from '../AccountItem';

export default function PopperSearch({
    searchResult,
    showSearch,
    setShowSearch,
    children,
}) {
    const cx = classNames.bind(styles);

    const handleShowSearch = () => setShowSearch(false);

    console.log(searchResult.length);

    return (
        <Tippy
            interactive
            visible={showSearch && searchResult.length > 0 ? true : false}
            onClickOutside={handleShowSearch}
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <h4>Accounts</h4>
                    {searchResult.map((data) => (
                        <AccountItem key={data.id} data={data} />
                    ))}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
