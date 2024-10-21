import React from "react";
import { FaCartPlus, FaHeart, FaStar } from "react-icons/fa6";

const Course = () => {
  return (
    <>
      <section>
        <div className="pt-12 pb-10 md:pt-18 md:pb-12 lg:pt-5 2xl:pt-24 2xl:pb-18 bg-whiteColor dark:bg-whiteColor-dark">
          <div className="filter-container container">
            <div className="flex gap-4 lg:gap-7 flex-wrap lg:flex-nowrap items-center">
              {/* Courses Left */}
              <div className="basis-full lg:basis-[500px]" data-aos="fade-up">
                <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-1 rounded-full inline-block mb-3">
                  Course List
                </span>
                <h3
                  className="text-3xl md:text-[35px] lg:text-4xl leading-tight font-bold text-blackColor dark:text-blackColor-dark"
                  data-aos="fade-up"
                >
                  Perfect Online Course for Your Career
                </h3>
              </div>
            </div>

            {/* Course Cards */}
            <div
              className="container p-0 filter-contents flex flex-wrap sm:-mx-4 mt-7 lg:mt-10"
              data-aos="fade-up"
            >
              {/* Card 1 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item">
                <div className="tab-content-wrapper sm:px-4 mb-8">
                  <div className="p-4 bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                    {/* Card Image */}
                    <div className="relative mb-4">
                      <a
                        href="course-details.html"
                        className="w-full overflow-hidden rounded"
                      >
                        <img
                          src="assets/images/grid/grid_1.png"
                          alt="Course Image"
                          className="w-full transition-all duration-300 group-hover:scale-110"
                        />
                      </a>
                      <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                        <p className="text-xs text-whiteColor px-4 py-1 bg-secondaryColor rounded font-semibold">
                          Data &amp; Tech
                        </p>
                        <a
                          className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                          href="#"
                        >
                          <i className="icofont-heart-alt text-base py-1 px-2" />
                        </a>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div>
                      <div className="grid grid-cols-2 mb-4">
                        <div className="flex items-center">
                          <i className="icofont-book-alt pr-2 text-primaryColor text-lg" />
                          <span className="text-sm text-black dark:text-blackColor-dark">
                            23 Lessons
                          </span>
                        </div>
                        <div className="flex items-center">
                          <i className="icofont-clock-time pr-2 text-primaryColor text-lg" />
                          <span className="text-sm text-black dark:text-blackColor-dark">
                            1 hr 30 min
                          </span>
                        </div>
                      </div>
                      <div className="text-start md:text-end flex">
                        <FaStar className=" text-size-15 text-yellow" />
                        <FaStar className=" text-size-15 text-yellow" />
                        <FaStar className=" text-size-15 text-yellow" />
                        <FaStar className=" text-size-15 text-yellow" />
                        <FaStar className=" text-size-15 text-yellow" />
                        <span className="text-xs text-lightGrey6">(44)</span>
                      </div>
                      <a
                        href="course-details.html"
                        className="text-lg font-semibold text-blackColor mb-2 font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                      >
                        Foundation course to understand software
                      </a>

                      {/* Price */}
                      <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                        $32.00
                        <del className="text-sm text-lightGrey4 font-semibold ml-2">
                          $67.00
                        </del>
                        <span className="ml-6">
                          <del className="text-base font-semibold text-secondaryColor3">
                            Free
                          </del>
                        </span>
                      </div>

                      {/* Author and Rating */}
                      <div className="grid grid-cols-1 md:grid-cols-4 pt-15px">
                        <div>
                          <a class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <FaCartPlus />
                          </a>
                        </div>
                        <div>
                          <a class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <FaHeart />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item">
                <div className="tab-content-wrapper sm:px-15px mb-30px">
                  <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                    {/* card image */}
                    <div className="relative mb-4">
                      <a
                        href="course-details.html"
                        className="w-full overflow-hidden rounded"
                      >
                        <img
                          src="assets/images/grid/grid_2.png"
                          alt=""
                          className="w-full transition-all duration-300 group-hover:scale-110"
                        />
                      </a>
                      <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                        <div>
                          <p className="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold">
                            Mechanical
                          </p>
                        </div>
                        <a
                          className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                          href="#"
                        >
                          <i className="icofont-heart-alt text-base py-1 px-2" />
                        </a>
                      </div>
                    </div>
                    {/* card content */}
                    <div>
                      <div className="grid grid-cols-2 mb-15px">
                        <div className="flex items-center">
                          <div>
                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                          </div>
                          <div>
                            <span className="text-sm text-black dark:text-blackColor-dark">
                              29 Lesson
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div>
                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                          </div>
                          <div>
                            <span className="text-sm text-black dark:text-blackColor-dark">
                              2 hr 10 min
                            </span>
                          </div>
                        </div>
                      </div>
                      <a
                        href="course-details.html"
                        className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                      >
                        Nidnies course to under stand about softwere
                      </a>
                      {/* price */}
                      <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                        $32.00
                        <del className="text-sm text-lightGrey4 font-semibold">
                          / $67.00
                        </del>
                        <span className="ml-6">
                          <del className="text-base font-semibold text-greencolor">
                            Free
                          </del>
                        </span>
                      </div>
                      {/* author and rating*/}
                      <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                        <div>
                          <a
                            href="instructor-details.html"
                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                          >
                            <img
                              className="w-[30px] h-[30px] rounded-full mr-15px"
                              src="assets/images/grid/grid_small_2.jpg"
                              alt=""
                            />
                            Rinis Jhon
                          </a>
                        </div>
                        <div className="text-start md:text-end flex">
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <span className="text-xs text-lightGrey6">(44)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item">
                <div className="tab-content-wrapper sm:px-15px mb-30px">
                  <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                    {/* card image */}
                    <div className="relative mb-4">
                      <a
                        href="course-details.html"
                        className="w-full overflow-hidden rounded"
                      >
                        <img
                          src="assets/images/grid/grid_3.png"
                          alt=""
                          className="w-full transition-all duration-300 group-hover:scale-110"
                        />
                      </a>
                      <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                        <div>
                          <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold">
                            Development
                          </p>
                        </div>
                        <a
                          className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                          href="#"
                        >
                          <i className="icofont-heart-alt text-base py-1 px-2" />
                        </a>
                      </div>
                    </div>
                    {/* card content */}
                    <div>
                      <div className="grid grid-cols-2 mb-15px">
                        <div className="flex items-center">
                          <div>
                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                          </div>
                          <div>
                            <span className="text-sm text-black dark:text-blackColor-dark">
                              25 Lesson
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div>
                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                          </div>
                          <div>
                            <span className="text-sm text-black dark:text-blackColor-dark">
                              1 hr 40 min
                            </span>
                          </div>
                        </div>
                      </div>
                      <a
                        href="course-details.html"
                        className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                      >
                        Minws course to under stand about solution
                      </a>
                      {/* price */}
                      <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                        $40.00
                        <del className="text-sm text-lightGrey4 font-semibold">
                          / $67.00
                        </del>
                        <span className="ml-6">
                          <del className="text-base font-semibold text-secondaryColor3">
                            Free
                          </del>
                        </span>
                      </div>
                      {/* author and rating*/}
                      <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                        <div>
                          <a
                            href="instructor-details.html"
                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                          >
                            <img
                              className="w-[30px] h-[30px] rounded-full mr-15px"
                              src="assets/images/grid/grid_small_3.jpg"
                              alt=""
                            />
                            Micle John
                          </a>
                        </div>
                        <div className="text-start md:text-end flex">
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <span className="text-xs text-lightGrey6">(44)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item">
                <div className="tab-content-wrapper sm:px-15px mb-30px">
                  <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                    {/* card image */}
                    <div className="relative mb-4">
                      <a
                        href="course-details.html"
                        className="w-full overflow-hidden rounded"
                      >
                        <img
                          src="assets/images/grid/grid_4.png"
                          alt=""
                          className="w-full transition-all duration-300 group-hover:scale-110"
                        />
                      </a>
                      <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                        <div>
                          <p className="text-xs text-whiteColor px-4 py-[3px] bg-greencolor2 rounded font-semibold">
                            Ui &amp; UX Design
                          </p>
                        </div>
                        <a
                          className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                          href="#"
                        >
                          <i className="icofont-heart-alt text-base py-1 px-2" />
                        </a>
                      </div>
                    </div>
                    {/* card content */}
                    <div>
                      <div className="grid grid-cols-2 mb-15px">
                        <div className="flex items-center">
                          <div>
                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                          </div>
                          <div>
                            <span className="text-sm text-black dark:text-blackColor-dark">
                              36 Lesson
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div>
                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                          </div>
                          <div>
                            <span className="text-sm text-black dark:text-blackColor-dark">
                              3 hr 40 min
                            </span>
                          </div>
                        </div>
                      </div>
                      <a
                        href="course-details.html"
                        className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                      >
                        Design course to under stand about solution
                      </a>
                      {/* price */}
                      <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                        $40.00
                        <del className="text-sm text-lightGrey4 font-semibold">
                          / $67.00
                        </del>
                        <span className="ml-6">
                          <del className="text-base font-semibold text-secondaryColor3">
                            Free
                          </del>
                        </span>
                      </div>
                      {/* author and rating*/}
                      <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                        <div>
                          <a
                            href="instructor-details.html"
                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                          >
                            <img
                              className="w-[30px] h-[30px] rounded-full mr-15px"
                              src="assets/images/grid/grid_small_4.jpg"
                              alt=""
                            />
                            <span className="flex flex-shrink-0">
                              Micle Robin
                            </span>
                          </a>
                        </div>
                        <div className="text-start md:text-end flex">
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <span className="text-xs text-lightGrey6">(44)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 5 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item">
                <div className="tab-content-wrapper sm:px-15px mb-30px">
                  <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                    {/* card image */}
                    <div className="relative mb-4">
                      <a
                        href="course-details.html"
                        className="w-full overflow-hidden rounded"
                      >
                        <img
                          src="assets/images/grid/grid_5.png"
                          alt=""
                          className="w-full transition-all duration-300 group-hover:scale-110"
                        />
                      </a>
                      <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                        <div>
                          <p className="text-xs text-whiteColor px-4 py-[3px] bg-orange rounded font-semibold">
                            Data &amp; Tech
                          </p>
                        </div>
                        <a
                          className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                          href="#"
                        >
                          <i className="icofont-heart-alt text-base py-1 px-2" />
                        </a>
                      </div>
                    </div>
                    {/* card content */}
                    <div>
                      <div className="grid grid-cols-2 mb-15px">
                        <div className="flex items-center">
                          <div>
                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                          </div>
                          <div>
                            <span className="text-sm text-black dark:text-blackColor-dark">
                              36 Lesson
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div>
                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                          </div>
                          <div>
                            <span className="text-sm text-black dark:text-blackColor-dark">
                              3 hr 40 min
                            </span>
                          </div>
                        </div>
                      </div>
                      <a
                        href="course-details.html"
                        className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                      >
                        Data course to under stand about solution
                      </a>
                      {/* price */}
                      <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                        $40.00
                        <del className="text-sm text-lightGrey4 font-semibold">
                          / $67.00
                        </del>
                        <span className="ml-6">
                          <del className="text-base font-semibold text-secondaryColor3">
                            Free
                          </del>
                        </span>
                      </div>
                      {/* author and rating*/}
                      <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                        <div>
                          <a
                            href="instructor-details.html"
                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                          >
                            <img
                              className="w-[30px] h-[30px] rounded-full mr-15px"
                              src="assets/images/grid/grid_small_1.jpg"
                              alt=""
                            />
                            <span className="flex flex-shrink-0">
                              Micle Robin
                            </span>
                          </a>
                        </div>
                        <div className="text-start md:text-end flex">
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <span className="text-xs text-lightGrey6">(44)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 6 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item">
                <div className="tab-content-wrapper sm:px-15px mb-30px">
                  <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                    {/* card image */}
                    <div className="relative mb-4">
                      <a
                        href="course-details.html"
                        className="w-full overflow-hidden rounded"
                      >
                        <img
                          src="assets/images/grid/grid_6.png"
                          alt=""
                          className="w-full transition-all duration-300 group-hover:scale-110"
                        />
                      </a>
                      <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                        <div>
                          <p className="text-xs text-whiteColor px-4 py-[3px] bg-yellow rounded font-semibold">
                            Big Data
                          </p>
                        </div>
                        <a
                          className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                          href="#"
                        >
                          <i className="icofont-heart-alt text-base py-1 px-2" />
                        </a>
                      </div>
                    </div>
                    {/* card content */}
                    <div>
                      <div className="grid grid-cols-2 mb-15px">
                        <div className="flex items-center">
                          <div>
                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                          </div>
                          <div>
                            <span className="text-sm text-black dark:text-blackColor-dark">
                              30 Lesson
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div>
                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                          </div>
                          <div>
                            <span className="text-sm text-black dark:text-blackColor-dark">
                              3 hr 40 min
                            </span>
                          </div>
                        </div>
                      </div>
                      <a
                        href="course-details.html"
                        className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                      >
                        Big data to under stand about solution pacage
                      </a>
                      {/* price */}
                      <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                        $40.00
                        <del className="text-sm text-lightGrey4 font-semibold">
                          / $67.00
                        </del>
                        <span className="ml-6">
                          <del className="text-base font-semibold text-secondaryColor3">
                            Free
                          </del>
                        </span>
                      </div>
                      {/* author and rating*/}
                      <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                        <div>
                          <a
                            href="instructor-details.html"
                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                          >
                            <img
                              className="w-[30px] h-[30px] rounded-full mr-15px"
                              src="assets/images/grid/grid_small_1.jpg"
                              alt=""
                            />
                            <span className="flex flex-shrink-0">
                              Micle Robin
                            </span>
                          </a>
                        </div>
                        <div className="text-start md:text-end flex">
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <FaStar className=" text-size-15 text-yellow" />
                          <span className="text-xs text-lightGrey6">(44)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
