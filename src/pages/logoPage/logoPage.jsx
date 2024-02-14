import React from 'react';
import ss111 from '../../assets/ss111.png';
import { useTranslation } from 'react-i18next';

function LogoPage() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="flex-col items-center justify-center hidden lg:flex w-full max-w-[70%] select-none">
                    <div className="flex flex-col items-center fixed ">
                        <div className="mb-1.5 text-center">
                            <img
                                alt=""
                                height="100"
                                className="object-contain max-w-full h-[100px]"
                                src={ss111}
                            />
                        </div>
                        <div className="w-full h-px bg-[rgb(150,142,14)] max-w-[400px] my-2.5"></div>
                        <p className="font-semibold text-22 leading-30 text-[rgb(18,183,185)]">{t("Menu Super")}</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default LogoPage;
