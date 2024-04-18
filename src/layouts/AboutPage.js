import React from "react";
import Navigation from "../Components/navigation/Navigation";
import AboutBlog from "../Components/blogs/AboutBlog";
// import Abimg from "../ImgComponent/Abimg"
// import image_src from "../../static/images/imgabout.png";

const AboutPage = () => {
  return (
    <>
      <div>
        <h1>We uploads Blog posts to keep you updated.</h1>
      </div>
      <div>
        <p>
          We also tags a Post Admin's profile/page(as per their requirements) so
          that anyone who likes post, can visit their profile/page. To visit;
          click on Post Admin's name which is located after tagline
        </p>
      </div>
      <div>
        <p>
          We are all very different. We were born in different cities, at
          different times, we love different music, food, movies. But we have
          something that unites us all. It's this app. We are its heart. We are
          not just a team, we are a family.
        </p>
      </div>
      <AboutBlog />
      <h2>
        If you have any articles, posts or anything that you think this should
        be reach to the people; then you can contact us by filling details in
        contact page or you can also contact us by social media platforms.
      </h2>
    </>
  );
};

export default AboutPage;
