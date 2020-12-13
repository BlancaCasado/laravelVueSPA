(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Histories.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Histories.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/history_service */ "./resources/js/services/history_service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "history",
  data: function data() {
    return {
      histories: [],
      historyData: {
        name: '',
        image: ''
      },
      moreExists: false,
      nextPage: 0,
      editHistoryData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadHistories();
  },
  methods: {
    loadHistories: function () {
      var _loadHistories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_history_service__WEBPACK_IMPORTED_MODULE_1__["loadHistories"]();

              case 3:
                response = _context.sent;
                this.histories = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Ha ocurrido un error refresca!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadHistories() {
        return _loadHistories.apply(this, arguments);
      }

      return loadHistories;
    }(),
    attachImage: function attachImage() {
      this.historyData.image = this.$refs.newHistoryImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.newHistoryImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.historyData.image);
    },
    hideNewHistoryModal: function hideNewHistoryModal() {
      this.$refs.newHistoryModal.hide();
    },
    showNewHistoryModal: function showNewHistoryModal() {
      this.$refs.newHistoryModal.show();
    },
    createHistory: function () {
      var _createHistory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append("name", this.historyData.name);
                formData.append("image", this.historyData.image);
                _context2.prev = 3;
                _context2.next = 6;
                return _services_history_service__WEBPACK_IMPORTED_MODULE_1__["createHistory"](formData);

              case 6:
                response = _context2.sent;
                this.histories.unshift(response.data);
                this.hideNewHistoryModal();
                this.flashMessage.success({
                  message: 'Post de historia guardada',
                  time: 5000
                });
                this.historyData = {
                  name: '',
                  image: ''
                };
                _context2.next = 22;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](3);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 18 : 20;
                break;

              case 18:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 22);

              case 20:
                this.flashMessage.error({
                  message: 'Ha ocurrido un error prueba de nuevo!',
                  time: 5000
                });
                return _context2.abrupt("break", 22);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 13]]);
      }));

      function createHistory() {
        return _createHistory.apply(this, arguments);
      }

      return createHistory;
    }(),
    deleteHistory: function () {
      var _deleteHistory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(history) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("\xBFEst\xE1s seguro de que quieres borrar\u2026? ".concat(history.name))) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_history_service__WEBPACK_IMPORTED_MODULE_1__["deleteHistory"](history.id);

              case 5:
                this.histories = this.histories.filter(function (obj) {
                  return obj.id != history.id;
                });
                this.flashMessage.success({
                  message: 'Post de historia borrada correctamente',
                  time: 5000
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                this.flashMessage.error({
                  message: _context3.t0.response.data.message,
                  time: 5000
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function deleteHistory(_x) {
        return _deleteHistory.apply(this, arguments);
      }

      return deleteHistory;
    }(),
    hideEditHistoryModal: function hideEditHistoryModal() {
      this.$refs.editHistoryModal.hide();
    },
    showEditHistoryModal: function showEditHistoryModal() {
      this.$refs.editHistoryModal.show();
    },
    editHistory: function editHistory(history) {
      this.editHistoryData = _objectSpread({}, history);
      this.showEditHistoryModal();
    },
    editAttachImage: function editAttachImage() {
      this.editHistoryData.image = this.$refs.editHistoryImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.editHistoryImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editHistoryData.image);
    },
    updateHistory: function () {
      var _updateHistory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('update called');
                _context4.prev = 1;
                formData = new FormData();
                formData.append('name', this.editHistoryData.name);
                formData.append('image', this.editHistoryData.image);
                formData.append('_method', 'put');
                _context4.next = 8;
                return _services_history_service__WEBPACK_IMPORTED_MODULE_1__["updateHistory"](this.editHistoryData.id, formData);

              case 8:
                response = _context4.sent;
                this.histories.map(function (history) {
                  if (history.id == response.data.id) {
                    for (var key in response.data) {
                      history[key] = response.data[key];
                    }
                  }
                });
                this.hideEditHistoryModal();
                this.flashMessage.success({
                  message: 'Post de historia cambiada correctamente',
                  time: 5000
                });
                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](1);
                this.flashMessage.error({
                  message: _context4.t0.response.data.message,
                  time: 5000
                });

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 14]]);
      }));

      function updateHistory() {
        return _updateHistory.apply(this, arguments);
      }

      return updateHistory;
    }(),
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_history_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context5.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.histories.push(data);
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: 'Ha ocurrido un error cargando más categorías',
                  time: 5000
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Histories.vue?vue&type=template&id=a77dedba&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Histories.vue?vue&type=template&id=a77dedba& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: "/home" } }, [_vm._v("Dashboard")])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [
          _vm._v("Historia")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card mb-3" }, [
        _c("div", { staticClass: "card-header d-flex" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.$store.state.profile.role === "administrator",
                  expression: "$store.state.profile.role === 'administrator'"
                }
              ],
              staticClass: "btn btn-primary btn-sm ml-auto",
              on: { click: _vm.showNewHistoryModal }
            },
            [
              _c("span", { staticClass: "fa fa-plus" }),
              _vm._v(" Crear nuevo\n      ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("table", { staticClass: "table" }, [
            _c("thead", [
              _c("tr", [
                _c("td", [_vm._v("#")]),
                _vm._v(" "),
                _c("td", [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("td", [_vm._v("Imagen")]),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.$store.state.profile.role === "administrator",
                        expression:
                          "$store.state.profile.role === 'administrator'"
                      }
                    ]
                  },
                  [_vm._v("Acciones")]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.histories, function(history, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(history.name))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("img", {
                      staticClass: "table-image",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          history.image,
                        alt: history.name
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.$store.state.profile.role === "administrator",
                          expression:
                            "$store.state.profile.role === 'administrator'"
                        }
                      ]
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.editHistory(history)
                            }
                          }
                        },
                        [_c("span", { staticClass: "fa fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.deleteHistory(history)
                            }
                          }
                        },
                        [_c("span", { staticClass: "fa fa-trash" })]
                      )
                    ]
                  )
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.moreExists,
                  expression: "moreExists"
                }
              ],
              staticClass: "text-center"
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { type: "button" },
                  on: { click: _vm.loadMore }
                },
                [
                  _c("span", { staticClass: "fas fa-sync fa-spin" }),
                  _vm._v(" Cargar más\n        ")
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newHistoryModal",
          attrs: { "hide-footer": "", title: "Añadir nuevo post de historia" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createHistory($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Escribe el nombre")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.historyData.name,
                        expression: "historyData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Introduzca el nombre del post de historia"
                    },
                    domProps: { value: _vm.historyData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.historyData, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("Escoge una imagen")
                  ]),
                  _vm._v(" "),
                  _vm.historyData.image.name
                    ? _c("div", [
                        _c("img", {
                          ref: "newHistoryImageDisplay",
                          staticClass: "w-150px",
                          attrs: { src: "" }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    ref: "newHistoryImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.attachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideNewHistoryModal }
                    },
                    [_vm._v("\n            Cancel\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Save\n          ")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editHistoryModal",
          attrs: { "hide-footer": "", title: "Update History" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateHistory($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Escribe el nombre")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editHistoryData.name,
                        expression: "editHistoryData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Introduzca el nombre del post de historia"
                    },
                    domProps: { value: _vm.editHistoryData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editHistoryData,
                          "name",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("Escoge una imagen")
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      ref: "editHistoryImageDisplay",
                      staticClass: "w-150px",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          _vm.editHistoryData.image
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "editHistoryImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.editAttachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideEditHistoryModal }
                    },
                    [_vm._v("\n            Cancel\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Save\n          ")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area" }),
      _vm._v("\n        Historias\n      ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/history_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/history_service.js ***!
  \**************************************************/
/*! exports provided: createHistory, loadHistories, deleteHistory, updateHistory, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHistory", function() { return createHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHistories", function() { return loadHistories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHistory", function() { return deleteHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHistory", function() { return updateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createHistory(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/histories', data);
}
function loadHistories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/histories');
}
function deleteHistory(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("histories/".concat(id));
}
function updateHistory(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("histories/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("histories?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/Histories.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Histories.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Histories_vue_vue_type_template_id_a77dedba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Histories.vue?vue&type=template&id=a77dedba& */ "./resources/js/views/Histories.vue?vue&type=template&id=a77dedba&");
/* harmony import */ var _Histories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Histories.vue?vue&type=script&lang=js& */ "./resources/js/views/Histories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Histories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Histories_vue_vue_type_template_id_a77dedba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Histories_vue_vue_type_template_id_a77dedba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Histories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Histories.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Histories.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Histories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Histories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Histories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Histories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Histories.vue?vue&type=template&id=a77dedba&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Histories.vue?vue&type=template&id=a77dedba& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Histories_vue_vue_type_template_id_a77dedba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Histories.vue?vue&type=template&id=a77dedba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Histories.vue?vue&type=template&id=a77dedba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Histories_vue_vue_type_template_id_a77dedba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Histories_vue_vue_type_template_id_a77dedba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);