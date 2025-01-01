import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

import Menu from './Menu';
import AccountList from './AccountList';

const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            {/* Menu Dieu huong */}
            <Menu />
            {/* Cac tai khoang da follow */}
            <AccountList title="Suggested Accounts" />
            <AccountList title="Follow Accounts" />
        </aside>
    );
}

export default SideBar;
