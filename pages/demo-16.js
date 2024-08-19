import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Contacts1 from "@/components/sections/Contacts1"
import Download1 from "@/components/sections/Download1"
import Faqs2 from "@/components/sections/Faqs2"
import Features4 from "@/components/sections/Features4"
import Hero16 from "@/components/sections/Hero16"
import Info10_11 from "@/components/sections/Info10_11"
import Info12_7 from "@/components/sections/Info12_7"
import Info2_9 from "@/components/sections/Info2_9"
import Info4_4 from "@/components/sections/Info4_4"
import Info9_3 from "@/components/sections/Info9_3"
import Languages2_5 from "@/components/sections/Languages2_5"
import Media1_7 from "@/components/sections/Media1_7"
import Pricing1 from "@/components/sections/Pricing1"
import Reviews3 from "@/components/sections/Reviews3"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home16() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={5}>
                <Hero16 />
                <Info2_9 />
                <Info12_7 />
                <Info4_4 />
                <Statistic1 />
                <Info10_11 />
                <Features4 />
                <Reviews3 />
                <Pricing1 />
                <Info9_3 />
                <Media1_7 />
                <Languages2_5 />
                <Faqs2 />
                <Download1 cls="bg-image"/>
                <Blog1 />
                <Contacts1 />
            </Layout>
        </>
    )
}