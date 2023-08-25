import { useState, useEffect, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsFillXCircleFill } from 'react-icons/bs';
import { BiLoaderAlt } from 'react-icons/bi';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import images from '../../../../assets/images';

import NoLoginHeader from './NoLoginHeader';
import LoginHeader from './LoginHeader';
import PopperSearch from '../../../PopperSearch';

export default function Navbar() {
    const cx = classNames.bind(styles);

    let numberNotificationInbox = 29;
    let userLoggin = true;

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearch, setShowSearch] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                searchValue
            )}&type=less`
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    }, [searchValue]);

    function handleClearSearch() {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

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
                        <PopperSearch
                            searchResult={searchResult}
                            showSearch={showSearch}
                            setShowSearch={setShowSearch}
                        >
                            <form className={cx('form')}>
                                <input
                                    value={searchValue}
                                    ref={inputRef}
                                    spellCheck={false}
                                    placeholder="Tìm kiếm"
                                    onChange={(e) => {
                                        setSearchValue(e.target.value);
                                    }}
                                    onFocus={() => setShowSearch(true)}
                                    className={cx('input-search')}
                                />

                                {!loading && searchValue && (
                                    <button
                                        className={cx('x-circle')}
                                        onClick={handleClearSearch}
                                    >
                                        <BsFillXCircleFill />
                                    </button>
                                )}

                                {loading && (
                                    <div className={cx('loader-alt')}>
                                        <BiLoaderAlt
                                            className={cx('loader-alt-icon')}
                                        />
                                    </div>
                                )}

                                <span className="span-spliter"></span>

                                <button className={cx('search-btn')}>
                                    <FiSearch />
                                </button>
                            </form>
                        </PopperSearch>
                    </div>
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
