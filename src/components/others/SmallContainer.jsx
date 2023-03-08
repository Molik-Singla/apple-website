import React from "react";

const SmallContainer = ({ children }) => {
    return <section className="flex h-auto w-full max-w-5xl justify-center px-8 py-6 lg:px-24 lg:py-12">{children}</section>;
};

export default SmallContainer;
