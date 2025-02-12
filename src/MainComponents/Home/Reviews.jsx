import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Reviews = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        axios.get('/review.json')
        .then(res => setReview(res.data))
    },[])

    return (
        <div id="review" className="mx-auto">
            <h3 className="font-bold text-3xl my-2 text-center text-[#1E4463]">Reviews</h3>
            <p className='italic text-center'>Helping You Decide, One Review at a Time.</p>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-12">
                {
                    review.map(rev => <SwiperSlide key={rev.id}>
                       <div className='text-center w-full'>
                         <img src={rev.image} className='w-24 mx-auto rounded-full'/>
                         <p className='font-bold my-3 uppercase'>{rev.username}</p>
                         <p>--{rev.review}--</p>
                       </div>
                    </SwiperSlide>)
                }
                
            </Swiper>

        </div>
    );
};

export default Reviews;