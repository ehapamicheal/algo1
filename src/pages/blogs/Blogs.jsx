import React from 'react'
import "./blogs.css";
import Banners from "../../components/Banners";
import Blog from "../../images/blog.png";
// import Blog1 from "../../images/blog 1.png";
// import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { blogsData } from '../../data';
import TalkProject from '../../components/TalkProject';



const Blogs = () => {
    // const {name} = useParams()
    // const location = useLocation()
    // const isNestedRoute = location.pathname.includes(name);

    // const {name} = useParams()
    const location = useLocation()
    const isNestedRoute = location.pathname.includes("blockchain" | "crypto" | "binance" | "chain" | "stock" | "trust");

  return (
    <>
    
       {!isNestedRoute? (<>
          <Banners
            backgroundImage={Blog}
            text="Blogs"
          />

            <div className="blogs_overall_container">
                <div className="blogs_main">
                        <h2><span>Our</span> Latest Blogs</h2>
                        <div className="blogs_content_box">
                            {blogsData.map(blogs =>(
                                <div className="blogs_box" key={blogs.id}>
                                    <img className="icon" src={blogs.image} alt={blogs.title} />
                                    <div className="blog_text_box">
                                        <h4 className="title">{blogs.title}</h4>
                                        <p className="subtitle">{blogs.subtitle}</p>

                                        <div className="time_box">
                                            <span className="time">{blogs.date}</span>
                                            <Link to={`/blogs/${blogs.link}`} className="btn">Read More</Link>                               
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="show_more_box">
                            <button type="button" className="show_btn">Show More</button>
                        </div>
                </div>
            </div>

           <TalkProject/> 

       
        </>):( <Outlet/>)} 

    </>   


    
  )
}

export default Blogs;

