import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Contacts1 from "@/components/sections/Contacts1"
import Download4 from "@/components/sections/Download4"
import Faqs2 from "@/components/sections/Faqs2"
import Hero4 from "@/components/sections/Hero4"
import Info1 from "@/components/sections/Info1"
import Info10 from "@/components/sections/Info10"
import Info10_2 from "@/components/sections/Info10_2"
import Info11 from "@/components/sections/Info11"
import Info11_3 from "@/components/sections/Info11_3"
import Info1_3 from "@/components/sections/Info1_3"
import Info2 from "@/components/sections/Info2"
import Info2_4 from "@/components/sections/Info2_4"
import Info3 from "@/components/sections/Info3"
import Media1 from "@/components/sections/Media1"
import Media1_2 from "@/components/sections/Media1_2"
import Pricing1 from "@/components/sections/Pricing1"
import Process1 from "@/components/sections/Process1"
import Process1_1 from "@/components/sections/Process1_1"
import Reviews2 from "@/components/sections/Reviews2"
import Screens1 from "@/components/sections/Screens1"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home4() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Hero4 />
                <Info1_3 />
                <Info2_4 />
                <Process1_1 />
                <Info10_2 />
                <Screens1 />
                <Info3 />
                <Reviews2 />
                <Media1_2 />
                <Statistic1 />
                <Info11_3 />
                <Pricing1 />
                <Faqs2 />
                <Download4  title={"Manage all your media files using NextApp"} img={2}/>
                <Blog1 />
                <Contacts1 />
            </Layout>
        </>
    )
}