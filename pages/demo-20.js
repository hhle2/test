import Layout from "@/components/layout/Layout"
import Features3 from "@/components/sections/Features3"
import Hero20 from "@/components/sections/Hero20"
import Info10_14 from "@/components/sections/Info10_14"
import Info3_8 from "@/components/sections/Info3_8"
import Info5_10 from "@/components/sections/Info5_10"
import Info8_6 from "@/components/sections/Info8_6"
import Newsletter1 from "@/components/sections/Newsletter1"
import Pricing2_1 from "@/components/sections/Pricing2_1"
import Reviews1 from "@/components/sections/Reviews1"
export default function Home20() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3}>
                <Hero20 />
                <Features3 />
                <Info5_10 />
                <Info3_8 />
                <Info8_6 />
                <Reviews1 cls="bg-darkviolet white-color" />
                <Pricing2_1 />
                <Info10_14 />
                <Newsletter1 cls="bg-deepviolet white-color" />
            </Layout>
        </>
    )
}