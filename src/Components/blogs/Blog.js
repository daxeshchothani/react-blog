import React from "react";
import BgImag from "../ImgComponent/BgImg"
import image_src from "../../static/images/image.png";

const Blog = () => {
  return (
    <>
      <div>
        <h1>blog title</h1>
      </div>
      <div>
        <h3>blog discription</h3>
      </div>
      <div>
        <p>blog Post By</p>
      </div>
      <div>
        <BgImag img={image_src} />

      </div>
    </>
  );
};

export default Blog;
