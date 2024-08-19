import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "NextApp - App Landing Page Nextjs Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead