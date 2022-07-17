import { useState } from "react";
import { ClipLoader } from "react-spinners";
import useLocalStorage from "use-local-storage";

const override = {
    position: "fixed",
    top: '40%',
    right: 'calc((40/100) * 100vw)',
    bottom: '0',
    marginLeft: '50rem',
    display: 'block',
    transfromOrigin: 'center'
}

const Loading = () => {
    const [theme] = useLocalStorage('theme');
    const template = <ClipLoader color={theme === 'dark' ? 'white': 'black'} loading={true} cssOverride={override} size={100}/>
    const [msg, setMsg] = useState(template);
    setTimeout(() => {
        setMsg(<div className="mx-6"><p className="dark:text-white text-2xl font-nm">Sorry, An error Occured :(</p><p className="font-sm dark:text-white mt-2 text-xl">Connection was lost</p><small className="font-bold dark:text-white text-detail mt-2">request timed out</small></div>);
    }, 12000);
    return msg;
}

export default Loading;