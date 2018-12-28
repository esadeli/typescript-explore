"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contactController_1 = require("../controllers/contactController");
var Routes = /** @class */ (function () {
    function Routes() {
        this.contactController = new contactController_1.ContactController();
    }
    Routes.prototype.routes = function (app) {
        // index page
        app.route('/')
            .get(function (req, res) {
            res.status(200).json({
                message: 'GET Request Successful'
            });
        });
        // contact
        app.route('/contact')
            .get(this.contactController.list)
            .post(this.contactController.add);
        app.route('/contact/:id')
            .get(this.contactController.getDetail)
            .put(this.contactController.update)
            .delete(this.contactController.remove);
    };
    return Routes;
}());
exports.Routes = Routes;
