import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FiSearch } from 'react-icons/fi';
import { BsFillXCircleFill } from 'react-icons/bs';
import { BiLoaderAlt } from 'react-icons/bi';

import styles from './SearchInput.module.scss';
import PopperSearch from '../../../PopperSearch';
import { useDebounce } from '../../../../hooks';

export default function SearchInput() {
    const cx = classNames.bind(styles);

    const [searchResult, setSearchResult] = useState([]);
    const [showSearch, setShowSearch] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                debounce
            )}&type=less`
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounce]);

    function handleClearSearch() {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    return (
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
                            <BiLoaderAlt className={cx('loader-alt-icon')} />
                        </div>
                    )}

                    <span className="span-spliter"></span>

                    <button className={cx('search-btn')}>
                        <FiSearch />
                    </button>
                </form>
            </PopperSearch>
        </div>
    );
}
