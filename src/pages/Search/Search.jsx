import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function FoodCard() {
  return (
    <button
      id={`food-card-link`}
      className="w-full relative group flex flex-col items-stretch justify-start rounded-md overflow-hidden transition-all active:translate-y-[4px] hocus:translate-y-[4px]
       bg-white shadow-[0_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0_2px_4px_-2px_rgba(0,_0,_0,_0.05)]"
    >
      <div id={`food-card`} className="my-[0.75rem] ltr:ml-4 mr-3 rtl:ml-3 rtl:mr-4">
        <div className="w-full flex gap-2">
          <div className="w-full flex flex-col grow justify-start items-stretch gap-2 pt-2 pl-6">
            <span className="text-[rgb(18,183,185)] text-[1.3rem] font-semibold mb-2 line-clamp-2 text-start" style={{ wordBreak: 'break-word' }}>
              Fattoush
            </span>
            <span className="items-center text-[rgb(150,142,14)] text-[1.3rem] font-semibold line-clamp-2 break-words text-start">
              <span>IQD6,000</span>
              <span className="ms-1" style={{ wordBreak: 'break-word' }}> </span>
            </span>
          </div>
          <div className="flex flex-col flex-grow-0 items-end gap-2 p-0 justify-between">
            <div className="relative z-[1]">
              <img
                alt=""
                width="100"
                height="100"
                className="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded"
                src="https://media.finedinemenu.com/filters:strip_exif()/filters:format(webp)/809x0/ulgF6hQ05/545cee3e-3d4e-4169-91d9-8e01fc444243.jpeg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function SearchMenu() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    navigate('/');
  };

  // Event handler to update the search value
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
  };
  return (
    <div className="w-full flex flex-col min-h-screen animate-fadeInDown">
      <div id="header" className="bg-white w-full h-[71px] flex items-center justify-between gap-x-4 p-[1rem] z-50 sticky top-0 inset-x-0 shadow-[0_3px_3px_0_rgba(0,_0,_0,_0.1)]">
        <button type="button" className="cursor-pointer" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="text-[rgb(18,183,185)] h-[1.5rem] w-[1.5rem]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-[rgb(18,183,185)] h-6 w-6"
              // height="1em"
              // width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
          </div>
          <input
            id="search-bar"
            type="search"
            name="name"
            placeholder={t("Search")}
            autoComplete="off"
            className="w-full h-10 py-[1rem] pl-12 pr-10 rounded-[26px] border-3 focus:outline-none focus:border-[rgb(150,142,14)] border-[rgb(241,241,241)] bg-white text-[rgb(18,183,185)] text-[1rem] placeholder:placeholder-[rgb(18,183,185)] "
            value={searchValue}
            onChange={handleInputChange}
          />
          {searchValue && (
            <div aria-hidden="true" className="absolute inset-y-0 flex items-center cursor-pointer right-0 pr-3"
              onClick={clearInput} >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-[rgb(18,183,185)] h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          )}
        </div>

      </div>

      <div id="body" className="bg-[rgb(247,247,247)] flex flex-col justify-between flex-grow px-4 pt-[18px] pb-24">
        {/* results */}
        <div className="w-full flex flex-col gap-y-[22px] animate-fadeInDown">
          <p className="text-[rgb(18,183,185)] text-[1.2rem] mb-0 font-semibold">7 {t("results for")}'x'</p>
          {/*  Food Cards */}

          <div className="w-full flex flex-col gap-y-2 animate-fadeInLeft">
            <span className="text-start text-[1rem] font-[400] text-[rgb(18,183,185)] opacity-[0.5]">Menu &gt; Salad</span>
            <FoodCard />
          </div>

          <div className="w-full flex flex-col gap-y-2 animate-fadeInLeft">
            <span className="text-start text-[1rem] font-semibold text-[rgb(18,183,185)] opacity-[0.5]">Menu &gt; Salad</span>
            <FoodCard />
          </div>
        </div>



      </div>

      <div id="footer" className="bg-white z-[3] sticky bottom-0 inset-x-0 shadow-[inset_0px_1px_0px] shadow-black/10 p-[1rem]">
        <button
          type="button"
          className={`flex flex-row items-center justify-center gap-3 font-semibold transition-all bg-[rgb(150,142,14)] ${searchValue ? 'opacity-100' : 'opacity-40'} text-white py-3 px-6 h-[3rem] text-[1rem] rounded-md w-full cursor-not-allowed `}
          disabled={!searchValue} >
          {t("Search")}
        </button>
      </div>

      <div className="w-full lg:max-w-[calc(30%-1px)] flex fixed bottom-0 z-[-1] min-h-[100px] p-[1rem] bg-white"></div>
    </div>
  );
}

export default SearchMenu;



