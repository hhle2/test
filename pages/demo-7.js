import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Download5 from "@/components/sections/Download5"
import Faqs2 from "@/components/sections/Faqs2"
import Feature2_4 from "@/components/sections/Feature2_4"
import Hero7 from "@/components/sections/Hero7"
import Info1 from "@/components/sections/Info1"
import Info10 from "@/components/sections/Info10"
import Info10_4 from "@/components/sections/Info10_4"
import Info1_5 from "@/components/sections/Info1_5"
import Info4 from "@/components/sections/Info4"
import Info4_1 from "@/components/sections/Info4_1"
import Info9 from "@/components/sections/Info9"
import Info9_1 from "@/components/sections/Info9_1"
import Media1 from "@/components/sections/Media1"
import Media1_4 from "@/components/sections/Media1_4"
import Newsletter2 from "@/components/sections/Newsletter2"
import Process3 from "@/components/sections/Process3"
import Reviews2 from "@/components/sections/Reviews2"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home7() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <Hero7 />
                <Feature2_4 />
                <Info1_5 />
                <Info4_1 />
                <Process3 />
                <Info10_4 />
                <Statistic1 />
                <Info9_1 />
                <Media1_4 />
                <Reviews2 />
                <Faqs2 />
                <Download5 title={"Manage your time, meetings, events and tasks with NextApp"} />
                <Blog1 />
                <Newsletter2 />
            </Layout>
        </>
    )
}