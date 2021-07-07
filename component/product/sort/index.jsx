// node
import Image from 'next/image';
// scss
import styles from '../../../styles/product/sortModal.module.scss';
// image
import tik from '../../../public/assets/image/productHeaderLink/tik.svg';
const Sort = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>ترتیب نمایش</header>
            <div className={styles.sort_item_wrapper}>
                <span className={styles.sort_item}>
                    <Image src={tik} alt="tik" />
                    چینش محصولات حجره
                </span>
                <span className={styles.sort_item}>
                    <Image src={tik} alt="tik" />
                    تعداد فروش
                </span>
                <span className={styles.sort_item}>
                    <Image src={tik} alt="tik" />
                    نام محصول
                </span>
            </div>
        </div>
    );
}
// export
export default Sort;