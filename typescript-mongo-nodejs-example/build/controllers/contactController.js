"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var contactModel_1 = require("../models/contactModel");
var Contact = mongoose.model('Contact', contactModel_1.ContactSchema);
var ContactController = /** @class */ (function () {
    function ContactController() {
    }
    ContactController.prototype.add = function (req, res) {
        var latestcontact = new Contact(req.body);
        latestcontact.save(function (err, contact) {
            if (err) {
                res.status(500).json({
                    message: err
                });
            }
            res.status(201).json({
                msg: 'Success create contact',
                data: contact
            });
        });
    };
    ContactController.prototype.list = function (req, res) {
        Contact.find({})
            .then(function (contacts) {
            res.status(201).json({
                msg: 'List of contacts',
                data: contacts
            });
        })
            .catch(function (err) {
            res.status(500).json({
                message: err
            });
        });
    };
    ContactController.prototype.getDetail = function (req, res) {
        Contact.findById(req.params.id, function (err, contact) {
            if (err) {
                res.status(500).json({
                    message: err
                });
            }
            res.status(200).json({
                msg: 'Success get detail contact',
                data: contact
            });
        });
    };
    ContactController.prototype.update = function (req, res) {
        Contact.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, contact) {
            if (err) {
                res.status(500).json({
                    message: err
                });
            }
            res.status(201).json({
                msg: 'Update contact',
                data: contact
            });
        });
    };
    ContactController.prototype.remove = function (req, res) {
        Contact.findOneAndRemove({ _id: req.params.id })
            .then(function (contact) {
            res.status(201).json({
                msg: 'Success delete contact',
                data: contact
            });
        })
            .catch(function (err) {
            res.status(500).json({
                message: err
            });
        });
    };
    return ContactController;
}());
exports.ContactController = ContactController;
