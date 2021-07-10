// node libraries
import Image from 'next/image';
import { useRouter } from 'next/router';
// image
import search from '../../public/assets/image/headerIcon/search.svg';
import close from '../../public/assets/image/headerIcon/close.svg';
import bascket from '../../public/assets/image/headerIcon/bascket.svg';
import back from '../../public/assets/image/headerIcon/back.svg';
// scss
import styles from '../../styles/components/mobileHeader/mobileHeader.module.scss';
/**
 * component mobile header
 * @param {string} title => title of header
 * @param {string} type => back | search | close | bascket
 */
function MobileHeader({
    title,
    type
}) {
    const router = useRouter();
    return (
        <div className={type === "back" ? `${styles.wrapper_header_back}` : `${styles.wrapper_header}`}
            onClick={() => router.back()}
        >
            {type === "back" && <Image src={back} alt="header icon" />}
            <span className={styles.header_span}>{title}</span>
            {type === "search" && <Image src={search} alt="header icon" />}
            {type === "close" && <Image src={close} alt="header icon" />}
            {type === "bascket" && <Image src={bascket} alt="header icon" />}
        </div>
    );
}
// export
export default MobileHeader;