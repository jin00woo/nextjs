import React from "react";
import { podcastData } from "@/constants";
import PodcastCard from "@/components/PodcastCard";
// import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Popular Podcasts</h1>
        <div className="podcast_grid">
          {podcastData.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              imgUrl={podcast.imgURL}
              title={podcast.title}
              description={podcast.description}
              podcastId={podcast.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
