## Angular Directive for Georgian Keyboard

A simple angular directive for geo kbd.

# Install
Install with bower
```
bower install angular_georgian_keyboard
```
Inlcude script
```html
<script src="bower_components/angular_georgian_keyboard/src/angular_georgian_keyboard.js"></script>
```
Include in your app
```js
angular.module('myApp', ['GoergianKeyboard']);
```
# Usage
You can pass ```true/false``` to enable/disable georgian keyboard
```html
<input type="text" ng-model="input" geo-kbd="enabled">
```