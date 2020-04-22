// gatsby-config.js

module.exports = {
    siteMetadata: {
        title: `Hesam's Blog`,
        name: `Blog`,
        siteUrl: `https://gatsby-theme-novela.netlify.com`,
        description: `Lessons from a newbie`,

        // important to set the main text that appears in the hero
        hero: {
            heading: `Perspectives on technology, design and business from the team at Narative.`,
            maxWidth: 652,
        },
        social: [{
                name: `linkedin`,
                url: `https://www.linkedin.com/in/hesam-alavi-59b61987/`,
            },
            {
                name: `github`,
                url: `https://github.com/hesamalavi`,
            },
            {
                name: `twitter`,
                url: `https://twitter.com/HesamAlavi27`,
            },
            {
                name: `stackoverflow`,
                url: `https://stackoverflow.com/users/12542350/hesam-alavi?tab=profile`,
            },
        ],
    },
    plugins: ['@narative/gatsby-theme-novela'],
};