import Header from '~/components/layout/components/Header';
import SideBar from './SideBar';

function DefaulLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaulLayout;
