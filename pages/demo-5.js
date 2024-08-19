import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Download2 from "@/components/sections/Download2"
import Faqs2 from "@/components/sections/Faqs2"
import Features4 from "@/components/sections/Features4"
import Hero5 from "@/components/sections/Hero5"
import Info10 from "@/components/sections/Info10"
import Info10_3 from "@/components/sections/Info10_3"
import Info12 from "@/components/sections/Info12"
import Info12_2 from "@/components/sections/Info12_2"
import Info2 from "@/components/sections/Info2"
import Info2_5 from "@/components/sections/Info2_5"
import Info3 from "@/components/sections/Info3"
import Moreapps from "@/components/sections/Moreapps"
import Newsletter2 from "@/components/sections/Newsletter2"
import Process3 from "@/components/sections/Process3"
import Reviews3 from "@/components/sections/Reviews3"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home5() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <Hero5 />
                <Info2_5 />
                <Info3 />
                <Process3 />
                <Info10_3 />
                <Features4 />
                <Reviews3 />
                <Statistic1 />
                <Info12_2 />
                <Faqs2 />
                <Blog1 />
                <Download2  style={1}/>
                <Moreapps />
                <Newsletter2 />
            </Layout>
        </>
    )
}