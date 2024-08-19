import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Contacts1 from "@/components/sections/Contacts1"
import Download3 from "@/components/sections/Download3"
import Download4 from "@/components/sections/Download4"
import Faqs1 from "@/components/sections/Faqs1"
import Features4 from "@/components/sections/Features4"
import Hero9 from "@/components/sections/Hero9"
import Info11 from "@/components/sections/Info11"
import Info11_5 from "@/components/sections/Info11_5"
import Info1_6 from "@/components/sections/Info1_6"
import Info2 from "@/components/sections/Info2"
import Info2_7 from "@/components/sections/Info2_7"
import Info3 from "@/components/sections/Info3"
import Languages2 from "@/components/sections/Languages2"
import Languages2_4 from "@/components/sections/Languages2_4"
import Moreapps from "@/components/sections/Moreapps"
import Reviews2 from "@/components/sections/Reviews2"
import Screens1 from "@/components/sections/Screens1"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home9() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={5}>

                <Hero9 />
                <Info1_6 />
                <Info2_7 />
                <Features4 />
                <Info3 />
                <Statistic1 />
                <Screens1 />
                <Reviews2 />
                <Info11_5 />
                <Download3 />
                <Languages2_4 />
                <Faqs1 />
                <Blog1 />
                <Download4 title={"We keep your personal details up to date"} img={2} />
                <Moreapps />
                <Contacts1 />
            </Layout>
        </>
    )
}