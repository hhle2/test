import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Contacts1 from "@/components/sections/Contacts1"
import Download1 from "@/components/sections/Download1"
import Faqs1 from "@/components/sections/Faqs1"
import Feature2_8 from "@/components/sections/Feature2_8"
import Features2 from "@/components/sections/Features2"
import Hero12 from "@/components/sections/Hero12"
import Info1 from "@/components/sections/Info1"
import Info10 from "@/components/sections/Info10"
import Info10_8 from "@/components/sections/Info10_8"
import Info1_7 from "@/components/sections/Info1_7"
import Info5 from "@/components/sections/Info5"
import Info5_6 from "@/components/sections/Info5_6"
import Info8 from "@/components/sections/Info8"
import Info8_3 from "@/components/sections/Info8_3"
import Media2 from "@/components/sections/Media2"
import Pricing2 from "@/components/sections/Pricing2"
import Process2 from "@/components/sections/Process2"
import Process2_2 from "@/components/sections/Process2_2"
import Reviews1 from "@/components/sections/Reviews1"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home12() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>

                <Hero12 />
                <Feature2_8 />
                <Info5_6 />
                <Process2_2 />
                <Statistic1 />
                <Info10_8 />
                <Reviews1 />
                <Info1_7 />
                <Info8_3 />
                <Media2 />
                <Pricing2 />
                <Faqs1 />
                <Download1 cls="bg-image"/>
                <Blog1 />
                <Contacts1 />
            </Layout>
        </>
    )
}