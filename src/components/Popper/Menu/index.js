import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, hideOnClick = false, item = [] }) {
    const [history, setHistory] = useState([{ data: item }]);
    const current = history[history.length - 1];
    const renderMenu = () => {
        return current.data.map((item) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            interactive
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} {...attrs} tabIndex="-1">
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => setHistory((prev) => prev.slice(0, history.length - 1))}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderMenu()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHidden={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
