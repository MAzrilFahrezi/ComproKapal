import ImageSlider from './ImageSlider';
import AboutCompany from './AboutCompany';
import Services from './Services';
import Advantages from './Advantages';
import Partners from './Partners';
import Features from './Features';

export default function Home() {
    return (
        <div>
            <ImageSlider />
            <AboutCompany />
            <Features />
            <Services />
            <Advantages />
            <Partners />
        </div>
    );
}