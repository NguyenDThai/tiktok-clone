import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/367032458_311220494748976_1189553963787691400_n.jpg?stp=cp0_dst-jpg_s60x60_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=EUk1e6UAoRsQ7kNvgHyBNjF&_nc_zt=24&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AiLlR7k5MSGgcdakf1HSigP&oh=00_AYBEnrhsSVBN4HBxiPxFDFhDErBK4nJLYGfk0ESnbXzSUA&oe=6771781C"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItems;
