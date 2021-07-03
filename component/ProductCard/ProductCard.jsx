import { Link } from "react-router-dom";
import { numberSeparateUtils } from "./../../utils/numberSeparateUtils//numberSeparateUtils";

const ProductCard = ({
  sm = 6,
  md = 5,
  lg = 4,
  xl = 3,
  col,
  linkType,
  _blank = false,
  product,
}) => {
  let cardBadge = (
    <>
      <div
        className="_product_card_badge"
        type="button"
        style={{ top: ".75rem" }}
      >
        <i className="far fa-bookmark" />
      </div>
      <div class="_product_card_badge" type="button" style={{ top: "3.3rem" }}>
        <i class="fas fa-share-alt"></i>
      </div>
    </>
  );

  let cardImg = (
    <img
      src={product.imageUrl}
      className={`card-img-top _product_card_rounded ${
        product.unavailable && "_unavailable_product"
      }`}
      alt={product.title}
    />
  );

  return (
    <div
      className={`${
        col
          ? `col-${col}`
          : `col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl}`
      } mb-3`}
    >
      <div className="card _product_card _product_card_rounded p-2">
        {cardBadge}

        {linkType === "anchor" ? (
          <a href={product.url} target={_blank && "_blank"}>
            {cardImg}
          </a>
        ) : (
          <Link to={product.url} target={_blank && "_blank"}>
            {cardImg}
          </Link>
        )}

        <div
          className={`card-body mt-2 p-1 ${
            product.unavailable && "_unavailable_product"
          }`}
        >
          <div className=" mb-3">
            {linkType === "anchor" ? (
              <a
                href={product.url}
                target={_blank && "_blank"}
                className="_product_card_title text-truncate"
              >
                {product.title}
              </a>
            ) : (
              <Link
                to={product.url}
                target={_blank && "_blank"}
                className="_product_card_title text-truncate"
              >
                {product.title}
              </Link>
            )}
          </div>
          <div className="_product_card_city text-truncate mb-3">
            <span className="_product_card_subtitle">{product.city}</span>
            <i className="fa fa-angle-left px-1"></i>
            {linkType === "anchor" ? (
              <a
                title={product.chamberTitle}
                href={product.chamberUrl}
                target={_blank && "_blank"}
                className="_product_card_subtitle"
              >
                {product.chamberTitle}
              </a>
            ) : (
              <Link
                title={product.chamberTitle}
                to={product.chamberUrl}
                target={_blank && "_blank"}
                className="_product_card_subtitle"
              >
                {product.chamberTitle}
              </Link>
            )}
          </div>
          <div className="mb-2 _product_card_rate">
            <div>
              {product.rate && (
                <>
                  <i className="fa fa-star _product_card_star_icon"></i>
                  <span className="font-weight-bold ml-1">{product.rate}</span>
                  {product.commentCount && (
                    <span className="text-secondary">
                      ({product.commentCount} نظر)
                    </span>
                  )}
                </>
              )}
            </div>
            {product.discount && (
              <div className="_product_card_discount">{product.discount}%</div>
            )}
          </div>
          <div className="_product_card_price mb-2">
            <div>
              <button className="btn _product_card_add_to_cart">
                <i className="fa fa-plus" />
              </button>
            </div>
            <div className="_product_card_price_number">
              {product.unavailable ? (
                <span>ناموجود</span>
              ) : (
                <>
                  <span className="_product_card_orginal_number">
                    {numberSeparateUtils(product.price)}
                  </span>
                  {product.discountNumber && (
                    <span className="_product_card_discount_number">
                      {numberSeparateUtils(product.discountNumber)}
                    </span>
                  )}
                  <span style={{ fontSize: ".75rem" }}>تومان</span>
                </>
              )}
            </div>
          </div>
          <div className="_product_card_progressbar">
            {product.sales && (
              <>
                <div className="_sales_progressbar">
                  <div
                    className="_sales_progressbar_passed"
                    style={{ width: `${product.sales}%` }}
                  />
                </div>
                <div className="mt-1">
                  <p className="_sales_progressbar_text">
                    %{product.sales} فروش رفته
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
