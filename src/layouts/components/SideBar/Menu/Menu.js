import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import config from '~/config';

import MenuItem from './MenuItem';
import {
    HomeIcon,
    FollowingIcon,
    LiveIcon,
    HomeIconActive,
    FollowingIconActive,
    LiveIconActive,
} from '~/components/Icons';

const cx = classNames.bind(styles);
function Menu() {
    return (
        <div className={cx('wrapper')}>
            <MenuItem icon={<HomeIcon />} iconActive={<HomeIconActive />} to={config.routes.home} title="For Your" />
            <MenuItem
                icon={<FollowingIcon />}
                iconActive={<FollowingIconActive />}
                to={config.routes.following}
                title="Following"
            />
            <MenuItem icon={<LiveIcon />} iconActive={<LiveIconActive />} to={config.routes.live} title="Live" />
        </div>
    );
}

export default Menu;
