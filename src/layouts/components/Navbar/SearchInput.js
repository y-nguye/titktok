import { useState, useEffect, useRef } from 'react';

import { FiSearch } from 'react-icons/fi';
import { BsFillXCircleFill } from 'react-icons/bs';
import { BiLoaderAlt } from 'react-icons/bi';

import classNames from 'classnames/bind';
import styles from './SearchInput.module.scss';
import PopperSearch from '../../../components/PopperSearch';
import { useDebounce } from '../../../hooks';

import * as searchService from '../../../services/searchService';

export default function SearchInput() {
    const cx = classNames.bind(styles);

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearch, setShowSearch] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        (async () => {
            setLoading(true);
            const result = await searchService.search(debounce);
            setSearchResult(result);
            setLoading(false);
        })();
    }, [debounce]);

    function handleChange(e) {
        const searchValue = e.target.value;
        if (searchValue.charAt(0) !== ' ') setSearchValue(searchValue);
    }

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
                        onChange={(e) => handleChange(e)}
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
