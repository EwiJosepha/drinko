import Image from "next/image"
import punch from "@/public/assets/images/bg.avif"
import pun from "@/public/assets/images/punchpic.jpg"
const HeroSection: React.FC = () => {

  return (
    <>
      <section className="w-full max-w-full relative pb-10">
        <Image
          src={punch}
          alt="Hero Image"
          style={{ width: '100%', height: '510px', transition: 'filter 0.5s' }}
        />
      </section>


      <section className="absolute bottom-1/3 transform -translate-x-1/2 left-1/2">
        <div className="container mx-auto px-4">
          <h1 className=" bg-white rounded-lg font-extrabold md:text-3xl mb-20 sm:text-3xl md:text-center xs:text-center bg-blue p-10 bg-opacity-60 float-right hover:bg-white ">
            Drinking with Ze Drinko gets you sobber and elucidated
          </h1>
        </div>
      </section>

    </>
  )
}

export default HeroSection;