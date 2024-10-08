import React from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: 'https://opengraph.githubassets.com/1/fardin-developer/TRCATS',
      link: 'https://trcats-front.vercel.app/index.html',
      repo: 'https://github.com/fardin-developer/TRCATS'
    },
    {
      id: 2,
      src: 'https://opengraph.githubassets.com/1/fardin-developer/yt-host',
      link: 'https://teachers-admin-panel.vercel.app/',
      repo: 'https://attendence-taker-with-location.vercel.app/'
    },
    {
      id: 3,
      src: 'https://opengraph.githubassets.com/1/fardin-developer/PlaylistTool',
      link: 'https://github.com/fardin-developer/PlaylistTool',
      repo: 'https://github.com/fardin-developer/yt-host'
    },
    {
      id: 4,
      src: 'https://opengraph.githubassets.com/1/fardin-developer/ISINE-CanteenFront',
      link: 'https://isine-canteen-front.vercel.app/',
      repo: 'https://github.com/fardin-developer/ISINE-CanteenFront'
    },
    {
      id: 5,
      src: 'https://opengraph.githubassets.com/1/fardin-developer/ISINE-Canteen',
      link: 'https://isine-canteen-admin.vercel.app/',
      repo: 'https://github.com/fardin-developer/ISINE-Canteen'
    },
    {
      id: 6,
      src: 'https://opengraph.githubassets.com/1/fardin-developer/chronos',
      link: 'https://github.com/fardin-developer/chronos',
      repo: 'https://api.trcats.co.in/doc/'
    },
    {
      id: 7,
      src: 'https://opengraph.githubassets.com/1/fardin-developer/chronos-frontend',
      link: 'https://github.com/fardin-developer/chronos-frontend',
      repo: 'https://github.com/fardin-developer/chronos-frontend'
    }
  ];
  

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
