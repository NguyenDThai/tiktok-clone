import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);
function SuggestedAccount() {
    return (
        <Tippy
            interactive
            placement="bottom-start"
            delay={[700, 0]}
            render={(attrs) => (
                <div className={'wrapper'} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <AccountPreview />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('account-item')}>
                <img
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a61e571bff9a70aca5cd3c57554a95fd.jpeg?lk3s=a5d48078&nonce=34168&refresh_token=b12f6bc42f96ab4f9724eebd5ea1d37f&x-expires=1735887600&x-signature=hBkgyOahffZ1i7cckohSlwVun2Y%3D&shp=a5d48078&shcp=81f88b70"
                    alt="avatar"
                    className={cx('avatar')}
                />
                <div className={cx('body')}>
                    <span>
                        <div className={cx('nickname')}>
                            <strong>trinhxipo88</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </div>
                        <p className={cx('fullname')}>Trình xìpo</p>
                    </span>
                </div>
            </div>
        </Tippy>
    );
}

export default SuggestedAccount;
