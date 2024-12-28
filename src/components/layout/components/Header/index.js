import images from '~/assets/image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import AccountItems from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import Tippy from '@tippyjs/react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tieng Viet',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feeback and Help',
        to: '/feeback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboarch shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const MenuUser = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Trang ca nhan',
            to: '/@NDThai',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok" />
                <HeadLessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} {...attrs} tabIndex="-1">
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and video" spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadLessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <IoCloudUploadOutline />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu item={MenuUser ? MenuUser : MENU_ITEMS}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/367032458_311220494748976_1189553963787691400_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ujW5K2fWfYAQ7kNvgHsOIrD&_nc_zt=24&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AEZVvZjgLVzbLFPbQi8ehEz&oh=00_AYA5jmO-5I_M6EX4unXFCkz2Uk_qDQUI37zMSqx01PQgvQ&oe=6775345C"
                                alt="Nguyen van a"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
