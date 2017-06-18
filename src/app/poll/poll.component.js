"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var poll_service_1 = require('../../services/poll.service');
var PollComponent = (function () {
    function PollComponent(route, pollService) {
        this.route = route;
        this.pollService = pollService;
        this.pieChartOptions = {
            chartType: 'PieChart',
            dataTable: [
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ],
            options: { 'title': 'Tasks' },
        };
    }
    PollComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get param
        this.Id = this.route.snapshot.params.id;
        this.pollService.getPoll(this.Id)
            .subscribe(function (poll) {
            _this.poll_name = poll.poll_name;
            _this.poll_options = poll.poll_options;
        });
    };
    PollComponent.prototype.addAnswers = function (event) {
        var _this = this;
        event.preventDefault();
        this.pollService.addAnswers(this.newAnswers, this.Id)
            .subscribe(function (poll) {
            _this.poll_options = poll.poll_options;
            _this.newAnswers = [];
        });
    };
    PollComponent.prototype.addVote = function (event) {
        var _this = this;
        event.preventDefault();
        this.pollService.addVote(this.VoteValue, this.Id)
            .subscribe(function (docs) {
            _this.poll_options = docs.poll_options;
        });
    };
    ;
    PollComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'poll',
            templateUrl: 'poll.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, poll_service_1.PollService])
    ], PollComponent);
    return PollComponent;
}());
exports.PollComponent = PollComponent;
;
//# sourceMappingURL=poll.component.js.map