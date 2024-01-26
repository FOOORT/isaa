import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import DetailContainer from "@/components/home/detailContainer";
import ExperienceDummy from "@/components/static/experience";
import AboutDummy from "@/components/static/about";
import Works from "@/components/home/projects";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen">
        <Hero />
      </div>
      <About
        title="About"
        body="A visual designer - with skills that havent been replaced by A.I (yet)
          - making good shit only if the paycheck is equally good."
        masked="Im a selectively skilled product designer with strong
          focus on producing high quality & impactful digital experience."
      />
      <DetailContainer datas={AboutDummy} />
      <About
        title="Experience"
        body="Only 7 years of actively producing Cool Shit. Other years was messing around & Navigate throught my career"
        masked="Almost Decade of Experience in interactive design and working with some of Talented peaple in business"
      />
      <DetailContainer datas={ExperienceDummy} />
      <About
        title="Works"
        body="I was working with innovative industry and help them build their top notch products"
        masked="I was only small part of large team. They probabily have no idea that I Exist"
      />
      <Works />
    </div>
  );
};

export default Home;
