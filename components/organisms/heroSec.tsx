import Image from "next/image"
import punch from "@/public/assets/images/punchpic.jpg"
const HeroSection: React.FC = () => {

  return (
    <>
       <section className="w-full max-w-full">
                <Image
                    src={punch}
                    alt="Hero Image"
                    style={{ width: '100%', height: '730px', transition: 'filter 0.5s' }}
                />
                </section>
    </>
  )
}

export default HeroSection;