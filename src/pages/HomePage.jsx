import React, { useEffect } from "react";

import FullContainer from "./../components/others/FullContainer";
import MaxContainer from "./../components/others/MaxContainer";
import SmallContainer from "../components/others/SmallContainer";
import SmallAndMaxContainer from "../components/others/SmallAndMaxContainer";

import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { BsArrowRight } from "react-icons/bs";

const HomePage = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    const variantFunc = () => {
        return {
            hidden: { fontSize: "96px" },
            visible: { fontSize: "140px", transition: { duration: 0.9 } },
        };
    };

    useEffect(() => {
        if (inView) controls.start("visible");
        else controls.start("hidden");
    }, [controls, inView]);

    return (
        <section className="home flex h-auto w-full flex-col items-center">
            <FullContainer>
                <video className="w-full" autoPlay muted>
                    <source src="./videos/first.mp4" type="video/mp4" />
                </video>
            </FullContainer>

            <SmallContainer>
                <div className="home__background--invisible-gradient flex w-full justify-center py-20">
                    <p className="text-2.5xl font-bold leading-7 lg:text-5.5xl lg:leading-[60px]">
                        A magical new way to interact with iPhone. A vital safety feature designed to save lives. An innovative 48MP camera for
                        mind-blowing detail. All powered by the ultimate smartphone chip.
                    </p>
                </div>
            </SmallContainer>

            <FullContainer>
                <div className="relative w-full">
                    <picture>
                        <source media="(min-width:1886px)" srcSet="./images/gradient-mega.png" />
                        <source media="(min-width:1024px)" srcSet="./images/gradient.png" />
                        <source media="(min-width:789px)" srcSet="./images/gradient-tab.png" />
                        <source media="(min-width:0px)" srcSet="./images/gradient-mobile.png" />
                        <img className="" src="./images/gradient.png" alt="" />
                    </picture>

                    <div className="absolute top-0 flex h-full w-full justify-center text-custom-black">
                        <SmallContainer>
                            <div className="sticky top-4 h-fit w-full">
                                <p className="relative -left-3 text-7xl font-bold tracking-wide lg:text-[176px] lg:leading-[168px]">Pro. Beyond.</p>

                                <div className="mt-6 flex flex-col items-start gap-6 lg:mt-14">
                                    <p className="flex flex-col gap-0 text-custom-mobile-medium font-semibold lg:flex-row lg:gap-2 lg:text-custom-desktop-medium">
                                        <span>iPhone 14 Pro and </span>
                                        <span>iPhone 14 Pro Max</span>
                                    </p>
                                    <button className="rounded-full border border-black px-4 py-1 font-sans text-sm font-medium">
                                        With superfast 5G <sup>7</sup>
                                    </button>

                                    <p className="flex flex-col text-custom-mobile-semi-medium font-semibold lg:flex-row lg:text-custom-desktop-semi-medium">
                                        <span>From ₹129900.00*</span>
                                        <span>before trade-in*</span>
                                    </p>
                                    <div className="flex flex-col gap-x-14 gap-y-3 text-custom-mobile-semi-medium font-semibold lg:flex-row lg:text-custom-desktop-semi-medium">
                                        <p>Watch the film</p>
                                        <p>Watch the event</p>
                                    </div>
                                </div>
                            </div>
                        </SmallContainer>
                    </div>
                </div>
            </FullContainer>

            <MaxContainer>
                <div className="relative flex w-full flex-col items-center">
                    <div className="flex flex-col-reverse">
                        <div className="flex justify-center">
                            <video className="w-3/4 lg:w-full" autoPlay muted>
                                <source
                                    src="https://www.apple.com/105/media/ww/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/design/large.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <ul className="lg:custom-mobile-medium relative my-12 mb-20 flex flex-col gap-3 px-12 text-custom-mobile-semi-medium font-semibold text-[#4e4e53] lg:absolute lg:top-[34vh] lg:left-[68%] lg:m-0">
                            <li className="cursor-pointer">Deep Purple</li>
                            <li className="cursor-pointer">Gold</li>
                            <li className="cursor-pointer">Silver</li>
                            <li className="cursor-pointer">Space Black</li>
                        </ul>
                    </div>

                    <div className="mt-12 flex w-full max-w-lg flex-col gap-5 px-12 text-custom-mobile-medium font-semibold leading-7 tracking-wide text-custom-white lg:px-0 lg:text-custom-desktop-medium lg:leading-9">
                        <p>Designed for durability.</p>
                        <p>
                            With Ceramic Shield, tougher than any smartphone glass. Water resistance.1 Surgical-grade stainless steel. 15.54 cm (6.1″)
                            and 17.00 cm (6.7″) display sizes.2 All in four Pro colours.
                        </p>
                    </div>

                    <MaxContainer>
                        <div className="mt-24 flex w-4/5 items-start justify-between border-t-2 border-custom-white/60 text-custom-white lg:w-full">
                            <img className="relative -left-2 scale-75 py-3 lg:left-0 lg:scale-100 lg:py-6" src="./images/apple-logo.PNG" alt="" />
                            <p className="max-w-lg py-6 text-custom-mobile-medium font-semibold leading-6">
                                iPhone is also designed from the ground up to protect your privacy and put you in control of what you share and who
                                you share it with
                            </p>
                        </div>
                    </MaxContainer>
                </div>
            </MaxContainer>

            <FullContainer>
                <div className="flex w-full flex-col items-center">
                    <SmallAndMaxContainer>
                        <div className="flex w-full flex-col items-start">
                            <motion.p
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={variantFunc(inView)}
                                className="hidden max-w-4xl text-center text-xl font-bold text-custom-white md:flex md:text-8xl"
                            >
                                Meet the new face of iPhone
                            </motion.p>
                            <p className="flex w-full justify-center text-center text-5xl font-bold text-custom-white md:hidden">
                                Meet the new face of iPhone
                            </p>

                            <div className="mt-14 flex w-full justify-center md:mt-24">
                                <p className="max-w-xl text-custom-mobile-medium font-semibold leading-7 tracking-wide text-custom-white lg:text-custom-desktop-medium lg:leading-9">
                                    Introducing Dynamic Island, a truly Apple innovation that’s hardware and software — and something in between. It
                                    bubbles up music, FaceTime and so much more — all without taking you away from what you’re doing.
                                </p>
                            </div>

                            <div className="mt-16 flex w-full flex-col items-center">
                                <div className="relative flex w-fit justify-center overflow-hidden">
                                    <video className="relative top-10 w-[90%] rounded-[40px]" autoPlay muted>
                                        <source
                                            src="https://www.apple.com/105/media/in/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/dynamic-island/large.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                    <img
                                        className="absolute -top-0"
                                        src="https://www.apple.com/v/iphone-14-pro/c/images/overview/dynamic-island/dynamic_hw__wx47n1mguoi6_large.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SmallAndMaxContainer>
                    <div className="flex w-full items-center gap-x-5 px-4 lg:px-12">
                        <div className="flex h-full w-full justify-end">
                            <div className="relative flex h-full w-fit items-center gap-4 pr-20 lg:pr-24">
                                <p className="h-full max-w-[220px] overflow-hidden text-right text-custom-mobile-medium font-medium leading-6 tracking-wide text-custom-white lg:max-w-xs lg:text-custom-desktop-semi-medium lg:leading-7">
                                    See more of what Dynamic Island can do and how we brought it to life
                                </p>
                                <motion.div
                                    initial={{
                                        width: "100%",
                                    }}
                                    whileInView={{
                                        width: "20%",
                                        translateX: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "tween",
                                        duration: 1.3,
                                        ease: "linear",
                                    }}
                                    className="absolute right-0 flex h-full w-full items-center justify-start bg-custom-black"
                                >
                                    <motion.button
                                        initial={{
                                            translateX: -40,
                                        }}
                                        whileInView={{
                                            translateX: 0,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "tween",
                                            duration: 1.5,
                                            ease: "linear",
                                        }}
                                        className="rounded-full bg-custom-primary-gradient p-3 lg:p-4"
                                    >
                                        <BsArrowRight className="text-2xl font-black lg:text-4xl" />
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </FullContainer>
        </section>
    );
};

export default HomePage;
