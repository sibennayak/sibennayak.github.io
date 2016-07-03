var app = angular.module('profileApp', []);

app.controller('profileCtrl', function($scope) {
    $scope.name = 'Siben Nayak'
    $scope.mail = 'siben.nayak@gmail.com'
    $scope.site = 'https://sibennayak.github.io'

    $scope.history = [{
        'name': 'Intel Corporation',
        'url': 'http://www.intel.in/',
        'designation': 'Senior Software Development Engineer',
        'location': 'Bengaluru, Karnataka',
        'duration': 'October 2015 – Present',
        'projects': [{
            'name': 'Cloud Security Reporter',
            'roles': ['UI Developer', 'Backend Engineer'],
            'type': 'java',
            'skills': ['J2EE', 'REST', 'Kafka', 'ElasticSearch', 'Presto', 'SQL'],
            'description': 'A cloud based reporting solution with extensive features that help customers identify and analyze a broad range of data collected from their network devices. Loading real-time SaaS data into ElasticSearch storage engines and displaying them on interactive dashboards. '
        }, {
            'name': 'CSI Automation Framework',
            'roles': ['Automation Engineer'],
            'type': 'node',
            'skills': ['JavaScript', 'Selenium', 'Jasmine', 'Protractor', 'NodeJS'],
            'description': 'A JavaScript based UI Automation Framework built around NodeJS/Jasmine/Protractor. Involved in creating product specific extensions and publishing them to the central node repository to be used by the various product teams for automating their UI. '
        }]
    }, {
        'name': 'Tata Consultancy Services',
        'url': 'http://www.tcs.com/',
        'designation': 'IT Analyst',
        'location': 'Bhubaneshwar, Odisha',
        'duration': 'August 2010 – September 2015',
        'projects': [{
            'name': 'Test Automation Framework',
            'roles': ['Automation Engineer'],
            'type': 'devops',
            'skills': ['Selenium', 'Sikuli', 'Flex', 'JUnit', 'Jenkins'],
            'description': 'Designing a framework and a set of APIs using Selenium and Sikuli and converting the manual test cases in the regression suite to automated test cases. Integrated the entire process with Jenkins and configured a complete clean room CI build environment.'
        }, {
            'name': 'Patent Portfolio Visualization',
            'roles': ['UI Developer', 'Backend Engineer'],
            'type': 'html',
            'skills': ['HTML5', 'JavaScript', 'D3.js', 'J2EE', 'SQL'],
            'description': 'A data visualization portal designed to showcase the patent portfolio of TCS in various graphical representations along with the patents of other key players in the market. The infographics would help the various business units inside the organization to evaluate the strength of Intellectual Properties in their unit and the value of their investments. '
        }, {
            'name': 'Claim Parse Automation',
            'roles': ['Backend Engineer'],
            'type': 'java',
            'skills': ['J2EE', 'Spring', 'Apache Lucene', 'Tesseract', 'SQL'],
            'description': 'An advanced OCR tool to collect and parse patent publication documents in order to identify the claims and determine their strength. The tool made use of open source OCR, text based indexing and language processing techniques to deliver a robust solution to handle any type of document.'
        }, {
            'name': 'Collaborative Invention Mining',
            'roles': ['UI Developer'],
            'type': 'flash',
            'skills': ['Flex', 'J2EE', 'SQL'],
            'description': 'A social platform within the organization to collaboratively brainstorm on ideas by associates in order to enhance and strengthen them so that they can be filed as a patent. '
        }, {
            'name': 'Patent, Trademark and Copyright',
            'roles': ['Backend Engineer'],
            'type': 'java',
            'skills': ['J2EE', 'SQL'],
            'description': 'A web portal to create and manage various IP related assets of the organization such as patents, trademarks and copyrights. It had the ability to interact with both internal associates as well as external law firms to ensure smooth workflow during the entire process of IP lifecycle. '
        }, {
            'name': 'Partner Portal Administration and Management',
            'roles': ['UI Developer', 'Backend Engineer'],
            'type': 'java',
            'skills': ['J2EE', 'Spring', 'JSF', 'SQL', 'Velocity'],
            'description': 'A web portal to manage various aspects of partners of LoyaltyOne which included Offer Management, Location Management, Issuer Management, Postings and Audit Management. '
        }, {
            'name': 'Currency Engine for LoyaltyOne',
            'roles': ['Backend Engineer'],
            'type': 'java',
            'skills': ['J2EE', 'SQL'],
            'description': 'A generic template based rule engine to handle complex business rules in a well-defined and configurable workflow mechanism. A loyalty solution developed for Loyalty One, Canada to migrate their existing system of customer reward management.'
        }]
    }]

    $scope.experience = [{
        'designation': 'Senior Software Development Engineer',
        'company': 'Intel Corporation',
        'duration': 'October 2015 - Present'
    }, {
        'designation': 'IT Analyst',
        'company': 'Tata Consultancy Services',
        'duration': 'August 2014 - September 2015'
    }, {
        'designation': 'Systems Engineer',
        'company': 'Tata Consultancy Services',
        'duration': 'August 2012 - July 2014'
    }, {
        'designation': 'Assistant Systems Engineer',
        'company': 'Tata Consultancy Services',
        'duration': 'August 2010 - July 2012'
    }]

    $scope.skillset = [{
        'name': 'Java/J2EE',
        'level': 'Expert',
        'percentage': '95',
        'info': 'Over 6 years of experience in multiple Java projects'
    }, {
        'name': 'HTML5/CSS3/JavaScript',
        'level': 'Advanced',
        'percentage': '90',
        'info': ''
    }, {
        'name': 'Spring',
        'level': 'Advanced',
        'percentage': '70',
        'info': ''
    }, {
        'name': 'NodeJS/AngularJS',
        'level': 'Intermediate',
        'percentage': '50',
        'info': ''
    }, {
        'name': 'Android/Ionic/Cordova',
        'level': 'Beginner',
        'percentage': '30',
        'info': ''
    }]

    $scope.languages = [{
        name: 'English',
        type: 'Native Speaker',
        fluency: 5
    }, {
        name: 'Hindi',
        type: 'Native Speaker',
        fluency: 5
    }]

    $scope.range = function(count) {
        var ratings = [];
        for (var i = 0; i < count; i++) {
            ratings.push(i)
        }
        return ratings;
    }
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
