import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection} from "../components/ProjectSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"


//Home Page
export const Home = () =>{
    return (
    <div className ="min-h-screen bg-background text-foreground overflow-x-hidden"> {/* Min height is the height of screen, also adding all custom style that i created in css index file*/}
    {/* We want to also create custome styling (colours, elements), this is important to add a level of custom. so we can define a version in light and dark mode*/}

        {/* Theme Toggle (dark/light mode) with saved output */}
            <ThemeToggle /> 
        {/* Backround effects (particles and stuff) */}
            <StarBackground />
        {/* NavBar */}
            <NavBar />
        {/* Main */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
    );
};