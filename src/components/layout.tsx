import { Fragment, ReactElement } from "react";
import Header from "./header";
import Footer from "./footer";

export interface ILayout {
    children   : ReactElement,
    title      : string,
    className? : string,
}

const Layout = ({children, title, className}: ILayout) => {
    return (
        <Fragment>
            <Header/>
            <Footer />
        </Fragment>
    )
}

Layout.defaultProps = {
    title     : "SV | TBT",
    className : null,
}

export default Layout;