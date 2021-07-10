// next libraries
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// components
import useViewport from '../../../../component/viewPort';
import MobileHeader from '../../../../component/mobileHeader';
import CustomBadge from '../../../../component/Custom/customBadge';
import CustomLabel from '../../../../component/Custom/customLabel';
import GerenalModal from '../../../../component/generalModal';
import Sort from '../../../../component/product/sort';
import Edit from '../../../../component/product/edit';
import MyLayout from "../../../../component/layout/Layout";

// images
import edit from '../../../../public/assets/image/productHeaderLink/edit.svg';
import filter from '../../../../public/assets/image/productHeaderLink/filter.svg';
import sort from '../../../../public/assets/image/productHeaderLink/sort.svg';
// styles
import styles from "../../../../styles/product/card.module.scss";

const Card = () => {

    let [showModalSort, setShowModalSort] = useState(false);
    let [showModalEdit, setShowModalEdit] = useState(false);
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
                        <Link href={`/fp/product/list/filter`}>
                            <a className={styles.product_header_link}>
                                <Image src={filter} alt="filter" className={styles.product_header_link_icon} />
                                فیلتر
                            </a>
                        </Link>
                        <span className={styles.product_header_link} onClick={() => {
                            setShowModalSort(showModal => !showModal);
                        }}>
                            <Image src={sort} alt="sort" className={styles.product_header_link_icon} />
                            ترتیب نمایش</span>
                        <span className={styles.product_header_link} onClick={() => {
                            setShowModalEdit(showModal => !showModal);
                        }}>
                            <Image src={edit} alt="edit" className={styles.product_header_link_icon} />
                            ویرایش گروهی</span>
                    </div>
                    {data.map((value, index) => {
                        return (
                            <div key={index} className={`${styles.product_card}`}>
                                <div className={styles.first_row}>
                                    <div className={styles.product_name_wrapper}>
                                        <div className={`${styles.image_product}`}></div>
                                        <h6 className={`${styles.name_product}`}>{value.name}</h6>
                                    </div>
                                    <i className={`fas fa-ellipsis-v ${styles.icon_more}`}></i>
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
                    <div style={{ marginTop: '200px' }}></div>

                </div>
            }
            <GerenalModal show={showModalSort} onClose={() => {
                setShowModalSort(showModal => !showModal);
            }} content={<Sort />} />
            <GerenalModal show={showModalEdit} onClose={() => {
                setShowModalEdit(showModal => !showModal);
            }} content={<Edit />} />
        </>
    );
};
export default Card;
Card.Layout = MyLayout;

