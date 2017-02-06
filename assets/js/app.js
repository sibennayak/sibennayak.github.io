/* global angular, $ */
var app = angular.module('profileApp', []);

app.controller('profileCtrl', function($scope) {
    $scope.name = 'Siben Nayak';

    $scope.role = 'Java & Web Developer';

    $scope.mail = 'siben.nayak@gmail.com';

    $scope.site = 'https://sibennayak.github.io';

    $scope.location = 'Bengaluru, Karnataka, India';

    $scope.links = [{
        url: 'https://github.com/sibennayak',
        icon: 'fa-github'
    }, {
        url: 'https://www.linkedin.com/in/siben-nayak',
        icon: 'fa-linkedin'
    }, {
        url: 'https://plus.google.com/102680720620903375780',
        icon: 'fa-google-plus'
    }, {
        url: 'https://www.hackerearth.com/@siben',
        icon: 'fa-hacker-news'
    }];

    $scope.summary = ['An honest, diligent and hard-working professional with over 6.5 years of experience.',
        'Constantly praised by supervisors for my analytical skills and aptitude for learning.',
        'Demonstrated ability to quickly grasp new concepts and adapt to changing work environments.',
        'Always been zealous to learn new technologies and face new challenges.',
        'My performance has been consistently on the higher side of the graph. I have consistently been a top performer over the years.',
        'A good team player and have always kept the common objective of the team before my own.'
    ];

    $scope.objective = 'I am currently looking for a position in an organization that offers a greater challenge, \
        increased benefits, and the opportunity to explore my advanced technical aptitude and skills \
        to help the organization advance efficiently and productively.';

    $scope.history = [{
        name: 'Intel Corporation',
        url: 'http://www.intel.in/',
        designation: 'Senior Software Development Engineer',
        location: 'Bengaluru, Karnataka',
        duration: 'October 2015 – Present',
        projects: [{
            name: 'Cloud Security Reporter',
            roles: ['UI Developer', 'Backend Engineer'],
            type: 'java',
            skills: ['J2EE', 'REST', 'Kafka', 'Spark', 'ElasticSearch', 'Presto', 'SQL'],
            description: 'A cloud based reporting solution with extensive features that help customers identify and analyze a broad range of data collected from their \
            network devices and McAfee products. Loading real-time log data hooked up with Kafka and Spark into ElasticSearch storage engines and displaying \
            them on interactive dashboards using RESTful services.'
        }, {
            name: 'CSI Automation Framework',
            roles: ['Automation Engineer'],
            type: 'node',
            skills: ['JavaScript', 'Selenium', 'Jasmine', 'Protractor', 'NodeJS'],
            description: 'A JavaScript based UI Automation Framework built around NodeJS/Jasmine/Protractor. \
            Involved in creating product specific extensions and publishing them to the central node repository to be used \
            by the various product teams for automating their UI.'
        }]
    }, {
        name: 'Tata Consultancy Services',
        url: 'http://www.tcs.com/',
        designation: 'IT Analyst',
        location: 'Bhubaneshwar, Odisha',
        duration: 'August 2010 – September 2015',
        projects: [{
            name: 'Test Automation Framework',
            roles: ['Automation Engineer'],
            type: 'devops',
            skills: ['Selenium', 'Sikuli', 'Flex', 'JUnit', 'Jenkins'],
            description: 'Designing a framework and a set of APIs using Selenium and Sikuli and converting the manual test cases in the \
            regression suite to automated test cases. Integrated the entire process with Jenkins and configured a complete \
            clean room CI build environment.'
        }, {
            name: 'Patent Portfolio Visualization',
            roles: ['UI Developer', 'Backend Engineer'],
            type: 'html',
            skills: ['HTML5', 'JavaScript', 'D3.js', 'J2EE', 'SQL'],
            description: 'A data visualization portal designed to showcase the patent portfolio of TCS in various graphical representations \
            along with the patents of other key players in the market. The infographics would help the various business units \
            inside the organization to evaluate the strength of Intellectual Properties in their unit and the value of their investments. '
        }, {
            name: 'Claim Parse Automation',
            roles: ['Backend Engineer'],
            type: 'java',
            skills: ['J2EE', 'Spring', 'Apache Lucene', 'Tesseract OCR', 'SQL'],
            description: 'An advanced OCR tool to collect and parse patent publication documents in order to identify the claims and \
            determine their strength. The tool made use of open source OCR, text based indexing and language processing \
            techniques to deliver a robust solution to handle any type of document.'
        }, {
            name: 'Collaborative Invention Mining',
            roles: ['UI Developer'],
            type: 'flash',
            skills: ['Flex', 'J2EE', 'SQL'],
            description: 'A social platform within the organization to collaboratively brainstorm on ideas by associates in order to enhance \
            and strengthen them so that they can be filed as a patent. '
        }, {
            name: 'Patent, Trademark and Copyright',
            roles: ['Backend Engineer'],
            type: 'java',
            skills: ['J2EE', 'SQL'],
            description: 'A web portal to create and manage various IP related assets of the organization such as patents, trademarks and \
            copyrights. It had the ability to interact with both internal associates as well as external law firms to ensure \
            smooth workflow during the entire process of IP lifecycle. '
        }, {
            name: 'Partner Portal Administration and Management',
            roles: ['UI Developer', 'Backend Engineer'],
            type: 'java',
            skills: ['J2EE', 'Spring', 'JSF', 'SQL', 'Velocity'],
            description: 'A web portal to manage various aspects of partners of LoyaltyOne which included Offer Management, \
            Location Management, Issuer Management, Postings and Audit Management. '
        }, {
            name: 'Currency Engine for LoyaltyOne',
            roles: ['Backend Engineer'],
            type: 'java',
            skills: ['J2EE', 'SQL'],
            description: 'A generic template based rule engine to handle complex business rules in a well-defined and configurable \
            workflow mechanism. A loyalty solution developed for Loyalty One, Canada to migrate their existing system \
            of customer reward management.'
        }]
    }];

    $scope.experience = [{
        designation: 'Senior Software Development Engineer',
        company: 'Intel Corporation',
        duration: 'October 2015 - Present'
    }, {
        designation: 'IT Analyst',
        company: 'Tata Consultancy Services',
        duration: 'August 2014 - September 2015'
    }, {
        designation: 'Systems Engineer',
        company: 'Tata Consultancy Services',
        duration: 'August 2012 - July 2014'
    }, {
        designation: 'Assistant Systems Engineer',
        company: 'Tata Consultancy Services',
        duration: 'August 2010 - July 2012'
    }];

    $scope.skillset = [{
        name: 'Java/J2EE',
        level: 'Expert',
        percentage: '95',
        info: 'Over 6 years of experience in multiple Java projects'
    }, {
        name: 'HTML5/CSS3/JavaScript',
        level: 'Advanced',
        percentage: '90',
        info: ''
    }, {
        name: 'NodeJS/AngularJS/jQuery',
        level: 'Advanced',
        percentage: '75',
        info: ''
    }, {
        name: 'Spring',
        level: 'Intermediate',
        percentage: '50',
        info: ''
    }, {
        name: 'Android/Ionic/Cordova',
        level: 'Beginner',
        percentage: '10',
        info: ''
    }];

    $scope.languages = [{
        name: 'English',
        type: 'Native Speaker',
        fluency: 5
    }, {
        name: 'Hindi',
        type: 'Native Speaker',
        fluency: 5
    }, {
        name: 'Odiya',
        type: 'Native Speaker',
        fluency: 5
    }, {
        name: 'Tamil',
        type: 'Limited Working',
        fluency: 2
    }, {
        name: 'Kannada',
        type: 'Limited Working',
        fluency: 2
    }];

    $scope.education = [{
        title: 'B.Tech Computer Science & Engineering',
        university: 'College of Engineering & Technology',
        url: 'https://en.wikipedia.org/wiki/College_of_Engineering_and_Technology,_Bhubaneswar',
        year: '2006-2010'
    }];

    $scope.patents = [{
        title: 'System and method for validation and conversion of electronic data',
        url: 'http://www.google.com/patents/CA2829985A1'
    }];

    $scope.testimonials = [{
        quote: 'Siben is an excellent software engineer and he is passionate about what he does. You can totally count on him to deliver your projects!',
        name: 'Anonymous',
        organization: 'Organization'
    }];

    $scope.range = function(count) {
        var ratings = [];
        for (var i = 0; i < count; i++) {
            ratings.push(i);
        }
        return ratings;
    };
});

$(function() {
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
});
