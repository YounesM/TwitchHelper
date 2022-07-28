(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XlM":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tmi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tmi.js */ "PLpk");
/* harmony import */ var tmi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tmi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ChatComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/" + ctx_r0.chatType + "/p_(" + message_r1.randomNum + ").png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", message_r1.msg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class ChatComponent {
    constructor() {
        this.displayedMessages = [];
        this.chatType = 'pmd';
        this.CHAT_MAX_MESSAGES = 10;
        this.IMAGE_MAX_RAND = 129;
    }
    ngOnInit() {
        const twitchClient = new tmi_js__WEBPACK_IMPORTED_MODULE_0__["Client"]({
            options: { debug: true, messagesLogLevel: 'info' },
            connection: {
                reconnect: true,
                secure: true
            },
            channels: ['ponce']
        });
        twitchClient.connect().catch(console.error);
        twitchClient.on('message', (channel, tags, message, self) => {
            if (self) {
                return;
            }
            console.log(tags);
            this.addMessage(tags, message);
        });
    }
    addMessage(tags, message) {
        const chatMessage = {
            author: tags['display-name'],
            color: tags.color,
            msg: this.setEmotes(tags, message),
            randomNum: this.getRandomPkmn(tags)
        };
        if (this.displayedMessages.length > this.CHAT_MAX_MESSAGES - 1) {
            this.displayedMessages.splice(0, 1);
        }
        this.displayedMessages.push(chatMessage);
    }
    getRandomPkmn(tag) {
        let num = 0;
        if (!tag.color) {
            num = [...tag['display-name']].reduce((a, c) => a + c.charCodeAt(0), 0) % this.IMAGE_MAX_RAND + 1;
        }
        else {
            num = [...tag.color].reduce((a, c) => a + c.charCodeAt(0), 0) % this.IMAGE_MAX_RAND + 1;
        }
        return num;
    }
    setEmotes(tag, message) {
        const msg = [...message];
        if (tag.emotes) {
            Object.entries(tag.emotes).reverse().forEach((key) => {
                console.log(key);
                key[1].reverse().forEach(pos => {
                    msg.splice(pos.split('-')[0], +pos.split('-')[1] - pos.split('-')[0] + 1, `<img src="https://static-cdn.jtvnw.net/emoticons/v2/${key[0]}/default/dark/2.0">`);
                });
            });
        }
        return msg.join('');
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 2, vars: 1, consts: [[1, "chat"], ["class", "chatbox", 4, "ngFor", "ngForOf"], [1, "chatbox"], [1, "ico"], [3, "src"], [1, "chattext"], [1, "author"], [1, "message", 3, "innerHTML"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatComponent_div_1_Template, 8, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayedMessages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".chatbox[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  background: linear-gradient(to right, transparent 10%, rgba(0, 0, 0, 0.3), transparent);\r\n  margin: 5px;\r\n  padding: 5px;\r\n  font-family: 'Calibri', sans-serif;\r\n  border-radius: 10px;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:before, .chatbox[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  height: 1px;\r\n  background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(147,147,147,1) 50%,rgba(0,0,0,0) 100%);\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.ico[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 56px;\r\n  height: 56px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px #444;\r\n  border: 2px #fff solid;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.chattext[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n  flex: 1;\r\n}\r\n\r\n.author[_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.6);\r\n  display: inline-block;\r\n  padding: 0 15px;\r\n  border-radius: 30px;\r\n  box-shadow: 0 0 10px #444;\r\n  border: 2px #fff solid;\r\n  color: white;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-shadow: -1px -1px 0 #000,\r\n  1px -1px 0 #000,\r\n  -1px 1px 0 #000,\r\n  1px 1px 0 #000;;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQucG1kLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUZBQXVGO0VBQ3ZGLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUdBQW1HO0VBQ25HLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1o7OztnQkFHYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYiIsImZpbGUiOiJjaGF0LnBtZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdGJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAxMCUsIHJnYmEoMCwgMCwgMCwgMC4zKSwgdHJhbnNwYXJlbnQpO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LWZhbWlseTogJ0NhbGlicmknLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGF0Ym94OmJlZm9yZSwgLmNoYXRib3g6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAgcmdiYSgwLDAsMCwwKSAwJSxyZ2JhKDE0NywxNDcsMTQ3LDEpIDUwJSxyZ2JhKDAsMCwwLDApIDEwMCUpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmljbyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNDQ0O1xyXG4gIGJvcmRlcjogMnB4ICNmZmYgc29saWQ7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5jaGF0dGV4dCB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmF1dGhvciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNDQ0O1xyXG4gIGJvcmRlcjogMnB4ICNmZmYgc29saWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLFxyXG4gIDFweCAtMXB4IDAgIzAwMCxcclxuICAtMXB4IDFweCAwICMwMDAsXHJcbiAgMXB4IDFweCAwICMwMDA7O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNoYXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "+qWq":
/*!***************************************************!*\
  !*** ./src/app/overlays/isaac/isaac.component.ts ***!
  \***************************************************/
/*! exports provided: IsaacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsaacComponent", function() { return IsaacComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IsaacComponent {
    constructor() { }
    ngOnInit() {
    }
}
IsaacComponent.ɵfac = function IsaacComponent_Factory(t) { return new (t || IsaacComponent)(); };
IsaacComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IsaacComponent, selectors: [["app-isaac"]], decls: 3, vars: 0, consts: [["src", "assets/isaac/cellar.png", 1, "overlay"], [1, "level"]], template: function IsaacComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BASEMENT I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\r\n  font-family: \"Isaac\";\r\n  src: url('upheavtt.ttf') format(\"truetype\");\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n  image-rendering: pixelated;\r\n  position: fixed;\r\n  z-index: 0;\r\n}\r\n\r\n.level[_ngcontent-%COMP%] {\r\n  font-family: 'Isaac', sans-serif;\r\n  position: absolute;\r\n  top: 5%;\r\n  right: 25%;\r\n  background-image: url('levelname.png');\r\n  background-size: 1000px 152px;\r\n  image-rendering: pixelated;\r\n  width: 1000px;\r\n  height: 152px;\r\n  font-size: 45px;\r\n  color: white;\r\n  text-align: center;\r\n  line-height: 140px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzYWFjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsMkNBQTREO0FBQzlEOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxVQUFVO0VBQ1Ysc0NBQXVEO0VBQ3ZELDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiaXNhYWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIklzYWFjXCI7XHJcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2lzYWFjL3VwaGVhdnR0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4ubGV2ZWwge1xyXG4gIGZvbnQtZmFtaWx5OiAnSXNhYWMnLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUlO1xyXG4gIHJpZ2h0OiAyNSU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pc2FhYy9sZXZlbG5hbWUucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDE1MnB4O1xyXG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbiAgaGVpZ2h0OiAxNTJweDtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTQwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "/t43":
/*!**************************************************!*\
  !*** ./src/app/fireworks/fireworks.component.ts ***!
  \**************************************************/
/*! exports provided: FireworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireworksComponent", function() { return FireworksComponent; });
/* harmony import */ var fireworks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fireworks-js */ "it+3");
/* harmony import */ var fireworks_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fireworks_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FireworksComponent {
    constructor() {
        this.options = {
            hue: {
                min: 0,
                max: 345
            },
            delay: {
                min: 2,
                max: 34
            },
            rocketsPoint: 0,
            opacity: 0.5,
            speed: 17,
            acceleration: 1.2,
            friction: 1,
            gravity: 0.6000000000000001,
            particles: 657,
            trace: 7,
            explosion: 10,
            autoresize: true,
            brightness: {
                min: 50,
                max: 80,
                decay: {
                    min: 0.015,
                    max: 0.03
                }
            },
            boundaries: {
                x: 50,
                y: 50,
                width: 2560,
                height: 1297,
                visible: false
            },
            sound: {
                enabled: false,
                files: [
                    'https://fireworks.js.org/sounds/explosion0.mp3',
                    'https://fireworks.js.org/sounds/explosion1.mp3',
                    'https://fireworks.js.org/sounds/explosion2.mp3'
                ],
                volume: {
                    min: 2,
                    max: 4
                }
            },
            mouse: {
                click: true,
                move: false,
                max: 1
            }
        };
    }
    ngOnInit() {
        this.container = document.querySelector('.fireworks-container');
        this.fireworks = new fireworks_js__WEBPACK_IMPORTED_MODULE_0__["Fireworks"](this.container, this.options);
        setInterval(() => {
            if (new Date(2022, 0, 1).getTime() - Date.now() <= 0) {
                this.fireworks.start();
            }
        }, 1000);
    }
}
FireworksComponent.ɵfac = function FireworksComponent_Factory(t) { return new (t || FireworksComponent)(); };
FireworksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FireworksComponent, selectors: [["app-fireworks"]], decls: 1, vars: 0, consts: [[1, "fireworks-container"]], template: function FireworksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: [".fireworks-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmV3b3Jrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiZmlyZXdvcmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyZXdvcmtzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WebStormProjects\TwitchHelper\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "26w+":
/*!***********************************!*\
  !*** ./src/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/home/home.component */ "9vUh");
/* harmony import */ var _app_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/chat/chat.component */ "+XlM");
/* harmony import */ var _app_chat_brave_chat_brave_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/chat-brave/chat-brave.component */ "BUjT");
/* harmony import */ var _app_chat_brave_small_chat_brave_small_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/chat-brave-small/chat-brave-small.component */ "Luet");
/* harmony import */ var _app_overlays_geoguessr_geoguessr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/overlays/geoguessr/geoguessr.component */ "IK7o");
/* harmony import */ var _app_overlays_isaac_isaac_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/overlays/isaac/isaac.component */ "+qWq");
/* harmony import */ var _app_games_zoom_zoom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/games/zoom/zoom.component */ "TZ4R");
/* harmony import */ var _app_fireworks_fireworks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/fireworks/fireworks.component */ "/t43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    { path: 'home', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'chat', component: _app_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"] },
    { path: 'chat/brave', component: _app_chat_brave_chat_brave_component__WEBPACK_IMPORTED_MODULE_3__["ChatBraveComponent"] },
    { path: 'chat/brave/small', component: _app_chat_brave_small_chat_brave_small_component__WEBPACK_IMPORTED_MODULE_4__["ChatBraveSmallComponent"] },
    { path: 'overlays/geoguessr', component: _app_overlays_geoguessr_geoguessr_component__WEBPACK_IMPORTED_MODULE_5__["GeoguessrComponent"] },
    { path: 'overlays/isaac', component: _app_overlays_isaac_isaac_component__WEBPACK_IMPORTED_MODULE_6__["IsaacComponent"] },
    { path: 'overlays/fireworks', component: _app_fireworks_fireworks_component__WEBPACK_IMPORTED_MODULE_8__["FireworksComponent"] },
    { path: 'tools/countdown', component: _app_games_zoom_zoom_component__WEBPACK_IMPORTED_MODULE_7__["ZoomComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "OK\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiKey: 'AIzaSyCrlAGJzJIHI8cZ4prkN8cX_zDo5BLVZF8'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BUjT":
/*!****************************************************!*\
  !*** ./src/app/chat-brave/chat-brave.component.ts ***!
  \****************************************************/
/*! exports provided: ChatBraveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBraveComponent", function() { return ChatBraveComponent; });
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat/chat.component */ "+XlM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ChatBraveComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("small", ctx_r0.type === "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r2 + 1 === ctx_r0.currentTalker || ctx_r0.displayedMessages.length < ctx_r0.CHAT_MAX_MESSAGES && i_r2 === ctx_r0.displayedMessages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/brave/p_(" + message_r1.randomNum + ").png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("small", ctx_r0.type === "small")("active", i_r2 + 1 === ctx_r0.currentTalker || ctx_r0.displayedMessages.length < ctx_r0.CHAT_MAX_MESSAGES && i_r2 === ctx_r0.displayedMessages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", message_r1.msg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class ChatBraveComponent extends _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__["ChatComponent"] {
    constructor(activatedRoute) {
        super();
        this.activatedRoute = activatedRoute;
        this.currentTalker = 0;
        this.type = '';
        this.CHAT_MAX_MESSAGES = 4;
        this.IMAGE_MAX_RAND = 10;
    }
    ngOnInit() {
        super.ngOnInit();
        this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
    }
    addMessage(tags, message) {
        const msg = message.length > 150 ? message.substr(0, 150) + '...' : message;
        console.log(msg);
        const chatMessage = {
            author: tags['display-name'],
            color: tags.color,
            msg: this.setEmotes(tags, msg),
            randomNum: this.getRandomPkmn(tags)
        };
        if (this.displayedMessages.length < this.CHAT_MAX_MESSAGES) {
            this.displayedMessages.push(chatMessage);
            this.currentTalker += 1;
        }
        else {
            this.displayedMessages[this.currentTalker % this.CHAT_MAX_MESSAGES] = chatMessage;
            this.currentTalker = this.currentTalker % this.CHAT_MAX_MESSAGES + 1;
        }
    }
}
ChatBraveComponent.ɵfac = function ChatBraveComponent_Factory(t) { return new (t || ChatBraveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ChatBraveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatBraveComponent, selectors: [["app-chat-brave"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "chat"], ["class", "chatbox", 3, "small", 4, "ngFor", "ngForOf"], [1, "chatbox"], [1, "ico"], [3, "src"], [1, "author"], [1, "chattext"], [1, "message", 3, "innerHTML"]], template: function ChatBraveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatBraveComponent_div_1_Template, 8, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayedMessages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".chat[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 1920px;\r\n  height: 1080px;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-family: 'Arial', sans-serif;\r\n  font-size: 24px;\r\n  animation: appear-right 0.5s;\r\n}\r\n\r\n.chattext[_ngcontent-%COMP%] {\r\n  background: url('bubble.png');\r\n  font-weight: bolder;\r\n  width: 735px;\r\n  height: 172px;\r\n  font-size: 30px;\r\n  position: absolute;\r\n  filter: brightness(60%);\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n  width: 680px;\r\n  height: 155px;\r\n  position: absolute;\r\n  top: 30px;\r\n  left: 30px;\r\n  line-height: 30px;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Brave\";\r\n  src: url('Anarcharsis Basic LF Bold.ttf') format(\"truetype\");\r\n}\r\n\r\n@keyframes appear-right{\r\n  from {\r\n    transform: translate(-20px);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:nth-child(1) {\r\n  top: 100px;\r\n  left: 200px;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:nth-child(2) {\r\n  top: 100px;\r\n  right: 200px;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:nth-child(3) {\r\n  bottom: 100px;\r\n  left: 200px;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:nth-child(4) {\r\n  bottom: 100px;\r\n  right: 200px;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:nth-child(1)   .chattext[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: 270px;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:nth-child(2)   .chattext[_ngcontent-%COMP%] {\r\n  top: 255px;\r\n  right: 336px;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:nth-child(3)   .chattext[_ngcontent-%COMP%] {\r\n  bottom: 220px;\r\n  left: 270px;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:nth-child(4)   .chattext[_ngcontent-%COMP%] {\r\n  bottom: 0;\r\n  right: 336px;\r\n}\r\n\r\n.ico[_ngcontent-%COMP%] {\r\n  filter: brightness(60%);\r\n}\r\n\r\n.small[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%], .small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  height: 90%;\r\n}\r\n\r\n.ico[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  text-align: center;\r\n  border-bottom: 3px solid #fff;\r\n  position: relative;\r\n  bottom: 36px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  filter: brightness(100%) !important;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:nth-child(odd)   .ico[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  transform: scaleX(-1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtYnJhdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE4QztFQUM5QyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDREQUE2RTtBQUMvRTs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiY2hhdC1icmF2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTkyMHB4O1xyXG4gIGhlaWdodDogMTA4MHB4O1xyXG59XHJcblxyXG4uY2hhdGJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBhbmltYXRpb246IGFwcGVhci1yaWdodCAwLjVzO1xyXG59XHJcblxyXG4uY2hhdHRleHQge1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvYnJhdmUvYnViYmxlLnBuZ1wiKTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHdpZHRoOiA3MzVweDtcclxuICBoZWlnaHQ6IDE3MnB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICB3aWR0aDogNjgwcHg7XHJcbiAgaGVpZ2h0OiAxNTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJyYXZlXCI7XHJcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2JyYXZlL0FuYXJjaGFyc2lzIEJhc2ljIExGIEJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFwcGVhci1yaWdodHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmNoYXRib3g6bnRoLWNoaWxkKDEpIHtcclxuICB0b3A6IDEwMHB4O1xyXG4gIGxlZnQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY2hhdGJveDpudGgtY2hpbGQoMikge1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgcmlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY2hhdGJveDpudGgtY2hpbGQoMykge1xyXG4gIGJvdHRvbTogMTAwcHg7XHJcbiAgbGVmdDogMjAwcHg7XHJcbn1cclxuXHJcbi5jaGF0Ym94Om50aC1jaGlsZCg0KSB7XHJcbiAgYm90dG9tOiAxMDBweDtcclxuICByaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jaGF0Ym94Om50aC1jaGlsZCgxKSAuY2hhdHRleHQge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAyNzBweDtcclxufVxyXG5cclxuLmNoYXRib3g6bnRoLWNoaWxkKDIpIC5jaGF0dGV4dCB7XHJcbiAgdG9wOiAyNTVweDtcclxuICByaWdodDogMzM2cHg7XHJcbn1cclxuXHJcbi5jaGF0Ym94Om50aC1jaGlsZCgzKSAuY2hhdHRleHQge1xyXG4gIGJvdHRvbTogMjIwcHg7XHJcbiAgbGVmdDogMjcwcHg7XHJcbn1cclxuXHJcbi5jaGF0Ym94Om50aC1jaGlsZCg0KSAuY2hhdHRleHQge1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMzM2cHg7XHJcbn1cclxuXHJcbi5pY28ge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpO1xyXG59XHJcblxyXG4uc21hbGwgLmljbywgLnNtYWxsIGltZ3tcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4uaWNvIC5hdXRob3Ige1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDM2cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hhdGJveDpudGgtY2hpbGQob2RkKSAuaWNvIGltZyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "DwOM":
/*!***************************************************************!*\
  !*** ./src/app/overlays/wait-screen/wait-screen.component.ts ***!
  \***************************************************************/
/*! exports provided: WaitScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitScreenComponent", function() { return WaitScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chat/chat.component */ "+XlM");


class WaitScreenComponent {
    constructor() { }
    ngOnInit() {
    }
}
WaitScreenComponent.ɵfac = function WaitScreenComponent_Factory(t) { return new (t || WaitScreenComponent)(); };
WaitScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaitScreenComponent, selectors: [["app-wait-screen"]], decls: 3, vars: 0, consts: [[1, "overlay"], [1, "full-chat"]], template: function WaitScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"]], styles: [".full-chat[_ngcontent-%COMP%]{\r\n  width: 600px;\r\n  height: 800px;\r\n  position: relative;\r\n  background: url('chat-pmd.png');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXQtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQkFBbUQ7QUFDckQiLCJmaWxlIjoid2FpdC1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLWNoYXR7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGhlaWdodDogODAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9wbWQvY2hhdC1wbWQucG5nXCIpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "IK7o":
/*!***********************************************************!*\
  !*** ./src/app/overlays/geoguessr/geoguessr.component.ts ***!
  \***********************************************************/
/*! exports provided: GeoguessrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoguessrComponent", function() { return GeoguessrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_maps_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/maps.service */ "V8Si");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function GeoguessrComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le marqueur n'est pas encore plac\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeoguessrComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://www.countryflags.io/" + (ctx_r1.gameMarker == null ? null : ctx_r1.gameMarker.cc) + "/shiny/64.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Lat: ", ctx_r1.gameMarker.lat, ", Long: ", ctx_r1.gameMarker.lon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.gameMarker.countryDetails);
} }
function GeoguessrComponent_div_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00E7a d\u00E9goute...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeoguessrComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " En attente de la fin de la partie... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeoguessrComponent_div_6_div_5_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" D\u00E9but de la partie dans ", ctx_r7.timer, "...");
} }
function GeoguessrComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Voir dans Maps ->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeoguessrComponent_div_6_div_5_span_10_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://www.countryflags.io/" + (ctx_r6.gameSolution == null ? null : ctx_r6.gameSolution.cc) + "/shiny/64.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Lat: ", ctx_r6.gameSolution.lat, ", Long: ", ctx_r6.gameSolution.lon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.gameSolution.countryDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://google.com/maps/place/" + ctx_r6.gameSolution.lat + "," + ctx_r6.gameSolution.lon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.timer > 0);
} }
function GeoguessrComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alors que c'\u00E9tait l\u00E0.... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeoguessrComponent_div_6_span_3_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeoguessrComponent_div_6_div_4_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeoguessrComponent_div_6_div_5_Template, 11, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.gameMarker.cc && ctx_r2.gameSolution.cc && ctx_r2.gameMarker.cc !== ctx_r2.gameSolution.cc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r2.gameSolution == null ? null : ctx_r2.gameSolution.cc));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.gameSolution == null ? null : ctx_r2.gameSolution.cc);
} }
function GeoguessrComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Voir dans Maps ->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://www.countryflags.io/" + (country_r8 == null ? null : country_r8.cc) + "/shiny/64.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Lat: ", country_r8.lat, ", Long: ", country_r8.lon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", country_r8.name, ", ", country_r8.admin1, ", ", ctx_r3.gameSolution.admin2, ", ", country_r8.cc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://google.com/maps/place/" + country_r8.lat + "," + country_r8.lon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GeoguessrComponent {
    constructor(mapsService) {
        this.mapsService = mapsService;
        this.gameMarker = {};
        this.gameSolution = {};
        this.timer = 0;
        this.isBR = true;
        this.visitedCountries = [];
    }
    ngOnInit() {
        let ws = new WebSocket('ws://localhost:6306');
        ws.onclose = ev => {
            ws = null;
            console.log(ev);
        };
        ws.onopen = ev => {
            ws.send('over=');
        };
        ws.addEventListener('message', msg => {
            console.log(msg.data);
            const data = JSON.parse(msg.data);
            switch (data.state) {
                case 'start':
                    clearInterval(this.interval);
                    this.timer = 5;
                    this.interval = setInterval(() => {
                        --this.timer;
                        if (!this.timer) {
                            this.gameSolution = {};
                        }
                    }, 1000);
                    break;
                case 'sol':
                    this.gameSolution = data.rg[0];
                    this.gameSolution.countryDetails = Object.values(this.gameSolution).splice(2, 4).filter(x => x).join(', ');
                    this.visitedCountries.push(Object.assign({}, this.gameSolution));
                    break;
                case 'geo':
                    this.gameMarker = data.rg[0];
                    this.gameMarker.countryDetails = Object.values(this.gameMarker).splice(2, 4).filter(x => x).join(', ');
                    console.log(this.gameMarker);
                    break;
            }
        });
    }
    emojiFlag(cc) {
        return cc ? String.fromCodePoint(...[...cc.toUpperCase()].map(c => c.codePointAt(0) + 0x1F1E6 - 0x41)) : '';
    }
}
GeoguessrComponent.ɵfac = function GeoguessrComponent_Factory(t) { return new (t || GeoguessrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_maps_service__WEBPACK_IMPORTED_MODULE_1__["MapsService"])); };
GeoguessrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeoguessrComponent, selectors: [["app-geoguessr"]], decls: 11, vars: 4, consts: [[1, "overlay-content"], [1, "country-block"], [4, "ngIf"], ["class", "country-info", 4, "ngIf"], ["class", "solution-block", 4, "ngIf"], [1, "history"], [4, "ngFor", "ngForOf"], [1, "country-info"], [3, "src"], [1, "info-block"], [1, "solution-block"], ["class", "solution-info", 4, "ngIf"], [1, "solution-info"], [3, "href"]], template: function GeoguessrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Je pense que c'est ici...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeoguessrComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeoguessrComponent_div_5_Template, 7, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeoguessrComponent_div_6_Template, 6, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Historique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeoguessrComponent_div_10_Template, 9, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.gameMarker == null ? null : ctx.gameMarker.cc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameMarker == null ? null : ctx.gameMarker.cc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visitedCountries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".overlay-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n.country-block[_ngcontent-%COMP%], .solution-block[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  margin-right: 150px;\r\n}\r\n.solution-block[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: right;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n.solution-info[_ngcontent-%COMP%], .country-info[_ngcontent-%COMP%]{\r\n  size: 20px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: 'Roboto Slab Black', sans-serif;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  color: #fec100;\r\n  font-weight: bold;\r\n}\r\n.history[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n}\r\n.info-block[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb2d1ZXNzci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsTUFBTTtBQUNSO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNENBQTRDO0FBQzlDO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJnZW9ndWVzc3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNvdW50cnktYmxvY2ssIC5zb2x1dGlvbi1ibG9jayB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLnNvbHV0aW9uLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuLnNvbHV0aW9uLWluZm8sIC5jb3VudHJ5LWluZm97XHJcbiAgc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYiBCbGFjaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogI2ZlYzEwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhpc3Rvcnkge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uaW5mby1ibG9jayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Luet":
/*!****************************************************************!*\
  !*** ./src/app/chat-brave-small/chat-brave-small.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatBraveSmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBraveSmallComponent", function() { return ChatBraveSmallComponent; });
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat/chat.component */ "+XlM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ChatBraveSmallComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/brave/p_(" + message_r1.randomNum + ").png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", message_r1.msg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class ChatBraveSmallComponent extends _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__["ChatComponent"] {
    constructor() {
        super();
        this.IMAGE_MAX_RAND = 10;
    }
    ngOnInit() {
        super.ngOnInit();
        setInterval(el => {
            this.displayedMessages.splice(0, 1);
        }, 10000);
    }
    addMessage(tags, message) {
        const msg = message.length > 100 ? message.substr(0, 100) + '...' : message;
        console.log(msg);
        const chatMessage = {
            author: tags['display-name'],
            color: tags.color,
            msg: this.setEmotes(tags, msg),
            randomNum: this.getRandomPkmn(tags)
        };
        if (this.displayedMessages.length > this.CHAT_MAX_MESSAGES - 1) {
            this.displayedMessages.splice(0, 1);
        }
        this.displayedMessages.push(chatMessage);
    }
}
ChatBraveSmallComponent.ɵfac = function ChatBraveSmallComponent_Factory(t) { return new (t || ChatBraveSmallComponent)(); };
ChatBraveSmallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatBraveSmallComponent, selectors: [["app-chat-brave-small"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "chat"], ["class", "chatbox", 4, "ngFor", "ngForOf"], [1, "chatbox"], [1, "ico"], [3, "src"], [1, "chattext"], [1, "author"], [1, "message", 3, "innerHTML"]], template: function ChatBraveSmallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatBraveSmallComponent_div_1_Template, 8, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayedMessages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".chattext[_ngcontent-%COMP%] {\r\n  background: url('bubblesmol.png');\r\n  width: 1014px;\r\n  height: 150px;\r\n  font-size: 30px;\r\n  position: relative;\r\n  z-index: 0;\r\n  top: 0;\r\n  font-family: Brave, sans-serif;\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n}\r\n\r\n.author[_ngcontent-%COMP%], .message[_ngcontent-%COMP%] {\r\n  margin-left: 80px;\r\n}\r\n\r\n.author[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  padding: 0 15px;\r\n  text-shadow: -1px -1px 0 #000;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n  width: 700px;\r\n  line-height: 30px;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Brave\";\r\n  src: url('Anarcharsis Basic LF Bold.ttf') format(\"truetype\");\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 128px;\r\n  z-index: 1;\r\n  position: absolute;\r\n  left: 800px;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  animation: appear-right 0.5s;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.chatbox[_ngcontent-%COMP%]:nth-child(even) {\r\n  left: 40px\r\n}\r\n\r\n@keyframes appear-right{\r\n  from {\r\n    transform: translate(-20px);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtYnJhdmUtc21hbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFrRDtFQUNsRCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNERBQTZFO0FBQy9FOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJjaGF0LWJyYXZlLXNtYWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdHRleHQge1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvYnJhdmUvYnViYmxlc21vbC5wbmdcIik7XHJcbiAgd2lkdGg6IDEwMTRweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxuICB0b3A6IDA7XHJcbiAgZm9udC1mYW1pbHk6IEJyYXZlLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYXV0aG9yLCAubWVzc2FnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQnJhdmVcIjtcclxuICBzcmM6IHVybChcInNyYy9hc3NldHMvYnJhdmUvQW5hcmNoYXJzaXMgQmFzaWMgTEYgQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEyOHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDgwMHB4O1xyXG59XHJcblxyXG4uY2hhdGJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFuaW1hdGlvbjogYXBwZWFyLXJpZ2h0IDAuNXM7XHJcbn1cclxuXHJcbi5jaGF0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jaGF0Ym94Om50aC1jaGlsZChldmVuKSB7XHJcbiAgbGVmdDogNDBweFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFwcGVhci1yaWdodHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'TwitchHelper';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TZ4R":
/*!**********************************************!*\
  !*** ./src/app/games/zoom/zoom.component.ts ***!
  \**********************************************/
/*! exports provided: ZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomComponent", function() { return ZoomComponent; });
/* harmony import */ var countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countdown */ "8ZBC");
/* harmony import */ var countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(countdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ZoomComponent {
    constructor() {
        this.imgWidth = '10000%';
        this.countdown = '';
    }
    ngOnInit() {
        setInterval(() => {
            this.countdown = new countdown__WEBPACK_IMPORTED_MODULE_0__(new Date(), new Date(2022, 0, 1)).toString();
        }, 1000);
    }
    deZoom(speed) {
        const tick = setInterval(() => {
            if (this.imgWidth > '100%') {
                this.imgWidth = +this.imgWidth.split('%')[0] - speed + '%';
            }
            else {
                clearInterval(tick);
            }
        }, 100);
    }
}
ZoomComponent.ɵfac = function ZoomComponent_Factory(t) { return new (t || ZoomComponent)(); };
ZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ZoomComponent, selectors: [["app-zoom"]], decls: 2, vars: 1, template: function ZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.countdown);
    } }, styles: [".img-container[_ngcontent-%COMP%] {\r\n  width: 1000px;\r\n  height: 1000px;\r\n  overflow: hidden;\r\n  border: white 5px solid;\r\n  border-radius: 10px;\r\n  position: relative;\r\n  background: azure;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  background: cadetblue;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 4% 30%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ6b29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogd2hpdGUgNXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IGF6dXJlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDQlIDMwJTtcclxufVxyXG5cclxuaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogYXV0byBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "V8Si":
/*!******************************************!*\
  !*** ./src/app/services/maps.service.ts ***!
  \******************************************/
/*! exports provided: MapsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsService", function() { return MapsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MapsService {
    constructor(http) {
        this.http = http;
    }
}
MapsService.ɵfac = function MapsService_Factory(t) { return new (t || MapsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MapsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapsService, factory: MapsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "26w+");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/chat.service */ "sjK5");
/* harmony import */ var _common_emotes_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/emotes.directive */ "gZrd");
/* harmony import */ var _overlays_wait_screen_wait_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overlays/wait-screen/wait-screen.component */ "DwOM");
/* harmony import */ var _chat_brave_chat_brave_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat-brave/chat-brave.component */ "BUjT");
/* harmony import */ var _chat_brave_small_chat_brave_small_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat-brave-small/chat-brave-small.component */ "Luet");
/* harmony import */ var _overlays_geoguessr_geoguessr_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overlays/geoguessr/geoguessr.component */ "IK7o");
/* harmony import */ var _services_maps_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/maps.service */ "V8Si");
/* harmony import */ var _overlays_isaac_isaac_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./overlays/isaac/isaac.component */ "+qWq");
/* harmony import */ var _games_zoom_zoom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./games/zoom/zoom.component */ "TZ4R");
/* harmony import */ var _fireworks_fireworks_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fireworks/fireworks.component */ "/t43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"], _services_maps_service__WEBPACK_IMPORTED_MODULE_14__["MapsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
        _common_emotes_directive__WEBPACK_IMPORTED_MODULE_9__["EmotesDirective"],
        _overlays_wait_screen_wait_screen_component__WEBPACK_IMPORTED_MODULE_10__["WaitScreenComponent"],
        _chat_brave_chat_brave_component__WEBPACK_IMPORTED_MODULE_11__["ChatBraveComponent"],
        _chat_brave_small_chat_brave_small_component__WEBPACK_IMPORTED_MODULE_12__["ChatBraveSmallComponent"],
        _overlays_geoguessr_geoguessr_component__WEBPACK_IMPORTED_MODULE_13__["GeoguessrComponent"],
        _overlays_isaac_isaac_component__WEBPACK_IMPORTED_MODULE_15__["IsaacComponent"],
        _games_zoom_zoom_component__WEBPACK_IMPORTED_MODULE_16__["ZoomComponent"],
        _fireworks_fireworks_component__WEBPACK_IMPORTED_MODULE_17__["FireworksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();


/***/ }),

/***/ "gZrd":
/*!********************************************!*\
  !*** ./src/app/common/emotes.directive.ts ***!
  \********************************************/
/*! exports provided: EmotesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmotesDirective", function() { return EmotesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EmotesDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        console.log(this.el.nativeElement.innerText);
        const emote = this.renderer.createElement('img');
        emote.src = 'https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/3.0';
    }
}
EmotesDirective.ɵfac = function EmotesDirective_Factory(t) { return new (t || EmotesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
EmotesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EmotesDirective, selectors: [["", "appEmotes", ""]] });


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ChatService {
    constructor() {
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map