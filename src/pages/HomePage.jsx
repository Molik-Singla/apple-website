import React from "react";

import FullContainer from "./../components/others/FullContainer";
import MaxContainer from "./../components/others/MaxContainer";
import SmallContainer from "../components/others/SmallContainer";

const HomePage = () => {
    return (
        <section className="home flex h-auto w-full flex-col items-center">
            <FullContainer>
                <video className="w-screen" autoPlay muted>
                    <source src="./videos/first.mp4" type="video/mp4" />
                </video>
            </FullContainer>

            <SmallContainer>
                <div className="home__background--invisible-gradient flex w-full justify-center py-20">
                    <p className="text-2.5xl font-semibold tracking-wide lg:text-5.5xl lg:leading-[60px]">
                        A magical new way to interact with iPhone. A vital safety feature designed to save lives. An innovative 48MP camera for
                        mind-blowing detail. All powered by the ultimate smartphone chip.
                    </p>
                </div>
            </SmallContainer>

            <FullContainer>
                <div className="home__background--gradient flex w-full justify-center text-custom-black">
                    <SmallContainer>
                        <div className="sticky top-12 h-fit w-full">
                            <p className="relative -left-3 text-7xl font-bold tracking-wide lg:text-[176px] lg:leading-[168px]">Pro. Beyond.</p>

                            <div className="mt-6 flex flex-col items-start gap-6 lg:mt-14">
                                <p className="flex flex-col gap-0 text-xl font-semibold lg:text-3.5xl">
                                    <span>iPhone 14 Pro and </span>
                                    <span>iPhone 14 Pro Max</span>
                                </p>
                                <button className="rounded-full border border-black px-4 py-1 font-sans text-sm font-medium">
                                    With superfast 5G <sup>7</sup>
                                </button>

                                <p className="flex flex-col text-lg font-semibold lg:flex-row lg:text-2.5xl">
                                    <span>From ₹129900.00*</span>
                                    <span>before trade-in*</span>
                                </p>
                                <div className="flex flex-col gap-x-14 gap-y-3 text-lg font-semibold lg:flex-row lg:text-2.5xl">
                                    <p>Watch the film</p>
                                    <p>Watch the event</p>
                                </div>
                            </div>
                        </div>
                    </SmallContainer>
                </div>
            </FullContainer>

            <FullContainer>
                <div className="relative flex w-full flex-col items-center">
                    <div className="relative flex flex-col-reverse">
                        <video className="h-screen w-screen" autoPlay muted>
                            <source
                                src="https://www.apple.com/105/media/ww/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/design/large.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <ul className="relative my-12 mb-20 flex flex-col gap-3 px-12 text-lg font-semibold text-[#4e4e53] lg:absolute lg:top-[34vh] lg:left-[66%] lg:m-0 lg:text-xl">
                            <li className="cursor-pointer">Deep Purple</li>
                            <li className="cursor-pointer">Gold</li>
                            <li className="cursor-pointer">Silver</li>
                            <li className="cursor-pointer">Space Black</li>
                        </ul>
                    </div>

                    <div className="mt-12 flex w-full max-w-lg flex-col gap-5 px-12 text-xl font-semibold leading-7 tracking-wide text-custom-white lg:text-3.5xl lg:leading-9">
                        <p>Designed for durability.</p>
                        <p>
                            With Ceramic Shield, tougher than any smartphone glass. Water resistance.1 Surgical-grade stainless steel. 15.54 cm (6.1″)
                            and 17.00 cm (6.7″) display sizes.2 All in four Pro colours.
                        </p>
                    </div>

                    <MaxContainer>
                        <div className="mt-24 flex w-4/5 items-start justify-between border-t-2 border-custom-white/60 text-custom-white lg:w-full">
                            <img className="relative -left-2 scale-75 py-3 lg:py-6" src="./images/apple-logo.PNG" alt="" />
                            <p className="max-w-lg py-6 text-xl font-semibold leading-6">
                                iPhone is also designed from the ground up to protect your privacy and put you in control of what you share and who
                                you share it with
                            </p>
                        </div>
                    </MaxContainer>
                </div>
            </FullContainer>
        </section>
    );
};

export default HomePage;
