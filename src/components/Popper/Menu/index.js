import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, item = [] }) {
    const renderMenu = () => {
        return item.map((item) => <MenuItem key={item} data={item} />);
    };
    return (
        <Tippy
            delay={[0, 700]}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} {...attrs} tabIndex="-1">
                    <PopperWrapper className={cx('menu-popper')}>{renderMenu()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
