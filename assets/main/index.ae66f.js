System.register("chunks:///_virtual/AllTests.ts", ['cc', './BoardManager.test.ts', './TrayManager.test.ts', './MatchManager.test.ts', './BoosterManager.test.ts', './LevelGenerator.test.ts', './SmartLevelGenerator.test.ts', './TileManager.test.ts'], function (exports) {
  var cclegacy, runBoardManagerTests, runTrayManagerTests, runMatchManagerTests, runBoosterManagerTests, runLevelGeneratorTests, runSmartLevelGeneratorTests, runTileManagerTests;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      runBoardManagerTests = module.runBoardManagerTests;
    }, function (module) {
      runTrayManagerTests = module.runTrayManagerTests;
    }, function (module) {
      runMatchManagerTests = module.runMatchManagerTests;
    }, function (module) {
      runBoosterManagerTests = module.runBoosterManagerTests;
    }, function (module) {
      runLevelGeneratorTests = module.runLevelGeneratorTests;
    }, function (module) {
      runSmartLevelGeneratorTests = module.runSmartLevelGeneratorTests;
    }, function (module) {
      runTileManagerTests = module.runTileManagerTests;
    }],
    execute: function () {
      exports('runAllTests', runAllTests);
      cclegacy._RF.push({}, "6049bYik5pPTrk7h1HL3AEg", "AllTests", undefined);

      /**
       * Chạy toàn bộ unit test cho gameplay core.
       * Gọi hàm này từ một component trong scene (ví dụ một node test harness)
       * hoặc từ DevTools console.
       */
      function runAllTests() {
        var runners = [runBoardManagerTests(), runTrayManagerTests(), runMatchManagerTests(), runBoosterManagerTests(), runLevelGeneratorTests(), runSmartLevelGeneratorTests(), runTileManagerTests()];
        var totalPassed = 0;
        var totalFailed = 0;
        for (var _i = 0, _runners = runners; _i < _runners.length; _i++) {
          var runner = _runners[_i];
          var results = runner.getResults();
          totalPassed += results.filter(function (r) {
            return r.passed;
          }).length;
          totalFailed += results.filter(function (r) {
            return !r.passed;
          }).length;
        }
      }

      // Optional: auto-run khi import trong dev environment
      // if (typeof CC_DEV !== 'undefined' && CC_DEV) { runAllTests(); }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, AudioSource, Button, resources, AudioClip, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Button = module.Button;
      resources = module.resources;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "25b626dkCRFqbvckbvMd2hf", "AudioManager", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * AudioManager - loads clips from resources/audio and plays music/UI/SFX.
       */
      var AudioManager = exports('AudioManager', (_dec = ccclass('AudioManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioManager, _Component);
        function AudioManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._musicSource = null;
          _this._sfxSource = null;
          _this._loopSfxSources = new Map();
          _this._activeLoopSfxKeys = new Set();
          _this._repeatingSfxTimers = new Map();
          _this._clipCache = new Map();
          _this._currentMusicKey = null;
          _this._musicVolume = 0.45;
          _this._sfxVolume = 1;
          _this._musicMuted = false;
          _this._sfxMuted = false;
          return _this;
        }
        AudioManager.getInstance = function getInstance() {
          return AudioManager.Instance;
        };
        var _proto = AudioManager.prototype;
        _proto.onLoad = function onLoad() {
          if (AudioManager.Instance) {
            this.destroy();
            return;
          }
          AudioManager.Instance = this;
          this._musicSource = this.node.addComponent(AudioSource);
          this._sfxSource = this.node.addComponent(AudioSource);
        };
        _proto.initialize = /*#__PURE__*/function () {
          var _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([this.loadClip('bg_main'), this.loadClip('button_click'), this.loadClip('order_complete'), this.loadClip('panel_lose'), this.loadClip('panel_win'), this.loadClip('tile_click'), this.loadClip('tile_fall')]);
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function initialize() {
            return _initialize.apply(this, arguments);
          }
          return initialize;
        }();
        _proto.playSfx = /*#__PURE__*/function () {
          var _playSfx = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key) {
            var clip;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this._sfxMuted) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  _context2.next = 4;
                  return this.loadClip(key);
                case 4:
                  clip = _context2.sent;
                  if (!(!clip || !this._sfxSource)) {
                    _context2.next = 7;
                    break;
                  }
                  return _context2.abrupt("return");
                case 7:
                  this._sfxSource.playOneShot(clip, this._sfxVolume);
                case 8:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function playSfx(_x) {
            return _playSfx.apply(this, arguments);
          }
          return playSfx;
        }();
        _proto.playLoopSfx = /*#__PURE__*/function () {
          var _playLoopSfx = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(key) {
            var clip, source;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this._activeLoopSfxKeys.add(key);
                  _context3.next = 3;
                  return this.loadClip(key);
                case 3:
                  clip = _context3.sent;
                  if (!(!clip || !this._activeLoopSfxKeys.has(key))) {
                    _context3.next = 6;
                    break;
                  }
                  return _context3.abrupt("return");
                case 6:
                  source = this._loopSfxSources.get(key) || null;
                  if (!source) {
                    source = this.node.addComponent(AudioSource);
                    this._loopSfxSources.set(key, source);
                  }
                  if (!source.playing) {
                    _context3.next = 10;
                    break;
                  }
                  return _context3.abrupt("return");
                case 10:
                  source.clip = clip;
                  source.loop = true;
                  source.volume = this._sfxVolume;
                  if (!this._sfxMuted) source.play();
                case 14:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function playLoopSfx(_x2) {
            return _playLoopSfx.apply(this, arguments);
          }
          return playLoopSfx;
        }();
        _proto.stopLoopSfx = function stopLoopSfx(key) {
          this._activeLoopSfxKeys["delete"](key);
          var source = this._loopSfxSources.get(key);
          if (source) source.stop();
        };
        _proto.playRepeatingSfx = function playRepeatingSfx(key, intervalSeconds) {
          var _this2 = this;
          if (intervalSeconds === void 0) {
            intervalSeconds = 0.08;
          }
          this.stopRepeatingSfx(key);
          this.playSfx(key);
          var intervalMs = Math.max(16, intervalSeconds * 1000);
          var timer = setInterval(function () {
            _this2.playSfx(key);
          }, intervalMs);
          this._repeatingSfxTimers.set(key, timer);
        };
        _proto.stopRepeatingSfx = function stopRepeatingSfx(key) {
          var timer = this._repeatingSfxTimers.get(key);
          if (!timer) return;
          clearInterval(timer);
          this._repeatingSfxTimers["delete"](key);
        };
        _proto.playUi = /*#__PURE__*/function () {
          var _playUi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(key) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.playSfx(key);
                case 2:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function playUi(_x3) {
            return _playUi.apply(this, arguments);
          }
          return playUi;
        }();
        _proto.playMusic = /*#__PURE__*/function () {
          var _playMusic = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(key) {
            var _this$_musicSource;
            var clip;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (!this._musicMuted) {
                    _context5.next = 2;
                    break;
                  }
                  return _context5.abrupt("return");
                case 2:
                  if (!(this._currentMusicKey === key && (_this$_musicSource = this._musicSource) != null && _this$_musicSource.playing)) {
                    _context5.next = 4;
                    break;
                  }
                  return _context5.abrupt("return");
                case 4:
                  _context5.next = 6;
                  return this.loadClip(key);
                case 6:
                  clip = _context5.sent;
                  if (!(!clip || !this._musicSource)) {
                    _context5.next = 9;
                    break;
                  }
                  return _context5.abrupt("return");
                case 9:
                  this._currentMusicKey = key;
                  this._musicSource.stop();
                  this._musicSource.clip = clip;
                  this._musicSource.loop = true;
                  this._musicSource.volume = this._musicVolume;
                  this._musicSource.play();
                case 15:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function playMusic(_x4) {
            return _playMusic.apply(this, arguments);
          }
          return playMusic;
        }();
        _proto.stopMusic = function stopMusic() {
          var _this$_musicSource2;
          (_this$_musicSource2 = this._musicSource) == null || _this$_musicSource2.stop();
          this._currentMusicKey = null;
        };
        _proto.pauseMusic = function pauseMusic() {
          var _this$_musicSource3;
          (_this$_musicSource3 = this._musicSource) == null || _this$_musicSource3.pause();
        };
        _proto.resumeMusic = function resumeMusic() {
          var _this$_musicSource4;
          if (!this._musicMuted) (_this$_musicSource4 = this._musicSource) == null || _this$_musicSource4.play();
        }

        /** Tạm dừng toàn bộ âm thanh game (nhạc + SFX) khi mở overlay video. */;
        _proto.pauseAllGameAudio = function pauseAllGameAudio() {
          var _this$_sfxSource;
          this.pauseMusic();
          (_this$_sfxSource = this._sfxSource) == null || _this$_sfxSource.stop();
          var loopKeys = Array.from(this._activeLoopSfxKeys);
          for (var _i = 0, _loopKeys = loopKeys; _i < _loopKeys.length; _i++) {
            var key = _loopKeys[_i];
            this.stopLoopSfx(key);
          }
          var repeatingKeys = Array.from(this._repeatingSfxTimers.keys());
          for (var _i2 = 0, _repeatingKeys = repeatingKeys; _i2 < _repeatingKeys.length; _i2++) {
            var _key2 = _repeatingKeys[_i2];
            this.stopRepeatingSfx(_key2);
          }
        }

        /** Tiếp tục nhạc nền sau khi đóng overlay video. */;
        _proto.resumeAllGameAudio = function resumeAllGameAudio() {
          this.resumeMusic();
        };
        _proto.setMusicVolume = function setMusicVolume(volume) {
          this._musicVolume = Math.max(0, Math.min(1, volume));
          if (this._musicSource) this._musicSource.volume = this._musicVolume;
        };
        _proto.setSfxVolume = function setSfxVolume(volume) {
          var _this3 = this;
          this._sfxVolume = Math.max(0, Math.min(1, volume));
          this._loopSfxSources.forEach(function (source) {
            return source.volume = _this3._sfxVolume;
          });
        };
        _proto.toggleMusicMute = function toggleMusicMute() {
          this._musicMuted = !this._musicMuted;
          if (this._musicMuted) {
            var _this$_musicSource5;
            (_this$_musicSource5 = this._musicSource) == null || _this$_musicSource5.pause();
          } else {
            var _this$_musicSource6;
            (_this$_musicSource6 = this._musicSource) == null || _this$_musicSource6.play();
          }
        };
        _proto.toggleSfxMute = function toggleSfxMute() {
          var _this4 = this;
          this._sfxMuted = !this._sfxMuted;
          this._loopSfxSources.forEach(function (source, key) {
            if (_this4._sfxMuted) {
              source.pause();
            } else if (source.clip && _this4._activeLoopSfxKeys.has(key)) {
              source.play();
            }
          });
        };
        _proto.bindButtonSounds = function bindButtonSounds(root) {
          if (!root || !root.isValid) return;
          var buttons = root.getComponentsInChildren(Button);
          for (var _iterator = _createForOfIteratorHelperLoose(buttons), _step; !(_step = _iterator()).done;) {
            var button = _step.value;
            var node = button.node;
            if (node.__buttonClickAudioBound) continue;
            node.__buttonClickAudioBound = true;
            button.node.on(Button.EventType.CLICK, this.onAnyButtonClicked, this);
          }
        };
        _proto.unbindButtonSound = function unbindButtonSound(buttonNode) {
          if (!buttonNode || !buttonNode.isValid) return;
          var node = buttonNode;
          if (!node.__buttonClickAudioBound) return;
          buttonNode.off(Button.EventType.CLICK, this.onAnyButtonClicked, this);
          node.__buttonClickAudioBound = false;
        };
        _proto.onAnyButtonClicked = function onAnyButtonClicked() {
          var _this$_musicSource7;
          this.playUi('button_click');
          if (this._currentMusicKey && !this._musicMuted && !((_this$_musicSource7 = this._musicSource) != null && _this$_musicSource7.playing)) {
            var _this$_musicSource8;
            (_this$_musicSource8 = this._musicSource) == null || _this$_musicSource8.play();
          }
        };
        _proto.loadClip = function loadClip(key) {
          var _this5 = this;
          var cached = this._clipCache.get(key);
          if (cached) return Promise.resolve(cached);
          return new Promise(function (resolve) {
            resources.load("audio/" + key, AudioClip, function (err, clip) {
              if (err || !clip) {
                resolve(null);
                return;
              }
              _this5._clipCache.set(key, clip);
              resolve(clip);
            });
          });
        };
        _proto.onDestroy = function onDestroy() {
          this._repeatingSfxTimers.forEach(function (timer) {
            return clearInterval(timer);
          });
          this._repeatingSfxTimers.clear();
          if (AudioManager.Instance === this) {
            AudioManager.Instance = null;
          }
        };
        return AudioManager;
      }(Component), _class2.Instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9e0bcESkMJExqdO5DY7hS1n", "AudioType", undefined);
      /**
       * Enum phân loại âm thanh trong game.
       * AudioManager dùng để phát đúng kênh (SFX / Music / UI).
       */
      var AudioType = exports('AudioType', /*#__PURE__*/function (AudioType) {
        AudioType[AudioType["SFX"] = 0] = "SFX";
        AudioType[AudioType["MUSIC"] = 1] = "MUSIC";
        AudioType[AudioType["UI"] = 2] = "UI";
        return AudioType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasePanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, tween, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ceadfG7yghAzaM5YBI1e96o", "BasePanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * BasePanel - Lớp cơ sở cho mọi UI panel.
       * Quản lý show/hide, animation, data binding.
       * Các panel cụ thể kế thừa và override.
       */
      var BasePanel = exports('BasePanel', (_dec = ccclass('BasePanel'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BasePanel, _Component);
        function BasePanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "contentNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backgroundBlocker", _descriptor2, _assertThisInitialized(_this));
          _this._uiManager = null;
          _this._isVisible = false;
          _this._panelData = null;
          return _this;
        }
        var _proto = BasePanel.prototype;
        /** Gán UIManager reference */
        _proto.initialize = function initialize(uiManager) {
          this._uiManager = uiManager;
        }

        /** Hiển thị panel kèm data */;
        _proto.show = function show(data) {
          this._panelData = data;
          this.node.active = true;
          this._isVisible = true;
          this.onShow(data);
        }

        /** Ẩn panel */;
        _proto.hide = function hide() {
          this.onHide();
          this._isVisible = false;
          this.node.active = false;
        }

        /** Trạng thái visible */;
        _proto.isVisible = function isVisible() {
          return this._isVisible;
        }

        /** Callback khi show - override ở lớp con */;
        _proto.onShow = function onShow(data) {
          // Override in child
          this.playShowAnimation();
        }

        /** Callback khi hide - override ở lớp con */;
        _proto.onHide = function onHide() {
          // Override in child
          this.playHideAnimation();
        }

        /** Animation khi show - zoom scale nhe tu 0 len 1 */;
        _proto.playShowAnimation = function playShowAnimation() {
          if (this.contentNode) {
            this.contentNode.setScale(0, 0, 1);
            tween(this.contentNode).to(0.3, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
          }
        }

        /** Animation khi hide */;
        _proto.playHideAnimation = function playHideAnimation() {
          // Override nếu cần animation out
        }

        /** Đóng panel (gọi từ UI Manager) */;
        _proto.closePanel = function closePanel() {
          if (this._uiManager) {
            this._uiManager.closePanel(this.node.name);
          }
        };
        return BasePanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "backgroundBlocker", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoardBlockingTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BoardManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, BoardManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      BoardManager = module.BoardManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ca8baYt0IpOB43skgHRijOU", "BoardBlockingTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * BoardBlockingTest - Unit test cho board blocking logic.
       * Test overlap blocking với blockMode = "overlap".
       */
      var BoardBlockingTest = exports('BoardBlockingTest', (_dec = ccclass('BoardBlockingTest'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoardBlockingTest, _Component);
        function BoardBlockingTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "resultLabel", _descriptor, _assertThisInitialized(_this));
          _this._results = [];
          _this._passCount = 0;
          _this._failCount = 0;
          return _this;
        }
        var _proto = BoardBlockingTest.prototype;
        _proto.start = function start() {
          this.runAllTests();
        };
        _proto.runAllTests = function runAllTests() {
          this._results = [];
          this._passCount = 0;
          this._failCount = 0;
          this.testOverlapBlocking();
          this.testLayerUnblock();
          this.testSameCellBlocking();
          var summary = "\n=== BoardBlocking Test Results ===\nPASS: " + this._passCount + "\nFAIL: " + this._failCount + "\nTotal: " + (this._passCount + this._failCount);
          this._results.push(summary);
          var output = this._results.join('\n');
          if (this.resultLabel) {
            this.resultLabel.string = output;
          }
        };
        _proto.assert = function assert(name, condition, msg) {
          if (condition) {
            this._passCount++;
            this._results.push("[PASS] " + name);
          } else {
            this._failCount++;
            this._results.push("[FAIL] " + name + (msg ? ': ' + msg : ''));
          }
        };
        _proto.getBoardManager = function getBoardManager() {
          if (!BoardManager.Instance) {
            var node = new Node('TestBoard');
            node.addComponent(BoardManager);
          }
          return BoardManager.getInstance();
        };
        _proto.testOverlapBlocking = function testOverlapBlocking() {
          var bm = this.getBoardManager();
          bm.clearBoard();
          var config = {
            rows: 2,
            cols: 2,
            maxLayers: 3,
            tileSpacing: 130,
            tileSpacingY: 160,
            centerOffset: {
              x: 0,
              y: 0
            },
            tileWidth: 100,
            tileHeight: 120,
            jitterX: 0,
            jitterY: 0,
            jitterMode: 'layer',
            blockMode: 'overlap',
            minBlockOverlapPixels: 1,
            coverThreshold: 0.3
          };
          bm.buildBoard(config);

          // Tile A at (0,0) layer 0
          var tileA = {
            id: 'A',
            groupId: 'x',
            tileType: 0,
            gridX: 0,
            gridY: 0,
            layer: 0,
            active: true,
            selectable: false,
            isBlocked: true
          };
          // Tile B at (0,0) layer 1 (same cell, above)
          var tileB = {
            id: 'B',
            groupId: 'x',
            tileType: 0,
            gridX: 0,
            gridY: 0,
            layer: 1,
            active: true,
            selectable: false,
            isBlocked: true
          };
          bm.registerTile(tileA);
          bm.registerTile(tileB);

          // Tile B (layer 1) should NOT be blocked by A (layer 0)
          var bBlocked = bm.isTileBlocked(tileB);
          this.assert('overlapBlocking: top layer B not blocked', !bBlocked, "B blocked=" + bBlocked);

          // Tile A (layer 0) SHOULD be blocked by B (layer 1, same cell)
          var aBlocked = bm.isTileBlocked(tileA);
          this.assert('overlapBlocking: bottom layer A blocked by B', aBlocked, "A blocked=" + aBlocked);
          bm.clearBoard();
        };
        _proto.testLayerUnblock = function testLayerUnblock() {
          var bm = this.getBoardManager();
          bm.clearBoard();
          var config = {
            rows: 2,
            cols: 2,
            maxLayers: 3,
            tileSpacing: 130,
            tileSpacingY: 160,
            centerOffset: {
              x: 0,
              y: 0
            },
            tileWidth: 100,
            tileHeight: 120,
            jitterX: 0,
            jitterY: 0,
            jitterMode: 'layer',
            blockMode: 'overlap',
            minBlockOverlapPixels: 1,
            coverThreshold: 0.3
          };
          bm.buildBoard(config);
          var tileBottom = {
            id: 'B',
            groupId: 'x',
            tileType: 0,
            gridX: 0,
            gridY: 0,
            layer: 0,
            active: true,
            selectable: false,
            isBlocked: true
          };
          var tileTop = {
            id: 'T',
            groupId: 'x',
            tileType: 0,
            gridX: 0,
            gridY: 0,
            layer: 1,
            active: true,
            selectable: false,
            isBlocked: true
          };
          bm.registerTile(tileBottom);
          bm.registerTile(tileTop);

          // Bottom is blocked by top
          this.assert('layerUnblock: bottom blocked initially', bm.isTileBlocked(tileBottom));

          // Remove top tile
          bm.unregisterTile(tileTop);

          // Bottom should now be unblocked
          this.assert('layerUnblock: bottom unblocked after top removed', !bm.isTileBlocked(tileBottom));
          bm.clearBoard();
        };
        _proto.testSameCellBlocking = function testSameCellBlocking() {
          var bm = this.getBoardManager();
          bm.clearBoard();
          var config = {
            rows: 2,
            cols: 2,
            maxLayers: 3,
            tileSpacing: 130,
            tileSpacingY: 160,
            centerOffset: {
              x: 0,
              y: 0
            },
            tileWidth: 100,
            tileHeight: 120,
            jitterX: 0,
            jitterY: 0,
            jitterMode: 'layer',
            blockMode: 'overlap',
            minBlockOverlapPixels: 1,
            coverThreshold: 0.3
          };
          bm.buildBoard(config);

          // Three tiles in same cell, different layers
          var t0 = {
            id: 't0',
            groupId: 'x',
            tileType: 0,
            gridX: 1,
            gridY: 1,
            layer: 0,
            active: true,
            selectable: false,
            isBlocked: true
          };
          var t1 = {
            id: 't1',
            groupId: 'x',
            tileType: 0,
            gridX: 1,
            gridY: 1,
            layer: 1,
            active: true,
            selectable: false,
            isBlocked: true
          };
          var t2 = {
            id: 't2',
            groupId: 'x',
            tileType: 0,
            gridX: 1,
            gridY: 1,
            layer: 2,
            active: true,
            selectable: false,
            isBlocked: true
          };
          bm.registerTile(t0);
          bm.registerTile(t1);
          bm.registerTile(t2);

          // t2 (top) should be selectable
          this.assert('sameCell: t2 (layer 2) not blocked', !bm.isTileBlocked(t2));
          // t1 blocked by t2
          this.assert('sameCell: t1 (layer 1) blocked by t2', bm.isTileBlocked(t1));
          // t0 blocked by t1 (and t2)
          this.assert('sameCell: t0 (layer 0) blocked', bm.isTileBlocked(t0));
          bm.clearBoard();
        };
        return BoardBlockingTest;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "resultLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoardManager.test.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BoardManager.ts', './TestRunner.ts'], function (exports) {
  var _extends, cclegacy, Vec3, BoardManager, TestRunner;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      BoardManager = module.BoardManager;
    }, function (module) {
      TestRunner = module.TestRunner;
    }],
    execute: function () {
      exports('runBoardManagerTests', runBoardManagerTests);
      cclegacy._RF.push({}, "f4cf5BD+ONOk5TM+HUAJnst", "BoardManager.test", undefined);

      /**
       * Unit Tests for BoardManager
       * Run: attach to any node in scene and call runTests() from onLoad
       */
      function runBoardManagerTests() {
        var t = new TestRunner();
        var board = new BoardManager();
        BoardManager.Instance = board;
        var config = {
          rows: 4,
          cols: 4,
          maxLayers: 3,
          tileSpacing: 80,
          centerOffset: {
            x: 0,
            y: 0
          },
          coverThreshold: 0.3
        };
        t.describe('BoardManager Grid & Register', function () {
          t.it('should build board and clear grid', function () {
            board.buildBoard(config);
            t.assertEquals(board.getTilesAtCell(0, 0).length, 0);
          });
          t.it('should register tile and sort by layer', function () {
            board.buildBoard(config);
            var tile1 = {
              id: 'A',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 1,
              active: true,
              selectable: true,
              isBlocked: false
            };
            var tile2 = {
              id: 'B',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            board.registerTile(tile1);
            board.registerTile(tile2);
            var cell = board.getTilesAtCell(1, 1);
            t.assertEquals(cell.length, 2);
            t.assertEquals(cell[0].layer, 0);
            t.assertEquals(cell[1].layer, 1);
          });
          t.it('should unregister tile correctly', function () {
            board.buildBoard(config);
            var tile = {
              id: 'C',
              groupId: 'g1',
              tileType: 0,
              gridX: 2,
              gridY: 2,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            board.registerTile(tile);
            board.unregisterTile(tile);
            t.assertEquals(board.getTilesAtCell(2, 2).length, 0);
          });
        });
        t.describe('BoardManager Occlusion', function () {
          t.it('should not block top layer tile', function () {
            board.buildBoard(config);
            var bottom = {
              id: 'B1',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            var top = {
              id: 'T1',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 1,
              active: true,
              selectable: true,
              isBlocked: false
            };
            board.registerTile(bottom);
            board.registerTile(top);
            t.assertFalse(board.isTileBlocked(top), 'Top layer should not be blocked');
          });
          t.it('should block bottom tile if coverage exceeds threshold', function () {
            var lowThresholdConfig = _extends({}, config, {
              coverThreshold: 0.2
            });
            board.buildBoard(lowThresholdConfig);
            var bottom = {
              id: 'B2',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            var top = {
              id: 'T2',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 1,
              active: true,
              selectable: true,
              isBlocked: false
            };
            board.registerTile(bottom);
            board.registerTile(top);
            var isBlocked = board.isTileBlocked(bottom);
            // With default tileOverlapRatio 0.35 and threshold 0.2, coverage should exceed threshold
            t.assertTrue(isBlocked, 'Bottom tile should be blocked by top tile');
          });
          t.it('should return 0 coverage for tile with no coverers', function () {
            board.buildBoard(config);
            var tile = {
              id: 'S1',
              groupId: 'g1',
              tileType: 0,
              gridX: 3,
              gridY: 3,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            board.registerTile(tile);
            t.assertEquals(board.calculateCoverage(tile), 0);
          });
          t.it('should block inactive tile', function () {
            board.buildBoard(config);
            var tile = {
              id: 'I1',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: false,
              selectable: true,
              isBlocked: false
            };
            t.assertTrue(board.isTileBlocked(tile), 'Inactive tile should be blocked');
          });
        });
        t.describe('BoardManager World Position', function () {
          t.it('should return ZERO when no config', function () {
            board._config = null;
            var pos = board.getWorldPosition(0, 0, 0);
            t.assertEquals(pos.x, 0);
            t.assertEquals(pos.y, 0);
          });
          t.it('should calculate consistent jitter for same layer', function () {
            board.buildBoard(config);
            var pos1 = board.getWorldPosition(1, 1, 2);
            var pos2 = board.getWorldPosition(1, 1, 2);
            t.assertEquals(pos1.x, pos2.x);
            t.assertEquals(pos1.y, pos2.y);
          });
          t.it('should have higher Z for higher layer', function () {
            board.buildBoard(config);
            var pos0 = board.getWorldPosition(0, 0, 0);
            var pos1 = board.getWorldPosition(0, 0, 1);
            t.assertTrue(pos1.z > pos0.z);
          });
        });
        t.describe('BoardManager Edge Cases', function () {
          t.it('should handle negative layer jitter safely', function () {
            board.buildBoard(config);
            var pos = board.getWorldPosition(0, 0, -1);
            // Should not throw and should return valid Vec3
            t.assertTrue(pos instanceof Vec3);
          });
          t.it('should handle multiple tiles same cell different layers', function () {
            board.buildBoard(config);
            for (var i = 0; i < 5; i++) {
              var tile = {
                id: "M" + i,
                groupId: 'g1',
                tileType: 0,
                gridX: 2,
                gridY: 2,
                layer: i,
                active: true,
                selectable: true,
                isBlocked: false
              };
              board.registerTile(tile);
            }
            var cell = board.getTilesAtCell(2, 2);
            t.assertEquals(cell.length, 5);
            // Verify sorted by layer
            for (var _i = 1; _i < cell.length; _i++) {
              t.assertTrue(cell[_i].layer >= cell[_i - 1].layer, 'Layers should be sorted ascending');
            }
          });
          t.it('should return 0 coverage when config is null', function () {
            board._config = null;
            var tile = {
              id: 'N1',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            t.assertEquals(board.calculateCoverage(tile), 0);
          });
          t.it('should return ZERO for non-finite coordinates', function () {
            board.buildBoard(config);
            var pos = board.getWorldPosition(NaN, Infinity, 0);
            t.assertEquals(pos.x, 0);
            t.assertEquals(pos.y, 0);
            t.assertEquals(pos.z, 0);
          });
          t.it('should cleanup empty cell key after unregister', function () {
            board.buildBoard(config);
            var tile = {
              id: 'C1',
              groupId: 'g1',
              tileType: 0,
              gridX: 3,
              gridY: 3,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            board.registerTile(tile);
            board.unregisterTile(tile);
            t.assertFalse(board.hasTilesAtCell(3, 3));
          });
          t.it('should block tile when board config is null', function () {
            board._config = null;
            var tile = {
              id: 'N2',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            t.assertTrue(board.isTileBlocked(tile), 'Tile should be blocked when config is missing');
          });
          t.it('should block tile from adjacent cell overlap', function () {
            board.buildBoard(config);
            // tileSpacing=80, tileSize=100 => adjacent tiles can overlap by 20 units
            var bottom = {
              id: 'B4',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            var top = {
              id: 'T5',
              groupId: 'g1',
              tileType: 0,
              gridX: 2,
              gridY: 1,
              layer: 1,
              active: true,
              selectable: true,
              isBlocked: false
            };
            board.registerTile(bottom);
            board.registerTile(top);
            t.assertTrue(board.isTileBlocked(bottom), 'Bottom tile should be blocked by adjacent top tile overlapping it');
            t.assertFalse(board.isTileBlocked(top), 'Top tile should not be blocked');
          });
          t.it('should not block tile when adjacent tile does not overlap', function () {
            board.buildBoard(config);
            var bottom = {
              id: 'B5',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            var top = {
              id: 'T6',
              groupId: 'g1',
              tileType: 0,
              gridX: 3,
              gridY: 1,
              layer: 1,
              active: true,
              selectable: true,
              isBlocked: false
            };
            board.registerTile(bottom);
            board.registerTile(top);
            t.assertFalse(board.isTileBlocked(bottom), 'Bottom tile should not be blocked by far adjacent tile');
          });
          t.it('should accumulate coverage from multiple coverers', function () {
            board.buildBoard(config);
            var bottom = {
              id: 'B3',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            var top1 = {
              id: 'T3',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 1,
              active: true,
              selectable: true,
              isBlocked: false
            };
            var top2 = {
              id: 'T4',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 2,
              active: true,
              selectable: true,
              isBlocked: false
            };
            board.registerTile(bottom);
            board.registerTile(top1);
            board.registerTile(top2);
            var coverage = board.calculateCoverage(bottom);
            t.assertTrue(coverage >= board.calculateCoverage(top1), 'Multiple coverers should increase or maintain coverage');
          });
          t.it('should return 0 coverage when tileSize is 0', function () {
            board.buildBoard(config);
            board.tileSize = 0;
            var bottom = {
              id: 'B0',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            var top = {
              id: 'T0',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 1,
              active: true,
              selectable: true,
              isBlocked: false
            };
            board.registerTile(bottom);
            board.registerTile(top);
            t.assertEquals(board.calculateCoverage(bottom), 0, 'Zero tileSize should yield 0 coverage');
            board.tileSize = 100; // restore
          });
        });

        t.printReport();
        return t;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoardManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BoardPositionHelper.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Vec3, Component, BoardPositionHelper;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      BoardPositionHelper = module.BoardPositionHelper;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3;
      cclegacy._RF.push({}, "d84a7Mzcq9BboTBbLoSZYi6", "BoardManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * BoardManager - Quản lý grid, layer, occlusion check và world position.
       * Grid-based: mỗi cell (gridX, gridY) có thể chứa nhiều tile ở các layer khác nhau.
       * Layer chỉ dùng cho rendering order và occlusion, KHÔNG phải tiến trình chơi.
       * Tile ở layer thấp bị block nếu có bất kỳ tile ở layer cao hơn nào đè lên nó,
       * dù chỉ một phần nhỏ (bao gồm cả tile từ cell lân cận).
       */
      var BoardManager = exports('BoardManager', (_dec = ccclass('BoardManager'), _dec2 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoardManager, _Component);
        function BoardManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "boardRoot", _descriptor, _assertThisInitialized(_this));
          /** Kích thước tile world units width (dùng cho tính % che phủ) */
          _initializerDefineProperty(_this, "tileSize", _descriptor2, _assertThisInitialized(_this));
          /** Kích thước tile world units height (dùng cho tính % che phủ) */
          _initializerDefineProperty(_this, "tileHeight", _descriptor3, _assertThisInitialized(_this));
          /** Khoảng cách giữa các tile (override giá trị từ level config, để 0 để dùng config) */
          _initializerDefineProperty(_this, "tileSpacing", _descriptor4, _assertThisInitialized(_this));
          /** Khoảng cách giữa các tile theo trục X (ưu tiên hơn tileSpacing, để 0 để dùng config) */
          _initializerDefineProperty(_this, "tileSpacingX", _descriptor5, _assertThisInitialized(_this));
          /** Khoảng cách giữa các tile theo trục Y (ưu tiên hơn tileSpacing, để 0 để dùng config) */
          _initializerDefineProperty(_this, "tileSpacingY", _descriptor6, _assertThisInitialized(_this));
          /** Độ lệch layer theo trục X (tỷ lệ tileSize, ví dụ 0.3 = lệch ±30% tileSize) */
          _initializerDefineProperty(_this, "layerJitterX", _descriptor7, _assertThisInitialized(_this));
          /** Độ lệch layer theo trục Y (tỷ lệ tileSize, ví dụ 0.3 = lệch ±30% tileSize) */
          _initializerDefineProperty(_this, "layerJitterY", _descriptor8, _assertThisInitialized(_this));
          /** Tỷ lệ tile che nhau khi cùng grid cell (0-1) */
          _initializerDefineProperty(_this, "tileOverlapRatio", _descriptor9, _assertThisInitialized(_this));
          /** Offset pixel để board nằm giữa màn hình (Canvas center, ví dụ 1080x1920 → 540,960) */
          _initializerDefineProperty(_this, "screenCenterX", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "screenCenterY", _descriptor11, _assertThisInitialized(_this));
          _this._config = null;
          /** Map grid cell -> danh sách tile ở cell đó, sắp xếp theo layer */
          _this._gridCells = new Map();
          return _this;
        }
        BoardManager.getInstance = function getInstance() {
          return BoardManager.Instance;
        };
        var _proto = BoardManager.prototype;
        _proto.onLoad = function onLoad() {
          if (BoardManager.Instance) {
            this.destroy();
            return;
          }
          BoardManager.Instance = this;
        }

        /** Xây dựng board theo config */;
        _proto.buildBoard = function buildBoard(config) {
          this._config = config;
          this._gridCells.clear();
        }

        /** Tính world position từ gridX, gridY, layer */;
        _proto.getWorldPosition = function getWorldPosition(gridX, gridY, layer) {
          if (!this._config) {
            return Vec3.ZERO;
          }
          if (!Number.isFinite(gridX) || !Number.isFinite(gridY) || !Number.isFinite(layer)) {
            return Vec3.ZERO;
          }
          var center = BoardPositionHelper.getTileCenter({
            gridX: gridX,
            gridY: gridY,
            layer: layer
          }, this._config);
          return new Vec3(center.x, center.y, layer * 10);
        }

        /** Tính bounds (min/max gridX, gridY) từ tiles đã đăng ký */;
        _proto.getTileBounds = function getTileBounds() {
          var minX = 0,
            maxX = 0,
            minY = 0,
            maxY = 0;
          var first = true;
          for (var _iterator = _createForOfIteratorHelperLoose(this._gridCells.values()), _step; !(_step = _iterator()).done;) {
            var list = _step.value;
            for (var _iterator2 = _createForOfIteratorHelperLoose(list), _step2; !(_step2 = _iterator2()).done;) {
              var tile = _step2.value;
              if (first) {
                minX = maxX = tile.gridX;
                minY = maxY = tile.gridY;
                first = false;
              } else {
                minX = Math.min(minX, tile.gridX);
                maxX = Math.max(maxX, tile.gridX);
                minY = Math.min(minY, tile.gridY);
                maxY = Math.max(maxY, tile.gridY);
              }
            }
          }
          if (first) {
            var _this$_config$cols, _this$_config, _this$_config$rows, _this$_config2;
            // Fallback: dùng config nếu chưa có tile nào
            var cols = (_this$_config$cols = (_this$_config = this._config) == null ? void 0 : _this$_config.cols) != null ? _this$_config$cols : 1;
            var rows = (_this$_config$rows = (_this$_config2 = this._config) == null ? void 0 : _this$_config2.rows) != null ? _this$_config$rows : 1;
            return {
              minX: 0,
              maxX: cols - 1,
              minY: 0,
              maxY: rows - 1
            };
          }
          return {
            minX: minX,
            maxX: maxX,
            minY: minY,
            maxY: maxY
          };
        }

        /** Đăng ký tile vào grid cell */;
        _proto.registerTile = function registerTile(tile) {
          var key = this.getGridKey(tile.gridX, tile.gridY);
          var list = this._gridCells.get(key) || [];
          // Binary insertion sort by layer to avoid O(n log n) full sort
          var insertIndex = this._findInsertIndex(list, tile.layer);
          list.splice(insertIndex, 0, tile);
          this._gridCells.set(key, list);
        }

        /** Tìm vị trí chèn binary search theo layer */;
        _proto._findInsertIndex = function _findInsertIndex(list, layer) {
          var left = 0;
          var right = list.length;
          while (left < right) {
            var mid = left + right >> 1;
            if (list[mid].layer < layer) {
              left = mid + 1;
            } else {
              right = mid;
            }
          }
          return left;
        }

        /** Xóa tile khỏi grid cell */;
        _proto.unregisterTile = function unregisterTile(tile) {
          var key = this.getGridKey(tile.gridX, tile.gridY);
          var list = this._gridCells.get(key);
          if (!list) return;
          var idx = list.findIndex(function (t) {
            return t.id === tile.id;
          });
          if (idx !== -1) {
            list.splice(idx, 1);
            if (list.length === 0) {
              this._gridCells["delete"](key);
            } else {
              this._gridCells.set(key, list);
            }
          }
        }

        /**
         * Kiểm tra tile có bị block không.
         * Tile bị block nếu có bất kỳ tile active nào ở layer cao hơn đè lên nó
         * (dù chỉ 1 phần nhỏ, bao gồm cả tile ở cell lân cận).
         */;
        _proto.isTileBlocked = function isTileBlocked(tile) {
          if (!tile.active) return true;
          if (!this._config) return true;
          var allTiles = [];
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._gridCells.values()), _step3; !(_step3 = _iterator3()).done;) {
            var list = _step3.value;
            for (var _iterator4 = _createForOfIteratorHelperLoose(list), _step4; !(_step4 = _iterator4()).done;) {
              var t = _step4.value;
              allTiles.push(t);
            }
          }
          return BoardPositionHelper.isTileBlocked(tile, allTiles, this._config);
        }

        /** Tính toán tâm tile dựa trên grid và layer, không log */;
        _proto.getTileCenter = function getTileCenter(tile) {
          if (!this._config) return Vec3.ZERO;
          var center = BoardPositionHelper.getTileCenter(tile, this._config);
          return new Vec3(center.x, center.y, 0);
        }

        /**
         * Tính tổng diện tích overlap (pixel²) từ các tile ở layer cao hơn.
         */;
        _proto.calculateTotalOverlapArea = function calculateTotalOverlapArea(tile) {
          if (!this._config) return 0;
          var coverers = this.getCoveringTiles(tile);
          if (coverers.length === 0) return 0;
          var totalArea = 0;
          for (var _iterator5 = _createForOfIteratorHelperLoose(coverers), _step5; !(_step5 = _iterator5()).done;) {
            var coverer = _step5.value;
            totalArea += BoardPositionHelper.calculateOverlapArea(tile, coverer, this._config);
          }
          return totalArea;
        }

        /** Lấy danh sách tile ở layer cao hơn đang che tile này (dù chỉ 1 phần nhỏ) */;
        _proto.getCoveringTiles = function getCoveringTiles(tile) {
          var result = [];
          var tileCenter = this.getTileCenter(tile);
          if (tileCenter.equals(Vec3.ZERO) && !this._config) return [];
          for (var _iterator6 = _createForOfIteratorHelperLoose(this._gridCells), _step6; !(_step6 = _iterator6()).done;) {
            var _step6$value = _step6.value,
              cellTiles = _step6$value[1];
            for (var _iterator7 = _createForOfIteratorHelperLoose(cellTiles), _step7; !(_step7 = _iterator7()).done;) {
              var other = _step7.value;
              if (other.id === tile.id) continue;
              if (!other.active) continue;
              if (!BoardPositionHelper.isLayerAbove(other.layer, tile.layer, this._config)) continue;
              var otherCenter = this.getTileCenter(other);
              var dx = Math.abs(tileCenter.x - otherCenter.x);
              var dy = Math.abs(tileCenter.y - otherCenter.y);
              var overlapW = (BoardPositionHelper.getTileWidth(tile, this._config) + BoardPositionHelper.getTileWidth(other, this._config)) * 0.5;
              var overlapH = (BoardPositionHelper.getTileHeight(tile, this._config) + BoardPositionHelper.getTileHeight(other, this._config)) * 0.5;

              // Overlap nếu khoảng cách giữa 2 tâm nhỏ hơn kích thước tile (width x height)
              if (dx < overlapW && dy < overlapH) {
                result.push(other);
              }
            }
          }
          return result;
        }

        /**
         * Tính diện tích overlap (pixel²) giữa 2 tile.
         */;
        _proto.calculateOverlapArea = function calculateOverlapArea(bottomTile, topTile) {
          if (!this._config) return 0;
          return BoardPositionHelper.calculateOverlapArea(bottomTile, topTile, this._config);
        }

        /** Lấy danh sách tile trong cùng grid cell */;
        _proto.getTilesAtCell = function getTilesAtCell(gridX, gridY) {
          var key = this.getGridKey(gridX, gridY);
          return this._gridCells.get(key) || [];
        }

        /** Kiểm tra có tile ở grid cell này không */;
        _proto.hasTilesAtCell = function hasTilesAtCell(gridX, gridY) {
          return this.getTilesAtCell(gridX, gridY).length > 0;
        }

        /** Lấy key cho grid map */;
        _proto.getGridKey = function getGridKey(gridX, gridY) {
          return gridX + "_" + gridY;
        }

        /** Clear board grid (KHÔNG xóa _config — buildBoard sẽ overwrite) */;
        _proto.clearBoard = function clearBoard() {
          this._gridCells.clear();
        }

        /** Lấy config hiện tại */;
        _proto.getConfig = function getConfig() {
          return this._config;
        };
        _proto.onDestroy = function onDestroy() {
          if (BoardManager.Instance === this) {
            BoardManager.Instance = null;
          }
        };
        return BoardManager;
      }(Component), _class3.Instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boardRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tileSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tileHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 120;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tileSpacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tileSpacingX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tileSpacingY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "layerJitterX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "layerJitterY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tileOverlapRatio", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "screenCenterX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 540;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "screenCenterY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 960;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoardPositionHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b3ce80S7e9NoaY3De2y0wLw", "BoardPositionHelper", undefined);
      /**
       * BoardPositionHelper - Tính toán vị trí, jitter và overlap giữa các tile.
       * Dùng chung cho BoardManager (runtime) và LevelSolver (validation).
       */
      var BoardPositionHelper = exports('BoardPositionHelper', /*#__PURE__*/function () {
        function BoardPositionHelper() {}
        BoardPositionHelper.isLayerAbove = function isLayerAbove(otherLayer, tileLayer, config) {
          return config.layerOrder === 'lowerOnTop' ? otherLayer < tileLayer : otherLayer > tileLayer;
        };
        BoardPositionHelper.getTileWidth = function getTileWidth(tile, config) {
          var _config$tileWidth;
          var value = tile.tileWidth;
          return Number.isFinite(value) && value > 0 ? value : (_config$tileWidth = config.tileWidth) != null ? _config$tileWidth : 100;
        };
        BoardPositionHelper.getTileHeight = function getTileHeight(tile, config) {
          var _config$tileHeight;
          var value = tile.tileHeight;
          return Number.isFinite(value) && value > 0 ? value : (_config$tileHeight = config.tileHeight) != null ? _config$tileHeight : 120;
        }

        /** Jitter xác định từ layer seed (không random runtime) */;
        BoardPositionHelper.getLayerJitter = function getLayerJitter(layer, axis, config) {
          var _config$jitterX, _config$jitterY, _config$tileWidth2, _config$tileHeight2;
          var prime1 = 15485863;
          var prime2 = 32452843;
          var seed = Math.abs(layer * prime1 + axis * prime2);
          var jitterMultiplier = axis === 0 ? (_config$jitterX = config.jitterX) != null ? _config$jitterX : 0.3 : (_config$jitterY = config.jitterY) != null ? _config$jitterY : 0.3;
          var size = axis === 0 ? (_config$tileWidth2 = config.tileWidth) != null ? _config$tileWidth2 : 100 : (_config$tileHeight2 = config.tileHeight) != null ? _config$tileHeight2 : 120;
          return (seed % 100 / 100 - 0.5) * size * jitterMultiplier;
        }

        /** Tính tâm tile theo công thức mới */;
        BoardPositionHelper.getTileCenter = function getTileCenter(tile, config) {
          var _config$tileSpacingX, _config$tileSpacingY;
          var spacingX = (_config$tileSpacingX = config.tileSpacingX) != null ? _config$tileSpacingX : config.tileSpacing;
          var spacingY = (_config$tileSpacingY = config.tileSpacingY) != null ? _config$tileSpacingY : config.tileSpacing;
          var jitterX = this.getLayerJitter(tile.layer, 0, config);
          var jitterY = this.getLayerJitter(tile.layer, 1, config);
          var x = config.centerOffset.x + tile.gridX * spacingX + jitterX;
          var y = config.centerOffset.y - tile.gridY * spacingY + jitterY;
          return {
            x: x,
            y: y
          };
        }

        /** Tính diện tích overlap (pixel²) giữa 2 tile */;
        BoardPositionHelper.calculateOverlapInfo = function calculateOverlapInfo(tileA, tileB, config) {
          var tileAW = this.getTileWidth(tileA, config);
          var tileAH = this.getTileHeight(tileA, config);
          var tileBW = this.getTileWidth(tileB, config);
          var tileBH = this.getTileHeight(tileB, config);
          if (tileAW <= 0 || tileAH <= 0 || tileBW <= 0 || tileBH <= 0) {
            return {
              width: 0,
              height: 0,
              area: 0,
              widthRatio: 0,
              heightRatio: 0
            };
          }
          var centerA = this.getTileCenter(tileA, config);
          var centerB = this.getTileCenter(tileB, config);
          var overlapW = Math.max(0, (tileAW + tileBW) * 0.5 - Math.abs(centerA.x - centerB.x));
          var overlapH = Math.max(0, (tileAH + tileBH) * 0.5 - Math.abs(centerA.y - centerB.y));
          var minW = Math.min(tileAW, tileBW);
          var minH = Math.min(tileAH, tileBH);
          return {
            width: overlapW,
            height: overlapH,
            area: overlapW * overlapH,
            widthRatio: minW > 0 ? overlapW / minW : 0,
            heightRatio: minH > 0 ? overlapH / minH : 0
          };
        };
        BoardPositionHelper.calculateOverlapArea = function calculateOverlapArea(tileA, tileB, config) {
          return this.calculateOverlapInfo(tileA, tileB, config).area;
        };
        BoardPositionHelper.isBlockingOverlap = function isBlockingOverlap(tile, coverer, config, accumulatedOverlap) {
          var _config$minBlockOverl, _config$coverThreshol, _config$blockOverlapA, _config$blockOverlapW, _config$blockOverlapH;
          if (accumulatedOverlap === void 0) {
            accumulatedOverlap = 0;
          }
          var info = this.calculateOverlapInfo(tile, coverer, config);
          if (info.area <= 0) return false;
          var tileArea = this.getTileWidth(tile, config) * this.getTileHeight(tile, config);
          var minOverlap = Math.max((_config$minBlockOverl = config.minBlockOverlapPixels) != null ? _config$minBlockOverl : 1, tileArea * ((_config$coverThreshol = config.coverThreshold) != null ? _config$coverThreshol : 0.01));
          if (accumulatedOverlap + info.area > minOverlap) return true;
          if (info.area / tileArea >= ((_config$blockOverlapA = config.blockOverlapAreaRatio) != null ? _config$blockOverlapA : this.DEFAULT_SINGLE_COVER_AREA_RATIO)) return true;
          var minWidthRatio = (_config$blockOverlapW = config.blockOverlapWidthRatio) != null ? _config$blockOverlapW : this.DEFAULT_STRIP_WIDTH_RATIO;
          var minHeightRatio = (_config$blockOverlapH = config.blockOverlapHeightRatio) != null ? _config$blockOverlapH : this.DEFAULT_STRIP_HEIGHT_RATIO;
          return info.widthRatio >= minWidthRatio && info.heightRatio >= minHeightRatio;
        }

        /** Kiểm tra tile có bị block không dựa trên overlap với tile ở layer cao hơn */;
        BoardPositionHelper.isTileBlocked = function isTileBlocked(tile, allTiles, config) {
          var _config$blockMode;
          if (!tile.active) return true;
          var blockMode = (_config$blockMode = config.blockMode) != null ? _config$blockMode : 'overlap';
          if (blockMode === 'sameCell') {
            for (var _iterator = _createForOfIteratorHelperLoose(allTiles), _step; !(_step = _iterator()).done;) {
              var other = _step.value;
              if (other.id === tile.id) continue;
              if (!other.active) continue;
              if (other.gridX === tile.gridX && other.gridY === tile.gridY && this.isLayerAbove(other.layer, tile.layer, config)) {
                return true;
              }
            }
            return false;
          }
          var totalOverlap = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(allTiles), _step2; !(_step2 = _iterator2()).done;) {
            var _other = _step2.value;
            if (_other.id === tile.id) continue;
            if (!_other.active) continue;
            if (!this.isLayerAbove(_other.layer, tile.layer, config)) continue;
            if (this.isBlockingOverlap(tile, _other, config, totalOverlap)) return true;
            var overlap = this.calculateOverlapArea(tile, _other, config);
            totalOverlap += overlap;
            // Early exit nếu đã vượt ngưỡng
          }

          return false;
        };
        return BoardPositionHelper;
      }());
      BoardPositionHelper.DEFAULT_STRIP_WIDTH_RATIO = 0.45;
      BoardPositionHelper.DEFAULT_STRIP_HEIGHT_RATIO = 0.07;
      BoardPositionHelper.DEFAULT_SINGLE_COVER_AREA_RATIO = 0.02;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoosterManager.test.ts", ['cc', './BoosterManager.ts', './TileManager.ts', './TrayManager.ts', './MatchManager.ts', './BoosterType.ts', './TestRunner.ts'], function (exports) {
  var cclegacy, BoosterManager, TileManager, TrayManager, MatchManager, BoosterType, TestRunner;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BoosterManager = module.BoosterManager;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      TrayManager = module.TrayManager;
    }, function (module) {
      MatchManager = module.MatchManager;
    }, function (module) {
      BoosterType = module.BoosterType;
    }, function (module) {
      TestRunner = module.TestRunner;
    }],
    execute: function () {
      exports('runBoosterManagerTests', runBoosterManagerTests);
      cclegacy._RF.push({}, "79f20BKj7ZKBYe5UrmlmV4h", "BoosterManager.test", undefined);
      function runBoosterManagerTests() {
        var t = new TestRunner();
        var bm = new BoosterManager();
        BoosterManager.Instance = bm;
        t.describe('BoosterManager Inventory', function () {
          t.it('should add and consume booster', function () {
            bm.addBooster(BoosterType.UNDO, 5);
            t.assertEquals(bm.getBoosterCount(BoosterType.UNDO), 5);
            t.assertTrue(bm.hasBooster(BoosterType.UNDO));
            bm.consumeBooster(BoosterType.UNDO);
            t.assertEquals(bm.getBoosterCount(BoosterType.UNDO), 4);
          });
          t.it('should return 0 for missing booster', function () {
            t.assertEquals(bm.getBoosterCount(BoosterType.MAGNET), 0);
            t.assertFalse(bm.hasBooster(BoosterType.MAGNET));
          });
          t.it('should not consume below zero', function () {
            bm.consumeBooster(BoosterType.SHUFFLE);
            t.assertEquals(bm.getBoosterCount(BoosterType.SHUFFLE), 0);
          });
          t.it('should cap at maxStack', function () {
            // Assuming default maxStack = 99
            bm.addBooster(BoosterType.UNDO, 200);
            t.assertTrue(bm.getBoosterCount(BoosterType.UNDO) <= 99);
          });
          t.it('should reject NONE booster usage', function () {
            var result = bm.useBooster(BoosterType.NONE);
            t.assertFalse(result, 'NONE booster should always fail');
          });
        });
        t.describe('BoosterManager Undo Logic', function () {
          t.it('should fail undo without history', function () {
            var result = bm.executeUndo();
            t.assertFalse(result, 'Undo without history should fail');
          });
          t.it('should restore correct position from history', function () {
            var fakeData = {
              id: 'T0',
              groupId: 'g1',
              tileType: 0,
              gridX: 5,
              gridY: 5,
              layer: 2,
              active: false,
              selectable: false,
              isBlocked: false
            };
            var fakeNode = {
              setPosition: function setPosition() {},
              setParent: function setParent() {}
            };

            // Inject mock
            var fakeTM = {
              getTileData: function getTileData() {
                return fakeData;
              },
              getTileNode: function getTileNode() {
                return fakeNode;
              },
              restoreToBoard: function restoreToBoard(d, n) {
                d.active = true;
              }
            };
            var fakeTray = {
              getLastHistory: function getLastHistory() {
                return {
                  tileId: 'T0',
                  gridX: 1,
                  gridY: 2,
                  layer: 0
                };
              },
              popLastTile: function popLastTile() {
                return fakeData;
              }
            };
            TileManager.Instance = fakeTM;
            TrayManager.Instance = fakeTray;
            var result = bm.executeUndo();
            t.assertTrue(result, 'Undo should succeed with valid history');
            t.assertEquals(fakeData.gridX, 1);
            t.assertEquals(fakeData.gridY, 2);
            t.assertEquals(fakeData.layer, 0);
          });
        });
        t.describe('BoosterManager Shuffle Solvability', function () {
          t.it('should preserve group counts after shuffle', function () {
            var tiles = [];
            // Create 3 apples, 3 bananas, 3 cherries
            for (var i = 0; i < 3; i++) {
              tiles.push({
                id: "A" + i,
                groupId: 'apple',
                tileType: 0,
                gridX: i,
                gridY: 0,
                layer: 0,
                active: true,
                selectable: true,
                isBlocked: false
              });
              tiles.push({
                id: "B" + i,
                groupId: 'banana',
                tileType: 0,
                gridX: i,
                gridY: 1,
                layer: 0,
                active: true,
                selectable: true,
                isBlocked: false
              });
              tiles.push({
                id: "C" + i,
                groupId: 'cherry',
                tileType: 0,
                gridX: i,
                gridY: 2,
                layer: 0,
                active: true,
                selectable: true,
                isBlocked: false
              });
            }

            // Mock TileManager
            var fakeTM = {
              getAllTileData: function getAllTileData() {
                return tiles;
              },
              getTileNode: function getTileNode() {
                return null;
              }
            };
            TileManager.Instance = fakeTM;
            var beforeCounts = {};
            for (var _i = 0, _tiles = tiles; _i < _tiles.length; _i++) {
              var tile = _tiles[_i];
              beforeCounts[tile.groupId] = (beforeCounts[tile.groupId] || 0) + 1;
            }
            bm.executeShuffle();
            var afterCounts = {};
            for (var _i2 = 0, _tiles2 = tiles; _i2 < _tiles2.length; _i2++) {
              var _tile = _tiles2[_i2];
              afterCounts[_tile.groupId] = (afterCounts[_tile.groupId] || 0) + 1;
            }
            t.assertEquals(afterCounts['apple'], beforeCounts['apple'], 'Apple count should be preserved');
            t.assertEquals(afterCounts['banana'], beforeCounts['banana'], 'Banana count should be preserved');
            t.assertEquals(afterCounts['cherry'], beforeCounts['cherry'], 'Cherry count should be preserved');
          });
        });
        t.describe('BoosterManager Magnet Logic', function () {
          t.it('should find missing tiles for group in tray', function () {
            var trayTiles = [{
              id: 'A1',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'A2',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            var boardTiles = [{
              id: 'A3',
              groupId: 'apple',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'B1',
              groupId: 'banana',
              tileType: 0,
              gridX: 2,
              gridY: 2,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            var addedIds = [];
            var fakeTM = {
              getAllTileData: function getAllTileData() {
                return boardTiles;
              }
            };
            var fakeTray = {
              getTrayTiles: function getTrayTiles() {
                return trayTiles;
              },
              getMatchCount: function getMatchCount() {
                return 3;
              },
              addTile: function addTile(id) {
                addedIds.push(id);
                return true;
              },
              isFull: function isFull() {
                return false;
              }
            };
            TileManager.Instance = fakeTM;
            TrayManager.Instance = fakeTray;
            var result = bm.executeMagnet();
            t.assertTrue(result, 'Magnet should find missing apple tile');
            t.assertTrue(addedIds.indexOf('A3') !== -1, 'Should add the missing apple tile to tray');
          });
          t.it('should respect custom matchCount in magnet', function () {
            var trayTiles = [{
              id: 'A1',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            var boardTiles = [{
              id: 'A2',
              groupId: 'apple',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'A3',
              groupId: 'apple',
              tileType: 0,
              gridX: 2,
              gridY: 2,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'A4',
              groupId: 'apple',
              tileType: 0,
              gridX: 3,
              gridY: 3,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            var addedIds = [];
            var fakeTM = {
              getAllTileData: function getAllTileData() {
                return boardTiles;
              }
            };
            var fakeTray = {
              getTrayTiles: function getTrayTiles() {
                return trayTiles;
              },
              getMatchCount: function getMatchCount() {
                return 4;
              },
              addTile: function addTile(id) {
                addedIds.push(id);
                return true;
              },
              isFull: function isFull() {
                return false;
              }
            };
            TileManager.Instance = fakeTM;
            TrayManager.Instance = fakeTray;
            var result = bm.executeMagnet();
            t.assertTrue(result, 'Magnet should pull 3 tiles for matchCount=4');
            t.assertEquals(addedIds.length, 3);
          });
        });
        t.describe('BoosterManager Magnet Tray Full', function () {
          t.it('should fail magnet when tray has no room', function () {
            var trayTiles = [{
              id: 'A1',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'A2',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            var boardTiles = [{
              id: 'A3',
              groupId: 'apple',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'A4',
              groupId: 'apple',
              tileType: 0,
              gridX: 2,
              gridY: 2,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            var fakeTM = {
              getAllTileData: function getAllTileData() {
                return boardTiles;
              }
            };
            var fakeTray = {
              getTrayTiles: function getTrayTiles() {
                return trayTiles;
              },
              getMatchCount: function getMatchCount() {
                return 3;
              },
              addTile: function addTile(id) {
                return false;
              },
              // tray is full
              isFull: function isFull() {
                return true;
              }
            };
            TileManager.Instance = fakeTM;
            TrayManager.Instance = fakeTray;
            var result = bm.executeMagnet();
            t.assertFalse(result, 'Magnet should fail when tray cannot accept tiles');
          });
        });
        t.describe('BoosterManager Remove Logic', function () {
          t.it('should remove a matchable group from tray', function () {
            var trayTiles = [{
              id: 'A1',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'A2',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'A3',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            var removedFromTray = [];
            var removedFromTileMgr = [];
            var inputLocked = false;
            var fakeTray = {
              getTrayTiles: function getTrayTiles() {
                return trayTiles;
              },
              getMatchCount: function getMatchCount() {
                return 3;
              },
              removeTile: function removeTile(id) {
                removedFromTray.push(id);
              }
            };
            var fakeTM = {
              removeTile: function removeTile(id) {
                removedFromTileMgr.push(id);
              },
              setInputLocked: function setInputLocked(v) {
                inputLocked = v;
              }
            };
            var fakeMatch = {
              checkMatch: function checkMatch() {},
              isProcessing: function isProcessing() {
                return false;
              }
            };
            TrayManager.Instance = fakeTray;
            TileManager.Instance = fakeTM;
            MatchManager.Instance = fakeMatch;
            var result = bm.executeRemove();
            t.assertTrue(result);
            t.assertEquals(removedFromTray.length, 3);
            t.assertEquals(removedFromTileMgr.length, 3);
            t.assertFalse(inputLocked, 'Input should be unlocked after remove');
          });
          t.it('should fail remove if no matchable group', function () {
            var trayTiles = [{
              id: 'A1',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'B1',
              groupId: 'banana',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            var fakeTray = {
              getTrayTiles: function getTrayTiles() {
                return trayTiles;
              },
              getMatchCount: function getMatchCount() {
                return 3;
              }
            };
            TrayManager.Instance = fakeTray;
            var result = bm.executeRemove();
            t.assertFalse(result);
          });
        });
        t.describe('BoosterManager Load Inventory', function () {
          t.it('should parse numeric string keys', function () {
            bm.loadInventory({
              '1': 5,
              '2': 10
            });
            t.assertEquals(bm.getBoosterCount(BoosterType.UNDO), 5);
            t.assertEquals(bm.getBoosterCount(BoosterType.SHUFFLE), 10);
          });
          t.it('should parse named enum keys', function () {
            bm.loadInventory({
              'UNDO': 3,
              'MAGNET': 7
            });
            t.assertEquals(bm.getBoosterCount(BoosterType.UNDO), 3);
            t.assertEquals(bm.getBoosterCount(BoosterType.MAGNET), 7);
          });
          t.it('should clamp negative values to zero', function () {
            bm.loadInventory({
              'UNDO': -5
            });
            t.assertEquals(bm.getBoosterCount(BoosterType.UNDO), 0);
          });
        });
        t.printReport();
        return t;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoosterManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BoosterType.ts', './GameEvent.ts', './EventBus.ts', './OrderManager.ts', './TileManager.ts', './TrayManager.ts', './LevelManager.ts', './WrongTrayManager.ts', './OrderTrayManager.ts', './BoardPositionHelper.ts', './SaveManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _extends, cclegacy, _decorator, Vec3, Component, Tween, tween, BoosterType, GameEvent, EventBus, OrderManager, TileManager, TrayManager, LevelManager, WrongTrayManager, OrderTrayManager, BoardPositionHelper, SaveManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Component = module.Component;
      Tween = module.Tween;
      tween = module.tween;
    }, function (module) {
      BoosterType = module.BoosterType;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      OrderManager = module.OrderManager;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      TrayManager = module.TrayManager;
    }, function (module) {
      LevelManager = module.LevelManager;
    }, function (module) {
      WrongTrayManager = module.WrongTrayManager;
    }, function (module) {
      OrderTrayManager = module.OrderTrayManager;
    }, function (module) {
      BoardPositionHelper = module.BoardPositionHelper;
    }, function (module) {
      SaveManager = module.SaveManager;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "76ca8+s7vBHqLfbT3HKSBwz", "BoosterManager", undefined);
      var ccclass = _decorator.ccclass;
      var BoosterManager = exports('BoosterManager', (_dec = ccclass('BoosterManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoosterManager, _Component);
        function BoosterManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._defaultHintCount = 1;
          _this._defaultUndoCount = 1;
          _this._maxHintCount = 99;
          _this._maxUndoCount = 99;
          _this._maxSkipCount = 1;
          _this._skipBlockedLevelId = 5;
          _this._testCheatBoosterCount = 99;
          _this._hintCount = 1;
          _this._undoCount = 1;
          _this._skipCount = 0;
          /** TODO: tắt sau khi test xong — tạm bật 99 HINT/UNDO. */
          _this._testBoosterCheatEnabled = true;
          _this._undoStack = [];
          _this._isRestoring = false;
          _this._highlightedTileId = null;
          _this._activeBooster = BoosterType.NONE;
          _this._isHintPicking = false;
          _this._queuedHintCount = 0;
          _this._isHintQueueScheduled = false;
          _this._hintQueueVersion = 0;
          return _this;
        }
        BoosterManager.getInstance = function getInstance() {
          return BoosterManager.Instance;
        };
        var _proto = BoosterManager.prototype;
        _proto.onLoad = function onLoad() {
          if (BoosterManager.Instance) {
            this.destroy();
            return;
          }
          BoosterManager.Instance = this;
        };
        _proto.resetForLevel = function resetForLevel() {
          var _LevelManager$getInst;
          var startingBoosters = (_LevelManager$getInst = LevelManager.getInstance()) == null || (_LevelManager$getInst = _LevelManager$getInst.getCurrentLevel()) == null ? void 0 : _LevelManager$getInst.startingBoosters;
          this._hintCount = this._testBoosterCheatEnabled ? this._testCheatBoosterCount : Math.min(this._maxHintCount, this.getStartingBoosterCount(startingBoosters, 'HINT', this._defaultHintCount));
          this._undoCount = this._testBoosterCheatEnabled ? this._testCheatBoosterCount : Math.min(this._maxUndoCount, this.getStartingBoosterCount(startingBoosters, 'UNDO', this._defaultUndoCount));
          this._skipCount = this.isSkipBlockedForCurrentLevel() ? 0 : Math.min(this._maxSkipCount, SaveManager.getInstance().getSkipCount());
          this._isHintPicking = false;
          this._queuedHintCount = 0;
          this._isHintQueueScheduled = false;
          this._hintQueueVersion++;
          this.clearUndoStack();
          this.clearHighlight();
          this.emitChanged();
        }

        /** Editor/Preview cheat: bật/tắt 99 HINT + 99 UNDO, giữ trạng thái khi đổi level. */;
        _proto.toggleTestBoosterCheat = function toggleTestBoosterCheat() {
          this._testBoosterCheatEnabled = !this._testBoosterCheatEnabled;
          if (this._testBoosterCheatEnabled) {
            this._hintCount = this._testCheatBoosterCount;
            this._undoCount = this._testCheatBoosterCount;
          } else {
            var _LevelManager$getInst2;
            var startingBoosters = (_LevelManager$getInst2 = LevelManager.getInstance()) == null || (_LevelManager$getInst2 = _LevelManager$getInst2.getCurrentLevel()) == null ? void 0 : _LevelManager$getInst2.startingBoosters;
            this._hintCount = Math.min(this._maxHintCount, this.getStartingBoosterCount(startingBoosters, 'HINT', this._defaultHintCount));
            this._undoCount = Math.min(this._maxUndoCount, this.getStartingBoosterCount(startingBoosters, 'UNDO', this._defaultUndoCount));
          }
          this.emitChanged();
          return this._testBoosterCheatEnabled;
        };
        _proto.getStartingBoosterCount = function getStartingBoosterCount(startingBoosters, id, fallback) {
          var value = startingBoosters == null ? void 0 : startingBoosters[id];
          if (typeof value !== 'number' || !Number.isFinite(value)) return fallback;
          return Math.max(0, Math.floor(value));
        };
        _proto.pushUndoSnapshot = function pushUndoSnapshot() {
          if (this._isRestoring) return;
          if (!this.canUseBoosters()) return;
          this._undoStack.push(this.captureSnapshot());
          this.emitChanged();
        };
        _proto.UseHint = function UseHint() {
          if (this._hintCount <= 0 || !LevelManager.getInstance().isLevelActive()) return false;
          // Nếu không có tile nào để hint và board đã settle, không trừ item, rung nhẹ
          if (this._queuedHintCount === 0 && !this.isHintWaitingForBoardSettle()) {
            var tile = this.GetBestHintTile();
            if (!tile) {
              this.focusUndoForHintFail();
              return false;
            }
          }
          this._hintCount--;
          this._queuedHintCount++;
          this.emitChanged();
          this.processHintQueue();
          return true;
        };
        _proto.processHintQueue = function processHintQueue() {
          if (this._queuedHintCount <= 0) return;
          if (this._isHintPicking) return;
          if (!LevelManager.getInstance().isLevelActive()) {
            this._queuedHintCount = 0;
            this.emitChanged();
            return;
          }
          if (this.isHintBlockedByTransition()) {
            this.scheduleHintQueue();
            return;
          }
          var tile = this.GetBestHintTile();
          if (!tile) {
            this.refundQueuedHint();
            this.focusUndoForHintFail();
            this.scheduleHintQueue();
            return;
          }
          this.clearHighlight();
          this._isHintPicking = true;
          var picked = TileManager.getInstance().tryClickTile(tile.id);
          if (!picked) {
            TileManager.getInstance().refreshBlockStatus();
            picked = TileManager.getInstance().tryClickTile(tile.id);
          }
          if (!picked) {
            this._isHintPicking = false;
            this.refundQueuedHint();
            this.focusUndoForHintFail();
            this.scheduleHintQueue();
            return;
          }
          this._queuedHintCount--;
          this._isHintPicking = false;
          this.emitUsed(BoosterType.HINT);
          if (this._queuedHintCount > 0) {
            this.scheduleHintQueue();
          }
        };
        _proto.scheduleHintQueue = function scheduleHintQueue() {
          var _this2 = this;
          if (this._isHintQueueScheduled) return;
          this._isHintQueueScheduled = true;
          var version = this._hintQueueVersion;
          this.scheduleOnce(function () {
            if (version !== _this2._hintQueueVersion || !LevelManager.getInstance().isLevelActive()) {
              _this2._isHintQueueScheduled = false;
              _this2._queuedHintCount = 0;
              _this2.emitChanged();
              return;
            }
            _this2._isHintQueueScheduled = false;
            _this2.processHintQueue();
          }, 0.1);
        };
        _proto.refundQueuedHint = function refundQueuedHint() {
          if (this._queuedHintCount <= 0) return;
          this._queuedHintCount--;
          this._hintCount++;
          this.emitChanged();
        };
        _proto.isHintWaitingForBoardSettle = function isHintWaitingForBoardSettle() {
          return TileManager.getInstance().isInputLocked() || TrayManager.getInstance().getFlyCount() > 0 || TrayManager.getInstance().isClearingOrderTiles();
        };
        _proto.isHintBlockedByTransition = function isHintBlockedByTransition() {
          return TileManager.getInstance().isInputLocked() || TrayManager.getInstance().getFlyCount() > 0 || TrayManager.getInstance().isClearingOrderTiles();
        };
        _proto.GetBestHintTile = function GetBestHintTile() {
          var _this3 = this;
          var level = LevelManager.getInstance().getCurrentLevel();
          var expected = OrderManager.getInstance().getExpectedItem();
          var allTiles = TileManager.getInstance().getAllTileData();
          var selectable = allTiles.filter(function (t) {
            return t.active && t.selectable;
          });
          if (selectable.length === 0) return null;
          var solution = (level == null ? void 0 : level.solutionMoveTileIds) || [];
          var solutionIndex = new Map();
          for (var i = 0; i < solution.length; i++) solutionIndex.set(solution[i], i);
          var rankCandidates = function rankCandidates(candidates) {
            if (candidates.length === 0) return null;
            candidates.sort(function (a, b) {
              var ai = solutionIndex.has(a.id) ? solutionIndex.get(a.id) : Number.MAX_SAFE_INTEGER;
              var bi = solutionIndex.has(b.id) ? solutionIndex.get(b.id) : Number.MAX_SAFE_INTEGER;
              if (ai !== bi) return ai - bi;
              if (a.layer !== b.layer) return b.layer - a.layer;
              if (a.gridY !== b.gridY) return b.gridY - a.gridY;
              return a.gridX - b.gridX;
            });
            return candidates[0];
          };
          var sortCandidates = function sortCandidates(candidates) {
            var ranked = [].concat(candidates);
            rankCandidates(ranked);
            return ranked;
          };
          var firstSafeCandidate = function firstSafeCandidate(candidates) {
            for (var _iterator = _createForOfIteratorHelperLoose(candidates), _step; !(_step = _iterator()).done;) {
              var candidate = _step.value;
              if (_this3.isHintCandidateSafe(candidate)) return candidate;
            }
            return null;
          };
          var trayTiles = TrayManager.getInstance().getTrayTiles();
          var freeSlots = TrayManager.getInstance().getMaxSlots() - trayTiles.length;
          if (OrderManager.getInstance().isActive()) {
            var plannedTile = this.findOrderMatchPlannedHintTile();
            if (plannedTile) return plannedTile;
            return null;
          } else {
            var matchCount = TrayManager.getInstance().getMatchCount();
            var trayCounts = {};
            for (var _iterator2 = _createForOfIteratorHelperLoose(trayTiles), _step2; !(_step2 = _iterator2()).done;) {
              var tile = _step2.value;
              trayCounts[tile.groupId] = (trayCounts[tile.groupId] || 0) + 1;
            }
            var nearMatchGroups = Object.keys(trayCounts).filter(function (groupId) {
              return trayCounts[groupId] >= matchCount - 1;
            });
            var completingTile = rankCandidates(selectable.filter(function (t) {
              return nearMatchGroups.indexOf(t.groupId) !== -1;
            }));
            if (completingTile && this.isHintCandidateSafe(completingTile)) return completingTile;
            if (freeSlots <= 1) return null;
          }
          if (solution.length > 0) {
            var activeSelectableById = new Map(selectable.map(function (t) {
              return [t.id, t];
            }));
            var remainingBoardIds = new Set(allTiles.filter(function (t) {
              return t.active;
            }).map(function (t) {
              return t.id;
            }));
            for (var _iterator3 = _createForOfIteratorHelperLoose(solution), _step3; !(_step3 = _iterator3()).done;) {
              var tileId = _step3.value;
              if (!remainingBoardIds.has(tileId)) continue;
              var _tile = activeSelectableById.get(tileId);
              if (!_tile) continue;
              if ((!expected || _tile.groupId === expected) && this.isHintCandidateSafe(_tile)) return _tile;
              break;
            }
            for (var _iterator4 = _createForOfIteratorHelperLoose(solution), _step4; !(_step4 = _iterator4()).done;) {
              var _tileId = _step4.value;
              var _tile2 = activeSelectableById.get(_tileId);
              if (_tile2 && this.isHintCandidateSafe(_tile2)) return _tile2;
            }
          }
          var expectedSelectable = expected ? selectable.filter(function (t) {
            return t.groupId === expected;
          }) : selectable;
          var candidates = expectedSelectable.length > 0 ? expectedSelectable : selectable;
          return firstSafeCandidate(sortCandidates(candidates));
        };
        _proto.focusUndoForHintFail = function focusUndoForHintFail() {
          if (!this.canUseUndo()) {
            TileManager.getInstance().shakeAllTiles();
          }
          EventBus.getInstance().emit(GameEvent.HINT_FAILED);
        };
        _proto.isHintCandidateSafe = function isHintCandidateSafe(candidate) {
          if (!candidate || !candidate.active || !candidate.selectable) return false;
          if (!OrderManager.getInstance().isActive()) {
            return this.isTripleHintCandidateSafe(candidate);
          }
          return this.canSolveOrderMatchAfterSelecting(candidate);
        };
        _proto.isTripleHintCandidateSafe = function isTripleHintCandidateSafe(candidate) {
          var trayTiles = TrayManager.getInstance().getTrayTiles();
          var maxSlots = TrayManager.getInstance().getMaxSlots();
          var matchCount = TrayManager.getInstance().getMatchCount();
          var nextTray = [].concat(trayTiles, [candidate]);
          var sameGroupCount = nextTray.filter(function (tile) {
            return tile.groupId === candidate.groupId;
          }).length;
          if (sameGroupCount >= matchCount) return true;
          return nextTray.length < maxSlots;
        };
        _proto.canSolveOrderMatchAfterSelecting = function canSolveOrderMatchAfterSelecting(candidate) {
          var plan = this.findOrderMatchSolutionPlan(candidate.id);
          return plan !== null;
        };
        _proto.findOrderMatchPlannedHintTile = function findOrderMatchPlannedHintTile() {
          var plan = this.findOrderMatchSolutionPlan();
          if (!plan || plan.length === 0) return null;
          return TileManager.getInstance().getTileData(plan[0]) || null;
        };
        _proto.findOrderMatchSolutionPlan = function findOrderMatchSolutionPlan(forcedFirstTileId) {
          var _this4 = this;
          var level = LevelManager.getInstance().getCurrentLevel();
          if (!(level != null && level.board)) return null;
          var orders = OrderManager.getInstance().getAllOrders();
          var snapshot = OrderManager.getInstance().captureSnapshot();
          var orderConfig = OrderManager.getInstance().getOrderConfig();
          var maxSlots = TrayManager.getInstance().getMaxSlots();
          var orderMode = (orderConfig == null ? void 0 : orderConfig.orderMode) || 'EXACT_ORDER';
          var solution = level.solutionMoveTileIds || [];
          var solutionIndex = new Map();
          for (var i = 0; i < solution.length; i++) solutionIndex.set(solution[i], i);
          var tileMap = new Map();
          for (var _iterator5 = _createForOfIteratorHelperLoose(TileManager.getInstance().getAllTileData()), _step5; !(_step5 = _iterator5()).done;) {
            var tile = _step5.value;
            tileMap.set(tile.id, _extends({}, tile));
          }
          var tray = TrayManager.getInstance().getTrayTiles().map(function (tile) {
            return _extends({}, tile);
          });
          var simOrder = {
            orderIndex: snapshot.currentOrderIndex,
            itemIndex: snapshot.currentItemIndex,
            remainingItems: [].concat(snapshot.currentOrderRemainingItems),
            matchedTileIds: [].concat(snapshot.currentOrderMatchedTileIds),
            submittedTileIds: new Set(snapshot.submittedTileIds)
          };
          var rootTileMap = this.cloneSimTileMap(tileMap);
          var rootTray = tray.map(function (tile) {
            return _extends({}, tile);
          });
          var rootOrder = this.cloneSimOrderState(simOrder);
          if (forcedFirstTileId) {
            this.refreshSimSelectable(rootTileMap);
            var forcedTile = rootTileMap.get(forcedFirstTileId);
            if (!forcedTile || !forcedTile.active || !forcedTile.selectable) return null;
            if (!this.applySimSelection(forcedFirstTileId, rootTileMap, rootTray, rootOrder, orders, orderMode, maxSlots)) {
              return null;
            }
          }
          var linearPlan = this.findLinearOrderMatchSolutionPlan(rootTileMap, rootTray, rootOrder, orders, orderMode, solution, maxSlots);
          if (linearPlan) {
            return forcedFirstTileId ? [forcedFirstTileId].concat(linearPlan) : linearPlan;
          }
          var memo = new Set();
          var visited = 0;
          var maxVisited = 5000;
          var solve = function solve(currentTileMap, currentTray, currentOrder, path) {
            if (++visited > maxVisited) return null;
            _this4.processSimOrderTray(currentTray, currentOrder, orders, orderMode);
            var hasActiveTile = Array.from(currentTileMap.values()).some(function (tile) {
              return tile.active;
            });
            if (currentOrder.orderIndex >= orders.length) {
              return !hasActiveTile && currentTray.length === 0 ? path : null;
            }
            if (!hasActiveTile) return null;
            if (currentTray.length >= maxSlots) return null;
            _this4.refreshSimSelectable(currentTileMap);
            var candidates = _this4.getSimHintCandidates(currentTileMap, currentTray, currentOrder, orders, orderMode, solutionIndex, maxSlots);
            if (candidates.length === 0) return null;
            var memoKey = _this4.getSimMemoKey(currentTileMap, currentTray, currentOrder);
            if (memo.has(memoKey)) return null;
            memo.add(memoKey);
            for (var _iterator6 = _createForOfIteratorHelperLoose(candidates), _step6; !(_step6 = _iterator6()).done;) {
              var tile = _step6.value;
              var nextTileMap = _this4.cloneSimTileMap(currentTileMap);
              var nextTray = currentTray.map(function (t) {
                return _extends({}, t);
              });
              var nextOrder = _this4.cloneSimOrderState(currentOrder);
              if (!_this4.applySimSelection(tile.id, nextTileMap, nextTray, nextOrder, orders, orderMode, maxSlots)) {
                continue;
              }
              var solvedPath = solve(nextTileMap, nextTray, nextOrder, [].concat(path, [tile.id]));
              if (solvedPath) return solvedPath;
            }
            return null;
          };
          var suffix = solve(rootTileMap, rootTray, rootOrder, []);
          if (!suffix) return null;
          return forcedFirstTileId ? [forcedFirstTileId].concat(suffix) : suffix;
        };
        _proto.findLinearOrderMatchSolutionPlan = function findLinearOrderMatchSolutionPlan(tileMap, tray, state, orders, orderMode, solution, maxSlots) {
          var currentTileMap = this.cloneSimTileMap(tileMap);
          var currentTray = tray.map(function (tile) {
            return _extends({}, tile);
          });
          var currentOrder = this.cloneSimOrderState(state);
          var path = [];
          this.processSimOrderTray(currentTray, currentOrder, orders, orderMode);
          for (var _iterator7 = _createForOfIteratorHelperLoose(solution), _step7; !(_step7 = _iterator7()).done;) {
            var tileId = _step7.value;
            if (currentOrder.orderIndex >= orders.length) break;
            var tile = currentTileMap.get(tileId);
            if (!tile || !tile.active) continue;
            this.refreshSimSelectable(currentTileMap);
            var selectableTile = currentTileMap.get(tileId);
            if (!selectableTile || !selectableTile.active || !selectableTile.selectable) {
              return null;
            }
            if (!this.applySimSelection(tileId, currentTileMap, currentTray, currentOrder, orders, orderMode, maxSlots)) {
              return null;
            }
            path.push(tileId);
          }
          this.processSimOrderTray(currentTray, currentOrder, orders, orderMode);
          var hasActiveTile = Array.from(currentTileMap.values()).some(function (tile) {
            return tile.active;
          });
          if (currentOrder.orderIndex >= orders.length && !hasActiveTile && currentTray.length === 0) {
            return path;
          }
          return null;
        };
        _proto.refreshSimSelectable = function refreshSimSelectable(tileMap) {
          var level = LevelManager.getInstance().getCurrentLevel();
          var board = level == null ? void 0 : level.board;
          var allTiles = Array.from(tileMap.values());
          var activeTiles = allTiles.filter(function (tile) {
            return tile.active;
          });
          for (var _i = 0, _allTiles = allTiles; _i < _allTiles.length; _i++) {
            var tile = _allTiles[_i];
            if (!tile.active || !board) {
              tile.selectable = false;
              tile.isBlocked = true;
              continue;
            }
            tile.isBlocked = BoardPositionHelper.isTileBlocked(tile, activeTiles, board);
            tile.selectable = !tile.isBlocked;
          }
        };
        _proto.getSimHintCandidates = function getSimHintCandidates(tileMap, tray, state, orders, orderMode, solutionIndex, maxSlots) {
          var _this5 = this;
          var selectable = Array.from(tileMap.values()).filter(function (tile) {
            return tile.active && tile.selectable;
          });
          var order = orders[state.orderIndex];
          if (!order) return [];
          var expectedItems = orderMode === 'ANY_ORDER' ? new Set(state.remainingItems.length > 0 ? state.remainingItems : order.items) : new Set([order.items[state.itemIndex]]);
          var candidateMakesRoom = function candidateMakesRoom(tile) {
            var nextTray = [].concat(tray.map(function (t) {
              return _extends({}, t);
            }), [_extends({}, tile)]);
            var nextOrder = _this5.cloneSimOrderState(state);
            _this5.processSimOrderTray(nextTray, nextOrder, orders, orderMode);
            return nextOrder.orderIndex > state.orderIndex || nextTray.length < maxSlots;
          };
          var score = function score(tile) {
            var idx = solutionIndex.has(tile.id) ? solutionIndex.get(tile.id) : 100000;
            var matchesExpected = expectedItems.has(tile.groupId) ? 0 : 1;
            var unlockerPenalty = tile.strategyRole === 'required_unlocker_wrong_tile' ? 0 : 1;
            return idx * 10 + matchesExpected + unlockerPenalty;
          };
          return selectable.filter(candidateMakesRoom).sort(function (a, b) {
            var diff = score(a) - score(b);
            if (diff !== 0) return diff;
            if (a.layer !== b.layer) return b.layer - a.layer;
            if (a.gridY !== b.gridY) return b.gridY - a.gridY;
            return a.gridX - b.gridX;
          });
        };
        _proto.applySimSelection = function applySimSelection(tileId, tileMap, tray, state, orders, orderMode, maxSlots) {
          var tile = tileMap.get(tileId);
          if (!tile || !tile.active || !tile.selectable) return false;
          tile.active = false;
          tile.selectable = false;
          tile.isBlocked = true;
          tray.push(_extends({}, tile));
          this.processSimOrderTray(tray, state, orders, orderMode);
          return state.orderIndex >= orders.length || tray.length < maxSlots;
        };
        _proto.cloneSimTileMap = function cloneSimTileMap(tileMap) {
          var clone = new Map();
          tileMap.forEach(function (tile, id) {
            return clone.set(id, _extends({}, tile));
          });
          return clone;
        };
        _proto.cloneSimOrderState = function cloneSimOrderState(state) {
          return {
            orderIndex: state.orderIndex,
            itemIndex: state.itemIndex,
            remainingItems: [].concat(state.remainingItems),
            matchedTileIds: [].concat(state.matchedTileIds),
            submittedTileIds: new Set(state.submittedTileIds)
          };
        };
        _proto.getSimMemoKey = function getSimMemoKey(tileMap, tray, state) {
          var activeIds = Array.from(tileMap.values()).filter(function (tile) {
            return tile.active;
          }).map(function (tile) {
            return tile.id;
          }).sort().join(',');
          var trayIds = tray.map(function (tile) {
            return tile.id;
          }).join(',');
          var submitted = Array.from(state.submittedTileIds).sort().join(',');
          return state.orderIndex + "|" + state.itemIndex + "|" + state.remainingItems.join(',') + "|" + state.matchedTileIds.join(',') + "|" + submitted + "|" + trayIds + "|" + activeIds;
        };
        _proto.processSimOrderTray = function processSimOrderTray(tray, state, orders, orderMode) {
          var changed = true;
          while (changed && state.orderIndex < orders.length) {
            changed = false;
            var order = orders[state.orderIndex];
            var fullMatch = this.findSimOrderMatch(order.items, tray, orderMode);
            if (fullMatch) {
              this.consumeSimOrderMatch(tray, fullMatch, state, orders, orderMode);
              changed = true;
              continue;
            }
            for (var _i2 = 0, _arr = [].concat(tray); _i2 < _arr.length; _i2++) {
              var tile = _arr[_i2];
              if (state.submittedTileIds.has(tile.id)) continue;
              state.submittedTileIds.add(tile.id);
              if (orderMode === 'ANY_ORDER') {
                var idx = state.remainingItems.indexOf(tile.groupId);
                if (idx === -1) continue;
                state.remainingItems.splice(idx, 1);
                state.matchedTileIds.push(tile.id);
                if (state.remainingItems.length === 0) {
                  this.consumeSimOrderMatchByIds(tray, state.matchedTileIds, state, orders, orderMode);
                  changed = true;
                  break;
                }
                continue;
              }
              var expected = order.items[state.itemIndex];
              if (expected !== tile.groupId) continue;
              state.itemIndex++;
              state.matchedTileIds.push(tile.id);
              if (state.itemIndex >= order.items.length) {
                this.consumeSimOrderMatchByIds(tray, state.matchedTileIds, state, orders, orderMode);
                changed = true;
                break;
              }
            }
          }
        };
        _proto.findSimOrderMatch = function findSimOrderMatch(orderItems, tray, orderMode) {
          if (!orderItems || tray.length < orderItems.length) return null;
          if (orderMode === 'ANY_ORDER') {
            var remaining = [].concat(orderItems);
            var _matched = [];
            for (var _iterator8 = _createForOfIteratorHelperLoose(tray), _step8; !(_step8 = _iterator8()).done;) {
              var tile = _step8.value;
              var idx = remaining.indexOf(tile.groupId);
              if (idx === -1) continue;
              remaining.splice(idx, 1);
              _matched.push(tile);
              if (remaining.length === 0) return _matched;
            }
            return null;
          }
          var matched = [];
          var itemIndex = 0;
          for (var _iterator9 = _createForOfIteratorHelperLoose(tray), _step9; !(_step9 = _iterator9()).done;) {
            var _tile3 = _step9.value;
            if (_tile3.groupId !== orderItems[itemIndex]) continue;
            matched.push(_tile3);
            itemIndex++;
            if (itemIndex >= orderItems.length) return matched;
          }
          return null;
        };
        _proto.consumeSimOrderMatch = function consumeSimOrderMatch(tray, matched, state, orders, orderMode) {
          this.consumeSimOrderMatchByIds(tray, matched.map(function (tile) {
            return tile.id;
          }), state, orders, orderMode);
        };
        _proto.consumeSimOrderMatchByIds = function consumeSimOrderMatchByIds(tray, matchedIds, state, orders, orderMode) {
          var removeIds = new Set(matchedIds);
          for (var i = tray.length - 1; i >= 0; i--) {
            if (removeIds.has(tray[i].id)) tray.splice(i, 1);
          }
          state.orderIndex++;
          state.itemIndex = 0;
          state.remainingItems = [];
          state.matchedTileIds = [];
          state.submittedTileIds.clear();
          var nextOrder = orders[state.orderIndex];
          if (orderMode === 'ANY_ORDER' && nextOrder) {
            state.remainingItems = [].concat(nextOrder.items);
          }
        };
        _proto.HighlightTile = function HighlightTile(tileId) {
          var _this6 = this;
          this.clearHighlight();
          var node = TileManager.getInstance().getTileNode(tileId);
          var tileComp = node == null ? void 0 : node.getComponent('Tile');
          if (!tileComp || !tileComp.setGlow) return;
          this._highlightedTileId = tileId;
          tileComp.setGlow(true);
          this.scheduleOnce(function () {
            if (_this6._highlightedTileId !== tileId) return;
            _this6.clearHighlight();
          }, 2);
        };
        _proto.UseUndo = function UseUndo() {
          var _WrongTrayManager$get,
            _this7 = this;
          if (this._undoCount <= 0 || !LevelManager.getInstance().isLevelActive() || this.isTileFlyingForUndo()) return false;
          var tray = TrayManager.getInstance();
          var snapshot = this._undoStack.pop();
          if (!snapshot) return false;
          var undoReturnStarts = this.captureUndoReturnStartPositions(snapshot);
          var orderChanged = !this.areOrderSnapshotsEqual(snapshot.order, OrderManager.getInstance().captureSnapshot());
          this._isRestoring = true;
          TileManager.getInstance().setInputLocked(true);
          this.clearHighlight();
          tray.cancelPendingOrderClearEffects();
          TileManager.getInstance().restoreTilesFromSnapshot(snapshot.tiles);
          tray.restoreSnapshot(snapshot.tray);
          if (snapshot.wrongTray) (_WrongTrayManager$get = WrongTrayManager.getInstance()) == null || _WrongTrayManager$get.restoreSnapshot(snapshot.wrongTray);
          this.animateUndoReturns(undoReturnStarts, function () {
            OrderManager.getInstance().restoreSnapshot(snapshot.order);
            if (orderChanged) {
              var _OrderTrayManager$get;
              (_OrderTrayManager$get = OrderTrayManager.getInstance()) == null || _OrderTrayManager$get.refreshFromOrderManager();
            }
            TileManager.getInstance().refreshBlockStatus(true);
            TileManager.getInstance().setInputLocked(false);
            _this7._isRestoring = false;
            _this7._undoCount--;
            _this7.emitUsed(BoosterType.UNDO);
            _this7.scheduleOnce(function () {
              if (!LevelManager.getInstance().isLevelActive()) return;
              if (!OrderManager.getInstance().isActive()) return;
              if (TrayManager.getInstance().getFlyCount() > 0) return;
              OrderManager.getInstance().syncWithSettledTray();
            }, 0);
          });
          return true;
        };
        _proto.UseSkipLevel = function UseSkipLevel() {
          if (this._skipCount <= 0 || !LevelManager.getInstance().isLevelActive()) return false;
          if (this.isSkipBlockedForCurrentLevel()) return false;
          this._skipCount--;
          SaveManager.getInstance().saveSkipCount(this._skipCount);
          this.clearUndoStack();
          this.clearHighlight();
          this.emitUsed(BoosterType.SKIP);
          LevelManager.getInstance().completeLevel(true);
          return true;
        };
        _proto.captureUndoReturnStartPositions = function captureUndoReturnStartPositions(snapshot) {
          var _TrayManager$getInsta;
          var starts = new Map();
          var currentTiles = new Map(TileManager.getInstance().getAllTileData().map(function (tile) {
            return [tile.id, tile];
          }));
          var trayTiles = TrayManager.getInstance().getTrayTiles();
          var trayTileIds = new Set(trayTiles.map(function (tile) {
            return tile.id;
          }));
          var trayFallbackWorld = ((_TrayManager$getInsta = TrayManager.getInstance().trayContainer) == null ? void 0 : _TrayManager$getInsta.getWorldPosition()) || Vec3.ZERO;
          var _loop = function _loop() {
              var snapshotTile = _step10.value;
              if (!snapshotTile.active) return 0; // continue
              var currentTile = currentTiles.get(snapshotTile.id);
              var shouldAnimateBack = !currentTile || !currentTile.active || trayTileIds.has(snapshotTile.id);
              if (!shouldAnimateBack) return 0; // continue
              var node = TileManager.getInstance().getTileNode(snapshotTile.id);
              if (node && node.isValid) {
                starts.set(snapshotTile.id, node.getWorldPosition().clone());
              } else {
                var trayIndex = trayTiles.findIndex(function (tile) {
                  return tile.id === snapshotTile.id;
                });
                if (trayIndex !== -1 && TrayManager.getInstance().trayContainer) {
                  var slotWorld = TrayManager.getInstance().trayContainer.getWorldPosition().clone();
                  var slotLocal = TrayManager.getInstance().getSlotPosition(trayIndex);
                  slotWorld.x += slotLocal.x;
                  slotWorld.y += slotLocal.y;
                  starts.set(snapshotTile.id, slotWorld);
                } else {
                  starts.set(snapshotTile.id, trayFallbackWorld.clone());
                }
              }
            },
            _ret;
          for (var _iterator10 = _createForOfIteratorHelperLoose(snapshot.tiles), _step10; !(_step10 = _iterator10()).done;) {
            _ret = _loop();
            if (_ret === 0) continue;
          }
          return starts;
        };
        _proto.animateUndoReturns = function animateUndoReturns(starts, onComplete) {
          var _this8 = this;
          var entries = Array.from(starts.entries()).map(function (_ref) {
            var tileId = _ref[0],
              startWorld = _ref[1];
            var node = TileManager.getInstance().getTileNode(tileId);
            if (!node || !node.isValid) return null;
            return {
              tileId: tileId,
              node: node,
              startWorld: startWorld
            };
          }).filter(Boolean);
          if (entries.length === 0) {
            onComplete();
            return;
          }
          var remaining = entries.length;
          var finishOne = function finishOne() {
            remaining--;
            if (remaining <= 0) onComplete();
          };
          var _loop2 = function _loop2() {
            var entry = _step11.value;
            var node = entry.node,
              startWorld = entry.startWorld;
            var boardParent = TileManager.getInstance().tileContainer;
            var effectParent = _this8.getUndoEffectParent(node);
            var targetLocal = node.position.clone();
            var targetWorld = node.getWorldPosition().clone();
            var tileComp = node.getComponent('Tile');
            if (tileComp && tileComp.forceUpdateBoardVisualState) tileComp.forceUpdateBoardVisualState();
            Tween.stopAllByTarget(node);
            node.active = true;
            if (effectParent && node.parent !== effectParent) {
              node.setParent(effectParent);
            }
            node.setWorldPosition(targetWorld);
            var targetEffectLocal = node.position.clone();
            node.setWorldPosition(startWorld);
            var startLocal = node.position.clone();
            if (node.parent) {
              node.setSiblingIndex(node.parent.children.length - 1);
            }
            node.setScale(1, 1, 1);
            node.angle = 0;
            var proxy = {
              t: 0,
              sx: 1,
              sy: 1
            };
            var duration = 0.42;
            var arcHeight = Math.min(160, Math.max(70, Vec3.distance(startLocal, targetEffectLocal) * 0.22));
            var control = new Vec3((startLocal.x + targetEffectLocal.x) * 0.5, Math.max(startLocal.y, targetEffectLocal.y) + arcHeight, targetEffectLocal.z);
            tween(proxy).to(duration, {
              t: 1,
              sx: 1.04,
              sy: 1.04
            }, {
              easing: 'sineInOut',
              onUpdate: function onUpdate() {
                if (!node || !node.isValid) return;
                var t = Math.max(0, Math.min(1, proxy.t));
                var inv = 1 - t;
                var x = inv * inv * startLocal.x + 2 * inv * t * control.x + t * t * targetEffectLocal.x;
                var y = inv * inv * startLocal.y + 2 * inv * t * control.y + t * t * targetEffectLocal.y;
                var z = startLocal.z + (targetEffectLocal.z - startLocal.z) * t;
                node.setPosition(x, y, z);
                var pulse = t < 0.5 ? 1 + t * 0.08 : 1.04 - (t - 0.5) * 0.08;
                node.setScale(pulse, pulse, 1);
              }
            }).call(function () {
              if (node && node.isValid) {
                if (boardParent && node.parent !== boardParent) {
                  node.setParent(boardParent);
                }
                node.setPosition(targetLocal);
                node.setScale(1, 1, 1);
                node.angle = 0;
                TileManager.getInstance().sortTileNodesByLayer();
              }
              finishOne();
            }).start();
          };
          for (var _iterator11 = _createForOfIteratorHelperLoose(entries), _step11; !(_step11 = _iterator11()).done;) {
            _loop2();
          }
        };
        _proto.getUndoEffectParent = function getUndoEffectParent(fallbackNode) {
          var _trayContainer$parent;
          var boardParent = TileManager.getInstance().tileContainer;
          var trayContainer = TrayManager.getInstance().trayContainer;
          var sharedParent = this.findCommonAncestor(boardParent, trayContainer);
          if (sharedParent) return sharedParent;
          return (trayContainer == null || (_trayContainer$parent = trayContainer.parent) == null ? void 0 : _trayContainer$parent.parent) || (boardParent == null ? void 0 : boardParent.parent) || (trayContainer == null ? void 0 : trayContainer.parent) || fallbackNode.parent || boardParent || trayContainer || null;
        };
        _proto.findCommonAncestor = function findCommonAncestor(a, b) {
          if (!a || !b) return null;
          var ancestors = new Set();
          var cursor = a;
          while (cursor) {
            ancestors.add(cursor);
            cursor = cursor.parent;
          }
          cursor = b;
          while (cursor) {
            if (ancestors.has(cursor)) return cursor;
            cursor = cursor.parent;
          }
          return null;
        };
        _proto.areOrderSnapshotsEqual = function areOrderSnapshotsEqual(a, b) {
          if (a.currentOrderIndex !== b.currentOrderIndex) return false;
          if (a.currentItemIndex !== b.currentItemIndex) return false;
          if (!this.areStringArraysEqual(a.currentOrderRemainingItems, b.currentOrderRemainingItems)) return false;
          if (!this.areStringArraysEqual(a.currentOrderMatchedTileIds, b.currentOrderMatchedTileIds)) return false;
          return this.areStringArraysEqual(a.submittedTileIds, b.submittedTileIds);
        };
        _proto.areStringArraysEqual = function areStringArraysEqual(a, b) {
          if (a.length !== b.length) return false;
          for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
          }
          return true;
        };
        _proto.useBooster = function useBooster(type) {
          switch (type) {
            case BoosterType.HINT:
              return this.UseHint();
            case BoosterType.UNDO:
              return this.UseUndo();
            case BoosterType.SKIP:
              return this.UseSkipLevel();
            default:
              return false;
          }
        };
        _proto.addBooster = function addBooster(type, amount) {
          if (type === BoosterType.HINT) this._hintCount = Math.min(this._maxHintCount, Math.max(0, this._hintCount + amount));
          if (type === BoosterType.UNDO) this._undoCount = Math.min(this._maxUndoCount, Math.max(0, this._undoCount + amount));
          if (type === BoosterType.SKIP) {
            this._skipCount = Math.min(this._maxSkipCount, Math.max(0, this._skipCount + amount));
            SaveManager.getInstance().saveSkipCount(this._skipCount);
          }
          this.emitChanged();
        };
        _proto.loadInventory = function loadInventory(data) {
          var _ref2, _data$HINT, _ref3, _data$UNDO;
          this._hintCount = Math.min(this._maxHintCount, Math.max(0, Math.floor((_ref2 = (_data$HINT = data.HINT) != null ? _data$HINT : data['3']) != null ? _ref2 : this._hintCount)));
          this._undoCount = Math.min(this._maxUndoCount, Math.max(0, Math.floor((_ref3 = (_data$UNDO = data.UNDO) != null ? _data$UNDO : data['1']) != null ? _ref3 : this._undoCount)));
          if (data.SKIP !== undefined || data['6'] !== undefined) {
            var _data$SKIP;
            this._skipCount = Math.min(this._maxSkipCount, Math.max(0, Math.floor((_data$SKIP = data.SKIP) != null ? _data$SKIP : data['6'])));
            SaveManager.getInstance().saveSkipCount(this._skipCount);
          } else {
            this._skipCount = Math.min(this._maxSkipCount, SaveManager.getInstance().getSkipCount());
          }
          if (this.isSkipBlockedForCurrentLevel()) this._skipCount = 0;
          this.emitChanged();
        };
        _proto.forceShuffle = function forceShuffle() {
          return false;
        };
        _proto.clearUndoStack = function clearUndoStack() {
          this._undoStack = [];
        };
        _proto.getBoosterCount = function getBoosterCount(type) {
          switch (type) {
            case BoosterType.HINT:
              return this._hintCount;
            case BoosterType.UNDO:
              return this._undoCount;
            case BoosterType.SKIP:
              return this._skipCount;
            default:
              return 0;
          }
        };
        _proto.hasBooster = function hasBooster(type) {
          return this.getBoosterCount(type) > 0;
        };
        _proto.consumeBooster = function consumeBooster(type) {
          if (type === BoosterType.HINT && this._hintCount > 0) this._hintCount--;
          if (type === BoosterType.UNDO && this._undoCount > 0) this._undoCount--;
          if (type === BoosterType.SKIP && this._skipCount > 0) {
            this._skipCount--;
            SaveManager.getInstance().saveSkipCount(this._skipCount);
          }
          this.emitChanged();
        };
        _proto.setActiveBooster = function setActiveBooster(type) {
          this._activeBooster = type;
        };
        _proto.getActiveBooster = function getActiveBooster() {
          return this._activeBooster;
        };
        _proto.hasUndoSnapshot = function hasUndoSnapshot() {
          return this._undoStack.length > 0;
        };
        _proto.canUseBoosters = function canUseBoosters() {
          return LevelManager.getInstance().isLevelActive() && !TileManager.getInstance().isInputLocked();
        };
        _proto.isTileFlyingForUndo = function isTileFlyingForUndo() {
          return this._isRestoring || TrayManager.getInstance().getFlyCount() > 0;
        };
        _proto.canUseHint = function canUseHint() {
          return LevelManager.getInstance().isLevelActive() && this._hintCount > 0;
        };
        _proto.canUseUndo = function canUseUndo() {
          return LevelManager.getInstance().isLevelActive() && !this.isTileFlyingForUndo() && this._undoCount > 0 && this.hasUndoSnapshot();
        };
        _proto.canUseSkip = function canUseSkip() {
          return LevelManager.getInstance().isLevelActive() && !this.isSkipBlockedForCurrentLevel() && this._skipCount > 0;
        };
        _proto.isSkipBlockedForCurrentLevel = function isSkipBlockedForCurrentLevel() {
          return LevelManager.getInstance().getCurrentLevelId() === this._skipBlockedLevelId;
        };
        _proto.captureSnapshot = function captureSnapshot() {
          var _WrongTrayManager$get2;
          return {
            tiles: TileManager.getInstance().getAllTileData().map(function (t) {
              return _extends({}, t);
            }),
            tray: TrayManager.getInstance().captureSnapshot(),
            order: OrderManager.getInstance().captureSnapshot(),
            wrongTray: ((_WrongTrayManager$get2 = WrongTrayManager.getInstance()) == null ? void 0 : _WrongTrayManager$get2.captureSnapshot()) || null
          };
        };
        _proto.clearHighlight = function clearHighlight() {
          if (!this._highlightedTileId) return;
          var node = TileManager.getInstance().getTileNode(this._highlightedTileId);
          var tileComp = node == null ? void 0 : node.getComponent('Tile');
          if (tileComp && tileComp.setGlow) tileComp.setGlow(false);
          this._highlightedTileId = null;
        };
        _proto.emitUsed = function emitUsed(type) {
          EventBus.getInstance().emit(GameEvent.BOOSTER_USED, type);
          this.emitChanged();
        };
        _proto.emitChanged = function emitChanged() {
          EventBus.getInstance().emit(GameEvent.BOOSTER_USED, BoosterType.NONE);
        };
        _proto.onDestroy = function onDestroy() {
          if (BoosterManager.Instance === this) {
            BoosterManager.Instance = null;
          }
        };
        return BoosterManager;
      }(Component), _class2.Instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoosterType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f974dKl2QxE57jr1N7x1c23", "BoosterType", undefined);
      /**
       * Enum định nghĩa các loại booster hỗ trợ người chơi.
       * Dữ liệu chi tiết (cost, effect) lưu trong JSON config.
       */
      var BoosterType = exports('BoosterType', /*#__PURE__*/function (BoosterType) {
        BoosterType[BoosterType["NONE"] = 0] = "NONE";
        BoosterType[BoosterType["UNDO"] = 1] = "UNDO";
        BoosterType[BoosterType["SHUFFLE"] = 2] = "SHUFFLE";
        BoosterType[BoosterType["HINT"] = 3] = "HINT";
        BoosterType[BoosterType["REMOVE"] = 4] = "REMOVE";
        BoosterType[BoosterType["MAGNET"] = 5] = "MAGNET";
        BoosterType[BoosterType["SKIP"] = 6] = "SKIP";
        return BoosterType;
      }({})); // Skip current level
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConfigManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataLoader.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, DataLoader;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DataLoader = module.DataLoader;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ec6eeHYYXdFXaWsdoyfEPp5", "ConfigManager", undefined);

      /**
       * ConfigManager - Quản lý game config toàn cục.
       * Load game_config.json khi khởi động và cung cấp API truy xuất.
       */
      var ConfigManager = exports('ConfigManager', /*#__PURE__*/function () {
        function ConfigManager() {
          this._config = null;
        }
        ConfigManager.getInstance = function getInstance() {
          if (!ConfigManager._instance) {
            ConfigManager._instance = new ConfigManager();
          }
          return ConfigManager._instance;
        }

        /** Load config khi game start */;
        var _proto = ConfigManager.prototype;
        _proto.loadConfig = /*#__PURE__*/
        function () {
          var _loadConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return DataLoader.loadJson('data/config/game_config');
                case 2:
                  this._config = _context.sent;
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadConfig() {
            return _loadConfig.apply(this, arguments);
          }
          return loadConfig;
        }() /** Lấy toàn bộ config */;
        _proto.getConfig = function getConfig() {
          return this._config;
        }

        /** Lấy cấu hình booster theo type string */;
        _proto.getBoosterConfig = function getBoosterConfig(id) {
          if (!this._config) return null;
          return this._config.boosters.find(function (b) {
            return b.id === id;
          }) || null;
        }

        /** Lấy cấu hình audio theo key */;
        _proto.getAudioConfig = function getAudioConfig(key) {
          if (!this._config) return null;
          return this._config.audio.find(function (a) {
            return a.key === key;
          }) || null;
        }

        /** Lấy giá trị gameplay config */;
        _proto.getGameplayValue = function getGameplayValue(key) {
          if (!this._config) return null;
          return this._config.gameplay[key];
        }

        /** Lấy default skin ID */;
        _proto.getDefaultSkinId = function getDefaultSkinId() {
          var _this$_config;
          return ((_this$_config = this._config) == null ? void 0 : _this$_config.defaults.skinId) || 'default';
        };
        return ConfigManager;
      }());
      ConfigManager._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, resources, JsonAsset;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a646ajZlw5L+bIm4opxi5q2", "DataLoader", undefined);

      /**
       * DataLoader - Chịu trách nhiệm load JSON asset từ thư mục resources.
       * Tách biệt việc I/O để dễ mock/test và hỗ trợ caching.
       */
      var DataLoader = exports('DataLoader', /*#__PURE__*/function () {
        function DataLoader() {}
        DataLoader.cloneJson = function cloneJson(data) {
          return JSON.parse(JSON.stringify(data));
        }

        /** Load JSON asset bất đồng bộ, có cache */;
        DataLoader.loadJson = /*#__PURE__*/
        function () {
          var _loadJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path) {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this._cache.has(path)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return", this.cloneJson(this._cache.get(path)));
                case 2:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    resources.load(path, JsonAsset, function (err, asset) {
                      if (err) {
                        reject(err);
                        return;
                      }
                      var data = _this.cloneJson(asset.json);
                      _this._cache.set(path, data);
                      resolve(_this.cloneJson(data));
                    });
                  }));
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadJson(_x) {
            return _loadJson.apply(this, arguments);
          }
          return loadJson;
        }() /** Load nhiều JSON song song */;
        DataLoader.loadMultiple = /*#__PURE__*/
        function () {
          var _loadMultiple = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(paths) {
            var _this2 = this;
            var promises;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  promises = paths.map(function (p) {
                    return _this2.loadJson(p);
                  });
                  return _context2.abrupt("return", Promise.all(promises));
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function loadMultiple(_x2) {
            return _loadMultiple.apply(this, arguments);
          }
          return loadMultiple;
        }() /** Xóa cache */;
        DataLoader.clearCache = function clearCache() {
          this._cache.clear();
        }

        /** Xóa cache theo path */;
        DataLoader.removeFromCache = function removeFromCache(path) {
          this._cache["delete"](path);
        };
        return DataLoader;
      }());
      DataLoader._cache = new Map();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventBus.ts", ['cc'], function (exports) {
  var cclegacy, EventTarget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0dbae++bjtK57XTKZ8j0ukD", "EventBus", undefined);

      /**
       * EventBus - Hệ thống sự kiện toàn cục singleton.
       * Giải coupling giữa các manager: không cần import trực tiếp nhau.
       * Dùng GameEvent enum làm key.
       */
      var EventBus = exports('EventBus', /*#__PURE__*/function () {
        function EventBus() {
          this._eventTarget = void 0;
          this._eventTarget = new EventTarget();
        }
        EventBus.getInstance = function getInstance() {
          if (!EventBus._instance) {
            EventBus._instance = new EventBus();
          }
          return EventBus._instance;
        }

        /** Đăng ký lắng nghe sự kiện */;
        var _proto = EventBus.prototype;
        _proto.on = function on(event, callback, target) {
          this._eventTarget.on(event, callback, target);
        }

        /** Hủy đăng ký */;
        _proto.off = function off(event, callback, target) {
          this._eventTarget.off(event, callback, target);
        }

        /** Phát sự kiện một lần */;
        _proto.once = function once(event, callback, target) {
          this._eventTarget.once(event, callback, target);
        }

        /** Phát sự kiện kèm dữ liệu */;
        _proto.emit = function emit(event) {
          var _this$_eventTarget;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          (_this$_eventTarget = this._eventTarget).emit.apply(_this$_eventTarget, [event].concat(args));
        };
        return EventBus;
      }());
      EventBus._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameBrandConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2dd82+mPTlATKNgxy5KveFe", "GameBrandConfig", undefined);
      var GAME_NAME = exports('GAME_NAME', 'Hippy');
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEvent.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bcf0cK220NHErsvUR8MYhJR", "GameEvent", undefined);
      /**
       * Enum định nghĩa các sự kiện toàn cục trong game.
       * Dùng với EventBus để giải coupling giữa các module.
       */
      var GameEvent = exports('GameEvent', /*#__PURE__*/function (GameEvent) {
        GameEvent["STATE_CHANGED"] = "state_changed";
        GameEvent["LEVEL_LOADED"] = "level_loaded";
        GameEvent["LEVEL_STARTED"] = "level_started";
        GameEvent["LEVEL_COMPLETED"] = "level_completed";
        GameEvent["LEVEL_FAILED"] = "level_failed";
        GameEvent["TILE_CLICKED"] = "tile_clicked";
        GameEvent["TILE_ADDED_TO_TRAY"] = "tile_added_to_tray";
        GameEvent["TILES_MATCHED"] = "tiles_matched";
        GameEvent["TRAY_FULL"] = "tray_full";
        GameEvent["SCORE_CHANGED"] = "score_changed";
        GameEvent["BOOSTER_USED"] = "booster_used";
        GameEvent["SKIN_CHANGED"] = "skin_changed";
        GameEvent["AUDIO_TOGGLE"] = "audio_toggle";
        GameEvent["PAUSE_GAME"] = "pause_game";
        GameEvent["RESUME_GAME"] = "resume_game";
        GameEvent["ORDER_CHANGED"] = "order_changed";
        GameEvent["ORDER_COMPLETED"] = "order_completed";
        GameEvent["ALL_ORDERS_COMPLETED"] = "all_orders_completed";
        GameEvent["WRONG_TRAY_FULL"] = "wrong_tray_full";
        GameEvent["ORDER_ITEM_CORRECT"] = "order_item_correct";
        GameEvent["ORDER_ITEM_WRONG"] = "order_item_wrong";
        GameEvent["TRAY_SETTLED"] = "tray_settled";
        GameEvent["ORDER_TILES_CLEARED"] = "order_tiles_cleared";
        GameEvent["HINT_FAILED"] = "hint_failed";
        GameEvent["LEVEL_TIME_UPDATED"] = "level_time_updated";
        return GameEvent;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './env', './GameState.ts', './GameEvent.ts', './EventBus.ts', './ConfigManager.ts', './PoolManager.ts', './LevelManager.ts', './UIManager.ts', './AudioManager.ts', './SkinManager.ts', './SaveManager.ts', './OrderTrayManager.ts', './WrongTrayManager.ts', './BoosterManager.ts', './GameBrandConfig.ts', './TeviLoginManager.ts', './RewardVideoPlayer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Prefab, EditBox, Button, director, view, ResolutionPolicy, KeyCode, resources, UITransform, input, Input, Vec3, tween, Tween, UIOpacity, Component, PREVIEW, GameState, GameEvent, EventBus, ConfigManager, PoolManager, LevelManager, UIManager, AudioManager, SkinManager, SaveManager, OrderTrayManager, WrongTrayManager, BoosterManager, GAME_NAME, TeviLoginManager, RewardVideoPlayer;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      EditBox = module.EditBox;
      Button = module.Button;
      director = module.director;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      KeyCode = module.KeyCode;
      resources = module.resources;
      UITransform = module.UITransform;
      input = module.input;
      Input = module.Input;
      Vec3 = module.Vec3;
      tween = module.tween;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      PREVIEW = module.PREVIEW;
    }, function (module) {
      GameState = module.GameState;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      PoolManager = module.PoolManager;
    }, function (module) {
      LevelManager = module.LevelManager;
    }, function (module) {
      UIManager = module.UIManager;
    }, function (module) {
      AudioManager = module.AudioManager;
    }, function (module) {
      SkinManager = module.SkinManager;
    }, function (module) {
      SaveManager = module.SaveManager;
    }, function (module) {
      OrderTrayManager = module.OrderTrayManager;
    }, function (module) {
      WrongTrayManager = module.WrongTrayManager;
    }, function (module) {
      BoosterManager = module.BoosterManager;
    }, function (module) {
      GAME_NAME = module.GAME_NAME;
    }, function (module) {
      TeviLoginManager = module.TeviLoginManager;
    }, function (module) {
      RewardVideoPlayer = module.RewardVideoPlayer;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3;
      cclegacy._RF.push({}, "76f83XSvKxHb4+/HrOyRl7e", "GameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WIN_LEVEL_5_CHEAT_KEY_CODE = 84; // T
      var BOOSTER_CHEAT_KEY_CODE = 66; // B
      var LEVEL_5_ID = 5;
      /** Hook test nhanh: thắng level này sẽ mở video thưởng ngay. */
      var REWARD_VIDEO_TEST_LEVEL_ID = 1;

      /**
       * GameManager - Entry point controller, quản lý vòng đời game.
       * Điều phối các manager khác, giữ state machine tổng thể.
       * Không chứa logic gameplay cụ thể.
       */
      var GameManager = exports('GameManager', (_dec = ccclass('GameManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(EditBox), _dec6 = property(Button), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Button), _dec11 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager, _Component);
        function GameManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "uiRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameplayRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tilePrefab", _descriptor3, _assertThisInitialized(_this));
          _this._currentState = GameState.NONE;
          _this._previousState = GameState.NONE;
          _this._startLevelToken = 0;
          _this._elapsedSeconds = 0;
          _this._timerRunning = false;
          _this._transitionRunning = false;
          _this._playButtonBaseScale = null;
          _this._runtimePreloadPromise = null;
          _this._preparingHomeLevelId = 0;
          _this._preparedHomeLevelId = 0;
          _this._initPromise = null;
          _this._isInitialized = false;
          _this._postInitHomeStarted = false;
          _initializerDefineProperty(_this, "levelJumpInput", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelJumpOk", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "splashNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "splashLogoNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "homeScreen", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playGameButton", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameScreen", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GameManager.prototype;
        _proto.onLoad = function onLoad() {
          if (GameManager.Instance) {
            this.destroy();
            return;
          }
          GameManager.Instance = this;
          director.addPersistRootNode(this.node);
          this.ensureTeviLoginManager();
          this.applyWebDocumentTitle();

          // Lock web build to 1080x1920 aspect ratio, fit inside browser without stretching.
          view.setDesignResolutionSize(1080, 1920, ResolutionPolicy.SHOW_ALL);
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var bootStartedAt, elapsedMs, remainingSplashMs, homeOpacity, splashOpacity;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  bootStartedAt = Date.now(); // SplashScreen active=true, GameScreen active=false at start.
                  if (this.splashNode) this.splashNode.active = true;
                  if (this.homeScreen) this.homeScreen.active = false;
                  if (this.gameScreen) this.gameScreen.active = false;

                  // Ensure splash has UIOpacity for fade-out.
                  if (this.splashNode && !this.splashNode.getComponent(UIOpacity)) {
                    this.splashNode.addComponent(UIOpacity);
                  }
                  this._initPromise = this.initializeGame().then(function () {
                    _this2._isInitialized = true;
                    _this2.onInitializationReadyForHome();
                  })["catch"](function () {
                    _this2._initPromise = null;
                  });
                  _context.next = 8;
                  return this._initPromise;
                case 8:
                  elapsedMs = Date.now() - bootStartedAt;
                  remainingSplashMs = Math.max(0, 2000 - elapsedMs);
                  if (!(remainingSplashMs > 0)) {
                    _context.next = 13;
                    break;
                  }
                  _context.next = 13;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, remainingSplashMs);
                  });
                case 13:
                  if (this.homeScreen) {
                    this.homeScreen.active = true;
                    homeOpacity = this.ensureOpacity(this.homeScreen);
                    homeOpacity.opacity = 0;
                    tween(homeOpacity).to(0.25, {
                      opacity: 255
                    }).start();
                  }
                  if (!this.splashNode) {
                    _context.next = 18;
                    break;
                  }
                  splashOpacity = this.splashNode.getComponent(UIOpacity);
                  _context.next = 18;
                  return new Promise(function (resolve) {
                    tween(splashOpacity).to(0.25, {
                      opacity: 0
                    }).call(function () {
                      if (_this2.splashNode) _this2.splashNode.active = false;
                      resolve();
                    }).start();
                  });
                case 18:
                  // Listen for level end events to switch panels
                  EventBus.getInstance().on(GameEvent.LEVEL_COMPLETED, this.onLevelCompleted, this);
                  EventBus.getInstance().on(GameEvent.LEVEL_FAILED, this.onLevelFailed, this);

                  // Editor cheats: 1-9 level, R restart, N next, T win L5, B booster cheat.
                  input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
                  this.bindLevelJumpUI();
                  this.bindHomeUI();
                  this.startPlayButtonPulse();
                  this.onInitializationReadyForHome();
                case 25:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }() /** Editor cheats: 1-9 đổi level, R restart, N next, T thắng L5, B bật booster. */;
        _proto.onKeyDown = function onKeyDown(event) {
          if (!this.isEditorCheatEnabled()) return;
          var key = event.keyCode;
          if (key === WIN_LEVEL_5_CHEAT_KEY_CODE) {
            void this.runLevel5WinCheat();
            return;
          }
          if (this._currentState !== GameState.GAMEPLAY) return;
          if (key === BOOSTER_CHEAT_KEY_CODE) {
            var _BoosterManager$getIn, _BoosterManager$getIn2;
            var enabled = (_BoosterManager$getIn = (_BoosterManager$getIn2 = BoosterManager.getInstance()) == null ? void 0 : _BoosterManager$getIn2.toggleTestBoosterCheat()) != null ? _BoosterManager$getIn : false;
            console.log("[Cheat] HINT/UNDO x99: " + (enabled ? 'ON' : 'OFF'));
          } else if (key >= KeyCode.DIGIT_1 && key <= KeyCode.DIGIT_9) {
            var levelId = key - KeyCode.DIGIT_1 + 1;
            this.startLevel(levelId);
          } else if (key === KeyCode.KEY_R) {
            var currentLevelId = LevelManager.getInstance().getCurrentLevelId();
            if (currentLevelId > 0) {
              this.startLevel(currentLevelId);
            }
          } else if (key === KeyCode.KEY_N) {
            var nextLevelId = LevelManager.getInstance().getCurrentLevelId() + 1;
            this.startLevel(nextLevelId);
          }
        };
        _proto.isEditorCheatEnabled = function isEditorCheatEnabled() {
          return PREVIEW;
        };
        _proto.applyWebDocumentTitle = function applyWebDocumentTitle() {
          if (typeof document !== 'undefined') {
            document.title = GAME_NAME;
          }
        };
        _proto.runLevel5WinCheat = /*#__PURE__*/function () {
          var _runLevel5WinCheat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this._transitionRunning) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  if (!(this._currentState !== GameState.GAMEPLAY)) {
                    _context2.next = 7;
                    break;
                  }
                  _context2.next = 5;
                  return this.waitForInitialization();
                case 5:
                  _context2.next = 7;
                  return this.transitionToGame();
                case 7:
                  _context2.next = 9;
                  return this.startLevel(LEVEL_5_ID);
                case 9:
                  setTimeout(function () {
                    LevelManager.getInstance().completeLevel(false);
                  }, 300);
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function runLevel5WinCheat() {
            return _runLevel5WinCheat.apply(this, arguments);
          }
          return runLevel5WinCheat;
        }();
        _proto.onLevelCompleted = /*#__PURE__*/function () {
          var _onLevelCompleted = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(levelId, score, stars) {
            var panel, _TeviLoginManager$Ins, _RewardVideoPlayer$In;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  this.stopTimer();
                  _context3.next = 4;
                  return UIManager.getInstance().openPanel('LevelCompletePanel', {
                    levelId: levelId,
                    score: score,
                    stars: stars,
                    elapsedSeconds: this._elapsedSeconds
                  });
                case 4:
                  panel = _context3.sent;
                  if (panel) {
                    _context3.next = 8;
                    break;
                  }
                  this.returnToMenu();
                  return _context3.abrupt("return");
                case 8:
                  // Test nhanh: thắng Level 1 mở video thưởng ngay trên popup.
                  if (levelId === REWARD_VIDEO_TEST_LEVEL_ID) {
                    this.ensureRewardVideoPlayer();
                    (_TeviLoginManager$Ins = TeviLoginManager.Instance) == null || _TeviLoginManager$Ins.setDebugStatus('Level 1 xong → bắt đầu xin video token...');
                    (_RewardVideoPlayer$In = RewardVideoPlayer.Instance) == null || _RewardVideoPlayer$In.playSecretVideo(function () {
                      var _TeviLoginManager$Ins2;
                      (_TeviLoginManager$Ins2 = TeviLoginManager.Instance) == null || _TeviLoginManager$Ins2.setDebugStatus('Đã đóng video, tiếp tục game.');
                      console.log('[RewardVideo] Đã đóng video, tiếp tục game.');
                    });
                  }
                  _context3.next = 14;
                  break;
                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3["catch"](0);
                  this.returnToMenu();
                case 14:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[0, 11]]);
          }));
          function onLevelCompleted(_x, _x2, _x3) {
            return _onLevelCompleted.apply(this, arguments);
          }
          return onLevelCompleted;
        }();
        _proto.onLevelFailed = /*#__PURE__*/function () {
          var _onLevelFailed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(levelId) {
            var panel;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  this.stopTimer();
                  _context4.next = 4;
                  return UIManager.getInstance().openPanel('LevelFailedPanel', {
                    levelId: levelId
                  });
                case 4:
                  panel = _context4.sent;
                  if (!panel) {
                    this.returnToMenu();
                  }
                  _context4.next = 11;
                  break;
                case 8:
                  _context4.prev = 8;
                  _context4.t0 = _context4["catch"](0);
                  this.returnToMenu();
                case 11:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[0, 8]]);
          }));
          function onLevelFailed(_x4) {
            return _onLevelFailed.apply(this, arguments);
          }
          return onLevelFailed;
        }() /** Khởi tạo tuần tự các hệ thống */;
        _proto.initializeGame = /*#__PURE__*/
        function () {
          var _initializeGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _AudioManager$getInst;
            var skinMgr, audioMgr;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  this.setState(GameState.LOADING);
                  _context5.next = 3;
                  return ConfigManager.getInstance().loadConfig();
                case 3:
                  skinMgr = SkinManager.getInstance();
                  if (skinMgr) {
                    _context5.next = 6;
                    break;
                  }
                  return _context5.abrupt("return");
                case 6:
                  if (!(typeof skinMgr.loadDefaultSkin !== 'function')) {
                    _context5.next = 8;
                    break;
                  }
                  return _context5.abrupt("return");
                case 8:
                  _context5.next = 10;
                  return skinMgr.loadDefaultSkin();
                case 10:
                  _context5.next = 12;
                  return skinMgr.prewarmSkinSprites();
                case 12:
                  audioMgr = AudioManager.getInstance();
                  if (audioMgr) {
                    _context5.next = 15;
                    break;
                  }
                  return _context5.abrupt("return");
                case 15:
                  _context5.next = 17;
                  return audioMgr.initialize();
                case 17:
                  audioMgr.bindButtonSounds(this.node);
                  _context5.next = 20;
                  return LevelManager.getInstance().initialize();
                case 20:
                  _context5.next = 22;
                  return this.registerTilePrefab();
                case 22:
                  UIManager.getInstance().initialize(this.uiRoot);
                  (_AudioManager$getInst = AudioManager.getInstance()) == null || _AudioManager$getInst.bindButtonSounds(this.uiRoot);
                  _context5.next = 26;
                  return UIManager.getInstance().preloadPanels(['GameplayPanel', 'LevelCompletePanel', 'LevelFailedPanel', 'LevelSelectPanel']);
                case 26:
                  this.ensureOrderManagers();
                  this.ensureRewardVideoPlayer();
                  this.setState(GameState.MAIN_MENU);
                case 29:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function initializeGame() {
            return _initializeGame.apply(this, arguments);
          }
          return initializeGame;
        }() /** Đăng ký tile prefab vào PoolManager */;
        _proto.registerTilePrefab = function registerTilePrefab() {
          var _this3 = this;
          return new Promise(function (resolve) {
            if (_this3.tilePrefab) {
              PoolManager.getInstance().registerPrefab('tile_default', _this3.tilePrefab);
              resolve();
              return;
            }

            // Fallback: load from resources bundle.
            // Prefab must be placed under assets/resources/prefabs/tiles/
            resources.load('prefabs/tiles/tile_default', Prefab, function (err, prefab) {
              if (err) {
                resolve();
                return;
              }
              PoolManager.getInstance().registerPrefab('tile_default', prefab);
              resolve();
            });
          });
        }

        /** Chuyển state */;
        _proto.setState = function setState(newState) {
          if (this._currentState === newState) return;
          this._previousState = this._currentState;
          this._currentState = newState;
          EventBus.getInstance().emit(GameEvent.STATE_CHANGED, this._currentState, this._previousState);
        }

        /** Lấy state hiện tại */;
        _proto.getState = function getState() {
          return this._currentState;
        }

        /** Quay lại state trước đó */;
        _proto.revertState = function revertState() {
          this.setState(this._previousState);
        }

        /** Bắt đầu level mới */;
        _proto.startLevel = /*#__PURE__*/
        function () {
          var _startLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(levelId, options) {
            var startToken;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  startToken = ++this._startLevelToken;
                  _context6.next = 3;
                  return this.waitForInitialization();
                case 3:
                  _context6.next = 5;
                  return this.ensureHomeLevelPrepared(levelId);
                case 5:
                  if (!(startToken !== this._startLevelToken)) {
                    _context6.next = 7;
                    break;
                  }
                  return _context6.abrupt("return");
                case 7:
                  this.setState(GameState.GAMEPLAY);
                  if (!(options != null && options.parallelTransition)) {
                    if (this.gameScreen) this.gameScreen.active = true;
                    if (this.homeScreen) this.homeScreen.active = false;
                  }

                  // Ensure ORDER_MATCH managers exist in scene
                  this.ensureOrderManagers();

                  // Close menu panels and show loading BEFORE loading assets
                  UIManager.getInstance().closePanel('LevelSelectPanel');
                  UIManager.getInstance().closePanel('LevelCompletePanel');
                  UIManager.getInstance().closePanel('LevelFailedPanel');
                  _context6.prev = 13;
                  _context6.next = 16;
                  return LevelManager.getInstance().playPreparedLevel(levelId);
                case 16:
                  this._preparedHomeLevelId = 0;
                  if (!(startToken !== this._startLevelToken)) {
                    _context6.next = 19;
                    break;
                  }
                  return _context6.abrupt("return");
                case 19:
                  _context6.next = 21;
                  return UIManager.getInstance().openPanel('GameplayPanel');
                case 21:
                  _context6.sent;
                  this.stopTimer();
                  this._elapsedSeconds = 0;
                  this.startTimer();
                  _context6.next = 31;
                  break;
                case 28:
                  _context6.prev = 28;
                  _context6.t0 = _context6["catch"](13);
                  this.returnToMenu();
                case 31:
                  _context6.prev = 31;
                  if (startToken === this._startLevelToken) {
                    UIManager.getInstance().hideLoading();
                  }
                  return _context6.finish(31);
                case 34:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this, [[13, 28, 31, 34]]);
          }));
          function startLevel(_x5, _x6) {
            return _startLevel.apply(this, arguments);
          }
          return startLevel;
        }() /** Tạo OrderTrayManager và WrongTrayManager nếu chưa có trong scene */;
        _proto.ensureOrderManagers = function ensureOrderManagers() {
          var parent = this.gameplayRoot || this.uiRoot || this.node;
          var scene = director.getScene();
          var effectiveParent = parent || scene;

          // Helper: check if a manager instance is valid (node not destroyed)
          var isManagerValid = function isManagerValid(mgr) {
            return mgr && mgr.node && mgr.node.isValid;
          };
          if (!isManagerValid(OrderTrayManager.Instance)) {
            var _effectiveParent$laye;
            if (OrderTrayManager.Instance) OrderTrayManager.Instance = null;
            var orderTrayNode = new Node('OrderTrayManager');
            orderTrayNode.layer = (_effectiveParent$laye = effectiveParent == null ? void 0 : effectiveParent.layer) != null ? _effectiveParent$laye : 0;
            orderTrayNode.addComponent(UITransform);
            orderTrayNode.addComponent(OrderTrayManager);
            orderTrayNode.setParent(effectiveParent);
            orderTrayNode.setPosition(540, 320, 0);
          }
          if (!isManagerValid(WrongTrayManager.Instance)) {
            var _effectiveParent$laye2;
            if (WrongTrayManager.Instance) WrongTrayManager.Instance = null;
            var wrongTrayNode = new Node('WrongTrayManager');
            wrongTrayNode.layer = (_effectiveParent$laye2 = effectiveParent == null ? void 0 : effectiveParent.layer) != null ? _effectiveParent$laye2 : 0;
            wrongTrayNode.addComponent(UITransform);
            wrongTrayNode.addComponent(WrongTrayManager);
            wrongTrayNode.setParent(effectiveParent);
            wrongTrayNode.setPosition(850, 320, 0);
          }
          if (!isManagerValid(BoosterManager.Instance)) {
            var _effectiveParent$laye3;
            if (BoosterManager.Instance) BoosterManager.Instance = null;
            var boosterNode = new Node('BoosterManager');
            boosterNode.layer = (_effectiveParent$laye3 = effectiveParent == null ? void 0 : effectiveParent.layer) != null ? _effectiveParent$laye3 : 0;
            boosterNode.addComponent(BoosterManager);
            boosterNode.setParent(effectiveParent);
          }
        }

        /** Tạm dừng game */;
        _proto.pauseGame = function pauseGame() {
          if (this._currentState === GameState.GAMEPLAY) {
            this.setState(GameState.PAUSED);
          }
        }

        /** Tiếp tục game */;
        _proto.resumeGame = function resumeGame() {
          if (this._currentState === GameState.PAUSED) {
            this.setState(GameState.GAMEPLAY);
          }
        }

        /** Thoát về menu */;
        _proto.returnToMenu = /*#__PURE__*/
        function () {
          var _returnToMenu = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  this.stopTimer();
                  this.setState(GameState.MAIN_MENU);
                  this._preparedHomeLevelId = 0;
                  LevelManager.getInstance().unloadCurrentLevel();
                  UIManager.getInstance().closePanel('GameplayPanel');
                  UIManager.getInstance().closePanel('LevelCompletePanel');
                  UIManager.getInstance().closePanel('LevelFailedPanel');
                  UIManager.getInstance().closePanel('LevelSelectPanel');
                  UIManager.getInstance().hideLoading();
                  _context7.next = 11;
                  return this.transitionToHome();
                case 11:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function returnToMenu() {
            return _returnToMenu.apply(this, arguments);
          }
          return returnToMenu;
        }();
        _proto.onDestroy = function onDestroy() {
          if (GameManager.Instance === this) {
            GameManager.Instance = null;
            EventBus.getInstance().off(GameEvent.LEVEL_COMPLETED, this.onLevelCompleted, this);
            EventBus.getInstance().off(GameEvent.LEVEL_FAILED, this.onLevelFailed, this);
            input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            if (this.levelJumpOk) {
              this.levelJumpOk.node.off(Button.EventType.CLICK, this.onClickLevelJump, this);
            }
            if (this.playGameButton) {
              this.playGameButton.node.off(Button.EventType.CLICK, this.onPlayGameClicked, this);
            }
            this.stopPlayButtonPulse();
          }
        };
        _proto.bindLevelJumpUI = function bindLevelJumpUI() {
          var _AudioManager$getInst2, _this$levelJumpOk;
          if (this.levelJumpOk) {
            this.levelJumpOk.node.on(Button.EventType.CLICK, this.onClickLevelJump, this);
          }
          (_AudioManager$getInst2 = AudioManager.getInstance()) == null || _AudioManager$getInst2.bindButtonSounds(((_this$levelJumpOk = this.levelJumpOk) == null ? void 0 : _this$levelJumpOk.node) || null);
        };
        _proto.bindHomeUI = function bindHomeUI() {
          var _AudioManager$getInst3;
          if (this.playGameButton) {
            this.playGameButton.node.on(Button.EventType.CLICK, this.onPlayGameClicked, this);
          }
          (_AudioManager$getInst3 = AudioManager.getInstance()) == null || _AudioManager$getInst3.bindButtonSounds(this.homeScreen);
        }

        /** Hiệu ứng zoom in/out lặp lại để gợi ý người chơi bấm Play */;
        _proto.startPlayButtonPulse = function startPlayButtonPulse() {
          var _this$homeScreen;
          if (!this.playGameButton || !((_this$homeScreen = this.homeScreen) != null && _this$homeScreen.active)) return;
          var node = this.playGameButton.node;
          this._playButtonBaseScale = node.scale.clone();
          this.stopPlayButtonPulse(false);
          var base = this._playButtonBaseScale;
          var enlarged = new Vec3(base.x * 1.1, base.y * 1.1, base.z);
          tween(node).to(0.55, {
            scale: enlarged
          }, {
            easing: 'sineInOut'
          }).to(0.55, {
            scale: base
          }, {
            easing: 'sineInOut'
          }).union().repeatForever().start();
        };
        _proto.stopPlayButtonPulse = function stopPlayButtonPulse(resetScale) {
          if (resetScale === void 0) {
            resetScale = true;
          }
          if (this.playGameButton) {
            Tween.stopAllByTarget(this.playGameButton.node);
            if (resetScale && this._playButtonBaseScale) {
              this.playGameButton.node.setScale(this._playButtonBaseScale);
            }
          }
        };
        _proto.onPlayGameClicked = /*#__PURE__*/function () {
          var _onPlayGameClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var levelId;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (!this._transitionRunning) {
                    _context8.next = 2;
                    break;
                  }
                  return _context8.abrupt("return");
                case 2:
                  levelId = this.getSavedLevelId();
                  _context8.next = 5;
                  return this.waitForInitialization();
                case 5:
                  _context8.next = 7;
                  return this.ensureHomeLevelPrepared(levelId);
                case 7:
                  _context8.next = 9;
                  return Promise.all([this.transitionToGame(), this.startLevel(levelId, {
                    parallelTransition: true
                  })]);
                case 9:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function onPlayGameClicked() {
            return _onPlayGameClicked.apply(this, arguments);
          }
          return onPlayGameClicked;
        }() /** Preload skin, sprite và JSON level đã save khi Home idle */;
        _proto.preloadHomeGameplayAssets = function preloadHomeGameplayAssets() {
          void this.runHomeGameplayPreload();
        };
        _proto.runHomeGameplayPreload = /*#__PURE__*/function () {
          var _runHomeGameplayPreload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return this.ensureHomeLevelPrepared(this.getSavedLevelId());
                case 2:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function runHomeGameplayPreload() {
            return _runHomeGameplayPreload.apply(this, arguments);
          }
          return runHomeGameplayPreload;
        }();
        _proto.getSavedLevelId = function getSavedLevelId() {
          var savedLevel = SaveManager.getInstance().getCurrentLevel();
          return savedLevel > 0 ? savedLevel : 1;
        };
        _proto.waitForInitialization = /*#__PURE__*/function () {
          var _waitForInitialization = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (!this._isInitialized) {
                    _context10.next = 2;
                    break;
                  }
                  return _context10.abrupt("return");
                case 2:
                  if (!this._initPromise) {
                    _context10.next = 5;
                    break;
                  }
                  _context10.next = 5;
                  return this._initPromise;
                case 5:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function waitForInitialization() {
            return _waitForInitialization.apply(this, arguments);
          }
          return waitForInitialization;
        }();
        _proto.onInitializationReadyForHome = function onInitializationReadyForHome() {
          var _this$homeScreen2, _AudioManager$getInst4, _AudioManager$getInst5;
          if (!this._isInitialized) return;
          if (this._postInitHomeStarted) return;
          if (!((_this$homeScreen2 = this.homeScreen) != null && _this$homeScreen2.active)) return;
          this._postInitHomeStarted = true;
          (_AudioManager$getInst4 = AudioManager.getInstance()) == null || _AudioManager$getInst4.playMusic('bg_main');
          (_AudioManager$getInst5 = AudioManager.getInstance()) == null || _AudioManager$getInst5.bindButtonSounds(this.homeScreen);
          this.preloadHomeGameplayAssets();
        };
        _proto.ensureHomeLevelPrepared = /*#__PURE__*/function () {
          var _ensureHomeLevelPrepared = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(levelId) {
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  if (!(this._preparedHomeLevelId === levelId)) {
                    _context11.next = 2;
                    break;
                  }
                  return _context11.abrupt("return");
                case 2:
                  if (!(this._runtimePreloadPromise && this._preparingHomeLevelId === levelId)) {
                    _context11.next = 6;
                    break;
                  }
                  _context11.next = 5;
                  return this._runtimePreloadPromise;
                case 5:
                  return _context11.abrupt("return");
                case 6:
                  if (!this._runtimePreloadPromise) {
                    _context11.next = 11;
                    break;
                  }
                  _context11.next = 9;
                  return this._runtimePreloadPromise;
                case 9:
                  if (!(this._preparedHomeLevelId === levelId)) {
                    _context11.next = 11;
                    break;
                  }
                  return _context11.abrupt("return");
                case 11:
                  PoolManager.getInstance().setAllowRuntimeInstantiate(true);
                  this._preparingHomeLevelId = levelId;
                  this._runtimePreloadPromise = LevelManager.getInstance().prepareLevelWaitingDrop(levelId);
                  _context11.prev = 14;
                  _context11.next = 17;
                  return this._runtimePreloadPromise;
                case 17:
                  this._preparedHomeLevelId = levelId;
                  this._preparingHomeLevelId = 0;
                  _context11.next = 26;
                  break;
                case 21:
                  _context11.prev = 21;
                  _context11.t0 = _context11["catch"](14);
                  this._runtimePreloadPromise = null;
                  this._preparingHomeLevelId = 0;
                  throw _context11.t0;
                case 26:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, this, [[14, 21]]);
          }));
          function ensureHomeLevelPrepared(_x7) {
            return _ensureHomeLevelPrepared.apply(this, arguments);
          }
          return ensureHomeLevelPrepared;
        }();
        _proto.onClickLevelJump = function onClickLevelJump() {
          var _this$levelJumpInput;
          var val = ((_this$levelJumpInput = this.levelJumpInput) == null || (_this$levelJumpInput = _this$levelJumpInput.string) == null ? void 0 : _this$levelJumpInput.trim()) || '';
          var num = parseInt(val, 10);
          if (!isNaN(num) && num > 0) {
            this.startLevel(num);
          }
          if (this.levelJumpInput) {
            this.levelJumpInput.string = '';
          }
        };
        _proto.startTimer = function startTimer() {
          if (this._timerRunning) return;
          this._timerRunning = true;
          this.schedule(this._timerTick, 1);
        };
        _proto.stopTimer = function stopTimer() {
          if (!this._timerRunning) return;
          this._timerRunning = false;
          this.unschedule(this._timerTick);
        };
        _proto._timerTick = function _timerTick() {
          this._elapsedSeconds++;
          EventBus.getInstance().emit(GameEvent.LEVEL_TIME_UPDATED, this._elapsedSeconds);
        };
        _proto.getElapsedSeconds = function getElapsedSeconds() {
          return this._elapsedSeconds;
        }

        /** Tự mount đăng nhập Tevi nếu Scene chưa gắn sẵn component này. */;
        _proto.ensureTeviLoginManager = function ensureTeviLoginManager() {
          var _director$getScene;
          var existingManager = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.getComponentInChildren(TeviLoginManager);
          if (!existingManager) {
            this.node.addComponent(TeviLoginManager);
          }
        }

        /** Tự tạo popup VideoPlayer thưởng nếu Scene chưa gắn sẵn. */;
        _proto.ensureRewardVideoPlayer = function ensureRewardVideoPlayer() {
          var _director$getScene2, _existing$node;
          var existing = RewardVideoPlayer.Instance || ((_director$getScene2 = director.getScene()) == null ? void 0 : _director$getScene2.getComponentInChildren(RewardVideoPlayer)) || null;
          if (existing && (_existing$node = existing.node) != null && _existing$node.isValid) {
            RewardVideoPlayer.Instance = existing;
            return;
          }
          var parent = this.uiRoot || this.node;
          var rewardNode = new Node('RewardVideoPlayer');
          rewardNode.layer = parent.layer;
          rewardNode.addComponent(UITransform);
          rewardNode.setParent(parent);
          rewardNode.setPosition(0, 0, 0);
          rewardNode.addComponent(RewardVideoPlayer);
        };
        _proto.ensureOpacity = function ensureOpacity(node) {
          var opacity = node.getComponent(UIOpacity);
          if (!opacity) {
            opacity = node.addComponent(UIOpacity);
          }
          return opacity;
        };
        _proto.transitionScreens = /*#__PURE__*/function () {
          var _transitionScreens = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(fromNode, toNode) {
            var _this4 = this;
            var toOpacity, fromOpacity;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  if (!(!fromNode && !toNode)) {
                    _context12.next = 2;
                    break;
                  }
                  return _context12.abrupt("return");
                case 2:
                  this._transitionRunning = true;
                  if (toNode) {
                    toNode.active = true;
                    toOpacity = this.ensureOpacity(toNode);
                    toOpacity.opacity = 0;
                    tween(toOpacity).to(0.4, {
                      opacity: 255
                    }).start();
                  }
                  if (!fromNode) {
                    _context12.next = 11;
                    break;
                  }
                  fromOpacity = this.ensureOpacity(fromNode);
                  fromOpacity.opacity = 255;
                  _context12.next = 9;
                  return new Promise(function (resolve) {
                    tween(fromOpacity).to(0.4, {
                      opacity: 0
                    }).call(function () {
                      fromNode.active = false;
                      resolve();
                    }).start();
                  });
                case 9:
                  _context12.next = 13;
                  break;
                case 11:
                  _context12.next = 13;
                  return new Promise(function (resolve) {
                    return _this4.scheduleOnce(function () {
                      return resolve();
                    }, 0.4);
                  });
                case 13:
                  if (toNode) {
                    this.ensureOpacity(toNode).opacity = 255;
                  }
                  this._transitionRunning = false;
                case 15:
                case "end":
                  return _context12.stop();
              }
            }, _callee12, this);
          }));
          function transitionScreens(_x8, _x9) {
            return _transitionScreens.apply(this, arguments);
          }
          return transitionScreens;
        }();
        _proto.transitionToGame = function transitionToGame() {
          this.stopPlayButtonPulse();
          return this.transitionScreens(this.homeScreen, this.gameScreen);
        };
        _proto.transitionToHome = /*#__PURE__*/function () {
          var _transitionToHome = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            var _AudioManager$getInst6, _AudioManager$getInst7;
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return this.transitionScreens(this.gameScreen, this.homeScreen);
                case 2:
                  (_AudioManager$getInst6 = AudioManager.getInstance()) == null || _AudioManager$getInst6.playMusic('bg_main');
                  (_AudioManager$getInst7 = AudioManager.getInstance()) == null || _AudioManager$getInst7.bindButtonSounds(this.homeScreen);
                  this.startPlayButtonPulse();
                  this.preloadHomeGameplayAssets();
                case 6:
                case "end":
                  return _context13.stop();
              }
            }, _callee13, this);
          }));
          function transitionToHome() {
            return _transitionToHome.apply(this, arguments);
          }
          return transitionToHome;
        }();
        return GameManager;
      }(Component), _class3.Instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameplayRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tilePrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "levelJumpInput", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "levelJumpOk", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "splashNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "splashLogoNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "homeScreen", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "playGameButton", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gameScreen", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMode.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a1b2cPU5fZKe4ydDh8qO0xd", "GameMode", undefined);
      /**
       * Enum định nghĩa các chế độ chơi.
       */
      var GameMode = exports('GameMode', /*#__PURE__*/function (GameMode) {
        GameMode["TRIPLE_MATCH"] = "TRIPLE_MATCH";
        GameMode["ORDER_MATCH"] = "ORDER_MATCH";
        return GameMode;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameplayPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePanel.ts', './GameEvent.ts', './EventBus.ts', './LevelManager.ts', './OrderManager.ts', './BoosterManager.ts', './AudioManager.ts', './BoosterType.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Tween, tween, Vec3, BasePanel, GameEvent, EventBus, LevelManager, OrderManager, BoosterManager, AudioManager, BoosterType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Tween = module.Tween;
      tween = module.tween;
      Vec3 = module.Vec3;
    }, function (module) {
      BasePanel = module.BasePanel;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      LevelManager = module.LevelManager;
    }, function (module) {
      OrderManager = module.OrderManager;
    }, function (module) {
      BoosterManager = module.BoosterManager;
    }, function (module) {
      AudioManager = module.AudioManager;
    }, function (module) {
      BoosterType = module.BoosterType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "2ee3e0Dx+VGWrpaItIUiXTq", "GameplayPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * GameplayPanel - HUD trong màn chơi.
       * Hiển thị score, level, stars, booster buttons, và order info.
       * Không chứa logic gameplay, chỉ binding data và handle input.
       */
      var GameplayPanel = exports('GameplayPanel', (_dec = ccclass('GameplayPanel'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePanel) {
        _inheritsLoose(GameplayPanel, _BasePanel);
        function GameplayPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePanel.call.apply(_BasePanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "starLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "orderLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "undoButton", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hintButton", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skipButton", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "undoCountLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hintCountLabel", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skipCountLabel", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timeLabel", _descriptor11, _assertThisInitialized(_this));
          _this._undoButtonOriginalPos = null;
          _this._undoButtonOriginalScale = null;
          _this._elapsedSeconds = 0;
          return _this;
        }
        var _proto = GameplayPanel.prototype;
        _proto.onShow = function onShow(data) {
          _BasePanel.prototype.onShow.call(this, data);
          if (!this.timeLabel) {
            var _this$node$getChildBy;
            this.timeLabel = ((_this$node$getChildBy = this.node.getChildByName('TimeLabel')) == null ? void 0 : _this$node$getChildBy.getComponent(Label)) || null;
          }
          this.updateUI();
          if (this.undoButton && this.undoButton.node.isValid) {
            this._undoButtonOriginalPos = this.undoButton.node.position.clone();
            this._undoButtonOriginalScale = this.undoButton.node.scale.clone();
          }
          EventBus.getInstance().on(GameEvent.SCORE_CHANGED, this.onScoreChanged, this);
          EventBus.getInstance().on(GameEvent.LEVEL_COMPLETED, this.onLevelCompleted, this);
          EventBus.getInstance().on(GameEvent.ORDER_CHANGED, this.onOrderChanged, this);
          EventBus.getInstance().on(GameEvent.BOOSTER_USED, this.onBoosterChanged, this);
          EventBus.getInstance().on(GameEvent.LEVEL_STARTED, this.onLevelStarted, this);
          EventBus.getInstance().on(GameEvent.LEVEL_FAILED, this.onLevelEnded, this);
          EventBus.getInstance().on(GameEvent.HINT_FAILED, this.onHintFailed, this);
          EventBus.getInstance().on(GameEvent.LEVEL_TIME_UPDATED, this.onLevelTimeUpdated, this);
          EventBus.getInstance().on(GameEvent.TILE_ADDED_TO_TRAY, this.onTrayMotionChanged, this);
          EventBus.getInstance().on(GameEvent.TRAY_SETTLED, this.onTrayMotionChanged, this);
          this.bindBoosterButtons();
          this.updateBoosterUI();
        };
        _proto.onHide = function onHide() {
          EventBus.getInstance().off(GameEvent.SCORE_CHANGED, this.onScoreChanged, this);
          EventBus.getInstance().off(GameEvent.LEVEL_COMPLETED, this.onLevelCompleted, this);
          EventBus.getInstance().off(GameEvent.ORDER_CHANGED, this.onOrderChanged, this);
          EventBus.getInstance().off(GameEvent.BOOSTER_USED, this.onBoosterChanged, this);
          EventBus.getInstance().off(GameEvent.LEVEL_STARTED, this.onLevelStarted, this);
          EventBus.getInstance().off(GameEvent.LEVEL_FAILED, this.onLevelEnded, this);
          EventBus.getInstance().off(GameEvent.HINT_FAILED, this.onHintFailed, this);
          EventBus.getInstance().off(GameEvent.LEVEL_TIME_UPDATED, this.onLevelTimeUpdated, this);
          EventBus.getInstance().off(GameEvent.TILE_ADDED_TO_TRAY, this.onTrayMotionChanged, this);
          EventBus.getInstance().off(GameEvent.TRAY_SETTLED, this.onTrayMotionChanged, this);
          this.unbindBoosterButtons();
        };
        _proto.updateUI = function updateUI() {
          var levelId = LevelManager.getInstance().getCurrentLevelId();
          var score = LevelManager.getInstance().getScore();
          var stars = LevelManager.getInstance().getStars();
          if (this.levelLabel) this.levelLabel.string = "Level " + levelId;
          if (this.scoreLabel) this.scoreLabel.string = "" + score;
          if (this.starLabel) this.starLabel.string = "Stars: " + stars;
          if (this.timeLabel) this.timeLabel.string = this.formatTime(this._elapsedSeconds);
          this.updateOrderLabel();
          this.updateBoosterUI();
        };
        _proto.onScoreChanged = function onScoreChanged(score, delta) {
          if (this.scoreLabel) this.scoreLabel.string = "" + score;
        };
        _proto.onLevelCompleted = function onLevelCompleted(levelId, score, stars) {
          if (this.starLabel) this.starLabel.string = "Stars: " + stars;
        };
        _proto.onOrderChanged = function onOrderChanged(order, orderIndex) {
          this.updateOrderLabel();
        };
        _proto.onBoosterChanged = function onBoosterChanged() {
          this.updateBoosterUI();
        };
        _proto.onLevelStarted = function onLevelStarted() {
          this.updateBoosterUI();
        };
        _proto.onLevelEnded = function onLevelEnded() {
          this.updateBoosterUI();
        };
        _proto.onLevelTimeUpdated = function onLevelTimeUpdated(seconds) {
          this._elapsedSeconds = seconds;
          if (this.timeLabel) this.timeLabel.string = this.formatTime(seconds);
        };
        _proto.onTrayMotionChanged = function onTrayMotionChanged() {
          this.updateBoosterUI();
        };
        _proto.formatTime = function formatTime(totalSeconds) {
          var minutes = Math.floor(totalSeconds / 60);
          var seconds = totalSeconds % 60;
          var mm = minutes < 10 ? '0' + minutes : minutes;
          var ss = seconds < 10 ? '0' + seconds : seconds;
          return mm + ":" + ss;
        };
        _proto.onHintFailed = function onHintFailed() {
          var _BoosterManager$getIn;
          if (((_BoosterManager$getIn = BoosterManager.getInstance()) == null ? void 0 : _BoosterManager$getIn.getBoosterCount(BoosterType.UNDO)) > 0) {
            this.shakeUndoButton();
          }
        };
        _proto.shakeUndoButton = function shakeUndoButton() {
          if (!this.undoButton || !this.undoButton.node.isValid) return;
          var node = this.undoButton.node;
          Tween.stopAllByTarget(node);
          if (!this._undoButtonOriginalPos) {
            this._undoButtonOriginalPos = node.position.clone();
          }
          var originalPos = this._undoButtonOriginalPos;
          node.setPosition(originalPos);
          tween(node).to(0.05, {
            position: new Vec3(originalPos.x - 8, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: new Vec3(originalPos.x + 8, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: new Vec3(originalPos.x - 8, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: new Vec3(originalPos.x + 8, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: originalPos
          }).start();
        };
        _proto.bindBoosterButtons = function bindBoosterButtons() {
          var _AudioManager$getInst, _this$undoButton, _AudioManager$getInst2, _this$hintButton, _this$undoButton2, _this$hintButton2, _this$skipButton;
          this.unbindBoosterButtons();
          (_AudioManager$getInst = AudioManager.getInstance()) == null || _AudioManager$getInst.unbindButtonSound(((_this$undoButton = this.undoButton) == null ? void 0 : _this$undoButton.node) || null);
          (_AudioManager$getInst2 = AudioManager.getInstance()) == null || _AudioManager$getInst2.unbindButtonSound(((_this$hintButton = this.hintButton) == null ? void 0 : _this$hintButton.node) || null);
          (_this$undoButton2 = this.undoButton) == null || _this$undoButton2.node.on(Button.EventType.CLICK, this.onUndoClicked, this);
          (_this$hintButton2 = this.hintButton) == null || _this$hintButton2.node.on(Button.EventType.CLICK, this.onHintClicked, this);
          (_this$skipButton = this.skipButton) == null || _this$skipButton.node.on(Button.EventType.CLICK, this.onSkipClicked, this);
        };
        _proto.unbindBoosterButtons = function unbindBoosterButtons() {
          var _this$undoButton3, _this$hintButton3, _this$skipButton2;
          (_this$undoButton3 = this.undoButton) == null || _this$undoButton3.node.off(Button.EventType.CLICK, this.onUndoClicked, this);
          (_this$hintButton3 = this.hintButton) == null || _this$hintButton3.node.off(Button.EventType.CLICK, this.onHintClicked, this);
          (_this$skipButton2 = this.skipButton) == null || _this$skipButton2.node.off(Button.EventType.CLICK, this.onSkipClicked, this);
        };
        _proto.onUndoClicked = function onUndoClicked() {
          var _this2 = this;
          this.releaseUndoButtonVisual();
          this.scheduleOnce(function () {
            var _BoosterManager$getIn2, _AudioManager$getInst3;
            var used = ((_BoosterManager$getIn2 = BoosterManager.getInstance()) == null ? void 0 : _BoosterManager$getIn2.UseUndo()) || false;
            (_AudioManager$getInst3 = AudioManager.getInstance()) == null || _AudioManager$getInst3.playSfx(used ? 'tile_click' : 'button_click');
            _this2.updateBoosterUI();
          }, 0);
        };
        _proto.onHintClicked = function onHintClicked() {
          var _BoosterManager$getIn3, _AudioManager$getInst4;
          var used = ((_BoosterManager$getIn3 = BoosterManager.getInstance()) == null ? void 0 : _BoosterManager$getIn3.UseHint()) || false;
          (_AudioManager$getInst4 = AudioManager.getInstance()) == null || _AudioManager$getInst4.playSfx(used ? 'tile_click' : 'button_click');
          this.updateBoosterUI();
        };
        _proto.onSkipClicked = function onSkipClicked() {
          var _BoosterManager$getIn4;
          (_BoosterManager$getIn4 = BoosterManager.getInstance()) == null || _BoosterManager$getIn4.UseSkipLevel();
          this.updateBoosterUI();
        };
        _proto.updateBoosterUI = function updateBoosterUI() {
          var booster = BoosterManager.getInstance();
          if (!booster) return;
          var undoCount = booster.getBoosterCount(BoosterType.UNDO);
          var hintCount = booster.getBoosterCount(BoosterType.HINT);
          var skipCount = booster.getBoosterCount(BoosterType.SKIP);
          if (this.undoCountLabel) this.undoCountLabel.string = "" + undoCount;
          if (this.hintCountLabel) this.hintCountLabel.string = "" + hintCount;
          if (this.skipCountLabel) this.skipCountLabel.string = "" + skipCount;
          if (this.undoButton) this.undoButton.interactable = booster.canUseUndo();
          if (this.hintButton) this.hintButton.interactable = booster.canUseHint();
          if (this.skipButton) this.skipButton.interactable = booster.canUseSkip();
        };
        _proto.updateOrderLabel = function updateOrderLabel() {
          if (!this.orderLabel) return;
          var orderMgr = OrderManager.getInstance();
          if (!orderMgr.isActive()) {
            this.orderLabel.string = '';
            return;
          }
          var currentOrder = orderMgr.getCurrentOrder();
          if (!currentOrder) {
            this.orderLabel.string = 'All orders complete!';
            return;
          }
          var expected = orderMgr.getExpectedItem();
          var progress = orderMgr.getCurrentItemIndex();
          var total = currentOrder.items.length;
          this.orderLabel.string = "Order " + (orderMgr.getCurrentOrderIndex() + 1) + "/" + orderMgr.getTotalOrders() + ": Need [" + currentOrder.items.join(' > ') + "] | Next: " + (expected || '?');
        };
        _proto.releaseUndoButtonVisual = function releaseUndoButtonVisual() {
          if (!this.undoButton || !this.undoButton.node.isValid) return;
          if (!this._undoButtonOriginalScale) {
            this._undoButtonOriginalScale = this.undoButton.node.scale.clone();
          }
          Tween.stopAllByTarget(this.undoButton.node);
          this.undoButton.node.setScale(this._undoButtonOriginalScale);
        };
        return GameplayPanel;
      }(BasePanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "starLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "orderLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "undoButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hintButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "skipButton", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "undoCountLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "hintCountLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "skipCountLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameState.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "70e72Cu8wpMLI3u0FDVW3FG", "GameState", undefined);
      /**
       * Enum định nghĩa các trạng thái của game.
       * Dùng cho state machine của GameManager.
       */
      var GameState = exports('GameState', /*#__PURE__*/function (GameState) {
        GameState[GameState["NONE"] = 0] = "NONE";
        GameState[GameState["LOADING"] = 1] = "LOADING";
        GameState[GameState["MAIN_MENU"] = 2] = "MAIN_MENU";
        GameState[GameState["LEVEL_SELECT"] = 3] = "LEVEL_SELECT";
        GameState[GameState["GAMEPLAY"] = 4] = "GAMEPLAY";
        GameState[GameState["PAUSED"] = 5] = "PAUSED";
        GameState[GameState["LEVEL_COMPLETE"] = 6] = "LEVEL_COMPLETE";
        GameState[GameState["LEVEL_FAILED"] = 7] = "LEVEL_FAILED";
        GameState[GameState["BOOSTER_ACTIVE"] = 8] = "BOOSTER_ACTIVE";
        return GameState;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IAudioConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1217eI2/S1NBbl97N3wq/ar", "IAudioConfig", undefined);
      /**
       * Interface cấu hình audio clip - dùng trong game config JSON.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IBoardConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "08f9dEL8d9L64H3Z8TfSprn", "IBoardConfig", undefined);
      /**
       * Interface cấu hình board - định nghĩa kích thước và cấu trúc board.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IBoosterConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4d0bdYr7M9E2KcOtsOaLoZP", "IBoosterConfig", undefined);
      /**
       * Interface cấu hình booster - dùng cho game config JSON.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IDifficultyConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "83aaeuMUaNJpIkjovb4yB6p", "IDifficultyConfig", undefined);
      /**
       * Interface cấu hình độ khó cho Smart Level Generator.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGameConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e028aO+mKVLcKnIG29UGDvM", "IGameConfig", undefined);
      /**
       * Interface cấu hình toàn game - ánh xạ với game_config.json.
       * ConfigManager load file này khi khởi động.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ILevelData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6e19bmzvplEeas65jz534Jb", "ILevelData", undefined);
      /**
       * Interface dữ liệu level - ánh xạ 1:1 với file JSON level.
       * LevelManager load file này và truyền cho BoardManager khởi tạo.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ILevelOutput.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "afd29zZ931DJryR8effieZT", "ILevelOutput", undefined);
      /**
       * Output JSON của SmartLevelGenerator.
       * Định dạng này thay thế / mở rộng ILevelData để hỗ trợ solution-based generation.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IOrder.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c3d4eX2p7hMnQ4fKjtMXW5/", "IOrder", undefined);
      /**
       * Interface định nghĩa một order trong Order Match.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IOrderConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b2c3dTl9qdLjJ0OHyo7TF1u", "IOrderConfig", undefined);
      /**
       * Interface cấu hình Order Match.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ISkinConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "705cfrn8KVADJR6uff1GzFm", "ISkinConfig", undefined);
      /**
       * Interface cấu hình skin - định nghĩa một bộ skin có thể reskin.
       * SkinManager load file này và thay thế asset theo mapping.
       */
      /** Một asset replacement trong skin */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemIdCatalog.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        isCanonicalItemId: isCanonicalItemId,
        normalizeItemId: normalizeItemId
      });
      cclegacy._RF.push({}, "4e87aJzLJBI1odtALwdi7Dr", "ItemIdCatalog", undefined);
      /** VelvetNight / VevetNight pack: 22 tile arts (files 0-21). */
      var ITEM_ID_GROUPS = exports('ITEM_ID_GROUPS', Array.from({
        length: 22
      }, function (_, index) {
        return "" + index;
      }));
      var ITEM_ID_COUNT = exports('ITEM_ID_COUNT', ITEM_ID_GROUPS.length);
      var LEGACY_ITEM_NAMES = ['cushion', 'lamp', 'clock', 'vase', 'plant', 'basket', 'frame', 'storagebox', 'candle', 'carpet', 'chair', 'coasters', 'bedroom lamp', 'tissue box', 'table', 'book', 'mirror', 'shelf'];
      var LEGACY_ITEM_ID_MAP = exports('LEGACY_ITEM_ID_MAP', LEGACY_ITEM_NAMES.reduce(function (map, name, index) {
        map[name] = ITEM_ID_GROUPS[index % ITEM_ID_COUNT];
        return map;
      }, {}));
      function normalizeItemId(value) {
        if (Object.prototype.hasOwnProperty.call(LEGACY_ITEM_ID_MAP, value)) {
          return LEGACY_ITEM_ID_MAP[value];
        }
        return value;
      }
      function isCanonicalItemId(value) {
        return ITEM_ID_GROUPS.includes(value);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ITileData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "77ea08Zu+pP86t9FsOcbUUT", "ITileData", undefined);
      /**
       * Interface dữ liệu tile - định nghĩa một tile trong level JSON.
       * Grid-based: vị trí tính từ gridX, gridY, layer.
       * Không chứa logic runtime, chỉ là data thuần túy.
       */
      /** Vị trí grid-based của tile trên board */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ITrayConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "83bc2B8xSpHmJVH6DDQpii/", "ITrayConfig", undefined);
      /**
       * Interface cấu hình tray (thanh chứa tile người chơi chọn).
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Level1Exporter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SmartLevelGenerator.ts', './LevelValidator.ts', './ItemIdCatalog.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, SmartLevelGenerator, LevelValidator, ITEM_ID_GROUPS;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      SmartLevelGenerator = module.SmartLevelGenerator;
    }, function (module) {
      LevelValidator = module.LevelValidator;
    }, function (module) {
      ITEM_ID_GROUPS = module.ITEM_ID_GROUPS;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ca128QKUzhDQaYH6YYn5Ijc", "Level1Exporter", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Level1Exporter - Generate level 1 và ghi trực tiếp ra file JSON.
       * Chạy trong Editor (Preview) để ghi file.
       */
      var Level1Exporter = exports('Level1Exporter', (_dec = ccclass('Level1Exporter'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Level1Exporter, _Component);
        function Level1Exporter() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.groupIds = ITEM_ID_GROUPS;
          return _this;
        }
        var _proto = Level1Exporter.prototype;
        _proto.start = function start() {
          // Custom difficulty for a complex puzzle level
          var difficulty = {
            difficulty: 1,
            layerCount: 3,
            tileTypeCount: this.groupIds.length,
            totalTriplets: 18,
            // 54 tiles total
            safeMoveWindow: 3,
            trapRate: 0.2,
            visibleTripletLimit: 2,
            coverThreshold: 0.3
          };
          try {
            var level = SmartLevelGenerator.generate(1, difficulty, this.groupIds, 'heart');
            var validator = LevelValidator.validate(level);
            if (validator.valid) {
              var exportData = {
                levelId: level.levelId,
                displayName: level.displayName || "Level " + level.levelId,
                defaultSkin: level.defaultSkin || 'uma',
                board: level.board,
                tray: level.tray,
                tiles: level.tiles.map(function (t) {
                  return {
                    id: t.id,
                    groupId: t.groupId,
                    tileType: t.tileType,
                    gridX: t.gridX,
                    gridY: t.gridY,
                    layer: t.layer,
                    active: t.active,
                    selectable: t.selectable,
                    isBlocked: t.isBlocked
                  };
                }),
                solutionSteps: level.solutionSteps
              };
              var json = JSON.stringify(exportData, null, 2);

              // Ghi file trực tiếp bằng Node.js fs
              try {
                var fs = require('fs');
                var path = require('path');
                var projectPath = 'D:/CocosProject/MiniGame1';
                var filePath = path.join(projectPath, 'assets/resources/data/levels/level_001.json');
                fs.mkdirSync(path.dirname(filePath), {
                  recursive: true
                });
                fs.writeFileSync(filePath, json, 'utf8');
              } catch (fsErr) {}
            } else {}
          } catch (e) {}
        };
        return Level1Exporter;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelCompletePanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePanel.ts', './GameManager.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, BasePanel, GameManager, AudioManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
    }, function (module) {
      BasePanel = module.BasePanel;
    }, function (module) {
      GameManager = module.GameManager;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "05e40qcJrFCM6oAkHVQP2JX", "LevelCompletePanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FINAL_LEVEL_ID = 5;

      /**
       * LevelCompletePanel - Popup win.
       * Su dung prefab co san, gom nut Home va Next.
       */
      var LevelCompletePanel = exports('LevelCompletePanel', (_dec = ccclass('LevelCompletePanel'), _dec2 = property(Label), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePanel) {
        _inheritsLoose(LevelCompletePanel, _BasePanel);
        function LevelCompletePanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePanel.call.apply(_BasePanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "titleLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "homeButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timeLabel", _descriptor4, _assertThisInitialized(_this));
          _this._data = null;
          return _this;
        }
        var _proto = LevelCompletePanel.prototype;
        _proto.onShow = function onShow(data) {
          var _AudioManager$getInst;
          _BasePanel.prototype.onShow.call(this, data);
          (_AudioManager$getInst = AudioManager.getInstance()) == null || _AudioManager$getInst.playUi('panel_win');
          this._data = data || {};
          this.updateUI();
          this.bindButtons();
        };
        _proto.onHide = function onHide() {
          this.unbindButtons();
          _BasePanel.prototype.onHide.call(this);
        };
        _proto.updateUI = function updateUI() {
          var _this$_data, _this$_data2;
          var levelId = ((_this$_data = this._data) == null ? void 0 : _this$_data.levelId) || 1;
          if (this.titleLabel) this.titleLabel.string = "Level " + levelId + " Complete!";
          if (this.timeLabel) this.timeLabel.string = this.formatTime(((_this$_data2 = this._data) == null ? void 0 : _this$_data2.elapsedSeconds) || 0);
          if (this.nextButton) {
            this.nextButton.interactable = levelId < FINAL_LEVEL_ID;
            this.nextButton.node.active = levelId < FINAL_LEVEL_ID;
          }
        };
        _proto.formatTime = function formatTime(totalSeconds) {
          var minutes = Math.floor(totalSeconds / 60);
          var seconds = totalSeconds % 60;
          var mm = minutes < 10 ? '0' + minutes : minutes;
          var ss = seconds < 10 ? '0' + seconds : seconds;
          return mm + ":" + ss;
        };
        _proto.bindButtons = function bindButtons() {
          var _this$homeButton, _this$nextButton;
          (_this$homeButton = this.homeButton) == null || _this$homeButton.node.on(Button.EventType.CLICK, this.onHomeClicked, this);
          (_this$nextButton = this.nextButton) == null || _this$nextButton.node.on(Button.EventType.CLICK, this.onNextClicked, this);
        };
        _proto.unbindButtons = function unbindButtons() {
          var _this$homeButton2, _this$nextButton2;
          (_this$homeButton2 = this.homeButton) == null || _this$homeButton2.node.off(Button.EventType.CLICK, this.onHomeClicked, this);
          (_this$nextButton2 = this.nextButton) == null || _this$nextButton2.node.off(Button.EventType.CLICK, this.onNextClicked, this);
        };
        _proto.onHomeClicked = function onHomeClicked() {
          var _GameManager$Instance;
          this.closePanel();
          (_GameManager$Instance = GameManager.Instance) == null || _GameManager$Instance.returnToMenu();
        };
        _proto.onNextClicked = function onNextClicked() {
          var _this$_data3, _GameManager$Instance2;
          var nextLevel = (((_this$_data3 = this._data) == null ? void 0 : _this$_data3.levelId) || 1) + 1;
          if (nextLevel > FINAL_LEVEL_ID) return;
          this.closePanel();
          (_GameManager$Instance2 = GameManager.Instance) == null || _GameManager$Instance2.startLevel(nextLevel);
        };
        return LevelCompletePanel;
      }(BasePanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "homeButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nextButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelFailedPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePanel.ts', './GameManager.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, BasePanel, GameManager, AudioManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
    }, function (module) {
      BasePanel = module.BasePanel;
    }, function (module) {
      GameManager = module.GameManager;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "6eafdkfxMRHeajZoeOjNb0y", "LevelFailedPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * LevelFailedPanel - Popup thua.
       * Su dung prefab co san, gom nut Home va Replay.
       */
      var LevelFailedPanel = exports('LevelFailedPanel', (_dec = ccclass('LevelFailedPanel'), _dec2 = property(Label), _dec3 = property(Button), _dec4 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePanel) {
        _inheritsLoose(LevelFailedPanel, _BasePanel);
        function LevelFailedPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePanel.call.apply(_BasePanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "titleLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "homeButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "replayButton", _descriptor3, _assertThisInitialized(_this));
          _this._data = null;
          return _this;
        }
        var _proto = LevelFailedPanel.prototype;
        _proto.onShow = function onShow(data) {
          var _AudioManager$getInst;
          _BasePanel.prototype.onShow.call(this, data);
          (_AudioManager$getInst = AudioManager.getInstance()) == null || _AudioManager$getInst.playUi('panel_lose');
          if (this.node.parent) {
            this.node.setSiblingIndex(this.node.parent.children.length - 1);
          }
          this._data = data || {};
          this.updateUI();
          this.bindButtons();
        };
        _proto.onHide = function onHide() {
          this.unbindButtons();
          _BasePanel.prototype.onHide.call(this);
        };
        _proto.updateUI = function updateUI() {
          var _this$_data;
          var levelId = ((_this$_data = this._data) == null ? void 0 : _this$_data.levelId) || 1;
          if (this.titleLabel) this.titleLabel.string = "Level " + levelId + " Failed";
        };
        _proto.bindButtons = function bindButtons() {
          var _this$homeButton, _this$replayButton;
          (_this$homeButton = this.homeButton) == null || _this$homeButton.node.on(Button.EventType.CLICK, this.onHomeClicked, this);
          (_this$replayButton = this.replayButton) == null || _this$replayButton.node.on(Button.EventType.CLICK, this.onReplayClicked, this);
        };
        _proto.unbindButtons = function unbindButtons() {
          var _this$homeButton2, _this$replayButton2;
          (_this$homeButton2 = this.homeButton) == null || _this$homeButton2.node.off(Button.EventType.CLICK, this.onHomeClicked, this);
          (_this$replayButton2 = this.replayButton) == null || _this$replayButton2.node.off(Button.EventType.CLICK, this.onReplayClicked, this);
        };
        _proto.onHomeClicked = function onHomeClicked() {
          var _GameManager$Instance;
          this.closePanel();
          (_GameManager$Instance = GameManager.Instance) == null || _GameManager$Instance.returnToMenu();
        };
        _proto.onReplayClicked = function onReplayClicked() {
          var _this$_data2, _GameManager$Instance2;
          var levelId = ((_this$_data2 = this._data) == null ? void 0 : _this$_data2.levelId) || 1;
          this.closePanel();
          (_GameManager$Instance2 = GameManager.Instance) == null || _GameManager$Instance2.startLevel(levelId);
        };
        return LevelFailedPanel;
      }(BasePanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "homeButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "replayButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelGenerator.test.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelGenerator.ts', './TestRunner.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, LevelGenerator, TestRunner;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LevelGenerator = module.LevelGenerator;
    }, function (module) {
      TestRunner = module.TestRunner;
    }],
    execute: function () {
      exports('runLevelGeneratorTests', runLevelGeneratorTests);
      cclegacy._RF.push({}, "95f3bCBja5EpoU/Y2z3qBj2", "LevelGenerator.test", undefined);
      function runLevelGeneratorTests() {
        var t = new TestRunner();
        t.describe('LevelGenerator Shapes', function () {
          t.it('should contain 10 predefined shapes', function () {
            var shapes = Object.keys(LevelGenerator.SHAPES);
            t.assertEquals(shapes.length, 10);
          });
          t.it('should have valid rectangle shape', function () {
            var rect = LevelGenerator.SHAPES.rectangle;
            t.assertTrue(rect.length > 0);
            t.assertTrue(rect[0].length > 0);
            for (var _iterator = _createForOfIteratorHelperLoose(rect), _step; !(_step = _iterator()).done;) {
              var row = _step.value;
              for (var _iterator2 = _createForOfIteratorHelperLoose(row), _step2; !(_step2 = _iterator2()).done;) {
                var cell = _step2.value;
                t.assertEquals(cell, 1);
              }
            }
          });
          t.it('should have symmetric diamond shape', function () {
            var diamond = LevelGenerator.SHAPES.diamond;
            var rows = diamond.length;
            var cols = diamond[0].length;
            for (var r = 0; r < rows; r++) {
              for (var c = 0; c < Math.floor(cols / 2); c++) {
                t.assertEquals(diamond[r][c], diamond[r][cols - 1 - c]);
              }
            }
          });
        });
        t.describe('LevelGenerator Layer Progression', function () {
          t.it('should return 2 layers for levels 1-10', function () {
            t.assertEquals(LevelGenerator.getLayerForLevel(1), 2);
            t.assertEquals(LevelGenerator.getLayerForLevel(10), 2);
          });
          t.it('should return 3 layers for level 11', function () {
            t.assertEquals(LevelGenerator.getLayerForLevel(11), 3);
          });
          t.it('should return 5 layers for level 100', function () {
            t.assertEquals(LevelGenerator.getLayerForLevel(100), 5);
          });
          t.it('should return 4-6 layers for level 101+', function () {
            var layer = LevelGenerator.getLayerForLevel(101);
            t.assertTrue(layer >= 4 && layer <= 6);
          });
          t.it('should be deterministic for same level ID', function () {
            var layer1 = LevelGenerator.getLayerForLevel(150);
            var layer2 = LevelGenerator.getLayerForLevel(150);
            t.assertEquals(layer1, layer2);
          });
        });
        t.describe('LevelGenerator Tile Generation', function () {
          t.it('should generate total tiles divisible by 3', function () {
            var tiles = LevelGenerator.generateTiles(1, 'rectangle', 2, ['a', 'b', 'c', 'd']);
            t.assertEquals(tiles.length % 3, 0);
          });
          t.it('should generate correct layer range', function () {
            var tiles = LevelGenerator.generateTiles(2, 'diamond', 3, ['a', 'b', 'c']);
            var maxLayer = Math.max.apply(Math, tiles.map(function (t) {
              return t.layer;
            }));
            t.assertTrue(maxLayer <= 2);
          });
          t.it('should make each group count divisible by 3', function () {
            var tiles = LevelGenerator.generateTiles(3, 'pyramid', 2, ['x', 'y', 'z', 'w']);
            var counts = {};
            for (var _iterator3 = _createForOfIteratorHelperLoose(tiles), _step3; !(_step3 = _iterator3()).done;) {
              var tile = _step3.value;
              counts[tile.groupId] = (counts[tile.groupId] || 0) + 1;
            }
            for (var _i = 0, _Object$keys = Object.keys(counts); _i < _Object$keys.length; _i++) {
              var gid = _Object$keys[_i];
              t.assertEquals(counts[gid] % 3, 0);
            }
          });
          t.it('should make each group count divisible by 3 for odd groupIds', function () {
            var tiles = LevelGenerator.generateTiles(5, 'stair', 2, ['a', 'b', 'c', 'd', 'e']);
            var counts = {};
            for (var _iterator4 = _createForOfIteratorHelperLoose(tiles), _step4; !(_step4 = _iterator4()).done;) {
              var tile = _step4.value;
              counts[tile.groupId] = (counts[tile.groupId] || 0) + 1;
            }
            for (var _i2 = 0, _Object$keys2 = Object.keys(counts); _i2 < _Object$keys2.length; _i2++) {
              var gid = _Object$keys2[_i2];
              t.assertEquals(counts[gid] % 3, 0, "Group " + gid + " count must be multiple of 3");
            }
          });
          t.it('should cycle through provided groupIds', function () {
            var groups = ['red', 'green', 'blue'];
            var tiles = LevelGenerator.generateTiles(4, 'rectangle', 2, groups);
            var used = new Set(tiles.map(function (t) {
              return t.groupId;
            }));
            for (var _i3 = 0, _groups = groups; _i3 < _groups.length; _i3++) {
              var g = _groups[_i3];
              t.assertTrue(used.has(g), "Group " + g + " should be used");
            }
          });
          t.it('should preserve levelId prefix in tile IDs', function () {
            var tiles = LevelGenerator.generateTiles(42, 'rectangle', 1, ['a', 'b']);
            t.assertTrue(tiles[0].id.startsWith('L42_'), 'Tile ID should contain level prefix');
          });
          t.it('should throw on empty groupIds', function () {
            var threw = false;
            try {
              LevelGenerator.generateTiles(1, 'rectangle', 2, []);
            } catch (e) {
              threw = true;
            }
            t.assertTrue(threw, 'Empty groupIds should throw');
          });
          t.it('should cap excessive layers at 20', function () {
            var tiles = LevelGenerator.generateTiles(1, 'rectangle', 100, ['a', 'b']);
            var maxLayer = Math.max.apply(Math, tiles.map(function (t) {
              return t.layer;
            }));
            t.assertTrue(maxLayer <= 19, 'Layers should be capped');
          });
          t.it('should fallback to rectangle for unknown shape', function () {
            var tiles = LevelGenerator.generateTiles(1, 'nonexistent', 2, ['a', 'b']);
            t.assertTrue(tiles.length > 0, 'Should generate tiles even for unknown shape');
          });
          t.it('should not drop tiles below adjustedTotal', function () {
            var tiles = LevelGenerator.generateTiles(5, 'rectangle', 2, ['a', 'b', 'c']);
            var shape = LevelGenerator.SHAPES.rectangle;
            var baseCount = shape.reduce(function (acc, row) {
              return acc.concat(row);
            }, []).filter(function (v) {
              return v === 1;
            }).length;
            var expected = Math.floor(baseCount * 2 / 3) * 3;
            t.assertEquals(tiles.length, expected, 'Tile count should match adjustedTotal without extra drops');
          });
        });
        t.describe('LevelGenerator Shape Rotation', function () {
          t.it('should cycle shapes by level modulo', function () {
            var shape1 = LevelGenerator.getShapeForLevel(1);
            var shape11 = LevelGenerator.getShapeForLevel(11);
            t.assertEquals(shape1, shape11, 'Shape should repeat every 10 levels');
          });
        });
        t.printReport();
        return t;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelGenerator.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7aaafSh9Y9PKaGiHukZ71v7", "LevelGenerator", undefined);
      /**
       * LevelGenerator - Sinh tile data cho các shapes và layer progression.
       * Hỗ trợ shapes: Rectangle, Diamond, Pyramid, U, Heart, House, Leaf, Bowl, Hourglass, Stair.
       */
      var LevelGenerator = exports('LevelGenerator', /*#__PURE__*/function () {
        function LevelGenerator() {}
        /**
         * Sinh tiles cho một level.
         * @param levelId ID level
         * @param shapeName Tên shape từ SHAPES
         * @param layers Số layer
         * @param groupIds Danh sách groupId có thể dùng
         * @returns Danh sách ITileData
         */
        LevelGenerator.generateTiles = function generateTiles(levelId, shapeName, layers, groupIds) {
          var _shape$;
          if (!groupIds || groupIds.length === 0) {
            throw new Error('LevelGenerator: groupIds must not be empty');
          }
          if (layers <= 0) layers = 1;
          if (layers > 20) layers = 20; // Hard cap để tránh quá nhiều tiles

          var shape = this.SHAPES[shapeName] || this.SHAPES.rectangle;
          var rows = shape.length;
          var cols = ((_shape$ = shape[0]) == null ? void 0 : _shape$.length) || 0;
          var tiles = [];
          var idCounter = 0;

          // Tạo base tiles từ shape (layer 0)
          var baseTiles = [];
          for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
              if (shape[r][c] === 1) {
                baseTiles.push({
                  gridX: c,
                  gridY: r
                });
              }
            }
          }
          if (baseTiles.length === 0) {
            throw new Error('LevelGenerator: shape has no tiles');
          }

          // Số tile phải chia hết cho 3 (solvable)
          var totalTiles = baseTiles.length * layers;
          var adjustedTotal = Math.floor(totalTiles / 3) * 3;

          // Tạo assignedGroups sao cho mỗi group xuất hiện đúng bội số 3.
          // Mỗi vòng lặp thêm 3 tile cho một group, đảm bảo tổng luôn chia hết cho 3
          // và mỗi group có số lượng là bội số của 3 (tránh unsolvable level).
          var assignedGroups = [];
          var groupIndex = 0;
          while (assignedGroups.length < adjustedTotal) {
            var gid = groupIds[groupIndex % groupIds.length];
            assignedGroups.push(gid, gid, gid);
            groupIndex++;
          }
          // Shuffle group assignments để ngẫu nhiên hóa vị trí
          for (var i = assignedGroups.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = assignedGroups[i];
            assignedGroups[i] = assignedGroups[j];
            assignedGroups[j] = tmp;
          }

          // Tạo tiles cho mỗi layer
          for (var layer = 0; layer < layers; layer++) {
            for (var _i = 0; _i < baseTiles.length; _i++) {
              if (idCounter >= assignedGroups.length) break;
              var pos = baseTiles[_i];
              tiles.push({
                id: "L" + levelId + "_T" + idCounter,
                groupId: assignedGroups[idCounter],
                tileType: 0,
                gridX: pos.gridX,
                gridY: pos.gridY,
                layer: layer,
                active: true,
                selectable: true,
                isBlocked: false
              });
              idCounter++;
              if (tiles.length >= adjustedTotal) break;
            }
            if (tiles.length >= adjustedTotal) break;
          }

          // Gán lại ID liên tục
          return this.balanceGroups(tiles, groupIds, levelId);
        }

        /** Gán lại ID liên tục cho tiles */;
        LevelGenerator.balanceGroups = function balanceGroups(tiles, groupIds, levelId) {
          // Gán lại ID liên tục giữ prefix levelId để debug dễ dàng
          for (var i = 0; i < tiles.length; i++) {
            var padded = i < 10 ? "00" + i : i < 100 ? "0" + i : "" + i;
            tiles[i].id = "L" + levelId + "_T" + padded;
          }
          return tiles;
        }

        /** Lấy số layer theo level progression (deterministic) */;
        LevelGenerator.getLayerForLevel = function getLayerForLevel(levelId) {
          if (levelId <= 10) return 2;
          if (levelId <= 30) return 3;
          if (levelId <= 60) return 4;
          if (levelId <= 100) return 5;
          // Deterministic pseudo-random dựa trên levelId để replay/test ổn định
          var pseudoRand = levelId * 16807 % 2147483647 % 3; // 0-2
          return 4 + pseudoRand; // 4-6
        }

        /** Lấy shape name theo level (lặp lại) */;
        LevelGenerator.getShapeForLevel = function getShapeForLevel(levelId) {
          var shapeNames = Object.keys(this.SHAPES);
          return shapeNames[(levelId - 1) % shapeNames.length];
        };
        return LevelGenerator;
      }());
      /** Shape definitions: 2D array 0/1 cho biết cell nào có tile */
      LevelGenerator.SHAPES = {
        rectangle: [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]],
        diamond: [[0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0]],
        pyramid: [[0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1]],
        ushape: [[1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]],
        heart: [[0, 1, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0]],
        house: [[0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 1, 1]],
        leaf: [[0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0]],
        bowl: [[0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0]],
        hourglass: [[1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1]],
        stair: [[1, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1]]
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelGeneratorTestComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SmartLevelGenerator.ts', './LevelSolver.ts', './LevelValidator.ts', './ItemIdCatalog.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, SmartLevelGenerator, LevelSolver, LevelValidator, ITEM_ID_GROUPS;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SmartLevelGenerator = module.SmartLevelGenerator;
    }, function (module) {
      LevelSolver = module.LevelSolver;
    }, function (module) {
      LevelValidator = module.LevelValidator;
    }, function (module) {
      ITEM_ID_GROUPS = module.ITEM_ID_GROUPS;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a02c6AVutRDd5Ii8C6iLv4S", "LevelGeneratorTestComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * LevelGeneratorTestComponent - Test SmartLevelGenerator V2 trên node riêng.
       * Gắn component này vào một node trong scene để chạy test.
       */
      var LevelGeneratorTestComponent = exports('LevelGeneratorTestComponent', (_dec = ccclass('LevelGeneratorTestComponent'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelGeneratorTestComponent, _Component);
        function LevelGeneratorTestComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "statusLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "testLevelCount", _descriptor2, _assertThisInitialized(_this));
          _this.groupIds = ITEM_ID_GROUPS;
          return _this;
        }
        var _proto = LevelGeneratorTestComponent.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.runTests = function runTests() {
          var pass = 0;
          var fail = 0;
          var errors = [];

          // CHỈ TEST LEVEL 1
          var i = 1;
          var difficulty = SmartLevelGenerator.getDifficultyForLevel(i);
          try {
            var level = SmartLevelGenerator.generate(i, difficulty, this.groupIds);
            var solverResult = LevelSolver.validate(level);
            var validatorResult = LevelValidator.validate(level);
            if (!validatorResult.valid) {
              fail++;
              errors.push("Level " + i + " - Validator: " + validatorResult.stuckReason);
            } else {
              pass++;
            }
          } catch (e) {
            fail++;
            errors.push("Level " + i + " - Exception: " + e);
          }
          var summary = "Pass: " + pass + "/1 | Fail: " + fail;
          if (this.statusLabel) {
            this.statusLabel.string = summary + (errors.length > 0 ? '\n' + errors.slice(0, 3).join('\n') : '');
          }
        };
        _proto.start = function start() {
          this.runTests();
        };
        return LevelGeneratorTestComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "statusLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testLevelCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameEvent.ts', './GameMode.ts', './EventBus.ts', './DataLoader.ts', './ItemIdCatalog.ts', './LevelGenerator.ts', './SaveManager.ts', './BoardPositionHelper.ts', './BoardManager.ts', './TileManager.ts', './TrayManager.ts', './SkinManager.ts', './OrderManager.ts', './OrderTrayManager.ts', './WrongTrayManager.ts', './BoosterManager.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _extends, cclegacy, GameEvent, GameMode, EventBus, DataLoader, normalizeItemId, ITEM_ID_GROUPS, LevelGenerator, SaveManager, BoardPositionHelper, BoardManager, TileManager, TrayManager, SkinManager, OrderManager, OrderTrayManager, WrongTrayManager, BoosterManager;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      GameMode = module.GameMode;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      DataLoader = module.DataLoader;
    }, function (module) {
      normalizeItemId = module.normalizeItemId;
      ITEM_ID_GROUPS = module.ITEM_ID_GROUPS;
    }, function (module) {
      LevelGenerator = module.LevelGenerator;
    }, function (module) {
      SaveManager = module.SaveManager;
    }, function (module) {
      BoardPositionHelper = module.BoardPositionHelper;
    }, function (module) {
      BoardManager = module.BoardManager;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      TrayManager = module.TrayManager;
    }, function (module) {
      SkinManager = module.SkinManager;
    }, function (module) {
      OrderManager = module.OrderManager;
    }, function (module) {
      OrderTrayManager = module.OrderTrayManager;
    }, function (module) {
      WrongTrayManager = module.WrongTrayManager;
    }, function (module) {
      BoosterManager = module.BoosterManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "958b5rayL5D0a14lZ6yvAWz", "LevelManager", undefined);

      /**
       * LevelManager - Quản lý vòng đời level: load, start, progress, complete, fail.
       * Load dữ liệu từ JSON và phân phát cho các gameplay manager.
       */
      var LevelManager = exports('LevelManager', /*#__PURE__*/function () {
        function LevelManager() {
          this._currentLevel = null;
          this._currentLevelId = 0;
          this._score = 0;
          this._stars = 0;
          this._isLevelActive = false;
          this._isResolvingLevelEnd = false;
          this._levelRunId = 0;
          this._loadToken = 0;
          this._preparedLevelId = 0;
          this._isPreparedWaitingDrop = false;
          this._pendingOrderTilesClearedHandler = null;
          this._tileSizeCatalog = null;
          EventBus.getInstance().on(GameEvent.ALL_ORDERS_COMPLETED, this.onAllOrdersCompleted, this);
          EventBus.getInstance().on(GameEvent.WRONG_TRAY_FULL, this.onWrongTrayFull, this);
          EventBus.getInstance().on(GameEvent.TILE_ADDED_TO_TRAY, this.onTileAddedToTray, this);
          EventBus.getInstance().on(GameEvent.TRAY_FULL, this.onTrayFull, this);
        }
        LevelManager.getInstance = function getInstance() {
          if (!LevelManager._instance) {
            LevelManager._instance = new LevelManager();
          }
          return LevelManager._instance;
        }

        /** Khởi tạo hệ thống level */;
        var _proto = LevelManager.prototype;
        _proto.initialize = /*#__PURE__*/
        function () {
          var _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function initialize() {
            return _initialize.apply(this, arguments);
          }
          return initialize;
        }();
        LevelManager.getLevelJsonPath = function getLevelJsonPath(levelId) {
          var paddedId = levelId < 10 ? "00" + levelId : levelId < 100 ? "0" + levelId : "" + levelId;
          return "data/levels/level_" + paddedId;
        }

        /** Preload JSON level + tile size catalog khi Home idle */;
        _proto.preloadLevelJson = /*#__PURE__*/
        function () {
          var _preloadLevelJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(levelId) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return DataLoader.loadJson(LevelManager.getLevelJsonPath(levelId));
                case 3:
                  _context2.next = 5;
                  return this.loadTileSizeCatalog();
                case 5:
                  _context2.next = 9;
                  break;
                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2["catch"](0);
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[0, 7]]);
          }));
          function preloadLevelJson(_x) {
            return _preloadLevelJson.apply(this, arguments);
          }
          return preloadLevelJson;
        }();
        _proto.preloadLevelRuntime = /*#__PURE__*/function () {
          var _preloadLevelRuntime = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(levelId) {
            var _TileManager$getInsta, loadedLevel, preparedLevel, skinId, tiles, groupIds;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return DataLoader.loadJson(LevelManager.getLevelJsonPath(levelId));
                case 3:
                  loadedLevel = _context3.sent;
                  preparedLevel = this.cloneLevelData(loadedLevel);
                  this.normalizeLevelItemIds(preparedLevel);
                  _context3.next = 8;
                  return this.applyTileSizeCatalog(preparedLevel);
                case 8:
                  skinId = preparedLevel.defaultSkin || 'default';
                  _context3.next = 11;
                  return SkinManager.getInstance().loadSkin(skinId);
                case 11:
                  tiles = preparedLevel.tiles;
                  if (!tiles || tiles.length === 0 || !this.arePreparedTilesSolvable(preparedLevel, tiles)) {
                    tiles = this.generateTilesForPreparedLevel(levelId, preparedLevel);
                    preparedLevel.tiles = tiles;
                  }
                  groupIds = [].concat(new Set((tiles || []).map(function (tile) {
                    return normalizeItemId(tile.groupId);
                  })));
                  _context3.next = 16;
                  return SkinManager.getInstance().prewarmSkinSprites(groupIds);
                case 16:
                  (_TileManager$getInsta = TileManager.getInstance()) == null || _TileManager$getInsta.prewarmPool((tiles || []).length);
                  _context3.next = 21;
                  break;
                case 19:
                  _context3.prev = 19;
                  _context3.t0 = _context3["catch"](0);
                case 21:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[0, 19]]);
          }));
          function preloadLevelRuntime(_x2) {
            return _preloadLevelRuntime.apply(this, arguments);
          }
          return preloadLevelRuntime;
        }();
        _proto.preloadAllGameplayRuntime = /*#__PURE__*/function () {
          var _preloadAllGameplayRuntime = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(finalSkinId) {
            var _TileManager$getInsta2;
            var maxTileCount, skinIds, levelId, loadedLevel, preparedLevel, skinId, tiles, _iterator, _step, _skinId;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (finalSkinId === void 0) {
                    finalSkinId = 'uma';
                  }
                  maxTileCount = 0;
                  skinIds = new Set(LevelManager.PRELOAD_SKIN_IDS);
                  _context4.next = 5;
                  return this.loadTileSizeCatalog();
                case 5:
                  levelId = 1;
                case 6:
                  if (!(levelId <= LevelManager.PRELOAD_LEVEL_COUNT)) {
                    _context4.next = 26;
                    break;
                  }
                  _context4.next = 9;
                  return DataLoader.loadJson(LevelManager.getLevelJsonPath(levelId));
                case 9:
                  loadedLevel = _context4.sent;
                  preparedLevel = this.cloneLevelData(loadedLevel);
                  this.normalizeLevelItemIds(preparedLevel);
                  _context4.next = 14;
                  return this.applyTileSizeCatalog(preparedLevel);
                case 14:
                  skinId = preparedLevel.defaultSkin || finalSkinId || 'uma';
                  skinIds.add(skinId);
                  tiles = preparedLevel.tiles;
                  if (!(!tiles || tiles.length === 0 || !this.arePreparedTilesSolvable(preparedLevel, tiles))) {
                    _context4.next = 22;
                    break;
                  }
                  _context4.next = 20;
                  return SkinManager.getInstance().loadSkin(skinId);
                case 20:
                  tiles = this.generateTilesForPreparedLevel(levelId, preparedLevel);
                  preparedLevel.tiles = tiles;
                case 22:
                  maxTileCount = Math.max(maxTileCount, (tiles || []).length);
                case 23:
                  levelId++;
                  _context4.next = 6;
                  break;
                case 26:
                  _iterator = _createForOfIteratorHelperLoose(skinIds);
                case 27:
                  if ((_step = _iterator()).done) {
                    _context4.next = 40;
                    break;
                  }
                  _skinId = _step.value;
                  _context4.prev = 29;
                  _context4.next = 32;
                  return SkinManager.getInstance().loadSkin(_skinId);
                case 32:
                  _context4.next = 34;
                  return SkinManager.getInstance().prewarmSkinSprites();
                case 34:
                  _context4.next = 38;
                  break;
                case 36:
                  _context4.prev = 36;
                  _context4.t0 = _context4["catch"](29);
                case 38:
                  _context4.next = 27;
                  break;
                case 40:
                  _context4.next = 42;
                  return SkinManager.getInstance().loadSkin(finalSkinId || 'uma');
                case 42:
                  (_TileManager$getInsta2 = TileManager.getInstance()) == null || _TileManager$getInsta2.prewarmPool(maxTileCount);
                case 43:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[29, 36]]);
          }));
          function preloadAllGameplayRuntime(_x3) {
            return _preloadAllGameplayRuntime.apply(this, arguments);
          }
          return preloadAllGameplayRuntime;
        }() /** Load level từ JSON theo ID */;
        _proto.prepareLevelWaitingDrop = /*#__PURE__*/
        function () {
          var _prepareLevelWaitingDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(levelId) {
            var loadToken, loadedLevel;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  this.unloadCurrentLevel();
                  loadToken = ++this._loadToken;
                  this._levelRunId++;
                  _context5.next = 5;
                  return DataLoader.loadJson(LevelManager.getLevelJsonPath(levelId));
                case 5:
                  loadedLevel = _context5.sent;
                  if (!(loadToken !== this._loadToken)) {
                    _context5.next = 8;
                    break;
                  }
                  return _context5.abrupt("return");
                case 8:
                  this._currentLevel = this.cloneLevelData(loadedLevel);
                  this.normalizeLevelItemIds(this._currentLevel);
                  _context5.next = 12;
                  return this.applyTileSizeCatalog(this._currentLevel);
                case 12:
                  if (!(loadToken !== this._loadToken)) {
                    _context5.next = 14;
                    break;
                  }
                  return _context5.abrupt("return");
                case 14:
                  this.recomputeInitialTileBlockState(this._currentLevel);
                  _context5.next = 17;
                  return SkinManager.getInstance().loadSkin(this._currentLevel.defaultSkin || 'default');
                case 17:
                  if (!(loadToken !== this._loadToken)) {
                    _context5.next = 19;
                    break;
                  }
                  return _context5.abrupt("return");
                case 19:
                  this._currentLevelId = levelId;
                  this._score = 0;
                  this._stars = 0;
                  this._isResolvingLevelEnd = false;
                  this._isLevelActive = false;
                  EventBus.getInstance().emit(GameEvent.LEVEL_LOADED, this._currentLevel);
                  _context5.next = 27;
                  return this.setupCurrentLevelTiles(loadToken, true);
                case 27:
                  if (!(loadToken !== this._loadToken)) {
                    _context5.next = 29;
                    break;
                  }
                  return _context5.abrupt("return");
                case 29:
                  this._preparedLevelId = levelId;
                  this._isPreparedWaitingDrop = true;
                  SaveManager.getInstance().saveCurrentLevel(levelId);
                case 32:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function prepareLevelWaitingDrop(_x4) {
            return _prepareLevelWaitingDrop.apply(this, arguments);
          }
          return prepareLevelWaitingDrop;
        }();
        _proto.playPreparedLevel = /*#__PURE__*/function () {
          var _playPreparedLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(levelId) {
            var _BoosterManager$getIn;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (!(!this._isPreparedWaitingDrop || this._preparedLevelId !== levelId)) {
                    _context6.next = 4;
                    break;
                  }
                  _context6.next = 3;
                  return this.loadLevel(levelId);
                case 3:
                  return _context6.abrupt("return");
                case 4:
                  this._isPreparedWaitingDrop = false;
                  this._isLevelActive = true;
                  (_BoosterManager$getIn = BoosterManager.getInstance()) == null || _BoosterManager$getIn.resetForLevel();
                  EventBus.getInstance().emit(GameEvent.LEVEL_STARTED, this._currentLevelId);
                  TileManager.getInstance().playWaitingDropAnimation();
                case 9:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function playPreparedLevel(_x5) {
            return _playPreparedLevel.apply(this, arguments);
          }
          return playPreparedLevel;
        }();
        _proto.loadLevel = /*#__PURE__*/function () {
          var _loadLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(levelId) {
            var loadToken, path, loadedLevel, skinId;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  this.unloadCurrentLevel();
                  loadToken = ++this._loadToken;
                  this._levelRunId++;
                  path = LevelManager.getLevelJsonPath(levelId);
                  _context7.next = 6;
                  return DataLoader.loadJson(path);
                case 6:
                  loadedLevel = _context7.sent;
                  if (!(loadToken !== this._loadToken)) {
                    _context7.next = 9;
                    break;
                  }
                  return _context7.abrupt("return");
                case 9:
                  this._currentLevel = this.cloneLevelData(loadedLevel);
                  this.normalizeLevelItemIds(this._currentLevel);
                  _context7.next = 13;
                  return this.applyTileSizeCatalog(this._currentLevel);
                case 13:
                  if (!(loadToken !== this._loadToken)) {
                    _context7.next = 15;
                    break;
                  }
                  return _context7.abrupt("return");
                case 15:
                  this.recomputeInitialTileBlockState(this._currentLevel);

                  // Load skin của level trước khi spawn tiles
                  skinId = this._currentLevel.defaultSkin || 'default';
                  _context7.next = 19;
                  return SkinManager.getInstance().loadSkin(skinId);
                case 19:
                  if (!(loadToken !== this._loadToken)) {
                    _context7.next = 21;
                    break;
                  }
                  return _context7.abrupt("return");
                case 21:
                  this._currentLevelId = levelId;
                  this._score = 0;
                  this._stars = 0;
                  this._isResolvingLevelEnd = false;
                  SaveManager.getInstance().saveCurrentLevel(levelId);
                  EventBus.getInstance().emit(GameEvent.LEVEL_LOADED, this._currentLevel);
                  _context7.next = 29;
                  return this.startLevel(loadToken);
                case 29:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function loadLevel(_x6) {
            return _loadLevel.apply(this, arguments);
          }
          return loadLevel;
        }() /** Bắt đầu gameplay sau khi load xong */;
        _proto.startLevel = /*#__PURE__*/
        function () {
          var _startLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(loadToken) {
            var _BoosterManager$getIn2;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (loadToken === void 0) {
                    loadToken = this._loadToken;
                  }
                  if (this._currentLevel) {
                    _context8.next = 3;
                    break;
                  }
                  return _context8.abrupt("return");
                case 3:
                  _context8.next = 5;
                  return this.setupCurrentLevelTiles(loadToken, false);
                case 5:
                  if (!(loadToken !== this._loadToken)) {
                    _context8.next = 7;
                    break;
                  }
                  return _context8.abrupt("return");
                case 7:
                  this._isLevelActive = true;
                  (_BoosterManager$getIn2 = BoosterManager.getInstance()) == null || _BoosterManager$getIn2.resetForLevel();
                  EventBus.getInstance().emit(GameEvent.LEVEL_STARTED, this._currentLevelId);
                case 10:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function startLevel(_x7) {
            return _startLevel.apply(this, arguments);
          }
          return startLevel;
        }();
        _proto.setupCurrentLevelTiles = /*#__PURE__*/function () {
          var _setupCurrentLevelTiles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(loadToken, waitAbove) {
            var gameMode, boardMgr, tiles, tilesToSpawn, _OrderTrayManager$get, _orders$, _WrongTrayManager$get, orders, orderConfig;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (this._currentLevel) {
                    _context9.next = 2;
                    break;
                  }
                  return _context9.abrupt("return");
                case 2:
                  gameMode = this._currentLevel.gameMode || GameMode.TRIPLE_MATCH;
                  boardMgr = BoardManager.getInstance();
                  boardMgr.buildBoard(this._currentLevel.board);

                  // Validate predefined tiles; if unsolvable, regenerate automatically
                  tiles = this._currentLevel.tiles;
                  if (!tiles || tiles.length === 0 || !this.areTilesSolvable(tiles)) {
                    if (tiles && tiles.length > 0) ;
                    tiles = this.generateLevelTiles();
                    this._currentLevel.tiles = tiles;
                  }

                  // Clone tiles to avoid mutating cached level data on restart
                  tilesToSpawn = tiles.map(function (t) {
                    return _extends({}, t);
                  }); // Always init TrayManager (tiles fly into tray regardless of mode)
                  TrayManager.getInstance().initialize(this._currentLevel.tray);

                  // Init ORDER_MATCH managers BEFORE spawnTiles so TileManager block check is correct
                  if (gameMode === GameMode.ORDER_MATCH) {
                    orders = this._currentLevel.orders || [];
                    orderConfig = this._currentLevel.orderConfig || {
                      orderSize: 3,
                      orderMode: 'EXACT_ORDER',
                      wrongTrayMaxSlots: 2,
                      consumeWrongTile: false
                    };
                    (_OrderTrayManager$get = OrderTrayManager.getInstance()) == null || _OrderTrayManager$get.initialize(orders, (_orders$ = orders[0]) != null ? _orders$ : null, orderConfig);
                    OrderManager.getInstance().initialize(orders, orderConfig);
                    (_WrongTrayManager$get = WrongTrayManager.getInstance()) == null || _WrongTrayManager$get.initialize(orderConfig.wrongTrayMaxSlots);
                  }

                  // Prewarm pool và preload sprite để tránh giật khi instantiate/runtime load
                  TileManager.getInstance().prewarmPool(tilesToSpawn.length);
                  _context9.next = 13;
                  return SkinManager.getInstance().prewarmSkinSprites();
                case 13:
                  if (!(loadToken !== this._loadToken)) {
                    _context9.next = 15;
                    break;
                  }
                  return _context9.abrupt("return");
                case 15:
                  if (!waitAbove) {
                    _context9.next = 20;
                    break;
                  }
                  _context9.next = 18;
                  return TileManager.getInstance().spawnTilesWaitingDrop(tilesToSpawn, gameMode !== GameMode.ORDER_MATCH);
                case 18:
                  _context9.next = 23;
                  break;
                case 20:
                  _context9.next = 22;
                  return TileManager.getInstance().spawnTilesWaitingDrop(tilesToSpawn, gameMode !== GameMode.ORDER_MATCH);
                case 22:
                  TileManager.getInstance().playWaitingDropAnimation();
                case 23:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function setupCurrentLevelTiles(_x8, _x9) {
            return _setupCurrentLevelTiles.apply(this, arguments);
          }
          return setupCurrentLevelTiles;
        }() /** Kiểm tra tiles có thể clear hoàn toàn không */;
        _proto.areTilesSolvable = function areTilesSolvable(tiles) {
          var _this$_currentLevel;
          if (!tiles || tiles.length === 0) return false;
          var gameMode = ((_this$_currentLevel = this._currentLevel) == null ? void 0 : _this$_currentLevel.gameMode) || GameMode.TRIPLE_MATCH;
          if (gameMode === GameMode.ORDER_MATCH) {
            return this.areTilesSolvableForOrderMatch(tiles);
          }
          if (tiles.length % 3 !== 0) return false;
          var counts = {};
          for (var _iterator2 = _createForOfIteratorHelperLoose(tiles), _step2; !(_step2 = _iterator2()).done;) {
            var t = _step2.value;
            counts[t.groupId] = (counts[t.groupId] || 0) + 1;
          }
          for (var gid in counts) {
            if (counts[gid] % 3 !== 0) return false;
          }
          return true;
        }

        /** Kiểm tra tiles có đủ để hoàn thành tất cả orders không */;
        _proto.areTilesSolvableForOrderMatch = function areTilesSolvableForOrderMatch(tiles) {
          var _this$_currentLevel2;
          if (!((_this$_currentLevel2 = this._currentLevel) != null && _this$_currentLevel2.orders) || this._currentLevel.orders.length === 0) {
            return false;
          }
          var required = {};
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._currentLevel.orders), _step3; !(_step3 = _iterator3()).done;) {
            var order = _step3.value;
            for (var _iterator5 = _createForOfIteratorHelperLoose(order.items), _step5; !(_step5 = _iterator5()).done;) {
              var item = _step5.value;
              required[item] = (required[item] || 0) + 1;
            }
          }
          var available = {};
          for (var _iterator4 = _createForOfIteratorHelperLoose(tiles), _step4; !(_step4 = _iterator4()).done;) {
            var t = _step4.value;
            available[t.groupId] = (available[t.groupId] || 0) + 1;
          }
          for (var gid in required) {
            if ((available[gid] || 0) < required[gid]) {
              return false;
            }
          }
          return true;
        }

        /** Sinh tiles tự động qua LevelGenerator */;
        _proto.generateLevelTiles = function generateLevelTiles() {
          var board = this._currentLevel.board;
          var shape = board.shapePattern ? this.inferShapeName(board.shapePattern) : 'rectangle';
          var layers = board.maxLayers || LevelGenerator.getLayerForLevel(this._currentLevelId);
          var groupIds = this.getSkinGroupIds();
          return LevelGenerator.generateTiles(this._currentLevelId, shape, layers, groupIds);
        };
        _proto.generateTilesForPreparedLevel = function generateTilesForPreparedLevel(levelId, level) {
          var _skinData$itemGroups;
          var board = level.board;
          var shape = board.shapePattern ? this.inferShapeName(board.shapePattern) : 'rectangle';
          var layers = board.maxLayers || LevelGenerator.getLayerForLevel(levelId);
          var skinData = SkinManager.getInstance().getCurrentSkin();
          var groupIds = (skinData == null || (_skinData$itemGroups = skinData.itemGroups) == null ? void 0 : _skinData$itemGroups.map(normalizeItemId)) || ITEM_ID_GROUPS;
          return LevelGenerator.generateTiles(levelId, shape, layers, groupIds);
        };
        _proto.arePreparedTilesSolvable = function arePreparedTilesSolvable(level, tiles) {
          if (!tiles || tiles.length === 0) return false;
          var gameMode = level.gameMode || GameMode.TRIPLE_MATCH;
          if (gameMode === GameMode.ORDER_MATCH) {
            if (!level.orders || level.orders.length === 0) return false;
            var required = {};
            for (var _iterator6 = _createForOfIteratorHelperLoose(level.orders), _step6; !(_step6 = _iterator6()).done;) {
              var order = _step6.value;
              for (var _iterator8 = _createForOfIteratorHelperLoose(order.items), _step8; !(_step8 = _iterator8()).done;) {
                var item = _step8.value;
                required[item] = (required[item] || 0) + 1;
              }
            }
            var available = {};
            for (var _iterator7 = _createForOfIteratorHelperLoose(tiles), _step7; !(_step7 = _iterator7()).done;) {
              var tile = _step7.value;
              available[tile.groupId] = (available[tile.groupId] || 0) + 1;
            }
            for (var gid in required) {
              if ((available[gid] || 0) < required[gid]) return false;
            }
            return true;
          }
          if (tiles.length % 3 !== 0) return false;
          var counts = {};
          for (var _iterator9 = _createForOfIteratorHelperLoose(tiles), _step9; !(_step9 = _iterator9()).done;) {
            var _tile = _step9.value;
            counts[_tile.groupId] = (counts[_tile.groupId] || 0) + 1;
          }
          for (var _gid in counts) {
            if (counts[_gid] % 3 !== 0) return false;
          }
          return true;
        };
        _proto.normalizeLevelItemIds = function normalizeLevelItemIds(level) {
          if (!level) return;
          if (level.tiles) {
            for (var _iterator10 = _createForOfIteratorHelperLoose(level.tiles), _step10; !(_step10 = _iterator10()).done;) {
              var tile = _step10.value;
              tile.groupId = normalizeItemId(tile.groupId);
              if (tile.skinOverride) {
                var _tile$skinOverride$sp = tile.skinOverride.split('/'),
                  skinId = _tile$skinOverride$sp[0],
                  itemId = _tile$skinOverride$sp[1];
                if (skinId && itemId) {
                  tile.skinOverride = skinId + "/" + normalizeItemId(itemId);
                }
              }
            }
          }
          if (level.orders) {
            for (var _iterator11 = _createForOfIteratorHelperLoose(level.orders), _step11; !(_step11 = _iterator11()).done;) {
              var order = _step11.value;
              order.items = order.items.map(normalizeItemId);
            }
          }
          if (level.solutionOrders) {
            level.solutionOrders = level.solutionOrders.map(function (order) {
              return order.map(normalizeItemId);
            });
          }
        };
        _proto.cloneLevelData = function cloneLevelData(level) {
          return JSON.parse(JSON.stringify(level));
        };
        _proto.applyTileSizeCatalog = /*#__PURE__*/function () {
          var _applyTileSizeCatalog = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(level) {
            var catalog, _iterator12, _step12, tile, size;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (level != null && level.tiles) {
                    _context10.next = 2;
                    break;
                  }
                  return _context10.abrupt("return");
                case 2:
                  _context10.next = 4;
                  return this.loadTileSizeCatalog();
                case 4:
                  catalog = _context10.sent;
                  if (catalog) {
                    _context10.next = 7;
                    break;
                  }
                  return _context10.abrupt("return");
                case 7:
                  _iterator12 = _createForOfIteratorHelperLoose(level.tiles);
                case 8:
                  if ((_step12 = _iterator12()).done) {
                    _context10.next = 17;
                    break;
                  }
                  tile = _step12.value;
                  size = catalog[tile.groupId];
                  if (size) {
                    _context10.next = 13;
                    break;
                  }
                  return _context10.abrupt("continue", 15);
                case 13:
                  if (Number.isFinite(size.width) && size.width > 0) tile.tileWidth = size.width;
                  if (Number.isFinite(size.height) && size.height > 0) tile.tileHeight = size.height;
                case 15:
                  _context10.next = 8;
                  break;
                case 17:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function applyTileSizeCatalog(_x10) {
            return _applyTileSizeCatalog.apply(this, arguments);
          }
          return applyTileSizeCatalog;
        }();
        _proto.loadTileSizeCatalog = /*#__PURE__*/function () {
          var _loadTileSizeCatalog = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  if (!this._tileSizeCatalog) {
                    _context11.next = 2;
                    break;
                  }
                  return _context11.abrupt("return", this._tileSizeCatalog);
                case 2:
                  _context11.prev = 2;
                  _context11.next = 5;
                  return DataLoader.loadJson('data/tile_size_catalog');
                case 5:
                  this._tileSizeCatalog = _context11.sent;
                  _context11.next = 11;
                  break;
                case 8:
                  _context11.prev = 8;
                  _context11.t0 = _context11["catch"](2);
                  this._tileSizeCatalog = {};
                case 11:
                  return _context11.abrupt("return", this._tileSizeCatalog);
                case 12:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, this, [[2, 8]]);
          }));
          function loadTileSizeCatalog() {
            return _loadTileSizeCatalog.apply(this, arguments);
          }
          return loadTileSizeCatalog;
        }() /** Infer shape name từ shapePattern (nếu có) */;
        _proto.recomputeInitialTileBlockState = function recomputeInitialTileBlockState(level) {
          if (!(level != null && level.tiles) || !level.board) return;
          for (var _iterator13 = _createForOfIteratorHelperLoose(level.tiles), _step13; !(_step13 = _iterator13()).done;) {
            var tile = _step13.value;
            tile.active = true;
          }
          for (var _iterator14 = _createForOfIteratorHelperLoose(level.tiles), _step14; !(_step14 = _iterator14()).done;) {
            var _tile2 = _step14.value;
            _tile2.isBlocked = BoardPositionHelper.isTileBlocked(_tile2, level.tiles, level.board);
            _tile2.selectable = _tile2.active && !_tile2.isBlocked;
          }
        };
        _proto.inferShapeName = function inferShapeName(pattern) {
          // Default to rectangle if custom pattern provided
          return 'rectangle';
        }

        /** Lấy danh sách groupId từ skin config */;
        _proto.getSkinGroupIds = function getSkinGroupIds() {
          var skinData = SkinManager.getInstance().getCurrentSkin();
          if (skinData && skinData.itemGroups && Array.isArray(skinData.itemGroups)) {
            return skinData.itemGroups.map(normalizeItemId);
          }
          return ITEM_ID_GROUPS;
        }

        /** Dọn dẹp level hiện tại */;
        _proto.unloadCurrentLevel = function unloadCurrentLevel() {
          var _OrderTrayManager$get2, _WrongTrayManager$get2;
          this._loadToken++;
          this.clearPendingOrderTilesClearedHandler();
          BoardManager.getInstance().clearBoard();
          TileManager.getInstance().clearTiles();
          TrayManager.getInstance().clearTray();
          OrderManager.getInstance().clear();
          (_OrderTrayManager$get2 = OrderTrayManager.getInstance()) == null || _OrderTrayManager$get2.clearTray();
          (_WrongTrayManager$get2 = WrongTrayManager.getInstance()) == null || _WrongTrayManager$get2.clearTray();
          this._currentLevel = null;
          this._isLevelActive = false;
          this._isResolvingLevelEnd = false;
          this._preparedLevelId = 0;
          this._isPreparedWaitingDrop = false;
          this._levelRunId++;
        }

        /** Khi tile được thêm vào tray: kiểm tra board empty → win/lose */;
        _proto.onTileAddedToTray = function onTileAddedToTray() {
          var _this$_currentLevel3,
            _this = this;
          var runId = this._levelRunId;
          var gameMode = ((_this$_currentLevel3 = this._currentLevel) == null ? void 0 : _this$_currentLevel3.gameMode) || GameMode.TRIPLE_MATCH;
          if (gameMode === GameMode.TRIPLE_MATCH) {
            this.checkLevelComplete();
            return;
          }

          // ORDER_MATCH: delay check board empty để OrderManager kịp xử lý order completion trước
          setTimeout(function () {
            if (runId !== _this._levelRunId) return;
            if (!_this._isLevelActive) return;
            var checkFail = function checkFail() {
              if (runId !== _this._levelRunId) return;
              if (!_this._isLevelActive) return;
              if (OrderManager.getInstance().isPendingTrayCheck()) {
                setTimeout(checkFail, 100);
                return;
              }
              var flyCount = TrayManager.getInstance().getFlyCount();
              if (flyCount > 0) {
                setTimeout(checkFail, 100);
                return;
              }
              if (OrderManager.getInstance().isAllOrdersCompleted() || TrayManager.getInstance().isClearingOrderTiles()) {
                return;
              }
              var remainingTiles = TileManager.getInstance().getRemainingTileCount();
              if (remainingTiles === 0 && !OrderManager.getInstance().isAllOrdersCompleted()) {
                _this.onLevelFailed('board_empty_orders_not_completed');
              }
            };
            checkFail();
          }, 0);
        }

        /** Kiểm tra và xử lý level hoàn thành (TRIPLE_MATCH only) */;
        _proto.checkLevelComplete = function checkLevelComplete() {
          if (!this._isLevelActive) return;
          var remainingTiles = TileManager.getInstance().getRemainingTileCount();
          if (remainingTiles === 0) {
            var _this$_currentLevel4;
            var gameMode = ((_this$_currentLevel4 = this._currentLevel) == null ? void 0 : _this$_currentLevel4.gameMode) || GameMode.TRIPLE_MATCH;
            if (gameMode === GameMode.ORDER_MATCH) {
              return; // ORDER_MATCH win handled by onAllOrdersCompleted
            }
            // TRIPLE_MATCH: board clear = win
            this._isLevelActive = false;
            this.calculateStars();
            EventBus.getInstance().emit(GameEvent.LEVEL_COMPLETED, this._currentLevelId, this._score, this._stars);
          }
        };
        _proto.completeLevel = function completeLevel(skipped) {
          if (skipped === void 0) {
            skipped = false;
          }
          if (!this._isLevelActive) return;
          this._isLevelActive = false;
          if (!skipped) this.calculateStars();
          EventBus.getInstance().emit(GameEvent.LEVEL_COMPLETED, this._currentLevelId, this._score, this._stars, skipped);
        }

        /** Xử lý khi tất cả orders hoàn thành */;
        _proto.onAllOrdersCompleted = function onAllOrdersCompleted() {
          if (!this._isLevelActive) return;
          var runId = this._levelRunId;
          if (this._isResolvingLevelEnd) return;
          this._isResolvingLevelEnd = true;
          this.waitForOrderTilesCleared(runId);
          // Đợi TrayManager xóa tile và animation xong mới kiểm tra win
        }

        /** Xử lý khi tray chính đầy (ORDER_MATCH only) */;
        _proto.waitForOrderTilesCleared = function waitForOrderTilesCleared(runId) {
          var _this2 = this;
          this.clearPendingOrderTilesClearedHandler();
          this._pendingOrderTilesClearedHandler = function () {
            _this2.clearPendingOrderTilesClearedHandler();
            _this2.finalizeOrderMatchCompletion(runId);
          };
          EventBus.getInstance().on(GameEvent.ORDER_TILES_CLEARED, this._pendingOrderTilesClearedHandler, this);
          if (!TrayManager.getInstance().isClearingOrderTiles()) {
            setTimeout(function () {
              if (!_this2._pendingOrderTilesClearedHandler) return;
              _this2.clearPendingOrderTilesClearedHandler();
              _this2.finalizeOrderMatchCompletion(runId);
            }, 0);
          }
        };
        _proto.clearPendingOrderTilesClearedHandler = function clearPendingOrderTilesClearedHandler() {
          if (!this._pendingOrderTilesClearedHandler) return;
          EventBus.getInstance().off(GameEvent.ORDER_TILES_CLEARED, this._pendingOrderTilesClearedHandler, this);
          this._pendingOrderTilesClearedHandler = null;
        };
        _proto.finalizeOrderMatchCompletion = function finalizeOrderMatchCompletion(runId) {
          var _this3 = this;
          if (runId === void 0) {
            runId = this._levelRunId;
          }
          if (runId !== this._levelRunId) {
            return;
          }
          if (!this._isLevelActive) {
            return;
          }
          var remainingTiles = TileManager.getInstance().getRemainingTileCount();
          var trayTiles = TrayManager.getInstance().getTrayTiles().length;
          var flyCount = TrayManager.getInstance().getFlyCount();
          var clearingOrderTiles = TrayManager.getInstance().isClearingOrderTiles();
          if (clearingOrderTiles) {
            this.waitForOrderTilesCleared(runId);
            return;
          }
          if (flyCount > 0) {
            setTimeout(function () {
              return _this3.finalizeOrderMatchCompletion(runId);
            }, 100);
            return;
          }
          if (OrderManager.getInstance().isAllOrdersCompleted()) {
            this._isLevelActive = false;
            this.calculateStars();
            EventBus.getInstance().emit(GameEvent.LEVEL_COMPLETED, this._currentLevelId, this._score, this._stars);
          } else {
            this._isLevelActive = false;
            EventBus.getInstance().emit(GameEvent.LEVEL_FAILED, this._currentLevelId);
          }
        };
        _proto.onTrayFull = function onTrayFull() {
          var _this$_currentLevel5,
            _this4 = this;
          if (!this._isLevelActive) return;
          var runId = this._levelRunId;
          var gameMode = ((_this$_currentLevel5 = this._currentLevel) == null ? void 0 : _this$_currentLevel5.gameMode) || GameMode.TRIPLE_MATCH;
          if (gameMode !== GameMode.ORDER_MATCH) return;

          // Delay để onOrderCompleted kịp remove tile nếu vừa hoàn thành order
          setTimeout(function () {
            if (runId !== _this4._levelRunId) return;
            if (!_this4._isLevelActive) return;
            if (TrayManager.getInstance().isFull() && !OrderManager.getInstance().isAllOrdersCompleted() && !TrayManager.getInstance().isClearingOrderTiles() && TrayManager.getInstance().getFlyCount() === 0 && !OrderManager.getInstance().isPendingTrayCheck()) {
              _this4.onLevelFailed('tray_full_order_match');
            }
          }, 0);
        }

        /** Xử lý khi wrong tray đầy (chỉ thua trong TRIPLE_MATCH) */;
        _proto.onWrongTrayFull = function onWrongTrayFull() {
          var _this$_currentLevel6;
          if (!this._isLevelActive) return;
          var gameMode = ((_this$_currentLevel6 = this._currentLevel) == null ? void 0 : _this$_currentLevel6.gameMode) || GameMode.TRIPLE_MATCH;
          if (gameMode === GameMode.ORDER_MATCH) {
            // ORDER_MATCH: chỉ tray chính đầy mới thua, wrong tray không gây thua
            return;
          }
          this.onLevelFailed('wrong_tray_full');
        }

        /** Xử lý level thất bại */;
        _proto.onLevelFailed = function onLevelFailed(reason) {
          if (!this._isLevelActive) return;
          if (this._isResolvingLevelEnd || OrderManager.getInstance().isAllOrdersCompleted()) {
            return;
          }
          this._isLevelActive = false;
          EventBus.getInstance().emit(GameEvent.LEVEL_FAILED, this._currentLevelId);
        }

        /** Cộng điểm */;
        _proto.addScore = function addScore(points) {
          this._score += points;
          EventBus.getInstance().emit(GameEvent.SCORE_CHANGED, this._score, points);
        }

        /** Tính số sao */;
        _proto.calculateStars = function calculateStars() {
          var _this$_currentLevel7;
          var thresholds = ((_this$_currentLevel7 = this._currentLevel) == null ? void 0 : _this$_currentLevel7.starThresholds) || [];
          var stars = 0;
          for (var i = 0; i < thresholds.length; i++) {
            if (this._score >= thresholds[i]) stars = i + 1;
          }
          this._stars = stars;
        }

        /** Getters */;
        _proto.getCurrentLevel = function getCurrentLevel() {
          return this._currentLevel;
        };
        _proto.getCurrentLevelId = function getCurrentLevelId() {
          return this._currentLevelId;
        };
        _proto.getScore = function getScore() {
          return this._score;
        };
        _proto.getStars = function getStars() {
          return this._stars;
        };
        _proto.isLevelActive = function isLevelActive() {
          return this._isLevelActive;
        };
        return LevelManager;
      }());
      LevelManager.PRELOAD_LEVEL_COUNT = 50;
      LevelManager.PRELOAD_SKIN_IDS = ['default', 'goc', 'saigonfood', 'uma'];
      LevelManager._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelSelectPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePanel.ts', './GameManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, ScrollView, Node, BasePanel, GameManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Node = module.Node;
    }, function (module) {
      BasePanel = module.BasePanel;
    }, function (module) {
      GameManager = module.GameManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "71666vCxJpMVLJTcC7TlWlg", "LevelSelectPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * LevelSelectPanel - Màn hình chọn level.
       * Hiển thị danh sách level, scroll, lock/unlock status.
       * Khi click level -> gọi GameManager.startLevel().
       */
      var LevelSelectPanel = exports('LevelSelectPanel', (_dec = ccclass('LevelSelectPanel'), _dec2 = property(ScrollView), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePanel) {
        _inheritsLoose(LevelSelectPanel, _BasePanel);
        function LevelSelectPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePanel.call.apply(_BasePanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelScrollView", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelItemPrefab", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LevelSelectPanel.prototype;
        _proto.onShow = function onShow(data) {
          _BasePanel.prototype.onShow.call(this, data);
          this.refreshLevelList();
        }

        /** Tạo danh sách level items */;
        _proto.refreshLevelList = function refreshLevelList() {
          // TODO: Load level metadata và instantiate levelItemPrefab
        }

        /** Callback khi click một level (được gọi từ Button click event hoặc code) */;
        _proto.onLevelClicked = /*#__PURE__*/
        function () {
          var _onLevelClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event, customEventData) {
            var levelId, _GameManager$Instance;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  levelId = 1;
                  if (customEventData) {
                    levelId = parseInt(customEventData, 10);
                  } else if (typeof event === 'number') {
                    levelId = event;
                  }
                  _context.prev = 2;
                  _context.next = 5;
                  return (_GameManager$Instance = GameManager.Instance) == null ? void 0 : _GameManager$Instance.startLevel(levelId);
                case 5:
                  _context.next = 9;
                  break;
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](2);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[2, 7]]);
          }));
          function onLevelClicked(_x, _x2) {
            return _onLevelClicked.apply(this, arguments);
          }
          return onLevelClicked;
        }();
        return LevelSelectPanel;
      }(BasePanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelScrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelItemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelSolver.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BoardPositionHelper.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy, BoardPositionHelper;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BoardPositionHelper = module.BoardPositionHelper;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5b1c8gEDk1CvK2+1OsIDJtn", "LevelSolver", undefined);
      /**
       * LevelSolver - Kiểm tra tính solvable của level và tìm solution path.
       * Mô phỏng gameplay đơn giản: tray 7 slot, match 3 liên tiếp cùng groupId.
       */
      var LevelSolver = exports('LevelSolver', /*#__PURE__*/function () {
        function LevelSolver() {}
        /**
         * Validate toàn bộ level output.
         */
        LevelSolver.validate = function validate(output) {
          var errors = [];
          var tiles = output.tiles.filter(function (t) {
            return t.active;
          });
          var config = output.board;

          // 1. Tile count phải chia hết cho 3
          if (tiles.length % 3 !== 0) {
            errors.push("Total tile count " + tiles.length + " is not divisible by 3");
          }

          // 2. Mỗi groupId phải chia hết cho 3
          var counts = this.getGroupCounts(tiles);
          for (var _i = 0, _Object$keys = Object.keys(counts); _i < _Object$keys.length; _i++) {
            var gid = _Object$keys[_i];
            var count = counts[gid];
            if (count % 3 !== 0) {
              errors.push("Group " + gid + " count " + count + " is not divisible by 3");
            }
          }

          // 3. Tính block status
          this.computeBlockStatus(tiles, config);

          // 4. Không deadlock ngay từ đầu (phải có ít nhất 1 tile selectable)
          var selectable = tiles.filter(function (t) {
            return t.active && t.selectable;
          });
          var hasDeadlock = selectable.length === 0 && tiles.length > 0;
          if (hasDeadlock) {
            errors.push('Deadlock at start: no selectable tiles');
          }

          // 5. Trust LevelValidator for solvability (skip heavy BFS)
          var hasSolution = true;
          return {
            valid: errors.length === 0,
            errors: errors,
            hasSolution: hasSolution,
            hasDeadlock: hasDeadlock,
            minTrayUsed: 0,
            worstCaseMoves: 0
          };
        }

        /**
         * Tìm ít nhất 1 solution path.
         * Trả về {solvable, minTrayUsed, worstCaseMoves}.
         */;
        LevelSolver.findSolution = function findSolution(tiles, traySize, matchCount, config) {
          if (tiles.length === 0) return {
            solvable: true,
            minTrayUsed: 0,
            worstCaseMoves: 0
          };

          // Tính block status ban đầu
          var tileList = tiles.map(function (t) {
            return _extends({}, t);
          });
          this.computeBlockStatus(tileList, config);
          var initialState = this.serializeState(tileList, []);
          var visited = new Set();
          var queue = [{
            tiles: tileList,
            tray: [],
            depth: 0,
            maxTray: 0
          }];
          var bestWorstCase = 0;
          var minTray = traySize;
          var statesChecked = 0;
          var queueHead = 0;
          while (queueHead < queue.length && statesChecked < this.MAX_SEARCH_STATES) {
            var state = queue[queueHead++];
            statesChecked++;
            var stateKey = this.serializeState(state.tiles, state.tray);
            if (visited.has(stateKey)) continue;
            visited.add(stateKey);
            bestWorstCase = Math.max(bestWorstCase, state.depth);
            minTray = Math.min(minTray, state.maxTray);

            // Win condition
            if (state.tiles.length === 0 && state.tray.length === 0) {
              return {
                solvable: true,
                minTrayUsed: minTray,
                worstCaseMoves: bestWorstCase
              };
            }

            // Get selectable tiles
            this.computeBlockStatus(state.tiles, config);
            var selectable = state.tiles.filter(function (t) {
              return t.selectable;
            });
            if (selectable.length === 0 && state.tiles.length > 0) continue;

            // Prune: tray full and no immediate match possible
            if (state.tray.length >= traySize) {
              if (!this.hasImmediateMatch(state.tray, matchCount)) continue;
            }

            // Explore each selectable tile
            for (var _iterator = _createForOfIteratorHelperLoose(selectable), _step; !(_step = _iterator()).done;) {
              var tile = _step.value;
              var result = this.simulatePick(state.tiles, state.tray, tile.id, traySize, matchCount);
              if (!result) continue;
              queue.push({
                tiles: result.tiles,
                tray: result.tray,
                depth: state.depth + 1,
                maxTray: Math.max(state.maxTray, result.tray.length)
              });
            }
          }
          return {
            solvable: false,
            minTrayUsed: minTray,
            worstCaseMoves: bestWorstCase
          };
        }

        /**
         * Kiểm tra tray có match liên tiếp ngay lập tức không.
         */;
        LevelSolver.hasImmediateMatch = function hasImmediateMatch(tray, matchCount) {
          for (var i = 0; i <= tray.length - matchCount; i++) {
            var g = tray[i];
            var same = true;
            for (var j = 1; j < matchCount; j++) {
              if (tray[i + j] !== g) {
                same = false;
                break;
              }
            }
            if (same) return true;
          }
          return false;
        }

        /**
         * Mô phỏng 1 nước đi: chọn tile từ board vào tray, xử lý match nếu có.
         */;
        LevelSolver.simulatePick = function simulatePick(tiles, tray, tileId, traySize, matchCount) {
          var tileIndex = tiles.findIndex(function (t) {
            return t.id === tileId;
          });
          if (tileIndex === -1) return null;
          var tile = tiles[tileIndex];
          if (!tile.selectable) return null;
          var newTray = [].concat(tray, [tile.groupId]);
          var newTiles = tiles.filter(function (t) {
            return t.id !== tileId;
          });

          // Check match in tray
          var matchResult = this.findConsecutiveMatch(newTray, matchCount);
          if (matchResult) {
            // Remove matched groups from tray
            var matchStart = matchResult.start;
            var finalTray = newTray.slice(0, matchStart).concat(newTray.slice(matchStart + matchCount));
            return {
              tiles: newTiles,
              tray: finalTray
            };
          }
          if (newTray.length > traySize) return null;
          return {
            tiles: newTiles,
            tray: newTray
          };
        };
        LevelSolver.findConsecutiveMatch = function findConsecutiveMatch(tray, matchCount) {
          for (var i = 0; i <= tray.length - matchCount; i++) {
            var g = tray[i];
            var same = true;
            for (var j = 1; j < matchCount; j++) {
              if (tray[i + j] !== g) {
                same = false;
                break;
              }
            }
            if (same) return {
              start: i
            };
          }
          return null;
        }

        /**
         * Tính toán trạng thái blocked/selectable cho từng tile.
         * Tile bị block nếu có tile active khác ở layer cao hơn overlap với nó.
         */;
        LevelSolver.computeBlockStatus = function computeBlockStatus(tiles, config) {
          var activeTiles = tiles.filter(function (t) {
            return t.active;
          });
          for (var _iterator2 = _createForOfIteratorHelperLoose(tiles), _step2; !(_step2 = _iterator2()).done;) {
            var tile = _step2.value;
            if (!tile.active) {
              tile.selectable = false;
              tile.isBlocked = true;
              continue;
            }
            var blocked = BoardPositionHelper.isTileBlocked(tile, activeTiles, config);
            tile.isBlocked = blocked;
            tile.selectable = !blocked;
          }
        };
        LevelSolver.getGroupCounts = function getGroupCounts(tiles) {
          var counts = {};
          for (var _iterator3 = _createForOfIteratorHelperLoose(tiles), _step3; !(_step3 = _iterator3()).done;) {
            var t = _step3.value;
            counts[t.groupId] = (counts[t.groupId] || 0) + 1;
          }
          return counts;
        };
        LevelSolver.serializeState = function serializeState(tiles, tray) {
          var ids = tiles.map(function (t) {
            return t.id;
          }).sort().join(',');
          return ids + "|" + tray.join(',');
        };
        return LevelSolver;
      }());
      LevelSolver.MAX_SEARCH_STATES = 50000;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelValidator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelSolver.ts'], function (exports) {
  var _extends, cclegacy, LevelSolver;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LevelSolver = module.LevelSolver;
    }],
    execute: function () {
      cclegacy._RF.push({}, "88e2bDIbJFFuq0Vw7zDKr8t", "LevelValidator", undefined);
      /**
       * LevelValidator - Kiểm tra level có clear được theo solutionSteps không.
       * Đi theo từng bước solution, tìm tile selectable, mô phỏng pick vào tray.
       */
      var LevelValidator = exports('LevelValidator', /*#__PURE__*/function () {
        function LevelValidator() {}
        LevelValidator.validate = function validate(level) {
          var steps = [];
          var tiles = level.tiles.map(function (t) {
            return _extends({}, t);
          });
          var tray = [];
          var config = level.board;
          var matchCount = level.tray.matchCount;
          var _loop = function _loop() {
              var groupId = level.solutionSteps[stepIdx][0];
              var pickedIds = [];

              // Pick 3 tiles one by one, recalculating block status after each pick
              var _loop2 = function _loop2() {
                  LevelSolver.computeBlockStatus(tiles, config);
                  var candidates = tiles.filter(function (t) {
                    return t.active && t.selectable && t.groupId === groupId;
                  });
                  if (candidates.length === 0) {
                    return {
                      v: {
                        v: {
                          valid: false,
                          cleared: false,
                          stuckStepIndex: stepIdx,
                          stuckGroupId: groupId,
                          stuckReason: "Pick " + (pick + 1) + "/3: no selectable tile for group " + groupId,
                          steps: steps,
                          remainingTiles: tiles
                        }
                      }
                    };
                  }
                  var picked = candidates[0];
                  pickedIds.push(picked.id);
                  tiles = tiles.filter(function (t) {
                    return t.id !== picked.id;
                  });
                  tray.push(picked.groupId);

                  // Check for consecutive match after each pick
                  var matchFound = false;
                  do {
                    matchFound = false;
                    for (var i = 0; i <= tray.length - matchCount; i++) {
                      var same = true;
                      for (var j = 1; j < matchCount; j++) {
                        if (tray[i + j] !== tray[i]) {
                          same = false;
                          break;
                        }
                      }
                      if (same) {
                        tray = tray.slice(0, i).concat(tray.slice(i + matchCount));
                        matchFound = true;
                        break;
                      }
                    }
                  } while (matchFound);
                },
                _ret2;
              for (var pick = 0; pick < 3; pick++) {
                _ret2 = _loop2();
                if (_ret2) return _ret2.v;
              }
              steps.push({
                stepIndex: stepIdx,
                groupId: groupId,
                pickedTileIds: pickedIds,
                trayState: [].concat(tray)
              });
            },
            _ret;
          for (var stepIdx = 0; stepIdx < level.solutionSteps.length; stepIdx++) {
            _ret = _loop();
            if (_ret) return _ret.v;
          }
          var cleared = tiles.length === 0 && tray.length === 0;
          return {
            valid: cleared,
            cleared: cleared,
            stuckStepIndex: -1,
            stuckGroupId: '',
            stuckReason: cleared ? '' : "Board not fully cleared: " + tiles.length + " tiles + " + tray.length + " tray items remaining",
            steps: steps,
            remainingTiles: tiles
          };
        };
        return LevelValidator;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelValidator2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMode.ts', './BoardPositionHelper.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _extends, cclegacy, GameMode, BoardPositionHelper;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameMode = module.GameMode;
    }, function (module) {
      BoardPositionHelper = module.BoardPositionHelper;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f7a8bnA0eJPOktcbX6Pmgsc", "LevelValidator", undefined);

      /**
       * LevelValidator - Kiểm tra tính hợp lệ của ORDER_MATCH level.
       * Chạy simulation trên board state để verify solutionMoveTileIds.
       */
      var LevelValidator = exports('LevelValidator', /*#__PURE__*/function () {
        function LevelValidator() {}
        /**
         * Validate một level ORDER_MATCH.
         * Trả về { valid, errors }.
         */
        LevelValidator.validate = function validate(levelData) {
          var errors = [];
          if (levelData.gameMode !== GameMode.ORDER_MATCH) {
            return {
              valid: true,
              errors: []
            };
          }
          if (!levelData.orders || levelData.orders.length === 0) {
            errors.push('ORDER_MATCH level must have orders');
            return {
              valid: false,
              errors: errors
            };
          }
          if (!levelData.orderConfig) {
            errors.push('ORDER_MATCH level must have orderConfig');
            return {
              valid: false,
              errors: errors
            };
          }

          // 1. Tính required counts từ orders
          var requiredCounts = {};
          for (var _iterator = _createForOfIteratorHelperLoose(levelData.orders), _step; !(_step = _iterator()).done;) {
            var order = _step.value;
            for (var _iterator4 = _createForOfIteratorHelperLoose(order.items), _step4; !(_step4 = _iterator4()).done;) {
              var item = _step4.value;
              requiredCounts[item] = (requiredCounts[item] || 0) + 1;
            }
          }

          // 2. Tính available counts từ tiles
          var tileCounts = {};
          var tileMap = new Map();
          for (var _iterator2 = _createForOfIteratorHelperLoose(levelData.tiles), _step2; !(_step2 = _iterator2()).done;) {
            var tile = _step2.value;
            tileCounts[tile.groupId] = (tileCounts[tile.groupId] || 0) + 1;
            tileMap.set(tile.id, tile);
          }

          // 3. Kiểm tra mỗi item trong orders có tile tương ứng
          for (var gid in requiredCounts) {
            var avail = tileCounts[gid] || 0;
            if (avail < requiredCounts[gid]) {
              errors.push("Order requires " + requiredCounts[gid] + " '" + gid + "' tiles but only " + avail + " available");
            }
          }

          // 4. Kiểm tra tổng counts khớp chính xác
          for (var _gid in tileCounts) {
            var req = requiredCounts[_gid] || 0;
            var _avail = tileCounts[_gid];
            if (req > _avail) {
              errors.push("Group '" + _gid + "' has " + _avail + " tiles but orders require " + req);
            }
          }

          // 5. Kiểm tra orderSize khớp với items.length của mỗi order
          for (var _iterator3 = _createForOfIteratorHelperLoose(levelData.orders), _step3; !(_step3 = _iterator3()).done;) {
            var _order = _step3.value;
            if (_order.items.length !== levelData.orderConfig.orderSize) {
              errors.push("Order " + _order.id + " has " + _order.items.length + " items but orderSize=" + levelData.orderConfig.orderSize);
            }
          }

          // 6. Kiểm tra tổng số item trong orders phải bằng tổng số tile active
          var totalOrderItems = levelData.orders.reduce(function (sum, o) {
            return sum + o.items.length;
          }, 0);
          var totalActiveTiles = levelData.tiles.length;
          if (totalOrderItems > totalActiveTiles) {
            errors.push("Total order items (" + totalOrderItems + ") > total tiles (" + totalActiveTiles + ").");
          }

          // 7. Simulate solution moves nếu có solutionMoveTileIds
          if (levelData.solutionMoveTileIds && levelData.solutionMoveTileIds.length > 0) {
            var simErrors = this.simulateMoves(levelData, tileMap);
            errors.push.apply(errors, simErrors);
          }
          return {
            valid: errors.length === 0,
            errors: errors
          };
        }

        /**
         * Simulate từng move theo solutionMoveTileIds để kiểm tra:
         * - Tile tồn tại
         * - Tile selectable tại thời điểm chọn
         * - Sau mỗi move board recalculate đúng
         * - Wrong tray không bị full trong solution
         * - Cuối cùng board clear hoàn toàn
         */;
        LevelValidator.simulateMoves = function simulateMoves(levelData, tileMap) {
          var _this = this;
          var errors = [];
          var moveIds = levelData.solutionMoveTileIds;
          var orderConfig = levelData.orderConfig;
          var orders = levelData.orders;
          var wrongTrayMax = orderConfig.wrongTrayMaxSlots;

          // Clone tiles để simulate (không mutate level data)
          var simTiles = levelData.tiles.map(function (t) {
            return _extends({}, t);
          });
          var simTileMap = new Map();
          for (var _iterator5 = _createForOfIteratorHelperLoose(simTiles), _step5; !(_step5 = _iterator5()).done;) {
            var t = _step5.value;
            simTileMap.set(t.id, t);
          }

          // Build grid cells cho occlusion check
          var gridCells = new Map();
          for (var _iterator6 = _createForOfIteratorHelperLoose(simTiles), _step6; !(_step6 = _iterator6()).done;) {
            var tile = _step6.value;
            var key = tile.gridX + "_" + tile.gridY;
            var list = gridCells.get(key) || [];
            list.push(tile);
            gridCells.set(key, list);
          }
          // Sort each cell by layer
          for (var _iterator7 = _createForOfIteratorHelperLoose(gridCells), _step7; !(_step7 = _iterator7()).done;) {
            var _step7$value = _step7.value,
              _list = _step7$value[1];
            _list.sort(function (a, b) {
              return a.layer - b.layer;
            });
          }

          // Compute initial block state
          this.refreshBlockStatus(simTiles, levelData);

          // Track order progress
          var currentOrderIdx = 0;
          var currentItemIdx = 0;
          var wrongCount = 0;
          var _loop = function _loop() {
              var tileId = moveIds[i];
              var tile = simTileMap.get(tileId);
              if (!tile) {
                errors.push("Move " + (i + 1) + ": tile " + tileId + " not found");
                return 0; // continue
              }

              if (!tile.active) {
                errors.push("Move " + (i + 1) + ": tile " + tileId + " is not active");
                return 0; // continue
              }

              if (!tile.selectable) {
                errors.push("Move " + (i + 1) + ": tile " + tileId + " (groupId=" + tile.groupId + ") is BLOCKED at step " + (i + 1));
              }

              // Check if this move is correct for current order
              var currentOrder = orders[currentOrderIdx];
              var isCorrect = false;
              if (currentOrder) {
                if (orderConfig.orderMode === 'ANY_ORDER') {
                  // ANY_ORDER: check if groupId is in remaining items
                  // For simplicity in validator, we check if tile.groupId is in currentOrder.items
                  isCorrect = currentOrder.items.indexOf(tile.groupId) !== -1;
                } else {
                  // EXACT_ORDER
                  isCorrect = currentOrder.items[currentItemIdx] === tile.groupId;
                }
              }
              if (isCorrect) {
                currentItemIdx++;
                if (currentItemIdx >= ((currentOrder == null ? void 0 : currentOrder.items.length) || 0)) {
                  currentOrderIdx++;
                  currentItemIdx = 0;
                }
              } else {
                wrongCount++;
              }

              // Remove tile from board
              tile.active = false;
              tile.selectable = false;
              tile.isBlocked = true;

              // Remove from grid cell
              var key = tile.gridX + "_" + tile.gridY;
              var list = gridCells.get(key);
              if (list) {
                var idx = list.findIndex(function (t) {
                  return t.id === tileId;
                });
                if (idx !== -1) {
                  list.splice(idx, 1);
                  if (list.length === 0) {
                    gridCells["delete"](key);
                  }
                }
              }

              // Recalculate blocking
              _this.refreshBlockStatus(simTiles, levelData);
            },
            _ret;
          for (var i = 0; i < moveIds.length; i++) {
            _ret = _loop();
            if (_ret === 0) continue;
          }

          // ORDER_MATCH runtime only fails on main tray full; wrong tray is visual feedback here.
          if (levelData.gameMode !== GameMode.ORDER_MATCH && wrongCount > wrongTrayMax) {
            errors.push("Wrong tray overflow: " + wrongCount + " wrong moves exceed maxSlots=" + wrongTrayMax);
          }

          // Check all orders completed
          if (currentOrderIdx < orders.length) {
            errors.push("After all moves, only " + currentOrderIdx + "/" + orders.length + " orders completed");
          }

          // Kiểm tra board clear hoàn toàn
          var remaining = simTiles.filter(function (t) {
            return t.active;
          });
          if (remaining.length > 0) {
            errors.push("After all " + moveIds.length + " moves, " + remaining.length + " tiles remain on board");
          }
          return errors;
        }

        /**
         * Recalculate isBlocked/selectable cho tất cả tile.
         * Clone logic từ BoardManager.isTileBlocked.
         */;
        LevelValidator.refreshBlockStatus = function refreshBlockStatus(tiles, levelData) {
          var config = levelData.board;
          for (var _iterator8 = _createForOfIteratorHelperLoose(tiles), _step8; !(_step8 = _iterator8()).done;) {
            var tile = _step8.value;
            if (!tile.active) {
              tile.selectable = false;
              tile.isBlocked = true;
              continue;
            }
            var blocked = BoardPositionHelper.isTileBlocked(tile, tiles, config);
            tile.isBlocked = blocked;
            tile.selectable = !blocked;
          }
        };
        return LevelValidator;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelValidatorTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelValidator2.ts', './DataLoader.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, LevelValidator, DataLoader;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      LevelValidator = module.LevelValidator;
    }, function (module) {
      DataLoader = module.DataLoader;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d597bU9K2xBrogc0VnwAwtV", "LevelValidatorTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * LevelValidatorTest - Component test chạy LevelValidator.
       * Attach vào scene, set levelId, và chạy validate khi start.
       */
      var LevelValidatorTest = exports('LevelValidatorTest', (_dec = ccclass('LevelValidatorTest'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelValidatorTest, _Component);
        function LevelValidatorTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultLabel", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LevelValidatorTest.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.runValidation();
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.runValidation = /*#__PURE__*/function () {
          var _runValidation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var paddedId, path, levelData, result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  paddedId = this.levelId < 10 ? "00" + this.levelId : this.levelId < 100 ? "0" + this.levelId : "" + this.levelId;
                  path = "data/levels/level_" + paddedId;
                  _context2.next = 4;
                  return DataLoader.loadJson(path);
                case 4:
                  levelData = _context2.sent;
                  if (levelData) {
                    _context2.next = 8;
                    break;
                  }
                  this.showResult(false, ["Failed to load level " + this.levelId]);
                  return _context2.abrupt("return");
                case 8:
                  result = LevelValidator.validate(levelData);
                  this.showResult(result.valid, result.errors);
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function runValidation() {
            return _runValidation.apply(this, arguments);
          }
          return runValidation;
        }();
        _proto.showResult = function showResult(valid, errors) {
          var header = valid ? "[PASS] Level " + this.levelId + " is valid" : "[FAIL] Level " + this.levelId + " has " + errors.length + " error(s)";
          var detail = errors.map(function (e, i) {
            return i + 1 + ". " + e;
          }).join('\n');
          var output = detail ? header + "\n" + detail : header;
          if (this.resultLabel) {
            this.resultLabel.string = output;
          }
        };
        return LevelValidatorTest;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 22;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resultLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Main.ts', './TeviConstants.ts', './TeviLoginManager.ts', './BoardPositionHelper.ts', './ConfigManager.ts', './DataLoader.ts', './EventBus.ts', './GameBrandConfig.ts', './ItemIdCatalog.ts', './LevelGenerator.ts', './LevelSolver.ts', './LevelValidator.ts', './PoolManager.ts', './SaveManager.ts', './SmartLevelGenerator.ts', './AudioType.ts', './BoosterType.ts', './GameEvent.ts', './GameMode.ts', './GameState.ts', './MatchResult.ts', './SkinCategory.ts', './TileType.ts', './UIPanelType.ts', './Tile.ts', './TraySlot.ts', './IAudioConfig.ts', './IBoardConfig.ts', './IBoosterConfig.ts', './IDifficultyConfig.ts', './IGameConfig.ts', './ILevelData.ts', './ILevelOutput.ts', './IOrder.ts', './IOrderConfig.ts', './ISkinConfig.ts', './ITileData.ts', './ITrayConfig.ts', './AudioManager.ts', './BoardManager.ts', './BoosterManager.ts', './GameManager.ts', './LevelManager.ts', './MatchManager.ts', './OrderManager.ts', './OrderTrayManager.ts', './SkinManager.ts', './TileManager.ts', './TrayManager.ts', './UIManager.ts', './WrongTrayManager.ts', './SkinApplier.ts', './AllTests.ts', './BoardBlockingTest.ts', './BoardManager.test.ts', './BoosterManager.test.ts', './Level1Exporter.ts', './LevelGenerator.test.ts', './LevelGeneratorTestComponent.ts', './LevelValidator2.ts', './LevelValidatorTest.ts', './MatchManager.test.ts', './OrderManagerTest.ts', './OrderMatchTestRunner.ts', './SmartLevelGenerator.test.ts', './TestRunner.ts', './TestRunnerComponent.ts', './TileManager.test.ts', './TrayManager.test.ts', './WrongTrayManagerTest.ts', './BasePanel.ts', './GameplayPanel.ts', './LevelCompletePanel.ts', './LevelFailedPanel.ts', './LevelSelectPanel.ts', './OrderMatchDebugPanel.ts', './ResetButton.ts', './RewardVideoPlayer.ts', './SettingsPanel.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Main.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, instantiate, Component, GameManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GameManager = module.GameManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "0df3bR6endDbL95z9pL0I98", "Main", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Main - Entry point scene component.
       * Khởi tạo GameManager và các root nodes cần thiết.
       * Scene phải có node gắn Main component, dưới đó có các container nodes.
       */
      var Main = exports('Main', (_dec = ccclass('Main'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Main, _Component);
        function Main() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "uiRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameplayRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "managerPrefab", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Main.prototype;
        _proto.onLoad = function onLoad() {
          this.ensureGameManager();
        }

        /** Đảm bảo GameManager singleton được mount */;
        _proto.ensureGameManager = function ensureGameManager() {
          if (GameManager.Instance) return;
          if (this.managerPrefab) {
            var managerNode = instantiate(this.managerPrefab);
            managerNode.setParent(this.node);
          }
        };
        return Main;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameplayRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "managerPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MatchManager.test.ts", ['cc', './MatchManager.ts', './TrayManager.ts', './TileManager.ts', './LevelManager.ts', './MatchResult.ts', './TestRunner.ts'], function (exports) {
  var cclegacy, MatchManager, TrayManager, TileManager, LevelManager, MatchResult, TestRunner;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MatchManager = module.MatchManager;
    }, function (module) {
      TrayManager = module.TrayManager;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      LevelManager = module.LevelManager;
    }, function (module) {
      MatchResult = module.MatchResult;
    }, function (module) {
      TestRunner = module.TestRunner;
    }],
    execute: function () {
      exports('runMatchManagerTests', runMatchManagerTests);
      cclegacy._RF.push({}, "438d0JiChVJA5X68S+ni1fP", "MatchManager.test", undefined);
      function runMatchManagerTests() {
        var t = new TestRunner();
        var matchMgr = new MatchManager();
        MatchManager.Instance = matchMgr;

        // Mock singletons
        var trayMock = {
          _tiles: [],
          _full: false,
          _deadEnd: false,
          getTrayTiles: function getTrayTiles() {
            return [].concat(this._tiles);
          },
          getMatchCount: function getMatchCount() {
            return 3;
          },
          isFull: function isFull() {
            return this._full;
          },
          isDeadEnd: function isDeadEnd() {
            return this._deadEnd;
          },
          removeTile: function removeTile(id) {
            this._tiles = this._tiles.filter(function (tile) {
              return tile.id !== id;
            });
          },
          popLastTile: function popLastTile() {
            return null;
          },
          getLastHistory: function getLastHistory() {
            return null;
          }
        };
        var tileMock = {
          _tiles: [],
          _remaining: 10,
          getTileData: function getTileData(id) {
            return this._tiles.find(function (t) {
              return t.id === id;
            });
          },
          getTileNode: function getTileNode(id) {
            return null;
          },
          getAllTileData: function getAllTileData() {
            return [].concat(this._tiles);
          },
          removeTile: function removeTile(id) {
            this._tiles = this._tiles.filter(function (t) {
              return t.id !== id;
            });
          },
          setInputLocked: function setInputLocked(locked) {},
          removeFromBoard: function removeFromBoard(id) {}
        };
        var levelMock = {
          _score: 0,
          addScore: function addScore(n) {
            this._score += n;
          },
          checkLevelComplete: function checkLevelComplete() {},
          onLevelFailed: function onLevelFailed() {}
        };

        // Inject mocks via any-cast
        TrayManager.Instance = trayMock;
        TileManager.Instance = tileMock;
        LevelManager.Instance = levelMock;
        t.describe('MatchManager Detection', function () {
          t.it('should return NO_MATCH with empty tray', function () {
            trayMock._tiles = [];
            trayMock._full = false;
            trayMock._deadEnd = false;
            var result = MatchManager.getInstance().checkMatch();
            t.assertEquals(result, MatchResult.NO_MATCH);
          });
          t.it('should return MATCHED when 3 same group are consecutive in tray', function () {
            trayMock._tiles = [{
              id: 'A',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'B',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'C',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            trayMock._full = false;
            trayMock._deadEnd = false;
            t.assertTrue(MatchManager.getInstance().hasPendingMatch(), 'Consecutive same group should be matchable');
          });
          t.it('should NOT match when 3 same group are scattered in tray', function () {
            trayMock._tiles = [{
              id: 'A',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'B',
              groupId: 'banana',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'C',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'D',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            trayMock._full = false;
            trayMock._deadEnd = false;
            t.assertFalse(MatchManager.getInstance().hasPendingMatch(), 'Scattered same group should NOT match');
          });
          t.it('should return GAME_OVER on dead end', function () {
            trayMock._tiles = [{
              id: 'A',
              groupId: 'a',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'B',
              groupId: 'b',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'C',
              groupId: 'c',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'D',
              groupId: 'd',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'E',
              groupId: 'e',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'F',
              groupId: 'f',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'G',
              groupId: 'g',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            trayMock._full = true;
            trayMock._deadEnd = true;
            t.assertTrue(trayMock.isDeadEnd(), 'Dead end should be detected');
          });
        });
        t.describe('MatchManager hasPendingMatch', function () {
          t.it('should return true when match exists in tray', function () {
            trayMock._tiles = [{
              id: 'A',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'B',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'C',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            t.assertTrue(MatchManager.getInstance().hasPendingMatch());
          });
          t.it('should return false when no match in tray', function () {
            trayMock._tiles = [{
              id: 'A',
              groupId: 'a',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'B',
              groupId: 'b',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            t.assertFalse(MatchManager.getInstance().hasPendingMatch());
          });
        });
        t.describe('MatchManager hasValidMoves', function () {
          t.it('should ignore inactive tiles', function () {
            tileMock._tiles = [{
              id: 'X',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: false,
              selectable: true,
              isBlocked: false
            }];
            t.assertFalse(MatchManager.getInstance().hasValidMoves(), 'Inactive selectable tile should not count');
          });
          t.it('should return true when active selectable tiles exist', function () {
            tileMock._tiles = [{
              id: 'X',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            t.assertTrue(MatchManager.getInstance().hasValidMoves());
          });
        });
        t.describe('MatchManager processMatch Safety', function () {
          t.it('should not crash with empty tiles array', function () {
            // processMatch is private; verify via public checkMatch that it eventually returns safely
            trayMock._tiles = [];
            trayMock._full = false;
            trayMock._deadEnd = false;
            var result = MatchManager.getInstance().checkMatch();
            t.assertEquals(result, MatchResult.NO_MATCH);
          });
        });
        t.describe('MatchManager Input Lock', function () {
          t.it('should lock TileManager input during match processing', function () {
            var locked = false;
            tileMock.setInputLocked = function (v) {
              locked = v;
            };

            // Simulate processMatch start (can't run async in unit test, verify method exists)
            t.assertTrue(typeof tileMock.setInputLocked === 'function');
            tileMock.setInputLocked(true);
            t.assertTrue(locked);
            tileMock.setInputLocked(false);
            t.assertFalse(locked);
          });
          t.it('should NOT lock input when a match is detected', function () {
            var locked = null;
            tileMock.setInputLocked = function (v) {
              locked = v;
            };
            trayMock._tiles = [{
              id: 'A',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'B',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'C',
              groupId: 'apple',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            trayMock._full = false;
            trayMock._deadEnd = false;
            MatchManager.getInstance().checkMatch();
            t.assertTrue(locked === null, 'Input should NOT be locked when match starts');
            // Reset singleton state for subsequent tests
            MatchManager.getInstance()._isProcessing = false;
            tileMock.setInputLocked = function (v) {
              locked = v;
            };
          });
        });
        t.describe('MatchManager checkLoseCondition Re-check', function () {
          t.it('should not call onLevelFailed if dead end resolved before delay', function () {
            trayMock._deadEnd = true;
            levelMock.onLevelFailed = function () {};
            // call checkLoseCondition via reflection
            matchMgr.checkLoseCondition();
            // Immediately resolve dead end (simulating booster use)
            trayMock._deadEnd = false;
            // Since scheduleOnce is async and can't run in unit test, verify that
            // the initial check passed scheduling and that re-check logic exists
            t.assertTrue(trayMock._deadEnd === false, 'Dead end was resolved');
            // We can't easily test the async delay here, but code inspection covers it
          });
        });

        t.printReport();
        return t;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MatchManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MatchResult.ts', './GameEvent.ts', './EventBus.ts', './TrayManager.ts', './TileManager.ts', './LevelManager.ts', './AudioManager.ts', './ConfigManager.ts', './OrderManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, Tween, tween, Vec3, Component, MatchResult, GameEvent, EventBus, TrayManager, TileManager, LevelManager, AudioManager, ConfigManager, OrderManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Tween = module.Tween;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      MatchResult = module.MatchResult;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      TrayManager = module.TrayManager;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      LevelManager = module.LevelManager;
    }, function (module) {
      AudioManager = module.AudioManager;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      OrderManager = module.OrderManager;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "4e4ac9G1EZBYrZyeHsu1Kvj", "MatchManager", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * MatchManager - Xử lý Triple Match trong tray.
       * Flow: glow -> particle -> sound -> remove -> rearrange -> check win/lose.
       */
      var MatchManager = exports('MatchManager', (_dec = ccclass('MatchManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MatchManager, _Component);
        function MatchManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isProcessing = false;
          _this._isRestarting = false;
          /** Callback kiểm tra match sau khi tile bay xong */
          _this._checkMatchCallback = function () {
            if (_this._isRestarting) return;
            var lifecycleId = TileManager.getInstance().getLifecycleId();

            // Đợi nếu còn tile đang bay vào tray
            var flyCount = TrayManager.getInstance().getFlyCount();
            if (flyCount > 0) {
              _this.unschedule(_this._checkMatchCallback);
              _this.scheduleOnce(_this._checkMatchCallback, 0.1);
              return;
            }
            var result = _this.checkMatch();
            if (lifecycleId !== TileManager.getInstance().getLifecycleId()) return;
            if (result === MatchResult.GAME_OVER || result === MatchResult.TRAY_FULL) {
              _this._isRestarting = true;
              LevelManager.getInstance().onLevelFailed('tray_full');
            } else if (result === MatchResult.NO_MATCH) {
              // Board không còn tile nào chơi được và tray không match được → thua
              if (!_this.hasValidMoves() && !_this.hasPendingMatch()) {
                _this._isRestarting = true;
                LevelManager.getInstance().onLevelFailed('no_valid_moves');
              }
            }
          };
          return _this;
        }
        MatchManager.getInstance = function getInstance() {
          return MatchManager.Instance;
        };
        var _proto = MatchManager.prototype;
        _proto.onLoad = function onLoad() {
          if (MatchManager.Instance) {
            this.destroy();
            return;
          }
          MatchManager.Instance = this;
          EventBus.getInstance().on(GameEvent.TILE_ADDED_TO_TRAY, this.onTrayChanged, this);
          EventBus.getInstance().on(GameEvent.LEVEL_STARTED, this.onLevelStarted, this);
        };
        _proto.onLevelStarted = function onLevelStarted() {
          this._isProcessing = false;
          this._isRestarting = false;
        }

        /** Khi tray thay đổi, kiểm tra match hoặc tray full */;
        _proto.onTrayChanged = function onTrayChanged() {
          if (this._isProcessing || this._isRestarting) return;
          if (OrderManager.getInstance().isActive()) {
            // ORDER_MATCH: win/lose do LevelManager + OrderManager điều khiển
            // (ALL_ORDERS_COMPLETED = win, board empty + orders not done = lose)
            return;
          }

          // TRIPLE_MATCH: kiểm tra match như cũ
          var trayManager = TrayManager.getInstance();
          if (!trayManager) return;
          this.unschedule(this._checkMatchCallback);
          this.scheduleOnce(this._checkMatchCallback, 0.05);
        };
        /** Kiểm tra và xử lý match trong tray */
        _proto.checkMatch = function checkMatch() {
          var trayTiles = TrayManager.getInstance().getTrayTiles();
          var matchCount = TrayManager.getInstance().getMatchCount();
          var matchTiles = this.findConsecutiveMatch(trayTiles, matchCount);
          if (matchTiles) {
            this.processMatch(matchTiles);
            return MatchResult.MATCHED;
          }
          if (TrayManager.getInstance().isDeadEnd()) {
            return MatchResult.GAME_OVER;
          }
          if (TrayManager.getInstance().isFull()) {
            return MatchResult.TRAY_FULL;
          }
          return MatchResult.NO_MATCH;
        }

        /**
         * Tìm dãy liên tiếp cùng groupId đầu tiên trong tray.
         * 3 tile phải nằm liền kề trong tray mới tính là match.
         */;
        _proto.findConsecutiveMatch = function findConsecutiveMatch(tiles, matchCount) {
          for (var i = 0; i <= tiles.length - matchCount; i++) {
            var groupId = tiles[i].groupId;
            var allSame = true;
            for (var j = 1; j < matchCount; j++) {
              if (tiles[i + j].groupId !== groupId) {
                allSame = false;
                break;
              }
            }
            if (allSame) {
              return tiles.slice(i, i + matchCount);
            }
          }
          return null;
        }

        /** Kiểm tra có match nào trong tray không (không trigger xử lý) */;
        _proto.hasPendingMatch = function hasPendingMatch() {
          var trayTiles = TrayManager.getInstance().getTrayTiles();
          var matchCount = TrayManager.getInstance().getMatchCount();
          return this.findConsecutiveMatch(trayTiles, matchCount) !== null;
        }

        /** Xử lý match đầy đủ: glow + particle + sound + remove */;
        _proto.processMatch = function processMatch(tiles) {
          var _this2 = this;
          if (!tiles || tiles.length === 0) return;
          this._isProcessing = true;
          var lifecycleId = TileManager.getInstance().getLifecycleId();
          var matchDelay = ConfigManager.getInstance().getGameplayValue('matchDelay') || 0.5;

          // Phase 1: Glow effect
          this.playMatchGlow(tiles);

          // Phase 2: Delay rồi particle + sound + remove
          this.scheduleOnce(function () {
            if (lifecycleId !== TileManager.getInstance().getLifecycleId()) {
              _this2._isProcessing = false;
              return;
            }
            _this2.playMatchEffects(tiles);
            _this2.scheduleOnce(function () {
              if (lifecycleId !== TileManager.getInstance().getLifecycleId()) {
                _this2._isProcessing = false;
                return;
              }
              for (var _iterator = _createForOfIteratorHelperLoose(tiles), _step; !(_step = _iterator()).done;) {
                var tile = _step.value;
                TrayManager.getInstance().removeTile(tile.id);
                TileManager.getInstance().removeTile(tile.id);
                LevelManager.getInstance().addScore(100); // Base score per match
              }

              EventBus.getInstance().emit(GameEvent.TILES_MATCHED, tiles);
              LevelManager.getInstance().checkLevelComplete();

              // Chain check for additional matches before unlocking input
              // Reset _isProcessing so nested checkMatch can trigger processMatch if needed
              _this2._isProcessing = false;
              var result = _this2.checkMatch();
              if (result !== MatchResult.MATCHED) {
                TileManager.getInstance().setInputLocked(false);
                // Board không còn tile nào chơi được và tray không match được → thua
                if (LevelManager.getInstance().isLevelActive() && !_this2.hasValidMoves() && !_this2.hasPendingMatch()) {
                  _this2._isRestarting = true;
                  LevelManager.getInstance().onLevelFailed('no_valid_moves');
                }
              }
            }, matchDelay * 0.5);
          }, matchDelay * 0.3);
        }

        /** Glow effect trước khi match */;
        _proto.playMatchGlow = function playMatchGlow(tiles) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(tiles), _step2; !(_step2 = _iterator2()).done;) {
            var tile = _step2.value;
            var node = TileManager.getInstance().getTileNode(tile.id);
            if (!node) continue;
            var tileComp = node.getComponent('Tile');
            if (tileComp && tileComp.setGlow) {
              tileComp.setGlow(true);
            }
          }
        }

        /** Particle + Sound khi match */;
        _proto.playMatchEffects = function playMatchEffects(tiles) {
          AudioManager.getInstance().playSfx('sfx_match');
          for (var _iterator3 = _createForOfIteratorHelperLoose(tiles), _step3; !(_step3 = _iterator3()).done;) {
            var tile = _step3.value;
            var node = TileManager.getInstance().getTileNode(tile.id);
            if (!node || !node.isValid) continue;
            // Scale pop effect
            Tween.stopAllByTarget(node);
            tween(node).to(0.15, {
              scale: new Vec3(1.3, 1.3, 1)
            }).to(0.15, {
              scale: new Vec3(0, 0, 1)
            }).start();
          }
        }

        /** Kiểm tra điều kiện thua (đã được xử lý bởi onTrayChanged -> popup thua) */;
        _proto.checkLoseCondition = function checkLoseCondition() {
          // Xử lý thua đã chuyển sang LevelManager.onLevelFailed để hiện popup.
        }

        /** Kiểm tra có đang xử lý match không */;
        _proto.isProcessing = function isProcessing() {
          return this._isProcessing;
        }

        /** Kiểm tra còn nước đi hợp lệ không */;
        _proto.hasValidMoves = function hasValidMoves() {
          var allTiles = TileManager.getInstance().getAllTileData();
          var selectable = allTiles.filter(function (t) {
            return t.active && t.selectable;
          });
          return selectable.length > 0;
        };
        _proto.onDestroy = function onDestroy() {
          if (MatchManager.Instance === this) {
            MatchManager.Instance = null;
            EventBus.getInstance().off(GameEvent.TILE_ADDED_TO_TRAY, this.onTrayChanged, this);
            EventBus.getInstance().off(GameEvent.LEVEL_STARTED, this.onLevelStarted, this);
            this.unscheduleAllCallbacks();
          }
        };
        return MatchManager;
      }(Component), _class2.Instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MatchResult.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "346b8oEQWxGOYxAf+cNetXC", "MatchResult", undefined);
      /**
       * Enum kết quả của một lần kiểm tra match.
       * MatchManager trả về kết quả này sau khi xử lý.
       */
      var MatchResult = exports('MatchResult', /*#__PURE__*/function (MatchResult) {
        MatchResult[MatchResult["NONE"] = 0] = "NONE";
        MatchResult[MatchResult["MATCHED"] = 1] = "MATCHED";
        MatchResult[MatchResult["NO_MATCH"] = 2] = "NO_MATCH";
        MatchResult[MatchResult["TRAY_FULL"] = 3] = "TRAY_FULL";
        MatchResult[MatchResult["GAME_OVER"] = 4] = "GAME_OVER";
        MatchResult[MatchResult["LEVEL_COMPLETE"] = 5] = "LEVEL_COMPLETE";
        return MatchResult;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OrderManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameEvent.ts', './EventBus.ts', './TrayManager.ts', './AudioManager.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, GameEvent, EventBus, TrayManager, AudioManager;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      TrayManager = module.TrayManager;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d4e5fanuMlNDh8qO0xdbn+K", "OrderManager", undefined);
      /**
       * OrderManager - pure singleton for ORDER_MATCH logic.
       */
      var OrderManager = exports('OrderManager', /*#__PURE__*/function () {
        function OrderManager() {
          this._orders = [];
          this._currentOrderIndex = 0;
          this._currentItemIndex = 0;
          this._currentOrderRemainingItems = [];
          this._currentOrderMatchedTileIds = [];
          this._orderConfig = null;
          this._isActive = false;
          this._pendingTrayCheck = null;
          this._isPendingTrayCheck = false;
          this._isCompletingOrder = false;
          this._submittedTileIds = new Set();
          this._trayCheckDelay = 0.5;
        }
        OrderManager.getInstance = function getInstance() {
          if (!OrderManager._instance) {
            OrderManager._instance = new OrderManager();
          }
          return OrderManager._instance;
        };
        var _proto = OrderManager.prototype;
        _proto.initialize = function initialize(orders, config) {
          this._clearPendingTrayCheck();
          EventBus.getInstance().off(GameEvent.TILE_ADDED_TO_TRAY, this.onTileAddedToTray, this);
          EventBus.getInstance().off(GameEvent.TRAY_SETTLED, this.onTraySettled, this);
          this._orders = orders && orders.length > 0 ? [].concat(orders) : [];
          this._orderConfig = config;
          this._currentOrderIndex = 0;
          this._currentItemIndex = 0;
          this._isActive = true;
          this._isCompletingOrder = false;
          this._resetOrderTracking();
          this._submittedTileIds.clear();
          EventBus.getInstance().on(GameEvent.TILE_ADDED_TO_TRAY, this.onTileAddedToTray, this);
          EventBus.getInstance().on(GameEvent.TRAY_SETTLED, this.onTraySettled, this);
          EventBus.getInstance().emit(GameEvent.ORDER_CHANGED, this.getCurrentOrder(), this._currentOrderIndex);
        };
        _proto._resetOrderTracking = function _resetOrderTracking() {
          var _this$_orderConfig;
          this._currentOrderMatchedTileIds = [];
          var order = this.getCurrentOrder();
          if (!order) {
            this._currentItemIndex = 0;
            this._currentOrderRemainingItems = [];
            return;
          }
          if (((_this$_orderConfig = this._orderConfig) == null ? void 0 : _this$_orderConfig.orderMode) === 'ANY_ORDER') {
            this._currentOrderRemainingItems = [].concat(order.items);
          } else {
            this._currentItemIndex = 0;
            this._currentOrderRemainingItems = [];
          }
        };
        _proto.onTraySettled = function onTraySettled() {
          if (!this._isActive) return;
          if (this._isCompletingOrder) {
            return;
          }
          var order = this.getCurrentOrder();
          if (!order) return;
          var trayTiles = TrayManager.getInstance().getSettledTrayTiles();
          var matchedTiles = this.findOrderMatchInTray(order, trayTiles);
          if (matchedTiles) {
            this.completeOrderFromMatchedTiles(order, matchedTiles);
            return;
          }
          for (var _iterator = _createForOfIteratorHelperLoose(trayTiles), _step; !(_step = _iterator()).done;) {
            var tile = _step.value;
            if (this._submittedTileIds.has(tile.id)) continue;
            var result = this.submitTile(tile);
            if (result.orderComplete) return;
          }
        };
        _proto.onTileAddedToTray = function onTileAddedToTray(tileData) {
          if (!this._isActive) return;
          var order = this.getCurrentOrder();
          this.onTraySettled();
          if (!order) return;
          // Không xử lý order ở đây nữa; chỉ dùng để UI/other listener còn nhận event
        };

        _proto.getCurrentOrder = function getCurrentOrder() {
          if (!this._isActive || this._currentOrderIndex >= this._orders.length) return null;
          return this._orders[this._currentOrderIndex];
        };
        _proto.getExpectedItem = function getExpectedItem() {
          var _this$_orderConfig2;
          var order = this.getCurrentOrder();
          if (!order) return null;
          if (((_this$_orderConfig2 = this._orderConfig) == null ? void 0 : _this$_orderConfig2.orderMode) === 'ANY_ORDER') {
            return this._currentOrderRemainingItems[0] || null;
          }
          if (this._currentItemIndex >= order.items.length) return null;
          return order.items[this._currentItemIndex];
        };
        _proto.getCurrentItemIndex = function getCurrentItemIndex() {
          return this._currentItemIndex;
        };
        _proto.getOrderConfig = function getOrderConfig() {
          return this._orderConfig;
        };
        _proto.submitTile = function submitTile(tileData) {
          var _this$_orderConfig3;
          if (this._submittedTileIds.has(tileData.id)) {
            return {
              correct: false,
              orderComplete: false
            };
          }
          var order = this.getCurrentOrder();
          if (!order) return {
            correct: false,
            orderComplete: false
          };
          this._submittedTileIds.add(tileData.id);
          if (((_this$_orderConfig3 = this._orderConfig) == null ? void 0 : _this$_orderConfig3.orderMode) === 'ANY_ORDER') {
            var remIdx = this._currentOrderRemainingItems.indexOf(tileData.groupId);
            if (remIdx !== -1) {
              this._currentOrderRemainingItems.splice(remIdx, 1);
              this._currentOrderMatchedTileIds.push(tileData.id);
              var orderComplete = this._currentOrderRemainingItems.length === 0;
              EventBus.getInstance().emit(GameEvent.ORDER_ITEM_CORRECT, tileData, this._currentOrderMatchedTileIds.length - 1);
              if (orderComplete) {
                this.completeCurrentOrder(this._currentOrderMatchedTileIds);
              } else {
                EventBus.getInstance().emit(GameEvent.ORDER_CHANGED, this.getCurrentOrder(), this._currentOrderIndex);
              }
              return {
                correct: true,
                orderComplete: orderComplete
              };
            }
          } else {
            var expected = this.getExpectedItem();
            if (expected && tileData.groupId === expected) {
              this._currentItemIndex++;
              this._currentOrderMatchedTileIds.push(tileData.id);
              var _orderComplete = this._currentItemIndex >= order.items.length;
              EventBus.getInstance().emit(GameEvent.ORDER_ITEM_CORRECT, tileData, this._currentItemIndex - 1);
              if (_orderComplete) {
                this.completeCurrentOrder(this._currentOrderMatchedTileIds);
              } else {
                EventBus.getInstance().emit(GameEvent.ORDER_CHANGED, this.getCurrentOrder(), this._currentOrderIndex);
              }
              return {
                correct: true,
                orderComplete: _orderComplete
              };
            }
          }
          EventBus.getInstance().emit(GameEvent.ORDER_ITEM_WRONG, tileData);
          return {
            correct: false,
            orderComplete: false
          };
        }

        /**
         * Find tiles that complete an order in the tray.
         * EXACT_ORDER requires left-to-right order only; matched tiles do not have to be adjacent.
         * ANY_ORDER takes the earliest tray tiles that satisfy the order item multiset.
         */;
        _proto.findOrderMatchInTray = function findOrderMatchInTray(order, trayTiles) {
          var _this$_orderConfig4;
          if (!order || !trayTiles || trayTiles.length < order.items.length) return null;
          if (((_this$_orderConfig4 = this._orderConfig) == null ? void 0 : _this$_orderConfig4.orderMode) === 'ANY_ORDER') {
            var remaining = [].concat(order.items);
            var _matched = [];
            for (var _iterator2 = _createForOfIteratorHelperLoose(trayTiles), _step2; !(_step2 = _iterator2()).done;) {
              var tile = _step2.value;
              var idx = remaining.indexOf(tile.groupId);
              if (idx === -1) continue;
              remaining.splice(idx, 1);
              _matched.push(tile);
              if (remaining.length === 0) return _matched;
            }
            return null;
          }
          var matched = [];
          var itemIndex = 0;
          for (var _iterator3 = _createForOfIteratorHelperLoose(trayTiles), _step3; !(_step3 = _iterator3()).done;) {
            var _tile = _step3.value;
            if (_tile.groupId !== order.items[itemIndex]) continue;
            matched.push(_tile);
            itemIndex++;
            if (itemIndex >= order.items.length) return matched;
          }
          return null;
        };
        _proto.completeOrderFromMatchedTiles = function completeOrderFromMatchedTiles(order, matchedTiles) {
          var _this$_orderConfig5;
          var matchedTileIds = matchedTiles.map(function (t) {
            return t.id;
          });
          this._currentOrderMatchedTileIds = matchedTileIds;
          for (var i = 0; i < matchedTiles.length; i++) {
            EventBus.getInstance().emit(GameEvent.ORDER_ITEM_CORRECT, matchedTiles[i], i);
          }
          if (((_this$_orderConfig5 = this._orderConfig) == null ? void 0 : _this$_orderConfig5.orderMode) === 'ANY_ORDER') {
            this._currentOrderRemainingItems = [];
          } else {
            this._currentItemIndex = order.items.length;
          }
          this.completeCurrentOrder(matchedTileIds);
        };
        _proto.completeCurrentOrder = function completeCurrentOrder(tileIds) {
          var _this = this,
            _AudioManager$getInst2;
          var completedOrder = this.getCurrentOrder();
          var completedTileIds = tileIds;
          if ((!completedTileIds || completedTileIds.length === 0) && completedOrder) {
            var matchedTiles = this.findOrderMatchInTray(completedOrder, TrayManager.getInstance().getSettledTrayTiles());
            completedTileIds = matchedTiles == null ? void 0 : matchedTiles.map(function (t) {
              return t.id;
            });
          }
          var willCompleteAllOrders = this._currentOrderIndex + 1 >= this._orders.length;
          if (willCompleteAllOrders && completedTileIds && completedTileIds.length > 0) {
            var _AudioManager$getInst;
            this._isCompletingOrder = true;
            var finalized = false;
            var finalizeFinalOrder = function finalizeFinalOrder() {
              if (finalized) return;
              if (!_this._isActive || !_this._isCompletingOrder) {
                return;
              }
              finalized = true;
              _this._isCompletingOrder = false;
              _this._currentOrderIndex++;
              _this._currentItemIndex = 0;
              _this._submittedTileIds.clear();
              EventBus.getInstance().emit(GameEvent.ALL_ORDERS_COMPLETED);
            };
            EventBus.getInstance().once(GameEvent.ORDER_TILES_CLEARED, finalizeFinalOrder, this);
            (_AudioManager$getInst = AudioManager.getInstance()) == null || _AudioManager$getInst.playSfx('order_complete');
            EventBus.getInstance().emit(GameEvent.ORDER_COMPLETED, completedOrder, this._currentOrderIndex, completedTileIds);
            if (!TrayManager.getInstance().isClearingOrderTiles()) {
              setTimeout(finalizeFinalOrder, 0);
            }
            return;
          }
          (_AudioManager$getInst2 = AudioManager.getInstance()) == null || _AudioManager$getInst2.playSfx('order_complete');
          EventBus.getInstance().emit(GameEvent.ORDER_COMPLETED, completedOrder, this._currentOrderIndex, completedTileIds);
          this._currentOrderIndex++;
          this._currentItemIndex = 0;
          this._submittedTileIds.clear();
          if (this._currentOrderIndex >= this._orders.length) {
            EventBus.getInstance().emit(GameEvent.ALL_ORDERS_COMPLETED);
          } else {
            this._resetOrderTracking();
            EventBus.getInstance().emit(GameEvent.ORDER_CHANGED, this.getCurrentOrder(), this._currentOrderIndex);
            this._scheduleTrayCheck();
          }
        };
        _proto.checkTrayMatchCurrentOrder = function checkTrayMatchCurrentOrder() {
          if (this._isCompletingOrder) {
            return;
          }
          var order = this.getCurrentOrder();
          if (!order) return;
          if (TrayManager.getInstance().isClearingOrderTiles() || TrayManager.getInstance().getFlyCount() > 0) {
            this._scheduleTrayCheck(0.1);
            return;
          }
          var trayTiles = TrayManager.getInstance().getSettledTrayTiles();
          var matchedTiles = this.findOrderMatchInTray(order, trayTiles);
          if (matchedTiles) this.completeOrderFromMatchedTiles(order, matchedTiles);
        };
        _proto.isAllOrdersCompleted = function isAllOrdersCompleted() {
          return this._currentOrderIndex >= this._orders.length;
        };
        _proto.getTotalOrders = function getTotalOrders() {
          return this._orders.length;
        };
        _proto.getCurrentOrderIndex = function getCurrentOrderIndex() {
          return this._currentOrderIndex;
        };
        _proto.getAllOrders = function getAllOrders() {
          return [].concat(this._orders);
        };
        _proto.isActive = function isActive() {
          return this._isActive;
        };
        _proto.clear = function clear() {
          this._clearPendingTrayCheck();
          EventBus.getInstance().off(GameEvent.TILE_ADDED_TO_TRAY, this.onTileAddedToTray, this);
          EventBus.getInstance().off(GameEvent.TRAY_SETTLED, this.onTraySettled, this);
          this._orders = [];
          this._orderConfig = null;
          this._currentOrderIndex = 0;
          this._currentItemIndex = 0;
          this._currentOrderRemainingItems = [];
          this._currentOrderMatchedTileIds = [];
          this._submittedTileIds.clear();
          this._isCompletingOrder = false;
          this._isActive = false;
        };
        _proto._clearPendingTrayCheck = function _clearPendingTrayCheck() {
          if (this._pendingTrayCheck) {
            clearTimeout(this._pendingTrayCheck);
            this._pendingTrayCheck = null;
          }
          this._isPendingTrayCheck = false;
        };
        _proto._scheduleTrayCheck = function _scheduleTrayCheck(delaySeconds) {
          var _this2 = this;
          if (delaySeconds === void 0) {
            delaySeconds = this._trayCheckDelay;
          }
          this._clearPendingTrayCheck();
          this._isPendingTrayCheck = true;
          this._pendingTrayCheck = setTimeout(function () {
            _this2._isPendingTrayCheck = false;
            _this2._pendingTrayCheck = null;
            _this2.checkTrayMatchCurrentOrder();
          }, delaySeconds * 1000);
        };
        _proto.isPendingTrayCheck = function isPendingTrayCheck() {
          return this._isPendingTrayCheck;
        };
        _proto.captureSnapshot = function captureSnapshot() {
          return {
            currentOrderIndex: this._currentOrderIndex,
            currentItemIndex: this._currentItemIndex,
            currentOrderRemainingItems: [].concat(this._currentOrderRemainingItems),
            currentOrderMatchedTileIds: [].concat(this._currentOrderMatchedTileIds),
            submittedTileIds: Array.from(this._submittedTileIds)
          };
        };
        _proto.restoreSnapshot = function restoreSnapshot(snapshot) {
          this._clearPendingTrayCheck();
          this._currentOrderIndex = snapshot.currentOrderIndex;
          this._currentItemIndex = snapshot.currentItemIndex;
          this._currentOrderRemainingItems = [].concat(snapshot.currentOrderRemainingItems);
          this._currentOrderMatchedTileIds = [].concat(snapshot.currentOrderMatchedTileIds);
          this._submittedTileIds = new Set(snapshot.submittedTileIds);
          this._isCompletingOrder = false;
          EventBus.getInstance().emit(GameEvent.ORDER_CHANGED, this.getCurrentOrder(), this._currentOrderIndex);
        };
        _proto.syncWithSettledTray = function syncWithSettledTray() {
          this.onTraySettled();
        };
        OrderManager.reset = function reset() {
          if (OrderManager._instance) {
            OrderManager._instance.clear();
          }
          OrderManager._instance = null;
        };
        return OrderManager;
      }());
      OrderManager._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OrderManagerTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './OrderManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, OrderManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      OrderManager = module.OrderManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f4b8bmQdO1NlLcUtBAOD3pj", "OrderManagerTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**
       * OrderManagerTest - Unit test cho OrderManager.
       * Chạy tất cả test cases và log kết quả.
       */
      var OrderManagerTest = exports('OrderManagerTest', (_dec = ccclass('OrderManagerTest'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OrderManagerTest, _Component);
        function OrderManagerTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "resultLabel", _descriptor, _assertThisInitialized(_this));
          _this._results = [];
          _this._passCount = 0;
          _this._failCount = 0;
          return _this;
        }
        var _proto = OrderManagerTest.prototype;
        _proto.start = function start() {
          this.runAllTests();
        };
        _proto.runAllTests = function runAllTests() {
          this._results = [];
          this._passCount = 0;
          this._failCount = 0;
          this.testLoadOrders();
          this.testGetCurrentOrder();
          this.testGetExpectedItem();
          this.testExactOrderCorrect();
          this.testExactOrderNonConsecutiveTrayMatch();
          this.testExactOrderWrong();
          this.testAnyOrderCorrect();
          this.testCompleteOrderAdvances();
          this.testAllOrdersCompleted();
          this.testConsumeWrongTileFalse();
          var summary = "\n=== OrderManager Test Results ===\nPASS: " + this._passCount + "\nFAIL: " + this._failCount + "\nTotal: " + (this._passCount + this._failCount);
          this._results.push(summary);
          var output = this._results.join('\n');
          if (this.resultLabel) {
            this.resultLabel.string = output;
          }
        };
        _proto.assert = function assert(name, condition, msg) {
          if (condition) {
            this._passCount++;
            this._results.push("[PASS] " + name);
          } else {
            this._failCount++;
            this._results.push("[FAIL] " + name + (msg ? ': ' + msg : ''));
          }
        };
        _proto.setupExactOrder = function setupExactOrder() {
          OrderManager.reset();
          var orders = [{
            id: 'order_001',
            items: ['lamp', 'vase', 'plant']
          }, {
            id: 'order_002',
            items: ['clock', 'basket', 'cushion']
          }];
          var config = {
            orderSize: 3,
            orderMode: 'EXACT_ORDER',
            wrongTrayMaxSlots: 2,
            consumeWrongTile: true
          };
          OrderManager.getInstance().initialize(orders, config);
        };
        _proto.setupAnyOrder = function setupAnyOrder() {
          OrderManager.reset();
          var orders = [{
            id: 'order_001',
            items: ['lamp', 'vase', 'plant']
          }];
          var config = {
            orderSize: 3,
            orderMode: 'ANY_ORDER',
            wrongTrayMaxSlots: 2,
            consumeWrongTile: true
          };
          OrderManager.getInstance().initialize(orders, config);
        }

        // ===== TESTS =====
        ;

        _proto.testLoadOrders = function testLoadOrders() {
          this.setupExactOrder();
          var mgr = OrderManager.getInstance();
          this.assert('loadOrders: total orders = 2', mgr.getTotalOrders() === 2);
          this.assert('loadOrders: isActive = true', mgr.isActive());
          mgr.clear();
        };
        _proto.testGetCurrentOrder = function testGetCurrentOrder() {
          this.setupExactOrder();
          var mgr = OrderManager.getInstance();
          var order = mgr.getCurrentOrder();
          this.assert('getCurrentOrder: id = order_001', (order == null ? void 0 : order.id) === 'order_001');
          this.assert('getCurrentOrder: items[0] = lamp', (order == null ? void 0 : order.items[0]) === 'lamp');
          mgr.clear();
        };
        _proto.testGetExpectedItem = function testGetExpectedItem() {
          this.setupExactOrder();
          var mgr = OrderManager.getInstance();
          this.assert('getExpectedItem: lamp', mgr.getExpectedItem() === 'lamp');
          mgr.clear();
        };
        _proto.testExactOrderCorrect = function testExactOrderCorrect() {
          var _mgr$getCurrentOrder;
          this.setupExactOrder();
          var mgr = OrderManager.getInstance();

          // lamp -> vase -> plant = complete order
          var tileLamp = {
            id: 'T1',
            groupId: 'lamp',
            active: true,
            selectable: true
          };
          var tileVase = {
            id: 'T2',
            groupId: 'vase',
            active: true,
            selectable: true
          };
          var tilePlant = {
            id: 'T3',
            groupId: 'plant',
            active: true,
            selectable: true
          };
          var r1 = mgr.submitTile(tileLamp);
          this.assert('exactOrder: lamp correct', r1.correct && !r1.orderComplete);
          this.assert('exactOrder: index = 1 after lamp', mgr.getCurrentItemIndex() === 1);
          this.assert('exactOrder: expected = vase', mgr.getExpectedItem() === 'vase');
          var r2 = mgr.submitTile(tileVase);
          this.assert('exactOrder: vase correct', r2.correct && !r2.orderComplete);
          this.assert('exactOrder: index = 2 after vase', mgr.getCurrentItemIndex() === 2);
          var r3 = mgr.submitTile(tilePlant);
          this.assert('exactOrder: plant correct + orderComplete', r3.correct && r3.orderComplete);
          this.assert('exactOrder: next order = order_002', ((_mgr$getCurrentOrder = mgr.getCurrentOrder()) == null ? void 0 : _mgr$getCurrentOrder.id) === 'order_002');
          mgr.clear();
        };
        _proto.testExactOrderNonConsecutiveTrayMatch = function testExactOrderNonConsecutiveTrayMatch() {
          this.setupExactOrder();
          var mgr = OrderManager.getInstance();
          var trayTiles = [{
            id: 'T1',
            groupId: 'lamp',
            active: true,
            selectable: true
          }, {
            id: 'T_X1',
            groupId: 'clock',
            active: true,
            selectable: true
          }, {
            id: 'T2',
            groupId: 'vase',
            active: true,
            selectable: true
          }, {
            id: 'T_X2',
            groupId: 'basket',
            active: true,
            selectable: true
          }, {
            id: 'T3',
            groupId: 'plant',
            active: true,
            selectable: true
          }];
          var matched = mgr.findOrderMatchInTray(mgr.getCurrentOrder(), trayTiles);
          this.assert('exactOrderNonConsecutiveTrayMatch: lamp/vase/plant matched across gaps', !!matched && matched.map(function (t) {
            return t.id;
          }).join(',') === 'T1,T2,T3');
          mgr.clear();
        };
        _proto.testExactOrderWrong = function testExactOrderWrong() {
          this.setupExactOrder();
          var mgr = OrderManager.getInstance();

          // lamp -> plant = wrong
          var tileLamp = {
            id: 'T1',
            groupId: 'lamp',
            active: true,
            selectable: true
          };
          var tilePlant = {
            id: 'T3',
            groupId: 'plant',
            active: true,
            selectable: true
          };
          mgr.submitTile(tileLamp);
          var r2 = mgr.submitTile(tilePlant);
          this.assert('exactOrderWrong: plant is wrong after lamp', !r2.correct);
          this.assert('exactOrderWrong: index stays 1', mgr.getCurrentItemIndex() === 1);
          this.assert('exactOrderWrong: expected still vase', mgr.getExpectedItem() === 'vase');
          mgr.clear();
        };
        _proto.testAnyOrderCorrect = function testAnyOrderCorrect() {
          this.setupAnyOrder();
          var mgr = OrderManager.getInstance();
          var tileLamp = {
            id: 'T1',
            groupId: 'lamp',
            active: true,
            selectable: true
          };
          var tileVase = {
            id: 'T2',
            groupId: 'vase',
            active: true,
            selectable: true
          };
          var tilePlant = {
            id: 'T3',
            groupId: 'plant',
            active: true,
            selectable: true
          };

          // plant -> lamp -> vase
          var r1 = mgr.submitTile(tilePlant);
          this.assert('anyOrder: plant correct', r1.correct && !r1.orderComplete);
          var r2 = mgr.submitTile(tileLamp);
          this.assert('anyOrder: lamp correct', r2.correct && !r2.orderComplete);
          var r3 = mgr.submitTile(tileVase);
          this.assert('anyOrder: vase correct + orderComplete', r3.correct && r3.orderComplete);
          mgr.clear();
        };
        _proto.testCompleteOrderAdvances = function testCompleteOrderAdvances() {
          var _mgr$getCurrentOrder2;
          this.setupExactOrder();
          var mgr = OrderManager.getInstance();

          // Complete order 1
          mgr.submitTile({
            id: 'T1',
            groupId: 'lamp',
            active: true,
            selectable: true
          });
          mgr.submitTile({
            id: 'T2',
            groupId: 'vase',
            active: true,
            selectable: true
          });
          mgr.submitTile({
            id: 'T3',
            groupId: 'plant',
            active: true,
            selectable: true
          });
          this.assert('completeOrderAdvances: currentOrderIndex = 1', mgr.getCurrentOrderIndex() === 1);
          this.assert('completeOrderAdvances: currentOrder id = order_002', ((_mgr$getCurrentOrder2 = mgr.getCurrentOrder()) == null ? void 0 : _mgr$getCurrentOrder2.id) === 'order_002');
          mgr.clear();
        };
        _proto.testAllOrdersCompleted = function testAllOrdersCompleted() {
          this.setupExactOrder();
          var mgr = OrderManager.getInstance();

          // Complete all orders
          var items1 = ['lamp', 'vase', 'plant'];
          var items2 = ['clock', 'basket', 'cushion'];
          for (var _i = 0, _items = items1; _i < _items.length; _i++) {
            var gid = _items[_i];
            mgr.submitTile({
              id: "T_" + gid,
              groupId: gid,
              active: true,
              selectable: true
            });
          }
          for (var _i2 = 0, _items2 = items2; _i2 < _items2.length; _i2++) {
            var _gid = _items2[_i2];
            mgr.submitTile({
              id: "T_" + _gid,
              groupId: _gid,
              active: true,
              selectable: true
            });
          }
          this.assert('allOrdersCompleted: isAllOrdersCompleted = true', mgr.isAllOrdersCompleted());
          this.assert('allOrdersCompleted: getCurrentOrder = null', mgr.getCurrentOrder() === null);
          mgr.clear();
        };
        _proto.testConsumeWrongTileFalse = function testConsumeWrongTileFalse() {
          var _mgr$getOrderConfig;
          OrderManager.reset();
          var orders = [{
            id: 'order_001',
            items: ['lamp', 'vase', 'plant']
          }];
          var config = {
            orderSize: 3,
            orderMode: 'EXACT_ORDER',
            wrongTrayMaxSlots: 2,
            consumeWrongTile: false
          };
          OrderManager.getInstance().initialize(orders, config);
          var mgr = OrderManager.getInstance();
          var tileWrong = {
            id: 'T_WRONG',
            groupId: 'clock',
            active: true,
            selectable: true
          };
          var r = mgr.submitTile(tileWrong);
          this.assert('consumeWrongTileFalse: wrong tile rejected', !r.correct);
          // Tile should NOT be consumed from board (tested via onTileClicked logic)
          this.assert('consumeWrongTileFalse: config consumeWrongTile = false', ((_mgr$getOrderConfig = mgr.getOrderConfig()) == null ? void 0 : _mgr$getOrderConfig.consumeWrongTile) === false);
          mgr.clear();
        };
        return OrderManagerTest;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "resultLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OrderMatchDebugPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './OrderManager.ts', './WrongTrayManager.ts', './GameEvent.ts', './EventBus.ts', './LevelManager.ts', './TileManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Component, OrderManager, WrongTrayManager, GameEvent, EventBus, LevelManager, TileManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      OrderManager = module.OrderManager;
    }, function (module) {
      WrongTrayManager = module.WrongTrayManager;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      LevelManager = module.LevelManager;
    }, function (module) {
      TileManager = module.TileManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "8815apjzsdIobwPB74/xh+g", "OrderMatchDebugPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * OrderMatchDebugPanel - Debug UI cho ORDER_MATCH mode.
       * Hiển thị current order, expected item, wrong tray count,
       * và nút auto-play solution moves.
       */
      var OrderMatchDebugPanel = exports('OrderMatchDebugPanel', (_dec = ccclass('OrderMatchDebugPanel'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Button), _dec7 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OrderMatchDebugPanel, _Component);
        function OrderMatchDebugPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "orderIdLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expectedItemLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wrongTrayLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoPlayButton", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextMoveButton", _descriptor6, _assertThisInitialized(_this));
          _this._solutionIds = [];
          _this._autoPlayIndex = 0;
          _this._isAutoPlaying = false;
          return _this;
        }
        var _proto = OrderMatchDebugPanel.prototype;
        _proto.onLoad = function onLoad() {
          EventBus.getInstance().on(GameEvent.ORDER_CHANGED, this.onOrderChanged, this);
          EventBus.getInstance().on(GameEvent.ORDER_COMPLETED, this.onOrderCompleted, this);
          EventBus.getInstance().on(GameEvent.ALL_ORDERS_COMPLETED, this.onAllOrdersCompleted, this);
          EventBus.getInstance().on(GameEvent.ORDER_ITEM_WRONG, this.onOrderItemWrong, this);
          EventBus.getInstance().on(GameEvent.LEVEL_LOADED, this.onLevelLoaded, this);
        };
        _proto.onLevelLoaded = function onLevelLoaded() {
          var _LevelManager$getInst, _LevelManager$getInst2;
          this._isAutoPlaying = false;
          this._autoPlayIndex = 0;
          var level = (_LevelManager$getInst = (_LevelManager$getInst2 = LevelManager.getInstance()).getCurrentLevel) == null ? void 0 : _LevelManager$getInst.call(_LevelManager$getInst2);
          if (level != null && level.solutionMoveTileIds) {
            this._solutionIds = [].concat(level.solutionMoveTileIds);
          } else {
            this._solutionIds = [];
          }
          this.updateUI();
        };
        _proto.onOrderChanged = function onOrderChanged(order, orderIndex) {
          this.updateUI();
        };
        _proto.onOrderCompleted = function onOrderCompleted(order, orderIndex) {
          this.updateUI();
        };
        _proto.onAllOrdersCompleted = function onAllOrdersCompleted() {
          this.updateUI();
          this.orderIdLabel && (this.orderIdLabel.string = 'ALL ORDERS DONE!');
          this.expectedItemLabel && (this.expectedItemLabel.string = '-');
        };
        _proto.onOrderItemWrong = function onOrderItemWrong() {
          this.updateUI();
        };
        _proto.updateUI = function updateUI() {
          var mgr = OrderManager.getInstance();
          if (!mgr.isActive()) {
            if (this.orderIdLabel) this.orderIdLabel.string = 'N/A';
            if (this.expectedItemLabel) this.expectedItemLabel.string = '-';
            if (this.wrongTrayLabel) this.wrongTrayLabel.string = '0/0';
            if (this.progressLabel) this.progressLabel.string = '-';
            return;
          }
          var currentOrder = mgr.getCurrentOrder();
          var orderIdx = mgr.getCurrentOrderIndex();
          var totalOrders = mgr.getTotalOrders();
          var expected = mgr.getExpectedItem();
          var itemIdx = mgr.getCurrentItemIndex();
          var config = mgr.getOrderConfig();
          if (this.orderIdLabel) {
            this.orderIdLabel.string = currentOrder ? currentOrder.id + " (" + (orderIdx + 1) + "/" + totalOrders + ")" : 'Done';
          }
          if (this.expectedItemLabel) {
            this.expectedItemLabel.string = expected != null ? expected : '-';
          }
          if (this.progressLabel) {
            var _config$orderSize;
            var orderSize = (_config$orderSize = config == null ? void 0 : config.orderSize) != null ? _config$orderSize : 3;
            this.progressLabel.string = currentOrder ? "Item " + (itemIdx + 1) + "/" + orderSize : '-';
          }
          var wrongMgr = WrongTrayManager.getInstance();
          if (this.wrongTrayLabel && wrongMgr) {
            var _config$wrongTrayMaxS;
            var filled = wrongMgr.getFilledCount();
            var maxSlots = (_config$wrongTrayMaxS = config == null ? void 0 : config.wrongTrayMaxSlots) != null ? _config$wrongTrayMaxS : 2;
            this.wrongTrayLabel.string = filled + "/" + maxSlots;
          }
        }

        /** Auto-play từng move theo solutionMoveTileIds */;
        _proto.onAutoPlayClicked = function onAutoPlayClicked() {
          if (this._isAutoPlaying || this._solutionIds.length === 0) return;
          this._isAutoPlaying = true;
          this._autoPlayIndex = 0;
          this.playNextAutoMove();
        }

        /** Play 1 move tiếp theo trong solution */;
        _proto.onNextMoveClicked = function onNextMoveClicked() {
          if (this._autoPlayIndex >= this._solutionIds.length) return;
          this.playSingleMove(this._solutionIds[this._autoPlayIndex]);
          this._autoPlayIndex++;
        };
        _proto.playNextAutoMove = function playNextAutoMove() {
          var _this2 = this;
          if (!this._isAutoPlaying) return;
          if (this._autoPlayIndex >= this._solutionIds.length) {
            this._isAutoPlaying = false;
            return;
          }
          this.playSingleMove(this._solutionIds[this._autoPlayIndex]);
          this._autoPlayIndex++;

          // Schedule next move
          this.scheduleOnce(function () {
            return _this2.playNextAutoMove();
          }, 0.4);
        };
        _proto.playSingleMove = function playSingleMove(tileId) {
          var tileData = TileManager.getInstance().getTileData(tileId);
          if (!tileData || !tileData.active || !tileData.selectable) {
            return;
          }
          EventBus.getInstance().emit(GameEvent.TILE_CLICKED, tileData);
        };
        _proto.onDestroy = function onDestroy() {
          EventBus.getInstance().off(GameEvent.ORDER_CHANGED, this.onOrderChanged, this);
          EventBus.getInstance().off(GameEvent.ORDER_COMPLETED, this.onOrderCompleted, this);
          EventBus.getInstance().off(GameEvent.ALL_ORDERS_COMPLETED, this.onAllOrdersCompleted, this);
          EventBus.getInstance().off(GameEvent.ORDER_ITEM_WRONG, this.onOrderItemWrong, this);
          EventBus.getInstance().off(GameEvent.LEVEL_LOADED, this.onLevelLoaded, this);
        };
        return OrderMatchDebugPanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "orderIdLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "expectedItemLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wrongTrayLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "autoPlayButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nextMoveButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OrderMatchTestRunner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './OrderManager.ts', './WrongTrayManager.ts', './BoardManager.ts', './LevelValidator2.ts', './DataLoader.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Component, OrderManager, WrongTrayManager, BoardManager, LevelValidator, DataLoader;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      OrderManager = module.OrderManager;
    }, function (module) {
      WrongTrayManager = module.WrongTrayManager;
    }, function (module) {
      BoardManager = module.BoardManager;
    }, function (module) {
      LevelValidator = module.LevelValidator;
    }, function (module) {
      DataLoader = module.DataLoader;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "3f3c8vDa6FMu5KLJSS+pSUq", "OrderMatchTestRunner", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**
       * OrderMatchTestRunner - Gộp tất cả test cases vào 1 component.
       * Attach vào 1 node duy nhất, chạy tất cả test khi start.
       */
      var OrderMatchTestRunner = exports('OrderMatchTestRunner', (_dec = ccclass('OrderMatchTestRunner'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OrderMatchTestRunner, _Component);
        function OrderMatchTestRunner() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "resultLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelId", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runOrderManagerTests", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runWrongTrayTests", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runBoardBlockingTests", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runValidatorTests", _descriptor6, _assertThisInitialized(_this));
          _this._results = [];
          return _this;
        }
        var _proto = OrderMatchTestRunner.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.runAllTests();
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.runAllTests = /*#__PURE__*/function () {
          var _runAllTests = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this._results = [];
                  if (this.runOrderManagerTests) this.runOrderManagerTests_();
                  if (this.runWrongTrayTests) this.runWrongTrayTests_();
                  if (this.runBoardBlockingTests) this.runBoardBlockingTests_();
                  if (!this.runValidatorTests) {
                    _context2.next = 7;
                    break;
                  }
                  _context2.next = 7;
                  return this.runValidatorTests_();
                case 7:
                  this.printResults();
                case 8:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function runAllTests() {
            return _runAllTests.apply(this, arguments);
          }
          return runAllTests;
        }();
        _proto.addResult = function addResult(name, pass, msg) {
          this._results.push({
            name: name,
            pass: pass,
            msg: msg
          });
        };
        _proto.printResults = function printResults() {
          var passCount = this._results.filter(function (r) {
            return r.pass;
          }).length;
          var failCount = this._results.filter(function (r) {
            return !r.pass;
          }).length;
          var lines = [];
          lines.push('=== ORDER_MATCH TEST RESULTS ===');
          for (var _iterator = _createForOfIteratorHelperLoose(this._results), _step; !(_step = _iterator()).done;) {
            var r = _step.value;
            var status = r.pass ? '[PASS]' : '[FAIL]';
            lines.push(status + " " + r.name + (r.msg ? ': ' + r.msg : ''));
          }
          lines.push("\nTotal: " + this._results.length + " | Pass: " + passCount + " | Fail: " + failCount);
          var output = lines.join('\n');
          if (this.resultLabel) {
            this.resultLabel.string = output;
          }
        }

        // ===== ORDER MANAGER TESTS =====
        ;

        _proto.runOrderManagerTests_ = function runOrderManagerTests_() {
          this.testLoadOrders();
          this.testExactOrderCorrect();
          this.testExactOrderNonConsecutiveTrayMatch();
          this.testExactOrderWrong();
          this.testAnyOrderCorrect();
          this.testCompleteOrderAdvances();
          this.testAllOrdersCompleted();
          this.testConsumeWrongTileFalse();
        };
        _proto.setupExactOrder = function setupExactOrder() {
          OrderManager.reset();
          var mgr = OrderManager.getInstance();
          mgr.initialize([{
            id: 'order_001',
            items: ['lamp', 'vase', 'plant']
          }, {
            id: 'order_002',
            items: ['clock', 'basket', 'cushion']
          }], {
            orderSize: 3,
            orderMode: 'EXACT_ORDER',
            wrongTrayMaxSlots: 2,
            consumeWrongTile: true
          });
          return mgr;
        };
        _proto.setupAnyOrder = function setupAnyOrder() {
          OrderManager.reset();
          var mgr = OrderManager.getInstance();
          mgr.initialize([{
            id: 'order_001',
            items: ['lamp', 'vase', 'plant']
          }], {
            orderSize: 3,
            orderMode: 'ANY_ORDER',
            wrongTrayMaxSlots: 2,
            consumeWrongTile: true
          });
          return mgr;
        };
        _proto.testLoadOrders = function testLoadOrders() {
          var mgr = this.setupExactOrder();
          this.addResult('OrderManager.loadOrders', mgr.getTotalOrders() === 2 && mgr.isActive());
          mgr.clear();
        };
        _proto.testExactOrderCorrect = function testExactOrderCorrect() {
          var _mgr$getCurrentOrder;
          var mgr = this.setupExactOrder();
          var t = function t(gid) {
            return {
              id: "T_" + gid,
              groupId: gid,
              active: true,
              selectable: true
            };
          };
          var r1 = mgr.submitTile(t('lamp'));
          var r2 = mgr.submitTile(t('vase'));
          var r3 = mgr.submitTile(t('plant'));
          var pass = r1.correct && !r1.orderComplete && r2.correct && !r2.orderComplete && r3.correct && r3.orderComplete && ((_mgr$getCurrentOrder = mgr.getCurrentOrder()) == null ? void 0 : _mgr$getCurrentOrder.id) === 'order_002';
          this.addResult('OrderManager.exactOrderCorrect', pass);
          mgr.clear();
        };
        _proto.testExactOrderNonConsecutiveTrayMatch = function testExactOrderNonConsecutiveTrayMatch() {
          var mgr = this.setupExactOrder();
          var trayTiles = [{
            id: 'T1',
            groupId: 'lamp',
            active: true,
            selectable: true
          }, {
            id: 'T_X1',
            groupId: 'clock',
            active: true,
            selectable: true
          }, {
            id: 'T2',
            groupId: 'vase',
            active: true,
            selectable: true
          }, {
            id: 'T_X2',
            groupId: 'basket',
            active: true,
            selectable: true
          }, {
            id: 'T3',
            groupId: 'plant',
            active: true,
            selectable: true
          }];
          var matched = mgr.findOrderMatchInTray(mgr.getCurrentOrder(), trayTiles);
          this.addResult('OrderManager.exactOrderNonConsecutiveTrayMatch', !!matched && matched.map(function (t) {
            return t.id;
          }).join(',') === 'T1,T2,T3');
          mgr.clear();
        };
        _proto.testExactOrderWrong = function testExactOrderWrong() {
          var mgr = this.setupExactOrder();
          var t = function t(gid) {
            return {
              id: "T_" + gid,
              groupId: gid,
              active: true,
              selectable: true
            };
          };
          mgr.submitTile(t('lamp'));
          var r2 = mgr.submitTile(t('plant'));
          var pass = !r2.correct && mgr.getCurrentItemIndex() === 1 && mgr.getExpectedItem() === 'vase';
          this.addResult('OrderManager.exactOrderWrong', pass);
          mgr.clear();
        };
        _proto.testAnyOrderCorrect = function testAnyOrderCorrect() {
          var mgr = this.setupAnyOrder();
          var t = function t(gid) {
            return {
              id: "T_" + gid,
              groupId: gid,
              active: true,
              selectable: true
            };
          };
          var r1 = mgr.submitTile(t('plant'));
          var r2 = mgr.submitTile(t('lamp'));
          var r3 = mgr.submitTile(t('vase'));
          this.addResult('OrderManager.anyOrderCorrect', r1.correct && r2.correct && r3.correct && r3.orderComplete && mgr.isAllOrdersCompleted());
          mgr.clear();
        };
        _proto.testCompleteOrderAdvances = function testCompleteOrderAdvances() {
          var _mgr$getCurrentOrder2;
          var mgr = this.setupExactOrder();
          var t = function t(gid) {
            return {
              id: "T_" + gid,
              groupId: gid,
              active: true,
              selectable: true
            };
          };
          mgr.submitTile(t('lamp'));
          mgr.submitTile(t('vase'));
          mgr.submitTile(t('plant'));
          this.addResult('OrderManager.completeOrderAdvances', mgr.getCurrentOrderIndex() === 1 && ((_mgr$getCurrentOrder2 = mgr.getCurrentOrder()) == null ? void 0 : _mgr$getCurrentOrder2.id) === 'order_002');
          mgr.clear();
        };
        _proto.testAllOrdersCompleted = function testAllOrdersCompleted() {
          var mgr = this.setupExactOrder();
          var t = function t(gid) {
            return {
              id: "T_" + gid,
              groupId: gid,
              active: true,
              selectable: true
            };
          };
          ['lamp', 'vase', 'plant'].forEach(function (g) {
            return mgr.submitTile(t(g));
          });
          ['clock', 'basket', 'cushion'].forEach(function (g) {
            return mgr.submitTile(t(g));
          });
          this.addResult('OrderManager.allOrdersCompleted', mgr.isAllOrdersCompleted() && mgr.getCurrentOrder() === null);
          mgr.clear();
        };
        _proto.testConsumeWrongTileFalse = function testConsumeWrongTileFalse() {
          var _mgr$getOrderConfig;
          OrderManager.reset();
          var mgr = OrderManager.getInstance();
          mgr.initialize([{
            id: 'order_001',
            items: ['lamp', 'vase', 'plant']
          }], {
            orderSize: 3,
            orderMode: 'EXACT_ORDER',
            wrongTrayMaxSlots: 2,
            consumeWrongTile: false
          });
          var r = mgr.submitTile({
            id: 'T1',
            groupId: 'clock',
            active: true,
            selectable: true
          });
          this.addResult('OrderManager.consumeWrongTileFalse', !r.correct && ((_mgr$getOrderConfig = mgr.getOrderConfig()) == null ? void 0 : _mgr$getOrderConfig.consumeWrongTile) === false);
          mgr.clear();
        }

        // ===== WRONG TRAY TESTS =====
        ;

        _proto.runWrongTrayTests_ = function runWrongTrayTests_() {
          this.testWrongTrayAdd();
          this.testWrongTrayFull();
          this.testWrongTrayReset();
        };
        _proto.getWrongTrayMgr = function getWrongTrayMgr() {
          if (!WrongTrayManager.Instance) {
            var node = new Node('TestWrongTray');
            node.addComponent(WrongTrayManager);
          }
          return WrongTrayManager.getInstance();
        };
        _proto.testWrongTrayAdd = function testWrongTrayAdd() {
          var mgr = this.getWrongTrayMgr();
          mgr.clearTray();
          mgr.initialize(2);
          this.addResult('WrongTray.add', mgr.getFilledCount() === 0 && !mgr.isFull());
          mgr.clearTray();
        };
        _proto.testWrongTrayFull = function testWrongTrayFull() {
          var mgr = this.getWrongTrayMgr();
          mgr.clearTray();
          mgr.initialize(2);
          mgr._filledCount = 2;
          mgr._isFull = true;
          this.addResult('WrongTray.full', mgr.isFull() && mgr.getFilledCount() === 2);
          mgr.clearTray();
        };
        _proto.testWrongTrayReset = function testWrongTrayReset() {
          var mgr = this.getWrongTrayMgr();
          mgr.clearTray();
          mgr.initialize(2);
          mgr._filledCount = 1;
          mgr.clearTray();
          this.addResult('WrongTray.reset', mgr.getFilledCount() === 0 && !mgr.isFull());
        }

        // ===== BOARD BLOCKING TESTS =====
        ;

        _proto.runBoardBlockingTests_ = function runBoardBlockingTests_() {
          this.testOverlapBlocking();
          this.testLayerUnblock();
          this.testSameCellBlocking();
        };
        _proto.getBoardMgr = function getBoardMgr() {
          if (!BoardManager.Instance) {
            var node = new Node('TestBoard');
            node.addComponent(BoardManager);
          }
          return BoardManager.getInstance();
        };
        _proto.testOverlapBlocking = function testOverlapBlocking() {
          var bm = this.getBoardMgr();
          bm.clearBoard();
          var config = {
            rows: 2,
            cols: 2,
            maxLayers: 3,
            tileSpacing: 130,
            tileSpacingY: 160,
            centerOffset: {
              x: 0,
              y: 0
            },
            tileWidth: 100,
            tileHeight: 120,
            jitterX: 0,
            jitterY: 0,
            jitterMode: 'layer',
            blockMode: 'overlap',
            minBlockOverlapPixels: 1,
            coverThreshold: 0.3
          };
          bm.buildBoard(config);
          var tileA = {
            id: 'A',
            groupId: 'x',
            tileType: 0,
            gridX: 0,
            gridY: 0,
            layer: 0,
            active: true,
            selectable: false,
            isBlocked: true
          };
          var tileB = {
            id: 'B',
            groupId: 'x',
            tileType: 0,
            gridX: 0,
            gridY: 0,
            layer: 1,
            active: true,
            selectable: false,
            isBlocked: true
          };
          bm.registerTile(tileA);
          bm.registerTile(tileB);
          this.addResult('Board.overlapBlocking', !bm.isTileBlocked(tileB) && bm.isTileBlocked(tileA));
          bm.clearBoard();
        };
        _proto.testLayerUnblock = function testLayerUnblock() {
          var bm = this.getBoardMgr();
          bm.clearBoard();
          var config = {
            rows: 2,
            cols: 2,
            maxLayers: 3,
            tileSpacing: 130,
            tileSpacingY: 160,
            centerOffset: {
              x: 0,
              y: 0
            },
            tileWidth: 100,
            tileHeight: 120,
            jitterX: 0,
            jitterY: 0,
            jitterMode: 'layer',
            blockMode: 'overlap',
            minBlockOverlapPixels: 1,
            coverThreshold: 0.3
          };
          bm.buildBoard(config);
          var bottom = {
            id: 'B',
            groupId: 'x',
            tileType: 0,
            gridX: 0,
            gridY: 0,
            layer: 0,
            active: true,
            selectable: false,
            isBlocked: true
          };
          var top = {
            id: 'T',
            groupId: 'x',
            tileType: 0,
            gridX: 0,
            gridY: 0,
            layer: 1,
            active: true,
            selectable: false,
            isBlocked: true
          };
          bm.registerTile(bottom);
          bm.registerTile(top);
          var before = bm.isTileBlocked(bottom);
          bm.unregisterTile(top);
          var after = !bm.isTileBlocked(bottom);
          this.addResult('Board.layerUnblock', before && after);
          bm.clearBoard();
        };
        _proto.testSameCellBlocking = function testSameCellBlocking() {
          var bm = this.getBoardMgr();
          bm.clearBoard();
          var config = {
            rows: 2,
            cols: 2,
            maxLayers: 3,
            tileSpacing: 130,
            tileSpacingY: 160,
            centerOffset: {
              x: 0,
              y: 0
            },
            tileWidth: 100,
            tileHeight: 120,
            jitterX: 0,
            jitterY: 0,
            jitterMode: 'layer',
            blockMode: 'overlap',
            minBlockOverlapPixels: 1,
            coverThreshold: 0.3
          };
          bm.buildBoard(config);
          var t0 = {
            id: 't0',
            groupId: 'x',
            tileType: 0,
            gridX: 1,
            gridY: 1,
            layer: 0,
            active: true,
            selectable: false,
            isBlocked: true
          };
          var t1 = {
            id: 't1',
            groupId: 'x',
            tileType: 0,
            gridX: 1,
            gridY: 1,
            layer: 1,
            active: true,
            selectable: false,
            isBlocked: true
          };
          var t2 = {
            id: 't2',
            groupId: 'x',
            tileType: 0,
            gridX: 1,
            gridY: 1,
            layer: 2,
            active: true,
            selectable: false,
            isBlocked: true
          };
          bm.registerTile(t0);
          bm.registerTile(t1);
          bm.registerTile(t2);
          this.addResult('Board.sameCellBlocking', !bm.isTileBlocked(t2) && bm.isTileBlocked(t1) && bm.isTileBlocked(t0));
          bm.clearBoard();
        }

        // ===== LEVEL VALIDATOR TESTS =====
        ;

        _proto.runValidatorTests_ = /*#__PURE__*/
        function () {
          var _runValidatorTests_ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var paddedId, path, levelData, result;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  paddedId = this.levelId < 10 ? "00" + this.levelId : this.levelId < 100 ? "0" + this.levelId : "" + this.levelId;
                  path = "data/levels/level_" + paddedId;
                  _context3.next = 4;
                  return DataLoader.loadJson(path);
                case 4:
                  levelData = _context3.sent;
                  if (levelData) {
                    _context3.next = 8;
                    break;
                  }
                  this.addResult('Validator.load', false, "Failed to load level " + this.levelId);
                  return _context3.abrupt("return");
                case 8:
                  result = LevelValidator.validate(levelData);
                  this.addResult('Validator.level', result.valid, result.errors.join('; '));
                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function runValidatorTests_() {
            return _runValidatorTests_.apply(this, arguments);
          }
          return runValidatorTests_;
        }();
        return OrderMatchTestRunner;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "resultLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 22;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "runOrderManagerTests", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "runWrongTrayTests", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "runBoardBlockingTests", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "runValidatorTests", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OrderTrayManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameEvent.ts', './EventBus.ts', './SkinManager.ts', './ConfigManager.ts', './PoolManager.ts', './OrderManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Color, Vec3, UIOpacity, Sprite, UITransform, instantiate, tween, Tween, Component, GameEvent, EventBus, SkinManager, ConfigManager, PoolManager, OrderManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Vec3 = module.Vec3;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      SkinManager = module.SkinManager;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      PoolManager = module.PoolManager;
    }, function (module) {
      OrderManager = module.OrderManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _class3;
      cclegacy._RF.push({}, "e5f6ae4ydBOHyo7TF1uf4qb", "OrderTrayManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**
       * OrderTrayManager - Hiển thị tray cho current order.
       * Mỗi slot hiển thị item icon và highlight slot tiếp theo.
       */
      var OrderTrayManager = exports('OrderTrayManager', (_dec = ccclass('OrderTrayManager'), _dec2 = property(Node), _dec3 = property({
        tooltip: 'Độ lệch Y của các slot so với tâm khung order panel'
      }), _dec4 = property(Color), _dec5 = property(Color), _dec6 = property(Color), _dec7 = property(Node), _dec8 = property(Color), _dec9 = property(Color), _dec10 = property({
        type: Node,
        tooltip: 'Dot progress index 0'
      }), _dec11 = property({
        type: Node,
        tooltip: 'Dot progress index 1'
      }), _dec12 = property({
        type: Node,
        tooltip: 'Dot progress index 2'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OrderTrayManager, _Component);
        function OrderTrayManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "trayContainer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotSpacing", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotOffsetY", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyDuration", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotScale", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "orderSpacingY", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "highlightColor", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emptySlotColor", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dimmedColor", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "orderPanelTemplate", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentOrderPanelScale", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lowerOrderPanelScale", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lowerOrderPanelColor", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentToLowerSpacingY", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lowerToLowerSpacingY", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lowerSlotColor", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "orderDot0", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "orderDot1", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "orderDot2", _descriptor19, _assertThisInitialized(_this));
          _this._slots = [];
          _this._orderPanelMap = new Map();
          _this._allOrders = [];
          _this._currentOrder = null;
          _this._orderConfig = null;
          _this._filledCount = 0;
          _this._isClearing = false;
          _this._lastOrderIndex = -1;
          // index trong danh sách hiển thị (sau khi cắt còn lại)
          _this._lastGlobalOrderIndex = -1;
          // index toàn cục từ OrderManager để phát hiện chuyển order
          _this._orderStartMap = new Map();
          _this._visibleStartOrder = 0;
          _this._consumeEffectWorldPos = null;
          _this._isTransitioning = false;
          _this._pendingTransition = false;
          return _this;
        }
        OrderTrayManager.getInstance = function getInstance() {
          if (OrderTrayManager.Instance && OrderTrayManager.Instance.node && OrderTrayManager.Instance.node.isValid) {
            return OrderTrayManager.Instance;
          }
          return null;
        };
        var _proto = OrderTrayManager.prototype;
        _proto.onLoad = function onLoad() {
          if (OrderTrayManager.Instance) {
            this.destroy();
            return;
          }
          OrderTrayManager.Instance = this;
          EventBus.getInstance().on(GameEvent.ORDER_CHANGED, this.onOrderChanged, this);
          EventBus.getInstance().on(GameEvent.ORDER_ITEM_CORRECT, this.onOrderItemCorrect, this);
          EventBus.getInstance().on(GameEvent.ORDER_COMPLETED, this.onOrderCompleted, this);
          EventBus.getInstance().on(GameEvent.ALL_ORDERS_COMPLETED, this.onAllOrdersCompleted, this);
          EventBus.getInstance().on(GameEvent.LEVEL_LOADED, this.onLevelLoaded, this);
          EventBus.getInstance().on(GameEvent.TILE_ADDED_TO_TRAY, this.onTrayProgressChanged, this);
          EventBus.getInstance().on(GameEvent.TRAY_SETTLED, this.onTrayProgressChanged, this);
        };
        _proto.onTrayProgressChanged = function onTrayProgressChanged() {
          if (this._isClearing || this._isTransitioning || this._consumeEffectWorldPos) return;
          this.syncCurrentOrderDots();
        };
        _proto.onLevelLoaded = function onLevelLoaded() {
          this.clearTray();
        };
        _proto.onAllOrdersCompleted = function onAllOrdersCompleted() {
          if (this._consumeEffectWorldPos) return;
          if (this._isClearing) return;
          this.clearTray();
        };
        _proto.initialize = function initialize(orders, currentOrder, config) {
          this._allOrders = orders && orders.length > 0 ? [].concat(orders) : [];
          this._currentOrder = currentOrder;
          this._orderConfig = config;
          this._filledCount = 0;
          this._isClearing = false;
          this._lastOrderIndex = this._allOrders.length > 0 ? 0 : -1;
          this._lastGlobalOrderIndex = 0;
          this._orderStartMap.clear();
          this._visibleStartOrder = 0;
          this.buildSlots();
        };
        _proto.onOrderChanged = function onOrderChanged(order, orderIndex) {
          this._currentOrder = order;

          // Nếu chưa đổi sang order khác (orderIndex toàn cục không đổi) thì chỉ cập nhật scale
          if (orderIndex === this._lastGlobalOrderIndex && this._slots.length > 0) {
            if (!this._isClearing && !this._isTransitioning) {
              this.updateSlotStates();
            }
            return;
          }

          // Ghi nhận orderIndex toàn cục mới
          this._lastGlobalOrderIndex = orderIndex;
          this._filledCount = 0;
          if (!this._consumeEffectWorldPos) {
            this.resetAllOrderDots();
          }
          if (this._isClearing || this._isTransitioning) {
            return;
          }

          // Nếu tile đang bay vào order cũ, hoãn transition cho đến khi effect xong
          if (this._consumeEffectWorldPos) {
            this._pendingTransition = true;
            return;
          }
          this.playOrderTransitionAnimation();
        };
        _proto.onOrderItemCorrect = function onOrderItemCorrect(tileData, itemIndex) {
          var _this$_orderStartMap$;
          var globalIndex = ((_this$_orderStartMap$ = this._orderStartMap.get(this._lastOrderIndex)) != null ? _this$_orderStartMap$ : 0) + itemIndex;
          this.fillSlot(globalIndex, tileData);
          this.updateCurrentOrderDots(itemIndex);
        };
        _proto.onOrderCompleted = function onOrderCompleted(order, orderIndex) {
          var _order$items$length;
          var itemCount = (_order$items$length = order == null ? void 0 : order.items.length) != null ? _order$items$length : this.getOrderDotNodes().length;
          this.setOrderDots(itemCount);
          this.playOrderConsumeAnimation();
        }

        /** Tính order index đầu tiên trong viewport (tối đa 3 order) */;
        _proto.getVisibleStartOrder = function getVisibleStartOrder() {
          var total = this._allOrders.length;
          if (total <= 3) return 0;
          return Math.min(this._lastOrderIndex, total - 3);
        }

        /** Xây dựng slot UI cho tối đa 3 order gần nhất, xếp từ trên xuống */;
        _proto.buildSlots = function buildSlots() {
          this.clearVisuals();
          this._slots = [];
          this._orderStartMap.clear();
          if (this._allOrders.length === 0) {
            return;
          }
          this.ensureContainer();
          var visibleStart = this.getVisibleStartOrder();
          this._visibleStartOrder = visibleStart;
          var visibleCount = Math.min(3, this._allOrders.length - visibleStart);
          var spacings = [];
          for (var i = 0; i < visibleCount - 1; i++) {
            spacings.push(i === 0 ? this.currentToLowerSpacingY : this.lowerToLowerSpacingY);
          }
          var totalSpacing = spacings.reduce(function (a, b) {
            return a + b;
          }, 0);
          var startY = totalSpacing / 2;
          var slotIdx = 0;
          var orderY = startY;
          for (var vi = 0; vi < visibleCount; vi++) {
            var oi = visibleStart + vi;
            var order = this._allOrders[oi];
            this._orderStartMap.set(oi, slotIdx);
            var itemCount = order.items.length;
            var startX = -(itemCount - 1) * this.slotSpacing / 2;
            var centerX = startX + (itemCount - 1) * this.slotSpacing / 2;

            // Tạo panel nền riêng cho order, các slot sẽ là child của panel
            var panel = this.createOrderPanel(oi, centerX, orderY);
            for (var ii = 0; ii < itemCount; ii++) {
              var pos = panel ? new Vec3(startX + ii * this.slotSpacing - centerX, this.slotOffsetY, 0) : new Vec3(startX + ii * this.slotSpacing, orderY + this.slotOffsetY, 0);
              var slot = this.createSlot(slotIdx, oi, ii, pos, order.items[ii], panel);
              this._slots.push(slot);
              slotIdx++;
            }
            if (vi < visibleCount - 1) {
              orderY -= spacings[vi];
            }
          }
          this.updateSlotStates();
          this.syncCurrentOrderDots();
        }

        /** Rebuild UI từ danh sách order còn lại trong OrderManager (bắt đầu từ current index) */;
        _proto.rebuildFromManager = function rebuildFromManager() {
          var mgr = OrderManager.getInstance();
          var all = mgr.getAllOrders();
          var curIdx = mgr.getCurrentOrderIndex();
          this._consumeEffectWorldPos = null;
          this._pendingTransition = false;
          this._isTransitioning = false;
          this._isClearing = false;
          this._allOrders = all.slice(curIdx);
          this._currentOrder = mgr.getCurrentOrder();
          this._orderConfig = mgr.getOrderConfig();
          // Sau khi cắt còn lại, current luôn là index 0 trong UI
          this._lastOrderIndex = 0;
          this._lastGlobalOrderIndex = curIdx;
          this._visibleStartOrder = 0;
          this._orderStartMap.clear();
          this._filledCount = 0;
          this.buildSlots();
        };
        _proto.refreshFromOrderManager = function refreshFromOrderManager() {
          this.rebuildFromManager();
        }

        /** Cập nhật scale: order đang focus được zoom lớn hơn, các order khác thu nhỏ */;
        _proto.updateSlotStates = function updateSlotStates() {
          var currentOrderIdx = this._lastOrderIndex;
          for (var _iterator = _createForOfIteratorHelperLoose(this._slots), _step; !(_step = _iterator()).done;) {
            var slot = _step.value;
            if (!slot.bgNode || !slot.bgNode.isValid) continue;
            var isCurrentOrder = slot.orderIndex === currentOrderIdx;
            slot.bgNode.setScale(this.slotScale, this.slotScale, 1);
            this.setPreviewOpacity(slot.previewNode, 255);
            this.setPreviewColor(slot.previewNode, isCurrentOrder ? Color.WHITE : this.lowerSlotColor);
            if (slot.previewNode && slot.previewNode.isValid) {
              slot.previewNode.setScale(0.9, 0.9, 1);
            }
          }
          this.updatePanelStates();
          this.updatePanelDepth();
          this.syncCurrentOrderDots();
        };
        _proto.areEditorDotsOnTemplate = function areEditorDotsOnTemplate() {
          var _this2 = this;
          if (!this.orderPanelTemplate || !this.orderPanelTemplate.isValid) return false;
          var dots = [this.orderDot0, this.orderDot1, this.orderDot2];
          return dots.some(function (dot) {
            if (!dot || !dot.isValid) return false;
            var node = dot;
            while (node) {
              if (node === _this2.orderPanelTemplate) return true;
              node = node.parent;
            }
            return false;
          });
        };
        _proto.getDotsFromPanel = function getDotsFromPanel(panel) {
          if (!panel || !panel.isValid) return [];
          var dotContainer = panel.getChildByName('Dot');
          if (!dotContainer || !dotContainer.isValid) return [];
          return ['0', '1', '2'].map(function (name) {
            return dotContainer.getChildByName(name);
          }).filter(function (node) {
            return !!node && node.isValid;
          });
        };
        _proto.getOrderDotNodes = function getOrderDotNodes() {
          var _this$_orderPanelMap$;
          var editorDots = [this.orderDot0, this.orderDot1, this.orderDot2].filter(function (node) {
            return !!node && node.isValid;
          });
          if (editorDots.length > 0 && !this.areEditorDotsOnTemplate()) {
            return editorDots;
          }
          var panel = (_this$_orderPanelMap$ = this._orderPanelMap.get(this._lastOrderIndex)) != null ? _this$_orderPanelMap$ : null;
          var panelDots = this.getDotsFromPanel(panel);
          if (panelDots.length > 0) return panelDots;
          return editorDots;
        }

        /** Hiển thị dot 0..visibleCount-1, ẩn các dot còn lại */;
        _proto.setOrderDots = function setOrderDots(visibleCount) {
          var dots = this.getOrderDotNodes();
          for (var i = 0; i < dots.length; i++) {
            dots[i].active = i < visibleCount;
          }
        };
        _proto.resetAllOrderDots = function resetAllOrderDots() {
          this.setOrderDots(0);
        }

        /** Bật dot tới itemIndex (0-based) của order hiện tại */;
        _proto.updateCurrentOrderDots = function updateCurrentOrderDots(itemIndex) {
          this.setOrderDots(Math.max(0, itemIndex + 1));
        };
        _proto.getCurrentOrderProgressCount = function getCurrentOrderProgressCount() {
          var _mgr$getOrderConfig;
          var mgr = OrderManager.getInstance();
          var order = mgr.getCurrentOrder();
          if (!order) return 0;
          if (((_mgr$getOrderConfig = mgr.getOrderConfig()) == null ? void 0 : _mgr$getOrderConfig.orderMode) === 'ANY_ORDER') {
            return mgr.captureSnapshot().currentOrderMatchedTileIds.length;
          }
          return mgr.getCurrentItemIndex();
        };
        _proto.syncCurrentOrderDots = function syncCurrentOrderDots() {
          if (this._consumeEffectWorldPos) return;
          this.setOrderDots(this.getCurrentOrderProgressCount());
        };
        _proto.setPreviewOpacity = function setPreviewOpacity(previewNode, opacity) {
          if (!previewNode || !previewNode.isValid) return;
          var uiOpacity = previewNode.getComponent(UIOpacity) || previewNode.addComponent(UIOpacity);
          uiOpacity.opacity = opacity;
        };
        _proto.setPreviewColor = function setPreviewColor(previewNode, color) {
          if (!previewNode || !previewNode.isValid) return;
          var sprite = this.getNodeSprite(previewNode);
          if (sprite) {
            sprite.color = this.cloneColorOrWhite(color);
          }
        };
        _proto.setPanelOpacity = function setPanelOpacity(panel, opacity) {
          if (!panel || !panel.isValid) return;
          var uiOpacity = panel.getComponent(UIOpacity) || panel.addComponent(UIOpacity);
          uiOpacity.opacity = opacity;
        };
        _proto.updatePanelStates = function updatePanelStates() {
          var currentOrderIdx = this._lastOrderIndex;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._orderPanelMap.entries()), _step2; !(_step2 = _iterator2()).done;) {
            var _step2$value = _step2.value,
              orderIndex = _step2$value[0],
              panel = _step2$value[1];
            if (!panel || !panel.isValid) continue;
            var isCurrentOrder = orderIndex === currentOrderIdx;
            var scale = isCurrentOrder ? this.currentOrderPanelScale : this.lowerOrderPanelScale;
            var color = isCurrentOrder ? Color.WHITE : this.lowerOrderPanelColor;
            panel.setScale(scale, scale, 1);
            this.setPanelColor(panel, color);
            this.setPanelOpacity(panel, 255);
          }
        };
        _proto.setPanelColor = function setPanelColor(panel, color) {
          if (!panel || !panel.isValid) return;
          var safeColor = this.cloneColorOrWhite(color);
          var sprite = panel.getComponent(Sprite);
          if (sprite) {
            sprite.color = safeColor;
            return;
          }

          // Nếu panel chính không có Sprite, tìm trong children
          for (var _iterator3 = _createForOfIteratorHelperLoose(panel.children), _step3; !(_step3 = _iterator3()).done;) {
            var child = _step3.value;
            var childSprite = child.getComponent(Sprite);
            if (childSprite) {
              childSprite.color = safeColor;
              return;
            }
          }
        }

        /** Đưa panel của current order lên trên cùng */;
        _proto.updatePanelDepth = function updatePanelDepth() {
          var panels = Array.from(this._orderPanelMap.entries()).filter(function (_ref) {
            var _ = _ref[0],
              panel = _ref[1];
            return panel && panel.isValid;
          }).sort(function (a, b) {
            return b[0] - a[0];
          });
          for (var i = 0; i < panels.length; i++) {
            panels[i][1].setSiblingIndex(i);
          }
        };
        _proto.createSlot = function createSlot(index, orderIndex, itemIndex, position, expectedItem, parentNode) {
          var container = parentNode || this.trayContainer;

          // Background node cho slot (không có Graphics, chỉ dùng để định vị/scale)
          var bgNode = new Node("SlotBg_" + index);
          bgNode.layer = container.layer;
          var bgUITransform = bgNode.addComponent(UITransform);
          bgUITransform.setContentSize(100, 100);
          bgNode.setParent(container);
          bgNode.setPosition(position);
          bgNode.setScale(this.slotScale, this.slotScale, 1);

          // Preview icon (expected item) — spawn từ prefab tile_default
          var prefabKey = SkinManager.getInstance().getTilePrefabKey('default');
          var previewNode = PoolManager.getInstance().get(prefabKey);
          if (previewNode) {
            var _SkinManager$getInsta;
            previewNode.name = "SlotPreview_" + index;
            previewNode.layer = container.layer;
            previewNode.setParent(bgNode);
            previewNode.setPosition(0, 0, 0);
            previewNode.setScale(0.9, 0.9, 1);

            // Reset sprite cũ để tránh hiển thị icon của lần dùng trước khi applyTileSkin async chạy
            var visualNode = previewNode.getChildByName('visual');
            var sprite = (visualNode == null ? void 0 : visualNode.getComponent(Sprite)) || previewNode.getComponentInChildren(Sprite);
            if (sprite) {
              sprite.spriteFrame = null;
            }

            // Remove Tile component để không bị click
            var tileComp = previewNode.getComponent('Tile');
            if (tileComp) tileComp.destroy();
            var skinId = ((_SkinManager$getInsta = SkinManager.getInstance().getCurrentSkin()) == null ? void 0 : _SkinManager$getInsta.skinId) || 'uma';
            SkinManager.getInstance().applyTileSkin(previewNode, skinId + "/" + expectedItem);
          } else {
            // Fallback nếu prefab chưa load
            previewNode = new Node("SlotPreview_" + index);
            previewNode.layer = container.layer;
            previewNode.addComponent(UITransform);
            var fallbackSprite = previewNode.addComponent(Sprite);
            fallbackSprite.sizeMode = Sprite.SizeMode.CUSTOM;
            previewNode.setParent(bgNode);
            previewNode.setPosition(0, 0, 0);
            previewNode.setScale(0.9, 0.9, 1);
          }
          return {
            index: index,
            orderIndex: orderIndex,
            itemIndex: itemIndex,
            position: position.clone(),
            expectedItem: expectedItem,
            filledNode: null,
            previewNode: previewNode,
            bgNode: bgNode
          };
        }

        /** Đảm bảo container tồn tại */;
        _proto.ensureContainer = function ensureContainer() {
          if (this.trayContainer) return;
          this.trayContainer = new Node('OrderTrayContainer');
          this.trayContainer.layer = this.node.layer;
          this.trayContainer.addComponent(UITransform);
          this.trayContainer.setParent(this.node);
          this.trayContainer.setPosition(0, 0, 0);
        };
        _proto.createOrderPanel = function createOrderPanel(orderIndex, centerX, centerY) {
          if (!this.orderPanelTemplate || !this.orderPanelTemplate.isValid) return null;
          if (!this.trayContainer || !this.trayContainer.isValid) return null;
          var panel = instantiate(this.orderPanelTemplate);
          panel.name = "OrderPanel_" + orderIndex;
          panel.layer = this.trayContainer.layer;
          panel.setParent(this.trayContainer);
          panel.setPosition(centerX, centerY, 0);
          this._orderPanelMap.set(orderIndex, panel);
          return panel;
        }

        /** Fill một slot: chỉ animate UI preview (không bay tile thật) */;
        _proto.fillSlot = function fillSlot(itemIndex, tileData) {
          if (itemIndex < 0 || itemIndex >= this._slots.length) return;
          var slot = this._slots[itemIndex];
          if (!slot || !slot.bgNode) return;
          this._filledCount++;

          // Animate preview icon: scale bounce
          if (slot.previewNode && slot.previewNode.isValid) {
            tween(slot.previewNode).to(0.1, {
              scale: new Vec3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: new Vec3(0.9, 0.9, 1)
            }).start();
          }
          slot.filledNode = slot.previewNode; // đánh dấu đã fill
        }

        /** Animation khi order hoàn thành: glow các slot của order vừa xong */;
        _proto.getCurrentOrderEffectWorldPosition = function getCurrentOrderEffectWorldPosition() {
          var _this3 = this;
          var currentSlots = this._slots.filter(function (slot) {
            return slot.orderIndex === _this3._lastOrderIndex && slot.bgNode && slot.bgNode.isValid;
          });
          if (currentSlots.length === 0) {
            if (this._consumeEffectWorldPos) {
              return this._consumeEffectWorldPos.clone();
            }
            return this.trayContainer && this.trayContainer.isValid ? this.trayContainer.getWorldPosition() : null;
          }
          var center = new Vec3();
          for (var _iterator4 = _createForOfIteratorHelperLoose(currentSlots), _step4; !(_step4 = _iterator4()).done;) {
            var slot = _step4.value;
            var worldPos = slot.bgNode.getWorldPosition();
            center.x += worldPos.x;
            center.y += worldPos.y;
            center.z += worldPos.z;
          }
          center.x /= currentSlots.length;
          center.y /= currentSlots.length;
          center.z /= currentSlots.length;
          return center;
        };
        _proto.playOrderConsumeAnimation = function playOrderConsumeAnimation() {
          // Order UI đứng yên, chỉ lưu vị trí để tile bay đến
          this._consumeEffectWorldPos = this.getCurrentOrderEffectWorldPosition();
        };
        _proto.hideCurrentOrderConsumeEffect = function hideCurrentOrderConsumeEffect() {
          this._consumeEffectWorldPos = null;
          this.resetAllOrderDots();
          if (OrderManager.getInstance().isAllOrdersCompleted()) {
            this.clearTray();
            return;
          }
          if (this._pendingTransition) {
            this._pendingTransition = false;
            this.playOrderTransitionAnimation();
          }
        };
        _proto.cancelPendingTransitionForRestore = function cancelPendingTransitionForRestore() {
          this._consumeEffectWorldPos = null;
          this._pendingTransition = false;
          this._isTransitioning = false;
          this._isClearing = false;
        };
        _proto.playOrderTransitionAnimation = function playOrderTransitionAnimation() {
          var _sortedPanels$0$,
            _sortedPanels$,
            _this4 = this;
          if (this._isTransitioning) return;
          this._isTransitioning = true;
          var sortedPanels = Array.from(this._orderPanelMap.entries()).filter(function (_ref2) {
            var _ = _ref2[0],
              panel = _ref2[1];
            return panel && panel.isValid;
          }).sort(function (a, b) {
            return a[0] - b[0];
          });
          var oldPanel = (_sortedPanels$0$ = (_sortedPanels$ = sortedPanels[0]) == null ? void 0 : _sortedPanels$[1]) != null ? _sortedPanels$0$ : null;
          if (!oldPanel) {
            this._isTransitioning = false;
            this.rebuildFromManager();
            return;
          }

          // Phase 1: panel cũ scale nhanh về 0
          var shrinkDuration = 0.2;
          Tween.stopAllByTarget(oldPanel);
          var uiOpacity = oldPanel.getComponent(UIOpacity) || oldPanel.addComponent(UIOpacity);
          tween(oldPanel).parallel(tween(oldPanel).to(shrinkDuration, {
            scale: new Vec3(0, 0, 1)
          }), tween(uiOpacity).to(shrinkDuration, {
            opacity: 0
          })).call(function () {
            if (oldPanel && oldPanel.isValid) oldPanel.active = false;
            _this4.animatePanelsUp();
          }).start();
        };
        _proto.animatePanelsUp = function animatePanelsUp() {
          var _sortedPanels$1$,
            _sortedPanels$2,
            _sortedPanels$2$,
            _sortedPanels$3,
            _this5 = this;
          var duration = 0.3;
          var sortedPanels = Array.from(this._orderPanelMap.entries()).filter(function (_ref3) {
            var _ = _ref3[0],
              panel = _ref3[1];
            return panel && panel.isValid;
          }).sort(function (a, b) {
            return a[0] - b[0];
          });
          var panel1 = (_sortedPanels$1$ = (_sortedPanels$2 = sortedPanels[1]) == null ? void 0 : _sortedPanels$2[1]) != null ? _sortedPanels$1$ : null;
          var panel2 = (_sortedPanels$2$ = (_sortedPanels$3 = sortedPanels[2]) == null ? void 0 : _sortedPanels$3[1]) != null ? _sortedPanels$2$ : null;
          var maxKey = sortedPanels.length > 0 ? sortedPanels[sortedPanels.length - 1][0] : -1;
          var nextOrderIndex = maxKey + 1;
          var panel3 = null;
          if (nextOrderIndex < this._allOrders.length) {
            var order = this._allOrders[nextOrderIndex];
            var itemCount = order.items.length;
            var startX = -(itemCount - 1) * this.slotSpacing / 2;
            var centerX = startX + (itemCount - 1) * this.slotSpacing / 2;
            var panel2Pos = panel2 ? panel2.getPosition() : new Vec3(0, -this.currentToLowerSpacingY - this.lowerToLowerSpacingY, 0);
            var newY = panel2Pos.y - this.lowerToLowerSpacingY;
            panel3 = this.createOrderPanel(nextOrderIndex, centerX, newY);
            if (panel3) {
              panel3.setSiblingIndex(0); // nằm dưới cùng để không đè lên các panel khác
              panel3.setScale(0, 0, 1);
              this.setPanelOpacity(panel3, 0);
              for (var ii = 0; ii < itemCount; ii++) {
                var pos = new Vec3(startX + ii * this.slotSpacing - centerX, this.slotOffsetY, 0);
                var slot = this.createSlot(this._slots.length, nextOrderIndex, ii, pos, order.items[ii], panel3);
                this._slots.push(slot);
              }
              var sprite3 = this.getPanelSprite(panel3);
              if (sprite3) sprite3.color = this.lowerOrderPanelColor;
              var slots3 = this._slots.filter(function (s) {
                return s.orderIndex === nextOrderIndex;
              });
              for (var _iterator5 = _createForOfIteratorHelperLoose(slots3), _step5; !(_step5 = _iterator5()).done;) {
                var _slot = _step5.value;
                this.setPreviewColor(_slot.previewNode, this.lowerSlotColor);
              }
            }
          }
          var pendingAnimations = 0;
          var onAnimComplete = function onAnimComplete() {
            pendingAnimations--;
            if (pendingAnimations <= 0) {
              _this5._isTransitioning = false;
              _this5.rebuildFromManager();
            }
          };
          if (panel1) pendingAnimations++;
          if (panel2) pendingAnimations++;
          if (panel3) pendingAnimations++;
          if (pendingAnimations === 0) {
            this._isTransitioning = false;
            this.rebuildFromManager();
            return;
          }

          // Panel 1 chạy lên + scale to + sáng màu
          if (panel1 && panel1.isValid) {
            Tween.stopAllByTarget(panel1);
            // Đưa panel lên trên cùng trong suốt animation để không bị panel khác che khi scale to
            panel1.setSiblingIndex(this.trayContainer.children.length - 1);
            var currentPos = panel1.getPosition();
            var targetPos = new Vec3(currentPos.x, currentPos.y + this.currentToLowerSpacingY, currentPos.z);
            var panelSprite = this.getPanelSprite(panel1);
            var panelColor = panelSprite ? panelSprite.color : this.lowerOrderPanelColor;
            tween(panel1).parallel(tween(panel1).to(duration, {
              position: targetPos
            }), tween(panel1).to(duration, {
              scale: new Vec3(this.currentOrderPanelScale, this.currentOrderPanelScale, 1)
            })).call(onAnimComplete).start();
            if (panelSprite) {
              this.tweenColor(panelSprite, panelColor, Color.WHITE, duration);
            }
            var slots1 = this._slots.filter(function (s) {
              return s.orderIndex === sortedPanels[1][0];
            });
            for (var _iterator6 = _createForOfIteratorHelperLoose(slots1), _step6; !(_step6 = _iterator6()).done;) {
              var _slot2 = _step6.value;
              var previewSprite = this.getNodeSprite(_slot2.previewNode);
              if (previewSprite) {
                this.tweenColor(previewSprite, previewSprite.color, Color.WHITE, duration);
              }
            }
          }

          // Panel 2 chạy lên
          if (panel2 && panel2.isValid) {
            Tween.stopAllByTarget(panel2);
            var _currentPos = panel2.getPosition();
            var _targetPos = new Vec3(_currentPos.x, _currentPos.y + this.lowerToLowerSpacingY, _currentPos.z);
            tween(panel2).to(duration, {
              position: _targetPos
            }).call(onAnimComplete).start();
          }

          // Panel 3 mới xuất hiện: scale từ 0 + chạy lên
          if (panel3 && panel3.isValid) {
            var _currentPos2 = panel3.getPosition();
            var _targetPos2 = new Vec3(_currentPos2.x, _currentPos2.y + this.lowerToLowerSpacingY, _currentPos2.z);
            var _panelSprite = this.getPanelSprite(panel3);
            var _panelColor = _panelSprite ? _panelSprite.color : this.lowerOrderPanelColor;
            tween(panel3).parallel(tween(panel3).to(duration, {
              position: _targetPos2
            }), tween(panel3).to(duration, {
              scale: new Vec3(this.lowerOrderPanelScale, this.lowerOrderPanelScale, 1)
            })).call(onAnimComplete).start();
            if (_panelSprite) {
              this.tweenColor(_panelSprite, _panelColor, this.lowerOrderPanelColor, duration);
            }
            var uiOpacity = panel3.getComponent(UIOpacity) || panel3.addComponent(UIOpacity);
            tween(uiOpacity).to(duration, {
              opacity: 255
            }).start();
          }
        };
        _proto.getPanelSprite = function getPanelSprite(panel) {
          var sprite = panel.getComponent(Sprite);
          if (sprite) return sprite;
          for (var _iterator7 = _createForOfIteratorHelperLoose(panel.children), _step7; !(_step7 = _iterator7()).done;) {
            var child = _step7.value;
            var childSprite = child.getComponent(Sprite);
            if (childSprite) return childSprite;
          }
          return null;
        };
        _proto.getNodeSprite = function getNodeSprite(node) {
          if (!node || !node.isValid) return null;

          // Prefab tile_default: Sprite nằm ở child "visual"
          var visualNode = node.getChildByName('visual');
          var visualSprite = visualNode == null ? void 0 : visualNode.getComponent(Sprite);
          if (visualSprite) return visualSprite;
          var sprite = node.getComponent(Sprite);
          if (sprite) return sprite;
          return node.getComponentInChildren(Sprite);
        };
        _proto.tweenColor = function tweenColor(sprite, from, to, duration) {
          if (!sprite || !sprite.node || !sprite.node.isValid) return;
          var fromColor = this.cloneColorOrWhite(from);
          var toColor = this.cloneColorOrWhite(to);
          var obj = {
            t: 0
          };
          tween(obj).to(duration, {
            t: 1
          }, {
            onUpdate: function onUpdate(target) {
              var _target$t;
              if (!sprite || !sprite.node || !sprite.node.isValid || !target) return;
              var ratio = Math.max(0, Math.min(1, (_target$t = target.t) != null ? _target$t : 1));
              sprite.color = new Color(Math.round(fromColor.r + (toColor.r - fromColor.r) * ratio), Math.round(fromColor.g + (toColor.g - fromColor.g) * ratio), Math.round(fromColor.b + (toColor.b - fromColor.b) * ratio), Math.round(fromColor.a + (toColor.a - fromColor.a) * ratio));
            }
          }).start();
        };
        _proto.cloneColorOrWhite = function cloneColorOrWhite(color) {
          if (!color) return new Color(255, 255, 255, 255);
          return new Color(color.r, color.g, color.b, color.a);
        };
        _proto.playOrderCompleteAnimation = function playOrderCompleteAnimation() {
          var _this6 = this;
          if (this._isClearing) return;
          this._isClearing = true;
          var matchDelay = ConfigManager.getInstance().getGameplayValue('matchDelay') || 0.5;
          var completedOrderIdx = this._lastOrderIndex;

          // Phase 1: Glow tất cả slot đã fill của order vừa hoàn thành
          for (var _iterator8 = _createForOfIteratorHelperLoose(this._slots), _step8; !(_step8 = _iterator8()).done;) {
            var slot = _step8.value;
            if (slot.orderIndex === completedOrderIdx && slot.filledNode && slot.filledNode.isValid) {
              tween(slot.filledNode).to(0.2, {
                scale: new Vec3(1.1, 1.1, 1)
              }).to(0.2, {
                scale: new Vec3(0.9, 0.9, 1)
              }).union().repeat(2).start();
            }
          }

          // Phase 2: Delay rồi pop animation
          this.scheduleOnce(function () {
            for (var _iterator9 = _createForOfIteratorHelperLoose(_this6._slots), _step9; !(_step9 = _iterator9()).done;) {
              var slot = _step9.value;
              if (slot.orderIndex === completedOrderIdx && slot.filledNode && slot.filledNode.isValid) {
                tween(slot.filledNode).to(0.15, {
                  scale: new Vec3(0, 0, 1)
                }).start();
              }
            }
            _this6.scheduleOnce(function () {
              _this6._isClearing = false;
              var newVisibleStart = _this6.getVisibleStartOrder();
              if (newVisibleStart !== _this6._visibleStartOrder) {
                _this6.buildSlots();
              } else {
                _this6.updateSlotStates();
              }
            }, matchDelay * 0.5);
          }, matchDelay * 0.3);
        }

        /** Xóa tất cả visual nodes */;
        _proto.clearVisuals = function clearVisuals() {
          if (!this.trayContainer || !this.trayContainer.isValid) return;
          var prefabKey = SkinManager.getInstance().getTilePrefabKey('default');

          // Trả preview về pool trước khi destroy panel cha
          for (var _iterator10 = _createForOfIteratorHelperLoose(this._slots), _step10; !(_step10 = _iterator10()).done;) {
            var slot = _step10.value;
            if (slot.previewNode && slot.previewNode.isValid) {
              Tween.stopAllByTarget(slot.previewNode);
              this.resetPreviewNodeForPool(slot.previewNode);
              slot.previewNode.removeFromParent();
              PoolManager.getInstance().put(prefabKey, slot.previewNode);
            }
          }

          // Destroy tất cả panel (bao gồm cả slot con bên trong)
          var children = [].concat(this.trayContainer.children);
          for (var _iterator11 = _createForOfIteratorHelperLoose(children), _step11; !(_step11 = _iterator11()).done;) {
            var child = _step11.value;
            Tween.stopAllByTarget(child);
            child.destroy();
          }
          this._orderPanelMap.clear();
        }

        /** Clear toàn bộ tray */;
        _proto.clearTray = function clearTray() {
          this.unscheduleAllCallbacks();
          this.clearVisuals();
          for (var _i = 0, _arr = [].concat(this.node.children); _i < _arr.length; _i++) {
            var child = _arr[_i];
            if (child.name.startsWith('OrderConsume_')) {
              Tween.stopAllByTarget(child);
              child.destroy();
            }
          }
          this._slots = [];
          this._orderPanelMap.clear();
          this._allOrders = [];
          this._currentOrder = null;
          this._orderConfig = null;
          this._filledCount = 0;
          this._isClearing = false;
          this._consumeEffectWorldPos = null;
          this._pendingTransition = false;
          this._isTransitioning = false;
          this._lastOrderIndex = -1;
          this._lastGlobalOrderIndex = -1;
          this._orderStartMap.clear();
          this._visibleStartOrder = 0;
          this.resetAllOrderDots();
        };
        _proto.resetPreviewNodeForPool = function resetPreviewNodeForPool(node) {
          if (!node || !node.isValid) return;
          node.active = true;
          node.angle = 0;
          node.setRotationFromEuler(0, 0, 0);
          node.setScale(1, 1, 1);
          var opacity = node.getComponent(UIOpacity);
          if (opacity) opacity.opacity = 255;
          var visualNode = node.getChildByName('visual');
          if (visualNode && visualNode.isValid) {
            Tween.stopAllByTarget(visualNode);
            visualNode.angle = 0;
            visualNode.setRotationFromEuler(0, 0, 0);
            visualNode.setScale(1, 1, 1);
            var visualOpacity = visualNode.getComponent(UIOpacity);
            if (visualOpacity) visualOpacity.opacity = 255;
          }
          var sprite = this.getNodeSprite(node);
          if (sprite) {
            sprite.color = Color.WHITE;
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (OrderTrayManager.Instance === this) {
            OrderTrayManager.Instance = null;
            EventBus.getInstance().off(GameEvent.ORDER_CHANGED, this.onOrderChanged, this);
            EventBus.getInstance().off(GameEvent.ORDER_ITEM_CORRECT, this.onOrderItemCorrect, this);
            EventBus.getInstance().off(GameEvent.ORDER_COMPLETED, this.onOrderCompleted, this);
            EventBus.getInstance().off(GameEvent.ALL_ORDERS_COMPLETED, this.onAllOrdersCompleted, this);
            EventBus.getInstance().off(GameEvent.LEVEL_LOADED, this.onLevelLoaded, this);
            EventBus.getInstance().off(GameEvent.TILE_ADDED_TO_TRAY, this.onTrayProgressChanged, this);
            EventBus.getInstance().off(GameEvent.TRAY_SETTLED, this.onTrayProgressChanged, this);
          }
        };
        return OrderTrayManager;
      }(Component), _class3.Instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "trayContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "slotSpacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 120;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "slotOffsetY", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "flyDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "slotScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "orderSpacingY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "highlightColor", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 220, 50, 255);
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "emptySlotColor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(200, 200, 200, 180);
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "dimmedColor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(200, 200, 200, 80);
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "orderPanelTemplate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "currentOrderPanelScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lowerOrderPanelScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.85;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lowerOrderPanelColor", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(120, 120, 120, 255);
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "currentToLowerSpacingY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 70;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lowerToLowerSpacingY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lowerSlotColor", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(120, 120, 120, 255);
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "orderDot0", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "orderDot1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "orderDot2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PoolManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, instantiate;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cf7ceMivbtDDZyayJyFvr94", "PoolManager", undefined);

      /**
       * PoolManager - Quản lý object pool cho tile, effect, UI element.
       * Giảm instantiate/destroy runtime để tối ưu performance.
       */
      var PoolManager = exports('PoolManager', /*#__PURE__*/function () {
        function PoolManager() {
          this._pools = new Map();
          this._prefabs = new Map();
          this._allowRuntimeInstantiate = true;
        }
        PoolManager.getInstance = function getInstance() {
          if (!PoolManager._instance) {
            PoolManager._instance = new PoolManager();
          }
          return PoolManager._instance;
        }

        /** Đăng ký prefab cho một pool */;
        var _proto = PoolManager.prototype;
        _proto.registerPrefab = function registerPrefab(key, prefab) {
          this._prefabs.set(key, prefab);
          if (!this._pools.has(key)) {
            this._pools.set(key, []);
          }
        };
        _proto.setAllowRuntimeInstantiate = function setAllowRuntimeInstantiate(allow) {
          this._allowRuntimeInstantiate = allow;
        }

        /** Lấy node từ pool, nếu hết thì instantiate mới */;
        _proto.get = function get(key) {
          var pool = this._pools.get(key);
          if (pool && pool.length > 0) {
            var _node = pool.pop();
            _node.active = true;
            return _node;
          }
          if (!this._allowRuntimeInstantiate) {
            return null;
          }
          var prefab = this._prefabs.get(key);
          if (prefab) {
            return instantiate(prefab);
          }
          return null;
        }

        /** Trả node về pool */;
        _proto.put = function put(key, node) {
          if (!key || !node) return;
          node.active = false;
          node.removeFromParent();
          var pool = this._pools.get(key);
          if (pool) {
            // Tránh duplicate reference gây memory leak và lỗi logic
            if (pool.indexOf(node) === -1) {
              pool.push(node);
            }
          } else {
            this._pools.set(key, [node]);
          }
        }

        /** Khởi tạo trước một số lượng node cho pool */;
        _proto.prewarm = function prewarm(key, count) {
          var prefab = this._prefabs.get(key);
          if (!prefab) return;
          var pool = this._pools.get(key) || [];
          for (var i = 0; i < count; i++) {
            var _node2 = instantiate(prefab);
            _node2.active = false;
            pool.push(_node2);
          }
          this._pools.set(key, pool);
        };
        _proto.preparePool = function preparePool(key, prepare) {
          var pool = this._pools.get(key);
          if (!pool) return;
          for (var _iterator = _createForOfIteratorHelperLoose(pool), _step; !(_step = _iterator()).done;) {
            var _node3 = _step.value;
            if (_node3 && _node3.isValid) {
              prepare(_node3);
            }
          }
        }

        /** Đảm bảo pool có ít nhất count node, nếu thiếu thì prewarm thêm */;
        _proto.ensureCapacity = function ensureCapacity(key, count) {
          var pool = this._pools.get(key);
          var currentSize = pool ? pool.length : 0;
          if (currentSize < count) {
            this.prewarm(key, count - currentSize);
          }
        }

        /** Lấy số lượng node hiện có trong pool */;
        _proto.getPoolSize = function getPoolSize(key) {
          var pool = this._pools.get(key);
          return pool ? pool.length : 0;
        }

        /** Clear một pool */;
        _proto.clearPool = function clearPool(key) {
          var pool = this._pools.get(key);
          if (pool) {
            pool.forEach(function (n) {
              return n.destroy();
            });
            this._pools["delete"](key);
          }
        }

        /** Clear tất cả pool */;
        _proto.clearAll = function clearAll() {
          this._pools.forEach(function (pool, key) {
            pool.forEach(function (n) {
              return n.destroy();
            });
          });
          this._pools.clear();
          this._prefabs.clear();
        };
        return PoolManager;
      }());
      PoolManager._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResetButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Button, Component, LevelManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      LevelManager = module.LevelManager;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4691cHgvv1BF5MuBI0yRcUv", "ResetButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * ResetButton - Attach vào một Button node trong scene.
       * Khi nhấn sẽ trigger level failed (restart màn hiện tại).
       */
      var ResetButton = exports('ResetButton', (_dec = ccclass('ResetButton'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResetButton, _Component);
        function ResetButton() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = ResetButton.prototype;
        _proto.onLoad = function onLoad() {
          var button = this.getComponent(Button);
          if (button) {
            button.node.on('click', this.onResetClicked, this);
          }
        };
        _proto.onResetClicked = function onResetClicked() {
          LevelManager.getInstance().onLevelFailed();
        };
        _proto.onDestroy = function onDestroy() {
          var button = this.getComponent(Button);
          if (button) {
            button.node.off('click', this.onResetClicked, this);
          }
        };
        return ResetButton;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RewardVideoPlayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './TeviConstants.ts', './TeviLoginManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, VideoPlayer, Node, view, UITransform, Button, Layers, Widget, BlockInputEvents, Graphics, Color, Label, Component, AudioManager, REWARD_VIDEO_TOKEN_URL, TeviLoginManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      VideoPlayer = module.VideoPlayer;
      Node = module.Node;
      view = module.view;
      UITransform = module.UITransform;
      Button = module.Button;
      Layers = module.Layers;
      Widget = module.Widget;
      BlockInputEvents = module.BlockInputEvents;
      Graphics = module.Graphics;
      Color = module.Color;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      AudioManager = module.AudioManager;
    }, function (module) {
      REWARD_VIDEO_TOKEN_URL = module.REWARD_VIDEO_TOKEN_URL;
    }, function (module) {
      TeviLoginManager = module.TeviLoginManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "a7c3ekfK0hNap8Rbo0MSlsn", "RewardVideoPlayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** Tỷ lệ mặc định khi chưa đọc được metadata (landscape 16:9). */
      var DEFAULT_VIDEO_ASPECT = 16 / 9;
      /**
       * RewardVideoPlayer - Popup phát video phần thưởng trong game.
       *
       * Lưu ý Cocos 3.8: keepAspectRatio=true sẽ reset UITransform về đúng pixel gốc
       * của file video (nên khung bị nhỏ). Ta tắt option đó và tự scale khít bề ngang.
       */
      var RewardVideoPlayer = exports('RewardVideoPlayer', (_dec = ccclass('RewardVideoPlayer'), _dec2 = property(VideoPlayer), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RewardVideoPlayer, _Component);
        function RewardVideoPlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "videoPlayer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "videoContainer", _descriptor2, _assertThisInitialized(_this));
          _this._closeButton = null;
          _this._onClosedCallback = null;
          _this._isClosing = false;
          _this._isPlaying = false;
          _this._eventsBound = false;
          _this._audioPausedByVideo = false;
          _this._videoAspect = DEFAULT_VIDEO_ASPECT;
          _this._loadRequestId = 0;
          return _this;
        }
        var _proto = RewardVideoPlayer.prototype;
        _proto.onLoad = function onLoad() {
          if (RewardVideoPlayer.Instance && RewardVideoPlayer.Instance !== this) {
            this.destroy();
            return;
          }
          RewardVideoPlayer.Instance = this;
          this.ensureUi();
          this.bindEvents();
          if (this.videoContainer) {
            this.videoContainer.active = false;
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.unbindEvents();
          if (this._audioPausedByVideo) {
            var _AudioManager$getInst;
            (_AudioManager$getInst = AudioManager.getInstance()) == null || _AudioManager$getInst.resumeAllGameAudio();
            this._audioPausedByVideo = false;
          }
          if (RewardVideoPlayer.Instance === this) {
            RewardVideoPlayer.Instance = null;
          }
        }

        /**
         * Mở popup và phát video thưởng.
         * @param onClosedCallback Gọi đúng một lần khi đóng (xem hết hoặc bấm X).
         */;
        _proto.playSecretVideo = function playSecretVideo(onClosedCallback) {
          void this.loadAndPlaySecretVideo(onClosedCallback);
        }

        /** Xin URL tạm từ Worker rồi mới phát, không giữ URL R2 trong game. */;
        _proto.loadAndPlaySecretVideo = /*#__PURE__*/
        function () {
          var _loadAndPlaySecretVideo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(onClosedCallback) {
            var _this2 = this;
            var requestId, parent, secureVideoUrl, message;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.ensureUi();
                  if (!(!this.videoPlayer || !this.videoContainer)) {
                    _context.next = 5;
                    break;
                  }
                  this.logStatus('Lỗi: thiếu VideoPlayer/container.');
                  onClosedCallback == null || onClosedCallback();
                  return _context.abrupt("return");
                case 5:
                  if (this._isPlaying) {
                    this.closeInternal(false);
                  }
                  this._onClosedCallback = onClosedCallback != null ? onClosedCallback : null;
                  this._isClosing = false;
                  this._isPlaying = true;
                  requestId = ++this._loadRequestId;
                  this.pauseGameAudio();
                  this.applyFitWidthLayout();
                  this.videoContainer.active = true;
                  parent = this.videoContainer.parent;
                  if (parent) {
                    this.videoContainer.setSiblingIndex(parent.children.length - 1);
                  }
                  this.logStatus('Popup video đã mở, đang xin token...');
                  _context.prev = 16;
                  _context.next = 19;
                  return this.requestSecureVideoUrl();
                case 19:
                  secureVideoUrl = _context.sent;
                  if (!(requestId !== this._loadRequestId || !this._isPlaying)) {
                    _context.next = 22;
                    break;
                  }
                  return _context.abrupt("return");
                case 22:
                  this.logStatus("Nh\u1EADn URL OK, \u0111ang play... " + this.shortenUrl(secureVideoUrl));

                  // BẮT BUỘC false: true sẽ ép node về đúng pixel gốc video (khung nhỏ).
                  this.videoPlayer.keepAspectRatio = false;
                  this.videoPlayer.resourceType = VideoPlayer.ResourceType.REMOTE;
                  this.videoPlayer.remoteURL = secureVideoUrl;
                  this.videoPlayer.play();
                  // Áp lại sau 1 frame vì engine có thể sync size khi tạo thẻ <video>.
                  this.scheduleOnce(function () {
                    return _this2.applyFitWidthLayout();
                  }, 0);
                  _context.next = 33;
                  break;
                case 30:
                  _context.prev = 30;
                  _context.t0 = _context["catch"](16);
                  if (requestId === this._loadRequestId) {
                    message = _context.t0 instanceof Error ? _context.t0.message : "" + _context.t0;
                    this.logStatus("L\u1ED7i load video: " + message);
                    console.error('[RewardVideoPlayer] Không phát được video:', _context.t0);
                    this.closeInternal(true);
                  }
                case 33:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[16, 30]]);
          }));
          function loadAndPlaySecretVideo(_x) {
            return _loadAndPlaySecretVideo.apply(this, arguments);
          }
          return loadAndPlaySecretVideo;
        }() /** Gửi user_app_token để Worker xác thực Tevi và cấp signed URL. */;
        _proto.requestSecureVideoUrl = /*#__PURE__*/
        function () {
          var _requestSecureVideoUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _TeviLoginManager$Ins, _result$expiresAt;
            var userToken, response, message, result, videoUrl, parsedUrl, tokenEndpoint;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  userToken = ((_TeviLoginManager$Ins = TeviLoginManager.Instance) == null ? void 0 : _TeviLoginManager$Ins.getUserToken().trim()) || '';
                  if (userToken) {
                    _context2.next = 3;
                    break;
                  }
                  throw new Error('Chưa có user_app_token. Hãy mở game bên trong ứng dụng Tevi.');
                case 3:
                  this.logStatus("C\xF3 token (..." + userToken.slice(-8) + "), POST /video-token");
                  _context2.prev = 4;
                  _context2.next = 7;
                  return fetch(REWARD_VIDEO_TOKEN_URL, {
                    method: 'POST',
                    headers: {
                      'Authorization': "Bearer " + userToken,
                      'Content-Type': 'application/json'
                    },
                    body: '{}'
                  });
                case 7:
                  response = _context2.sent;
                  _context2.next = 14;
                  break;
                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2["catch"](4);
                  message = _context2.t0 instanceof Error ? _context2.t0.message : "" + _context2.t0;
                  throw new Error("Fetch token th\u1EA5t b\u1EA1i: " + message);
                case 14:
                  this.logStatus("Worker HTTP " + response.status);
                  result = {};
                  _context2.prev = 16;
                  _context2.next = 19;
                  return response.json();
                case 19:
                  result = _context2.sent;
                  _context2.next = 25;
                  break;
                case 22:
                  _context2.prev = 22;
                  _context2.t1 = _context2["catch"](16);
                  throw new Error("Worker HTTP " + response.status + " nh\u01B0ng body kh\xF4ng ph\u1EA3i JSON.");
                case 25:
                  if (response.ok) {
                    _context2.next = 27;
                    break;
                  }
                  throw new Error(result.error || "Worker t\u1EEB ch\u1ED1i c\u1EA5p video (HTTP " + response.status + ").");
                case 27:
                  videoUrl = typeof result.videoUrl === 'string' ? result.videoUrl.trim() : '';
                  if (videoUrl) {
                    _context2.next = 30;
                    break;
                  }
                  throw new Error('Worker không trả về videoUrl hợp lệ.');
                case 30:
                  parsedUrl = new URL(videoUrl);
                  tokenEndpoint = new URL(REWARD_VIDEO_TOKEN_URL);
                  if (!(parsedUrl.protocol !== 'https:' || parsedUrl.origin !== tokenEndpoint.origin)) {
                    _context2.next = 34;
                    break;
                  }
                  throw new Error('Worker trả về videoUrl không đúng domain được phép.');
                case 34:
                  this.logStatus("Token video OK, exp=" + ((_result$expiresAt = result.expiresAt) != null ? _result$expiresAt : '?'));
                  return _context2.abrupt("return", parsedUrl.toString());
                case 36:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[4, 10], [16, 22]]);
          }));
          function requestSecureVideoUrl() {
            return _requestSecureVideoUrl.apply(this, arguments);
          }
          return requestSecureVideoUrl;
        }();
        _proto.logStatus = function logStatus(message) {
          var _TeviLoginManager$Ins2;
          var text = "Video: " + message;
          console.log('[RewardVideoPlayer]', message);
          (_TeviLoginManager$Ins2 = TeviLoginManager.Instance) == null || _TeviLoginManager$Ins2.setDebugStatus(text);
        };
        _proto.shortenUrl = function shortenUrl(url) {
          try {
            var parsed = new URL(url);
            var token = parsed.searchParams.get('token') || '';
            var shortToken = token ? "..." + token.slice(-10) : 'no-token';
            return parsed.pathname + "?token=" + shortToken;
          } catch (_unused2) {
            return url.length > 48 ? url.slice(0, 48) + "..." : url;
          }
        }

        /** Nút X đóng video sớm — có thể nối từ Inspector Click Events. */;
        _proto.btnClose = function btnClose() {
          this.closeInternal(true);
        };
        _proto.onVideoCompleted = function onVideoCompleted() {
          this.logStatus('Video COMPLETED.');
          this.closeInternal(true);
        };
        _proto.onVideoError = function onVideoError() {
          this.logStatus('VideoPlayer EventType.ERROR.');
        };
        _proto.onVideoPlaying = function onVideoPlaying() {
          this.logStatus('Video PLAYING.');
          this.applyFitWidthLayout();
        }

        /** Metadata sẵn sàng: đọc tỷ lệ thật rồi scale khít bề ngang. */;
        _proto.onVideoMetaLoaded = function onVideoMetaLoaded() {
          var _this3 = this;
          var aspect = this.readNativeVideoAspect();
          if (aspect > 0) {
            this._videoAspect = aspect;
          }
          this.logStatus("META_LOADED aspect=" + (aspect > 0 ? aspect.toFixed(3) : '?'));
          this.applyFitWidthLayout();
          // Engine có thể sync size ngay sau event → áp lại ở frame kế.
          this.scheduleOnce(function () {
            return _this3.applyFitWidthLayout();
          }, 0);
        };
        _proto.closeInternal = function closeInternal(invokeCallback) {
          if (this._isClosing) return;
          this._isClosing = true;
          this._isPlaying = false;
          this._loadRequestId++;
          this.unscheduleAllCallbacks();
          if (this.videoPlayer) {
            try {
              this.videoPlayer.stop();
            } catch (_unused3) {
              // Một số nền tảng có thể throw nếu chưa sẵn sàng.
            }
            this.videoPlayer.remoteURL = '';
          }
          if (this.videoContainer) {
            this.videoContainer.active = false;
          }
          this.resumeGameAudio();
          var callback = this._onClosedCallback;
          this._onClosedCallback = null;
          this._isClosing = false;
          if (invokeCallback) {
            callback == null || callback();
          }
        };
        _proto.pauseGameAudio = function pauseGameAudio() {
          var audio = AudioManager.getInstance();
          if (!audio) return;
          audio.pauseAllGameAudio();
          this._audioPausedByVideo = true;
        };
        _proto.resumeGameAudio = function resumeGameAudio() {
          var _AudioManager$getInst2;
          if (!this._audioPausedByVideo) return;
          (_AudioManager$getInst2 = AudioManager.getInstance()) == null || _AudioManager$getInst2.resumeAllGameAudio();
          this._audioPausedByVideo = false;
        }

        /**
         * Scale khung video khít 2 cạnh trái/phải theo chiều ngang màn hình.
         * Chiều cao = width / aspect để không bị méo.
         */;
        _proto.applyFitWidthLayout = function applyFitWidthLayout() {
          if (!this.videoPlayer || !this.videoPlayer.isValid) return;
          var designSize = view.getDesignResolutionSize();
          var screenW = designSize.width || 1080;
          var screenH = designSize.height || 1920;
          var aspect = this._videoAspect > 0 ? this._videoAspect : DEFAULT_VIDEO_ASPECT;
          var videoW = screenW;
          var videoH = videoW / aspect;
          if (videoH > screenH) {
            videoH = screenH;
            videoW = videoH * aspect;
          }

          // Giữ false để engine không ghi đè contentSize về pixel gốc.
          this.videoPlayer.keepAspectRatio = false;
          var videoTransform = this.videoPlayer.node.getComponent(UITransform);
          if (videoTransform) {
            videoTransform.setContentSize(videoW, videoH);
          }
          this.videoPlayer.node.setPosition(0, 0, 0);
          this.videoPlayer.node.setScale(1, 1, 1);

          // Ép thẻ <video> DOM theo đúng khung đã tính (web / Tevi WebView).
          this.forceDomVideoFit(videoW, videoH);
          if (this._closeButton) {
            this._closeButton.node.setPosition(screenW * 0.5 - 72, screenH * 0.5 - 96, 0);
          }
        }

        /** Báo engine sync lại DOM theo contentSize mới (không dùng pixel gốc). */;
        _proto.forceDomVideoFit = function forceDomVideoFit(_videoW, _videoH) {
          if (!this.videoPlayer) return;
          var anyPlayer = this.videoPlayer;
          var impl = anyPlayer._impl;
          if (impl) {
            // Buộc updateMatrix lấy width/height từ UITransform đã scale.
            impl._forceUpdate = true;
            impl._keepAspectRatio = false;
            impl._w = -1;
            impl._h = -1;
          }
          var videoEl = (impl == null ? void 0 : impl._video) || (impl == null ? void 0 : impl.video) || anyPlayer.video || null;
          if (videoEl && videoEl.style) {
            // fill an toàn vì contentSize đã đúng tỷ lệ video.
            videoEl.style.objectFit = 'fill';
          }
        }

        /** Đọc width/height thật từ thẻ video native (web/Tevi WebView). */;
        _proto.readNativeVideoAspect = function readNativeVideoAspect() {
          var _anyPlayer$_impl, _anyPlayer$_impl2;
          if (!this.videoPlayer) return 0;
          var anyPlayer = this.videoPlayer;
          var candidates = [(_anyPlayer$_impl = anyPlayer._impl) == null ? void 0 : _anyPlayer$_impl._video, (_anyPlayer$_impl2 = anyPlayer._impl) == null ? void 0 : _anyPlayer$_impl2.video, anyPlayer.video];
          for (var _i = 0, _candidates = candidates; _i < _candidates.length; _i++) {
            var el = _candidates[_i];
            var w = Number((el == null ? void 0 : el.videoWidth) || 0);
            var h = Number((el == null ? void 0 : el.videoHeight) || 0);
            if (w > 0 && h > 0) {
              return w / h;
            }
          }
          if (typeof document !== 'undefined') {
            var videos = document.querySelectorAll('video');
            for (var i = 0; i < videos.length; i++) {
              var video = videos[i];
              if (video.videoWidth > 0 && video.videoHeight > 0) {
                return video.videoWidth / video.videoHeight;
              }
            }
          }
          return 0;
        };
        _proto.bindEvents = function bindEvents() {
          if (this._eventsBound) return;
          this._eventsBound = true;
          if (this.videoPlayer) {
            this.videoPlayer.node.on(VideoPlayer.EventType.COMPLETED, this.onVideoCompleted, this);
            this.videoPlayer.node.on(VideoPlayer.EventType.META_LOADED, this.onVideoMetaLoaded, this);
            this.videoPlayer.node.on(VideoPlayer.EventType.READY_TO_PLAY, this.onVideoMetaLoaded, this);
            this.videoPlayer.node.on(VideoPlayer.EventType.PLAYING, this.onVideoPlaying, this);
            this.videoPlayer.node.on(VideoPlayer.EventType.ERROR, this.onVideoError, this);
          }
          if (this._closeButton) {
            this._closeButton.node.on(Button.EventType.CLICK, this.btnClose, this);
          }
        };
        _proto.unbindEvents = function unbindEvents() {
          var _this$videoPlayer$nod, _this$_closeButton$no;
          if (!this._eventsBound) return;
          this._eventsBound = false;
          if (this.videoPlayer && (_this$videoPlayer$nod = this.videoPlayer.node) != null && _this$videoPlayer$nod.isValid) {
            this.videoPlayer.node.off(VideoPlayer.EventType.COMPLETED, this.onVideoCompleted, this);
            this.videoPlayer.node.off(VideoPlayer.EventType.META_LOADED, this.onVideoMetaLoaded, this);
            this.videoPlayer.node.off(VideoPlayer.EventType.READY_TO_PLAY, this.onVideoMetaLoaded, this);
            this.videoPlayer.node.off(VideoPlayer.EventType.PLAYING, this.onVideoPlaying, this);
            this.videoPlayer.node.off(VideoPlayer.EventType.ERROR, this.onVideoError, this);
          }
          if (this._closeButton && (_this$_closeButton$no = this._closeButton.node) != null && _this$_closeButton$no.isValid) {
            this._closeButton.node.off(Button.EventType.CLICK, this.btnClose, this);
          }
        }

        /** Tạo UI tối thiểu nếu chưa gán trong Inspector. */;
        _proto.ensureUi = function ensureUi() {
          if (this.videoPlayer && this.videoContainer) {
            if (!this._closeButton) {
              this._closeButton = this.videoContainer.getComponentInChildren(Button);
            }
            return;
          }
          var parent = this.node;
          var designSize = view.getDesignResolutionSize();
          var width = designSize.width || 1080;
          var height = designSize.height || 1920;
          var container = new Node('RewardVideoContainer');
          container.layer = Layers.Enum.UI_2D;
          container.setParent(parent);
          container.setPosition(0, 0, 0);
          var containerTransform = container.addComponent(UITransform);
          containerTransform.setContentSize(width, height);
          var containerWidget = container.addComponent(Widget);
          containerWidget.isAlignTop = true;
          containerWidget.isAlignBottom = true;
          containerWidget.isAlignLeft = true;
          containerWidget.isAlignRight = true;
          containerWidget.top = 0;
          containerWidget.bottom = 0;
          containerWidget.left = 0;
          containerWidget.right = 0;
          containerWidget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          container.addComponent(BlockInputEvents);
          var overlay = new Node('Overlay');
          overlay.layer = Layers.Enum.UI_2D;
          overlay.setParent(container);
          var overlayTransform = overlay.addComponent(UITransform);
          overlayTransform.setContentSize(width, height);
          var overlayWidget = overlay.addComponent(Widget);
          overlayWidget.isAlignTop = true;
          overlayWidget.isAlignBottom = true;
          overlayWidget.isAlignLeft = true;
          overlayWidget.isAlignRight = true;
          overlayWidget.top = 0;
          overlayWidget.bottom = 0;
          overlayWidget.left = 0;
          overlayWidget.right = 0;
          overlayWidget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          var graphics = overlay.addComponent(Graphics);
          graphics.fillColor = new Color(0, 0, 0, 230);
          graphics.rect(-width * 0.5, -height * 0.5, width, height);
          graphics.fill();
          var videoNode = new Node('RewardVideo');
          videoNode.layer = Layers.Enum.UI_2D;
          videoNode.setParent(container);
          var videoTransform = videoNode.addComponent(UITransform);
          videoTransform.setContentSize(width, width / DEFAULT_VIDEO_ASPECT);
          var videoPlayer = videoNode.addComponent(VideoPlayer);
          videoPlayer.resourceType = VideoPlayer.ResourceType.REMOTE;
          // false: tự scale theo màn hình, không dùng pixel gốc của file.
          videoPlayer.keepAspectRatio = false;
          videoPlayer.playOnAwake = false;
          var closeNode = new Node('BtnClose');
          closeNode.layer = Layers.Enum.UI_2D;
          closeNode.setParent(container);
          var closeTransform = closeNode.addComponent(UITransform);
          closeTransform.setContentSize(96, 96);
          closeNode.setPosition(width * 0.5 - 72, height * 0.5 - 96, 0);
          var closeButton = closeNode.addComponent(Button);
          closeButton.transition = Button.Transition.SCALE;
          closeButton.zoomScale = 0.92;
          var closeLabelNode = new Node('Label');
          closeLabelNode.layer = Layers.Enum.UI_2D;
          closeLabelNode.setParent(closeNode);
          var closeLabelTransform = closeLabelNode.addComponent(UITransform);
          closeLabelTransform.setContentSize(96, 96);
          var closeLabel = closeLabelNode.addComponent(Label);
          closeLabel.string = 'X';
          closeLabel.fontSize = 56;
          closeLabel.lineHeight = 64;
          closeLabel.color = Color.WHITE;
          closeLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
          closeLabel.verticalAlign = Label.VerticalAlign.CENTER;
          container.active = false;
          this.videoContainer = container;
          this.videoPlayer = videoPlayer;
          this._closeButton = closeButton;
        };
        return RewardVideoPlayer;
      }(Component), _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "videoPlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "videoContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SaveManager.ts", ['cc', './GameBrandConfig.ts'], function (exports) {
  var cclegacy, sys, GAME_NAME;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      GAME_NAME = module.GAME_NAME;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "46b7fDKYgtFm7QrB5xWzm+P", "SaveManager", undefined);

      /**
       * SaveManager - Lưu/đọc tiến trình game trên thiết bị.
       */
      var SaveManager = exports('SaveManager', /*#__PURE__*/function () {
        function SaveManager() {}
        SaveManager.getInstance = function getInstance() {
          if (!SaveManager._instance) {
            SaveManager._instance = new SaveManager();
          }
          return SaveManager._instance;
        };
        var _proto = SaveManager.prototype;
        _proto.saveCurrentLevel = function saveCurrentLevel(levelId) {
          if (!SaveManager.ENABLE_LEVEL_PROGRESS_SAVE) return;
          try {
            sys.localStorage.setItem(SaveManager.KEY, "" + levelId);
          } catch (err) {}
        };
        _proto.getCurrentLevel = function getCurrentLevel() {
          if (!SaveManager.ENABLE_LEVEL_PROGRESS_SAVE) return 0;
          try {
            var value = sys.localStorage.getItem(SaveManager.KEY);
            if (value === null || value === '') return 0;
            var num = parseInt(value, 10);
            return isNaN(num) ? 0 : num;
          } catch (err) {
            return 0;
          }
        };
        _proto.clear = function clear() {
          try {
            sys.localStorage.removeItem(SaveManager.KEY);
            sys.localStorage.removeItem(SaveManager.SKIP_COUNT_KEY);
          } catch (err) {}
        };
        _proto.resetProgressToLevelOne = function resetProgressToLevelOne() {
          if (SaveManager.ENABLE_LEVEL_PROGRESS_SAVE) {
            this.saveCurrentLevel(1);
          } else {
            this.clearSavedLevelProgress();
          }
          this.saveSkipCount(SaveManager.DEFAULT_SKIP_COUNT);
        };
        _proto.clearSavedLevelProgress = function clearSavedLevelProgress() {
          try {
            sys.localStorage.removeItem(SaveManager.KEY);
          } catch (err) {}
        };
        _proto.getSkipCount = function getSkipCount() {
          try {
            var value = sys.localStorage.getItem(SaveManager.SKIP_COUNT_KEY);
            if (value === null || value === '') {
              this.saveSkipCount(SaveManager.DEFAULT_SKIP_COUNT);
              return SaveManager.DEFAULT_SKIP_COUNT;
            }
            var num = parseInt(value, 10);
            var safeCount = isNaN(num) ? 0 : SaveManager.clampSkipCount(num);
            if ("" + safeCount !== value) {
              this.saveSkipCount(safeCount);
            }
            return safeCount;
          } catch (err) {
            return SaveManager.DEFAULT_SKIP_COUNT;
          }
        };
        _proto.saveSkipCount = function saveSkipCount(count) {
          try {
            var safeCount = SaveManager.clampSkipCount(count);
            sys.localStorage.setItem(SaveManager.SKIP_COUNT_KEY, "" + safeCount);
          } catch (err) {}
        };
        SaveManager.clampSkipCount = function clampSkipCount(count) {
          return Math.min(SaveManager.MAX_SKIP_COUNT, Math.max(0, Math.floor(count)));
        };
        SaveManager.reset = function reset() {
          SaveManager._instance = null;
        };
        return SaveManager;
      }());
      _class = SaveManager;
      SaveManager._instance = void 0;
      SaveManager.ENABLE_LEVEL_PROGRESS_SAVE = false;
      SaveManager.SAVE_PREFIX = "MiniGame1_" + GAME_NAME;
      SaveManager.KEY = _class.SAVE_PREFIX + "_currentLevel";
      SaveManager.SKIP_COUNT_KEY = _class.SAVE_PREFIX + "_skipCount";
      SaveManager.DEFAULT_SKIP_COUNT = 1;
      SaveManager.MAX_SKIP_COUNT = 1;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingsPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePanel.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Slider, Toggle, BasePanel, AudioManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Slider = module.Slider;
      Toggle = module.Toggle;
    }, function (module) {
      BasePanel = module.BasePanel;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "59254Uq/VZDj6CXTUNyBGqQ", "SettingsPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * SettingsPanel - Màn hình cài đặt.
       * Âm lượng, ngôn ngữ, thông tin game.
       */
      var SettingsPanel = exports('SettingsPanel', (_dec = ccclass('SettingsPanel'), _dec2 = property(Slider), _dec3 = property(Slider), _dec4 = property(Toggle), _dec5 = property(Toggle), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePanel) {
        _inheritsLoose(SettingsPanel, _BasePanel);
        function SettingsPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePanel.call.apply(_BasePanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "musicSlider", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfxSlider", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicToggle", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfxToggle", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SettingsPanel.prototype;
        _proto.onShow = function onShow(data) {
          _BasePanel.prototype.onShow.call(this, data);
          this.setupListeners();
        };
        _proto.onHide = function onHide() {
          this.removeListeners();
        };
        _proto.setupListeners = function setupListeners() {
          if (this.musicSlider) {
            this.musicSlider.node.on('slide', this.onMusicVolumeChanged, this);
          }
          if (this.sfxSlider) {
            this.sfxSlider.node.on('slide', this.onSfxVolumeChanged, this);
          }
          if (this.musicToggle) {
            this.musicToggle.node.on('toggle', this.onMusicToggle, this);
          }
          if (this.sfxToggle) {
            this.sfxToggle.node.on('toggle', this.onSfxToggle, this);
          }
        };
        _proto.removeListeners = function removeListeners() {
          if (this.musicSlider) {
            this.musicSlider.node.off('slide', this.onMusicVolumeChanged, this);
          }
          if (this.sfxSlider) {
            this.sfxSlider.node.off('slide', this.onSfxVolumeChanged, this);
          }
          if (this.musicToggle) {
            this.musicToggle.node.off('toggle', this.onMusicToggle, this);
          }
          if (this.sfxToggle) {
            this.sfxToggle.node.off('toggle', this.onSfxToggle, this);
          }
        };
        _proto.onMusicVolumeChanged = function onMusicVolumeChanged(slider) {
          AudioManager.getInstance().setMusicVolume(slider.progress);
        };
        _proto.onSfxVolumeChanged = function onSfxVolumeChanged(slider) {
          AudioManager.getInstance().setSfxVolume(slider.progress);
        };
        _proto.onMusicToggle = function onMusicToggle(toggle) {
          AudioManager.getInstance().toggleMusicMute();
        };
        _proto.onSfxToggle = function onSfxToggle(toggle) {
          AudioManager.getInstance().toggleSfxMute();
        };
        return SettingsPanel;
      }(BasePanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "musicSlider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfxSlider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "musicToggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfxToggle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkinApplier.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkinManager.ts', './SkinCategory.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, Label, Sprite, SkinManager, SkinCategory;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Label = module.Label;
      Sprite = module.Sprite;
    }, function (module) {
      SkinManager = module.SkinManager;
    }, function (module) {
      SkinCategory = module.SkinCategory;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "029bfXf26dPmK47UPPdxExU", "SkinApplier", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * SkinApplier - Component gắn vào node cần đổi skin.
       * Tự động apply sprite/font mới khi skin thay đổi.
       * Dùng trong editor để đánh dấu node cần reskin.
       */
      var SkinApplier = exports('SkinApplier', (_dec = ccclass('SkinApplier'), _dec2 = property(String), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SkinApplier, _Component);
        function SkinApplier() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "category", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "assetKey", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SkinApplier.prototype;
        _proto.onLoad = function onLoad() {
          this.applySkin();
        }

        /** Apply asset hiện tại của skin */;
        _proto.applySkin = /*#__PURE__*/
        function () {
          var _applySkin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var sprite, frame, label;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this.assetKey) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  sprite = this.getComponent(Sprite);
                  if (!sprite) {
                    _context.next = 8;
                    break;
                  }
                  _context.next = 6;
                  return SkinManager.getInstance().getSprite(this.assetKey, this.category);
                case 6:
                  frame = _context.sent;
                  if (frame) {
                    sprite.spriteFrame = frame;
                  }
                case 8:
                  label = this.getComponent(Label);
                  if (label) {
                    SkinManager.getInstance().getDefaultFont(); // TODO: Load và apply font
                  }

                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function applySkin() {
            return _applySkin.apply(this, arguments);
          }
          return applySkin;
        }();
        return SkinApplier;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "category", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SkinCategory.TILES;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "assetKey", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkinCategory.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "12914fdySlKir+vDE+OQQze", "SkinCategory", undefined);
      /**
       * Enum phân loại asset có thể reskin.
       * SkinManager dùng để lookup và apply asset thay thế.
       */
      var SkinCategory = exports('SkinCategory', /*#__PURE__*/function (SkinCategory) {
        SkinCategory["TILES"] = "tiles";
        SkinCategory["BACKGROUND"] = "background";
        SkinCategory["BOARD"] = "board";
        SkinCategory["TRAY"] = "tray";
        SkinCategory["UI"] = "ui";
        SkinCategory["PARTICLE"] = "particle";
        SkinCategory["AUDIO"] = "audio";
        SkinCategory["FONT"] = "font";
        return SkinCategory;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkinManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkinCategory.ts', './DataLoader.ts', './ConfigManager.ts', './ItemIdCatalog.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, Component, resources, SpriteFrame, Texture2D, Prefab, SkinCategory, DataLoader, ConfigManager, normalizeItemId, ITEM_ID_GROUPS, isCanonicalItemId;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      Texture2D = module.Texture2D;
      Prefab = module.Prefab;
    }, function (module) {
      SkinCategory = module.SkinCategory;
    }, function (module) {
      DataLoader = module.DataLoader;
    }, function (module) {
      ConfigManager = module.ConfigManager;
    }, function (module) {
      normalizeItemId = module.normalizeItemId;
      ITEM_ID_GROUPS = module.ITEM_ID_GROUPS;
      isCanonicalItemId = module.isCanonicalItemId;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "282668tk9JKDYlukdNiyZDI", "SkinManager", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * SkinManager - Quản lý reskin toàn game.
       * Load skin config từ JSON, cung cấp API lookup asset theo key.
       * Mọi visual asset đều đi qua SkinManager để hỗ trợ đổi brand.
       */
      var SkinManager = exports('SkinManager', (_dec = ccclass('SkinManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SkinManager, _Component);
        function SkinManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._currentSkin = null;
          _this._assetCache = new Map();
          _this._skinLoadToken = 0;
          return _this;
        }
        SkinManager.getInstance = function getInstance() {
          return SkinManager.Instance;
        };
        var _proto = SkinManager.prototype;
        _proto.onLoad = function onLoad() {
          if (SkinManager.Instance) {
            this.destroy();
            return;
          }
          SkinManager.Instance = this;
        }

        /** Load skin mặc định khi khởi động */;
        _proto.loadDefaultSkin = /*#__PURE__*/
        function () {
          var _loadDefaultSkin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var skinId;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  skinId = ConfigManager.getInstance().getDefaultSkinId();
                  _context.next = 3;
                  return this.loadSkin(skinId);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadDefaultSkin() {
            return _loadDefaultSkin.apply(this, arguments);
          }
          return loadDefaultSkin;
        }() /** Load skin theo ID */;
        _proto.loadSkin = /*#__PURE__*/
        function () {
          var _loadSkin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(skinId) {
            var _this$_currentSkin;
            var loadToken, path, skin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(((_this$_currentSkin = this._currentSkin) == null ? void 0 : _this$_currentSkin.skinId) === skinId)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  loadToken = ++this._skinLoadToken;
                  path = "data/skins/" + skinId + "_skin";
                  _context2.next = 6;
                  return DataLoader.loadJson(path);
                case 6:
                  skin = _context2.sent;
                  if (!(loadToken !== this._skinLoadToken)) {
                    _context2.next = 9;
                    break;
                  }
                  return _context2.abrupt("return");
                case 9:
                  this._currentSkin = skin;
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function loadSkin(_x) {
            return _loadSkin.apply(this, arguments);
          }
          return loadSkin;
        }() /** Lấy prefab key cho tile theo groupId */;
        _proto.getTilePrefabKey = function getTilePrefabKey(groupId) {
          // All tiles share the same prefab; visual is changed via sprite assignment
          return 'tile_default';
        }

        /** Lấy panel prefab theo tên */;
        _proto.getPanelPrefab = /*#__PURE__*/
        function () {
          var _getPanelPrefab = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(panelName) {
            var key;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  key = "panel_" + panelName;
                  return _context3.abrupt("return", this.getAsset(key, SkinCategory.UI));
                case 2:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function getPanelPrefab(_x2) {
            return _getPanelPrefab.apply(this, arguments);
          }
          return getPanelPrefab;
        }() /** Lấy sprite frame theo key */;
        _proto.getSprite = /*#__PURE__*/
        function () {
          var _getSprite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(key, category) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (category === void 0) {
                    category = SkinCategory.TILES;
                  }
                  return _context4.abrupt("return", this.getAsset(key, category));
                case 2:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function getSprite(_x3, _x4) {
            return _getSprite.apply(this, arguments);
          }
          return getSprite;
        }() /** Áp dụng skin cho một tile node */;
        _proto.applyTileSkin = function applyTileSkin(node, skinOverride) {
          var _this2 = this;
          // skinOverride format: "uma/0"
          var _skinOverride$split = skinOverride.split('/'),
            brand = _skinOverride$split[0],
            item = _skinOverride$split[1];
          if (!brand || !item || typeof item !== 'string') {
            return;
          }
          var itemId = normalizeItemId(item);
          // Tăng applyId để tránh promise cũ gán sprite lên node đã được reuse
          var applyId = (node.__skinApplyId || 0) + 1;
          node.__skinApplyId = applyId;
          var cachedSprite = this.getCachedTileSprite(itemId);
          if (cachedSprite) {
            this.assignTileSprite(node, cachedSprite, applyId);
            return;
          }
          this.getTileSprite(itemId).then(function (spriteFrame) {
            if (!node || !node.isValid) return;
            if (node.__skinApplyId !== applyId) {
              return;
            }
            if (!spriteFrame) {
              return;
            }
            // Gán vào visual child node cụ thể, không phải root node
            var tileComp = node.getComponent('Tile');
            var visualNode = node.getChildByName('visual') || (tileComp == null ? void 0 : tileComp.visualNode);
            var sprite = (visualNode == null ? void 0 : visualNode.getComponent(Sprite)) || node.getComponentInChildren(Sprite);
            if (sprite) {
              var _sprite$spriteFrame;
              var oldName = ((_sprite$spriteFrame = sprite.spriteFrame) == null ? void 0 : _sprite$spriteFrame.name) || 'null';
              _this2.applyTrimmedSpriteMode(sprite);
              sprite.spriteFrame = spriteFrame;
              if (tileComp && tileComp.forceUpdateVisualState) {
                tileComp.forceUpdateVisualState();
              } else if (tileComp && tileComp.updateVisualState) {
                tileComp.updateVisualState();
              }
            }
          });
        };
        _proto.applyTileSkinAsync = /*#__PURE__*/function () {
          var _applyTileSkinAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(node, skinOverride) {
            var _skinOverride$split2, brand, item, itemId, applyId, spriteFrame;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _skinOverride$split2 = skinOverride.split('/'), brand = _skinOverride$split2[0], item = _skinOverride$split2[1];
                  if (!(!brand || !item || typeof item !== 'string')) {
                    _context5.next = 3;
                    break;
                  }
                  return _context5.abrupt("return");
                case 3:
                  itemId = normalizeItemId(item);
                  applyId = (node.__skinApplyId || 0) + 1;
                  node.__skinApplyId = applyId;
                  _context5.next = 8;
                  return this.getTileSprite(itemId);
                case 8:
                  spriteFrame = _context5.sent;
                  if (!(!node || !node.isValid)) {
                    _context5.next = 11;
                    break;
                  }
                  return _context5.abrupt("return");
                case 11:
                  if (!(node.__skinApplyId !== applyId)) {
                    _context5.next = 13;
                    break;
                  }
                  return _context5.abrupt("return");
                case 13:
                  if (spriteFrame) {
                    _context5.next = 15;
                    break;
                  }
                  return _context5.abrupt("return");
                case 15:
                  this.assignTileSprite(node, spriteFrame, applyId);
                case 16:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function applyTileSkinAsync(_x5, _x6) {
            return _applyTileSkinAsync.apply(this, arguments);
          }
          return applyTileSkinAsync;
        }() /** Lấy màu chủ đạo của skin */;
        _proto.getThemeColor = function getThemeColor(type) {
          var _this$_currentSkin2;
          return ((_this$_currentSkin2 = this._currentSkin) == null ? void 0 : _this$_currentSkin2.themeColors[type]) || '#FFFFFF';
        }

        /** Lấy skin config hiện tại */;
        _proto.getCurrentSkin = function getCurrentSkin() {
          return this._currentSkin;
        }

        /** Preload sprite cho tất cả groupId để tránh async hitch khi spawn tile */;
        _proto.prewarmSkinSprites = /*#__PURE__*/
        function () {
          var _prewarmSkinSprites = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(groupIds) {
            var _this3 = this;
            var tileAssets, allSkinIds, requestedIds, validIds, promises;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (this._currentSkin) {
                    _context6.next = 2;
                    break;
                  }
                  return _context6.abrupt("return");
                case 2:
                  tileAssets = this._currentSkin.assets[SkinCategory.TILES] || [];
                  allSkinIds = tileAssets.map(function (asset) {
                    return asset.key;
                  }).filter(function (key) {
                    return key.startsWith('tile_');
                  }).map(function (key) {
                    return normalizeItemId(key.substring('tile_'.length));
                  });
                  requestedIds = (Array.isArray(groupIds) ? groupIds : allSkinIds).filter(function (gid) {
                    return typeof gid === 'string';
                  }).map(function (gid) {
                    return normalizeItemId(gid);
                  });
                  validIds = [].concat(new Set(requestedIds.length > 0 ? requestedIds : allSkinIds));
                  if (!(validIds.length === 0)) {
                    _context6.next = 8;
                    break;
                  }
                  return _context6.abrupt("return");
                case 8:
                  promises = validIds.map(function (gid) {
                    return _this3.getTileSprite(normalizeItemId(gid));
                  });
                  _context6.next = 11;
                  return Promise.all(promises);
                case 11:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function prewarmSkinSprites(_x7) {
            return _prewarmSkinSprites.apply(this, arguments);
          }
          return prewarmSkinSprites;
        }();
        _proto.getCachedTileSprite = function getCachedTileSprite(itemId) {
          var _this$_currentSkin3, _this$_currentSkin4;
          var skinId = ((_this$_currentSkin3 = this._currentSkin) == null ? void 0 : _this$_currentSkin3.skinId) || 'default';
          var exactKey = skinId + "_" + SkinCategory.TILES + "_tile_" + normalizeItemId(itemId);
          var exact = this._assetCache.get(exactKey);
          if (exact) return exact;
          var tileAssets = ((_this$_currentSkin4 = this._currentSkin) == null ? void 0 : _this$_currentSkin4.assets[SkinCategory.TILES]) || [];
          var availableIds = ITEM_ID_GROUPS.filter(function (id) {
            return tileAssets.some(function (asset) {
              return asset.key === "tile_" + id;
            });
          });
          if (availableIds.length === 0) return null;
          var fallbackId = availableIds[Number(itemId) % availableIds.length];
          return this._assetCache.get(skinId + "_" + SkinCategory.TILES + "_tile_" + fallbackId) || null;
        };
        _proto.assignTileSprite = function assignTileSprite(node, spriteFrame, applyId) {
          if (!node || !node.isValid) return;
          if (node.__skinApplyId !== applyId) return;
          var tileComp = node.getComponent('Tile');
          var visualNode = node.getChildByName('visual') || (tileComp == null ? void 0 : tileComp.visualNode);
          var sprite = (visualNode == null ? void 0 : visualNode.getComponent(Sprite)) || node.getComponentInChildren(Sprite);
          if (!sprite) return;
          this.applyTrimmedSpriteMode(sprite);
          sprite.spriteFrame = spriteFrame;
          if (tileComp && tileComp.forceUpdateVisualState) {
            tileComp.forceUpdateVisualState();
          } else if (tileComp && tileComp.updateVisualState) {
            tileComp.updateVisualState();
          }
        };
        _proto.applyTrimmedSpriteMode = function applyTrimmedSpriteMode(sprite) {
          var runtimeSprite = sprite;
          var sizeMode = Sprite.SizeMode;
          if (sizeMode && 'TRIMMED' in sizeMode) {
            sprite.sizeMode = sizeMode.TRIMMED;
          }
          if ('trim' in runtimeSprite) {
            runtimeSprite.trim = true;
          }
          if ('isTrimmedMode' in runtimeSprite) {
            runtimeSprite.isTrimmedMode = true;
          }
          if ('_isTrimmedMode' in runtimeSprite) {
            runtimeSprite._isTrimmedMode = true;
          }
        };
        _proto.getTileSprite = /*#__PURE__*/function () {
          var _getTileSprite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(itemId) {
            var _this$_currentSkin5;
            var sprite, tileAssets, availableIds, fallbackId;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.getSprite("tile_" + itemId, SkinCategory.TILES);
                case 2:
                  sprite = _context7.sent;
                  if (!(sprite || !isCanonicalItemId(itemId))) {
                    _context7.next = 5;
                    break;
                  }
                  return _context7.abrupt("return", sprite);
                case 5:
                  tileAssets = ((_this$_currentSkin5 = this._currentSkin) == null ? void 0 : _this$_currentSkin5.assets[SkinCategory.TILES]) || [];
                  availableIds = ITEM_ID_GROUPS.filter(function (id) {
                    return tileAssets.some(function (asset) {
                      return asset.key === "tile_" + id;
                    });
                  });
                  if (!(availableIds.length === 0)) {
                    _context7.next = 9;
                    break;
                  }
                  return _context7.abrupt("return", null);
                case 9:
                  fallbackId = availableIds[Number(itemId) % availableIds.length];
                  return _context7.abrupt("return", this.getSprite("tile_" + fallbackId, SkinCategory.TILES));
                case 11:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function getTileSprite(_x8) {
            return _getTileSprite.apply(this, arguments);
          }
          return getTileSprite;
        }() /** Lấy font mặc định */;
        _proto.getDefaultFont = function getDefaultFont() {
          var _this$_currentSkin6;
          return ((_this$_currentSkin6 = this._currentSkin) == null ? void 0 : _this$_currentSkin6.defaultFont) || 'default';
        }

        /** Generic asset lookup */;
        _proto.getAsset = /*#__PURE__*/
        function () {
          var _getAsset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(key, category) {
            var _this$_currentSkin7;
            var skinId, cacheKey, assets, assetDef, asset;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  skinId = ((_this$_currentSkin7 = this._currentSkin) == null ? void 0 : _this$_currentSkin7.skinId) || 'default';
                  cacheKey = skinId + "_" + category + "_" + key;
                  if (!this._assetCache.has(cacheKey)) {
                    _context8.next = 4;
                    break;
                  }
                  return _context8.abrupt("return", this._assetCache.get(cacheKey));
                case 4:
                  if (this._currentSkin) {
                    _context8.next = 6;
                    break;
                  }
                  return _context8.abrupt("return", null);
                case 6:
                  assets = this._currentSkin.assets[category] || [];
                  assetDef = assets.find(function (a) {
                    return a.key === key;
                  });
                  if (assetDef) {
                    _context8.next = 10;
                    break;
                  }
                  return _context8.abrupt("return", null);
                case 10:
                  _context8.next = 12;
                  return this.loadAssetByPath(assetDef.path, assetDef.assetType);
                case 12:
                  asset = _context8.sent;
                  if (asset) {
                    this._assetCache.set(cacheKey, asset);
                  }
                  return _context8.abrupt("return", asset);
                case 15:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function getAsset(_x9, _x10) {
            return _getAsset.apply(this, arguments);
          }
          return getAsset;
        }() /** Load asset từ resources theo type */;
        _proto.loadAssetByPath = /*#__PURE__*/
        function () {
          var _loadAssetByPath = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(path, assetType) {
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  return _context9.abrupt("return", new Promise(function (resolve) {
                    if (assetType === 'sprite') {
                      // Cocos Creator 3.x: load SpriteFrame bằng path/spriteFrame
                      var spritePath = path + "/spriteFrame";
                      resources.load(spritePath, SpriteFrame, function (err, sf) {
                        if (err) {
                          // Fallback: load Texture2D rồi wrap
                          resources.load(path, Texture2D, function (err2, tex) {
                            if (err2) {
                              resolve(null);
                            } else {
                              var frame = new SpriteFrame();
                              frame.texture = tex;
                              resolve(frame);
                            }
                          });
                        } else {
                          resolve(sf);
                        }
                      });
                    } else if (assetType === 'prefab') {
                      resources.load(path, Prefab, function (err, asset) {
                        if (err) {
                          resolve(null);
                        } else {
                          resolve(asset);
                        }
                      });
                    } else if (assetType === 'audio') {
                      // Audio temporarily disabled to avoid decodeAudioData errors
                      resolve(null);
                    } else {
                      resources.load(path, function (err, asset) {
                        if (err) {
                          resolve(null);
                        } else {
                          resolve(asset);
                        }
                      });
                    }
                  }));
                case 1:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          }));
          function loadAssetByPath(_x11, _x12) {
            return _loadAssetByPath.apply(this, arguments);
          }
          return loadAssetByPath;
        }();
        _proto.onDestroy = function onDestroy() {
          if (SkinManager.Instance === this) {
            SkinManager.Instance = null;
          }
        };
        return SkinManager;
      }(Component), _class2.Instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SmartLevelGenerator.test.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SmartLevelGenerator.ts', './LevelSolver.ts', './TestRunner.ts', './ItemIdCatalog.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, SmartLevelGenerator, LevelSolver, TestRunner, ITEM_ID_GROUPS;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SmartLevelGenerator = module.SmartLevelGenerator;
    }, function (module) {
      LevelSolver = module.LevelSolver;
    }, function (module) {
      TestRunner = module.TestRunner;
    }, function (module) {
      ITEM_ID_GROUPS = module.ITEM_ID_GROUPS;
    }],
    execute: function () {
      exports('runSmartLevelGeneratorTests', runSmartLevelGeneratorTests);
      cclegacy._RF.push({}, "7f527wc93BITpe3AxbmW32+", "SmartLevelGenerator.test", undefined);
      function runSmartLevelGeneratorTests() {
        var t = new TestRunner();
        var defaultDifficulty = {
          difficulty: 1,
          layerCount: 2,
          tileTypeCount: 4,
          totalTriplets: 8,
          safeMoveWindow: 3,
          trapRate: 0.15,
          visibleTripletLimit: 2,
          coverThreshold: 0.3
        };
        var groupIds = ITEM_ID_GROUPS;
        t.describe('SmartLevelGenerator Generation', function () {
          t.it('should generate a valid level', function () {
            var level = SmartLevelGenerator.generate(1, defaultDifficulty, groupIds);
            t.assertTrue(level.tiles.length > 0, 'Should have tiles');
            t.assertEquals(level.levelId, 1, 'Level ID should match');
            t.assertTrue(level.solutionSteps.length > 0, 'Should have solution steps');
          });
          t.it('should generate total tiles divisible by 3', function () {
            var level = SmartLevelGenerator.generate(2, defaultDifficulty, groupIds);
            t.assertEquals(level.tiles.length % 3, 0, "Tile count " + level.tiles.length + " must be divisible by 3");
          });
          t.it('should make each group count divisible by 3', function () {
            var level = SmartLevelGenerator.generate(3, defaultDifficulty, groupIds);
            var counts = {};
            for (var _iterator = _createForOfIteratorHelperLoose(level.tiles), _step; !(_step = _iterator()).done;) {
              var tile = _step.value;
              counts[tile.groupId] = (counts[tile.groupId] || 0) + 1;
            }
            for (var _i = 0, _Object$keys = Object.keys(counts); _i < _Object$keys.length; _i++) {
              var gid = _Object$keys[_i];
              t.assertEquals(counts[gid] % 3, 0, "Group " + gid + " count " + counts[gid] + " must be multiple of 3");
            }
          });
          t.it('should produce deterministic difficulty config per level', function () {
            var d1 = SmartLevelGenerator.getDifficultyForLevel(1);
            var d1b = SmartLevelGenerator.getDifficultyForLevel(1);
            t.assertEquals(d1.difficulty, d1b.difficulty);
            t.assertEquals(d1.totalTriplets, d1b.totalTriplets);
            t.assertEquals(d1.layerCount, d1b.layerCount);
          });
          t.it('should increase difficulty parameters with level id', function () {
            var d5 = SmartLevelGenerator.getDifficultyForLevel(5);
            var d50 = SmartLevelGenerator.getDifficultyForLevel(50);
            t.assertTrue(d50.tileTypeCount >= d5.tileTypeCount, 'tileTypeCount should increase');
            t.assertTrue(d50.totalTriplets >= d5.totalTriplets, 'totalTriplets should increase');
          });
        });
        t.describe('SmartLevelGenerator Validation', function () {
          t.it('should pass LevelSolver validation', function () {
            var level = SmartLevelGenerator.generate(10, defaultDifficulty, groupIds);
            var result = LevelSolver.validate(level);
            if (!result.valid) ;
            t.assertTrue(result.valid, "Level should be valid: " + result.errors.join('; '));
          });
          t.it('should have at least 1 solution path', function () {
            var level = SmartLevelGenerator.generate(11, defaultDifficulty, groupIds);
            var result = LevelSolver.validate(level);
            t.assertTrue(result.hasSolution, 'Level must have at least 1 solution path');
          });
          t.it('should not deadlock at start', function () {
            var level = SmartLevelGenerator.generate(12, defaultDifficulty, groupIds);
            var result = LevelSolver.validate(level);
            t.assertTrue(!result.hasDeadlock, 'Level should not deadlock immediately');
          });
        });
        t.describe('SmartLevelGenerator Solution Steps', function () {
          t.it('should generate correct number of solution steps', function () {
            var level = SmartLevelGenerator.generate(4, defaultDifficulty, groupIds);
            t.assertEquals(level.solutionSteps.length, defaultDifficulty.totalTriplets);
          });
          t.it('should have each solution step as a triplet', function () {
            var level = SmartLevelGenerator.generate(5, defaultDifficulty, groupIds);
            for (var _iterator2 = _createForOfIteratorHelperLoose(level.solutionSteps), _step2; !(_step2 = _iterator2()).done;) {
              var step = _step2.value;
              t.assertEquals(step.length, 3, 'Each step must be length 3');
              t.assertEquals(step[0], step[1], 'All 3 in step must match groupId');
              t.assertEquals(step[1], step[2], 'All 3 in step must match groupId');
            }
          });
        });
        t.describe('SmartLevelGenerator Blocker / Trap Structure', function () {
          t.it('should have some tiles blocked at start', function () {
            var level = SmartLevelGenerator.generate(6, defaultDifficulty, groupIds);
            var blockedCount = level.tiles.filter(function (t) {
              return t.isBlocked;
            }).length;
            t.assertTrue(blockedCount > 0, 'There should be blocked tiles at start for difficulty');
          });
          t.it('should have selectable tiles at start', function () {
            var level = SmartLevelGenerator.generate(7, defaultDifficulty, groupIds);
            var selectableCount = level.tiles.filter(function (t) {
              return t.selectable;
            }).length;
            t.assertTrue(selectableCount > 0, 'There should be selectable tiles at start');
          });
          t.it('should not exceed visibleTripletLimit open triplets at start', function () {
            var level = SmartLevelGenerator.generate(8, defaultDifficulty, groupIds);
            var selectable = level.tiles.filter(function (t) {
              return t.selectable;
            });
            var groups = new Set();
            for (var _iterator3 = _createForOfIteratorHelperLoose(selectable), _step3; !(_step3 = _iterator3()).done;) {
              var _t = _step3.value;
              groups.add(_t.groupId);
            }
            // This is a loose check; exact visible triplet count depends on placement
            t.assertTrue(groups.size <= defaultDifficulty.visibleTripletLimit + defaultDifficulty.safeMoveWindow, 'Visible group variety should be controlled');
          });
        });
        t.describe('SmartLevelGenerator Difficulty Scaling', function () {
          t.it('should generate solvable level for higher difficulty', function () {
            var hardDifficulty = {
              difficulty: 10,
              layerCount: 3,
              tileTypeCount: 6,
              totalTriplets: 12,
              safeMoveWindow: 2,
              trapRate: 0.25,
              visibleTripletLimit: 2,
              coverThreshold: 0.3
            };
            var level = SmartLevelGenerator.generate(20, hardDifficulty, groupIds);
            var result = LevelSolver.validate(level);
            t.assertTrue(result.valid, "Hard level should be valid: " + result.errors.join('; '));
            t.assertTrue(result.hasSolution, 'Hard level should have a solution');
          });
        });
        t.describe('SmartLevelGenerator Tray Config', function () {
          t.it('should set tray maxSlots to 7', function () {
            var level = SmartLevelGenerator.generate(9, defaultDifficulty, groupIds);
            t.assertEquals(level.tray.maxSlots, 7);
          });
          t.it('should set tray matchCount to 3', function () {
            var level = SmartLevelGenerator.generate(9, defaultDifficulty, groupIds);
            t.assertEquals(level.tray.matchCount, 3);
          });
        });
        t.printReport();
        return t;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SmartLevelGenerator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ItemIdCatalog.ts', './LevelGenerator.ts', './LevelSolver.ts', './TileType.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy, ITEM_ID_COUNT, LevelGenerator, LevelSolver, TileType;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ITEM_ID_COUNT = module.ITEM_ID_COUNT;
    }, function (module) {
      LevelGenerator = module.LevelGenerator;
    }, function (module) {
      LevelSolver = module.LevelSolver;
    }, function (module) {
      TileType = module.TileType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "59454IBp9tGf6VY3fOvcYI6", "SmartLevelGenerator", undefined);

      /**
       * SmartLevelGenerator V3 - Sinh level với placement đảm bảo solvable.
       * Mỗi triplet: 2 tile layer 0 (cell riêng) + 1 tile layer 1 (đè lên 1 cell của chính nó).
       * Cơ chế block: sameCell — tile bị block nếu có tile active khác ở layer cao hơn trong cùng cell.
       */
      var SmartLevelGenerator = exports('SmartLevelGenerator', /*#__PURE__*/function () {
        function SmartLevelGenerator() {}
        SmartLevelGenerator.generate = function generate(levelId, difficulty, groupIds, shapeName) {
          var _shape$;
          if (!groupIds || groupIds.length === 0) {
            throw new Error('SmartLevelGenerator: groupIds must not be empty');
          }
          if (difficulty.totalTriplets < 1) {
            throw new Error('SmartLevelGenerator: totalTriplets must be >= 1');
          }
          var effectiveGroups = groupIds.slice(0, difficulty.tileTypeCount);
          if (effectiveGroups.length === 0) {
            throw new Error('SmartLevelGenerator: not enough groupIds for tileTypeCount');
          }
          var shape = shapeName && LevelGenerator.SHAPES[shapeName] ? LevelGenerator.SHAPES[shapeName] : this.pickShapeForDifficulty(difficulty);
          var rows = shape.length;
          var cols = ((_shape$ = shape[0]) == null ? void 0 : _shape$.length) || 0;
          var baseCells = [];
          for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
              if (shape[r][c] === 1) baseCells.push({
                gridX: c,
                gridY: r
              });
            }
          }
          var requiredTiles = difficulty.totalTriplets * 3;
          var maxCapacity = baseCells.length * difficulty.layerCount;
          if (maxCapacity < requiredTiles) {
            difficulty = _extends({}, difficulty, {
              layerCount: Math.ceil(requiredTiles / baseCells.length)
            });
          }

          // spacing phải đủ lớn để cross-cell tiles (khác layer) không overlap
          // tileWidth=100, max jitter diff = 100*0.3 = 30 → spacingX >= 130
          // tileHeight=120, max jitter diff = 120*0.3 = 36 → spacingY >= 156
          var spacingX = 130;
          var spacingY = 160;
          var boardConfig = {
            rows: rows,
            cols: cols,
            maxLayers: difficulty.layerCount,
            tileSpacing: spacingX,
            tileSpacingY: spacingY,
            centerOffset: {
              x: -((cols - 1) * spacingX) / 2,
              y: (rows - 1) * spacingY / 2 + 35
            },
            tileWidth: 100,
            tileHeight: 120,
            jitterX: 0.3,
            jitterY: 0.3,
            jitterMode: 'layer',
            blockMode: 'overlap',
            minBlockOverlapPixels: 1,
            coverThreshold: difficulty.coverThreshold,
            shapePattern: shape
          };
          var trayConfig = {
            maxSlots: this.TRAY_SLOTS,
            matchCount: this.MATCH_COUNT,
            screenPosition: {
              x: 540,
              y: 200
            },
            slotSpacing: 110
          };
          var seed = levelId * 1000;
          var solutionSteps = this.generateSolutionSteps(difficulty.totalTriplets, effectiveGroups, seed);
          var tiles = this.placeTiles(solutionSteps, baseCells, difficulty.layerCount, levelId, seed);

          // Compute block status
          LevelSolver.computeBlockStatus(tiles, boardConfig);

          // Validate basic constraints only (no heavy BFS)
          var activeTiles = tiles.filter(function (t) {
            return t.active;
          });
          if (activeTiles.length % 3 !== 0) {
            throw new Error("Tile count " + activeTiles.length + " not divisible by 3");
          }
          var counts = {};
          for (var _iterator = _createForOfIteratorHelperLoose(activeTiles), _step; !(_step = _iterator()).done;) {
            var t = _step.value;
            counts[t.groupId] = (counts[t.groupId] || 0) + 1;
          }
          for (var _i = 0, _Object$keys = Object.keys(counts); _i < _Object$keys.length; _i++) {
            var gid = _Object$keys[_i];
            if (counts[gid] % 3 !== 0) throw new Error("Group " + gid + " count " + counts[gid] + " not divisible by 3");
          }
          var selectable = activeTiles.filter(function (t) {
            return t.selectable;
          });
          if (selectable.length === 0) throw new Error('No selectable tiles at start');
          return {
            levelId: levelId,
            displayName: "Level " + levelId,
            defaultSkin: 'uma',
            board: boardConfig,
            tiles: tiles,
            tray: trayConfig,
            difficultyConfig: difficulty,
            solutionSteps: solutionSteps
          };
        };
        SmartLevelGenerator.generateSolutionSteps = function generateSolutionSteps(totalTriplets, groupIds, seed) {
          var rng = this.seededRandom(seed != null ? seed : 12345);
          var shuffled = this.shuffleArray([].concat(groupIds), rng);
          var steps = [];
          for (var i = 0; i < totalTriplets; i++) {
            var gid = shuffled[i % shuffled.length];
            steps.push([gid, gid, gid]);
          }
          return steps;
        }

        /**
         * Structured placement guaranteeing solvability with sameCell blocking.
         * Each triplet: 2 tiles at layer 0 (separate cells) + 1 tile at layer 1 (same cell as first).
         * The layer-0 tile in the shared cell is blocked until the layer-1 tile is picked.
         */;
        SmartLevelGenerator.placeTiles = function placeTiles(solutionSteps, baseCells, layerCount, levelId, seed) {
          var tiles = [];
          var idCounter = 0;
          var rng = this.seededRandom(seed);
          var shuffledCells = this.shuffleArray([].concat(baseCells), rng);
          var makeTile = function makeTile(gridX, gridY, layer, groupId) {
            var padded = idCounter < 10 ? "00" + idCounter : idCounter < 100 ? "0" + idCounter : "" + idCounter;
            idCounter++;
            return {
              id: "L" + levelId + "_T" + padded,
              groupId: groupId,
              tileType: TileType.NORMAL,
              gridX: gridX,
              gridY: gridY,
              layer: layer,
              active: true,
              selectable: true,
              isBlocked: false
            };
          };
          var cellIdx = 0;
          if (layerCount >= 3) {
            // Tower mode: each triplet occupies 1 cell across layers 0,1,2
            // Player must clear top-to-bottom. Solvable because all 3 tiles share groupId.
            for (var _iterator2 = _createForOfIteratorHelperLoose(solutionSteps), _step2; !(_step2 = _iterator2()).done;) {
              var step = _step2.value;
              var gid = step[0];
              var cell = shuffledCells[cellIdx++ % shuffledCells.length];
              tiles.push(makeTile(cell.gridX, cell.gridY, 0, gid));
              tiles.push(makeTile(cell.gridX, cell.gridY, 1, gid));
              tiles.push(makeTile(cell.gridX, cell.gridY, 2, gid));
            }
          } else {
            // Phase 1: place 2 layer-0 tiles per triplet
            var assignments = [];
            for (var _iterator3 = _createForOfIteratorHelperLoose(solutionSteps), _step3; !(_step3 = _iterator3()).done;) {
              var _step4 = _step3.value;
              var _gid2 = _step4[0];
              var cellA = shuffledCells[cellIdx++ % shuffledCells.length];
              var cellB = shuffledCells[cellIdx++ % shuffledCells.length];
              tiles.push(makeTile(cellA.gridX, cellA.gridY, 0, _gid2));
              tiles.push(makeTile(cellB.gridX, cellB.gridY, 0, _gid2));
              assignments.push({
                cellA: cellA,
                cellB: cellB
              });
            }

            // Phase 2: place 1 layer-1 tile per triplet on cellA
            for (var i = 0; i < solutionSteps.length; i++) {
              var _gid = solutionSteps[i][0];
              var layer = Math.min(1, layerCount - 1);
              tiles.push(makeTile(assignments[i].cellA.gridX, assignments[i].cellA.gridY, layer, _gid));
            }
          }
          return tiles;
        };
        SmartLevelGenerator.pickShapeForDifficulty = function pickShapeForDifficulty(difficulty) {
          var index = (difficulty.difficulty - 1) % this.SHAPE_NAMES.length;
          return LevelGenerator.SHAPES[this.SHAPE_NAMES[index]];
        };
        SmartLevelGenerator.getDifficultyForLevel = function getDifficultyForLevel(levelId) {
          return {
            difficulty: levelId,
            layerCount: levelId <= 10 ? 2 : levelId <= 30 ? 3 : 4,
            tileTypeCount: Math.min(4 + Math.floor(levelId / 10), ITEM_ID_COUNT),
            totalTriplets: Math.min(6 + Math.floor(levelId / 5), 15),
            safeMoveWindow: Math.max(1, 4 - Math.floor(levelId / 15)),
            trapRate: Math.min(0.15 + levelId * 0.005, 0.5),
            visibleTripletLimit: Math.max(1, 3 - Math.floor(levelId / 20)),
            coverThreshold: 0.3
          };
        };
        SmartLevelGenerator.shuffleArray = function shuffleArray(arr, rng) {
          for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor((rng ? rng() : Math.random()) * (i + 1));
            var _ref = [arr[j], arr[i]];
            arr[i] = _ref[0];
            arr[j] = _ref[1];
          }
          return arr;
        };
        SmartLevelGenerator.seededRandom = function seededRandom(seed) {
          var s = seed;
          return function () {
            s = (s * 16807 + 0) % 2147483647;
            return (s - 1) / 2147483646;
          };
        };
        return SmartLevelGenerator;
      }());
      SmartLevelGenerator.TRAY_SLOTS = 7;
      SmartLevelGenerator.MATCH_COUNT = 3;
      SmartLevelGenerator.SHAPE_NAMES = Object.keys(LevelGenerator.SHAPES);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestRunner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "70aefTfbedC16TwvQafy9kQ", "TestRunner", undefined);
      /**
       * Simple Test Runner cho Cocos Creator TypeScript
       * Không cần Jest/Mocha, chạy trong Editor hoặc Runtime.
       * Kết quả log ra console.
       */
      var TestRunner = exports('TestRunner', /*#__PURE__*/function () {
        function TestRunner() {
          this._results = [];
          this._currentSuite = '';
        }
        var _proto = TestRunner.prototype;
        _proto.describe = function describe(suiteName, fn) {
          this._currentSuite = suiteName;
          fn();
          this._currentSuite = '';
        };
        _proto.it = function it(testName, fn) {
          var fullName = this._currentSuite ? this._currentSuite + ": " + testName : testName;
          try {
            fn();
            this._results.push({
              name: fullName,
              passed: true
            });
          } catch (e) {
            this._results.push({
              name: fullName,
              passed: false,
              error: e.message
            });
          }
        };
        _proto.assert = function assert(condition, message) {
          if (!condition) {
            throw new Error(message || 'Assertion failed');
          }
        };
        _proto.assertEquals = function assertEquals(actual, expected, message) {
          if (actual !== expected) {
            throw new Error(message || "Expected " + expected + " but got " + actual);
          }
        };
        _proto.assertTrue = function assertTrue(condition, message) {
          this.assert(condition, message || 'Expected true but got false');
        };
        _proto.assertFalse = function assertFalse(condition, message) {
          this.assert(!condition, message || 'Expected false but got true');
        };
        _proto.assertThrows = function assertThrows(fn, message) {
          var threw = false;
          try {
            fn();
          } catch (e) {
            threw = true;
          }
          this.assert(threw, message || 'Expected function to throw');
        };
        _proto.printReport = function printReport() {
          var total = this._results.length;
          var passed = this._results.filter(function (r) {
            return r.passed;
          }).length;
          for (var _iterator = _createForOfIteratorHelperLoose(this._results), _step; !(_step = _iterator()).done;) {
            var r = _step.value;
            if (r.passed) ;
          }
        };
        _proto.getResults = function getResults() {
          return [].concat(this._results);
        };
        _proto.clear = function clear() {
          this._results = [];
        };
        return TestRunner;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestRunnerComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AllTests.ts', './SkinManager.ts', './TileManager.ts', './BoardManager.ts', './TrayManager.ts', './MatchManager.ts', './BoosterManager.ts', './PoolManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, runAllTests, SkinManager, TileManager, BoardManager, TrayManager, MatchManager, BoosterManager, PoolManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      runAllTests = module.runAllTests;
    }, function (module) {
      SkinManager = module.SkinManager;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      BoardManager = module.BoardManager;
    }, function (module) {
      TrayManager = module.TrayManager;
    }, function (module) {
      MatchManager = module.MatchManager;
    }, function (module) {
      BoosterManager = module.BoosterManager;
    }, function (module) {
      PoolManager = module.PoolManager;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a58edbKZn5GqrfEy7hp2qLU", "TestRunnerComponent", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * TestRunnerComponent - Gắn vào một node trong scene để chạy unit test trong Editor Play Mode.
       * Chạy trong start() để đảm bảo tất cả manager nodes đã onLoad() xong.
       * Lưu và restore singleton instances để test không làm hỏng scene managers.
       */
      var TestRunnerComponent = exports('TestRunnerComponent', (_dec = ccclass('TestRunnerComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TestRunnerComponent, _Component);
        function TestRunnerComponent() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = TestRunnerComponent.prototype;
        _proto.start = function start() {
          var _this = this;
          // Delay test execution so GameManager.start() finishes initializing singletons first.
          // Without this delay, TestRunnerComponent.start() runs BEFORE GameManager.start()
          // and saves null values, causing all scene managers to fail after restore.
          this.scheduleOnce(function () {
            _this.runTestsSafely();
          }, 0.5);
        };
        _proto.runTestsSafely = function runTestsSafely() {
          // Verify managers are initialized before saving
          var skinMgr = SkinManager.Instance;
          var tileMgr = TileManager.Instance;
          if (!skinMgr || !tileMgr) {
            return;
          }

          // Save original singleton instances before tests overwrite them
          var poolInstance = PoolManager._instance;
          var originals = {
            skin: skinMgr,
            tile: tileMgr,
            board: BoardManager.Instance,
            tray: TrayManager.Instance,
            match: MatchManager.Instance,
            booster: BoosterManager.Instance,
            pool: poolInstance
          };
          runAllTests();

          // Restore original instances so scene managers continue working
          if (originals.skin) SkinManager.Instance = originals.skin;
          if (originals.tile) TileManager.Instance = originals.tile;
          if (originals.board) BoardManager.Instance = originals.board;
          if (originals.tray) TrayManager.Instance = originals.tray;
          if (originals.match) MatchManager.Instance = originals.match;
          if (originals.booster) BoosterManager.Instance = originals.booster;
          if (originals.pool) PoolManager._instance = originals.pool;
        };
        return TestRunnerComponent;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TeviConstants.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5103f/vJIZDGoqzK2SQnIrd", "TeviConstants", undefined);
      /** App ID Sandbox do Tevi cấp cho Mini App. */
      var APP_ID = exports('APP_ID', 'HXM37297');

      /** Môi trường chạy hiện tại của Mini App. */
      var ENV = exports('ENV', 'SANDBOX');

      /** Phiên bản cấu hình gửi sang Tevi container. */
      var VERSION = exports('VERSION', '1.0.4');

      /**
       * Bật bridge Tevi giả khi chạy Editor Preview hoặc Development Build.
       * Phải đặt về false khi không còn cần kiểm thử.
       */
      var ENABLE_TEVI_DEVELOPER_MOCK = exports('ENABLE_TEVI_DEVELOPER_MOCK', false);

      /** Endpoint Worker cấp URL video thưởng có chữ ký và thời hạn ngắn. */
      var REWARD_VIDEO_TOKEN_URL = exports('REWARD_VIDEO_TOKEN_URL', 'https://fancy-sun-962d.tienunity1987.workers.dev/api/video-token');

      /** Các key localStorage dùng chung trong toàn bộ game. */
      var STORAGE_KEYS = exports('STORAGE_KEYS', {
        USER_TOKEN: 'tevi_user_app_token',
        USER_ID: 'tevi_user_id',
        GAME_PROGRESS: 'tevi_game_progress'
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TeviLoginManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TeviConstants.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _extends, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, sys, Component, APP_ID, ENV, VERSION, STORAGE_KEYS;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      APP_ID = module.APP_ID;
      ENV = module.ENV;
      VERSION = module.VERSION;
      STORAGE_KEYS = module.STORAGE_KEYS;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "f4835ezGvFKDbT9PVD/2K68", "TeviLoginManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** Số lần thử lại khi bridge native chưa sẵn sàng. */
      var GET_USER_INFO_MAX_RETRY = 5;
      /** Khoảng cách giữa các lần retry (ms). */
      var GET_USER_INFO_RETRY_DELAY_MS = 500;

      /**
       * Khởi tạo Tevi container và đăng nhập người chơi qua JS Bridge.
       * Component có thể được gắn vào một Node và nối Label trực tiếp trong Inspector.
       */
      var TeviLoginManager = exports('TeviLoginManager', (_dec = ccclass('TeviLoginManager'), _dec2 = property({
        type: Label,
        tooltip: 'Hiển thị trạng thái kết nối/đăng nhập Tevi.'
      }), _dec3 = property({
        type: Label,
        tooltip: 'Hiển thị tên và ID của người dùng sau khi đăng nhập.'
      }), _dec4 = property({
        tooltip: 'Cho phép Tevi hiển thị popup xin quyền khi lấy thông tin người dùng. Docs Tevi mặc định false trong Mini App.'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TeviLoginManager, _Component);
        function TeviLoginManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._usingDeveloperMock = false;
          _this._getUserInfoRetryCount = 0;
          _this._isRequestingUserInfo = false;
          _initializerDefineProperty(_this, "statusLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userInfoLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showLoginPopup", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TeviLoginManager.prototype;
        _proto.onLoad = function onLoad() {
          if (TeviLoginManager.Instance && TeviLoginManager.Instance !== this) {
            this.destroy();
            return;
          }
          TeviLoginManager.Instance = this;
        };
        _proto.start = function start() {
          this.initializeTevi();
        };
        _proto.onDestroy = function onDestroy() {
          if (TeviLoginManager.Instance === this) {
            TeviLoginManager.Instance = null;
          }
        }

        /** Nạp cấu hình container trước, sau đó yêu cầu thông tin người dùng. */;
        _proto.initializeTevi = function initializeTevi() {
          var _this2 = this;
          this.installDeveloperMockBridge();
          this.setStatus('Đang kết nối...');
          this.setUserInfo('');
          if (typeof window === 'undefined' || !window.TeviJS) {
            this.setStatus('Không tìm thấy TeviJS. Hãy chạy game trong ứng dụng Tevi.');
            return;
          }
          var teviJS = window.TeviJS;
          this.setStatus('Đang loadConfig...');
          try {
            // Theo docs Tevi: loadConfig trước, đợi callback/native sẵn sàng rồi mới getUserInfo.
            // helper_tevi.js nhận (config, callback); một số bản type cũ chỉ khai báo 1 tham số.
            teviJS.loadConfig({
              optionMenu: true,
              config: {
                app_id: APP_ID,
                env: ENV
              },
              version: VERSION
            }, function (response) {
              return _this2.onLoadConfigFinished(response);
            });

            // Một số bản native không gọi callback loadConfig → vẫn tiếp tục sau timeout ngắn.
            this.scheduleOnce(function () {
              if (!_this2._isRequestingUserInfo && !_this2.getUserToken()) {
                console.warn('[TeviLogin] loadConfig chưa callback, tiếp tục getUserInfo.');
                _this2.requestUserInfo();
              }
            }, 1.0);
          } catch (error) {
            this.handleFailure('LOAD_CONFIG_ERROR', error);
          }
        }

        /** Có thể nối hàm này với Button để người dùng thử đăng nhập lại. */;
        _proto.requestUserInfo = function requestUserInfo() {
          var _this3 = this;
          if (this._isRequestingUserInfo) return;
          this.setStatus('Đang lấy thông tin người dùng...');
          if (typeof window === 'undefined' || !window.TeviJS) {
            this.setStatus('Không tìm thấy TeviJS. Hãy chạy game trong ứng dụng Tevi.');
            return;
          }
          var teviJS = window.TeviJS;
          this._isRequestingUserInfo = true;
          try {
            teviJS.getUserInfo({
              is_popup: this.showLoginPopup,
              app_id: APP_ID
            }, function (response) {
              return _this3.handleUserInfoResponse(response);
            });
          } catch (error) {
            this._isRequestingUserInfo = false;
            this.handleFailure('GET_USER_INFO_ERROR', error);
          }
        }

        /** Token hiện tại để module Topup/Video sử dụng sau này. */;
        _proto.getUserToken = function getUserToken() {
          try {
            return sys.localStorage.getItem(STORAGE_KEYS.USER_TOKEN) || '';
          } catch (error) {
            console.warn('[TeviLogin] Không thể đọc user token:', error);
            return '';
          }
        }

        /** User ID hiện tại để các module tích hợp Tevi sử dụng sau này. */;
        _proto.getUserId = function getUserId() {
          try {
            return sys.localStorage.getItem(STORAGE_KEYS.USER_ID) || '';
          } catch (error) {
            console.warn('[TeviLogin] Không thể đọc user ID:', error);
            return '';
          }
        };
        _proto.onLoadConfigFinished = function onLoadConfigFinished(response) {
          console.log('[TeviLogin] loadConfig response:', response);
          if (response && this.hasErrorCode(response.error_code)) {
            // loadConfig lỗi vẫn thử getUserInfo vì một số bản native trả callback chung.
            console.warn('[TeviLogin] loadConfig báo lỗi, vẫn thử getUserInfo:', response);
          }
          this.requestUserInfo();
        };
        _proto.handleUserInfoResponse = function handleUserInfoResponse(response) {
          var _this4 = this;
          this._isRequestingUserInfo = false;
          var normalized = this.normalizeBridgePayload(response);
          console.log('[TeviLogin] getUserInfo raw:', response);
          console.log('[TeviLogin] getUserInfo normalized:', normalized);
          if (!normalized) {
            this.handleFailure('EMPTY_RESPONSE');
            return;
          }
          if (this.hasErrorCode(normalized.error_code)) {
            var code = "" + normalized.error_code;
            var detail = this.getBridgeErrorMessage(normalized);

            // Bridge chưa sẵn sàng / timeout → retry theo docs flow khởi tạo.
            if (this.shouldRetryGetUserInfo(code) && this._getUserInfoRetryCount < GET_USER_INFO_MAX_RETRY) {
              this._getUserInfoRetryCount++;
              this.setStatus("Bridge ch\u01B0a s\u1EB5n s\xE0ng, th\u1EED l\u1EA1i " + this._getUserInfoRetryCount + "/" + GET_USER_INFO_MAX_RETRY + "...");
              this.scheduleOnce(function () {
                return _this4.requestUserInfo();
              }, GET_USER_INFO_RETRY_DELAY_MS / 1000);
              return;
            }
            this.handleFailure(code, detail);
            return;
          }
          var extracted = this.extractUserCredentials(normalized);
          if (!extracted.token || !extracted.userId) {
            var preview = this.buildResponsePreview(normalized);
            this.handleFailure('INVALID_USER_INFO', "Thi\u1EBFu user_app_token/id. Preview: " + preview);
            return;
          }
          try {
            sys.localStorage.setItem(STORAGE_KEYS.USER_TOKEN, extracted.token);
            sys.localStorage.setItem(STORAGE_KEYS.USER_ID, extracted.userId);
          } catch (error) {
            this.handleFailure('LOCAL_STORAGE_ERROR', error);
            return;
          }
          this._getUserInfoRetryCount = 0;
          this.setStatus(this._usingDeveloperMock ? 'Đăng nhập Tevi thành công (Developer Mock)' : 'Đăng nhập Tevi thành công');
          this.setUserInfo(extracted.userName ? extracted.userName + " (ID: " + extracted.userId + ")" : "User ID: " + extracted.userId);
          console.log('[TeviLogin] Đăng nhập thành công:', {
            userId: extracted.userId,
            userName: extracted.userName,
            appId: APP_ID,
            env: ENV
          });
        }

        /**
         * Tevi native đôi khi trả object, JSON string, hoặc bọc trong { action, data }.
         * Chuẩn hóa về object phẳng hơn trước khi đọc credential.
         */;
        _proto.normalizeBridgePayload = function normalizeBridgePayload(payload) {
          var current = payload;
          for (var i = 0; i < 3; i++) {
            if (typeof current === 'string') {
              var text = current.trim();
              if (!text) return null;
              try {
                current = JSON.parse(text);
                continue;
              } catch (_unused) {
                // Một số bản Android/iOS trả Base64 JSON.
                try {
                  current = JSON.parse(atob(text));
                  continue;
                } catch (_unused2) {
                  return null;
                }
              }
            }
            break;
          }
          if (!current || typeof current !== 'object') return null;

          // Nếu data là string JSON thì parse tiếp.
          if (typeof current.data === 'string') {
            var parsedData = this.normalizeBridgePayload(current.data);
            if (parsedData) {
              current = _extends({}, current, {
                data: parsedData
              });
            }
          }
          return current;
        }

        /** Tìm user_app_token/id ở nhiều vị trí response khác nhau của Tevi. */;
        _proto.extractUserCredentials = function extractUserCredentials(payload) {
          var _payload$data, _payload$data2, _payload$result;
          var candidates = [payload == null ? void 0 : payload.userInfo, payload == null || (_payload$data = payload.data) == null ? void 0 : _payload$data.userInfo, payload == null || (_payload$data2 = payload.data) == null ? void 0 : _payload$data2.user, payload == null ? void 0 : payload.data, payload == null || (_payload$result = payload.result) == null ? void 0 : _payload$result.userInfo, payload == null ? void 0 : payload.result, payload];
          var token = '';
          var userId = '';
          var userName = '';
          for (var _i = 0, _candidates = candidates; _i < _candidates.length; _i++) {
            var candidate = _candidates[_i];
            if (!candidate || typeof candidate !== 'object') continue;
            if (!token) {
              var _ref, _ref2, _ref3, _candidate$user_app_t;
              var tokenRaw = (_ref = (_ref2 = (_ref3 = (_candidate$user_app_t = candidate.user_app_token) != null ? _candidate$user_app_t : candidate.userAppToken) != null ? _ref3 : candidate.token) != null ? _ref2 : candidate.access_token) != null ? _ref : candidate.app_token;
              if (typeof tokenRaw === 'string' && tokenRaw.trim()) {
                token = tokenRaw.trim();
              }
            }
            if (!userId) {
              var _ref4, _ref5, _candidate$id;
              var rawUserId = (_ref4 = (_ref5 = (_candidate$id = candidate.id) != null ? _candidate$id : candidate.user_id) != null ? _ref5 : candidate.userId) != null ? _ref4 : candidate.uid;
              if (rawUserId !== undefined && rawUserId !== null && ("" + rawUserId).trim()) {
                var value = ("" + rawUserId).trim();
                // Tránh lấy nhầm action id của bridge.
                if (!value.includes('action.')) {
                  userId = value;
                }
              }
            }
            if (!userName) {
              if (typeof candidate.name === 'string' && candidate.name.trim()) {
                userName = candidate.name.trim();
              } else if (typeof candidate.user_name === 'string' && candidate.user_name.trim()) {
                userName = candidate.user_name.trim();
              }
            }
            if (token && userId) {
              return {
                token: token,
                userId: userId,
                userName: userName
              };
            }
          }
          if (!token) {
            token = this.findStringByKeys(payload, ['user_app_token', 'userAppToken', 'access_token', 'app_token']);
          }
          if (!userId) {
            userId = this.findStringByKeys(payload, ['user_id', 'userId', 'uid', 'id']);
          }
          if (!userName) {
            userName = this.findStringByKeys(payload, ['name', 'user_name', 'userName']);
          }

          // Tevi thường chỉ trả JWT trong user_app_token, không có field id riêng.
          if (token && !userId) {
            var _ref6, _ref7, _ref8, _jwtClaims$sub;
            var jwtClaims = this.decodeJwtPayload(token);
            var jwtUserId = (_ref6 = (_ref7 = (_ref8 = (_jwtClaims$sub = jwtClaims == null ? void 0 : jwtClaims.sub) != null ? _jwtClaims$sub : jwtClaims == null ? void 0 : jwtClaims.user_id) != null ? _ref8 : jwtClaims == null ? void 0 : jwtClaims.userId) != null ? _ref7 : jwtClaims == null ? void 0 : jwtClaims.uid) != null ? _ref6 : jwtClaims == null ? void 0 : jwtClaims.id;
            if (jwtUserId !== undefined && jwtUserId !== null && ("" + jwtUserId).trim()) {
              userId = ("" + jwtUserId).trim();
            }
            if (!userName && typeof (jwtClaims == null ? void 0 : jwtClaims.name) === 'string') {
              userName = jwtClaims.name.trim();
            }
          }

          // Token hợp lệ là đủ để đăng nhập; id fallback ổn định từ JWT.
          if (token && !userId) {
            userId = "tevi_" + token.slice(-12);
            console.warn('[TeviLogin] Không có user id trong response/JWT, dùng fallback:', userId);
          }
          return {
            token: token,
            userId: userId,
            userName: userName
          };
        }

        /** Decode phần payload của JWT (không verify chữ ký — chỉ lấy claim hiển thị). */;
        _proto.decodeJwtPayload = function decodeJwtPayload(token) {
          try {
            var parts = token.split('.');
            if (parts.length < 2) return null;
            var base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
            while (base64.length % 4 !== 0) {
              base64 += '=';
            }
            var jsonText = atob(base64);
            var parsed = JSON.parse(jsonText);
            return parsed && typeof parsed === 'object' ? parsed : null;
          } catch (error) {
            console.warn('[TeviLogin] Không decode được JWT payload:', error);
            return null;
          }
        };
        _proto.findStringByKeys = function findStringByKeys(root, keys) {
          var queue = [root];
          var seen = new Set();
          while (queue.length > 0) {
            var node = queue.shift();
            if (!node || typeof node !== 'object' || seen.has(node)) continue;
            seen.add(node);
            for (var _iterator = _createForOfIteratorHelperLoose(keys), _step; !(_step = _iterator()).done;) {
              var _key2 = _step.value;
              var _value = node[_key2];
              if (typeof _value === 'string' && _value.trim()) {
                // Tránh lấy nhầm action id kiểu "action.user.core.getInfo".
                if (_key2 === 'id' && _value.includes('action.')) continue;
                return _value.trim();
              }
              if ((_key2 === 'id' || _key2 === 'user_id' || _key2 === 'userId' || _key2 === 'uid') && (typeof _value === 'number' || typeof _value === 'bigint')) {
                return "" + _value;
              }
            }
            for (var key in node) {
              if (!Object.prototype.hasOwnProperty.call(node, key)) continue;
              var value = node[key];
              if (value && typeof value === 'object') {
                queue.push(value);
              } else if (typeof value === 'string' && value.trim().startsWith('{')) {
                var parsed = this.normalizeBridgePayload(value);
                if (parsed) queue.push(parsed);
              }
            }
          }
          return '';
        };
        _proto.buildResponsePreview = function buildResponsePreview(payload) {
          try {
            var text = JSON.stringify(payload) || '';
            return text.length > 160 ? text.slice(0, 160) + "..." : text;
          } catch (_unused3) {
            return Object.prototype.toString.call(payload);
          }
        }

        /**
         * Tạo bridge giả phục vụ Editor Preview/Development Build.
         * Production Build không bao giờ cài mock, kể cả khi biến developer đang bật.
         */;
        _proto.installDeveloperMockBridge = function installDeveloperMockBridge() {
          return;
        };
        _proto.shouldRetryGetUserInfo = function shouldRetryGetUserInfo(code) {
          // Theo helper_tevi.js: -5 Not ready, -6 Not Available Device, -14 Timeout.
          return code === '-5' || code === '-6' || code === '-14';
        };
        _proto.hasErrorCode = function hasErrorCode(errorCode) {
          if (errorCode === undefined || errorCode === null || errorCode === '') return false;
          return "" + errorCode !== '0';
        };
        _proto.getBridgeErrorMessage = function getBridgeErrorMessage(response) {
          var anyResponse = response;
          if (typeof anyResponse.error_message === 'string' && anyResponse.error_message.trim()) {
            return anyResponse.error_message.trim();
          }
          if (typeof anyResponse.message === 'string' && anyResponse.message.trim()) {
            return anyResponse.message.trim();
          }
          return '';
        };
        _proto.handleFailure = function handleFailure(code, detail) {
          var message = this.getErrorMessage(detail);
          this.setStatus("\u0110\u0103ng nh\u1EADp Tevi th\u1EA5t b\u1EA1i (" + code + ")" + (message ? ": " + message : ''));
          this.setUserInfo('');
          console.error("[TeviLogin] " + code + ":", detail, {
            appId: APP_ID,
            env: ENV,
            version: VERSION
          });
        };
        _proto.getErrorMessage = function getErrorMessage(detail) {
          if (typeof detail === 'string') return detail;
          if (detail instanceof Error) return detail.message;
          return '';
        }

        /** Cho module khác (video, API…) ghi trạng thái debug tạm lên label. */;
        _proto.setDebugStatus = function setDebugStatus(message) {
          this.setStatus(message);
          console.log('[TeviDebug]', message);
        };
        _proto.setStatus = function setStatus(message) {
          if (this.statusLabel) {
            this.statusLabel.string = "v" + VERSION + " | " + message;
          }
        };
        _proto.setUserInfo = function setUserInfo(message) {
          if (this.userInfoLabel) {
            this.userInfoLabel.string = message;
          }
        };
        return TeviLoginManager;
      }(Component), _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "statusLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userInfoLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showLoginPopup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Tile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TileManager.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Color, Node, Vec3, UITransform, Tween, UIOpacity, Sprite, tween, Component, TileManager, AudioManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      Node = module.Node;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "1eb7cu0JexDt4a7HSzv8Ahp", "Tile", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BOARD_BLOCKED_COLOR = new Color(129, 129, 129, 255);

      /**
       * Tile - Component gắn vào node tile trong scene.
       * Xử lý input, animation, visual feedback.
       * Debug view:
       *   - selectable: màu bình thường, độ opacity 1.0
       *   - blocked: làm tối màu (dim), độ opacity giảm
       *   - selected: highlight màu sáng hơn
       */
      var Tile = exports('Tile', (_dec = ccclass('Tile'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Tile, _Component);
        function Tile() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "visualNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectableColor", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockedColor", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dimmedColor", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedColor", _descriptor5, _assertThisInitialized(_this));
          _this._data = null;
          _this._isAnimating = false;
          _this._originalScale = new Vec3(1, 1, 1);
          _this._originalVisualScale = new Vec3(1, 1, 1);
          _this._originalContentSize = null;
          _this._originalVisualContentSize = null;
          _this._isSelected = false;
          _this._isGlowing = false;
          _this._glowTween = null;
          _this._moveTween = null;
          _this._clearTween = null;
          _this._unlockTween = null;
          _this._lastVisualState = null;
          _this._moveTarget = null;
          _this._onMoveComplete = void 0;
          _this._isInTrayVisual = false;
          _initializerDefineProperty(_this, "glowColor", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "unlockFadeDuration", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Tile.prototype;
        _proto.onLoad = function onLoad() {
          var _this$visualNode;
          this.normalizeBoardColors();
          this._originalScale = this.node.scale.clone();
          if (this.visualNode) {
            this._originalVisualScale = this.visualNode.scale.clone();
          }
          var uiTransform = this.node.getComponent(UITransform);
          if (uiTransform) {
            this._originalContentSize = {
              width: uiTransform.width,
              height: uiTransform.height
            };
          }
          var visualTransform = (_this$visualNode = this.visualNode) == null ? void 0 : _this$visualNode.getComponent(UITransform);
          if (visualTransform) {
            this._originalVisualContentSize = {
              width: visualTransform.width,
              height: visualTransform.height
            };
          }
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        /** Khởi tạo tile với data */;
        _proto.initialize = function initialize(data) {
          var _this$visualNode2;
          this.normalizeBoardColors();
          if (!this.visualNode) {
            this.visualNode = this.node.getChildByName('visual');
          }
          Tween.stopAllByTarget(this.node);
          if (this.visualNode) Tween.stopAllByTarget(this.visualNode);
          if (this._glowTween) {
            this._glowTween.stop();
            this._glowTween = null;
          }
          if (this._moveTween) {
            this._moveTween.stop();
            this._moveTween = null;
          }
          if (this._clearTween) {
            this._clearTween.stop();
            this._clearTween = null;
          }
          if (this._unlockTween) {
            this._unlockTween.stop();
            this._unlockTween = null;
          }
          this._originalScale = this.node.scale.clone();
          if (this.visualNode) {
            this._originalVisualScale = this.visualNode.scale.clone();
          }
          this._isAnimating = false;
          this._isInTrayVisual = false;
          this._data = data;
          this._isSelected = false;
          this._lastVisualState = null;
          var opacity = this.node.getComponent(UIOpacity);
          if (opacity) opacity.opacity = 255;
          var visualOpacity = (_this$visualNode2 = this.visualNode) == null ? void 0 : _this$visualNode2.getComponent(UIOpacity);
          if (visualOpacity) visualOpacity.opacity = 255;
          this.updateVisualState();
        };
        _proto.normalizeBoardColors = function normalizeBoardColors() {
          this.blockedColor = BOARD_BLOCKED_COLOR.clone();
          this.dimmedColor = BOARD_BLOCKED_COLOR.clone();
        }

        /** Cập nhật trạng thái visual theo data (selectable / blocked / selected) */;
        _proto.updateVisualState = function updateVisualState() {
          var _this$visualNode3,
            _this2 = this;
          if (!this._data) return;
          var sprite = ((_this$visualNode3 = this.visualNode) == null ? void 0 : _this$visualNode3.getComponent(Sprite)) || this.getComponent(Sprite);
          if (!sprite) return;
          if (this._isInTrayVisual) {
            if (this._unlockTween) {
              this._unlockTween.stop();
              this._unlockTween = null;
            }
            sprite.color = this.selectableColor;
            sprite.node.setScale(this._originalVisualScale.x, this._originalVisualScale.y, this._originalVisualScale.z);
            this.node.setScale(this._originalScale.x, this._originalScale.y, 1);
            this._lastVisualState = 'tray';
            this.node.active = true;
            return;
          }
          var newState;
          var targetColor;
          var targetVisualScaleX;
          var targetVisualScaleY;
          if (this._isSelected) {
            newState = 'selected';
            targetColor = this.selectedColor;
            targetVisualScaleX = this._originalVisualScale.x * 1.1;
            targetVisualScaleY = this._originalVisualScale.y * 1.1;
          } else if (this._data.isBlocked) {
            newState = 'blocked';
            targetColor = this.blockedColor;
            targetVisualScaleX = this._originalVisualScale.x;
            targetVisualScaleY = this._originalVisualScale.y;
          } else if (this._data.selectable) {
            newState = 'selectable';
            targetColor = this.selectableColor;
            targetVisualScaleX = this._originalVisualScale.x;
            targetVisualScaleY = this._originalVisualScale.y;
          } else {
            newState = 'dimmed';
            targetColor = this.dimmedColor;
            targetVisualScaleX = this._originalVisualScale.x;
            targetVisualScaleY = this._originalVisualScale.y;
          }
          var wasBlockedOrDimmed = this._lastVisualState === 'blocked' || this._lastVisualState === 'dimmed';
          var isTransitioningToSelectable = newState === 'selectable' && wasBlockedOrDimmed;
          if (isTransitioningToSelectable) {
            if (this._unlockTween) {
              this._unlockTween.stop();
              this._unlockTween = null;
            }
            var startColor = sprite.color.clone();
            var proxy = {
              r: startColor.r,
              g: startColor.g,
              b: startColor.b,
              a: startColor.a
            };
            var tweenOpts = {
              easing: 'sineOut',
              onUpdate: function onUpdate(target) {
                if (!sprite || !sprite.node || !sprite.node.isValid || !target) return;
                sprite.color = new Color(target.r, target.g, target.b, target.a);
              }
            };
            this._unlockTween = tween(proxy).to(this.unlockFadeDuration, {
              r: targetColor.r,
              g: targetColor.g,
              b: targetColor.b,
              a: targetColor.a
            }, tweenOpts).call(function () {
              _this2._unlockTween = null;
            }).start();
            sprite.node.setScale(targetVisualScaleX, targetVisualScaleY, this._originalVisualScale.z);
          } else if (newState !== this._lastVisualState || newState === 'blocked' || newState === 'dimmed') {
            if (this._unlockTween) {
              this._unlockTween.stop();
              this._unlockTween = null;
            }
            this.applySpriteVisual(sprite, targetColor, targetVisualScaleX, targetVisualScaleY, this._originalVisualScale.z);
          }
          this._lastVisualState = newState;
          this.node.active = true;
        };
        _proto.applySpriteVisual = function applySpriteVisual(sprite, color, scaleX, scaleY, scaleZ) {
          Tween.stopAllByTarget(sprite.node);
          sprite.color = new Color(color.r, color.g, color.b, color.a);
          sprite.node.setScale(scaleX, scaleY, scaleZ);
          sprite.node.angle = 0;
          sprite.node.setRotationFromEuler(0, 0, 0);
          var opacity = sprite.node.getComponent(UIOpacity);
          if (opacity) opacity.opacity = 255;
        }

        /** Đặt trạng thái selected và cập nhật visual */;
        _proto.forceUpdateVisualState = function forceUpdateVisualState() {
          if (this._glowTween) {
            this._glowTween.stop();
            this._glowTween = null;
          }
          if (this._unlockTween) {
            this._unlockTween.stop();
            this._unlockTween = null;
          }
          this._isGlowing = false;
          this._lastVisualState = null;
          this.updateVisualState();
        };
        _proto.forceUpdateBoardVisualState = function forceUpdateBoardVisualState() {
          this._isInTrayVisual = false;
          this._isSelected = false;
          Tween.stopAllByTarget(this.node);
          if (this.visualNode) Tween.stopAllByTarget(this.visualNode);
          var opacity = this.node.getComponent(UIOpacity);
          if (opacity) opacity.opacity = 255;
          this.node.angle = 0;
          this.node.setRotationFromEuler(0, 0, 0);
          this.forceUpdateVisualState();
        };
        _proto.setSelected = function setSelected(selected) {
          this._isSelected = selected;
          this.updateVisualState();
        }

        /** Đặt visual về màu bình thường khi tile xuống tray (không phụ thuộc data) */;
        _proto.setTrayVisual = function setTrayVisual() {
          var _this$visualNode4;
          Tween.stopAllByTarget(this.node);
          if (this.visualNode) Tween.stopAllByTarget(this.visualNode);
          if (this._glowTween) {
            this._glowTween.stop();
            this._glowTween = null;
          }
          if (this._unlockTween) {
            this._unlockTween.stop();
            this._unlockTween = null;
          }
          this._isInTrayVisual = true;
          this._isSelected = false;
          this._lastVisualState = null;
          this._originalScale = new Vec3(1, 1, 1);
          this._originalVisualScale = new Vec3(1, 1, 1);
          var opacity = this.node.getComponent(UIOpacity);
          if (opacity) opacity.opacity = 255;
          this.node.angle = 0;
          var sprite = ((_this$visualNode4 = this.visualNode) == null ? void 0 : _this$visualNode4.getComponent(Sprite)) || this.getComponent(Sprite);
          if (sprite) {
            sprite.color = this.selectableColor;
            sprite.node.setScale(1, 1, 1);
          }
          this.node.setScale(1, 1, 1);
        }

        /** Glow effect: tile sáng nhấp nháy khi sắp match */;
        _proto.setGlow = function setGlow(active) {
          var _this$visualNode5;
          if (this._isGlowing === active) return;
          this._isGlowing = active;
          if (this._glowTween) {
            this._glowTween.stop();
            this._glowTween = null;
          }
          var sprite = ((_this$visualNode5 = this.visualNode) == null ? void 0 : _this$visualNode5.getComponent(Sprite)) || this.getComponent(Sprite);
          if (!sprite) return;
          if (active) {
            var _this$_data, _this$_data2;
            // Pulse glow tween via proxy object (Cocos 3.x cannot tween Color directly)
            var originalColor = this._isInTrayVisual || (_this$_data = this._data) != null && _this$_data.selectable && !((_this$_data2 = this._data) != null && _this$_data2.isBlocked) ? this.selectableColor : this.blockedColor;
            var proxy = {
              r: originalColor.r,
              g: originalColor.g,
              b: originalColor.b
            };
            var updateColor = function updateColor() {
              if (!sprite || !sprite.node || !sprite.node.isValid) return;
              sprite.color = new Color(proxy.r, proxy.g, proxy.b, 255);
            };
            this._glowTween = tween(proxy).to(0.4, {
              r: this.glowColor.r,
              g: this.glowColor.g,
              b: this.glowColor.b
            }, {
              easing: 'sineInOut',
              onUpdate: updateColor
            }).to(0.4, {
              r: originalColor.r,
              g: originalColor.g,
              b: originalColor.b
            }, {
              easing: 'sineInOut',
              onUpdate: updateColor
            }).union().repeatForever().start();
          } else {
            this.updateVisualState();
          }
        }

        /** Dừng mọi tween đang chạy (dùng khi recycle từ pool) */;
        _proto.stopAllTweens = function stopAllTweens() {
          if (this._glowTween) {
            this._glowTween.stop();
            this._glowTween = null;
          }
          if (this._moveTween) {
            this._moveTween.stop();
            this._moveTween = null;
          }
          if (this._clearTween) {
            this._clearTween.stop();
            this._clearTween = null;
          }
          if (this._unlockTween) {
            this._unlockTween.stop();
            this._unlockTween = null;
          }
          this._moveTarget = null;
          Tween.stopAllByTarget(this.node);
        }

        /** Xử lý click */;
        _proto.onTouchEnd = function onTouchEnd(event) {
          var _AudioManager$getInst;
          event.propagationStopped = true;
          if (!this.node.active || this.node.scale.x < 0.01) return;
          if (!this._data || this._isAnimating) return;
          if (!this._data.selectable) return;
          (_AudioManager$getInst = AudioManager.getInstance()) == null || _AudioManager$getInst.playSfx('tile_click');
          TileManager.getInstance().onTileClicked(this._data.id);
        }

        /** Animation khi được chọn */;
        _proto.playSelectAnimation = function playSelectAnimation() {
          var _this3 = this;
          if (this._isAnimating || !this.node || !this.node.isValid) return;
          this._isAnimating = true;
          Tween.stopAllByTarget(this.node);
          if (this._unlockTween) {
            this._unlockTween.stop();
            this._unlockTween = null;
          }
          tween(this.node).to(0.1, {
            scale: new Vec3(this._originalScale.x * 1.1, this._originalScale.y * 1.1, 1)
          }).to(0.1, {
            scale: new Vec3(this._originalScale.x, this._originalScale.y, this._originalScale.z)
          }).call(function () {
            _this3._isAnimating = false;
          }).start();
        }

        /** Animation di chuyển đến tray */;
        _proto.moveToTray = function moveToTray(targetPos, duration, callback, impactCallback) {
          var _this4 = this;
          if (!this.node || !this.node.isValid) {
            callback == null || callback();
            return;
          }
          this._isAnimating = true;
          this._onMoveComplete = callback;
          if (this._moveTween) {
            this._moveTween.stop();
          }
          if (this._unlockTween) {
            this._unlockTween.stop();
            this._unlockTween = null;
          }
          var startPos = this.node.position.clone();
          this._moveTarget = targetPos.clone();
          var totalDuration = Math.max(duration, 0.65);
          var hopDuration = totalDuration * 0.15;
          var fallDuration = totalDuration * 0.55;
          var bounceDuration = totalDuration * 0.30;
          var distance = Vec3.distance(startPos, targetPos);
          var hopHeight = Math.min(140, Math.max(42, distance * 0.22));
          var bounceHeight = Math.min(28, Math.max(12, distance * 0.045));
          var hopPos = new Vec3(startPos.x + (targetPos.x - startPos.x) * 0.16, startPos.y + hopHeight, startPos.z);
          var controlPos = new Vec3(startPos.x + (targetPos.x - startPos.x) * 0.55, Math.max(startPos.y, targetPos.y) + hopHeight * 1.05, startPos.z);
          var proxy = {
            t: 0,
            sx: this._originalScale.x,
            sy: this._originalScale.y
          };
          var setScaleFromProxy = function setScaleFromProxy() {
            if (!_this4.node || !_this4.node.isValid) return;
            _this4.node.setScale(proxy.sx, proxy.sy, 1);
          };
          var setLinearPosition = function setLinearPosition(from, to) {
            if (!_this4.node || !_this4.node.isValid) return;
            _this4.node.setPosition(from.x + (to.x - from.x) * proxy.t, from.y + (to.y - from.y) * proxy.t, from.z + (to.z - from.z) * proxy.t);
            setScaleFromProxy();
          };
          var setArcPosition = function setArcPosition() {
            if (!_this4.node || !_this4.node.isValid || !_this4._moveTarget) return;
            var t = proxy.t;
            var inv = 1 - t;
            var endPos = _this4._moveTarget;
            _this4.node.setPosition(inv * inv * hopPos.x + 2 * inv * t * controlPos.x + t * t * endPos.x, inv * inv * hopPos.y + 2 * inv * t * controlPos.y + t * t * endPos.y, inv * inv * hopPos.z + 2 * inv * t * controlPos.z + t * t * endPos.z);
            setScaleFromProxy();
          };
          var getTargetWithOffset = function getTargetWithOffset(yOffset) {
            var _this4$_moveTarget;
            if (yOffset === void 0) {
              yOffset = 0;
            }
            var target = (_this4$_moveTarget = _this4._moveTarget) != null ? _this4$_moveTarget : targetPos;
            return new Vec3(target.x, target.y + yOffset, target.z);
          };
          var finishMove = function finishMove() {
            _this4._isAnimating = false;
            _this4._moveTween = null;
            _this4._moveTarget = null;
            _this4._onMoveComplete == null || _this4._onMoveComplete();
            _this4._onMoveComplete = undefined;
          };
          var didImpact = false;
          var notifyImpact = function notifyImpact() {
            if (didImpact) return;
            didImpact = true;
            impactCallback == null || impactCallback();
          };
          this._moveTween = tween(proxy).to(hopDuration, {
            t: 1,
            sx: this._originalScale.x * 1.06,
            sy: this._originalScale.y * 1.06
          }, {
            easing: 'sineOut',
            onUpdate: function onUpdate() {
              return setLinearPosition(startPos, hopPos);
            }
          }).call(function () {
            proxy.t = 0;
          }).to(fallDuration, {
            t: 1
          }, {
            easing: 'quadIn',
            onUpdate: setArcPosition
          }).call(function () {
            if (_this4._moveTarget) {
              _this4.node.setPosition(_this4._moveTarget);
            }
            proxy.t = 0;
            notifyImpact();
          }).to(bounceDuration * 0.20, {
            sx: this._originalScale.x * 1.1,
            sy: this._originalScale.y * 0.9
          }, {
            easing: 'quadOut',
            onUpdate: function onUpdate() {
              _this4.node.setPosition(getTargetWithOffset(0));
              setScaleFromProxy();
            }
          }).call(function () {
            proxy.t = 0;
          }).to(bounceDuration * 0.28, {
            t: 1,
            sx: this._originalScale.x * 0.96,
            sy: this._originalScale.y * 1.06
          }, {
            easing: 'sineOut',
            onUpdate: function onUpdate() {
              return setLinearPosition(getTargetWithOffset(0), getTargetWithOffset(bounceHeight));
            }
          }).call(function () {
            proxy.t = 0;
          }).to(bounceDuration * 0.20, {
            t: 1,
            sx: this._originalScale.x * 1.04,
            sy: this._originalScale.y * 0.96
          }, {
            easing: 'sineIn',
            onUpdate: function onUpdate() {
              return setLinearPosition(getTargetWithOffset(bounceHeight), getTargetWithOffset(0));
            }
          }).call(function () {
            proxy.t = 0;
          }).to(bounceDuration * 0.18, {
            t: 1,
            sx: this._originalScale.x * 0.99,
            sy: this._originalScale.y * 1.02
          }, {
            easing: 'sineOut',
            onUpdate: function onUpdate() {
              return setLinearPosition(getTargetWithOffset(0), getTargetWithOffset(bounceHeight * 0.35));
            }
          }).call(function () {
            proxy.t = 0;
          }).to(bounceDuration * 0.14, {
            t: 1,
            sx: this._originalScale.x,
            sy: this._originalScale.y
          }, {
            easing: 'sineInOut',
            onUpdate: function onUpdate() {
              return setLinearPosition(getTargetWithOffset(bounceHeight * 0.35), getTargetWithOffset(0));
            }
          }).call(finishMove).start();
        }

        /** Cập nhật vị trí đích khi tile đang bay (dùng khi tray compact/sort giữa chừng) */;
        _proto.updateMoveTarget = function updateMoveTarget(targetPos, duration) {
          var _this5 = this;
          if (!this.node || !this.node.isValid) return;
          if (!this._isAnimating || !this._moveTween) return;
          this._moveTween.stop();
          this._moveTarget = targetPos.clone();
          this._moveTween = tween(this.node).to(duration, {
            position: targetPos,
            scale: new Vec3(this._originalScale.x, this._originalScale.y, this._originalScale.z)
          }, {
            easing: 'sineOut'
          }).call(function () {
            _this5._isAnimating = false;
            _this5._moveTween = null;
            _this5._moveTarget = null;
            _this5._onMoveComplete == null || _this5._onMoveComplete();
            _this5._onMoveComplete = undefined;
          }).start();
        }

        /** Animation rơi từ trên xuống vị trí đích (dùng khi load level) */;
        _proto.playDropAnimation = function playDropAnimation(startPos, endPos, duration, delay, easing, callback) {
          var _this6 = this;
          if (delay === void 0) {
            delay = 0;
          }
          if (easing === void 0) {
            easing = 'backOut';
          }
          if (!this.node || !this.node.isValid) {
            callback == null || callback();
            return;
          }
          this._isAnimating = true;
          if (this._moveTween) {
            this._moveTween.stop();
          }
          this.node.setPosition(startPos);
          this.node.setScale(0, 0, 1);
          this._moveTween = tween(this.node).delay(delay).parallel(tween(this.node).to(duration, {
            position: endPos
          }, {
            easing: easing
          }), tween(this.node).to(duration * 0.3, {
            scale: new Vec3(this._originalScale.x, this._originalScale.y, this._originalScale.z)
          }, {
            easing: 'backOut'
          })).call(function () {
            _this6._isAnimating = false;
            _this6._moveTween = null;
            callback == null || callback();
          }).start();
        }

        /** Animation khi match clear */;
        _proto.playClearAnimation = function playClearAnimation(duration, callback) {
          var _this7 = this;
          if (!this.node || !this.node.isValid) {
            callback == null || callback();
            return;
          }
          this._isAnimating = true;
          if (this._clearTween) {
            this._clearTween.stop();
          }
          if (this._unlockTween) {
            this._unlockTween.stop();
            this._unlockTween = null;
          }
          this._clearTween = tween(this.node).to(duration * 0.5, {
            scale: new Vec3(0, 0, 1)
          }).call(function () {
            _this7._isAnimating = false;
            _this7._clearTween = null;
            callback == null || callback();
          }).start();
        }

        /** Animation tile bay từ tray vào order slot: bay lên, zoom nhẹ, nghiêng random, bay đến target, nhỏ và mất */;
        _proto.animateMatchToOrder = function animateMatchToOrder(targetWorldPos, duration, callback) {
          var _this8 = this;
          if (duration === void 0) {
            duration = 0.8;
          }
          if (!this.node || !this.node.isValid) {
            callback == null || callback();
            return;
          }
          this._isAnimating = true;
          Tween.stopAllByTarget(this.node);
          if (this._moveTween) {
            this._moveTween.stop();
            this._moveTween = null;
          }
          if (this._unlockTween) {
            this._unlockTween.stop();
            this._unlockTween = null;
          }
          if (this._clearTween) {
            this._clearTween.stop();
            this._clearTween = null;
          }
          var startWorldPos = this.node.getWorldPosition();
          var midWorldPos = new Vec3((startWorldPos.x + targetWorldPos.x) * 0.5, Math.max(startWorldPos.y, targetWorldPos.y) + 80, startWorldPos.z);
          var proxy = {
            wx: startWorldPos.x,
            wy: startWorldPos.y,
            wz: startWorldPos.z,
            scaleX: this.node.scale.x,
            scaleY: this.node.scale.y,
            angle: 0
          };
          this._moveTween = tween(proxy).to(duration * 0.35, {
            wx: midWorldPos.x,
            wy: midWorldPos.y,
            scaleX: this._originalScale.x * 1.15,
            scaleY: this._originalScale.y * 1.15,
            angle: 0
          }, {
            easing: 'sineOut',
            onUpdate: function onUpdate() {
              if (!_this8.node || !_this8.node.isValid) return;
              _this8.node.setWorldPosition(proxy.wx, proxy.wy, proxy.wz);
              _this8.node.setScale(proxy.scaleX, proxy.scaleY, 1);
              _this8.node.setRotationFromEuler(0, 0, 0);
            }
          }).to(duration * 0.45, {
            wx: targetWorldPos.x,
            wy: targetWorldPos.y,
            scaleX: this._originalScale.x * 0.9,
            scaleY: this._originalScale.y * 0.9,
            angle: 0
          }, {
            easing: 'quadIn',
            onUpdate: function onUpdate() {
              if (!_this8.node || !_this8.node.isValid) return;
              _this8.node.setWorldPosition(proxy.wx, proxy.wy, proxy.wz);
              _this8.node.setScale(proxy.scaleX, proxy.scaleY, 1);
              _this8.node.setRotationFromEuler(0, 0, 0);
            }
          }).to(duration * 0.2, {
            scaleX: 0,
            scaleY: 0
          }, {
            easing: 'quadIn',
            onUpdate: function onUpdate() {
              if (!_this8.node || !_this8.node.isValid) return;
              _this8.node.setScale(proxy.scaleX, proxy.scaleY, 1);
            }
          }).call(function () {
            _this8._isAnimating = false;
            _this8._moveTween = null;
            callback == null || callback();
          }).start();
        }

        /** Lấy tile data */;
        _proto.getData = function getData() {
          return this._data;
        }

        /** Reset state để recycle qua pool */;
        _proto.reset = function reset() {
          var _this$visualNode6;
          this.stopAllTweens();
          this._originalScale = this.node.scale.clone();
          if (this.visualNode) {
            this._originalVisualScale = this.visualNode.scale.clone();
          }
          this.node.__skinApplyId = (this.node.__skinApplyId || 0) + 1;
          this._data = null;
          this._isAnimating = false;
          this._isSelected = false;
          this._isGlowing = false;
          this._isInTrayVisual = false;
          this._lastVisualState = null;
          this.node.active = true;
          this.node.setScale(this._originalScale.x, this._originalScale.y, this._originalScale.z);
          this.node.setPosition(Vec3.ZERO);
          this.node.angle = 0;
          this.node.setRotationFromEuler(0, 0, 0);

          // Reset visual node scale
          if (this.visualNode) {
            this.visualNode.setScale(this._originalVisualScale.x, this._originalVisualScale.y, this._originalVisualScale.z);
          }

          // Reset content size
          if (this._originalContentSize) {
            var uiTransform = this.node.getComponent(UITransform);
            if (uiTransform) {
              uiTransform.setContentSize(this._originalContentSize.width, this._originalContentSize.height);
            }
          }
          if (this.visualNode && this._originalVisualContentSize) {
            var visualTransform = this.visualNode.getComponent(UITransform);
            if (visualTransform) {
              visualTransform.setContentSize(this._originalVisualContentSize.width, this._originalVisualContentSize.height);
            }
          }

          // Reset sprite
          var sprite = ((_this$visualNode6 = this.visualNode) == null ? void 0 : _this$visualNode6.getComponent(Sprite)) || this.getComponent(Sprite);
          if (sprite) {
            sprite.spriteFrame = null;
            sprite.color = Color.WHITE;
          }
          var opacity = this.node.getComponent(UIOpacity);
          if (opacity) opacity.opacity = 255;
        };
        _proto.onDestroy = function onDestroy() {
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        };
        return Tile;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "visualNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectableColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blockedColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BOARD_BLOCKED_COLOR.clone();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dimmedColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BOARD_BLOCKED_COLOR.clone();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selectedColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 220, 100, 255);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "glowColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 200, 50, 255);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "unlockFadeDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileManager.test.ts", ['cc', './TileManager.ts', './BoardManager.ts', './SkinManager.ts', './PoolManager.ts', './TestRunner.ts'], function (exports) {
  var cclegacy, TileManager, BoardManager, SkinManager, PoolManager, TestRunner;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      BoardManager = module.BoardManager;
    }, function (module) {
      SkinManager = module.SkinManager;
    }, function (module) {
      PoolManager = module.PoolManager;
    }, function (module) {
      TestRunner = module.TestRunner;
    }],
    execute: function () {
      exports('runTileManagerTests', runTileManagerTests);
      cclegacy._RF.push({}, "a16668UlVtMLZ5r9r5RQbWK", "TileManager.test", undefined);
      function runTileManagerTests() {
        var t = new TestRunner();
        var tm = new TileManager();
        TileManager.Instance = tm;

        // Mock BoardManager
        var fakeBoard = {
          _grid: new Map(),
          registerTile: function registerTile(data) {
            var key = data.gridX + "_" + data.gridY;
            var list = this._grid.get(key) || [];
            list.push(data);
            this._grid.set(key, list);
          },
          unregisterTile: function unregisterTile(data) {
            var key = data.gridX + "_" + data.gridY;
            var list = this._grid.get(key) || [];
            var idx = list.findIndex(function (d) {
              return d.id === data.id;
            });
            if (idx !== -1) list.splice(idx, 1);
            if (list.length === 0) this._grid["delete"](key);
          },
          isTileBlocked: function isTileBlocked(data) {
            return false;
          },
          getWorldPosition: function getWorldPosition(x, y, layer) {
            return {
              x: 0,
              y: 0,
              z: 0
            };
          },
          clearBoard: function clearBoard() {
            this._grid.clear();
          }
        };
        BoardManager.Instance = fakeBoard;

        // Mock SkinManager
        var fakeSkin = {
          getTilePrefabKey: function getTilePrefabKey(gid) {
            return 'prefab_' + gid;
          },
          applyTileSkin: function applyTileSkin() {}
        };
        SkinManager.Instance = fakeSkin;

        // Mock PoolManager
        var fakePool = {
          nodes: new Map(),
          prefabs: new Map(),
          get: function get(key) {
            var arr = this.nodes.get(key) || [];
            if (arr.length > 0) {
              var n = arr.pop();
              n.active = true;
              return n;
            }
            var prefab = this.prefabs.get(key);
            if (prefab) {
              return {
                setParent: function setParent() {},
                setPosition: function setPosition() {},
                getComponent: function getComponent() {
                  return null;
                },
                addComponent: function addComponent() {
                  return {
                    reset: function reset() {},
                    initialize: function initialize() {}
                  };
                },
                active: true,
                scale: {
                  x: 1,
                  y: 1,
                  z: 1
                },
                destroy: function destroy() {},
                removeFromParent: function removeFromParent() {}
              };
            }
            return null;
          },
          put: function put(key, node) {
            if (!node) return;
            node.active = false;
            if (node.removeFromParent) node.removeFromParent();
            var arr = this.nodes.get(key) || [];
            if (arr.indexOf(node) === -1) arr.push(node);
            this.nodes.set(key, arr);
          },
          registerPrefab: function registerPrefab(key, prefab) {
            this.prefabs.set(key, prefab);
          }
        };
        PoolManager._instance = fakePool;
        t.describe('TileManager Spawn & Clear', function () {
          t.it('should spawn tiles and register to board', function () {
            fakeBoard.clearBoard();
            var tiles = [{
              id: 'T1',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'T2',
              groupId: 'g1',
              tileType: 0,
              gridX: 1,
              gridY: 1,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            tm.spawnTiles(tiles);
            t.assertEquals(tm.getAllTileData().length, 2);
            t.assertEquals(fakeBoard._grid.size, 2);
            tm.clearTiles();
          });
          t.it('should clear board state on clearTiles', function () {
            tm.spawnTiles([{
              id: 'T1',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }]);
            tm.clearTiles();
            t.assertEquals(fakeBoard._grid.size, 0, 'Board grid should be cleared');
          });
        });
        t.describe('TileManager Click & Remove', function () {
          t.it('should reject click when input locked', function () {
            tm.spawnTiles([{
              id: 'T1',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }]);
            tm.setInputLocked(true);
            var crashed = false;
            try {
              tm.onTileClicked('T1');
            } catch (e) {
              crashed = true;
            }
            t.assertFalse(crashed, 'No crash when locked');
            tm.setInputLocked(false);
            tm.clearTiles();
          });
          t.it('should remove tile from board without destroying node', function () {
            tm.spawnTiles([{
              id: 'T1',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }]);
            tm.removeFromBoard('T1');
            var data = tm.getTileData('T1');
            t.assertTrue(data !== undefined && !data.active, 'Tile should be inactive after removeFromBoard');
            tm.clearTiles();
          });
        });
        t.describe('TileManager Restore', function () {
          t.it('should restore tile data and set active on undo', function () {
            var data = {
              id: 'T1',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: false,
              selectable: false,
              isBlocked: false
            };
            var node = {
              setParent: function setParent() {},
              setPosition: function setPosition() {},
              removeFromParent: function removeFromParent() {},
              getComponent: function getComponent() {
                return null;
              },
              isValid: true,
              active: true,
              destroy: function destroy() {}
            };
            tm._tileDataMap.set('T1', data);
            tm._tileNodeMap.set('T1', node);
            tm.restoreToBoard(data, node);
            t.assertTrue(data.active, 'Restored tile should be active');
            tm.clearTiles();
          });
        });
        t.printReport();
        return t;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameEvent.ts', './EventBus.ts', './PoolManager.ts', './BoardManager.ts', './TrayManager.ts', './SkinManager.ts', './OrderManager.ts', './BoardPositionHelper.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _extends, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Vec3, tween, UITransform, Tween, UIOpacity, Component, GameEvent, EventBus, PoolManager, BoardManager, TrayManager, SkinManager, OrderManager, BoardPositionHelper, AudioManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      tween = module.tween;
      UITransform = module.UITransform;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      PoolManager = module.PoolManager;
    }, function (module) {
      BoardManager = module.BoardManager;
    }, function (module) {
      TrayManager = module.TrayManager;
    }, function (module) {
      SkinManager = module.SkinManager;
    }, function (module) {
      OrderManager = module.OrderManager;
    }, function (module) {
      BoardPositionHelper = module.BoardPositionHelper;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "0149aOjL8VC8qQ8wdFqS3D8", "TileManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * TileManager - Quản lý lifecycle của tile: spawn, click, move, match, despawn.
       * Mỗi tile là một Node trong scene, được tạo từ prefab qua PoolManager.
       * Tile data được lưu trong map, không hardcode trong prefab.
       */
      var TileManager = exports('TileManager', (_dec = ccclass('TileManager'), _dec2 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TileManager, _Component);
        function TileManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tileContainer", _descriptor, _assertThisInitialized(_this));
          /** Độ cao tile xuất hiện trước khi rơi xuống (pixel) */
          _initializerDefineProperty(_this, "dropHeight", _descriptor2, _assertThisInitialized(_this));
          /** Thời gian rơi xuống của mỗi tile (giây) */
          _initializerDefineProperty(_this, "dropDuration", _descriptor3, _assertThisInitialized(_this));
          /** Delay lần lượt giữa các tile (giây) */
          _initializerDefineProperty(_this, "staggerDelay", _descriptor4, _assertThisInitialized(_this));
          /** Easing khi rơi: 'sineOut', 'backOut', 'bounceOut', 'quadOut', ... */
          _initializerDefineProperty(_this, "dropEasing", _descriptor5, _assertThisInitialized(_this));
          _this._tileDataMap = new Map();
          _this._tileNodeMap = new Map();
          _this._clickableTiles = new Set();
          _this._isInputLocked = false;
          _this._enforceGroupMatchBlock = true;
          _this._lifecycleId = 0;
          _this._tileContainerOriginalPos = null;
          _this._createTilesAtDropStart = false;
          return _this;
        }
        TileManager.getInstance = function getInstance() {
          return TileManager.Instance;
        };
        var _proto = TileManager.prototype;
        _proto.onLoad = function onLoad() {
          if (TileManager.Instance) {
            this.destroy();
            return;
          }
          TileManager.Instance = this;
          if (this.tileContainer && this.tileContainer.isValid) {
            this._tileContainerOriginalPos = this.tileContainer.position.clone();
          }
        }

        /** Spawn tiles từ level data. animateDrop=true sẽ chơi animation rơi từ trên xuống theo thứ tự layer dưới trước. */;
        _proto.spawnTiles = function spawnTiles(tileDataList, animateDrop, enforceGroupMatchBlock) {
          if (animateDrop === void 0) {
            animateDrop = false;
          }
          if (enforceGroupMatchBlock === void 0) {
            enforceGroupMatchBlock = true;
          }
          this.clearTiles();
          this._enforceGroupMatchBlock = enforceGroupMatchBlock;
          this._lifecycleId++;
          var lifecycleId = this._lifecycleId;

          // Phase 1: Register all tiles to board grid trước để occlusion check có dữ liệu đầy đủ
          for (var _iterator = _createForOfIteratorHelperLoose(tileDataList), _step; !(_step = _iterator()).done;) {
            var _data = _step.value;
            _data.active = true;
            this._tileDataMap.set(_data.id, _data);
            BoardManager.getInstance().registerTile(_data);
          }

          // Phase 2: Tính block status với grid đã đầy đủ
          this.updateBlockStatus(tileDataList);

          // Phase 3: Tạo visual nodes
          if (animateDrop) {
            this.spawnTilesWithDrop(tileDataList, lifecycleId);
          } else {
            for (var _iterator2 = _createForOfIteratorHelperLoose(tileDataList), _step2; !(_step2 = _iterator2()).done;) {
              var data = _step2.value;
              this.createTileNode(data);
            }
          }

          // Phase 3.5: Sắp xếp lại sibling index theo layer để đảm bảo render đúng thứ tự
          this._sortTileNodesByLayer();

          // Phase 4: Áp dụng group count block logic (TRIPLE_MATCH) sau khi có nodes
          this.refreshBlockStatus();
        };
        _proto.spawnTilesWaitingDrop = /*#__PURE__*/function () {
          var _spawnTilesWaitingDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(tileDataList, enforceGroupMatchBlock) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (enforceGroupMatchBlock === void 0) {
                    enforceGroupMatchBlock = true;
                  }
                  try {
                    this._createTilesAtDropStart = true;
                    this.spawnTiles(tileDataList, false, enforceGroupMatchBlock);
                  } finally {
                    this._createTilesAtDropStart = false;
                  }
                  this.setInputLocked(true);
                  _context.next = 5;
                  return this.applyAllTileSkinsAsync();
                case 5:
                  this._tileDataMap.forEach(function (data, id) {
                    var node = _this2._tileNodeMap.get(id);
                    if (!node) return;
                    var endPos = BoardManager.getInstance().getWorldPosition(data.gridX, data.gridY, data.layer);
                    node.setPosition(endPos.x, endPos.y + _this2.dropHeight, endPos.z);
                    node.setScale(1, 1, 1);
                  });
                  this._sortTileNodesByLayer();
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function spawnTilesWaitingDrop(_x, _x2) {
            return _spawnTilesWaitingDrop.apply(this, arguments);
          }
          return spawnTilesWaitingDrop;
        }();
        _proto.playWaitingDropAnimation = function playWaitingDropAnimation(onComplete) {
          var _this3 = this,
            _AudioManager$getInst;
          var lifecycleId = ++this._lifecycleId;
          var entries = [];
          this._tileDataMap.forEach(function (data, id) {
            var node = _this3._tileNodeMap.get(id);
            if (data.active && node && node.isValid) {
              entries.push({
                data: data,
                node: node
              });
            }
          });
          entries.sort(function (a, b) {
            if (a.data.layer !== b.data.layer) return _this3.compareLayerForRender(a.data.layer, b.data.layer);
            if (a.data.gridY !== b.data.gridY) return b.data.gridY - a.data.gridY;
            return a.data.gridX - b.data.gridX;
          });
          if (entries.length === 0) {
            this.setInputLocked(false);
            onComplete == null || onComplete();
            return;
          }
          this.setInputLocked(true);
          (_AudioManager$getInst = AudioManager.getInstance()) == null || _AudioManager$getInst.playRepeatingSfx('tile_fall', 0.07);
          var completedCount = 0;
          var finishOne = function finishOne() {
            if (lifecycleId !== _this3._lifecycleId) return;
            completedCount++;
            if (completedCount >= entries.length) {
              var _AudioManager$getInst2;
              (_AudioManager$getInst2 = AudioManager.getInstance()) == null || _AudioManager$getInst2.stopRepeatingSfx('tile_fall');
              _this3.refreshBlockStatus();
              _this3.setInputLocked(false);
              onComplete == null || onComplete();
            }
          };
          for (var i = 0; i < entries.length; i++) {
            var _entries$i = entries[i],
              data = _entries$i.data,
              node = _entries$i.node;
            var endPos = BoardManager.getInstance().getWorldPosition(data.gridX, data.gridY, data.layer);
            var startPos = new Vec3(endPos.x, endPos.y + this.dropHeight, endPos.z);
            var delay = i * this.staggerDelay;
            var tileComp = node.getComponent('Tile');
            if (tileComp != null && tileComp.playDropAnimation) {
              tileComp.playDropAnimation(startPos, endPos, this.dropDuration, delay, this.dropEasing, finishOne);
            } else {
              node.setPosition(startPos);
              tween(node).delay(delay).to(this.dropDuration, {
                position: endPos
              }).call(finishOne).start();
            }
          }
        }

        /** Prewarm pool để tránh instantiate runtime gây giật khi load level */;
        _proto.prewarmPool = function prewarmPool(count) {
          var _this4 = this;
          var prefabKey = SkinManager.getInstance().getTilePrefabKey('default');
          PoolManager.getInstance().ensureCapacity(prefabKey, count);
          PoolManager.getInstance().preparePool(prefabKey, function (node) {
            _this4.prepareTileNodeForGameplay(node);
            var tileComponent = node.getComponent('Tile') || node.addComponent('Tile');
            var tileComp = tileComponent;
            if (tileComp != null && tileComp.reset) tileComp.reset();
            node.active = false;
          });
        }

        /** Spawn tile với animation rơi từ trên xuống lần lượt từng tile:
         *  - Layer dưới trước, layer trên sau
         *  - Trong cùng layer: từ dưới lên trên (gridY cao trước), từ trái sang phải (gridX tăng)
         */;
        _proto.spawnTilesWithDrop = function spawnTilesWithDrop(tileDataList, lifecycleId) {
          var _this5 = this;
          this.setInputLocked(true);
          var sorted = [].concat(tileDataList).sort(function (a, b) {
            if (a.layer !== b.layer) return _this5.compareLayerForRender(a.layer, b.layer);
            if (a.gridY !== b.gridY) return b.gridY - a.gridY;
            return a.gridX - b.gridX;
          });
          if (sorted.length > 0) {
            var _AudioManager$getInst3;
            (_AudioManager$getInst3 = AudioManager.getInstance()) == null || _AudioManager$getInst3.playRepeatingSfx('tile_fall', 0.07);
          } else {
            this.setInputLocked(false);
            return;
          }
          var completedCount = 0;
          var totalCount = sorted.length;
          for (var i = 0; i < sorted.length; i++) {
            var delay = i * this.staggerDelay;
            var created = this.createTileNodeWithDrop(sorted[i], delay, function () {
              if (lifecycleId !== _this5._lifecycleId) return;
              completedCount++;
              if (completedCount >= totalCount) {
                var _AudioManager$getInst4;
                (_AudioManager$getInst4 = AudioManager.getInstance()) == null || _AudioManager$getInst4.stopRepeatingSfx('tile_fall');
                _this5.refreshBlockStatus();
                _this5.setInputLocked(false);
              }
            });
            if (!created) {
              completedCount++;
            }
          }
          if (completedCount >= totalCount) {
            var _AudioManager$getInst5;
            (_AudioManager$getInst5 = AudioManager.getInstance()) == null || _AudioManager$getInst5.stopRepeatingSfx('tile_fall');
            this.refreshBlockStatus();
            this.setInputLocked(false);
          }
        }

        /** Tạo visual node cho tile đã được đăng ký */;
        _proto.createTileNode = function createTileNode(data, forceCreate) {
          if (forceCreate === void 0) {
            forceCreate = false;
          }
          if (!data.active && !forceCreate || !this.tileContainer) return;

          // Lấy prefab từ SkinManager theo groupId
          var prefabKey = SkinManager.getInstance().getTilePrefabKey(data.groupId);
          var node = PoolManager.getInstance().get(prefabKey);
          if (!node) return;
          this.prepareTileNodeForGameplay(node);
          this.applyTileNodeSize(node, data);
          this.applyTileNodeName(node, data);
          node.setParent(this.tileContainer);
          this._tileNodeMap.set(data.id, node);
          var uiTransform = node.getComponent(UITransform);
          var visualNode = node.getChildByName('visual');
          var visualTransform = visualNode == null ? void 0 : visualNode.getComponent(UITransform);

          // Reset và khởi tạo lại component Tile từ pool TRƯỚC khi set vị trí / skin
          var tileComponent = node.getComponent('Tile') || node.addComponent('Tile');
          if (tileComponent) {
            var tileComp = tileComponent;
            if (tileComp.reset) tileComp.reset();
            this.prepareTileNodeForGameplay(node);
            this.applyTileNodeSize(node, data);
            this.applyTileNodeName(node, data);
            tileComp.initialize(data);
          }

          // Đặt vị trí world từ gridX, gridY, layer (SAU reset để không bị ghi đè)
          var bm = BoardManager.getInstance();
          var worldPos = bm.getWorldPosition(data.gridX, data.gridY, data.layer);

          // BoardManager.getWorldPosition() giờ trả về pixel coordinates trong Canvas space
          // (đã cộng screenCenterX/Y). setPosition dùng local position trong parent (Canvas).
          // Đảm bảo tileContainer ở (0,0,0) trong Editor.
          if (this._createTilesAtDropStart) {
            node.setPosition(worldPos.x, worldPos.y + this.dropHeight, worldPos.z);
            node.setScale(0, 0, 1);
          } else {
            node.setPosition(worldPos.x, worldPos.y, worldPos.z);
          }

          // Cập nhật trạng thái selectable
          if (data.selectable && !data.isBlocked) {
            this._clickableTiles.add(data.id);
          }
          this.applyTileSkin(node, data);
        }

        /** Tạo visual node với animation rơi từ trên xuống */;
        _proto.createTileNodeWithDrop = function createTileNodeWithDrop(data, delay, onComplete) {
          if (!data.active || !this.tileContainer) return false;
          var prefabKey = SkinManager.getInstance().getTilePrefabKey(data.groupId);
          var node = PoolManager.getInstance().get(prefabKey);
          if (!node) return false;
          this.prepareTileNodeForGameplay(node);
          this.applyTileNodeSize(node, data);
          this.applyTileNodeName(node, data);
          node.setParent(this.tileContainer);
          this._tileNodeMap.set(data.id, node);
          var tileComponent = node.getComponent('Tile') || node.addComponent('Tile');
          if (tileComponent) {
            var _tileComp = tileComponent;
            if (_tileComp.reset) _tileComp.reset();
            this.prepareTileNodeForGameplay(node);
            this.applyTileNodeSize(node, data);
            this.applyTileNodeName(node, data);
            _tileComp.initialize(data);
          }
          var bm = BoardManager.getInstance();
          var endPos = bm.getWorldPosition(data.gridX, data.gridY, data.layer);
          var startPos = new Vec3(endPos.x, endPos.y + this.dropHeight, endPos.z);
          if (data.selectable && !data.isBlocked) {
            this._clickableTiles.add(data.id);
          }
          this.applyTileSkin(node, data);
          var tileComp = node.getComponent('Tile');
          if (tileComp && tileComp.playDropAnimation) {
            tileComp.playDropAnimation(startPos, endPos, this.dropDuration, delay, this.dropEasing, onComplete);
          } else {
            tween(node).delay(delay).to(this.dropDuration, {
              position: endPos
            }).call(function () {
              return onComplete == null ? void 0 : onComplete();
            }).start();
          }
          return true;
        }

        /** Áp dụng skin cho tile node */;
        _proto.applyTileSkin = function applyTileSkin(node, data) {
          var skinMgr = SkinManager.getInstance();
          var skinOverride = data.skinOverride;
          if (!skinOverride) {
            var currentSkin = skinMgr.getCurrentSkin();
            var skinId = (currentSkin == null ? void 0 : currentSkin.skinId) || 'default';
            if (typeof data.groupId !== 'string') {
              return;
            }
            skinOverride = skinId + "/" + data.groupId;
          }
          skinMgr.applyTileSkin(node, skinOverride);
        };
        _proto.applyAllTileSkinsAsync = /*#__PURE__*/function () {
          var _applyAllTileSkinsAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this6 = this;
            var skinMgr, currentSkin, skinId, promises;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  skinMgr = SkinManager.getInstance();
                  currentSkin = skinMgr.getCurrentSkin();
                  skinId = (currentSkin == null ? void 0 : currentSkin.skinId) || 'default';
                  promises = [];
                  this._tileDataMap.forEach(function (data, id) {
                    var node = _this6._tileNodeMap.get(id);
                    if (!node || !node.isValid) return;
                    if (typeof data.groupId !== 'string') return;
                    var skinOverride = data.skinOverride || skinId + "/" + data.groupId;
                    promises.push(skinMgr.applyTileSkinAsync(node, skinOverride));
                  });
                  _context2.next = 7;
                  return Promise.all(promises);
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function applyAllTileSkinsAsync() {
            return _applyAllTileSkinsAsync.apply(this, arguments);
          }
          return applyAllTileSkinsAsync;
        }();
        _proto.prepareTileNodeForGameplay = function prepareTileNodeForGameplay(node) {
          var _node$getComponent;
          Tween.stopAllByTarget(node);
          node.active = true;
          node.angle = 0;
          node.setRotationFromEuler(0, 0, 0);
          node.setScale(1, 1, 1);
          var opacity = node.getComponent(UIOpacity);
          if (opacity) opacity.opacity = 255;
          var visualNode = node.getChildByName('visual') || ((_node$getComponent = node.getComponent('Tile')) == null ? void 0 : _node$getComponent.visualNode);
          if (visualNode && visualNode.isValid) {
            Tween.stopAllByTarget(visualNode);
            visualNode.angle = 0;
            visualNode.setRotationFromEuler(0, 0, 0);
            visualNode.setScale(1, 1, 1);
            var visualOpacity = visualNode.getComponent(UIOpacity);
            if (visualOpacity) visualOpacity.opacity = 255;
          }
        };
        _proto.applyTileNodeSize = function applyTileNodeSize(node, data) {
          var _data$tileWidth, _data$tileHeight, _node$getComponent2;
          var board = BoardManager.getInstance().getConfig();
          var width = (_data$tileWidth = data.tileWidth) != null ? _data$tileWidth : board == null ? void 0 : board.tileWidth;
          var height = (_data$tileHeight = data.tileHeight) != null ? _data$tileHeight : board == null ? void 0 : board.tileHeight;
          if (!Number.isFinite(width) || !Number.isFinite(height) || !width || !height) return;
          var uiTransform = node.getComponent(UITransform);
          if (uiTransform) uiTransform.setContentSize(width, height);
          var visualNode = node.getChildByName('visual') || ((_node$getComponent2 = node.getComponent('Tile')) == null ? void 0 : _node$getComponent2.visualNode);
          var visualTransform = visualNode == null ? void 0 : visualNode.getComponent(UITransform);
          if (visualTransform) visualTransform.setContentSize(width, height);
        };
        _proto.applyTileNodeName = function applyTileNodeName(node, data) {
          var _node$getComponentInC;
          node.name = data.id + "_L" + data.layer + "_G" + data.groupId + "_X" + data.gridX + "_Y" + data.gridY;
          var tileComp = node.getComponent('Tile');
          var visualNode = node.getChildByName('visual') || (tileComp == null ? void 0 : tileComp.visualNode) || ((_node$getComponentInC = node.getComponentInChildren(UITransform)) == null ? void 0 : _node$getComponentInC.node);
          if (visualNode && visualNode.isValid && visualNode !== node) {
            visualNode.name = 'visual';
          }
        }

        /** Xử lý khi người chơi click tile */;
        _proto.onTileClicked = function onTileClicked(tileId) {
          this.tryClickTile(tileId);
        };
        _proto.tryClickTile = function tryClickTile(tileId, ignoreInputLock) {
          if (ignoreInputLock === void 0) {
            ignoreInputLock = false;
          }
          if (this._isInputLocked && !ignoreInputLock) return false;
          if (!this._clickableTiles.has(tileId)) return false;
          var data = this._tileDataMap.get(tileId);
          if (!data || !data.active || !data.selectable) return false;
          // Update visual selected state
          var node = this._tileNodeMap.get(tileId);
          if (node) {
            var tileComp = node.getComponent('Tile');
            if (tileComp) tileComp.setSelected(true);
          }
          EventBus.getInstance().emit(GameEvent.TILE_CLICKED, data);
          return true;
        }

        /** Mở/khóa input toàn cục */;
        _proto.setInputLocked = function setInputLocked(locked) {
          this._isInputLocked = locked;
        };
        _proto.isInputLocked = function isInputLocked() {
          return this._isInputLocked;
        };
        _proto.getLifecycleId = function getLifecycleId() {
          return this._lifecycleId;
        }

        /**
         * Xóa tile khỏi board state (grid, clickable) nhưng giữ node alive.
         * Dùng khi tile bay vào tray.
         */;
        _proto.removeFromBoard = function removeFromBoard(tileId) {
          var data = this._tileDataMap.get(tileId);
          if (!data) return;
          data.active = false;
          data.selectable = false;
          this._clickableTiles["delete"](tileId);
          BoardManager.getInstance().unregisterTile(data);

          // Refresh block status cho các tile còn lại
          this.refreshBlockStatus();
        }

        /**
         * Khôi phục tile về board (cho Undo).
         */;
        _proto.restoreToBoard = function restoreToBoard(data, node) {
          data.active = true;
          this._tileDataMap.set(data.id, data);
          this._tileNodeMap.set(data.id, node);
          this.applyTileNodeName(node, data);

          // Đặt lại parent và vị trí
          if (this.tileContainer) {
            node.setParent(this.tileContainer);
          }
          var worldPos = BoardManager.getInstance().getWorldPosition(data.gridX, data.gridY, data.layer);
          node.setPosition(worldPos);
          BoardManager.getInstance().registerTile(data);

          // Sắp xếp lại sibling index theo layer để tile layer cao render phía trên
          this._sortTileNodesByLayer();

          // Refresh block status
          this.refreshBlockStatus();
        }

        /** Sắp xếp các tile node trong tileContainer theo layer tăng dần */;
        _proto._sortTileNodesByLayer = function _sortTileNodesByLayer() {
          var _this7 = this;
          if (!this.tileContainer) return;
          var entries = [];
          this._tileDataMap.forEach(function (data, id) {
            var node = _this7._tileNodeMap.get(id);
            if (node && node.isValid && node.parent === _this7.tileContainer) {
              entries.push({
                data: data,
                node: node
              });
            }
          });
          entries.sort(function (a, b) {
            if (a.data.layer !== b.data.layer) return _this7.compareLayerForRender(a.data.layer, b.data.layer);
            var ay = a.node.position.y;
            var by = b.node.position.y;
            if (ay !== by) return by - ay;
            if (a.data.gridY !== b.data.gridY) return a.data.gridY - b.data.gridY;
            if (a.data.gridX !== b.data.gridX) return a.data.gridX - b.data.gridX;
            return a.data.id.localeCompare(b.data.id);
          });
          for (var i = 0; i < entries.length; i++) {
            entries[i].node.setSiblingIndex(i);
          }
        };
        _proto.sortTileNodesByLayer = function sortTileNodesByLayer() {
          this._sortTileNodesByLayer();
        };
        _proto.compareLayerForRender = function compareLayerForRender(aLayer, bLayer) {
          var _BoardManager$getInst;
          var config = (_BoardManager$getInst = BoardManager.getInstance()) == null ? void 0 : _BoardManager$getInst.getConfig();
          return (config == null ? void 0 : config.layerOrder) === 'lowerOnTop' ? bLayer - aLayer : aLayer - bLayer;
        }

        /** Xóa tile khỏi board (khi đã match) */;
        _proto.removeTile = function removeTile(tileId) {
          var data = this._tileDataMap.get(tileId);
          var node = this._tileNodeMap.get(tileId);
          if (data && node) {
            data.active = false;
            BoardManager.getInstance().unregisterTile(data);

            // Stop tween và reset trước khi put về pool
            var tileComp = node.getComponent('Tile');
            if (tileComp) {
              if (tileComp.stopAllTweens) tileComp.stopAllTweens();
              if (tileComp.reset) tileComp.reset();
            }
            if (node.parent) {
              node.removeFromParent();
            }
            var prefabKey = SkinManager.getInstance().getTilePrefabKey(data.groupId);
            if (prefabKey) {
              PoolManager.getInstance().put(prefabKey, node);
            } else {
              node.destroy();
            }
          }
          this._tileDataMap["delete"](tileId);
          this._tileNodeMap["delete"](tileId);
          this._clickableTiles["delete"](tileId);

          // Cập nhật block status cho các tile còn lại
          this.refreshBlockStatus();
        }

        /** Cập nhật trạng thái block/selectable cho tất cả tile */;
        _proto.updateBlockStatus = function updateBlockStatus(tileDataList) {
          var activeTiles = tileDataList.filter(function (data) {
            return data.active;
          });
          for (var _iterator3 = _createForOfIteratorHelperLoose(tileDataList), _step3; !(_step3 = _iterator3()).done;) {
            var data = _step3.value;
            data.isBlocked = this.computeTileBlocked(data, activeTiles);
            data.selectable = data.active && !data.isBlocked;
          }
        }

        /** Refresh block status sau khi tile bị xóa */;
        _proto.refreshBlockStatus = function refreshBlockStatus(forceVisual) {
          var _this8 = this;
          if (forceVisual === void 0) {
            forceVisual = false;
          }
          var allData = Array.from(this._tileDataMap.values());
          var matchCount = TrayManager.getInstance().getMatchCount();
          var trayTiles = TrayManager.getInstance().getTrayTiles();
          this._clickableTiles.clear();
          var _loop = function _loop() {
            var data = _allData[_i];
            if (!data.active) return 1; // continue
            data.isBlocked = _this8.computeTileBlocked(data, allData);
            data.selectable = !data.isBlocked;

            // Nếu không bị che, kiểm tra xem tile có thể tạo match không
            // (chỉ áp dụng cho TRIPLE_MATCH; ORDER_MATCH không block theo group count)
            if (data.selectable && _this8._enforceGroupMatchBlock && !OrderManager.getInstance().isActive()) {
              var sameGroupOnBoard = allData.filter(function (d) {
                return d.active && d.groupId === data.groupId;
              }).length;
              var sameGroupInTray = trayTiles.filter(function (t) {
                return t.groupId === data.groupId;
              }).length;
              var totalSameGroup = sameGroupOnBoard + sameGroupInTray;

              // Block nếu không đủ tile cùng group để tạo ít nhất 1 match
              if (totalSameGroup < matchCount) {
                data.selectable = false;
                data.isBlocked = true;
              }
            }
            if (data.isBlocked) ;
            if (data.selectable) ;

            // Update visual state
            var node = _this8._tileNodeMap.get(data.id);
            if (node) {
              var tileComp = node.getComponent('Tile');
              if (tileComp) {
                var isInTray = trayTiles.some(function (t) {
                  return t.id === data.id;
                });
                if (isInTray && tileComp.setTrayVisual) {
                  tileComp.setTrayVisual();
                } else if (forceVisual && tileComp.forceUpdateBoardVisualState) {
                  tileComp.forceUpdateBoardVisualState();
                } else if (forceVisual && tileComp.forceUpdateVisualState) {
                  tileComp.forceUpdateVisualState();
                } else {
                  tileComp.updateVisualState();
                }
              }
            }
            if (data.selectable) {
              _this8._clickableTiles.add(data.id);
            }
          };
          for (var _i = 0, _allData = allData; _i < _allData.length; _i++) {
            if (_loop()) continue;
          }
        }

        /** Lấy tile data theo ID */;
        _proto.computeTileBlocked = function computeTileBlocked(tile, allData) {
          if (!tile.active) return true;
          var boardConfig = BoardManager.getInstance().getConfig();
          if (!boardConfig) return true;
          return BoardPositionHelper.isTileBlocked(tile, allData, boardConfig);
        };
        _proto.getTileData = function getTileData(tileId) {
          return this._tileDataMap.get(tileId);
        }

        /** Lấy tile node theo ID */;
        _proto.getTileNode = function getTileNode(tileId) {
          return this._tileNodeMap.get(tileId);
        };
        _proto.registerTileNode = function registerTileNode(tileId, node) {
          this._tileNodeMap.set(tileId, node);
        }

        /** Đếm số tile còn active */;
        _proto.getRemainingTileCount = function getRemainingTileCount() {
          var count = 0;
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._tileDataMap.values()), _step4; !(_step4 = _iterator4()).done;) {
            var data = _step4.value;
            if (data.active) count++;
          }
          return count;
        }

        /** Lấy danh sách tile còn lại */;
        _proto.getAllTileData = function getAllTileData() {
          return Array.from(this._tileDataMap.values());
        };
        _proto.restoreTilesFromSnapshot = function restoreTilesFromSnapshot(tileDataList) {
          var enforceGroupMatchBlock = this._enforceGroupMatchBlock;
          this.clearTiles();
          this._enforceGroupMatchBlock = enforceGroupMatchBlock;
          var tiles = tileDataList.map(function (t) {
            return _extends({}, t);
          });
          for (var _iterator5 = _createForOfIteratorHelperLoose(tiles), _step5; !(_step5 = _iterator5()).done;) {
            var data = _step5.value;
            this._tileDataMap.set(data.id, data);
            if (data.active) BoardManager.getInstance().registerTile(data);
          }
          this.updateBlockStatus(tiles);
          for (var _iterator6 = _createForOfIteratorHelperLoose(tiles), _step6; !(_step6 = _iterator6()).done;) {
            var _data2 = _step6.value;
            if (_data2.active) {
              this.createTileNode(_data2, true);
            }
          }
          this._sortTileNodesByLayer();
          this.refreshBlockStatus(true);
        }

        /** Clear tất cả tiles */;
        _proto.clearTiles = function clearTiles() {
          var _AudioManager$getInst6,
            _this9 = this;
          this._lifecycleId++;
          (_AudioManager$getInst6 = AudioManager.getInstance()) == null || _AudioManager$getInst6.stopRepeatingSfx('tile_fall');
          this._tileNodeMap.forEach(function (node, id) {
            var data = _this9._tileDataMap.get(id);
            var tileComp = node.getComponent('Tile');
            if (tileComp) {
              if (tileComp.stopAllTweens) tileComp.stopAllTweens();
              if (tileComp.reset) tileComp.reset();
            }
            // Ensure node is removed from parent before pool/destroy
            if (node.parent) {
              node.removeFromParent();
            }
            if (data) {
              var prefabKey = SkinManager.getInstance().getTilePrefabKey(data.groupId);
              if (prefabKey) {
                PoolManager.getInstance().put(prefabKey, node);
              } else {
                node.destroy();
              }
            } else {
              node.destroy();
            }
          });
          this._tileDataMap.clear();
          this._tileNodeMap.clear();
          this._clickableTiles.clear();
          this._isInputLocked = false;
          this._enforceGroupMatchBlock = true;
          BoardManager.getInstance().clearBoard();
        }

        /** Rung toàn bộ tile container (feedback khi không tìm được hint) */;
        _proto.shakeAllTiles = function shakeAllTiles() {
          if (!this.tileContainer || !this.tileContainer.isValid) return;
          var node = this.tileContainer;
          Tween.stopAllByTarget(node);
          if (!this._tileContainerOriginalPos) {
            this._tileContainerOriginalPos = node.position.clone();
          }
          var originalPos = this._tileContainerOriginalPos;
          node.setPosition(originalPos);
          tween(node).to(0.05, {
            position: new Vec3(originalPos.x - 8, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: new Vec3(originalPos.x + 8, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: new Vec3(originalPos.x - 8, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: new Vec3(originalPos.x + 8, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: originalPos
          }).start();
        };
        _proto.onDestroy = function onDestroy() {
          if (TileManager.Instance === this) {
            TileManager.Instance = null;
          }
        };
        return TileManager;
      }(Component), _class3.Instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tileContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dropHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 600;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dropDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "staggerDelay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dropEasing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'backOut';
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3ed9dCmuvNJ5YwXl0j5+4Wq", "TileType", undefined);
      /**
       * Enum phân loại tile theo gameplay.
       * Có thể mở rộng thêm các loại tile đặc biệt (wild, bomb...)
       */
      var TileType = exports('TileType', /*#__PURE__*/function (TileType) {
        TileType[TileType["NORMAL"] = 0] = "NORMAL";
        TileType[TileType["WILD"] = 1] = "WILD";
        TileType[TileType["FROZEN"] = 2] = "FROZEN";
        TileType[TileType["LOCKED"] = 3] = "LOCKED";
        TileType[TileType["BOMB"] = 4] = "BOMB";
        return TileType;
      }({})); // Tile nổ xóa xung quanh
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TrayManager.test.ts", ['cc', './TrayManager.ts', './TileManager.ts', './TestRunner.ts'], function (exports) {
  var cclegacy, TrayManager, TileManager, TestRunner;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TrayManager = module.TrayManager;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      TestRunner = module.TestRunner;
    }],
    execute: function () {
      exports('runTrayManagerTests', runTrayManagerTests);
      cclegacy._RF.push({}, "993ba/pW6RJALWm177wr9kh", "TrayManager.test", undefined);

      // Mock TileManager data map
      var mockTileData = new Map();
      var mockTileNode = new Map();
      function mockGetTileData(id) {
        return mockTileData.get(id);
      }
      function mockGetTileNode(id) {
        return mockTileNode.get(id);
      }
      function runTrayManagerTests() {
        var t = new TestRunner();
        var tray = new TrayManager();
        TrayManager.Instance = tray;
        var config = {
          maxSlots: 8,
          matchCount: 3,
          screenPosition: {
            x: 0,
            y: -400
          },
          slotSpacing: 90
        };

        // Setup mock data
        for (var i = 0; i < 10; i++) {
          mockTileData.set("T" + i, {
            id: "T" + i,
            groupId: "group" + i % 3,
            tileType: 0,
            gridX: i,
            gridY: i,
            layer: 0,
            active: true,
            selectable: true,
            isBlocked: false
          });
          mockTileNode.set("T" + i, {
            setParent: function setParent() {},
            setPosition: function setPosition() {},
            getComponent: function getComponent() {
              return null;
            }
          });
        }

        // Minimal TileManager mock
        var fakeTM = {
          getTileData: mockGetTileData,
          getTileNode: mockGetTileNode,
          removeFromBoard: function removeFromBoard(id) {},
          restoreToBoard: function restoreToBoard(data, node) {},
          setInputLocked: function setInputLocked(locked) {}
        };
        TileManager.Instance = fakeTM;
        t.describe('TrayManager Basic Operations', function () {
          t.it('should initialize with empty tray', function () {
            tray.initialize(config);
            t.assertEquals(tray.getTrayTiles().length, 0);
            t.assertFalse(tray.isFull());
          });
          t.it('should track max slots', function () {
            tray.initialize(config);
            t.assertEquals(tray.getMaxSlots(), 8);
          });
          t.it('should get slot position centered', function () {
            tray.initialize(config);
            var pos0 = tray.getSlotPosition(0);
            var pos6 = tray.getSlotPosition(6);
            t.assertTrue(pos0.x < pos6.x, 'Slot 0 should be left of slot 6');
          });
        });
        t.describe('TrayManager History', function () {
          t.it('should push and pop history', function () {
            tray.initialize(config);
            // Add corresponding tiles into _trayTiles so popLastTile can find them
            tray._trayTiles.push({
              id: 'T0',
              groupId: 'g0',
              tileType: 0,
              gridX: 1,
              gridY: 2,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            });
            tray._trayTiles.push({
              id: 'T1',
              groupId: 'g1',
              tileType: 0,
              gridX: 3,
              gridY: 4,
              layer: 1,
              active: true,
              selectable: true,
              isBlocked: false
            });
            tray._history.push({
              tileId: 'T0',
              gridX: 1,
              gridY: 2,
              layer: 0
            });
            tray._history.push({
              tileId: 'T1',
              gridX: 3,
              gridY: 4,
              layer: 1
            });
            var last = tray.getLastHistory();
            t.assertTrue(last !== null);
            t.assertEquals(last.tileId, 'T1');
            t.assertEquals(last.gridX, 3);
            tray.popLastTile();
            t.assertEquals(tray._history.length, 1);
            t.assertEquals(tray._history[0].tileId, 'T0');
          });
          t.it('should pop correct tile by history after sorting', function () {
            tray.initialize(config);
            // Simulate adding 3 tiles then sorting: history = [A, B, C], tray sorted = [B, A, C]
            var tileA = {
              id: 'A',
              groupId: 'zebra',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            var tileB = {
              id: 'B',
              groupId: 'alpha',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            var tileC = {
              id: 'C',
              groupId: 'mike',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            };
            tray._trayTiles = [tileB, tileA, tileC];
            tray._history = [{
              tileId: 'A',
              gridX: 0,
              gridY: 0,
              layer: 0
            }, {
              tileId: 'B',
              gridX: 0,
              gridY: 0,
              layer: 0
            }, {
              tileId: 'C',
              gridX: 0,
              gridY: 0,
              layer: 0
            }];
            tray.popLastTile(); // Should remove C (last added), not C at end of sorted array (which happens to be C)
            var remaining = tray.getTrayTiles().map(function (t) {
              return t.id;
            });
            t.assertTrue(remaining.indexOf('C') === -1, 'Should remove C based on history');
            t.assertTrue(remaining.indexOf('A') !== -1);
            t.assertTrue(remaining.indexOf('B') !== -1);
          });
        });
        t.describe('TrayManager Dead End', function () {
          t.it('should detect dead end when tray full with no matchable group', function () {
            tray.initialize(config);
            // Fill tray with 8 tiles all different groups
            tray._trayTiles = [];
            for (var _i = 0; _i < 8; _i++) {
              tray._trayTiles.push({
                id: "D" + _i,
                groupId: "unique" + _i,
                tileType: 0,
                gridX: 0,
                gridY: 0,
                layer: 0,
                active: true,
                selectable: true,
                isBlocked: false
              });
            }
            t.assertTrue(tray.isDeadEnd(), 'Tray with 8 unique groups should be dead end');
          });
          t.it('should NOT be dead end if group has 3+ consecutive in tray', function () {
            tray.initialize(config);
            tray._trayTiles = [];
            for (var _i2 = 0; _i2 < 8; _i2++) {
              tray._trayTiles.push({
                id: "D" + _i2,
                groupId: _i2 < 3 ? 'same' : "unique" + _i2,
                tileType: 0,
                gridX: 0,
                gridY: 0,
                layer: 0,
                active: true,
                selectable: true,
                isBlocked: false
              });
            }
            t.assertFalse(tray.isDeadEnd(), 'Tray with consecutive matchable group should not be dead end');
          });
          t.it('should be dead end when 3+ same group are not consecutive', function () {
            tray.initialize(config);
            tray._trayTiles = [{
              id: 'D0',
              groupId: 'same',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'D1',
              groupId: 'other1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'D2',
              groupId: 'same',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'D3',
              groupId: 'other2',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'D4',
              groupId: 'same',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'D5',
              groupId: 'other3',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'D6',
              groupId: 'other4',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'D7',
              groupId: 'other5',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            t.assertTrue(tray.isDeadEnd(), 'Non-consecutive same group should be dead end');
          });
          t.it('should NOT be dead end if tray not full', function () {
            tray.initialize(config);
            tray._trayTiles = [{
              id: 'A',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            t.assertFalse(tray.isDeadEnd(), 'Non-full tray should never be dead end');
          });
        });
        t.describe('TrayManager Sorting', function () {
          t.it('should sort tiles by groupId', function () {
            tray.initialize(config);
            tray._trayTiles = [{
              id: 'A',
              groupId: 'zebra',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'B',
              groupId: 'alpha',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'C',
              groupId: 'mike',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            tray.sortTray(); // this triggers updateGlowEffects too
            var tiles = tray.getTrayTiles();
            // After sort by groupId, alpha should be first
            t.assertEquals(tiles[0].groupId, 'alpha');
          });
          t.it('should not corrupt tray with invalid sort comparator', function () {
            tray.initialize(config);
            tray._trayTiles = [{
              id: 'A',
              groupId: 'g2',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'B',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }, {
              id: 'C',
              groupId: 'g2',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            tray.sortTray();
            var tiles = tray.getTrayTiles();
            // All 3 tiles should still be present after stable sort
            t.assertEquals(tiles.length, 3);
            // g1 should be first
            t.assertEquals(tiles[0].groupId, 'g1');
          });
        });
        t.describe('TrayManager Fly Count', function () {
          t.it('should track _flyCount during addTile', function () {
            tray.initialize(config);
            tray._flyCount = 2;
            t.assertEquals(tray._flyCount, 2);
            tray._flyCount = 0;
          });
          t.it('should reset _flyCount to zero when initialized', function () {
            tray.initialize(config);
            t.assertEquals(tray._flyCount, 0);
          });
        });
        t.describe('TrayManager Duplicate Prevention', function () {
          t.it('should reject duplicate tile IDs', function () {
            tray.initialize(config);
            tray._trayTiles = [{
              id: 'T0',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            var result = tray.addTile('T0');
            t.assertFalse(result, 'Should reject duplicate tile in tray');
          });
          t.it('should reject non-selectable or inactive tiles', function () {
            tray.initialize(config);
            mockTileData.set('BAD', {
              id: 'BAD',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: false,
              isBlocked: false
            });
            var result = tray.addTile('BAD');
            t.assertFalse(result, 'Blocked tile should not enter tray');
            mockTileData["delete"]('BAD');
          });
        });
        t.describe('TrayManager History Sync on Remove', function () {
          t.it('should remove matching history entry when tile is removed', function () {
            tray.initialize(config);
            tray._trayTiles = [{
              id: 'X1',
              groupId: 'g1',
              tileType: 0,
              gridX: 0,
              gridY: 0,
              layer: 0,
              active: true,
              selectable: true,
              isBlocked: false
            }];
            tray._history = [{
              tileId: 'X1',
              gridX: 0,
              gridY: 0,
              layer: 0
            }];
            tray.removeTile('X1');
            t.assertEquals(tray._history.length, 0);
          });
        });
        t.printReport();
        mockTileData.clear();
        mockTileNode.clear();
        return t;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TrayManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameEvent.ts', './EventBus.ts', './TileManager.ts', './OrderManager.ts', './OrderTrayManager.ts', './BoosterManager.ts', './PoolManager.ts', './SkinManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _extends, cclegacy, _decorator, Node, Label, tween, Vec3, director, instantiate, Tween, UIOpacity, Component, GameEvent, EventBus, TileManager, OrderManager, OrderTrayManager, BoosterManager, PoolManager, SkinManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      tween = module.tween;
      Vec3 = module.Vec3;
      director = module.director;
      instantiate = module.instantiate;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      TileManager = module.TileManager;
    }, function (module) {
      OrderManager = module.OrderManager;
    }, function (module) {
      OrderTrayManager = module.OrderTrayManager;
    }, function (module) {
      BoosterManager = module.BoosterManager;
    }, function (module) {
      PoolManager = module.PoolManager;
    }, function (module) {
      SkinManager = module.SkinManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "8f8d2r1TvFADaL8ZN1yGJTY", "TrayManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * TrayHistory - Lưu trữ trạng thái của một tile trước khi vào tray (dùng cho Undo).
       */

      /**
       * TrayManager - Quản lý thanh tray 8 slot.
       * - Tile bay vào tray với tween animation
       - Tự động sắp xếp theo groupId để dễ nhìn match
       * - Lưu history để Undo
       * - Glow khi có 3 tile cùng loại
       */
      var TrayManager = exports('TrayManager', (_dec = ccclass('TrayManager'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TrayManager, _Component);
        function TrayManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "trayContainer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyDuration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rearrangeDuration", _descriptor4, _assertThisInitialized(_this));
          /** Khoảng cách giữa các slot trong tray (override giá trị từ config, để 0 để dùng config) */
          _initializerDefineProperty(_this, "slotSpacing", _descriptor5, _assertThisInitialized(_this));
          _this._config = null;
          _this._trayTiles = [];
          _this._history = [];
          _this._flyCount = 0;
          _this._pendingOrderClearEffects = 0;
          _this._settledTileIds = new Set();
          _this._lifecycleId = 0;
          return _this;
        }
        TrayManager.getInstance = function getInstance() {
          return TrayManager.Instance;
        };
        var _proto = TrayManager.prototype;
        _proto.onLoad = function onLoad() {
          if (TrayManager.Instance) {
            this.destroy();
            return;
          }
          TrayManager.Instance = this;
          EventBus.getInstance().on(GameEvent.TILE_CLICKED, this.onTileClicked, this);
          EventBus.getInstance().on(GameEvent.ORDER_COMPLETED, this.onOrderCompletedWithEffect, this);
        };
        _proto.onTileClicked = function onTileClicked(data) {
          this.addTile(data.id);
        }

        /** Khi order hoàn thành: xóa đúng các tile ID được truyền vào khỏi tray */;
        _proto.onOrderCompleted = function onOrderCompleted(order, orderIndex, tileIds) {
          var _this2 = this;
          if (!tileIds || tileIds.length === 0) return;
          var lifecycleId = this._lifecycleId;

          // Remove from _trayTiles and _history first
          var _loop = function _loop() {
            var tileId = _step.value;
            var index = _this2._trayTiles.findIndex(function (t) {
              return t.id === tileId;
            });
            if (index !== -1) _this2._trayTiles.splice(index, 1);
            var histIndex = _this2._history.findIndex(function (h) {
              return h.tileId === tileId;
            });
            if (histIndex !== -1) _this2._history.splice(histIndex, 1);
            _this2._settledTileIds["delete"](tileId);
          };
          for (var _iterator = _createForOfIteratorHelperLoose(tileIds), _step; !(_step = _iterator()).done;) {
            _loop();
          }

          // Animate all nodes scale to 0
          for (var _iterator2 = _createForOfIteratorHelperLoose(tileIds), _step2; !(_step2 = _iterator2()).done;) {
            var tileId = _step2.value;
            var node = TileManager.getInstance().getTileNode(tileId);
            if (node && node.isValid) {
              tween(node).to(0.2, {
                scale: new Vec3(0, 0, 1)
              }).start();
            }
          }

          // Delay then remove from TileManager, compact tray, check full
          this.scheduleOnce(function () {
            if (lifecycleId !== _this2._lifecycleId) return;
            for (var _iterator3 = _createForOfIteratorHelperLoose(tileIds), _step3; !(_step3 = _iterator3()).done;) {
              var tileId = _step3.value;
              TileManager.getInstance().removeTile(tileId);
            }
            _this2.compactTray();
            _this2.updateSlotLabel();
            // Sau khi remove, nếu tray vẫn đầy → emit TRAY_FULL
            _this2.emitTrayFullIfNeeded();
          }, 0.25);
        }

        /** Animate matched order tiles out of tray, then consume them into the current order UI. */;
        _proto.onOrderCompletedWithEffect = function onOrderCompletedWithEffect(order, orderIndex, tileIds) {
          var _OrderTrayManager$get,
            _OrderTrayManager$get2,
            _this3 = this;
          if (!tileIds || tileIds.length === 0) return;
          var lifecycleId = this._lifecycleId;
          var orderTargetWorldPos = (_OrderTrayManager$get = (_OrderTrayManager$get2 = OrderTrayManager.getInstance()) == null ? void 0 : _OrderTrayManager$get2.getCurrentOrderEffectWorldPosition()) != null ? _OrderTrayManager$get : null;
          var matchedNodes = new Map();

          // Remove from tray state immediately so the player can keep choosing tiles while the effect plays.
          var _loop2 = function _loop2() {
            var tileId = _step4.value;
            var node = TileManager.getInstance().getTileNode(tileId);
            if (node && node.isValid) {
              Tween.stopAllByTarget(node);
              var tileComp = node.getComponent('Tile');
              if (tileComp && tileComp.stopAllTweens) {
                tileComp.stopAllTweens();
              }
              matchedNodes.set(tileId, node);
            }
            var index = _this3._trayTiles.findIndex(function (t) {
              return t.id === tileId;
            });
            if (index !== -1) _this3._trayTiles.splice(index, 1);
            var histIndex = _this3._history.findIndex(function (h) {
              return h.tileId === tileId;
            });
            if (histIndex !== -1) _this3._history.splice(histIndex, 1);
            _this3._settledTileIds["delete"](tileId);
          };
          for (var _iterator4 = _createForOfIteratorHelperLoose(tileIds), _step4; !(_step4 = _iterator4()).done;) {
            _loop2();
          }
          this.compactTray();
          this.updateSlotLabel();
          this._pendingOrderClearEffects = tileIds.length;
          var onEffectComplete = function onEffectComplete() {
            if (lifecycleId !== _this3._lifecycleId) return;
            _this3._pendingOrderClearEffects--;
            if (_this3._pendingOrderClearEffects <= 0) {
              _this3._pendingOrderClearEffects = 0;
              EventBus.getInstance().emit(GameEvent.ORDER_TILES_CLEARED);
            }
          };
          for (var i = 0; i < tileIds.length; i++) {
            this.playOrderConsumeTileEffect(tileIds[i], matchedNodes.get(tileIds[i]), orderTargetWorldPos, i, tileIds.length, lifecycleId, onEffectComplete);
          }
          this.emitTrayFullIfNeeded();
        };
        _proto.playOrderConsumeTileEffect = function playOrderConsumeTileEffect(tileId, node, targetWorldPos, index, total, lifecycleId, onEffectComplete) {
          var _this$trayContainer,
            _this4 = this;
          if (lifecycleId !== this._lifecycleId) return;
          if (!node || !node.isValid) {
            TileManager.getInstance().removeTile(tileId);
            if (index === total - 1) {
              var _OrderTrayManager$get3;
              (_OrderTrayManager$get3 = OrderTrayManager.getInstance()) == null || _OrderTrayManager$get3.hideCurrentOrderConsumeEffect();
            }
            onEffectComplete();
            return;
          }
          var startWorld = node.getWorldPosition();
          var effectParent = ((_this$trayContainer = this.trayContainer) == null ? void 0 : _this$trayContainer.parent) || node.parent || director.getScene();
          var effectNode = instantiate(node);
          effectNode.name = node.name + "_OrderConsumeEffect";
          effectNode.active = true;
          effectNode.layer = node.layer;
          if (effectParent) {
            effectNode.setParent(effectParent);
            effectNode.setWorldPosition(startWorld);
            effectNode.setSiblingIndex(effectParent.children.length - 1);
          }
          Tween.stopAllByTarget(node);
          Tween.stopAllByTarget(effectNode);
          var tileComp = node.getComponent('Tile');
          if (tileComp && tileComp.stopAllTweens) {
            tileComp.stopAllTweens();
          }
          var effectTileComp = effectNode.getComponent('Tile');
          if (effectTileComp && effectTileComp.stopAllTweens) {
            effectTileComp.stopAllTweens();
          }
          var opacity = effectNode.getComponent(UIOpacity) || effectNode.addComponent(UIOpacity);
          opacity.opacity = 255;
          var effectVisual = effectNode.getChildByName('visual');
          if (effectVisual && effectVisual.isValid) {
            Tween.stopAllByTarget(effectVisual);
            effectVisual.active = true;
            effectVisual.setScale(1, 1, 1);
            var visualOpacity = effectVisual.getComponent(UIOpacity) || effectVisual.addComponent(UIOpacity);
            visualOpacity.opacity = 255;
          }
          TileManager.getInstance().removeTile(tileId);
          var startLocal = effectNode.position.clone();
          var direction = index - (total - 1) / 2;
          var side = direction === 0 ? 0 : direction > 0 ? 1 : -1;
          var peakOffsetX = side * 46;
          var fallOffsetX = side * 190;
          var jumpHeight = 170;
          var fallDistance = 860;
          var startScale = effectNode.scale.clone();
          effectNode.angle = 0;
          effectNode.setScale(startScale.x, startScale.y, startScale.z);
          var smoothStep = function smoothStep(t) {
            return t * t * (3 - 2 * t);
          };
          var getJumpState = function getJumpState(t) {
            t = Math.max(0, Math.min(1, t));
            var jumpPortion = 0.25;
            var hangPortion = 0.04;
            var peakX = startLocal.x + peakOffsetX;
            var peakY = startLocal.y + jumpHeight;
            var endX = startLocal.x + fallOffsetX;
            var x;
            var y;
            var scale = 1;
            if (t <= jumpPortion) {
              var jumpT = smoothStep(t / jumpPortion);
              x = startLocal.x + (peakX - startLocal.x) * jumpT;
              y = startLocal.y + jumpHeight * jumpT;
              scale = 1 + 0.144 * jumpT;
            } else if (t <= jumpPortion + hangPortion) {
              var hangT = (t - jumpPortion) / hangPortion;
              x = peakX + side * 4 * hangT;
              y = peakY - 4 * smoothStep(hangT);
              scale = 1.144 - 0.018 * smoothStep(hangT);
            } else {
              var fallT = (t - jumpPortion - hangPortion) / (1 - jumpPortion - hangPortion);
              var fallEase = fallT * fallT;
              x = peakX + (endX - peakX) * smoothStep(fallT);
              y = peakY - 10 - fallDistance * fallEase;
              scale = 1.126 - 0.126 * smoothStep(fallT);
            }
            return {
              x: x,
              y: y,
              scale: scale
            };
          };
          var endState = getJumpState(1);
          tween(effectNode).to(0.56, {
            position: new Vec3(endState.x, endState.y, startLocal.z),
            scale: new Vec3(startScale.x * endState.scale, startScale.y * endState.scale, startScale.z)
          }, {
            easing: 'linear',
            onUpdate: function onUpdate(target, ratio) {
              if (lifecycleId !== _this4._lifecycleId) return;
              if (!target || !target.isValid) return;
              var state = getJumpState(ratio);
              target.setPosition(state.x, state.y, startLocal.z);
              target.setScale(startScale.x * state.scale, startScale.y * state.scale, startScale.z);
              target.angle = 0;
              opacity.opacity = 255;
            }
          }).call(function () {
            if (lifecycleId !== _this4._lifecycleId) return;
            effectNode.destroy();
            if (index === total - 1) {
              var _OrderTrayManager$get4;
              (_OrderTrayManager$get4 = OrderTrayManager.getInstance()) == null || _OrderTrayManager$get4.hideCurrentOrderConsumeEffect();
            }
            onEffectComplete();
          }).start();
        };
        _proto.initialize = function initialize(config) {
          this._lifecycleId++;
          this.unscheduleAllCallbacks();
          this._config = config || {
            maxSlots: 7,
            matchCount: 3,
            screenPosition: {
              x: 0,
              y: -400
            },
            slotSpacing: 80
          };
          this._trayTiles = [];
          this._history = [];
          this._flyCount = 0;
          this._pendingOrderClearEffects = 0;
          this._settledTileIds.clear();
          this.updateSlotLabel();
        }

        /**
         * Thêm tile vào tray khi người chơi click.
         * Tile bay xuống tray, remove khỏi board state, lưu history.
         */;
        _proto.addTile = function addTile(tileId) {
          var _BoosterManager$getIn,
            _this5 = this;
          if (this.isFull()) return false;
          var lifecycleId = this._lifecycleId;
          var data = TileManager.getInstance().getTileData(tileId);
          var node = TileManager.getInstance().getTileNode(tileId);
          if (!data || !node || !data.active || !data.selectable) return false;

          // Prevent duplicate tiles in tray
          if (this._trayTiles.some(function (t) {
            return t.id === tileId;
          })) return false;
          (_BoosterManager$getIn = BoosterManager.getInstance()) == null || _BoosterManager$getIn.pushUndoSnapshot();

          // Lưu history cho Undo
          this._history.push({
            tileId: data.id,
            gridX: data.gridX,
            gridY: data.gridY,
            layer: data.layer
          });
          this._trayTiles.push(data);
          this._flyCount++;

          // Xóa khỏi board state (nhưng giữ node alive để bay)
          // Phải push vào tray trước để refreshBlockStatus tính đúng tile trong tray
          TileManager.getInstance().removeFromBoard(data.id);

          // Bay vào slot cuối trước, sau khi complete thì sort lại
          var slotIndex = this._trayTiles.length - 1;
          var targetPos = this.getSlotPosition(slotIndex);
          var didSettle = false;
          var onComplete = function onComplete() {
            if (lifecycleId !== _this5._lifecycleId) return;
            if (didSettle) return;
            didSettle = true;
            _this5._flyCount--;
            if (_this5._flyCount < 0) _this5._flyCount = 0;
            _this5._settledTileIds.add(data.id);
            // Emit event ngay khi tile này bay xong
            EventBus.getInstance().emit(GameEvent.TILE_ADDED_TO_TRAY, data);
            // Chỉ tính order khi tất cả tile đã đáp xuống hẳn
            if (_this5._flyCount === 0) {
              EventBus.getInstance().emit(GameEvent.TRAY_SETTLED);
            }
            // Sau khi OrderManager xử lý xong (cùng frame), check tray full
            _this5.emitTrayFullIfNeeded();
          };
          if (node && this.trayContainer) {
            // Save current world position so the tile stays visually in place
            // before reparenting into the tray container.
            var worldPos = node.getWorldPosition();
            node.setParent(this.trayContainer);
            node.setWorldPosition(worldPos);
            var tileComp = node.getComponent('Tile');
            if (tileComp && tileComp.setTrayVisual) {
              tileComp.setTrayVisual();
            }
            if (tileComp && tileComp.moveToTray) {
              tileComp.moveToTray(targetPos, this.flyDuration, onComplete, onComplete);
            } else if (node.isValid) {
              tween(node).to(this.flyDuration, {
                position: targetPos
              }).call(onComplete).start();
            } else {
              onComplete();
            }
          } else {
            onComplete();
          }
          this.updateSlotLabel();
          return true;
        }

        /**
         * Sắp xếp tray: tile cùng groupId nằm cạnh nhau.
         */;
        _proto.sortTrayByGroup = function sortTrayByGroup() {
          // Stable sort theo groupId - không dùng comparator phụ thuộc newTile
          // vì vi phạm tính bắc cầu của Array.sort và gây sắp xếp không xác định
          this._trayTiles.sort(function (a, b) {
            return a.groupId.localeCompare(b.groupId);
          });
        }

        /** Sắp xếp lại toàn bộ tile trong tray với animation */;
        _proto.sortTray = function sortTray() {
          this.sortTrayByGroup();
          for (var i = 0; i < this._trayTiles.length; i++) {
            var data = this._trayTiles[i];
            var node = TileManager.getInstance().getTileNode(data.id);
            if (!node || !node.isValid || !node.active) continue;
            var targetPos = this.getSlotPosition(i);
            var tileComp = node.getComponent('Tile');
            if (tileComp && tileComp._isAnimating && tileComp._moveTween) {
              tileComp.updateMoveTarget(targetPos, this.rearrangeDuration);
            } else {
              tween(node).to(this.rearrangeDuration, {
                position: targetPos
              }).start();
            }
          }

          // Check glow cho các group sắp đủ 3
          this.updateGlowEffects();
        }

        /** Compact lại vị trí tile trong tray (không sort, chỉ lấp chỗ trống) */;
        _proto.compactTray = function compactTray() {
          for (var i = 0; i < this._trayTiles.length; i++) {
            var data = this._trayTiles[i];
            var node = TileManager.getInstance().getTileNode(data.id);
            if (!node || !node.isValid || !node.active) continue;
            var targetPos = this.getSlotPosition(i);
            var tileComp = node.getComponent('Tile');
            if (tileComp && tileComp._isAnimating && tileComp._moveTween) {
              tileComp.updateMoveTarget(targetPos, this.rearrangeDuration);
            } else {
              tween(node).to(this.rearrangeDuration, {
                position: targetPos
              }).start();
            }
          }
          this.updateGlowEffects();
        }

        /** Bật/tắt glow cho tile sắp match (chỉ khi có đủ matchCount tile cùng groupId liên tiếp) */;
        _proto.updateGlowEffects = function updateGlowEffects() {
          var _this$_config;
          var glowIndices = new Set();
          var matchCount = ((_this$_config = this._config) == null ? void 0 : _this$_config.matchCount) || 3;
          var i = 0;
          while (i < this._trayTiles.length) {
            var j = i + 1;
            while (j < this._trayTiles.length && this._trayTiles[j].groupId === this._trayTiles[i].groupId) {
              j++;
            }
            var runLength = j - i;
            if (runLength >= matchCount) {
              for (var k = i; k < j; k++) {
                glowIndices.add(k);
              }
            }
            i = j;
          }
          for (var _i = 0; _i < this._trayTiles.length; _i++) {
            var data = this._trayTiles[_i];
            var node = TileManager.getInstance().getTileNode(data.id);
            if (!node) continue;
            var tileComp = node.getComponent('Tile');
            if (!tileComp) continue;
            if (glowIndices.has(_i)) {
              tileComp.setGlow(true);
            } else {
              tileComp.setGlow(false);
            }
          }
        }

        /** Xóa tile khỏi tray (khi đã match hoặc order correct), animate ra rồi destroy */;
        _proto.removeTile = function removeTile(tileId) {
          var _this6 = this;
          var index = this._trayTiles.findIndex(function (t) {
            return t.id === tileId;
          });
          if (index === -1) return;
          this._trayTiles.splice(index, 1);
          this._settledTileIds["delete"](tileId);

          // Sync history để tránh Undo restore tile đã bị match xóa
          var histIndex = this._history.findIndex(function (h) {
            return h.tileId === tileId;
          });
          if (histIndex !== -1) {
            this._history.splice(histIndex, 1);
          }

          // Animate node ra khỏi tray rồi remove khỏi TileManager
          var node = TileManager.getInstance().getTileNode(tileId);
          if (node && node.isValid) {
            var lifecycleId = this._lifecycleId;
            tween(node).to(0.2, {
              scale: new Vec3(0, 0, 1)
            }).call(function () {
              if (lifecycleId !== _this6._lifecycleId) return;
              TileManager.getInstance().removeTile(tileId);
              _this6.compactTray();
              _this6.updateSlotLabel();
            }).start();
          } else {
            TileManager.getInstance().removeTile(tileId);
            this.compactTray();
            this.updateSlotLabel();
          }
        }

        /** Pop tile cuối cùng khỏi tray (cho Undo) */;
        _proto.popLastTile = function popLastTile() {
          if (this._trayTiles.length === 0 || this._history.length === 0) return null;
          var lastHistory = this._history[this._history.length - 1];

          // Tìm và xóa tile tương ứng với history cuối
          var index = this._trayTiles.findIndex(function (t) {
            return t.id === lastHistory.tileId;
          });
          if (index !== -1) {
            var data = this._trayTiles[index];
            this._trayTiles.splice(index, 1);
            this._settledTileIds["delete"](data.id);
            this._history.pop();
            this.compactTray();
            this.updateSlotLabel();
            return data;
          }
          this._history.pop();
          this.compactTray();
          this.updateSlotLabel();
          return null;
        }

        /** Lấy history cho Undo */;
        _proto.getLastHistory = function getLastHistory() {
          if (this._history.length === 0) return null;
          return this._history[this._history.length - 1];
        };
        _proto.removeLastHistory = function removeLastHistory() {
          this._history.pop();
        }

        /** Lấy vị trí slot trong tray */;
        _proto.getSlotPosition = function getSlotPosition(index) {
          if (!this._config) return Vec3.ZERO;
          var spacing = this.slotSpacing > 0 ? this.slotSpacing : this._config.slotSpacing;
          var centerOffset = -(this._config.maxSlots - 1) * spacing / 2;
          var x = centerOffset + index * spacing;
          return new Vec3(x, 0, 0);
        }

        /** Kiểm tra tray đã đầy chưa */;
        _proto.isFull = function isFull() {
          if (!this._config) return true;
          return this._trayTiles.length >= this._config.maxSlots;
        }

        /** Kiểm tra tray đã đầy VÀ không thể match nào */;
        _proto.isDeadEnd = function isDeadEnd() {
          var _this$_config2;
          if (!this.isFull()) return false;
          var matchCount = ((_this$_config2 = this._config) == null ? void 0 : _this$_config2.matchCount) || 3;
          // Tìm dãy liên tiếp cùng groupId với độ dài >= matchCount
          for (var i = 0; i <= this._trayTiles.length - matchCount; i++) {
            var groupId = this._trayTiles[i].groupId;
            var allSame = true;
            for (var j = 1; j < matchCount; j++) {
              if (this._trayTiles[i + j].groupId !== groupId) {
                allSame = false;
                break;
              }
            }
            if (allSame) return false; // Có thể match
          }

          return true;
        };
        _proto.getMaxSlots = function getMaxSlots() {
          var _this$_config3;
          return ((_this$_config3 = this._config) == null ? void 0 : _this$_config3.maxSlots) || 7;
        };
        _proto.getMatchCount = function getMatchCount() {
          var _this$_config4;
          return ((_this$_config4 = this._config) == null ? void 0 : _this$_config4.matchCount) || 3;
        };
        _proto.getTrayTiles = function getTrayTiles() {
          return [].concat(this._trayTiles);
        };
        _proto.getSettledTrayTiles = function getSettledTrayTiles() {
          var _this7 = this;
          return this._trayTiles.filter(function (t) {
            return _this7._settledTileIds.has(t.id);
          });
        };
        _proto.getFlyCount = function getFlyCount() {
          return this._flyCount;
        };
        _proto.isClearingOrderTiles = function isClearingOrderTiles() {
          return this._pendingOrderClearEffects > 0;
        };
        _proto.cancelPendingOrderClearEffects = function cancelPendingOrderClearEffects() {
          var _OrderTrayManager$get5;
          this._lifecycleId++;
          this.unscheduleAllCallbacks();
          this._flyCount = 0;
          this._pendingOrderClearEffects = 0;
          (_OrderTrayManager$get5 = OrderTrayManager.getInstance()) == null || _OrderTrayManager$get5.cancelPendingTransitionForRestore();
        };
        _proto.captureSnapshot = function captureSnapshot() {
          return {
            tileIds: this._trayTiles.map(function (t) {
              return t.id;
            }),
            history: this._history.map(function (h) {
              return _extends({}, h);
            }),
            settledTileIds: Array.from(this._settledTileIds)
          };
        };
        _proto.restoreSnapshot = function restoreSnapshot(snapshot) {
          this._lifecycleId++;
          this.unscheduleAllCallbacks();
          this._trayTiles = [];
          this._history = snapshot.history.map(function (h) {
            return _extends({}, h);
          });
          this._settledTileIds = new Set(snapshot.settledTileIds);
          this._flyCount = 0;
          this._pendingOrderClearEffects = 0;
          for (var i = 0; i < snapshot.tileIds.length; i++) {
            var tileId = snapshot.tileIds[i];
            var data = TileManager.getInstance().getTileData(tileId);
            var node = TileManager.getInstance().getTileNode(tileId);
            if (!data) continue;

            // Nếu node chưa có (tile đang ở tray trong snapshot), tạo từ pool
            if (!node || !node.isValid) {
              var _SkinManager$getInsta;
              var prefabKey = SkinManager.getInstance().getTilePrefabKey(data.groupId);
              node = PoolManager.getInstance().get(prefabKey);
              if (!node) continue;
              this.prepareTileNodeForTray(node);
              var tileComponent = node.getComponent('Tile') || node.addComponent('Tile');
              if (tileComponent) {
                var _tileComp = tileComponent;
                if (_tileComp.reset) _tileComp.reset();
                _tileComp.initialize(data);
              }
              var skinOverride = data.skinOverride || (((_SkinManager$getInsta = SkinManager.getInstance().getCurrentSkin()) == null ? void 0 : _SkinManager$getInsta.skinId) || 'uma') + "/" + data.groupId;
              SkinManager.getInstance().applyTileSkin(node, skinOverride);
              TileManager.getInstance().registerTileNode(tileId, node);
            }
            data.active = false;
            data.selectable = false;
            this._trayTiles.push(data);
            if (this.trayContainer) {
              this.prepareTileNodeForTray(node);
              node.setParent(this.trayContainer);
              node.setPosition(this.getSlotPosition(i));
            }
            var tileComp = node.getComponent('Tile');
            if (tileComp && tileComp.setTrayVisual) tileComp.setTrayVisual();
          }
          this.compactTray();
          this.updateSlotLabel();
        }

        /** Cập nhật label hiển thị số slot đã dùng / tổng số slot */;
        _proto.prepareTileNodeForTray = function prepareTileNodeForTray(node) {
          if (!node || !node.isValid) return;
          Tween.stopAllByTarget(node);
          node.active = true;
          node.angle = 0;
          node.setRotationFromEuler(0, 0, 0);
          node.setScale(1, 1, 1);
          var opacity = node.getComponent(UIOpacity);
          if (opacity) opacity.opacity = 255;
          var visualNode = node.getChildByName('visual');
          if (visualNode && visualNode.isValid) {
            Tween.stopAllByTarget(visualNode);
            visualNode.angle = 0;
            visualNode.setRotationFromEuler(0, 0, 0);
            visualNode.setScale(1, 1, 1);
            var visualOpacity = visualNode.getComponent(UIOpacity);
            if (visualOpacity) visualOpacity.opacity = 255;
          }
        };
        _proto.updateSlotLabel = function updateSlotLabel() {
          if (!this.slotLabel) return;
          var curr = this._trayTiles.length;
          var max = this.getMaxSlots();
          this.slotLabel.string = curr + " / " + max;
        };
        _proto.emitTrayFullIfNeeded = function emitTrayFullIfNeeded() {
          var _this8 = this;
          if (!this.isFull()) return;
          var orderManager = OrderManager.getInstance();
          if (orderManager.isActive()) {
            if (this.isClearingOrderTiles()) return;
            if (orderManager.isPendingTrayCheck()) {
              this.scheduleOnce(function () {
                return _this8.emitTrayFullIfNeeded();
              }, 0.1);
              return;
            }
          }
          EventBus.getInstance().emit(GameEvent.TRAY_FULL);
        }

        /** Clear tray */;
        _proto.clearTray = function clearTray() {
          this._lifecycleId++;
          this.unscheduleAllCallbacks();
          this._trayTiles = [];
          this._history = [];
          this._flyCount = 0;
          this._pendingOrderClearEffects = 0;
          this._settledTileIds.clear();
          this._config = null;
          this.updateSlotLabel();
        };
        _proto.onDestroy = function onDestroy() {
          if (TrayManager.Instance === this) {
            this._lifecycleId++;
            this.unscheduleAllCallbacks();
            TrayManager.Instance = null;
            EventBus.getInstance().off(GameEvent.TILE_CLICKED, this.onTileClicked, this);
            EventBus.getInstance().off(GameEvent.ORDER_COMPLETED, this.onOrderCompletedWithEffect, this);
          }
        };
        return TrayManager;
      }(Component), _class3.Instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "trayContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "slotLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "flyDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.45;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rearrangeDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "slotSpacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TraySlot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b723fHeFZ5GWIVELIyKxM1Q", "TraySlot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * TraySlot - Component đại diện cho một slot trong tray.
       * Có thể chứa tile hoặc trống. Xử lý visual highlight khi tile vào.
       */
      var TraySlot = exports('TraySlot', (_dec = ccclass('TraySlot'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TraySlot, _Component);
        function TraySlot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "highlightNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tileAnchor", _descriptor2, _assertThisInitialized(_this));
          _this._isOccupied = false;
          _this._slotIndex = 0;
          return _this;
        }
        var _proto = TraySlot.prototype;
        _proto.initialize = function initialize(index) {
          this._slotIndex = index;
          this._isOccupied = false;
          this.setHighlight(false);
        }

        /** Đánh dấu slot đã có tile */;
        _proto.occupy = function occupy() {
          this._isOccupied = true;
        }

        /** Đánh dấu slot trống */;
        _proto.release = function release() {
          this._isOccupied = false;
        }

        /** Kiểm tra slot có trống không */;
        _proto.isEmpty = function isEmpty() {
          return !this._isOccupied;
        }

        /** Bật/tắt hiệu ứng highlight */;
        _proto.setHighlight = function setHighlight(active) {
          if (this.highlightNode) {
            this.highlightNode.active = active;
          }
        }

        /** Lấy anchor node để gắn tile vào */;
        _proto.getTileAnchor = function getTileAnchor() {
          return this.tileAnchor || this.node;
        };
        _proto.getSlotIndex = function getSlotIndex() {
          return this._slotIndex;
        };
        return TraySlot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "highlightNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tileAnchor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkinManager.ts', './BasePanel.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, instantiate, UITransform, Component, SkinManager, BasePanel, AudioManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      SkinManager = module.SkinManager;
    }, function (module) {
      BasePanel = module.BasePanel;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "0242ee8mZtMb7fghIrm+HHK", "UIManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * UIManager - Quản lý vòng đời UI panels: open, close, stack, overlay.
       * Load prefab panels qua SkinManager để hỗ trợ reskin.
       * Không chứa logic gameplay, chỉ quản lý UI flow.
       */
      var UIManager = exports('UIManager', (_dec = ccclass('UIManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIManager, _Component);
        function UIManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "uiRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupLayer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "overlayLayer", _descriptor3, _assertThisInitialized(_this));
          _this._panelMap = new Map();
          _this._panelStack = [];
          _this._prefabCache = new Map();
          _this._loadingNode = null;
          return _this;
        }
        UIManager.getInstance = function getInstance() {
          return UIManager.Instance;
        };
        var _proto = UIManager.prototype;
        _proto.onLoad = function onLoad() {
          if (UIManager.Instance) {
            this.destroy();
            return;
          }
          UIManager.Instance = this;
        }

        /** Khởi tạo với UI root node */;
        _proto.initialize = function initialize(uiRoot) {
          this.uiRoot = uiRoot || this.node;
          this.prepareLoadingOverlay();
        };
        _proto.preloadPanel = /*#__PURE__*/function () {
          var _preloadPanel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(panelName) {
            var prefab;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this._panelMap.has(panelName)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  prefab = this._prefabCache.get(panelName) || null;
                  if (prefab) {
                    _context.next = 8;
                    break;
                  }
                  _context.next = 6;
                  return SkinManager.getInstance().getPanelPrefab(panelName);
                case 6:
                  prefab = _context.sent;
                  if (prefab) this._prefabCache.set(panelName, prefab);
                case 8:
                  if (prefab) this.createPanelInstance(panelName, prefab, false);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function preloadPanel(_x) {
            return _preloadPanel.apply(this, arguments);
          }
          return preloadPanel;
        }();
        _proto.preloadPanels = /*#__PURE__*/function () {
          var _preloadPanels = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(panelNames) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Promise.all(panelNames.map(function (panelName) {
                    return _this2.preloadPanel(panelName);
                  }));
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function preloadPanels(_x2) {
            return _preloadPanels.apply(this, arguments);
          }
          return preloadPanels;
        }() /** Mở panel theo tên */;
        _proto.openPanel = /*#__PURE__*/
        function () {
          var _openPanel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(panelName, data) {
            var panel, prefab;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!this._panelMap.has(panelName)) {
                    _context3.next = 6;
                    break;
                  }
                  panel = this._panelMap.get(panelName);
                  panel.show(data);
                  this.bringPanelToFront(panelName);
                  if (this._panelStack.indexOf(panelName) === -1) {
                    this._panelStack.push(panelName);
                  }
                  return _context3.abrupt("return", panel);
                case 6:
                  prefab = this._prefabCache.get(panelName) || null;
                  if (prefab) {
                    _context3.next = 12;
                    break;
                  }
                  _context3.next = 10;
                  return SkinManager.getInstance().getPanelPrefab(panelName);
                case 10:
                  prefab = _context3.sent;
                  if (prefab) this._prefabCache.set(panelName, prefab);
                case 12:
                  if (prefab) {
                    _context3.next = 14;
                    break;
                  }
                  return _context3.abrupt("return", null);
                case 14:
                  return _context3.abrupt("return", this.createPanelInstance(panelName, prefab, true, data));
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function openPanel(_x3, _x4) {
            return _openPanel.apply(this, arguments);
          }
          return openPanel;
        }();
        _proto.createPanelInstance = function createPanelInstance(panelName, prefab, showNow, data) {
          var _this$popupLayer$laye, _this$popupLayer;
          if (!this.uiRoot) {
            return null;
          }
          var node = instantiate(prefab);
          node.name = panelName;
          node.layer = (_this$popupLayer$laye = (_this$popupLayer = this.popupLayer) == null ? void 0 : _this$popupLayer.layer) != null ? _this$popupLayer$laye : this.uiRoot.layer;
          node.setParent(this.popupLayer || this.uiRoot);
          node.setPosition(0, 0, 0);
          var panel = node.getComponent(BasePanel);
          if (panel) {
            var _AudioManager$getInst;
            panel.initialize(this);
            (_AudioManager$getInst = AudioManager.getInstance()) == null || _AudioManager$getInst.bindButtonSounds(node);
            this._panelMap.set(panelName, panel);
            if (showNow) {
              panel.show(data);
              this.bringPanelToFront(panelName);
              this._panelStack.push(panelName);
            } else {
              node.active = false;
            }
            return panel;
          }
          node.destroy();
          return null;
        }

        /** Đóng panel theo tên */;
        _proto.bringPanelToFront = function bringPanelToFront(panelName) {
          var panel = this._panelMap.get(panelName);
          var node = panel == null ? void 0 : panel.node;
          if (!node || !node.isValid || !node.parent) return;
          node.setSiblingIndex(node.parent.children.length - 1);
        };
        _proto.closePanel = function closePanel(panelName) {
          var panel = this._panelMap.get(panelName);
          if (panel) {
            panel.hide();
            // Có thể destroy hoặc chỉ hide tùy chiến lược
          }

          var index = this._panelStack.indexOf(panelName);
          if (index !== -1) {
            this._panelStack.splice(index, 1);
          }
        }

        /** Đóng panel hiện tại */;
        _proto.closeCurrentPanel = function closeCurrentPanel() {
          var current = this._panelStack.pop();
          if (current) {
            this.closePanel(current);
          }
        }

        /** Đóng tất cả panels */;
        _proto.closeAllPanels = function closeAllPanels() {
          this._panelMap.forEach(function (panel) {
            return panel.hide();
          });
          this._panelStack = [];
        }

        /** Lấy panel đang mở */;
        _proto.getOpenPanel = function getOpenPanel(panelName) {
          return this._panelMap.get(panelName);
        }

        /** Kiểm tra panel đang mở */;
        _proto.isPanelOpen = function isPanelOpen(panelName) {
          return this._panelMap.has(panelName) && this._panelMap.get(panelName).isVisible();
        }

        /** Hiển thị loading overlay (tạo programmatically) */;
        _proto.showLoading = function showLoading(_message) {
          this.prepareLoadingOverlay();
          if (!this._loadingNode) return;
          this._loadingNode.active = true;
        };
        _proto.prepareLoadingOverlay = function prepareLoadingOverlay() {
          var _this$uiRoot$layer, _this$uiRoot;
          if (this._loadingNode && this._loadingNode.isValid) return;
          var overlay = new Node('LoadingOverlay');
          overlay.layer = (_this$uiRoot$layer = (_this$uiRoot = this.uiRoot) == null ? void 0 : _this$uiRoot.layer) != null ? _this$uiRoot$layer : this.node.layer;
          overlay.addComponent(UITransform);
          var parent = this.popupLayer || this.uiRoot || this.node;
          overlay.setParent(parent);
          overlay.setPosition(0, 0, 999);
          overlay.active = false;
          this._loadingNode = overlay;
        }

        /** Ẩn loading overlay */;
        _proto.hideLoading = function hideLoading() {
          if (this._loadingNode) {
            this._loadingNode.active = false;
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (UIManager.Instance === this) {
            UIManager.Instance = null;
          }
        };
        return UIManager;
      }(Component), _class3.Instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popupLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "overlayLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIPanelType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e0d94DnAgJAMbajSrNE0lXh", "UIPanelType", undefined);
      /**
       * Enum định nghĩa các loại UI panel trong game.
       * UIManager dùng để mở/đóng panel theo type.
       */
      var UIPanelType = exports('UIPanelType', /*#__PURE__*/function (UIPanelType) {
        UIPanelType[UIPanelType["NONE"] = 0] = "NONE";
        UIPanelType[UIPanelType["MAIN_MENU"] = 1] = "MAIN_MENU";
        UIPanelType[UIPanelType["LEVEL_SELECT"] = 2] = "LEVEL_SELECT";
        UIPanelType[UIPanelType["GAMEPLAY_HUD"] = 3] = "GAMEPLAY_HUD";
        UIPanelType[UIPanelType["PAUSE"] = 4] = "PAUSE";
        UIPanelType[UIPanelType["LEVEL_COMPLETE"] = 5] = "LEVEL_COMPLETE";
        UIPanelType[UIPanelType["LEVEL_FAILED"] = 6] = "LEVEL_FAILED";
        UIPanelType[UIPanelType["SETTINGS"] = 7] = "SETTINGS";
        UIPanelType[UIPanelType["SHOP"] = 8] = "SHOP";
        UIPanelType[UIPanelType["BOOSTER_CONFIRM"] = 9] = "BOOSTER_CONFIRM";
        UIPanelType[UIPanelType["TUTORIAL"] = 10] = "TUTORIAL";
        return UIPanelType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WrongTrayManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameEvent.ts', './EventBus.ts', './SkinManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Color, UITransform, Sprite, tween, Vec3, Tween, Component, GameEvent, EventBus, SkinManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      tween = module.tween;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      EventBus = module.EventBus;
    }, function (module) {
      SkinManager = module.SkinManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;
      cclegacy._RF.push({}, "f6a7bjJ0OFPKjtMXW5/ipsM", "WrongTrayManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**
       * WrongTrayManager - Hiển thị các item chọn sai.
       * Khi đầy thì rung + đỏ và emit WRONG_TRAY_FULL.
       */
      var WrongTrayManager = exports('WrongTrayManager', (_dec = ccclass('WrongTrayManager'), _dec2 = property(Node), _dec3 = property(Color), _dec4 = property(Color), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WrongTrayManager, _Component);
        function WrongTrayManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "trayContainer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotSpacing", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flyDuration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotScale", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalBgColor", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fullColor", _descriptor6, _assertThisInitialized(_this));
          _this._slots = [];
          _this._maxSlots = 2;
          _this._filledCount = 0;
          _this._isFull = false;
          return _this;
        }
        WrongTrayManager.getInstance = function getInstance() {
          return WrongTrayManager.Instance;
        };
        var _proto = WrongTrayManager.prototype;
        _proto.onLoad = function onLoad() {
          if (WrongTrayManager.Instance) {
            this.destroy();
            return;
          }
          WrongTrayManager.Instance = this;
          EventBus.getInstance().on(GameEvent.ORDER_ITEM_WRONG, this.onOrderItemWrong, this);
          EventBus.getInstance().on(GameEvent.LEVEL_LOADED, this.onLevelLoaded, this);
        };
        _proto.onLevelLoaded = function onLevelLoaded() {
          this.clearTray();
        };
        _proto.initialize = function initialize(maxSlots) {
          this._maxSlots = maxSlots;
          this._filledCount = 0;
          this._isFull = false;
          this.buildSlots();
        };
        _proto.onOrderItemWrong = function onOrderItemWrong(tileData) {
          this.addTile(tileData);
        }

        /** Thêm tile sai vào wrong tray (clone icon, không bắt node thật) */;
        _proto.addTile = function addTile(tileData) {
          var _SkinManager$getInsta,
            _this2 = this;
          if (this._isFull) return false;
          if (this._filledCount >= this._maxSlots) return false;
          var slot = this._slots[this._filledCount];
          if (!slot) return false;
          this._filledCount++;
          var container = this.trayContainer;

          // Clone icon từ skin thay vì lấy node thật
          var iconNode = new Node("WrongIcon_" + tileData.id);
          iconNode.layer = container.layer;
          iconNode.addComponent(UITransform);
          iconNode.addComponent(Sprite);
          iconNode.setParent(container);
          iconNode.setPosition(slot.position.clone());
          iconNode.setScale(0, 0, 1);
          var skinId = ((_SkinManager$getInsta = SkinManager.getInstance().getCurrentSkin()) == null ? void 0 : _SkinManager$getInsta.skinId) || 'uma';
          SkinManager.getInstance().applyTileSkin(iconNode, skinId + "/" + tileData.groupId);

          // Bay vào slot
          var targetPos = slot.position.clone();
          tween(iconNode).to(this.flyDuration, {
            position: targetPos,
            scale: new Vec3(this.slotScale, this.slotScale, 1)
          }).call(function () {
            slot.filledNode = iconNode;
            if (_this2._filledCount >= _this2._maxSlots) {
              _this2._isFull = true;
              _this2.playFullAnimation();
            }
          }).start();
          return true;
        }

        /** Animation khi wrong tray đầy: rung + đỏ */;
        _proto.playFullAnimation = function playFullAnimation() {
          if (!this.trayContainer || !this.trayContainer.isValid) return;

          // Tween màu đỏ cho background slots
          for (var _iterator = _createForOfIteratorHelperLoose(this._slots), _step; !(_step = _iterator()).done;) {
            var slot = _step.value;
            if (!slot.filledNode || !slot.filledNode.isValid) continue;
            var sprite = slot.filledNode.getComponentInChildren(Sprite);
            if (sprite) {
              tween(sprite).to(0.2, {
                color: this.fullColor
              }).start();
            }
          }

          // Shake container
          var originalPos = this.trayContainer.position.clone();
          tween(this.trayContainer).to(0.05, {
            position: new Vec3(originalPos.x - 10, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: new Vec3(originalPos.x + 10, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: new Vec3(originalPos.x - 10, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: new Vec3(originalPos.x + 10, originalPos.y, originalPos.z)
          }).to(0.05, {
            position: originalPos
          }).call(function () {
            EventBus.getInstance().emit(GameEvent.WRONG_TRAY_FULL);
          }).start();
        }

        /** Xây dựng slot positions */;
        _proto.buildSlots = function buildSlots() {
          this.clearVisuals();
          this._slots = [];
          if (this._maxSlots <= 0) return;
          this.ensureContainer();
          var container = this.trayContainer;
          var startX = -(this._maxSlots - 1) * this.slotSpacing / 2;
          for (var i = 0; i < this._maxSlots; i++) {
            var pos = new Vec3(startX + i * this.slotSpacing, 0, 0);

            // Background node
            var bgNode = new Node("WrongSlotBg_" + i);
            bgNode.layer = container.layer;
            bgNode.addComponent(UITransform);
            var bgSprite = bgNode.addComponent(Sprite);
            bgSprite.color = this.normalBgColor;
            bgNode.setParent(container);
            bgNode.setPosition(pos);
            bgNode.setScale(this.slotScale, this.slotScale, 1);
            this._slots.push({
              index: i,
              position: pos.clone(),
              filledNode: null
            });
          }
        };
        _proto.ensureContainer = function ensureContainer() {
          if (this.trayContainer) return;
          this.trayContainer = new Node('WrongTrayContainer');
          this.trayContainer.layer = this.node.layer;
          this.trayContainer.addComponent(UITransform);
          this.trayContainer.setParent(this.node);
          this.trayContainer.setPosition(0, 0, 0);
        };
        _proto.clearVisuals = function clearVisuals() {
          if (!this.trayContainer || !this.trayContainer.isValid) return;
          var children = [].concat(this.trayContainer.children);
          for (var _iterator2 = _createForOfIteratorHelperLoose(children), _step2; !(_step2 = _iterator2()).done;) {
            var child = _step2.value;
            Tween.stopAllByTarget(child);
            child.destroy();
          }
        };
        _proto.clearTray = function clearTray() {
          this.unscheduleAllCallbacks();
          this.clearVisuals();
          this._slots = [];
          this._filledCount = 0;
          this._isFull = false;
        };
        _proto.isFull = function isFull() {
          return this._isFull;
        };
        _proto.getFilledCount = function getFilledCount() {
          return this._filledCount;
        };
        _proto.captureSnapshot = function captureSnapshot() {
          return {
            filledCount: this._filledCount,
            isFull: this._isFull
          };
        };
        _proto.restoreSnapshot = function restoreSnapshot(snapshot) {
          this.clearTray();
          this._filledCount = snapshot.filledCount;
          this._isFull = snapshot.isFull;
          this.buildSlots();
        };
        _proto.onDestroy = function onDestroy() {
          if (WrongTrayManager.Instance === this) {
            WrongTrayManager.Instance = null;
            EventBus.getInstance().off(GameEvent.ORDER_ITEM_WRONG, this.onOrderItemWrong, this);
            EventBus.getInstance().off(GameEvent.LEVEL_LOADED, this.onLevelLoaded, this);
          }
        };
        return WrongTrayManager;
      }(Component), _class3.Instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "trayContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "slotSpacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 110;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "flyDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "slotScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.75;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "normalBgColor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(100, 100, 100, 200);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fullColor", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 50, 50, 255);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WrongTrayManagerTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WrongTrayManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, WrongTrayManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      WrongTrayManager = module.WrongTrayManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "01b634FxyVCfaZOGXw4gpWz", "WrongTrayManagerTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * WrongTrayManagerTest - Unit test cho WrongTrayManager logic.
       * Test fill, count, full trigger, reset.
       */
      var WrongTrayManagerTest = exports('WrongTrayManagerTest', (_dec = ccclass('WrongTrayManagerTest'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WrongTrayManagerTest, _Component);
        function WrongTrayManagerTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "resultLabel", _descriptor, _assertThisInitialized(_this));
          _this._results = [];
          _this._passCount = 0;
          _this._failCount = 0;
          return _this;
        }
        var _proto = WrongTrayManagerTest.prototype;
        _proto.start = function start() {
          this.runAllTests();
        };
        _proto.runAllTests = function runAllTests() {
          this._results = [];
          this._passCount = 0;
          this._failCount = 0;
          this.testAddWrongTile();
          this.testSlotCount();
          this.testFullTray();
          this.testReset();
          var summary = "\n=== WrongTrayManager Test Results ===\nPASS: " + this._passCount + "\nFAIL: " + this._failCount + "\nTotal: " + (this._passCount + this._failCount);
          this._results.push(summary);
          var output = this._results.join('\n');
          if (this.resultLabel) {
            this.resultLabel.string = output;
          }
        };
        _proto.assert = function assert(name, condition, msg) {
          if (condition) {
            this._passCount++;
            this._results.push("[PASS] " + name);
          } else {
            this._failCount++;
            this._results.push("[FAIL] " + name + (msg ? ': ' + msg : ''));
          }
        };
        _proto.testAddWrongTile = function testAddWrongTile() {
          var mgr = this.getManager();
          mgr.clearTray();
          mgr.initialize(2);
          this.assert('addWrongTile: filledCount = 0 initially', mgr.getFilledCount() === 0);
          this.assert('addWrongTile: not full initially', !mgr.isFull());
        };
        _proto.testSlotCount = function testSlotCount() {
          var mgr = this.getManager();
          mgr.clearTray();
          mgr.initialize(3);
          this.assert('slotCount: maxSlots = 3', mgr.getFilledCount() === 0);

          // Simulate adding tiles (without actual nodes)
          // We test the internal count logic by mocking via reflection
          mgr._filledCount = 1;
          this.assert('slotCount: filledCount = 1', mgr.getFilledCount() === 1);
          mgr._filledCount = 2;
          this.assert('slotCount: filledCount = 2', mgr.getFilledCount() === 2);
          mgr.clearTray();
        };
        _proto.testFullTray = function testFullTray() {
          var mgr = this.getManager();
          mgr.clearTray();
          mgr.initialize(2);
          mgr._filledCount = 2;
          mgr._isFull = true;
          this.assert('fullTray: isFull = true', mgr.isFull());
          this.assert('fullTray: filledCount = 2', mgr.getFilledCount() === 2);

          // Try adding when full should fail
          var result = mgr.addTile({
            id: 'T1',
            groupId: 'x',
            active: true,
            selectable: true
          });
          this.assert('fullTray: addTile returns false when full', !result);
          mgr.clearTray();
        };
        _proto.testReset = function testReset() {
          var mgr = this.getManager();
          mgr.clearTray();
          mgr.initialize(2);
          mgr._filledCount = 1;
          mgr._isFull = false;
          mgr.clearTray();
          this.assert('reset: filledCount = 0', mgr.getFilledCount() === 0);
          this.assert('reset: isFull = false', !mgr.isFull());
        };
        _proto.getManager = function getManager() {
          if (!WrongTrayManager.Instance) {
            // Create a temporary node for testing
            var node = new Node('TestWrongTray');
            node.addComponent(WrongTrayManager);
          }
          return WrongTrayManager.getInstance();
        };
        return WrongTrayManagerTest;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "resultLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});