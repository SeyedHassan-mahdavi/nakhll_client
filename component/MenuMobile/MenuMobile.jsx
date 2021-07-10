
import styles from "./MenuMobile.module.css"
import Link from "next/link";


function MenuMobile() {
  return (
    <div className={styles.menu_mobile}>
      <Link className="menu-card-item-menu" href="/admin" passHref={true}>
        <span className={styles.menu_card_item_menu} onClick={(e) => {
          e.currentTarget.classList.add("active");
        }}>
          <i className="fas fa-home fa-2x "></i>
          <h2>داشبورد</h2>
        </span>
      </Link>
      <Link
        className="menu-card-item-menu"
        href="/buy"
        passHref={true}
      >
        <span className={styles.menu_card_item_menu} onClick={(e) => {
          e.currentTarget.classList.add("active");
        }}>
          <i className="fas fa-shopping-basket fa-2x"></i>
          <h2>سفارشات</h2>
        </span>
      </Link>
      <Link
        className="menu-card-item-menu"
        href="/fp/product"
        passHref={true}
      >
        <span className={styles.menu_card_item_menu} onClick={(e) => {
          e.currentTarget.classList.add("active");
        }}>
          <span className="fas fa-box-open fa-2x"></span>
          <h2>محصولات</h2>
        </span>
      </Link>
      <Link
        className="menu-card-item-menu"
        href="/customer"
        passHref={true}
      >
        <span className={styles.menu_card_item_menu} onClick={(e) => {
          e.currentTarget.classList.add("active");
        }}>
          <span className="fas fa-dollar-sign fa-2x"></span>
          <h2>مالی</h2>
        </span>
      </Link>
      <Link
        className="menu-card-item-menu"
        href="/Comments"
        passHref={true}
      >
        <span className={styles.menu_card_item_menu} onClick={(e) => {
          e.currentTarget.classList.add("active");
        }}>
          <i className="fab fa-windows fa-2x"></i>
          <h2>حجره</h2>
        </span>
      </Link>
    </div>
  );
}

export default MenuMobile;
