// JavaScript Document

var assert = require('chai').assert;   //Chai assertion library
var validInput = require('../app/validateRequiredField.js');
var validatephonenumber = require('../app/validdatephonenumber.js');

/*
* phone number       should pass             test pass
* ''               false              false
* fjsdklj           false              false
* 2.3              false              false
* 515-666-5265       true               true
* 652-968           false              false
* 456-1254          false              false
* a15-558-8956       false              false
* 5h5-789-5446       false              false
* 51n-456-7894       false              false
* 515h598-7896       false              false
* 515-t65-7895       false              false
* 515-4y6-7899       false              false
* 515-85t-7899       false              false
* 515-984d2321       false              false
* 515-895-d654       false              false
* 515-456-4s65       false              false
* 515-456-45h6       false              false
* 451-789-456b       false              false
* 456-545-45645          false              false
* */

describe("Testing Input Required", function(){
   
   it("The letter a should pass", function(){
      assert.isTrue(validInput('a'));       
   });
   
   it("The number 4 should pass", function() {
      assert.isTrue(validInput(4));
   });
   
   it("Empty or '' should fail", function() {
      assert.isFalse(validInput(' '));
   });    
   
   it("A single space should fail", function() {
      assert.isFalse(validInput(' '));
   });
   
   it("Two or more spaces should fail", function(){
      assert.isFalse(validInput('  '));
   });
   
   it("The word null should fail", function() {
      assert.isFalse(validInput('null'));
   });
   
   it("The word undefined should fail", function() {
      assert.isFalse(validInput('undefined'));
   });
   
   it("The value 'a 4' should pass", function(){
      assert.isTrue(validInput('a 4'));
   });
   
});    //end "Testing Input Required"

describe("Testing Valid Phone Number", function(){
   
   it("Input is required", function (){
      assert.isFalse(validatephonenumber(''))
   });

   it("Input must be numeric", function (){
      assert.isFalse(validatephonenumber("abcdefg"))
   });
   it("Input must be integers", function (){
      assert.isFalse(validatephonenumber("2.3"))
   });

   it("Input must be 10 numbers", function (){
      assert.isTrue(validatephonenumber("515-663-1547"))
   });


   it('should have area code', function () {
      assert.isFalse(validatephonenumber('365-4587'))
   });

   it('should have last 4 digits', function () {
      assert.isFalse(validatephonenumber('515-652'))
   });


   it('should not contain random letters at first position', function () {
      assert.isFalse(validatephonenumber('a15-655-6598'))
   });

   it('should not contain random letters at second position', function () {
      assert.isFalse(validatephonenumber('5h1-546-3652'))
   });

   it('should not contain random letters at third position', function () {
      assert.isFalse(validatephonenumber('51g-365-4562'))
   });

   it('should not contain random letters at fourth position', function () {
      assert.isFalse(validatephonenumber('515f652-6598'))
   });

   it('should not contain random letters at fifth position', function () {
      assert.isFalse(validatephonenumber('515-g56-9856'))
   });

   it('should not contain random letters at sixth position', function () {
      assert.isFalse(validatephonenumber('515-4j6-5626'))
   });

   it('should not contain random letters at seventh position', function () {
      assert.isFalse(validatephonenumber('515-78j-5412'))
   });

   it('should not contain random letters at eighth position', function () {
      assert.isFalse(validatephonenumber('515-782l7845'))
   });

   it('should not contain random letters at ninth position', function () {
      assert.isFalse(validatephonenumber('515-745-t985'))
   });

   it('should not contain random letters at tenth position', function () {
      assert.isFalse(validatephonenumber('515-568-4d56'))
   });

   it('should not contain random letters at eleventh position', function () {
      assert.isFalse(validatephonenumber('515-985-45u5'))
   });

   it('should not contain random letters at twelfth position', function () {
      assert.isFalse(validatephonenumber('515-968-485g'))
   });

   it('phone number too long', function () {
      assert.isFalse(validatephonenumber('515-658-78455'))
   });
});

