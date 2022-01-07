import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import classes from "./componentStyles";
import ILayout from "../interfaces/ILayout";

const Layout = ({ children, title }: ILayout) => {

    //Objeto con las clases del componente Layout
    const { classesLayout } = classes;

    //Para definir nombre de pestaña
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