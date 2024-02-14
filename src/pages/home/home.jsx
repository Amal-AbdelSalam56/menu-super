import logo from '../../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
import instance from '../../axios config/axios';
import { useTranslation } from 'react-i18next';


function FoodCard({ id, name, price, image, click }) {
    const path = image.path;
    const url = 'https://menu.alwafierp.com/';

    return (
        <button
            id={`food-card-link-${id}`} onClick={click}
            className="w-full relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px]
         bg-white shadow-[0_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0_2px_4px_-2px_rgba(0,_0,_0,_0.05)]"
        >
            <div id={`food-card-${id}`} className="my-3 ltr:ml-4 mr-3 rtl:ml-3 rtl:mr-4">
                <div className="w-full flex gap-2">
                    <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2 pl-6">
                        <span className="text-[rgb(18,183,185)] text-[1.1rem] font-semibold mb-2 line-clamp-2 text-start" style={{ wordBreak: 'break-word' }}>
                            {name}
                        </span>
                        <span className="items-center text-[rgb(150,142,14)] text-[1.1rem] font-semibold line-clamp-2 break-words text-start">
                            <span>{price}</span>
                            <span className="ms-1" style={{ wordBreak: 'break-word' }}> </span>
                        </span>
                    </div>
                    <div className="flex flex-col flex-grow-0 items-end gap-2 p-0 justify-between">
                        <div className="relative z-[1]">
                            <img
                                alt=""
                                width="100"
                                height="100"
                                className="object-cover max-h-[92px] max-w-[101px] h-[92px] w-[101px] rounded"
                                src={url + 'storage/' + path}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
}


function Home() {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const url = 'https://menu.alwafierp.com/';
    const [categories, setcategories] = useState([]);
    const [Sliders, setSliders] = useState([]);
    // const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const ref = useRef(null);
    // const [currentIndex, setCurrentIndex] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const [showLanguageOffcanvas, setShowLanguageOffcanvas] = useState(false);
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');
    const handleClick = (indx) => {
        console.log(indx);
        // setCurrentIndex(indx)
    };

    const scrollToTop = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const toggleLanguageOffcanvas = () => {
        setShowLanguageOffcanvas(!showLanguageOffcanvas);
    };
    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('lang', lang);
        window.location.reload(); // Refresh the page
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsVisible(currentScrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        instance.get("categories",
            {
                headers: {
                    Accept: "application/json",
                    // AcceptLanguage: "en",
                },
            }).then((res) => {

                console.log(res.data);
                console.log(res.data[0].products);
                setcategories(res.data)
                // setproducts(res.data)

            }).catch((err) => {
                console.log(err);
            })


        instance.get("slider",
            {
                headers: {
                    Accept: "application/json",
                    // AcceptLanguage: "en",
                },
            }).then((res) => {

                console.log(res.data);
                setSliders(res.data)

            }).catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        localStorage.setItem('lang', language);
    }, [language]);

    return (
        <>

            {/* header */}
            <Navbar expand="false" ref={ref} className="mynav" style={{ color: "white", padding: "4px" }}>
                <Container fluid>
                    <Navbar.Brand href="#" style={{ color: "white", margin: "auto", fontSize: "17px", fontWeight: "600" }}>{t("Menu Super")}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand" aria-expanded="false"
                        style={{ backgroundImage: 'none', border: 'none', color: 'white', height: "auto", fontSize: "2.5rem", padding: "0 10px" }}>
                        <IoReorderThreeOutline style={{ color: "white", borderColor: 'none' }} />
                    </Navbar.Toggle>

                    {/* Offcanvas of lang */}
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand"
                        aria-labelledby="offcanvasNavbarLabel-expand"
                        // placement="start"
                        placement={language === 'ar' ? 'end' : 'start'}
                        dir={language == 'ar' ? 'rtl' : 'ltr'}
                        show={showLanguageOffcanvas}
                        onHide={() => setShowLanguageOffcanvas(false)}
                    >
                        <Offcanvas.Header closeButton />
                        <Offcanvas.Body>
                            {/* Language selection options */}
                            <h4 style={{ color: "rgb(150,142,14)", marginBottom: "20px" }}>{t("Select Language:")}</h4>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#" onClick={() => changeLanguage('en')}>
                                    <h4 style={{ color: language === 'en' ? 'rgb(150,142,14)' : 'rgb(18,183,185)', marginBottom: "20px" }}>English</h4>
                                </Nav.Link>
                                <Nav.Link href="#" onClick={() => changeLanguage('ar')}>
                                    <h4 style={{ color: language === 'ar' ? 'rgb(150,142,14)' : 'rgb(18,183,185)', marginBottom: "20px" }}>العربية</h4>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    {/* Offcanvas of nav */}
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand "
                        aria-labelledby="offcanvasNavbarLabel-expand "
                        // placement="end"
                        placement={language === 'ar' ? 'end' : 'start'}

                        dir={language == 'ar' ? 'rtl' : 'ltr'}
                    >
                        <Offcanvas.Header closeButton>
                            {/* <IoClose aria-label="Close" style={{ fontSize: "2rem", color: "rgb(150,142,14)" }} /> */}
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1"><img className='logoimg' src={logo} alt='logo img' /></Nav.Link>
                                <Nav.Link onClick={toggleLanguageOffcanvas}><h4 style={{ color: "rgb(18,183,185)", marginBottom: "20px" }}>{t("Language")} ({language})</h4></Nav.Link>
                                <Nav.Link href="/Feedback"><h4 style={{ color: "rgb(18,183,185)", marginBottom: "20px" }}> {t("Give Feedback!")}</h4></Nav.Link>
                                <Nav.Link href="#action2"><h4 style={{ color: "rgb(18,183,185)", marginBottom: "20px" }}> {t("Call Resturant")} </h4></Nav.Link>

                            </Nav>
                            <hr />

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '14rem' }}>
                                <div style={{ padding: '10px', border: '1px solid rgb(150,142,14)', borderRadius: '50px', margin: "10px" }}>
                                    <FaFacebook style={{ color: "rgb(150,142,14)", width: "30px", height: "30px" }} />
                                </div>
                                <div style={{ padding: '10px', border: '1px solid rgb(150,142,14)', borderRadius: '50px', margin: "10px" }}>
                                    <IoLogoInstagram style={{ color: "rgb(150,142,14)", width: "30px", height: "30px" }} />
                                </div>
                            </div>



                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            {/* homeTitle  */}
            <div className="text-center items-center mt-8 ">
                <h1 className="text-[1.3rem] font-semibold text-[rgb(18,183,185)] mb-14">{t("Menu")}</h1>

                <div className="flex items-center " >
                    <div className="flex items-center border-1 border-[#d3d2d2] h-[2.5rem] w-full max-w-[90%] mx-4 rounded-full"
                        onClick={() => navigate('/SearchMenu')}>
                        <IoSearch className="h-6 w-6 mx-[1rem] cursor-pointer text-[rgb(18,183,185)]" />
                        <input
                            type="text"
                            placeholder={t("Search")}
                            className=" w-full h-full outline-none text-black text-[1.1rem] rounded-full"
                        />
                    </div>
                    <TbAdjustmentsHorizontal onClick={handleShow} className="h-10 w-10 mr-4 cursor-pointer text-[rgb(18,183,185)]" />
                </div>
            </div >
            {/* Filter Modal */}
            <Modal show={show} onHide={handleClose} className='modal rounded-[30px] '>
                <Modal.Header className='text-[rgb(18,183,185)] text-center border-none' closeButton>
                    <Modal.Title className='text-[rgb(18,183,185)] ml-[13rem]' >{t("Filter")}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center '>
                    <h6 className='text-[rgb(18,183,185)] my-[9.5rem]'>{t("No Filter Option")}</h6>

                    <div id="footer" className="bg-white z-[3] sticky bottom-0 inset-x-0 shadow-[inset_0px_1px_0px] shadow-black/10 pt-4">
                        <button
                            type="button"
                            className="flex flex-row items-center justify-center gap-3 font-semibold transition-all bg-[rgb(150,142,14)] opacity-40 text-white py-3 px-6 h-[3.6rem] text-[1.2rem] rounded-md w-full cursor-not-allowed "
                            disabled >
                            {t("Filter")}
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* SliderComp */}
            <div className="relative w-full">
                <div id="section-carousel-images" className="flex items-stretch gap-2 p-[1rem] z-50 overflow-x-scroll overflow-y-hidden">
                    {/* Render images */}
                    {categories.map((categorie, index) => (
                        <button key={index} type="button" className=" flex flex-col gap-y-1 w-[104px] items-center justify-between rounded-md animate-fadeInDown">
                            <img alt={categorie.name} src={url + 'storage/' + categorie.image}
                                className={` ${index == 0 ? 'border-2 border-[rgb(150,142,14)]' : 'border border-input'} object-cover w-[104px] h-[104px] max-w-[104px] max-h-[104px] rounded-md `} />
                            <span className={`line-clamp-1 text-[1rem] break-all font-semibold ${index == 0 ? 'text-[rgb(150,142,14)]' : 'text-[rgb(18,183,185)]'} `} >{categorie.name}</span>
                        </button>
                    ))}
                    {/* End render images */}
                    <div className="w-20 from-background_color/10 to-transparent absolute hidden lg:flex justify-start items-center inset-y-0 start-0 ps-2 transition-all duration-500 bg-gradient-to-r" style={{ height: '118px' }}>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="text-highlight_color h-6 w-6 transition-[transform]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-20 from-background_color/10 to-transparent absolute hidden lg:flex justify-end items-center inset-y-0 end-0 pe-2 transition-all duration-500 bg-gradient-to-l" style={{ height: '118px' }}>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="text-highlight_color h-6 w-6 transition-[transform]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* nav foodCategories */}
                <div id="section-carousel-buttons" className={`w-full flex items-stretch fixed top-0 myshadow gap-2 px-[1rem] bg-white z-50 p-[1rem] overflow-x-auto overflow-y-hidden animate-slideInDown lg:!fixed lg:!w-[30%]  ${isVisible ? '' : 'hidden'} `}>
                    {/* {renderButtons()} */}
                    {categories.map((categorie, index) => (
                        <button
                            key={index}
                            type="button"
                            className="text-sm text-[rgb(150,142,14)] whitespace-nowrap font-semibold px-4 py-2 rounded border-1 border-[rgb(150,142,14)] transition-[background] duration-500"
                            onClick={() => handleClick(categorie.id)}>
                            {categorie.name}
                        </button>

                        // currentIndex
                        // <button key={image.id} type="button" id={image.id} onClick={() => handleClick(image.id)}
                        //     className="text-sm text-white whitespace-nowrap font-semibold px-4 py-2 rounded border border-solid border-highlight_color-900 transition-[background] duration-500 bg-[rgb(150,142,14)] !text-background_color">
                        //     {image.alt}
                        // </button>
                    ))}
                </div>

            </div>

            {/* FoodMenu  */}
            {categories.map((categorie, index) => (
                <div key={index} className="w-full flex flex-col min-h-screen bg-[rgb(247,247,247)] pb-20">
                    <div id="container-654a797ae30ff10014c0f47e" className="w-full flex flex-col items-center justify-start gap-1 p-[1rem]">
                        <img
                            alt=""
                            width="full"
                            height="full"
                            className="w-full rounded-md mb-3 aspect-[3/1] object-cover"
                            src={url + 'storage/' + categorie.image}
                            loading="lazy"
                        />
                        <span className="text-[1.4rem] font-semibold text-center text-[rgb(18,183,185)]">{categorie.name}</span>
                        <span className="text-center text-[rgb(18,183,185)]"></span>
                        <div className="flex flex-col items-center justify-center gap-4 pt-3 w-full">
                            {categorie.products.map(product => (
                                // <FoodCard key={product.id} {...product}
                                //     onClick={() => navigate(`/ProductSingle/${product.id}`)}
                                // // click={() => navigate("/ProductSingle")} 
                                // />
                                <button key={product.id}
                                    id={`food-card-link-${product.id}`} onClick={() => navigate(`/ProductSingle/${product.id}`)}
                                    className="w-full relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px]
                                 bg-white shadow-[0_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0_2px_4px_-2px_rgba(0,_0,_0,_0.05)]">
                                    <div id={`food-card-${product.id}`} className="my-3 ltr:ml-4 mr-3 rtl:ml-3 rtl:mr-4">
                                        <div className="w-full flex gap-2">
                                            <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2 pl-6">
                                                <span className="text-[rgb(18,183,185)] text-[1.1rem] font-semibold mb-2 line-clamp-2 text-start" style={{ wordBreak: 'break-word' }}>
                                                    {product.name}
                                                </span>
                                                <span className="items-center text-[rgb(150,142,14)] text-[1.1rem] font-semibold line-clamp-2 break-words text-start">
                                                    <span>{product.price}</span>
                                                    <span className="ms-1" style={{ wordBreak: 'break-word' }}> </span>
                                                </span>
                                            </div>
                                            <div className="flex flex-col flex-grow-0 items-end gap-2 p-0 justify-between">
                                                <div className="relative z-[1]">
                                                    <img
                                                        alt=""
                                                        width="100"
                                                        height="100"
                                                        className="object-cover max-h-[92px] max-w-[101px] h-[92px] w-[101px] rounded"
                                                        src={url + 'storage/' + product.image[0].path}
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>



                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {/* FixedButton */}
            <div className={`fixed bottom-10 w-12 h-12 z-30 right-3 lg:right-[calc(70vw+12px)] animate-fadeInRight ${isVisible ? '' : 'hidden'} `}>
                <button type="button"
                    onClick={scrollToTop}
                    className="flex flex-row items-center justify-center gap-3 font-semibold active:scale-[.99] transition-all !rounded-full !h-9 !w-9 !p-2 bg-[rgb(150,142,14)]-700 text-white text-[1.5rem] !bg-[rgb(150,142,14)] myshadow ">
                    <AiOutlineArrowUp />
                </button>
            </div>

            {/* Footer  */}
            <div className="w-full flex bg-[rgb(247,247,247)] items-center justify-center py-6">
                <div>
                    <div className="w-full flex space-x-1.5">
                        <span className="text-sm font-semibold text-gray-400 order-first">{t("Powered by")}</span>
                        <span className="text-sm font-semibold text-black order-first">{t("Tek Part")}</span>
                    </div>
                </div>
            </div>





        </>
    );
}

export default Home;