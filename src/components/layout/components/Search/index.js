import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadLessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

import { SearchIcon } from '~/components/Icons';
import AccountItems from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiService/searchService';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const textRef = useRef();
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        textRef.current.focus();
    };
    return (
        <HeadLessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} {...attrs} tabIndex="-1">
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((result) => (
                            <AccountItems key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    placeholder="Search account and video"
                    spellCheck={false}
                    ref={textRef}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;
