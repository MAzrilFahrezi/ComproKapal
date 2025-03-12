import ImageSlider from './ImageSlider';
import AboutCompany from './AboutCompany';
import Advantages from './Advantages';
import Partners from './Partners';

export default function Home() {
    return (
        <div className="space-y-16">
            <ImageSlider />
            <AboutCompany />
            <Advantages />
            <Partners />
        </div>
    );
}