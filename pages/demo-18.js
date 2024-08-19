import Layout from "@/components/layout/Layout"
import Download1 from "@/components/sections/Download1"
import Faqs2 from "@/components/sections/Faqs2"
import Feature2_13 from "@/components/sections/Feature2_13"
import Hero18 from "@/components/sections/Hero18"
import Info12_8 from "@/components/sections/Info12_8"
import Info1_10 from "@/components/sections/Info1_10"
import Info5_9 from "@/components/sections/Info5_9"
import Info9_4 from "@/components/sections/Info9_4"
import Media2 from "@/components/sections/Media2"
import Moreapps from "@/components/sections/Moreapps"
import Newsletter1 from "@/components/sections/Newsletter1"
import Reviews3 from "@/components/sections/Reviews3"
import Statistic1 from "@/components/sections/Statistic1"
import Statistic2 from "@/components/sections/Statistic2"
export default function Home18() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={5} headerLight>

                <Hero18 />
                <Media2 />
                <Info1_10 />
                <Info12_8 />
                <Info5_9 />
                <Info9_4 />
                <Feature2_13 />
                <Statistic1 />
                <Reviews3 />
                <Statistic2 />
                <Faqs2 />
                <Download1 cls="bg-image"/>
                <Moreapps />
                <Newsletter1 />
            </Layout>
        </>
    )
}