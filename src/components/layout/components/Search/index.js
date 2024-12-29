import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadLessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';

import { SearchIcon } from '~/components/Icons';
import AccountItems from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const textRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    }, []);

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
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
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
                {searchValue && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;
