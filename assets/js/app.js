var app = angular.module("profileApp", []);

app.controller("profileCtrl", function($scope) {
    $scope.name = 'Siben Nayak'

    $scope.history = [{
        'name': 'Intel Corporation',
        'url': 'http://www.intel.in/',
        'designation': 'Senior Software Development Engineer',
        'location': 'Bengaluru, Karnataka',
        'duration': 'October 2015 – Present',
        'projects': [{
            'name': 'Cloud Security Reporter',
            'roles': ['UI Developer', 'Backend Engineer'],
            'type': 'java'
        }, {
            'name': 'CSI Automation Framework',
            'roles': ['Automation Engineer'],
            'type': 'node'
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
            'type': 'devops'
        }, {
            'name': 'Patent Portfolio Visualization',
            'roles': ['UI Developer', 'Backend Engineer'],
            'type': 'html'
        }, {
            'name': 'Claim Parse Automation',
            'roles': ['Backend Engineer'],
            'type': 'java'
        }, {
            'name': 'Collaborative Invention Mining',
            'roles': ['UI Developer'],
            'type': 'flash'
        }, {
            'name': 'Patent, Trademark and Copyright',
            'roles': ['Backend Engineer'],
            'type': 'java'
        }, {
            'name': 'Partner Portal Administration and Management',
            'roles': ['UI Developer', 'Backend Engineer'],
            'type': 'jsf'
        }, {
            'name': 'Currency Engine for LoyaltyOne',
            'roles': ['Backend Engineer'],
            'type': 'java'
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
        'percentage': '90',
        'info': 'Over 6 years of experience in multiple Java projects'
    }, {
        'name': 'HTML5/CSS3/JavaScript',
        'level': 'Advanced',
        'percentage': '80',
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
