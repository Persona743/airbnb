import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                img="swimmer.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
            {/* <Card
                img="/assets/images/swimmer.png"
                rating="5.0"
                reviewCount={30}
                country="USA"
                title="Learn wedding photography"
                price={125}
            />
            <Card
                img="/assets/images/swimmer.png"
                rating="4.8"
                reviewCount={2}
                country="USA"
                title="Group Mountain Biking"
                price={50}
            /> */}
        </div>
    );
}
