import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Download1 from "@/components/sections/Download1"
import Faqs1 from "@/components/sections/Faqs1"
import Feature2_14 from "@/components/sections/Feature2_14"
import Hero19 from "@/components/sections/Hero19"
import Info10_13 from "@/components/sections/Info10_13"
import Info12_9 from "@/components/sections/Info12_9"
import Info1_11 from "@/components/sections/Info1_11"
import Info2_10 from "@/components/sections/Info2_10"
import Info4_5 from "@/components/sections/Info4_5"
import Info8_5 from "@/components/sections/Info8_5"
import Languages1 from "@/components/sections/Languages1"
import Media2 from "@/components/sections/Media2"
import Moreapps from "@/components/sections/Moreapps"
import Newsletter1 from "@/components/sections/Newsletter1"
import Pricing2 from "@/components/sections/Pricing2"
import Reviews1 from "@/components/sections/Reviews1"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home19() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={5} headerLight>
                <Hero19 />
                <Feature2_14 />
                <Info12_9 />
                <Info4_5 />
                <Statistic1 />
                <Info10_13 />
                <Pricing2 />
                <Info1_11 />
                <Info2_10 />
                <Info8_5 />
                <Media2 />
                <Reviews1 />
                <Faqs1 />
                <Languages1 />
                <Blog1 />
                <Download1 cls="bg-image"/>
                <Moreapps />
                <Newsletter1 />
            </Layout>
        </>
    )
}