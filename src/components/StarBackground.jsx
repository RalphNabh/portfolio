import { GitPullRequestArrowIcon } from "lucide-react";
import { useEffect, useState } from "react";

//each star will have: an id, size, x, y, opacity, animationDration
//same with meteors but will have delay insteaed of opacity 
export const StarBackground = () => {
    const [stars, setStars] = useState([]); 
    const [meteors, setMeteors] = useState([]); 

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize);

        return() => window.removeEventListener("resize", handleResize);
    }, []); //empty depency array so it doesnt run forever and break my computer
    

    const generateStars =() => { //i want to generate stars depeding on window size so if smaller window less stars 
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 6000 );//number of stars dynamically adjusted to size of window 

        const newStars = [];

        for(let i=0; i<numberOfStars; i++){ //go through each star and assign 
            newStars.push({ //push an object with..
                id:i, //id will be index
                size: Math.random() *3+1, //random size and will generate stars between 1 and 4 pixels
                x: Math.random() * 100, //100 is a ppercentage so it will place it anywhere across the window from 0% to 100%
                y: Math.random() * 100, 
                opacity: Math.random() * 0.5 + 0.5, //random is a float from 0-1 *0.5 scales it to 0-0.5 then +0.5 scales it 0.5-1 opacity so half visible to full visible
                animationDuration: Math.random() * 4 +2, //some will start pulsating faster then others 
            });
        }

        setStars(newStars);
    };

    const generateMeteors =() => { 
        const numberOfMeteors = 3 //ill pick 5 meteors looks best 
        const newMeteors = [];

        for(let i=0; i<numberOfMeteors; i++){ //go through each meteor and assign 
            newMeteors.push({ //push an object with..
                id:i, //id will be index
                size: Math.random() *2+1, //random size and will generate stars between 1 and 4 pixels
                x: Math.random() * 100, //100 is a ppercentage so it will place it anywhere across the window from 0% to 100%
                y: Math.random() * 100, 
                delay: Math.random() *20, //0-15s delay
                animationDuration: Math.random() * 3 + 3, //some will start pulsating faster then others 
            });
        }

        setMeteors(newMeteors);
    };

    return(
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div 
                key={star.id} 
                className="star animate-pulse-subtle"  
                style={{
                width: star.size + "px", 
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity ,
                animationDuration: star.animationDuration + "s",
            }}
            /> //self closing div in it we will have a key so star.id and a class star which we defined in our index.css
        ))}

        {meteors.map((meteor) => ( //loop through meteors and get meteor for each of them
            <div 
                key={meteor.id} 
                className="meteor animate-meteor" //stylinng from css  
                style={{
                width: meteor.size *50 + "px", //need to multiply the size for css effects to show (took me 3h to figure out the problem)
                height: meteor.size *2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay ,
                animationDuration: meteor.animationDuration + "s",
            }}
            /> //self closing div in it we will have a key so star.id and a class star which we defined in our index.css
        ))}
    </div> //the way i want to render the star is by having a list that will keep track of stars
    );
};