import Layout from "@/components/layout/Layout"
import Download4 from "@/components/sections/Download4"
import Faqs1 from "@/components/sections/Faqs1"
import Feature2_1 from "@/components/sections/Feature2_1"
import Hero1 from "@/components/sections/Hero1"
import Info11 from "@/components/sections/Info11"
import Info11_1 from "@/components/sections/Info11_1"
import Info1_1 from "@/components/sections/Info1_1"
import Info2_1 from "@/components/sections/Info2_1"
import Info6_1 from "@/components/sections/Info6_1"
import Moreapps from "@/components/sections/Moreapps"
import Newsletter1 from "@/components/sections/Newsletter1"
import Pricing1 from "@/components/sections/Pricing1"
import Process3 from "@/components/sections/Process3"
import Reviews3 from "@/components/sections/Reviews3"
import Screens1 from "@/components/sections/Screens1"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home1() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>

                <Hero1 />
                <Info2_1 />
                <Info6_1 />
                <Feature2_1 />
                <Statistic1 />
                <Info1_1 />
                <Process3 />
                <Info11_1 />
                <Screens1 />
                <Reviews3 />
                <Pricing1 />
                <Faqs1 />
                <Download4 title={"Post your photos anywhere and see it everywhere"} img={1} />
                <Moreapps />
                <Newsletter1 cls="bg-lightgrey bg-map"/>
            </Layout>
        </>
    )
}