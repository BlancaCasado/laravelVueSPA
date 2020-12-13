(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Authors.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Authors.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/author_service */ "./resources/js/services/author_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "author",
  data: function data() {
    return {
      authors: [],
      authorData: {
        name: '',
        image: ''
      },
      moreExists: false,
      nextPage: 0,
      editAuthorData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadAuthors();
  },
  methods: {
    loadAuthors: function () {
      var _loadAuthors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_author_service__WEBPACK_IMPORTED_MODULE_1__["loadAuthors"]();

              case 3:
                response = _context.sent;
                this.authors = response.data.data;

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

      function loadAuthors() {
        return _loadAuthors.apply(this, arguments);
      }

      return loadAuthors;
    }(),
    attachImage: function attachImage() {
      this.authorData.image = this.$refs.newAuthorImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.newAuthorImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.authorData.image);
    },
    hideNewAuthorModal: function hideNewAuthorModal() {
      this.$refs.newAuthorModal.hide();
    },
    showNewAuthorModal: function showNewAuthorModal() {
      this.$refs.newAuthorModal.show();
    },
    createAuthor: function () {
      var _createAuthor = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append("name", this.authorData.name);
                formData.append("image", this.authorData.image);
                _context2.prev = 3;
                _context2.next = 6;
                return _services_author_service__WEBPACK_IMPORTED_MODULE_1__["createAuthor"](formData);

              case 6:
                response = _context2.sent;
                this.authors.unshift(response.data);
                this.hideNewAuthorModal();
                this.flashMessage.success({
                  message: 'Autor guardado',
                  time: 5000
                });
                this.authorData = {
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

      function createAuthor() {
        return _createAuthor.apply(this, arguments);
      }

      return createAuthor;
    }(),
    deleteAuthor: function () {
      var _deleteAuthor = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(author) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("\xBFEst\xE1s seguro de que quieres borrar\u2026? ".concat(author.name))) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_author_service__WEBPACK_IMPORTED_MODULE_1__["deleteAuthor"](author.id);

              case 5:
                this.authors = this.authors.filter(function (obj) {
                  return obj.id != author.id;
                });
                this.flashMessage.success({
                  message: 'Autor borrado correctamente',
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

      function deleteAuthor(_x) {
        return _deleteAuthor.apply(this, arguments);
      }

      return deleteAuthor;
    }(),
    hideEditAuthorModal: function hideEditAuthorModal() {
      this.$refs.editAuthorModal.hide();
    },
    showEditAuthorModal: function showEditAuthorModal() {
      this.$refs.editAuthorModal.show();
    },
    editAuthor: function editAuthor(author) {
      this.editAuthorData = _objectSpread({}, author);
      this.showEditAuthorModal();
    },
    editAttachImage: function editAttachImage() {
      this.editAuthorData.image = this.$refs.editAuthorImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.editAuthorImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editAuthorData.image);
    },
    updateAuthor: function () {
      var _updateAuthor = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('update called');
                _context4.prev = 1;
                formData = new FormData();
                formData.append('name', this.editAuthorData.name);
                formData.append('image', this.editAuthorData.image);
                formData.append('_method', 'put');
                _context4.next = 8;
                return _services_author_service__WEBPACK_IMPORTED_MODULE_1__["updateAuthor"](this.editAuthorData.id, formData);

              case 8:
                response = _context4.sent;
                this.authors.map(function (author) {
                  if (author.id == response.data.id) {
                    for (var key in response.data) {
                      author[key] = response.data[key];
                    }
                  }
                });
                this.hideEditAuthorModal();
                this.flashMessage.success({
                  message: 'Autor cambiado correctamente',
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

      function updateAuthor() {
        return _updateAuthor.apply(this, arguments);
      }

      return updateAuthor;
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
                return _services_author_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context5.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.authors.push(data);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Authors.vue?vue&type=template&id=46af4079&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Authors.vue?vue&type=template&id=46af4079& ***!
  \*****************************************************************************************************************************************************************************************************/
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
        _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Autor")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card mb-3" }, [
        _c("div", { staticClass: "card-header d-flex" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm ml-auto",
              on: { click: _vm.showNewAuthorModal }
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
              _vm._l(_vm.authors, function(author, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(author.name))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("img", {
                      staticClass: "table-image",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          author.image,
                        alt: author.name
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
                              return _vm.editAuthor(author)
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
                              return _vm.deleteAuthor(author)
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
                  _c("span", { staticClass: "fa fa-arrow-down" }),
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
          ref: "newAuthorModal",
          attrs: { "hide-footer": "", title: "Add New Author" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createAuthor($event)
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
                        value: _vm.authorData.name,
                        expression: "authorData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter author name"
                    },
                    domProps: { value: _vm.authorData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.authorData, "name", $event.target.value)
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
                  _vm.authorData.image.name
                    ? _c("div", [
                        _c("img", {
                          ref: "newAuthorImageDisplay",
                          staticClass: "w-150px",
                          attrs: { src: "" }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    ref: "newAuthorImage",
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
                      on: { click: _vm.hideNewAuthorModal }
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
          ref: "editAuthorModal",
          attrs: { "hide-footer": "", title: "Update Author" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateAuthor($event)
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
                        value: _vm.editAuthorData.name,
                        expression: "editAuthorData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter author name"
                    },
                    domProps: { value: _vm.editAuthorData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editAuthorData,
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
                      ref: "editAuthorImageDisplay",
                      staticClass: "w-150px",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          _vm.editAuthorData.image
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "editAuthorImage",
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
                      on: { click: _vm.hideEditAuthorModal }
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
      _vm._v("\n        Autores menú\n      ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/author_service.js":
/*!*************************************************!*\
  !*** ./resources/js/services/author_service.js ***!
  \*************************************************/
/*! exports provided: createAuthor, loadAuthors, deleteAuthor, updateAuthor, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthor", function() { return createAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthors", function() { return loadAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAuthor", function() { return deleteAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAuthor", function() { return updateAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createAuthor(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/authors', data);
}
function loadAuthors() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/authors');
}
function deleteAuthor(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("authors/".concat(id));
}
function updateAuthor(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("authors/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("authors?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/Authors.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Authors.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Authors_vue_vue_type_template_id_46af4079___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authors.vue?vue&type=template&id=46af4079& */ "./resources/js/views/Authors.vue?vue&type=template&id=46af4079&");
/* harmony import */ var _Authors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authors.vue?vue&type=script&lang=js& */ "./resources/js/views/Authors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Authors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Authors_vue_vue_type_template_id_46af4079___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Authors_vue_vue_type_template_id_46af4079___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Authors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Authors.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Authors.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Authors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Authors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Authors.vue?vue&type=template&id=46af4079&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Authors.vue?vue&type=template&id=46af4079& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authors_vue_vue_type_template_id_46af4079___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Authors.vue?vue&type=template&id=46af4079& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Authors.vue?vue&type=template&id=46af4079&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authors_vue_vue_type_template_id_46af4079___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authors_vue_vue_type_template_id_46af4079___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);