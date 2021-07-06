
import styles from "./MenuMobile.module.css"
import Link from "next/link";


function MenuMobile() {
  return (
    <div className={styles.menu_mobile}>
      <Link activeClassName="selectNav-menu" href="/admin">
        <span className={styles.menu_card_item_menu}>
          <i className="fas fa-home fa-2x " style={{ marginTop: "1.2rem" }}></i>
          <h2 style={{ marginTop: "1.2rem" }}>داشبورد</h2>
        </span>
      </Link>
      <Link
        className="menu-card-item-menu"
        activeClassName="selectNav-menu"
        href="/buy"
      >
        <span className={styles.menu_card_item_menu}>
          <i
            className="fas fa-shopping-basket fa-2x"
            style={{ marginTop: "1.2rem" }}
          ></i>
          <h2 style={{ marginTop: "1.2rem" }}>سفارشات</h2>
        </span>
      </Link>
      <Link
        className="menu-card-item-menu"
        activeClassName="selectNav-menu"
        href="/product"
      >
        <span className={styles.menu_card_item_menu}>
          <span
            className="fas fa-box-open fa-2x"
            style={{ marginTop: "1.2rem" }}
          ></span>
          <h2 style={{ marginTop: "1.2rem" }}>محصولات</h2>
        </span>
      </Link>
      <Link
        className="menu-card-item-menu "
        activeClassName="selectNav-menu"
        href="/customer"
      >
        <span className={styles.menu_card_item_menu}>
          <span
            className="fas fa-dollar-sign fa-2x"
            style={{ marginTop: "1.2rem" }}
          ></span>
          <h2 style={{ marginTop: "1.2rem" }}>مالی</h2>
        </span>
      </Link>
      <Link
        className="menu-card-item-menu"
        activeClassName="selectNav-menu"
        href="/Comments"
      >
        <span className={styles.menu_card_item_menu}>
          <i
            className="fab fa-windows fa-2x"
            style={{ marginTop: "1.2rem" }}
          ></i>
          <h2 style={{ marginTop: "1.2rem" }}>حجره</h2>
        </span>
      </Link>
    </div>
  );
}

export default MenuMobile;
