import Services from './Services';
import Stats from './Stats';
import Process from './Process';
import Advantages from './Advantages';

export default function Home() {
    return (
        <div>
            <Services />
            <Stats />
            <Process />
            {/* <Advantages /> */}
        </div>
    );
}