import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Contacts1 from "@/components/sections/Contacts1"
import Download1 from "@/components/sections/Download1"
import Faqs1 from "@/components/sections/Faqs1"
import Feature2_5 from "@/components/sections/Feature2_5"
import Hero8 from "@/components/sections/Hero8"
import Info10_5 from "@/components/sections/Info10_5"
import Info11_4 from "@/components/sections/Info11_4"
import Info2_6 from "@/components/sections/Info2_6"
import Info5_3 from "@/components/sections/Info5_3"
import Info8_1 from "@/components/sections/Info8_1"
import Languages2_3 from "@/components/sections/Languages2_3"
import Media2 from "@/components/sections/Media2"
import Pricing2 from "@/components/sections/Pricing2"
import Process2_1 from "@/components/sections/Process2_1"
import Reviews3 from "@/components/sections/Reviews3"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home8() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerLight>

                <Hero8 />
                <Feature2_5 />
                <Info5_3 />
                <Info10_5 />
                <Process2_1 />
                <Info2_6 />
                <Info8_1 />
                <Media2 />
                <Reviews3 />
                <Languages2_3 />
                <Statistic1 />
                <Info11_4 />
                <Pricing2 />
                <Faqs1 />
                <Download1 cls="bg-image"/>
                <Blog1 />
                <Contacts1 />
            </Layout>
        </>
    )
}