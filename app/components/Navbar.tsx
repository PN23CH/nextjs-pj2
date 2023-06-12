import React from "react";
import Link from "next/link";
import {
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaTwitch,
  FaSteam,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            P N C H
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="http://www.youtube.com/@ppeanutbutterbeer"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="http://www.twitter.com\pn23ch"
            target="_blank"
          >
            <FaTwitter />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/PN23CH"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="http://www.twitch.tv/pn_ch"
            target="_blank"
          >
            <FaTwitch />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="http://www.steamcommunity.com/id/photographicer"
            target="_blank"
          >
            <FaSteam />
          </Link>
        </div>
      </div>
    </nav>
  );
}
