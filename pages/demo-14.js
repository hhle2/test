import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Download4 from "@/components/sections/Download4"
import Faqs2 from "@/components/sections/Faqs2"
import Feature2_10 from "@/components/sections/Feature2_10"
import Hero14 from "@/components/sections/Hero14"
import Info10_9 from "@/components/sections/Info10_9"
import Info1_9 from "@/components/sections/Info1_9"
import Info3 from "@/components/sections/Info3"
import Info9_2 from "@/components/sections/Info9_2"
import Media1_6 from "@/components/sections/Media1_6"
import Pricing1 from "@/components/sections/Pricing1"
import Reviews2 from "@/components/sections/Reviews2"
import Screens1 from "@/components/sections/Screens1"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home14() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={5} headerLight>
                <Hero14 />
                <Feature2_10 />
                <Info1_9 />
                <Info3 />
                <Statistic1 />
                <Screens1 />
                <Reviews2 />
                <Info10_9 />
                <Pricing1 />
                <Info9_2 />
                <Media1_6 />
                <Faqs2 />
                <Blog1 />
                <Download4 title={"Chat with your friends easily with NextApp"} img={2} />
            </Layout>
        </>
    )
}