import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaulLayout } from './components/layout';
import { Fragment } from 'react';

function App() {
    return (
        <Routers>
            <Routes>
                {publicRoutes.map((route) => {
                    const Page = route.components;
                    let Layout = DefaulLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={route}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Routers>
    );
}

export default App;
