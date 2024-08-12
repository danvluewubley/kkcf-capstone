import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel className="rounded-none h-[calc(100vh-4rem)] w-screen">
      <div className="relative h-full w-full">
        <img
          src="https://wallpapers.com/images/featured-full/coding-background-9izlympnd0ovmpli.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-custom"
            >
              Sonar Machine Learning
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 font-custom"
            >
              Developed a sonar classification system using machine learning
              algorithms in Python. Utilized Seaborn and Sklearn for model
              training, with Pandas, Numpy, and Matplotlib for data handling and
              visualization. Achieved efficient object detection and recognition
              through comprehensive data analysis and feature extraction.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 font-custom font-bold"
            >
              <span className="underline">Languages/Frameworks</span>: Python,
              JupyterNotebook
            </Typography>
            <div className="flex justify-center gap-2">
              <a
                href="https://github.com/danvluewubley/sonar-machine-learning"
                target="_blank"
              >
                <Button size="lg" color="white">
                  View Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://wallpapers.com/images/hd/code-programming-symbols-letters-texture-8nlsi3q9gcjh6m98.webp"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-custom"
            >
              Budgeting Made Simple
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 font-custom"
            >
              A user-friendly application designed to help individuals track
              their expenses, set budgets, and manage their finances
              effectively. With features like customizable budget categories,
              expense tracking, and visual financial insights, users can take
              control of their spending and work towards their financial goals.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 font-custom font-bold"
            >
              <span className="underline">Languages/Frameworks</span>: Python,
              Flask, SQLite, HTML, CSS, JavaScript
            </Typography>
            <div className="flex justify-center gap-2">
              <a
                href="https://github.com/danvluewubley/hackathon-budget-app"
                target="_blank"
              >
                <Button size="lg" color="white">
                  View Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://wallpapers.com/images/hd/code-letters-screen-blur-multi-colored-labels-words-text-sw1lfc92pm6v67bh.webp"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-custom"
            >
              Weather App
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 font-custom"
            >
              A dynamic weather application built with React, providing
              real-time updates on wind conditions, high and low temperatures,
              and humidity levels. Stay informed with an intuitive interface
              that delivers accurate weather forecasts at your fingertips.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 font-custom font-bold"
            >
              <span className="underline">Languages/Frameworks</span>:
              JavaScript, React.js, CSS
            </Typography>
            <div className="flex justify-center gap-2">
              <a
                href="https://github.com/danvluewubley/weather-app-react"
                target="_blank"
              >
                <Button size="lg" color="white">
                  View Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
