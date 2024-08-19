import Layout from "@/components/layout/Layout"
import Download5 from "@/components/sections/Download5"
import Faqs2 from "@/components/sections/Faqs2"
import Feature2_3 from "@/components/sections/Feature2_3"
import Features5_2 from "@/components/sections/Features5_2"
import Hero6 from "@/components/sections/Hero6"
import Info12_3 from "@/components/sections/Info12_3"
import Info1_4 from "@/components/sections/Info1_4"
import Info5_2 from "@/components/sections/Info5_2"
import Media1_3 from "@/components/sections/Media1_3"
import Newsletter2 from "@/components/sections/Newsletter2"
import Pricing1 from "@/components/sections/Pricing1"
import Process1_2 from "@/components/sections/Process1_2"
import Reviews3 from "@/components/sections/Reviews3"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home6() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerLight>
                <Hero6 />
                <Feature2_3 />
                <Info1_4 />
                <Statistic1 />
                <Process1_2 />
                <Info5_2 />
                <Info12_3 />
                <Features5_2 />
                <Reviews3 />
                <Pricing1 />
                <Media1_3 />
                <Download5 title={"Plan your marketing strategy with NextApp"} />
                <Faqs2 />
                <Newsletter2 />
            </Layout>
        </>
    )
}