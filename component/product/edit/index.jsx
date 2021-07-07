// node
import Image from 'next/image';
import Link from 'next/link';
// scss
import styles from '../../../styles/product/editModal.module.scss';
// image
import tik from '../../../public/assets/image/productHeaderLink/tik.svg';

const Edit = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>ویرایش گروهی</header>
            <div className={styles.sort_item_wrapper}>
                <span className={styles.sort_item}>
                    <Image src={tik} alt="tik" />
                    چیدمان محصولات
                </span>
                <Image src={tik} alt="tik" />
                <Link href={`/fp/product/update/price`}>
                    <a className={styles.product_header_link}>قیمت و تخفیف</a>
                </Link>
                <span className={styles.sort_item}>
                    <Image src={tik} alt="tik" />
                    موجودی
                </span>
                <span className={styles.sort_item}>
                    <Image src={tik} alt="tik" />
                    زمان آماده سازی
                </span>
            </div>
        </div>
    );
}
// export
export default Edit;