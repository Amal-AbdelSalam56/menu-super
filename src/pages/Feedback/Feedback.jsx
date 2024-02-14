import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function FeedbackForm() {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const handleClick = () => {
        navigate('/');
    };


    return (
        <div className="h-full relative">
            <div style={{ left: "1rem", top: "1rem", zIndex: 999, boxShadow: "rgba(0, 0, 0, 0.15) 2px 2px 5px" }}
                className="position-sticky absolute h-12 w-12 rounded-[8px] bg-white text-[rgb(18,183,185)] cursor-pointer"
                onClick={handleClick} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="text-[rgb(18,183,185)] m-auto h-[2.5rem] w-[2rem]"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                </svg>
            </div>

            <div className="flex flex-col text-center items-center ">
                <div className="flex">
                    <p className="text-[20px] font-[500] text-[rgb(18,183,185)] ">{t("Please Give Us 60 Seconds!")}</p>
                </div>
            </div>

            <div className="flex flex-col text-center items-center ">
                <div className="">
                    <p className="text-[18px] font-[400] mt-4 text-[rgb(18,183,185)] ">{t("Is this your first at our resturant?")}</p>
                    <div className="text-center items-center">
                        <div className="flex justify-around text-center">
                            <button className="rounded-full w-24 py-[10px] px-auto bg-white text-[rgb(150,142,14)] font-[400] border-1 border-[rgb(150,142,14)]">{t("Yes")}</button>
                            <button className="rounded-full w-24 py-[10px] px-auto  bg-white text-[rgb(150,142,14)] font-[400] border-1 border-[rgb(150,142,14)]">{t("No")}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center items-center ">
                <div className="">
                    <p className="text-[18px] font-[400] mt-4 text-[rgb(18,183,185)] ">{t("What is your overall satisfaction with our resturant?")}</p>
                    <div className="text-center items-center">
                        <div className="flex justify-around text-center">
                            <div className="box__Box-sc-1ou4qyg-0 ddwQvw">
                                <div className="flex myIqA">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className="box__Box-sc-1ou4qyg-0 ratingQuestion___StyledBox-vpn05h-0 bXvYIT hover:text-[rgb(150,142,14)] hover:opacity-100 opacity-20" style={{ color: 'primary', margin: "0 10px" }}>
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.186.902l1.978 6.365c.167.537.646.901 1.187.901h6.4c1.208 0 1.71 1.617.732 2.36l-5.177 3.935c-.437.332-.62.92-.453 1.458l1.977 6.365c.374 1.202-.941 2.202-1.92 1.459l-5.177-3.934a1.203 1.203 0 00-1.466 0l-5.178 3.934c-.978.743-2.293-.257-1.92-1.459l1.978-6.365a1.338 1.338 0 00-.453-1.458L.516 10.528c-.977-.743-.474-2.36.734-2.36h6.4c.54 0 1.019-.364 1.186-.901L10.814.902a1.231 1.231 0 012.372 0" fill="null"></path>
                                            </svg>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center items-center ">
                <div className="">
                    <p className="text-[18px] font-[400] mt-4 text-[rgb(18,183,185)] ">{t("How would you rate the hygiene?")}</p>
                    <div className="text-center items-center">
                        <div className="flex justify-around text-center">
                            <div className="box__Box-sc-1ou4qyg-0 ddwQvw">
                                <div className="flex myIqA">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className="box__Box-sc-1ou4qyg-0 ratingQuestion___StyledBox-vpn05h-0 bXvYIT hover:text-[rgb(150,142,14)] hover:opacity-100 opacity-20" style={{ color: 'primary', margin: "0 10px" }}>
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.186.902l1.978 6.365c.167.537.646.901 1.187.901h6.4c1.208 0 1.71 1.617.732 2.36l-5.177 3.935c-.437.332-.62.92-.453 1.458l1.977 6.365c.374 1.202-.941 2.202-1.92 1.459l-5.177-3.934a1.203 1.203 0 00-1.466 0l-5.178 3.934c-.978.743-2.293-.257-1.92-1.459l1.978-6.365a1.338 1.338 0 00-.453-1.458L.516 10.528c-.977-.743-.474-2.36.734-2.36h6.4c.54 0 1.019-.364 1.186-.901L10.814.902a1.231 1.231 0 012.372 0" fill="null"></path>
                                            </svg>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center items-center ">
                <div className="">
                    <p className="text-[18px] font-[400] mt-4 text-[rgb(18,183,185)] ">{t("How would you rate the taste of our food?")}</p>
                    <div className="text-center items-center">
                        <div className="flex justify-around text-center">
                            <div className="box__Box-sc-1ou4qyg-0 ddwQvw">
                                <div className="flex myIqA">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className="box__Box-sc-1ou4qyg-0 ratingQuestion___StyledBox-vpn05h-0 bXvYIT hover:text-[rgb(150,142,14)] hover:opacity-100 opacity-20" style={{ color: 'primary', margin: "0 10px" }}>
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.186.902l1.978 6.365c.167.537.646.901 1.187.901h6.4c1.208 0 1.71 1.617.732 2.36l-5.177 3.935c-.437.332-.62.92-.453 1.458l1.977 6.365c.374 1.202-.941 2.202-1.92 1.459l-5.177-3.934a1.203 1.203 0 00-1.466 0l-5.178 3.934c-.978.743-2.293-.257-1.92-1.459l1.978-6.365a1.338 1.338 0 00-.453-1.458L.516 10.528c-.977-.743-.474-2.36.734-2.36h6.4c.54 0 1.019-.364 1.186-.901L10.814.902a1.231 1.231 0 012.372 0" fill="null"></path>
                                            </svg>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center items-center ">
                <div className="">
                    <p className="text-[18px] font-[400] mt-4 text-[rgb(18,183,185)] ">{t("Would you come back to eat with us again?")}</p>
                    <div className="text-center items-center">
                        <div className="flex justify-around text-center">
                            <button className="rounded-full w-24 py-[10px] px-auto bg-white text-[rgb(150,142,14)] font-[400] border-1 border-[rgb(150,142,14)]">{t("Yes")}</button>
                            <button className="rounded-full w-24 py-[10px] px-auto  bg-white text-[rgb(150,142,14)] font-[400] border-1 border-[rgb(150,142,14)]">{t("No")}</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* the inputs */}

            <div className="flex flex-col text-center items-center ">
                <div className="w-full">
                    <p className="text-[18px] font-[400] mt-4 text-[rgb(18,183,185)] ">{t("Is there anything else you want to tell us?")}</p>
                    <div className="text-center items-center">
                        <div className="flex justify-around text-center">
                            <input
                                type="text"
                                className="w-[80%] border-2 border-[rgb(18,183,185)] rounded-full px-3 py-[.8rem] focus:outline-none focus:border-[rgb(18,183,185)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center items-center">
                <div className="w-full">
                    <p className="text-[18px] font-[400] mt-4 text-[rgb(18,183,185)]">{t("Name")}*</p>
                    <div className="text-center items-center">
                        <div className="flex justify-around text-center">
                            <input
                                type="text"
                                className="w-[80%] border-2 border-[rgb(18,183,185)] rounded-full px-3 py-[.8rem] focus:outline-none focus:border-[rgb(18,183,185)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center items-center ">
                <div className="w-full">
                    <p className="text-[18px] font-[400] mt-4 text-[rgb(18,183,185)] ">{t("Email Address")}*</p>
                    <div className="text-center items-center">
                        <div className="flex justify-around text-center">
                            <input
                                type="text"
                                className="w-[80%] border-2 border-[rgb(18,183,185)] rounded-full px-3 py-[.8rem] focus:outline-none focus:border-[rgb(18,183,185)]"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* submit */}
            <div id="footer" className="bg-white z-[3] sticky bottom-0 inset-x-0 shadow-[inset_0px_1px_0px] shadow-black/10 p-[1rem]">
                <button
                    type="button"
                    className="flex flex-row items-center justify-center gap-3 font-semibold sticky bottom-0 transition-all bg-[rgb(150,142,14)] opacity-40 text-white py-3 px-6 h-[3.5rem] text-[1rem] rounded-md w-full cursor-not-allowed "
                    disabled   >
                    {t("Submit")}
                </button>
            </div>

        </div>
    );
}

export default FeedbackForm;
