import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../redux/customise/customiseActions";
import { PageRoutes } from "./routes";
import VerticalLayout from "../layout/VerticalLayout";
import HorizontalLayout from "../layout/HorizontalLayout";
import FullLayout from "../layout/FullLayout";
import Home from "../view/dashboard";
import LoginScreen from "../view/authentication/login";
import Error404 from "../view/pages/errors/404";

export default function Router() {
    const customise = useSelector(state => state.customise);
    const dispatch = useDispatch();

    useEffect(() => {
        document.querySelector("body").classList.add(customise.theme);
        dispatch(theme(customise.theme));
    }, []);

    useEffect(() => {
        if (customise.direction == "ltr") {
            document.querySelector("html").setAttribute("dir", "ltr");
        }
        else if (customise.direction == "rtl") {
            document.querySelector("html").setAttribute("dir", "rtl");
        };
    }, []);

    const DefaultLayout = customise.layout;
    const Layouts = { VerticalLayout, HorizontalLayout, FullLayout };

    const LayoutRoutesAndPaths = (layout) => {
        const LayoutRoutes = [];
        const LayoutPaths = [];
        if (PageRoutes) {
            PageRoutes.filter(route => (route?.layout === layout) && (
                LayoutRoutes.push(route),
                LayoutPaths.push(route?.path)
            ));
        };

        return { LayoutRoutes, LayoutPaths };
    };

    const ResolveRoutes = () => {
        return Object.keys(Layouts).map((layout, index) => {
            const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);

            let LayoutTag;
            if (DefaultLayout === "HorizontalLayout") {
                LayoutTag = layout === "VerticalLayout" ? Layouts["HorizontalLayout"] : Layouts[layout];
            }
            else {
                LayoutTag = Layouts[layout];
            };

            return (
                <Route key={index} path={LayoutPaths} element={<LayoutTag />}>
                    {LayoutRoutes?.map((route) => (
                        <Route key={route.path} path={route.path}
                            element={<Suspense fallback={null}>
                                {route.layout === "FullLayout" ? (<route.component />)
                                    : (<motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", duration: 0.2, delay: 0.2 }}
                                    >
                                        <route.component />
                                    </motion.div>)}
                            </Suspense>}
                        />))}
                </Route>);
        });
    };

    return (
        <Routes>
            {/* {ResolveRoutes()} */}
            {/* Home Page */}
            <Route path="/" element={DefaultLayout === "HorizontalLayout" ?
                (<Layouts.HorizontalLayout>
                    <Home />
                </Layouts.HorizontalLayout>)
                : (
                    <Layouts.VerticalLayout>
                        <Home />
                    </Layouts.VerticalLayout>)}
            />
            {/* NotFound Page */}
            {/* <Route path="*" element={<Error404 />} /> */}
            <Route path="*" element={<LoginScreen />} />
        </Routes>
    );
};