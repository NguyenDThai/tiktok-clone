import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a61e571bff9a70aca5cd3c57554a95fd.jpeg?lk3s=a5d48078&nonce=34168&refresh_token=b12f6bc42f96ab4f9724eebd5ea1d37f&x-expires=1735887600&x-signature=hBkgyOahffZ1i7cckohSlwVun2Y%3D&shp=a5d48078&shcp=81f88b70"
                    alt="avatar"
                />
                <Button className={cx('btn')} primary small>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <span className={cx('nickname')}>
                    <strong>trinhxipo88</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </span>
                <p className={cx('fullname')}>Trình xìpo</p>
            </div>
            <div className={cx('analyst')}>
                <span className={cx('followers')}>
                    <strong style={{ marginRight: 2 }}>6.7M</strong>
                    <p>Followers</p>
                </span>
                <span className={cx('likes')}>
                    <strong style={{ marginRight: 2 }}>429.9M</strong>
                    <p>Likes</p>
                </span>
            </div>
        </div>
    );
}

export default AccountPreview;
