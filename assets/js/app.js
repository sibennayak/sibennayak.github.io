/* global angular, $ */
var app = angular.module('profileApp', []);

/**
 * Custom directives
 */
app.directive('history', () => {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/history.html'
    };
});

app.directive('experience', () => {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/experience.html'
    };
});

app.directive('basicInfo', () => {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/basic-info.html'
    };
});

app.directive('skills', () => {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/skills.html'
    };
});

app.directive('education', () => {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/education.html'
    };
});

app.directive('patents', () => {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/patents.html'
    };
});

app.directive('testimonials', () => {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/testimonials.html'
    };
});

app.directive('languages', () => {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/languages.html'
    };
});

app.controller('profileCtrl', function($scope, $http) {
    
    $http.get('assets/data/profile.json').success(function(data) {
        $scope.profile = data;
    });

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
