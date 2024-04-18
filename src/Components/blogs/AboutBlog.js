import React from "react";
import Abimg from "../ImgComponent/Abimg";
// import image_src from "../../static/images/imgabout.png";


const AboutBlog = ({image_src}) => {
  return (
    <>
      <div>
        <Abimg  src={image_src} alt='About Blog'/>
      </div>
    </>
  );
};

export default AboutBlog;
