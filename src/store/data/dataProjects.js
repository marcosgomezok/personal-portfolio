const dataProjects = [
    {
        title:'You can also write the titles like this',
        description:'and later you add the path of the translations',
        imgdesktop:'here you must leave an image of your desktop project',
        imgmobile:'here you must leave an image of your mobile project',
        link:'A link to your project or repository'
    },
    {
        title:'projects.project2.title',
        description:'projects.project2.description',
        imgdesktop:require('../images/projects/img2desktop.jpg').default,
        imgmobile:require('../images/projects/img2mobile.jpg').default,
        link:'https://www.postresnuestros.ga',
        shortLink: 'postresnuestros.ga'
    },
    {
        title:'projects.project3.title',
        description:'projects.project3.description',
        imgdesktop:require('../images/projects/img3desktop.jpg').default,
        imgmobile:require('../images/projects/img3mobile.jpg').default,
        link:'https://www.futuregallery.ga',
        shortLink: 'futuregallery.ga'
    },
    {
        title:'projects.project4.title',
        description:'projects.project4.description',
        imgdesktop:require('../images/projects/img4desktop.jpg').default,
        imgmobile:require('../images/projects/img4mobile.jpg').default,
        link:'/',
        shortLink: 'marcosgomez.com.ar'
        
    },
]

export const lastProjects = dataProjects.slice(-3)