import React from "react";
import IntroductionCard from "./components/molecules/introductionCard";
import FooterCard from "./components/molecules/footerCard";
import './App.css';

const App = () => {
    return (
        <main className="App">
            <header>
                <h1 className="App--title">Super Tracing</h1>
                <h6 className="App--kenzie">Kenzie Academy Brasil</h6>
            </header>
            <section className="App--introduction">
                <IntroductionCard />
                <footer className="App--information">
                    <FooterCard />
                </footer>
            </section>

        </main>
    );
}

export default App;
