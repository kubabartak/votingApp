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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var PollService = (function () {
    function PollService(http) {
        this.http = http;
    }
    PollService.prototype.getPoll = function (pollId) {
        return this.http.get('/api/poll/' + pollId)
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.addAnswers = function (newAnswers, Id) {
        var toBeAdded = {
            newAnswers: newAnswers,
            answer_vote: ['']
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/poll/' + Id, JSON.stringify(toBeAdded), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.addVote = function (VoteValue, Id) {
        var votes = {
            vote: VoteValue,
            id: Id };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/vote', JSON.stringify(votes), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PollService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PollService);
    return PollService;
}());
exports.PollService = PollService;
//# sourceMappingURL=poll.service.js.map