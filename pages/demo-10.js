import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Contacts1 from "@/components/sections/Contacts1"
import Download4 from "@/components/sections/Download4"
import Faqs2 from "@/components/sections/Faqs2"
import Feature2_6 from "@/components/sections/Feature2_6"
import Features4 from "@/components/sections/Features4"
import Hero10 from "@/components/sections/Hero10"
import Info10 from "@/components/sections/Info10"
import Info10_6 from "@/components/sections/Info10_6"
import Info11 from "@/components/sections/Info11"
import Info11_6 from "@/components/sections/Info11_6"
import Info12 from "@/components/sections/Info12"
import Info12_4 from "@/components/sections/Info12_4"
import Info4 from "@/components/sections/Info4"
import Info4_2 from "@/components/sections/Info4_2"
import Info5 from "@/components/sections/Info5"
import Info5_4 from "@/components/sections/Info5_4"
import Languages1 from "@/components/sections/Languages1"
import Media2 from "@/components/sections/Media2"
import Reviews1 from "@/components/sections/Reviews1"
import Screens1 from "@/components/sections/Screens1"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home10() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={5}>

                <Hero10 />
                <Media2 />
                <Info5_4 />
                <Info12_4 />
                <Features4 />
                <Info10_6 />
                <Screens1 />
                <Feature2_6 />
                <Statistic1 />
                <Info4_2 />
                <Reviews1 />
                <Info11_6 />
                <Faqs2 />
                <Languages1 />
                <Download4 title={"Plan your outdoors adventures easily"} img={2} />
                <Blog1 />
                <Contacts1 />
            </Layout>
        </>
    )
}