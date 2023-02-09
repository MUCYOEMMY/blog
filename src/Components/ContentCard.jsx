import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../Asset/4.jpeg";

export const ContentCard = () => {
  return (
    <div className="flex flex-col gap-8 items-start w-full xl:flex-row lg:flex-row mt-8 hover:bg-indigo-50 p-6 rounded-xl duration-500">
      <div className="xl:w-1/2 lg:w-3/5">
        <img src={Blog1} alt="" className="rounded-xl xl:w-full lg:w-full" />
      </div>
      <div className="xl:w-1/2 lg:lg:w-2/5 flex flex-col gap-3 ">
        <h1 className="text-slate-900 font-light text-xl xl:text-3xl leading-snug">
          Back At Google Again, Cofounder Sergey Brin Just Filed His First Code
          Request In Years
        </h1>
        <p className="text-xs text-slate-400 xl:text-sm">
          {" "}
          By
          <span className="text-slate-800"> Richard NievaForbes </span>
          Staff and
          <span className="text-slate-800"> Alex Konrad </span>
          Forbes Staff
        </p>
        <h2 className="text-sm text-slate-700 xl:text-sm">
          Largely absent from day-to-day operations since 2019, a code request
          filed last week for Google's artificial intelligence project appears
          to be Brin's first in years.
          <span className="
            hidden
            xs:hidden
            sm:hidden
            md:block
            xl:block
          ">
          FORBES Wall Street’s Most Connected Black
          Woman Has An Ingenious Idea To Narrow The Wealth Gap To boost more
          talented minority executives into the corporate stratosphere, Ariel
          Investments’ Mellody Hobson wants to install them at the top of
          existing businesses—and connect them with the customers and capital to
          succeed.
          </span>
        </h2>
        
        <Link to="/SingleBlog"><button className="btn btn-primary">ViewMore</button></Link>
      </div>
    </div>
  );
};
