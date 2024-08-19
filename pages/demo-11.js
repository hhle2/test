import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Download4 from "@/components/sections/Download4"
import Faqs1 from "@/components/sections/Faqs1"
import Feature2_7 from "@/components/sections/Feature2_7"
import Hero11 from "@/components/sections/Hero11"
import Info10 from "@/components/sections/Info10"
import Info10_7 from "@/components/sections/Info10_7"
import Info12 from "@/components/sections/Info12"
import Info12_5 from "@/components/sections/Info12_5"
import Info5 from "@/components/sections/Info5"
import Info5_5 from "@/components/sections/Info5_5"
import Info8 from "@/components/sections/Info8"
import Info8_2 from "@/components/sections/Info8_2"
import Media2 from "@/components/sections/Media2"
import Moreapps from "@/components/sections/Moreapps"
import Newsletter1 from "@/components/sections/Newsletter1"
import Pricing1 from "@/components/sections/Pricing1"
import Process1 from "@/components/sections/Process1"
import Process1_3 from "@/components/sections/Process1_3"
import Reviews3 from "@/components/sections/Reviews3"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home11() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>

                <Hero11 />
                <Feature2_7 />
                <Info5_5 />
                <Info12_5 />
                <Statistic1 />
                <Process1_3 />
                <Reviews3 />
                <Info10_7 />
                <Pricing1 />
                <Info8_2 />
                <Media2 />
                <Faqs1 />
                <Blog1 />
                <Download4 title={"Work smarter with powerful automation"} img={2} />
                <Moreapps />
                <Newsletter1 />
            </Layout>
        </>
    )
}