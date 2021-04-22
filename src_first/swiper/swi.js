// import React from 'react';
// import Swiper core and required modules

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import "../index.css"
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "../swiper/swi.css"
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
     
    <Swiper  
      spaceBetween={50}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
            <SwiperSlide>
                <div className="swicc">
                <img src={require('../img/banner1.png').default} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swicc">
                <img  src={require('../img/banner2.png').default} />
                </div>
            </SwiperSlide>
        
    </Swiper>
    
  );
};
// import Swiper from 'swiper'

// import '../css/swiper.css'
// import '../css/index.css'

// class Swi extends React.Component{
//     render(){
//         return<div className='swiper-container'>
//         <div className='swiper-wrapper'>
//             <div className='swiper-slide'><img src={require('../img/banner1.png').default} /></div>
//             <div className='swiper-slide'><img src={require('../img/banner2.png').default} /></div>
//         </div>
//         {/* 分页器结构 */}
//         <div className='swiper-pagination'></div>
//     </div>
//     }
//     componentDidMount(){
//         // 实例化
//         new Swiper('.swiper-container',{
//                 autoplay: true,
//                 loop: true,
//                 pagination:{
//                     el:'.swiper-pagination'
//                 }
//         })
//     }
// }

// export default Swi;