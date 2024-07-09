import Trainer1 from "../assets/circular1.webp";
import Trainer2 from "../assets/circular2.webp";
import Trainer3 from "../assets/circular3.webp";
import Trainer4 from "../assets/circular4.webp";

function About() {
  const trainers = [
    {
      name: "Rodney Yee",
      img: Trainer1,
    },
    {
      name: "Colleen Saidman",
      img: Trainer2,
    },
    {
      name: "Kristin McGee",
      img: Trainer3,
    },
    {
      name: "Seane Corn",
      img: Trainer4,
    },
  ];

  return (
    <>
    <h1 className="text-5xl tracking-wide p-10">About Us</h1>
    <h2 className="text-center tracking-wide text-slate-700">Our Yoga Trainers</h2>
    <div className="flex justify-center items-center flex-wrap w-100 h-96">
      {trainers.map((trainer, index) => (
        <div key={index} className="flex flex-col items-center m-4">
          <img
            src={trainer.img}
            alt={trainer.name}
            className="rounded-full w-32 h-32 object-cover mb-2"
          />
          <p className="text-center text-slate-800">{trainer.name}</p>
        </div>
      ))}
    </div>
  </>
  );
}

export default About;
