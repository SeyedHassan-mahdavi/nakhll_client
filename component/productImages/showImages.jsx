// node libraries
import React from 'react';

const ShowImages = ({
    productTitle,
    originalPhoto,
    thumbnailImages
}) => {
    function changeImage(id) {

        let image = document.querySelector(`#${id}`);
        let orginal = document.querySelector("#modalOrginal");

        orginal.src = image.src;

    }
    return (
        <div className="productImageInModal">
            <h3 className="p-3 mb-3">{productTitle && productTitle}</h3>
            <div className="row">
                <div className="col-8 orginalImage">
                    {originalPhoto && <img id="modalOrginal" src={`https://nakhll.com${originalPhoto}`} alt="originalPhoto" />}
                </div>
                <div className="col-4 imagesWrapper">
                    {originalPhoto && <img id="modalOrginal" src={`https://nakhll.com${originalPhoto}`} alt="originalPhoto"
                        onClick={(event) => {
                            changeImage(event.target.id);
                        }}
                    />}
                    {thumbnailImages && thumbnailImages.length > 0 && thumbnailImages.map((value, index) => {
                        return (
                            <img id={`image${index}`} key={index} src={`https://nakhll.com${value.image}`} alt={`${productTitle}`}
                                onClick={(event) => {
                                    changeImage(event.target.id);
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
// export
export default ShowImages;