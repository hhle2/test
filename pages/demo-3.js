import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Download1 from "@/components/sections/Download1"
import Faqs2 from "@/components/sections/Faqs2"
import Features1 from "@/components/sections/Features1"
import Features5_1 from "@/components/sections/Features5_1"
import Hero3 from "@/components/sections/Hero3"
import Info10_1 from "@/components/sections/Info10_1"
import Info12_1 from "@/components/sections/Info12_1"
import Info2_3 from "@/components/sections/Info2_3"
import Info5_1 from "@/components/sections/Info5_1"
import Languages2_2 from "@/components/sections/Languages2_2"
import Media1_1 from "@/components/sections/Media1_1"
import Pricing1 from "@/components/sections/Pricing1"
import Reviews3 from "@/components/sections/Reviews3"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home3() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerLight>
                <Hero3 />
                <Features1 />
                <Info5_1 />
                <Info10_1 />
                <Statistic1 />
                <Info2_3 />
                <Info12_1 />
                <Reviews3 />
                <Features5_1 />
                <Languages2_2 />
                <Pricing1 />
                <Faqs2 />
                <Download1 cls="bg-image"/>
                <Media1_1 />
                <Blog1 cls="bg-lightgrey"/>
            </Layout>
        </>
    )
}