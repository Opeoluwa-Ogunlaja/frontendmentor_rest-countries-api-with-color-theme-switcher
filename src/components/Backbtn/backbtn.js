import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div onClick={() => {goBack();goBack()}} className="text-lg flex cursor-pointer gap-2 px-4 py-2 bg-white dark:bg-blue-dark dark:text-white drop-shadow-lg mb-4 w-32"><ArrowNarrowLeftIcon className="w-4"/> <span>Back</span></div>
    )
}

export default BackBtn;