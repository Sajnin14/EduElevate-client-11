import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Services = ({ service }) => {

    const description = service.description;
    const maxLength = 100;
    const finalDes =
        description?.length > maxLength ? description.substring(0, 97) + '...' : description;
    return (
        <div key={service._id} className="rounded-lg bg-base-100 shadow-xl p-3">
            <figure>
                <img
                    src={service.cover} className="w-2/3 mx-auto  h-72  rounded-lg object-cover" />
            </figure>
            <div className="p-5 space-y-1 flex flex-col">
                <h2 className="card-title">{service.bookName}</h2>
                <p className="text-start">{finalDes}</p>
                 
                <p className='font-semibold'>Provider:</p>
                <div className='flex gap-2 items-center'>
                    <img src={service.providerPhoto} className='w-10 h-10 border border-[#1E4463] rounded-full' alt="" />
                    
                    <p> {service.providername}</p>
                    

                </div>

                    <p className='font-semibold text-lg'>Price: {service.price} tk</p>
                    <p>{service.area}</p>
                    <Link to={`/service/${service._id}`} className='mt-auto inline-block'> <button className='btn bg-[#1E4463] text-base-100'>View details</button></Link>
            
            </div>
            
        </div>
    );
};

Services.propTypes = {
    service: PropTypes.object
}
export default Services;