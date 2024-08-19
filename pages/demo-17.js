import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Contacts1 from "@/components/sections/Contacts1"
import Download5 from "@/components/sections/Download5"
import Faqs1 from "@/components/sections/Faqs1"
import Feature2_12 from "@/components/sections/Feature2_12"
import Features2 from "@/components/sections/Features2"
import Hero17 from "@/components/sections/Hero17"
import Info10 from "@/components/sections/Info10"
import Info10_12 from "@/components/sections/Info10_12"
import Info3 from "@/components/sections/Info3"
import Info4 from "@/components/sections/Info4"
import Info4_5 from "@/components/sections/Info4_5"
import Info5 from "@/components/sections/Info5"
import Info5_8 from "@/components/sections/Info5_8"
import Info8 from "@/components/sections/Info8"
import Info8_4 from "@/components/sections/Info8_4"
import Media2 from "@/components/sections/Media2"
import Pricing2 from "@/components/sections/Pricing2"
import Reviews1 from "@/components/sections/Reviews1"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home17() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <Hero17 />
                <Feature2_12 />
                <Info5_8 />
                <Info3 />
                <Statistic1 />
                <Info10_12 />
                <Reviews1 />
                <Info4_5 />
                <Info8_4 />
                <Media2 />
                <Pricing2 />
                <Faqs1 />
                <Download5 title={"Getting started takes less than 5 minutes"} />
                <Blog1 />
                <Contacts1 />
            </Layout>
        </>
    )
}