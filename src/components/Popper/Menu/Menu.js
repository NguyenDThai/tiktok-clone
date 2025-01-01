import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

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

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} {...attrs} tabIndex="-1">
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderMenu()}</div>
            </PopperWrapper>
        </div>
    );

    const handleFirstToPageMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            interactive
            hideOnClick={hideOnClick}
            render={renderResult}
            onHidden={handleFirstToPageMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    item: PropTypes.array,
};

export default Menu;
