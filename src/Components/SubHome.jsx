import React, { useState, useEffect } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";

export const SubHome = () => {
  const [movies, setMovies] = useState([]);

  const url = `https://pixabay.com/api/?key=31151137-4220319d62fd75cec00d9cc9c&q=yellow+flowers&image_type=photo&pretty=true`;
  useEffect(() => {
    fetch(url)
      .then((imageData) => imageData.json())
      .then((data) => setMovies(data.hits))
      .catch((err) => console.error(err));
  }, []);
  console.log(movies);
  return (
    <div className="h-screen w-full">
      <div className=" flex flex-col mt-10 justify-center items-center w-full">
        <h1 className="text-white font-extrabold text-2xl">Experiment</h1>
        <div className="grid grid-cols-3 gap-5 p-10">
          {movies.map(
            (image) => (
              <div>
                <img src={image.largeImageURL} />
                <div className="flex items-center gap-10 md:gap-20  lg:gap-40 pt-2">
                  <p className="flex text-white gap-2">
                    <AiFillLike className="text-xl text-red-600 " />
                    {image.likes}
                  </p>

                  <p className="text-white flex items-center gap-2">
                    <FaCommentDots />
                    {image.comments}
                  </p>
                </div>
              </div>
            )

            //   <h1 className="text-white">{image.likes}</h1>;
          )}
        </div>
      </div>
    </div>
  );
};
