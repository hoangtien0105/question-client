import { siteDescription, siteName } from "constants/seo";

const SEOConfig = {
    titleTemplate: `%s | ${siteName}`,
    defaultTile: siteName,
    description: siteDescription,
    openGraph: {
        type: 'website',
        url: 'https://solutionschecker.com',
        siteName: siteName,
    },
    twitter: {
        handle: '@solutionschecker.com',
        site: '@solutionschecker.com',
        cardType: 'summary_large_image',
    }
}
export default SEOConfig;