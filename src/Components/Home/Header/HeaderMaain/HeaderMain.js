import React from "react";

export const HeaderMain = () => {
  return (
    <div className="row pb-5">
      <div className="col-md-6 text-white">
        <h1>BEST FITNESS STUDIO IN TOWN</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a
          maxime temporibus dolor, fuga tempore iusto, culpa consectetur
          quibusdam, deserunt neque tempora quo tenetur commodi cumque repellat.
          Temporibus, commodi voluptate!
        </p>
        <button style={{ width: "150px" }} className="btn btn-warning mt-5">
          JOIN US
        </button>
      </div>
      <div className="col-md-6 text-center pt-5">
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/5CuWcIXy5TQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
