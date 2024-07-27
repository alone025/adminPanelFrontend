import { Link, useLocation } from "react-router-dom";
import Wrapper from "../../layout/wrapper";
import { useEffect, useState } from "react";

const Footer = () => {
  const pathname = useLocation().pathname;

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET"
    };

    fetch("https://e334514e7b754cb9.mokky.dev/footer", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response[3]), setData(response), setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pt-top">
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div
          className={`footer ${
            pathname == "/blog"
              ? "pt-[200px] lg:pt-[280px]"
              : "mt-[200px] lg:mt-[280px] pt-[80px] sm:pt-[120px]"
          }  bg-[#1D1534] pb-[60px] px-5 2xl:px-0`}
        >
          <Wrapper>
            <div className="top-side flex flex-raw gap-3 flex-wrap justify-between">
              <div className="left-tap max-w-[455px]">
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal">
                  {data[0]?.descriptionLeft ||
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                </p>
                <p className="statue-owner text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal mt-[25px]">
                  @{data[0]?.authorThis || "Lorem"}
                </p>
              </div>
              <div className="middle-tap">
                <p className="new-div mt-[15px] sm:mt-0 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] text-[#FBF9ED] font-inter font-medium">
                  Navigation
                </p>
                <ul className="mt-4 flex flex-col gap-1">
                  <Link to="/">
                    <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal">
                      Home page
                    </li>
                  </Link>
                  <Link to="/aboutcompany">
                    <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal">
                      About company
                    </li>
                  </Link>

                  <Link to="/ourteam">
                    <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal">
                      Our team
                    </li>
                  </Link>
                  <Link to="/blog">
                    <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal">
                      Blog
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="end-tap">
                <p className="text-[15px] mt-[15px] sm:mt-0 sm:text-[17px] md:text-[19px] lg:text-[21px] text-[#FBF9ED] font-inter font-medium">
                  Contact us
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal max-w-[360px] mt-7">
                  {data[1]?.contactText ||
                    ` Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.`}
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal mt-9">
                  {data[1]?.contactPhone || `+908 89097 890`}
                </p>
              </div>
            </div>
            <div className="bottom-sde mt-[80px] flex flex-row gap-3 flex-wrap items-center justify-between">
              <div className="logo-tab">
                {data[2]?.type == "text" ? (
                  <h2 className="text-[25px] md:text-[29px] font-popins font-bold text-left text-[#FBF9ED]">
                    {data[2]?.text_data || "LOGO"}
                  </h2>
                ) : (
                  <img src={data[0]?.image} alt="logo" className="w-[80px]" />
                )}
              </div>
              <div className="social-links">
                <ul className="flex flex-row flex-wrap gap-[10px]">
                  {data[3].social_links.map((c, ind) => (
                    <>
                      {c.isTrue ? (
                        <Link key={ind} to={c.description}>
                          <li className="p-[15px] rounded-[24px] border-white border-opacity-5 border cursor-pointer">
                            <img src={`/${c.name}.svg`} alt="" />
                          </li>
                        </Link>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </ul>
              </div>
              <div className="license">
                <p className="text-[13px] mt-2 sm:mt-0 sm:text-[14px] text-[#FFF] font-azosansLight font-normal">
                  © 2021 Tokners. All rights reserved.
                </p>
              </div>
            </div>
          </Wrapper>
        </div>
      )}
    </div>
  );
};

export default Footer;
