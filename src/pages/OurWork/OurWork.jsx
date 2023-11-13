import React, { useContext } from "react";
import Title from "../../component/Title/Title";
import { DarkModeContext } from "../../Provider/DarkMoodProvider";
import bgImage from "../../assets/bg/work.jpg";
import { Fade } from "react-awesome-reveal";

const OurWork = () => {
  const { darkMood } = useContext(DarkModeContext);

  return (
    <div className="container lg:mt-20 w-11/12">
      <div
        className="space-y-4 text-center lg:flex w-full"
        style={darkMood ? { backgroundImage: `url(${bgImage})` } : {}}
      >
        <div className="w-full lg:w-6/12 space-y-2 lg:space-y-0 grid grid-cols-2 lg:grid-cols-2 lg:gap-6 gap-3 gap-y-0 pb-5 mt-10">
          <img
            className="w-full h-72 rounded-lg "
            src="https://i.ibb.co/B6M38qp/zach-vessels-Oauo77-PKCoc-unsplash.jpg"
            alt=""
          />
          <img
            className="w-full h-72 rounded-lg "
            src="https://i.ibb.co/FnhTynH/alice-donovan-rouse-z9-F-y-K4-Nmf8-unsplash.jpg"
            alt=""
          />
          <img
            className="w-full h-72 rounded-lg "
            src="https://i.ibb.co/6r5TCfv/matt-bero-P4e2w7s-Dah-Q-unsplash.jpg"
            alt=""
          />
          <img
            className="w-full h-72 rounded-lg "
            src="https://i.ibb.co/Rp3JTV2/c-ma-7bc0i0t4p-Ro-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="w-full lg:w-6/12 lg:pl-10 text-justify font-medium text-base-400 -mt-10 ">
          <Fade>
            <Title
              heading={"Welcome to our Photography Summer School!"}
              subheading={"Let's start exploring Life through Lens"}
            ></Title>
          </Fade>
          <Fade cascade>
            <p>
              We are passionate about capturing moments and exploring the art of
              photography. Our summer program offers a unique opportunity for
              photographers of all levels to enhance their skills, learn new
              techniques, and unleash their creativity in a supportive and
              inspiring environment.
            </p>
          </Fade>
          <Fade cascade>
            <p>
              At our Photography Summer School, you will be guided by
              experienced instructors who are professional photographers
              themselves. They will provide comprehensive instruction on various
              aspects of photography, including composition, lighting, editing,
              and more. Whether you are a beginner taking your first steps or an
              experienced photographer looking to refine your skills, our
              courses are designed to cater to different skill levels and help
              you grow as a photographer.
            </p>
          </Fade>
          {/* <Fade cascade >
						<p>
							During the summer school, you will have access to state-of-the-art
							photography equipment and fully equipped studios. This will allow
							you to experiment with different genres and styles, expanding your
							creative horizons. Additionally, our program includes hands-on
							workshops, engaging photo walks, and exciting group projects.
							These activities will provide practical opportunities for you to
							apply your knowledge and develop a diverse and impressive
							portfolio of stunning photographs.
						</p>
					</Fade> */}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
