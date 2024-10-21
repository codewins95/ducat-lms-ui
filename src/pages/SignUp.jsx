import React from 'react'

const SignUp = () => {
  return (
    <>
<main className="bg-transparent">
      
      <section className="relative">
        <div className="container py-100px">
          <div className="tab md:w-2/3 mx-auto">
            
            
            {/*  tab contents */}
            <div className="shadow-container bg-whiteColor dark:bg-whiteColor-dark pt-10px px-5 pb-10 md:p-50px md:pt-30px rounded-5px">
              <div className="tab-contents">
                
                {/* sign up form*/}
                <div className="opacity-100 transition-opacity duration-150 ease-linear">
                  {/* heading   */}
                  <div className="text-center">
                    <h3 className="text-size-32 font-bold text-blackColor dark:text-blackColor-dark mb-2 leading-normal">
                      Sing Up
                    </h3>
                    <p className="text-contentColor dark:text-contentColor-dark mb-15px">
                      Already have an account?
                      <a
                        href="login.html"
                        className="hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                      >
                        Log In
                      </a>
                    </p>
                  </div>
                  <form className="pt-25px" data-aos="fade-up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                      <div>
                        <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                      <div>
                        <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                      <div>
                        <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                          Username
                        </label>
                        <input
                          type="text"
                          placeholder="Username"
                          className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                      <div>
                        <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                      <div>
                        <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                      <div>
                        <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                          Re-Enter Password
                        </label>
                        <input
                          type="password"
                          placeholder="Re-Enter Password"
                          className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                    </div>
                    <div className="text-contentColor dark:text-contentColor-dark flex items-center">
                      <input
                        type="checkbox"
                        id="accept-pp"
                        className="w-18px h-18px mr-2 block box-content"
                      />
                      <label htmlFor="accept-pp">
                        Accept the Terms and Privacy Policy
                      </label>
                    </div>
                    <div className="mt-25px text-center">
                      <button
                        type="submit"
                        className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px w-full border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                      >
                        Sign-Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* animated icons */}
        <div>
          <img
            loading="lazy"
            className="absolute right-[14%] top-[30%] animate-move-var"
            src="assets/images/education/hero_shape2.png"
            alt="Shape"
          />
          <img
            loading="lazy"
            className="absolute left-[5%] top-1/2 animate-move-hor"
            src="assets/images/education/hero_shape3.png"
            alt="Shape"
          />
          <img
            loading="lazy"
            className="absolute left-1/2 bottom-[60px] animate-spin-slow"
            src="assets/images/education/hero_shape4.png"
            alt="Shape"
          />
          <img
            loading="lazy"
            className="absolute left-1/2 top-10 animate-spin-slow"
            src="assets/images/education/hero_shape5.png"
            alt="Shape"
          />
        </div>
      </section>
    </main>
    </>
  )
}

export default SignUp