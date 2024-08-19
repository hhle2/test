import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Download5 from "@/components/sections/Download5"
import Feature2_11 from "@/components/sections/Feature2_11"
import Hero15 from "@/components/sections/Hero15"
import Info10 from "@/components/sections/Info10"
import Info10_10 from "@/components/sections/Info10_10"
import Info11 from "@/components/sections/Info11"
import Info12 from "@/components/sections/Info12"
import Info12_6 from "@/components/sections/Info12_6"
import Info2_8 from "@/components/sections/Info2_8"
import Info4_3 from "@/components/sections/Info4_3"
import Info6_2 from "@/components/sections/Info6_2"
import Newsletter1 from "@/components/sections/Newsletter1"
import Process3 from "@/components/sections/Process3"
import Reviews3 from "@/components/sections/Reviews3"
import Screens1 from "@/components/sections/Screens1"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home15() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <Hero15 />
                <Info2_8 />
                <Info6_2 />
                <Info4_3 />
                <Statistic1 />
                <Feature2_11 />
                <Info10_10 />
                <Screens1 />
                <Process3 />
                <Info12_6 />
                <Info11 />
                <Reviews3 />
                <Download5 title={"Manage your time, meetings, events and tasks with NextApp"} />
                <Blog1 />
                <Newsletter1 />
            </Layout>
        </>
    )
}