import { Carousel } from "@material-tailwind/react";
import ProjectDisplay from "./ProjectDisplay";

export function CarouselWithContent() {
  return (
    <Carousel className="rounded-none h-[calc(100vh-4rem)] w-screen overflow-hidden">
      <ProjectDisplay
        imageSrc="https://wallpapers.com/images/featured-full/coding-background-9izlympnd0ovmpli.jpg"
        title="Sonar Machine Learning"
        description="Developed a sonar classification system using machine learning
                    algorithms in Python. Utilized Seaborn and Sklearn for model
                    training, with Pandas, Numpy, and Matplotlib for data handling and
                    visualization. Achieved efficient object detection and recognition
                    through comprehensive data analysis and feature extraction."
        languages="Python, JupyterNotebook"
        codeLink="https://github.com/danvluewubley/sonar-machine-learning"
      />
      <ProjectDisplay
        imageSrc="https://wallpapers.com/images/hd/code-programming-symbols-letters-texture-8nlsi3q9gcjh6m98.webp"
        title="Budgeting Made Simple"
        description="A user-friendly application designed to help individuals track
                    their expenses, set budgets, and manage their finances
                    effectively. With features like customizable budget categories,
                    expense tracking, and visual financial insights, users can take
                    control of their spending and work towards their financial goals."
        languages="Python, Flask, SQLite, HTML, CSS, JavaScript"
        codeLink="https://github.com/danvluewubley/hackathon-budget-app"
      />
      <ProjectDisplay
        imageSrc="https://wallpapers.com/images/hd/code-letters-screen-blur-multi-colored-labels-words-text-sw1lfc92pm6v67bh.webp"
        title="Weather App"
        description="A dynamic weather application built with React, providing
                    real-time updates on wind conditions, high and low temperatures,
                    and humidity levels. Stay informed with an intuitive interface
                    that delivers accurate weather forecasts at your fingertips."
        languages="JavaScript, React.js, CSS"
        codeLink="https://github.com/danvluewubley/weather-app-react"
        demoLink="https://weather-app-react-dckm.onrender.com"
      />
      <ProjectDisplay
        imageSrc="https://media.istockphoto.com/id/865457032/vector/abstract-futuristic-cyberspace-with-binary-code-matrix-background-with-digits-well-organized.jpg?s=612x612&w=0&k=20&c=IQcdedY8fn_DMq6nwc5MaHUBe0H0d5DPyibHR8J2usk="
        title="Booklist App"
        description="Organize and track your reading journey with the Booklist App. Easily add your books while keeping tabs on what you've read and what’s next. Share your favorite titles with friends and discover new reads in a user-friendly interface."
        languages="React.js, Tailwind CSS, Express.js, Node.js, PostgreSQL"
        codeLink="https://github.com/danvluewubley/booklist-express"
      />
    </Carousel>
  );
}
