'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

///<!-- models Schema definition --!> ////
const shippingSchema = mongoose.Schema({

    firstname: String,
    lastname: String,
    addressStreet:String,
    addressFloor:String,
    addressAppartment:Number,
    phone: Number,
    email: String,
    notes:String,
    datecreated: Date

});

const shipping = mongoose.model("shipping", shippingSchema);


///<!-- models Schema shipping CRUD operations --!> ////

/* GET all Shipping info */

function get_shipping(res) {
    shipping.find({}, function (err, data) {
        if (err) {
            return err;
        }
        res.send(data);
    });
}

///<!-- models Schema Create --!> ////

function Create_shipping(sent_shipping, res) {

    //////////// VALIDATION OF CREDENTIALS GOES HERE!!///////
    const currentdate = new Date();
    console.log("sent_shipping:");
    console.log(sent_shipping);

    var created_shipping = new shipping({
        firstname: sent_shipping.firstname,
        lastname: sent_shipping.lastname,
        addressStreet:sent_shipping.addressStreet,
        addressFloor:sent_shipping.addressFloor,
        addressAppartment:sent_shipping.addressAppartment,
        phone: sent_shipping.phone,
        email: sent_shipping.email,
        notes: sent_shipping.notes,
        datecreated: currentdate
    });

    console.log("sent_shipping.firstname:");
    console.log(sent_shipping.firstname);

    created_shipping.save(function () {
        var ret = "shipping info was saved";
        console.log(ret);
        res.send('shipping info was saved');
    });
}

///<!-- models Schema Update --!> ////

function update_shipping(sent_shipping, res) {
    shipping.update({_id: sent_shipping._id}, sent_shipping, function (err, foundShipping) {
        if (err) {
            return err;
        }
        res.send('shipping info updated successfully');
    });
}

///<!-- models Schema Delete --!> ////
function delete_shipping(sent_shipping, res) {
    console.log('sent_shipping._id:  ' + sent_shipping._id);
    shipping.deleteOne({_id: sent_shipping._id}, function () {
        console.log("done");
    });
    const ret = 'Deleted Successfully';
    res.send(ret);
}


const self = module.exports = {

    CreateShipping: function (createdShipping, res) {
        return Create_shipping(createdShipping, res);
    },
    deleteShipping: function (sentShipping, res) {
        return delete_shipping(sentShipping, res);
    },
    getShipping: function (res) {
        return get_shipping(res);
    },
    updateShipping: function (sent_Shipping, res) {
        return update_shipping(sent_Shipping, res)
    }
};
