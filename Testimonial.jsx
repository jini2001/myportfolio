import React from 'react'
import './Testimonial.css'



import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/ML.png'
import profilePic2 from '../../img/NPTEL.png'
import profilePic3 from '../../img/iitdelhi.png'
import profilePic4 from '../../img/SIH.png'
import profilePic5 from '../../img/nitk.png'
import {Pagination} from "swiper/modules"
import 'swiper/css/pagination';
import 'swiper/css'



const Testimonial = () => {
const clients =[

    {
        img:profilePic1,
    review:"Successfully completed a six weeks online certified training on Machine Learning from (May 2020 - June 2020).The training consisted of Introduction to Machine Learning, Python for Machine Learning, Machine Learning Life Cycle, Data Exploration and Manipulation, Build Your First Model, Evaluation Metrics, k-NN, Selecting the Right Model, Linear Regression, Logistic Regression, Decision Trees, Feature Engineering, Basics of Ensemble Models, Random Forest and Clustering modules. Iscored 100% in the final assessment and was a top performer in the training."},

    

    {
        img:profilePic5,
    review:"FitBand workshop attend in NITK Surathkal, In this workshop we made heartbeat sensor using Arduino. "    }


    ,{
        img:profilePic3,
    review:"Python Workshop attend in IIT Delhi (2019)"}
    ,{
        img:profilePic4,
    review:"Participate in SMART INDIA HACKATHON  . In this we represent paperless document system"    }

    ,{
        img:profilePic2,
    review:"Successfully completed DBMS course from NPTEL with 72%."    }


]

  return (
    <div  className='t-wrapper'  id="Testimonials">
    <div className='t-heading'>
        <span>View My All </span>
        <span> Certificate </span>
       

        <div className='blur t-blur1' style={{background:"purple"} }> </div>
        <div className='blur t-blur2' style={{background:"skyblue"}}></div>


        <a href='https://drive.google.com/file/d/1F-wcggDVUe1aazQOl5h3_bog5DZTSmg6/view?usp=sharing'>
        <button className="button i-button">click here</button>

        </a>

        </div>
       


    {/* slider*/}

    <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{clickable:true}}>

        {clients.map((client , index) =>{
            return(
                <SwiperSlide key={index}>
                <div className='testimonial'>
                    <img src={client.img} alt=''/>
                    <span>{client.review}</span>

                    </div>
                </SwiperSlide>
            );
            }
        )}
    </Swiper>



   

    </div>
  )
}

export default Testimonial
