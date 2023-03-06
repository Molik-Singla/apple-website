import React from "react";

const MaxContainer = ({ children }) => {
    return <section className="flex h-auto w-full max-w-5xl justify-center py-6 lg:py-12">{children}</section>;
};

export default MaxContainer;
