// node libraries
import  { useState } from 'react';
// component
import Modal from './modal';
import ShowImages from './showImages';
// methods
import { largeImage } from './methods/largeImage';
/**
 * component of pruduct images
 * @param {string} productTitle => product Title
 * @param {string} originalPhoto => original photo
 * @param {array} thumbnailImages => thumbnail images is array of objects
 */
const ProductImages = ({
    productTitle,
    originalPhoto,
    thumbnailImages
}) => {

    let [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="col-12 firstImage">
                <img id="orginal" src={`https://nakhll.com${originalPhoto}`} alt={`${productTitle}`} />
            </div>
            <div className="col-12 imagesAlbum">
                <img id="orginal" src={`https://nakhll.com${originalPhoto}`} alt={`${productTitle}`}
                    onClick={(event) => {
                        largeImage(event.target.id);
                    }}
                />
                {thumbnailImages && thumbnailImages.length > 0 && thumbnailImages.map((value, index) => {
                    return (
                        <img key={index} id={`image${index}`} src={`https://nakhll.com${value.image}`} alt={`${productTitle}`}
                            onClick={(event) => {
                                largeImage(event.target.id);
                            }}
                        />
                    );
                })}
                <button type="button" onClick={() => {
                    setShowModal(showModal => !showModal);
                }}>...</button>
            </div>
            <Modal show={showModal} onClose={() => {
                setShowModal(showModal => !showModal);
            }} content={<ShowImages productTitle={productTitle} originalPhoto={originalPhoto} thumbnailImages={thumbnailImages} />} />
        </>
    );
}
// export
export { ProductImages };