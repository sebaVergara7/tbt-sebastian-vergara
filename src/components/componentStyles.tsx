const classes = {
    //Layout
    classesLayout: {
        childrenDiv: "lg:px-36 md:px-36 py-10",
    },
    //Header
    classesHeader: {
        headerDiv: "w-full px-2 lg:px-36 md:px-36 py-2 border-b-2 border-b-gray-200",
        headerDivTitle: "flex w-full flex-col lg:flex-row md:flex-row",
        headerDivInfo: "w-full lg:w-1/3 md:w-1/3 flex items-center justify-evenly",
        headerDivImg: "w-full lg:w-1/3 md:w-1/3 flex items-center justify-center my-8 lg:my-0 md:my-0",
        headerDivImgSpan: "flex flex-col items-center",
        headerDivButton: "w-full lg:w-1/3 md:w-1/3 flex items-center justify-evenly",
        headerDivButtonList: "flex-col md:flex-row lg:flex-row flex items-center justify-between py-6"
    },
    //Footer
    classesFooter: {
        footerDiv: "w-full px-2 lg:px-36 md:px-36 py-2 border-t-2 border-t-gray-200",
        footerDivTitle: "flex flex-col lg:flex-row md:flex-row w-full",
        divImgTypography: "flex flex-col items-center",
        divContactGroup: "w-full lg:w-3/4 md:w-3/4 flex flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0",
        divContact: "my-2 lg:my-0 md:my-0 w-full lg:w-1/4 md:w-1/4 flex flex-col",
        divContactSpan: "text-xs font-light",
        divContactButton: "my-2 lg:my-0 md:my-0 w-full lg:w-1/4 md:w-1/4 flex flex-col items-center justify-center",
        footerDivContentGroup: "flex flex-wrap lg:flex-nowrap md:flex-nowrap w-full mt-10",
        footerDivContent: "w-1/2 lg:w-1/5 md:w-1/5 flex flex-col",
        divContentSpan: "font-medium text-lg lg:text-2xl md:text-2xl uppercase",
        divContentLinkGroup: "w-full flex flex-col mt-0 lg:mt-4 md:mt-4",
        divContentLink: "cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10",

        copyrightDiv: "w-full flex items-center justify-center",
        copyrightSpan: "font-light text-xs leading-10",
        divImg: "w-full lg:w-1/4 md:w-1/4 flex items-center justify-center"
    },
    //Filtro
    classesFiltro: {
        cardDiv: "flex flex-col w-full items-center",
        cardContentSpan: "uppercase text-xl font-bold",
        cardContentDiv: "border-b-gray-200 border-b-2 flex flex-col py-4",
        cardContentDivSpan: "uppercase font-light text-sm",
        cardContentDivDiv: "flex items-center justify-center",
        cardContentAccordionDiv: "border-b-gray-200 border-b-2 flex flex-col py-4",
        summarySpan: "uppercase font-light text-sm",
        cardContentAccordionDetails: "max-h-40 overflow-y-auto"
    },
    //ItemCerveza
    classesItemCerveza: {
        itemCervezaDiv: "w-full lg:w-1/3 md:w-1/3 py-6 px-4 relative hover:scale-105 hover:transition hover:duration-200",
        itemCervezaCard: "cardCerveza rounded-none cursor-pointer",
        itemCervezaTitle: "w-full flex justify-center",
        itemCervezaCardContent: "flex flex-col items-center",
        itemCervezaIcon: "filterListCerveza relative",
        yeastSpan: "text-xs text-center",
        nameDiv: "flex max-h-28 h-28 justify-center items-center",
        nameSpan: "uppercase text-xl font-bold text-center",
        abvSpan: "text-lg font-bold mt-4",
        phSpan: "text-xs font-light mt-4",
        iconButtonDiv: "w-full flex items-center justify-center"
    }


}

export default classes;