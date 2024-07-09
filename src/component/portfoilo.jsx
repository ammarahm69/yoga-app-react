import Cards from "./cards";
function Portfolio() {
  return (
    <div className="portfolio p-10 col-lg-12 col-12 col-md-12 col-sm-12">
      <h1 className="text-6xl font-bold leading-relaxed text-slate-600 tracking-wider">
        Thousands of Yoga Practices to Inspire and Uplift
      </h1>
      <p className="text-slate-700 text-3xl leading-relaxed mt-3 tracking-wider   ">
        High-quality on demand yoga, meditation and breathwork classes to meet
        you where you are, on your schedule.
      </p>


      {/* {Cards} */}

      <h2 className="mt-20 font-bold text-slate-600 tracking-wider">Yoga</h2>
      <div>
        <Cards/>
      </div>
    </div>
  );
}
export default Portfolio;
