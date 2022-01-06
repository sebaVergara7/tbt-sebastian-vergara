import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import classes from "./componentStyles";
import ILayout from "../interfaces/ILayout";



const Layout = ({ children, title }: ILayout) => {

    const { classesLayout } = classes;

    document.title = title

    return (
        <Fragment>
            <Header />
            <div className={classesLayout.childrenDiv}>{children}</div>
            <Footer />
        </Fragment>
    )
}

Layout.defaultProps = {
    title: "SV | TBT",
}

export default Layout;