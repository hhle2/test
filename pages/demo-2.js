import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Download4 from "@/components/sections/Download4"
import Faqs2 from "@/components/sections/Faqs2"
import Feature2_2 from "@/components/sections/Feature2_2"
import Hero2 from "@/components/sections/Hero2"
import Info11_2 from "@/components/sections/Info11_2"
import Info1_2 from "@/components/sections/Info1_2"
import Info2_2 from "@/components/sections/Info2_2"
import Info3 from "@/components/sections/Info3"
import Languages2_1 from "@/components/sections/Languages2_1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Pricing1 from "@/components/sections/Pricing1"
import Process3 from "@/components/sections/Process3"
import Reviews3 from "@/components/sections/Reviews3"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerLight>
                <Hero2 />
                <Feature2_2 />
                <Info1_2 />
                <Info3 />
                <Process3 />
                <Info2_2 />
                <Info11_2 />
                <Reviews3 />
                <Statistic1 />
                <Languages2_1 />
                <Pricing1 />
                <Faqs2 />
                <Download4 title={"Chat with your friends easily with NextApp"} img={2} />
                <Blog1 />
                <Newsletter1 />
            </Layout>
        </>
    )
}