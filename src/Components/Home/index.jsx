import Header from "../Header"

import AllProduct from "../AllProduct";

import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";

import { useEffect, useState } from "react";

import { BeatLoader } from "react-spinners"

import "./index.css"

const SelectOptions = [
    {
        id: "RECOMMENDED",
        text: "Recommended",
    },
    {
        id: "HIGH_TO_LOW",
        text: "Price: High to Low",
    },
    {
        id: "LOW_TO_HIGH",
        text: "Price: Low to High",
    },
];

const categoryItems = [
    {
        optionId: "electronics",
        text: "electronics"
    },
    {
        optionId: "jewelery",
        text: "jewelery"
    },
    {
        optionId: "men's clothing",
        text: "men's clothing"
    },
    {
        optionId: "women's clothing",
        text: "women's clothing"
    }
]

const categoryLocations = [
    {
        optionId: "Hyderabad",
        text: "Hyderabad"
    },
    {
        optionId: "Bengaluru",
        text: "Bengaluru"
    },
    {
        optionId: "Kerala",
        text: "Kerala"
    },
    {
        optionId: "chennai",
        text: "chennai"
    }
]

const ApiSections = {
    initital: "INITITAL",
    success: "SUCCESS",
    failure: "FAILURE",
    is_loading: "IS_LOADING"
}

function Home() {

    const [ProductData, setProductData] = useState([]);

    const [apiStatus, setApiStatus] = useState(ApiSections.initital)

    const [FilterShow, setFilterShow] = useState(true);

    const [optionValue, setOptionValue] = useState(SelectOptions[0].id);

    const [categoryList, setCategoryList] = useState([]);

    const [categoryShow, setCategoryShow] = useState(true);

    const [LocationShow, setLocationShow] = useState(true);

    // update Filter Sections
    const onclickFiterShowBtn = () => {
        setFilterShow(prevState => !prevState)
    }
    // update Filter Sections

    // Change Select Options
    const onchangeSelectOptions = (e) => {
        setOptionValue(e.target.value);
    }
    // Change Select Options

    // Change Radio Options
    const onchangecheckboxInput = (e) => {
        // let checkboxValue = e.target.value;
        // setCategoryList((prevState) => {
        //     if (e.target.checked) {
        //         return [...prevState, checkboxValue];
        //     } else {
        //         return prevState.filter((each) => each !== checkboxValue);
        //     }
        // })
        setCategoryList(e.target.value);
    }
    // Change Radio Options

    // Change Drop Down Options
    const onclickDropDownBtn = () => {
        setCategoryShow(prevState => !prevState)
    }
    // Change Drop Down Options

    // Failure Retry button in failureview section
    const onclickRetryBtn = () => {
        setCategoryList([]);
    }
    // Failure Retry button in failureview section

    // update Loaction Sections
    const onclickLocationBtn = () => {
        setLocationShow(prevState => !prevState)
    }
    // update Loaction Sections

    // useEffect Functions
    useEffect(() => {

        setApiStatus(ApiSections.is_loading);

        const getFetchApiProduct = async () => {
            const Api = categoryList.length > 0 ? `https://fakestoreapi.com/products/category/${categoryList}` : `https://fakestoreapi.com/products/`

            const response = await fetch(Api);
            if (response.ok === true) {
                const fetchData = await response.json();
                setApiStatus(ApiSections.success);
                setProductData(fetchData);
            } else {
                setApiStatus(ApiSections.failure);
            }
        }
        getFetchApiProduct();
    }, [categoryList])
    // useEffect Functions

    // Loader Spinner Functions sections
    const LoaderSpinnerSection = () => (
        <div className="LoaderSpinner_container">
            <BeatLoader color="#36d7b7" size={24} />
        </div>
    )
    // Loader Spinner Functions sections

    // All Products Functions sections
    const getAllProductDetails = () => (
        <ul className={FilterShow === true ? "All_Product_detalis_container" : "All_Product_detalis_containers"}>
            {ProductData.map((each) => (
                <AllProduct key={each.id} eachDetails={each} />
            ))}
        </ul>
    )
    // All Products Functions sections

    // Failure view Functions sections
    const FailureViewSection = () => (
        <div className="Failure_view_section_container">
            <img src="https://assets.ccbp.in/frontend/react-js/failure-img.png" alt="failureView" className="failuer_img" />
            <p className="failure_view_para">Please Try again</p>
            <button type="button" className="retry_btn" onClick={onclickRetryBtn}>retry</button>
        </div>
    )
    // Failure view Functions sections

    // Fillter view Functions sections
    const getFilterDetails = () => {
        return (
            <aside className="aside_filter_container">
                <h1 className="category_heading">category</h1>
                <section className="category_showing_or_not_container">
                    <div className="Category_Drop_down_section">
                        <h1 className="Drop_down_heading">Idea For</h1>
                        {categoryShow === true ?
                            <button type="button" className="drop_down_btn" onClick={onclickDropDownBtn}>
                                <IoIosArrowUp />
                            </button> :
                            (<button type="button" className="drop_down_btn" onClick={onclickDropDownBtn}>
                                <IoIosArrowDown />
                            </button>)
                        }
                    </div>
                    {categoryShow === true ?
                        <ul className="Checkbox_container">
                            {categoryItems.map((each) => (
                                <li className="Checkbox_items" key={each.optionId}>
                                    <input
                                        id={each.optionId}
                                        value={each.optionId}
                                        type="radio"
                                        name="category"
                                        className="chekbox_input"
                                        onChange={onchangecheckboxInput}
                                    />
                                    <label className="Mens_label" htmlFor={each.optionId}>{each.text}</label>
                                </li>
                            ))}
                            <button
                                className="clear_off Checkbox_items"
                                type="button"
                                onClick={() => setCategoryList([])}>
                                Clear Off
                            </button>
                        </ul>
                        : <p className="Drop_down_heading">ALL</p>}
                </section>
                <section className="category_showing_or_not_container">
                    <div className="Category_Drop_down_section">
                        <h1 className="Drop_down_heading">Near By</h1>
                        {LocationShow === true ?
                            <button type="button" className="drop_down_btn" onClick={onclickLocationBtn}>
                                <IoIosArrowUp />
                            </button> :
                            (<button type="button" className="drop_down_btn" onClick={onclickLocationBtn}>
                                <IoIosArrowDown />
                            </button>)
                        }
                    </div>
                    {LocationShow === true ?
                        <ul className="Checkbox_container">
                            {categoryLocations.map((each) => (
                                <li className="Checkbox_items" key={each.optionId}>
                                    <input id={each.optionId} value={each.optionId} type="checkbox" className="chekbox_input" />
                                    <label className="Mens_label" htmlFor={each.optionId}>{each.text}</label>
                                </li>
                            ))}
                        </ul>
                        : <p className="Drop_down_heading">ALL</p>}
                </section>
            </aside>
        )
    }
    // Fillter view Functions sections

    // Footer Functions sections
    const footerSection = () => (
        <footer className="Footer_bg_container">
            <main className="Footer_main_contianer">
                <aside className="left_side_container">
                    <h1 className="left_side_heading">Be the first to know</h1>
                    <p className="left_side_para">Sign up for updates from mettā muse.</p>
                    <input type="email" className="text_input" placeholder="Enter your e-mail..." />
                    <button type="button" className="input_button">subscribe</button>
                </aside>
                <hr className="Mobile_break" />
                <aside className="left_side_container">
                    <h1 className="left_side_heading">Contact Us</h1>
                    <p className="left_side_para">+44 221 133 5360 <br /> customercare@mettamuse.com</p>
                    <hr className="Mobile_break" />
                    <h1 className="left_side_heading">Currency</h1>
                    <p className="left_side_para">.USA</p>
                    <p className="left_side_par">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </aside>
            </main>
            <hr />
            <section className="footer_bottom_section">
                <div className="footer_bottom_section_container">
                    <div className="Section_footer_heading_container">
                        <h1 className="left_side_heading">mettā muse</h1>
                        <button type="button" className="filter_check_button arrow" onClick={onclickFiterShowBtn}>
                            <IoIosArrowUp />
                        </button>
                    </div>
                    <p className="footer_left_side_par">About Us</p>
                    <p className="footer_left_side_par">Stories</p>
                    <p className="footer_left_side_par">Artisans</p>
                    <p className="footer_left_side_par">Boutiques</p>
                    <p className="footer_left_side_par">Contact Us</p>
                    <p className="footer_left_side_par">EU Compliances Docs</p>
                    <p className="footer_left_side_par">Join as a Seller</p>
                </div>
                <hr className="Mobile_break" />
                <div className="footer_bottom_section_container">
                    <div className="Section_footer_heading_container">
                        <h1 className="left_side_heading">Quick Links</h1>
                        <button type="button" className="filter_check_button arrow" onClick={onclickFiterShowBtn}>
                            <IoIosArrowUp />
                        </button>
                    </div>
                    <p className="footer_left_side_par">Orders & Shipping</p>
                    <p className="footer_left_side_par">Join/Login as a Seller</p>
                    <p className="footer_left_side_par">Payment & Pricing</p>
                    <p className="footer_left_side_par">Return & Refunds</p>
                    <p className="footer_left_side_par">FAQs</p>
                    <p className="footer_left_side_par">Privacy Policy</p>
                    <p className="footer_left_side_par">Terms & Conditions</p>
                </div>
                <hr className="Mobile_break" />
                <div className="footer_bottom_section_container">
                    <div className="Section_footer_heading_container">
                        <h1 className="left_side_heading">Follow Us</h1>
                        <button type="button" className="filter_check_button arrow" onClick={onclickFiterShowBtn}>
                            <IoIosArrowUp />
                        </button>
                    </div>
                    <div className="icons_container">
                        <button type="button" className="icons_btn">
                            <RiInstagramLine />
                        </button>
                        <button type="button" className="icons_btn">
                            <RiLinkedinBoxFill />
                        </button>
                    </div>
                </div>
            </section>
        </footer>
    )
    // Footer Functions sections

    // Final switch Functions sections
    const FinalSectionFunctions = () => {
        switch (apiStatus) {
            case ApiSections.is_loading:
                return LoaderSpinnerSection();
            case ApiSections.success:
                return getAllProductDetails();
            case ApiSections.failure:
                return FailureViewSection();
            default:
                return null;
        }
    }
    // Final switch Functions sections

    return (
        <main className="Home_main_container">
            <Header />
            <main className="Home_bg_container">
                <article className="Home_heading_container">
                    <h2 className="Home_heading">Discover our project</h2>
                    <p className="Home_para">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur exercitationem quidem saepe unde eligendi alias nam aliquid aut
                        praesentium debitis ex voluptate fugiat ipsa eius sequi harum cumque, dolores pariatur?
                    </p>
                </article>
                <hr />
                <section className="Home_filter_section">
                    <div className="filter_main_section">
                        <h1 className="filter_heading">{ProductData.length} Items</h1>
                        {FilterShow === false ? (
                            <button type="button" className="filter_check_button" onClick={onclickFiterShowBtn}>
                                <IoIosArrowForward /> Show Filter
                            </button>
                        ) : (
                            <button type="button" className="filter_check_button" onClick={onclickFiterShowBtn}>
                                <IoIosArrowBack /> Hide Filter
                            </button>
                        )}
                    </div>
                    <button type="button" className="Mobile_device_filter_check_button" onClick={onclickFiterShowBtn}>
                        FIlter
                    </button>
                    <span className="Mobile_device_span">|</span>
                    <select className="Select_opition" value={optionValue} onChange={onchangeSelectOptions}>
                        {SelectOptions.map((each) => (
                            <option key={each.id} value={each.id}>{each.text}</option>
                        ))}
                    </select>
                </section>
                <hr />

            </main>
            <section className="Home_All_product_and_Filter_container">
                {FilterShow === true ? getFilterDetails() : null}
                {FinalSectionFunctions()}
            </section>
            {footerSection()}
        </main>
    )
}

export default Home;