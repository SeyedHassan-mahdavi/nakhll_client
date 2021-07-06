// next libraries
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image'
// components
import useViewport from '../../../../component/viewPort';
import MobileHeader from '../../../../component/mobileHeader';
import CustomBadge from '../../../../component/Custom/customBadge';
import CustomLabel from '../../../../component/Custom/customLabel';
import MyLayout from "../../../../component/layout/Layout";

// images
import edit from '../../../../public/assets/image/productHeaderLink/edit.svg';
import filter from '../../../../public/assets/image/productHeaderLink/filter.svg';
import sort from '../../../../public/assets/image/productHeaderLink/sort.svg';
// styles
import styles from "../../../../styles/product/card.module.scss";

const Card = () => {

    const { width } = useViewport();
    const breakpoint = 620;

    const data = [
        {
            name: "گل محمدی",
            shens: "9985",
            mojadi: "20",
            price: "200000",
            eye: "1000",
            basket: "58",
            star: "4.2",
        },
        {
            name: "گیلاس",
            shens: "458",
            mojadi: "11",
            price: "50000",
            eye: "28",
            basket: "45",
            star: "3",
        },
        {
            name: "پارچه",
            shens: "846",
            mojadi: "84",
            price: "50000",
            eye: "8555",
            basket: "11",
            star: "4.2",
        },
        {
            name: "لباس",
            shens: "44",
            mojadi: "20",
            price: "200000",
            eye: "1000",
            basket: "58",
            star: "4.2",
        },
        {
            name: "گل محمدی",
            shens: "15",
            mojadi: "20",
            price: "200000",
            eye: "1000",
            basket: "58",
            star: "4.2",
        },
        {
            name: "جوراب",
            shens: "9985",
            mojadi: "20",
            price: "200000",
            eye: "1000",
            basket: "58",
            star: "4.2",
        },
        {
            name: "milad",
            shens: "9985",
            mojadi: "20",
            price: "200000",
            eye: "1000",
            basket: "58",
            star: "4.2",
        },
        {
            name: "milad",
            shens: "9985",
            mojadi: "20",
            price: "200000",
            eye: "1000",
            basket: "58",
            star: "4.2",
        },
    ];
    return (
        <>
            {width < breakpoint &&
                <div className={styles.wrapper}>
                    <Head>
                        <title>My page title</title>
                        <link
                            rel="stylesheet"
                            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                        />
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                        />
                    </Head>
                    <MobileHeader title="لیست محصولات" type="search" />
                    <div className={styles.product_header}>
                        <Image src={filter} alt="filter" />
                        <Link href={`/fp/product/list/filter`}>
                            <a className={styles.product_header_link}>فیلتر</a>
                        </Link>
                        <Image src={sort} alt="sort" />
                        <Link href={`/`}>
                            <a className={styles.product_header_link}>ترتیب نمایش</a>
                        </Link>
                        <Image src={edit} alt="edit" />
                        <Link href={`/`}>
                            <a className={styles.product_header_link}>ویرایش گروهی</a>
                        </Link>
                    </div>
                    {data.map((value, index) => {
                        return (
                            <div key={index} className={`${styles.product_card}`}>
                                <div className={styles.first_row}>
                                    <div className={styles.product_name}>
                                        <div className={`${styles.image_product}`}></div>
                                        <h6>{value.name}</h6>
                                    </div>
                                    <i className="fas fa-ellipsis-v"></i>
                                </div>
                                <div className={styles.second_row}>
                                    <CustomLabel value={value.mojadi} label="موجودی" />
                                    <CustomLabel value={`${value.price}تومان`} label="قیمت" />
                                </div>

                                <div className={styles.third_row}>
                                    <div>
                                        <span className={styles.icons}>
                                            {/* <i class="far fa-eye"></i> */}
                                            5200
                                        </span>
                                        <span className={styles.icons}>
                                            <i className="fas fa-shopping-basket"></i>
                                            50
                                        </span>
                                        <span className={styles.icons}>
                                            <i className="far fa-star"></i>
                                            {value.star}(22 نظر)
                                        </span>
                                    </div>
                                    <CustomBadge
                                        title="فعال"
                                        color="#089319"
                                        backgroundColor="rgba(8, 147, 25, 0.15)"
                                        customBadgeStyle={{
                                            borderRadius: "3px",
                                            padding: "2px 6px"
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })}

                </div>
            }
        </>
    );
};
export default Card;
Card.Layout = MyLayout;

