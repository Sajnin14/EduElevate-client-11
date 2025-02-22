import { easeOut } from "motion";
import { motion } from "motion/react"
const Banner = () => {

    return (
            <div className="hero">
                <div className="hero-content gap-4 flex-col lg:flex-row-reverse">
                    <div className="flex-1 pb-4">
                        <motion.img
                            animate={{ y: [0, 70, 0] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            src='https://i.ibb.co.com/PQNVbK3/smiling-young-woman-with-book-near-bookshelf.jpg' className="w-72 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-[#1E4463]" />

                        <motion.img
                            animate={{ x: [100, 170, 100] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            src='https://i.ibb.co.com/XpQYgVc/creative-composition-with-books-flower.jpg' className="w-72 h-48 object-cover rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-[#1E4463]" />
                    </div>
                    <div className="flex-1 p-5">
                        <h1 className="text-6xl mb-2 font-bold text-[#1E4463]">EduElevate</h1>
                        <motion.p
                            animate={{ x: 80, color: ['#4B6982', '#4B6982', '#F97316', '#F97316'] }}
                            transition={{ duration: 2, delay: 2, ease: easeOut, repeat: Infinity }}
                            className="text-xl font-semibold">
                            Elevate your knowledge with courses and books
                        </motion.p>

                        <p className="mt-5 py-4 text-[#788FA1]">
                            A platform that enhances learning through resources like books and tools, designed to inspire and empower learners of all ages.
                        </p>
                        <p className="text-[#788FA1]">Explore a world of knowledge with our collection of new and pre-loved books, spanning various genres and subjects. Enhance your learning journey with our expertly designed courses, tailored to help you gain valuable skills and achieve your goals. Your one-stop destination for books and education!</p>
                        
                    </div>
                </div>
            </div>
    );
};

export default Banner;