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
var polls_service_1 = require('../../services/polls.service');
var PollsComponent = (function () {
    function PollsComponent(pollsService) {
        var _this = this;
        this.pollsService = pollsService;
        this.pollsService.getPolls()
            .subscribe(function (polls) {
            _this.polls = polls;
        });
    }
    PollsComponent.prototype.addPoll = function (event) {
        var _this = this;
        event.preventDefault();
        var newPoll = {
            poll_name: this.pollName,
            poll_options: this.pollAnswer
        };
        this.pollsService.addPoll(newPoll)
            .subscribe(function (poll) {
            _this.polls.push(poll);
            _this.pollName = '';
            _this.pollAnswer = '';
        });
    };
    PollsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'polls',
            templateUrl: "polls.component.html"
        }), 
        __metadata('design:paramtypes', [polls_service_1.PollsService])
    ], PollsComponent);
    return PollsComponent;
}());
exports.PollsComponent = PollsComponent;
//# sourceMappingURL=polls.component.js.map