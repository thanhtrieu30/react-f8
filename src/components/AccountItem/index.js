import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from '../AccountItem/AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/02f377b1c4197e3f95035b9995eb7930.jpeg?x-expires=1657699200&x-signature=FKVgS%2FfZ9VHRIy7w4P1VMCdkyIc%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Beryniceeeee</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <span className={cx('username')}>yrmum</span>
            </div>
        </div>
    );
}

export default AccountItem;
