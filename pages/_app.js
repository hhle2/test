import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import 'swiper/css'
import "/public/css/bootstrap.min.css"
import "/public/css/flaticon.css"
import "/public/css/fontawesome.min.css"
import "/public/css/magnific-popup.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "/public/css/slick-theme.css"
import "/public/css/slick.css"
import "/public/css/animate.css"
import "/public/css/spinner.css"
import "/public/css/demo.css"
import "/public/css/style.css"
import "/public/css/responsive.css"
import "/public/css/app.css"

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <Preloader />
        )}
    </>)
}

export default MyApp
