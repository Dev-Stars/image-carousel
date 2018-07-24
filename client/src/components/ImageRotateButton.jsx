import React from 'react';

const ImageRotateButton = ({ direction, disable, handleRotate }) => (
  <div
    className={handleRotate ? 'image-carousel-show' : 'image-carousel-disable'}
    id={direction > 0 ? 'image-carousel-next' : 'image-carousel-prev'}
    onClick={disable ? () => {} : () => { handleRotate(direction); }}
    onKeyUp={() => {}} // this and the lower 2 lines are solely for eslint
    role="button"
    tabIndex="-1"
  >
    {direction > 0 ? '❯' : '❮'}
  </div>
);

export default ImageRotateButton;
