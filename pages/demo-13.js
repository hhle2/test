import Layout from "@/components/layout/Layout"
import Download2 from "@/components/sections/Download2"
import Faqs2 from "@/components/sections/Faqs2"
import Feature2_9 from "@/components/sections/Feature2_9"
import Hero13 from "@/components/sections/Hero13"
import Info1 from "@/components/sections/Info1"
import Info11 from "@/components/sections/Info11"
import Info11_7 from "@/components/sections/Info11_7"
import Info1_8 from "@/components/sections/Info1_8"
import Info3 from "@/components/sections/Info3"
import Info5 from "@/components/sections/Info5"
import Info5_7 from "@/components/sections/Info5_7"
import Media1 from "@/components/sections/Media1"
import Media1_5 from "@/components/sections/Media1_5"
import Moreapps from "@/components/sections/Moreapps"
import Newsletter2 from "@/components/sections/Newsletter2"
import Process3 from "@/components/sections/Process3"
import Reviews2 from "@/components/sections/Reviews2"
import Screens1 from "@/components/sections/Screens1"
import Statistic1 from "@/components/sections/Statistic1"
export default function Home13() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Hero13 />
                <Info1_8 />
                <Info5_7 />
                <Info3 />
                <Process3 />
                <Screens1 />
                <Reviews2 />
                <Media1_5 />
                <Statistic1 />
                <Feature2_9 />
                <Info11_7 />
                <Faqs2 />
                <Download2 style={2} />
                <Moreapps />
                <Newsletter2 />
            </Layout>
        </>
    )
}