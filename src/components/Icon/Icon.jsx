import { FaRegCircle, FaPen, FaRegTimesCircle } from 'react-icons/fa';

const Icon = ({ name }) => {   
  if (name === 'circle') {
    return <FaRegCircle />;
  } else if (name === 'cross') {
    return <FaRegTimesCircle />;
  } else {
    return <FaPen />;
  }
};

export default Icon;
