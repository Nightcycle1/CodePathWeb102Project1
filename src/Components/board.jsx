// Board.jsx
import React from "react";
import Card from "./card";

const Board = () => {
  const resources = [
    {
      title: "Stone Mountain Park",
      description: "Park, Hiking, Attractions, Events, and more.",
      link: "https://stonemountainpark.com/",
      image: "https://bunny-wp-pullzone-2v7xwnunut.b-cdn.net/wp-content/themes/hive/src/img/logo-header-2x.png", // Add image URL
    },
    {
      title: "Netherworld Haunted House",
      description: "Scary haunted house attraction in Stone Mountain.",
      link: "https://www.fearworld.com/",
      image: "https://www.fearworld.com/img/logo.png", 
    },
    {
      title: "Stone Mountain Village",
      description: "Historic village with shops, restaurants, and more.",
      link: "https://www.stonemountainmanor.com/stone-mountain-village",
      image: "https://images.squarespace-cdn.com/content/v1/562043b3e4b011a9a3a63073/1552599680967-OV1PJSD403FQ8GKEK0ZG/stone-mountain-village.jpg?format=2500w", 
    },
    {
      title: "Hairston Park",
      description: "Park with playgrounds, and lake.",
      link: "https://friendsofhairstonpark.org",
      image: "https://friendsofhairstonpark.org/wp-content/uploads/2022/08/cropped-friends-of-hairston-park-logo-for-web.png?w=1000&h=288", 
    },
    {
      title: "NCG Cinema",
      description: "Movie theater",
      link: "https://www.ncgmovies.com/movie-theater/stonemountain",
      image: "https://lh5.googleusercontent.com/p/AF1QipO_EH5JtUVe2-9LsPsvMyJHQrZN1TUMLqu7vo3E", 
    },
    {
      title: "Stone Mountain - Sue Kellog Public Library",
      description: "Library",
      link: "https://dekalblibrary.org/locations/ston",
      image: "https://dekalblibrary.org/images/branches/ston-ext-510x310.png", 
    }, 
    {
      title: "Wade Walker Park",
      description: "TennisStreet hockey, baseball, softball, football,soccer, multi-use field, tennis courts, swimming pool, playground, picnic area, lake and trails",
      link: "https://www.dekalbcountyga.gov/parks/stone-mountain",
      image: "https://lh5.googleusercontent.com/p/AF1QipOWCycDOYOwk8V6S7E4TEFPvRpHUiEIBavcBoqu=w408-h306-k-no",
    }, 
    {
      title: "Pine Lake",
      description: "Lake, Park, and Beach",
      link: "https://pinelakega.sophicity.com/ThingsToDoinPineLike.aspx",
      image: "https://lh5.googleusercontent.com/p/AF1QipO5qFOCP-s_ZTpJzAW63OzTGklZo-GVmOcv7bv_=w408-h310-k-no",
    }, 
    {
      title: "Georgia State University Perimeter College - Clarkston Campus",
      description: "College",
      link: "https://perimeter.gsu.edu/",
      image: "https://lh5.googleusercontent.com/p/AF1QipOTMvqNIzO3qp9mGSRKxJ0r0y7W6p7ytL9X6Umi=w408-h306-k-no"
    },
    {
      title: "Georgia Piedmont Technical College",
      description: "College",
      link: "https://www.gptc.edu/",
      image: "https://lh5.googleusercontent.com/p/AF1QipMyzlBXIN9Ok6bu_15QCZA28Y35iDsKt6L8cJ15=w408-h272-k-no"
    }

  ];

  return (
    <div className="board">
      {resources.map((resource, index) => (
        <Card
          key={index}
          title={resource.title}
          description={resource.description}
          link={resource.link}
          image={resource.image}
        />
      ))}
    </div>
  );
};

export default Board;