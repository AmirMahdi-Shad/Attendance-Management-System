import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Student = ({ name, base, unit, id }) => {
  return (
    <div className='card w-72 h-80 bg-secondary shadow-xl m-10'>
      <figure className='px-4 pt-4'>
        <div className='avatar placeholder'>
          <div className='bg-neutral-focus text-neutral-content rounded-full w-24'>
            <FaUserAlt size={40} />
          </div>
        </div>
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>
          {unit}
          {base}
        </p>
        <div className='card-actions'>
          <Link to={`/graph?id=${id}`}>
            <button className='btn btn-neutral'>نمایش نمودار</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Student;
