import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../axios config/axios';
import { useParams } from 'react-router-dom';



function ProductSingle() {
    const navigate = useNavigate();
    const [products, setproducts] = useState([]);
    const url = 'https://menu.alwafierp.com/';
    const handleClick = () => {
        navigate('/');
    };
    const params = useParams();

    useEffect(() => {
        // This function runs when the component mounts
        instance.get(`product/${params}`, {
            headers: {
                Accept: "application/json",
                // AcceptLanguage: "en",
            },
        })
            .then((res) => {
                // Handle successful response
                console.log(res.data);
                console.log(res.data[0].products);
                setproducts(res.data);
            })
            .catch((err) => {
                // Handle errors
                console.log(err);
            });
    }, []);

    return (

        <>

            <div className="relative w-full h-full min-h-full lg:h-max lg:min-h-max flex flex-col bg-secondary animate-fadeInDown" style={{ display: 'flex' }}>
                <div style={{ left: "1rem", top: "1rem", zIndex: 999, boxShadow: "rgba(0, 0, 0, 0.15) 2px 2px 5px" }}
                    className="position-sticky absolute h-12 w-12 rounded-full bg-white text-[rgb(18,183,185)]"
                    onClick={handleClick} >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                        className="h-[1.6rem] w-12 mt-[.8rem] cursor-pointer"
                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                    </svg>
                </div>
                <div id="image-bottom-gradient" className="fixed w-full lg:max-w-[calc(30%-1px)] z-[2] h-36 bg-gradient-to-b from-transparent to-black/10"
                    style={{ top: 'calc(573px - 11rem)' }}></div>
                <img
                    alt=""
                    srcSet="https://media.finedinemenu.com/filters:strip_exif()/filters:format(webp)/774x0/ulgF6hQ05/6eeeb6de-8b14-431d-950b-51d61edf0c14.jpeg 1x"
                    src="https://media.finedinemenu.com/filters:strip_exif()/filters:format(webp)/774x0/ulgF6hQ05/6eeeb6de-8b14-431d-950b-51d61edf0c14.jpeg"
                    className="object-cover fixed w-full aspect-[10/7] xs:max-w-full lg:max-w-[calc(30%-1px)]"

                    style={{ transform: 'none', filter: 'brightness(1)' }}

                // when "mynextdiv" is up
                // style={{ transform: 'scale(1.12871) translateZ(0px)', filter: 'brightness(0.37449)' }}

                />

                <div className="mynextdiv flex flex-col gap-y-4 relative bg-white z-20 w-full h-full min-h-[85vh] max-h-[85vh] rounded-t-3xl pt-6 pb-32"
                    style={{ marginTop: "calc(486px)" }}>
                    <div className="flex flex-col gap-y-8 w-full px-4">
                        <div className="flex flex-col gap-y-3">
                            <div className="flex flex-col gap-y-2">
                                <div className="flex items-start gap-x-1">
                                    <p className="text-xl text-[rgb(18,183,185)]  font-[500] text-justify">Bestoon Samad Salad</p>
                                </div>
                                <div className="flex">
                                    <span className="flex text-[rgb(150,142,14)] text-base font-[500]">IQD8,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default ProductSingle;
