/* @ds-bundle: {"format":4,"namespace":"GaraadDesignSystem_b60642","components":[{"name":"Motif","sourcePath":"components/brand/Motif.jsx"},{"name":"PricingCard","sourcePath":"components/cards/PricingCard.jsx"},{"name":"TeacherCard","sourcePath":"components/cards/TeacherCard.jsx"},{"name":"TrackCard","sourcePath":"components/cards/TrackCard.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"StepTimeline","sourcePath":"components/content/StepTimeline.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"StatTile","sourcePath":"components/core/StatTile.jsx"},{"name":"VerifiedBadge","sourcePath":"components/core/VerifiedBadge.jsx"},{"name":"FreeLessonCTA","sourcePath":"components/cta/FreeLessonCTA.jsx"},{"name":"StickyMobileCTA","sourcePath":"components/cta/StickyMobileCTA.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"BookingModal","sourcePath":"components/overlays/BookingModal.jsx"},{"name":"CurrencySwitcher","sourcePath":"components/switchers/CurrencySwitcher.jsx"},{"name":"LocaleSwitcher","sourcePath":"components/switchers/LocaleSwitcher.jsx"}],"sourceHashes":{"components/brand/Motif.jsx":"3ca6533bef74","components/cards/PricingCard.jsx":"92006774d404","components/cards/TeacherCard.jsx":"3f1c7b827086","components/cards/TrackCard.jsx":"7b653a0479f8","components/content/Accordion.jsx":"d2bd99148d9d","components/content/StepTimeline.jsx":"00767a01c4f7","components/core/Button.jsx":"8fb18b0d2403","components/core/Chip.jsx":"4bf8f591b16e","components/core/Icon.jsx":"c1fd580f61e6","components/core/StatTile.jsx":"f88b08ca1bc0","components/core/VerifiedBadge.jsx":"f191fa8be871","components/cta/FreeLessonCTA.jsx":"f2bbcea26fa5","components/cta/StickyMobileCTA.jsx":"1b81c5acaa2d","components/forms/FormField.jsx":"e863ac88296f","components/overlays/BookingModal.jsx":"3d0ba9d571be","components/switchers/CurrencySwitcher.jsx":"a30d532c18c0","components/switchers/LocaleSwitcher.jsx":"2c3270521d75","ui_kits/marketing_site/App.jsx":"234fc7758bb9","ui_kits/marketing_site/Content.jsx":"41550cd7e869","ui_kits/marketing_site/Header.jsx":"f35572decad9","ui_kits/marketing_site/Sections.jsx":"b8790f988273","ui_kits/marketing_site/site-data.js":"ba8b0463e672"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GaraadDesignSystem_b60642 = window.GaraadDesignSystem_b60642 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Motif.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Somali cultural motifs. Flat single-colour silhouettes, deliberately graphic
// rather than illustrative — they sit behind or beside content at low opacity,
// never as the subject of a section. See readme MOTIFS.

const CAMEL = ['M42 44h50c9 0 15 5 15 12s-6 12-15 12H42c-9 0-15-5-15-12s6-12 15-12Z', 'M46 48C44 24 58 12 70 13s20 15 20 35Z', 'M32 66 48 50 30 19 17 28Z', 'M30 17C22 12 9 16 2 24l6 8c9-1 19-5 24-11Z', 'M28 16c1-6 4-9 8-10-1 5-2 8-4 11Z', 'M42 64h7l-4 42h-5z', 'M53 64h6l-2 42h-5z', 'M82 64h6l2 42h-5z', 'M92 64h7l4 42h-5z', 'M104 52c7 4 9 10 7 17l-4-2c2-5 0-9-5-11z'];
const CAMEL_BOX = [124, 110];
const AQAL_DOME = 'M4 88C4 26 116 26 116 88Z';
const AQAL_RIBS = ['M22 88C24 52 38 30 60 28', 'M40 88C42 58 50 34 60 28', 'M98 88C96 52 82 30 60 28', 'M80 88C78 58 70 34 60 28', 'M9 66C28 55 92 55 111 66', 'M14 48C32 39 88 39 106 48'];
const AQAL_DOOR = 'M47 88V71c0-8 6-13 13-13s13 5 13 13v17Z';
const AQAL_BOX = [120, 96];
function Camel() {
  return /*#__PURE__*/React.createElement("g", null, CAMEL.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })));
}
function Motif({
  name = 'camel',
  height = 72,
  color = 'currentColor',
  lineColor = 'rgba(255,255,255,.34)',
  opacity = 1,
  flip = false,
  style,
  ...rest
}) {
  const common = {
    fill: color,
    'aria-hidden': 'true',
    focusable: 'false',
    style: {
      display: 'block',
      opacity,
      transform: flip ? 'scaleX(-1)' : undefined,
      ...style
    },
    ...rest
  };
  if (name === 'aqal') {
    const [w, h] = AQAL_BOX;
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: `0 0 ${w} ${h}`,
      height: height,
      width: height * w / h
    }, common), /*#__PURE__*/React.createElement("path", {
      d: AQAL_DOME
    }), /*#__PURE__*/React.createElement("path", {
      d: AQAL_DOOR,
      fill: lineColor
    }), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      stroke: lineColor,
      strokeWidth: "2.4",
      strokeLinecap: "round"
    }, AQAL_RIBS.map((d, i) => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d
    }))));
  }
  if (name === 'caravan') {
    // Three camels walking, front to back, on one baseline.
    const [w, h] = CAMEL_BOX;
    const scales = [1, 0.76, 0.58];
    const gaps = [0, 126, 226];
    const totalW = 306;
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: `0 0 ${totalW} ${h}`,
      height: height,
      width: height * totalW / h
    }, common), scales.map((s, i) => /*#__PURE__*/React.createElement("g", {
      key: i,
      transform: `translate(${gaps[i]} ${h - h * s}) scale(${s})`,
      opacity: 1 - i * 0.22
    }, /*#__PURE__*/React.createElement(Camel, null))));
  }
  if (name === 'weave') {
    // Tileable alool-mat band: chevron pairs with a diamond between them.
    const id = React.useId().replace(/[^a-zA-Z0-9]/g, '');
    return /*#__PURE__*/React.createElement("svg", _extends({
      width: "100%",
      height: height,
      preserveAspectRatio: "none",
      viewBox: "0 0 48 16"
    }, common), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
      id: `w${id}`,
      width: "48",
      height: "16",
      patternUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 13 8 3l8 10-2.6 0L8 7.4 2.6 13Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32 13 40 3l8 10-2.6 0L40 7.4 34.6 13Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24 3l6 6-6 6-6-6Z",
      opacity: ".55"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "48",
      height: "16",
      fill: `url(#w${id})`
    }));
  }
  const [w, h] = CAMEL_BOX;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 ${w} ${h}`,
    height: height,
    width: height * w / h
  }, common), /*#__PURE__*/React.createElement(Camel, null));
}
Object.assign(__ds_scope, { Motif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Motif.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide-derived 24×24 outline paths (stroke 2, round caps) — see readme ICONOGRAPHY.
const PATHS = {
  check: ['M20 6 9 17l-5-5'],
  'arrow-right': ['M5 12h14', 'm12 5 7 7-7 7'],
  'chevron-down': ['m6 9 6 6 6-6'],
  x: ['M18 6 6 18', 'm6 6 12 12'],
  menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  clock: ['M12 6v6l4 2'],
  globe: ['M12 2a15 15 0 0 1 0 20', 'M12 2a15 15 0 0 0 0 20', 'M2 12h20'],
  'user-check': ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'm16 11 2 2 4-4'],
  users: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  'file-check': ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z', 'M14 2v5h5', 'm9 15 2 2 4-4'],
  eye: ['M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z'],
  heart: ['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'],
  'book-open': ['M12 7v14', 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'],
  'message-circle': ['M7.9 20A9 9 0 1 0 4 16.1L2 22Z'],
  calendar: ['M8 2v4', 'M16 2v4', 'M3 10h18'],
  sparkles: ['m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z'],
  star: ['m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z'],
  'file-text': ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z', 'M14 2v5h5', 'M9 13h6', 'M9 17h4']
};
const CIRCLES = {
  clock: [12, 12, 10],
  globe: [12, 12, 10],
  eye: [12, 12, 3],
  'user-check': [9, 7, 4],
  users: [9, 7, 4]
};
const RECTS = {
  calendar: [3, 4, 18, 18, 2]
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  mirrorRtl = false,
  style,
  ...rest
}) {
  const paths = PATHS[name] || [];
  const c = CIRCLES[name];
  const r = RECTS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    className: mirrorRtl ? 'g-mirror' : undefined,
    style: {
      flex: '0 0 auto',
      display: 'block',
      ...style
    }
  }, rest), r && /*#__PURE__*/React.createElement("rect", {
    x: r[0],
    y: r[1],
    width: r[2],
    height: r[3],
    rx: r[4]
  }), c && /*#__PURE__*/React.createElement("circle", {
    cx: c[0],
    cy: c[1],
    r: c[2]
  }), paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = -1,
  singleOpen = true,
  ...rest
}) {
  const [open, setOpen] = React.useState(() => defaultOpen >= 0 ? [defaultOpen] : []);
  const toggle = i => setOpen(prev => {
    const isOpen = prev.includes(i);
    if (singleOpen) return isOpen ? [] : [i];
    return isOpen ? prev.filter(x => x !== i) : [...prev, i];
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      maxWidth: 760,
      marginInline: 'auto',
      display: 'grid',
      gap: 8
    }
  }, rest), items.map((it, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": isOpen,
      "aria-controls": `g-acc-panel-${i}`,
      id: `g-acc-btn-${i}`,
      onClick: () => toggle(i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '18px 20px',
        minHeight: 'var(--tap-min)',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'start',
        fontFamily: 'var(--font-core)',
        fontSize: 18,
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--text-heading)',
        lineHeight: 1.4
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-slow) var(--ease-out)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 20,
      color: "var(--blue-primary)"
    })))), /*#__PURE__*/React.createElement("div", {
      id: `g-acc-panel-${i}`,
      role: "region",
      "aria-labelledby": `g-acc-btn-${i}`,
      hidden: !isOpen,
      style: {
        padding: '0 20px 20px',
        fontSize: 16,
        lineHeight: 1.65,
        color: 'var(--ink-700)'
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/StepTimeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepTimeline({
  steps = [],
  orientation = 'horizontal',
  tone = 'light',
  emphasisIndex = -1,
  numbered = true,
  ...rest
}) {
  const dark = tone === 'dark';
  const horizontal = orientation === 'horizontal';
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      position: 'relative',
      gridTemplateColumns: horizontal ? `repeat(${steps.length}, minmax(0,1fr))` : '1fr',
      gap: horizontal ? 20 : 0
    }
  }, rest), steps.map((s, i) => {
    const emphasised = i === emphasisIndex;
    const markerBg = emphasised ? 'var(--gold-star)' : dark ? 'rgba(14,140,111,.16)' : 'var(--teal-50)';
    const markerFg = emphasised ? '#3D2903' : 'var(--teal-teacher)';
    const size = emphasised ? 48 : 40;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: horizontal ? 'column' : 'row',
        gap: horizontal ? 14 : 16,
        paddingBlockEnd: horizontal ? 0 : 28,
        paddingInlineEnd: horizontal ? 8 : 0
      }
    }, i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: horizontal ? {
        position: 'absolute',
        insetBlockStart: size / 2 - 1,
        insetInlineStart: size + 8,
        insetInlineEnd: -20,
        height: 2,
        background: dark ? 'var(--border-on-dark)' : 'var(--line-100)'
      } : {
        position: 'absolute',
        insetInlineStart: size / 2 - 1,
        insetBlockStart: size + 6,
        insetBlockEnd: 6,
        width: 2,
        background: dark ? 'var(--border-on-dark)' : 'var(--line-100)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: size,
        height: size,
        borderRadius: '50%',
        background: markerBg,
        color: markerFg,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto',
        fontWeight: 'var(--weight-bold)',
        fontSize: emphasised ? 19 : 16,
        position: 'relative',
        zIndex: 1,
        boxShadow: emphasised ? '0 6px 18px rgba(239,165,27,.35)' : 'none'
      }
    }, s.icon && !numbered ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: s.icon,
      size: 20,
      color: markerFg
    }) : numbered ? i + 1 : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: s.icon || 'check',
      size: 20,
      color: markerFg
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: emphasised ? dark ? 'rgba(239,165,27,.08)' : 'var(--gold-50)' : 'transparent',
        border: emphasised ? '1px solid rgba(239,165,27,.28)' : '1px solid transparent',
        borderRadius: emphasised ? 'var(--radius-card)' : 0,
        padding: emphasised ? '14px 16px' : 0,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: emphasised ? 19 : 17,
        marginBlockEnd: 6,
        color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)'
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.55,
        color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
      }
    }, s.body)));
  }));
}
Object.assign(__ds_scope, { StepTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepTimeline.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 14px',
    fontSize: 14,
    minHeight: 40,
    gap: 6
  },
  md: {
    padding: '12px 20px',
    fontSize: 16,
    minHeight: 48,
    gap: 8
  },
  lg: {
    padding: '16px 28px',
    fontSize: 17,
    minHeight: 56,
    gap: 10
  }
};
function faceFor(variant, onDark) {
  switch (variant) {
    case 'primary':
      return {
        background: 'var(--action-primary)',
        color: 'var(--text-on-brand)',
        border: '1px solid transparent',
        boxShadow: 'var(--cta-inner-highlight)'
      };
    case 'secondary':
      return onDark ? {
        background: 'rgba(246,249,252,.1)',
        color: 'var(--text-on-dark)',
        border: '1px solid var(--border-on-dark)'
      } : {
        background: 'var(--action-secondary-bg)',
        color: 'var(--text-heading)',
        border: '1px solid var(--border-hairline)',
        boxShadow: 'var(--shadow-rest)'
      };
    case 'outline':
      return {
        background: 'transparent',
        color: onDark ? 'var(--text-on-dark)' : 'var(--text-link)',
        border: `1.5px solid ${onDark ? 'var(--border-on-dark)' : 'var(--blue-200)'}`
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: onDark ? 'var(--text-on-dark)' : 'var(--text-link)',
        border: '1px solid transparent'
      };
    case 'text':
      return {
        background: 'transparent',
        color: onDark ? 'var(--text-on-dark)' : 'var(--text-link)',
        border: 'none',
        padding: 0,
        minHeight: 0,
        textDecoration: 'underline',
        textDecorationColor: 'var(--gold-star)',
        textDecorationThickness: '2px',
        textUnderlineOffset: '4px'
      };
    default:
      return {};
  }
}
function Button({
  variant = 'primary',
  size = 'md',
  label,
  children,
  iconStart,
  iconEnd,
  href,
  onDark = false,
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const face = faceFor(variant, onDark);
  const isText = variant === 'text';
  const style = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-core)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: s.fontSize,
    lineHeight: 1.2,
    padding: s.padding,
    minHeight: s.minHeight,
    borderRadius: isText ? 0 : 'var(--radius-button)',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transition: `transform var(--dur-base) var(--ease-out), background-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)`,
    transform: hover && !disabled && !loading && !isText ? 'var(--lift-hover)' : 'none',
    ...face
  };
  if (hover && !disabled && !loading) {
    if (variant === 'primary') style.background = 'var(--action-primary-hover)';
    if (variant === 'secondary' && !onDark) style.boxShadow = 'var(--shadow-hover)';
    if (variant === 'ghost' || variant === 'outline') style.background = onDark ? 'rgba(246,249,252,.08)' : 'var(--action-ghost-hover)';
    if (isText) style.textDecorationThickness = '3px';
  }
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement(Spinner, null) : iconStart ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconStart,
    size: size === 'sm' ? 16 : 18
  }) : null, /*#__PURE__*/React.createElement("span", null, loading ? 'One moment…' : label ?? children), !loading && iconEnd ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: size === 'sm' ? 16 : 18,
    mirrorRtl: true
  }) : null);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: style
  }, handlers, rest), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled || loading,
    "aria-busy": loading || undefined,
    onClick: onClick
  }, handlers, rest), content);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'g-spin 700ms linear infinite',
      display: 'inline-block'
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/TrackCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ACCENTS = {
  blue: {
    tint: 'var(--blue-50)',
    fg: 'var(--blue-primary)',
    edge: 'rgba(30,107,214,.2)'
  },
  gold: {
    tint: 'var(--gold-50)',
    fg: 'var(--gold-700)',
    edge: 'rgba(239,165,27,.32)'
  }
};
function TrackCard({
  title,
  promise,
  bullets = [],
  ages,
  icon = 'book-open',
  accent = 'blue',
  ctaLabel,
  onCta,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const a = ACCENTS[accent] || ACCENTS.blue;
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 26,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: `1px solid ${accent === 'gold' ? a.edge : 'var(--border-hairline)'}`,
      boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
      transform: hover ? 'var(--lift-hover)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-tile)',
      background: a.tint,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: a.fg
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--ink-700)'
    }
  }, promise), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 8
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: a.fg,
      marginBlockStart: 8,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", null, b)))), ages && /*#__PURE__*/React.createElement("div", {
    className: "g-caption",
    style: {
      marginBlockStart: 2
    }
  }, ages), ctaLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 'auto',
      paddingBlockStart: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    label: ctaLabel,
    onClick: onCta
  })));
}
Object.assign(__ds_scope, { TrackCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TrackCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--paper-200)',
    fg: 'var(--ink-700)',
    border: 'var(--border-hairline)'
  },
  blue: {
    bg: 'var(--blue-50)',
    fg: 'var(--blue-800)',
    border: 'rgba(30,107,214,.16)'
  },
  teal: {
    bg: 'var(--teal-50)',
    fg: 'var(--teal-700)',
    border: 'rgba(14,140,111,.18)'
  },
  gold: {
    bg: 'var(--gold-50)',
    fg: '#7A5206',
    border: 'rgba(239,165,27,.28)'
  },
  violet: {
    bg: 'var(--violet-50)',
    fg: 'var(--violet-700)',
    border: 'rgba(108,75,209,.18)'
  },
  onDark: {
    bg: 'rgba(246,249,252,.1)',
    fg: 'var(--text-on-dark)',
    border: 'var(--border-on-dark)'
  }
};
function Chip({
  label,
  children,
  tone = 'neutral',
  icon,
  selectable = false,
  selected = false,
  onChange,
  size = 'md',
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const pad = size === 'sm' ? '6px 12px' : '10px 16px';
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: pad,
    minHeight: selectable ? 'var(--tap-min)' : 'auto',
    borderRadius: 'var(--radius-chip)',
    fontFamily: 'var(--font-core)',
    fontSize: size === 'sm' ? 13 : 15,
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1.2,
    background: selected ? 'var(--blue-primary)' : t.bg,
    color: selected ? 'var(--text-on-brand)' : t.fg,
    border: `1px solid ${selected ? 'transparent' : t.border}`,
    cursor: selectable ? 'pointer' : 'default',
    transition: 'background-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, label ?? children));
  if (!selectable) return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": selected,
    onClick: () => onChange && onChange(!selected),
    style: style
  }, rest), content);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTile({
  label,
  value,
  suffix,
  progress,
  tone = 'neutral',
  ...rest
}) {
  const bar = tone === 'gold' ? 'var(--gold-star)' : tone === 'teal' ? 'var(--teal-teacher)' : 'var(--blue-primary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-page)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-tile)',
      padding: '14px 16px',
      minWidth: 0
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginBlockStart: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, suffix)), typeof progress === 'number' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 10,
      height: 6,
      borderRadius: 999,
      background: 'var(--paper-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.max(0, Math.min(100, progress))}%`,
      height: '100%',
      background: bar,
      borderRadius: 999
    }
  })));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/VerifiedBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  sm: {
    box: 18,
    icon: 12,
    font: 12
  },
  md: {
    box: 22,
    icon: 14,
    font: 13
  },
  lg: {
    box: 28,
    icon: 18,
    font: 14
  }
};
function VerifiedBadge({
  size = 'md',
  label = 'Verified',
  state = 'verified',
  showLabel = true,
  ...rest
}) {
  const s = S[size] || S.md;
  const isNew = state === 'new';
  const fill = isNew ? 'var(--gold-star)' : 'var(--teal-teacher)';
  const text = isNew ? 'Fully vetted, newly joined' : label;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.box,
      height: s.box,
      borderRadius: '50%',
      background: fill,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: isNew ? 'star' : 'check',
    size: s.icon,
    color: "#fff",
    strokeWidth: 2.5
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    className: "g-label",
    style: {
      color: isNew ? 'var(--gold-700)' : 'var(--teal-700)',
      fontSize: s.font,
      letterSpacing: 'var(--tracking-label)'
    }
  }, text), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)'
    }
  }, isNew ? 'Newly joined, fully vetted teacher' : 'Verified teacher'));
}
Object.assign(__ds_scope, { VerifiedBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/VerifiedBadge.jsx", error: String((e && e.message) || e) }); }

// components/cards/TeacherCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TeacherCard({
  name,
  tracks = [],
  years,
  languages,
  timezone,
  quote,
  photoLabel = 'Placeholder — teacher photograph',
  state = 'verified',
  onBook,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const first = (name || '').split(' ').slice(-1)[0].replace('.', '');
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-hairline)',
      boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
      transform: hover ? 'var(--lift-hover)' : 'none',
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      background: 'linear-gradient(150deg,#0C3A72 0%,#082A55 55%,#7A5206 100%)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'rgba(246,249,252,.72)',
      background: 'rgba(6,29,59,.5)',
      borderRadius: 6,
      padding: '4px 8px'
    }
  }, photoLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.VerifiedBadge, {
    size: "sm",
    state: state
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, tracks.map(t => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: t,
    size: "sm",
    tone: t.toLowerCase().startsWith('qur') ? 'gold' : 'blue',
    label: t
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, [years && `${years} teaching`, languages, timezone].filter(Boolean).join(' · ')), quote && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--ink-700)',
      borderInlineStart: '2px solid var(--teal-100)',
      paddingInlineStart: 12
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    label: `Book a free lesson with ${first}`,
    onClick: onBook
  }))));
}
Object.assign(__ds_scope, { TeacherCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TeacherCard.jsx", error: String((e && e.message) || e) }); }

// components/cta/FreeLessonCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZE = {
  hero: {
    font: 18,
    padding: '18px 36px',
    minHeight: 'var(--cta-min-height)',
    radius: 'var(--radius-cta)'
  },
  dark: {
    font: 18,
    padding: '18px 36px',
    minHeight: 'var(--cta-min-height)',
    radius: 'var(--radius-cta)'
  },
  header: {
    font: 15,
    padding: '0 18px',
    minHeight: 40,
    radius: 10
  },
  sticky: {
    font: 17,
    padding: '16px 28px',
    minHeight: 'var(--cta-min-height)',
    radius: 'var(--radius-cta)'
  }
};
function FreeLessonCTA({
  variant = 'hero',
  label = 'Book your free first lesson',
  pillText = 'FIRST LESSON FREE',
  caption = '1 full hour · With a verified teacher · No card needed to book',
  loading = false,
  success = false,
  fullWidth = false,
  onClick,
  href,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  if (variant === 'inline') {
    const Tag = href ? 'a' : 'button';
    return /*#__PURE__*/React.createElement(Tag, _extends({
      href: href,
      type: href ? undefined : 'button',
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        font: 'inherit',
        cursor: 'pointer',
        color: 'var(--text-body)',
        fontWeight: 'var(--weight-semibold)',
        textDecoration: 'underline',
        textDecorationColor: 'var(--gold-star)',
        textDecorationThickness: hover ? '3px' : '2px',
        textUnderlineOffset: '4px',
        transition: 'text-decoration-thickness var(--dur-base) var(--ease-out)'
      }
    }, rest), label);
  }
  const s = SIZE[variant] || SIZE.hero;
  const isDark = variant === 'dark';
  const compact = variant === 'header';
  const showPill = variant === 'hero';
  const showCaption = variant === 'hero' || variant === 'dark';
  const bloomOpacity = isDark ? 'var(--cta-aurora-opacity-dark)' : 'var(--cta-aurora-opacity)';
  const shimmer = !compact && !loading && !success;
  const face = {
    position: 'relative',
    zIndex: 2,
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    overflow: 'hidden',
    fontFamily: 'var(--font-core)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: s.font,
    lineHeight: 1.2,
    color: '#fff',
    padding: s.padding,
    minHeight: s.minHeight,
    minWidth: compact ? 0 : 220,
    border: 'none',
    borderRadius: s.radius,
    cursor: loading ? 'progress' : 'pointer',
    background: success ? 'var(--teal-teacher)' : 'var(--cta-face)',
    boxShadow: `var(--cta-inner-highlight),${compact ? '0 2px 10px rgba(30,107,214,.3)' : 'var(--cta-bloom)'}`,
    transform: press ? 'translateY(0) scale(.99)' : hover && !loading ? 'translateY(-2px)' : 'none',
    transition: 'transform var(--dur-base) var(--ease-out), background-color var(--dur-slower) var(--ease-out)',
    willChange: 'transform'
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, shimmer && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "g-cta-shimmer",
    style: {
      position: 'absolute',
      insetBlock: 0,
      insetInlineStart: 0,
      width: '20%',
      background: 'var(--cta-shimmer)',
      pointerEvents: 'none',
      animation: `g-cta-shimmer var(--shimmer-every) var(--ease-out) infinite`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, loading ? 'Finding a time…' : success ? 'Lesson booked' : label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      transform: hover && !loading ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, loading ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid rgba(255,255,255,.9)',
      borderTopColor: 'transparent',
      animation: 'g-spin 700ms linear infinite'
    }
  }) : success ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5",
    strokeDasharray: "32",
    style: {
      animation: 'g-check-draw var(--dur-check) var(--ease-out) both'
    }
  })) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: compact ? 16 : 18,
    mirrorRtl: true
  })));
  const Tag = href && !loading ? 'a' : 'button';
  const button = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: fullWidth ? 'block' : 'inline-block',
      padding: 2,
      borderRadius: `calc(${typeof s.radius === 'number' ? s.radius + 'px' : s.radius} + 2px)`,
      isolation: 'isolate'
    }
  }, !compact && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      overflow: 'hidden',
      opacity: isDark ? 1 : .9
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "g-cta-ring",
    style: {
      position: 'absolute',
      insetInlineStart: '-100%',
      insetBlockStart: '-150%',
      width: '300%',
      height: '400%',
      background: 'var(--cta-ring)',
      animation: 'g-spin var(--dur-ring) linear infinite',
      animationPlayState: focus ? 'paused' : 'running',
      willChange: 'transform'
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      insetInlineStart: '-30%',
      insetBlockStart: '-60%',
      width: '160%',
      height: '220%',
      background: 'var(--cta-aurora)',
      filter: 'blur(var(--cta-aurora-blur))',
      opacity: hover ? `calc(${bloomOpacity} * 1.25)` : loading ? `calc(${bloomOpacity} * .4)` : press ? `calc(${bloomOpacity} * .7)` : bloomOpacity,
      transition: 'opacity var(--dur-base) var(--ease-out)',
      pointerEvents: 'none',
      zIndex: 0
    }
  }), !compact && !loading && !success && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "g-cta-pulse",
    style: {
      position: 'absolute',
      inset: 2,
      borderRadius: 'inherit',
      zIndex: 1,
      animation: `g-cta-pulse calc(var(--dur-pulse) + var(--pulse-gap)) var(--ease-out) infinite`
    }
  }), /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : 'button',
    disabled: Tag === 'button' ? loading : undefined,
    "aria-busy": loading || undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: face
  }, rest), inner));
  if (compact) return button;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: fullWidth ? 'stretch' : 'flex-start',
      gap: 10,
      textAlign: fullWidth ? 'center' : 'start'
    }
  }, showPill && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: fullWidth ? 'center' : 'flex-start',
      display: 'inline-block',
      background: isDark ? 'rgba(239,165,27,.18)' : 'var(--gold-50)',
      color: isDark ? 'var(--gold-star)' : '#7A5206',
      border: `1px solid ${isDark ? 'rgba(239,165,27,.35)' : 'rgba(239,165,27,.3)'}`,
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px',
      fontSize: 12,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-pill)',
      textTransform: 'uppercase'
    }
  }, pillText), button, showCaption && caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { FreeLessonCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cta/FreeLessonCTA.jsx", error: String((e && e.message) || e) }); }

// components/cards/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PricingCard({
  name,
  price,
  unit,
  priceNote,
  savings,
  features = [],
  ctaLabel = 'Start with a free lesson',
  featured = false,
  ribbon = 'Most popular',
  custom = false,
  customLine,
  onCta,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: featured ? '1.5px solid var(--teal-teacher)' : '1px solid var(--border-hairline)',
      boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
      transform: hover ? 'var(--lift-hover)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      padding: featured ? '32px 28px 28px' : '28px'
    }
  }, rest), featured && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetBlockStart: -13,
      insetInlineStart: 28,
      background: 'var(--teal-teacher)',
      color: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 14px',
      fontSize: 12,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-pill)',
      textTransform: 'uppercase'
    }
  }, ribbon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginBlockEnd: 12
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 62
    }
  }, custom ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Custom pricing") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    key: price,
    style: {
      fontSize: 44,
      lineHeight: 1,
      fontWeight: 'var(--weight-extrabold)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-tight)',
      animation: 'g-reveal var(--dur-fast) var(--ease-out)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, unit))), (priceNote || customLine) && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginBlockStart: 8,
      lineHeight: 1.5
    }
  }, custom ? customLine : priceNote), savings && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      marginBlockStart: 12,
      background: 'var(--gold-50)',
      border: '1px solid rgba(239,165,27,.3)',
      color: '#7A5206',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 12px',
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)'
    }
  }, savings), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0 24px',
      display: 'grid',
      gap: 10
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginBlockStart: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "var(--teal-teacher)",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 'auto'
    }
  }, featured ? /*#__PURE__*/React.createElement(__ds_scope.FreeLessonCTA, {
    variant: "sticky",
    fullWidth: true,
    label: ctaLabel,
    onClick: onCta
  }) : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "md",
    fullWidth: true,
    label: ctaLabel,
    iconEnd: "arrow-right",
    onClick: onCta
  })));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/cta/StickyMobileCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StickyMobileCTA({
  visible = true,
  label = 'Book your free first lesson',
  note = 'No card needed to book',
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "region",
    "aria-label": "Book a free lesson",
    style: {
      position: 'fixed',
      insetInline: 0,
      insetBlockEnd: 0,
      zIndex: 60,
      padding: `12px var(--gutter) calc(12px + env(safe-area-inset-bottom))`,
      background: 'rgba(246,249,252,.94)',
      backdropFilter: 'blur(12px)',
      borderBlockStart: '1px solid var(--border-hairline)',
      transform: visible ? 'none' : 'translateY(120%)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.FreeLessonCTA, {
    variant: "sticky",
    fullWidth: true,
    label: label,
    onClick: onClick
  }), note && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBlockStart: 8,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { StickyMobileCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cta/StickyMobileCTA.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  hint,
  error,
  optional = false,
  placeholder,
  autoComplete,
  inputMode,
  maxLength,
  rows,
  children,
  ...rest
}) {
  const id = `g-f-${name}`;
  const describedBy = [hint && `${id}-hint`, error && `${id}-err`].filter(Boolean).join(' ') || undefined;
  const fieldStyle = {
    width: '100%',
    minHeight: 'var(--tap-min)',
    padding: '12px 14px',
    fontFamily: 'var(--font-core)',
    fontSize: 16,
    color: 'var(--text-body)',
    background: 'var(--surface-card)',
    borderRadius: 'var(--radius-input)',
    border: `1px solid ${error ? 'var(--status-error)' : 'var(--border-strong)'}`,
    outlineOffset: 3
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 6
    }
  }, rest), /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 14,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, optional && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-muted)'
    }
  }, " \u2014 optional")), hint && /*#__PURE__*/React.createElement("div", {
    id: `${id}-hint`,
    className: "g-caption"
  }, hint), children ? children : type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", {
    id: id,
    name: name,
    value: value,
    onChange: onChange,
    rows: rows || 3,
    maxLength: maxLength,
    placeholder: placeholder,
    "aria-describedby": describedBy,
    "aria-invalid": !!error || undefined,
    style: {
      ...fieldStyle,
      resize: 'vertical',
      lineHeight: 1.5
    }
  }) : /*#__PURE__*/React.createElement("input", {
    id: id,
    name: name,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    autoComplete: autoComplete,
    inputMode: inputMode,
    maxLength: maxLength,
    "aria-describedby": describedBy,
    "aria-invalid": !!error || undefined,
    style: fieldStyle
  }), error && /*#__PURE__*/React.createElement("div", {
    id: `${id}-err`,
    role: "alert",
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'flex-start',
      fontSize: 14,
      color: 'var(--status-error)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontWeight: 'var(--weight-bold)'
    }
  }, "!"), /*#__PURE__*/React.createElement("span", null, error)));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/overlays/BookingModal.jsx
try { (() => {
const AGES = ['5–7', '8–10', '11–13', '14–15'];
const TRACKS = ['Somali', 'Arabic', "Qur'aan"];
const LEVELS = ['Complete beginner', 'Understands some', 'Speaks a little', 'Confident'];
const BLOCKS = ['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Weekend mornings', 'Weekend afternoons', 'Weekend evenings'];
const STORE_KEY = 'garaad.booking.draft';
const emptyDraft = {
  child: '',
  age: '',
  tracks: [],
  level: '',
  notes: '',
  tz: 'Europe/London',
  blocks: [],
  parent: '',
  email: '',
  whatsapp: '',
  consent: false
};
function BookingModal({
  open = false,
  onClose,
  initialTrack,
  initialStep = 1,
  persist = true,
  onSubmit
}) {
  const [step, setStep] = React.useState(initialStep);
  const [draft, setDraft] = React.useState(() => {
    let base = {
      ...emptyDraft
    };
    if (persist && typeof localStorage !== 'undefined') {
      try {
        const s = localStorage.getItem(STORE_KEY);
        if (s) base = {
          ...base,
          ...JSON.parse(s)
        };
      } catch (e) {/* ignore */}
    }
    if (initialTrack && !base.tracks.includes(initialTrack)) base.tracks = [...base.tracks, initialTrack];
    return base;
  });
  const panelRef = React.useRef(null);
  const set = (k, v) => setDraft(d => {
    const next = {
      ...d,
      [k]: v
    };
    if (persist && typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(next));
      } catch (e) {/* ignore */}
    }
    return next;
  });
  const multi = (k, v) => set(k, draft[k].includes(v) ? draft[k].filter(x => x !== v) : [...draft[k], v]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    document.addEventListener('keydown', onKey);
    if (panelRef.current) panelRef.current.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const total = 4;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backdropFilter: 'blur(3px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: panelRef,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Book your free first lesson",
    tabIndex: -1,
    style: {
      width: 'min(560px, 100%)',
      maxHeight: '92vh',
      overflowY: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-modal)',
      padding: 26,
      animation: 'g-reveal var(--dur-slower) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "g-label",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Step ", step, " of ", total), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 8,
      borderRadius: 8,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 4,
      borderRadius: 999,
      background: 'var(--paper-200)',
      margin: '12px 0 22px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${step / total * 100}%`,
      height: '100%',
      background: 'var(--blue-primary)',
      borderRadius: 999,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite"
  }, step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26
    }
  }, "About your child"), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Child's first name",
    name: "child",
    hint: "First name is all we need.",
    value: draft.child,
    onChange: e => set('child', e.target.value),
    autoComplete: "off"
  }), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Age",
    name: "age"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, AGES.map(a => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: a,
    selectable: true,
    selected: draft.age === a,
    onChange: () => set('age', a),
    label: a
  })))), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "What would they like to learn?",
    name: "tracks",
    hint: "Choose as many as you like."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, TRACKS.map(t => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: t,
    selectable: true,
    selected: draft.tracks.includes(t),
    onChange: () => multi('tracks', t),
    label: t
  })))), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Where are they now?",
    name: "level"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, LEVELS.map(l => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: l,
    selectable: true,
    selected: draft.level === l,
    onChange: () => set('level', l),
    label: l
  })))), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Anything the teacher should know?",
    name: "notes",
    type: "textarea",
    optional: true,
    maxLength: 200,
    value: draft.notes,
    onChange: e => set('notes', e.target.value)
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    label: "Add another child"
  }), /*#__PURE__*/React.createElement("p", {
    className: "g-caption"
  }, "Siblings are priced lower \u2014 you'll see that later, not now.")), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26
    }
  }, "When suits you"), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Time zone",
    name: "tz",
    hint: "Detected from your device \u2014 change it if that's wrong.",
    value: draft.tz,
    onChange: e => set('tz', e.target.value)
  }), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Pick any times that work",
    name: "blocks"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 8
    }
  }, BLOCKS.map(b => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: b,
    selectable: true,
    selected: draft.blocks.includes(b),
    onChange: () => multi('blocks', b),
    label: b
  })))), /*#__PURE__*/React.createElement("p", {
    className: "g-caption"
  }, "Lessons are 1 hour. Packages are 2 lessons a week \u2014 but today you're just booking the free one.")), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26
    }
  }, "Your details"), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Your first name",
    name: "parent",
    value: draft.parent,
    onChange: e => set('parent', e.target.value),
    autoComplete: "given-name"
  }), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Email",
    name: "email",
    type: "email",
    value: draft.email,
    onChange: e => set('email', e.target.value),
    autoComplete: "email",
    hint: "We'll send the lesson link here."
  }), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "WhatsApp number",
    name: "whatsapp",
    type: "tel",
    optional: true,
    inputMode: "tel",
    autoComplete: "tel",
    hint: "Most families prefer WhatsApp.",
    value: draft.whatsapp,
    onChange: e => set('whatsapp', e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 15,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: draft.consent,
    onChange: e => set('consent', e.target.checked),
    style: {
      width: 20,
      height: 20,
      marginBlockStart: 2,
      accentColor: 'var(--blue-primary)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "I'm this child's parent or guardian and I agree to the terms and privacy notice.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--teal-50)',
      border: '1px solid rgba(14,140,111,.18)',
      borderRadius: 'var(--radius-tile)',
      padding: '14px 16px',
      fontSize: 15,
      color: 'var(--teal-700)'
    }
  }, "No payment now. Nothing is charged until after your free lesson, and only if you choose a package.")), step === 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--teal-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-teacher)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5",
    strokeDasharray: "32",
    style: {
      animation: 'g-check-draw 240ms var(--ease-out) both'
    }
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26
    }
  }, "Waan ku faraxsanahay! Your free lesson request is in."), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      paddingInlineStart: 22,
      display: 'grid',
      gap: 8,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("li", null, "We match your child with a verified teacher, within 24 hours."), /*#__PURE__*/React.createElement("li", null, "We message you two or three times that work."), /*#__PURE__*/React.createElement("li", null, "Your child has a free 1-hour lesson."), /*#__PURE__*/React.createElement("li", null, "Only then do you choose a package \u2014 or not.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    iconStart: "message-circle",
    label: "Message us on WhatsApp"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    label: "See packages while you wait"
  })), /*#__PURE__*/React.createElement("p", {
    className: "g-caption"
  }, "Need to change or cancel? Reply to our message and we'll sort it."))), step < 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'space-between',
      marginBlockStart: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    label: "Back",
    onClick: () => setStep(s => Math.max(1, s - 1)),
    disabled: step === 1
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    iconEnd: "arrow-right",
    label: step === 3 ? 'Request my free lesson' : 'Continue',
    onClick: () => {
      if (step === 3 && onSubmit) onSubmit(draft);
      setStep(s => s + 1);
    }
  }))));
}
Object.assign(__ds_scope, { BookingModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/BookingModal.jsx", error: String((e && e.message) || e) }); }

// components/switchers/CurrencySwitcher.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CURRENCIES = [{
  code: 'USD',
  symbol: '$',
  label: 'US dollars'
}, {
  code: 'EUR',
  symbol: '€',
  label: 'Euros'
}, {
  code: 'GBP',
  symbol: '£',
  label: 'Pounds sterling'
}];
function CurrencySwitcher({
  value = 'USD',
  onChange,
  size = 'md',
  onDark = false,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 12px' : '12px 18px';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    "aria-label": "Currency",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      borderRadius: 'var(--radius-pill)',
      background: onDark ? 'rgba(246,249,252,.08)' : 'var(--paper-200)',
      border: `1px solid ${onDark ? 'var(--border-on-dark)' : 'var(--border-hairline)'}`
    }
  }, rest), CURRENCIES.map(c => {
    const active = c.code === value;
    return /*#__PURE__*/React.createElement("button", {
      key: c.code,
      type: "button",
      role: "radio",
      "aria-checked": active,
      "aria-label": `Show prices in ${c.label}`,
      onClick: () => onChange && onChange(c.code),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        minHeight: size === 'sm' ? 36 : 44,
        padding: pad,
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        fontFamily: 'var(--font-core)',
        fontSize: size === 'sm' ? 14 : 15,
        fontWeight: 'var(--weight-semibold)',
        background: active ? onDark ? 'var(--paper-100)' : 'var(--white)' : 'transparent',
        color: active ? 'var(--text-heading)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        boxShadow: active ? '0 1px 2px rgba(8,42,85,.1)' : 'none',
        transition: 'background-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontWeight: 'var(--weight-bold)'
      }
    }, c.symbol), /*#__PURE__*/React.createElement("span", null, c.code));
  }));
}
Object.assign(__ds_scope, { CurrencySwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/switchers/CurrencySwitcher.jsx", error: String((e && e.message) || e) }); }

// components/switchers/LocaleSwitcher.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LOCALES = [{
  code: 'en',
  short: 'EN',
  name: 'English',
  dir: 'ltr'
}, {
  code: 'so',
  short: 'SO',
  name: 'Somali',
  dir: 'ltr'
}, {
  code: 'ar',
  short: 'AR',
  name: 'العربية',
  dir: 'rtl'
}];
function LocaleSwitcher({
  value = 'en',
  onChange,
  onDark = false,
  applyToDocument = false,
  ...rest
}) {
  const handle = l => {
    if (applyToDocument && typeof document !== 'undefined') {
      document.documentElement.lang = l.code;
      document.documentElement.dir = l.dir;
    }
    if (onChange) onChange(l.code);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    "aria-label": "Language",
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, rest), LOCALES.map(l => {
    const active = l.code === value;
    return /*#__PURE__*/React.createElement("button", {
      key: l.code,
      type: "button",
      role: "radio",
      "aria-checked": active,
      lang: l.code,
      "aria-label": `Switch language to ${l.name}`,
      onClick: () => handle(l),
      style: {
        minWidth: 48,
        minHeight: 44,
        padding: '10px 12px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        background: active ? onDark ? 'rgba(246,249,252,.12)' : 'var(--blue-50)' : 'transparent',
        color: active ? onDark ? 'var(--paper-100)' : 'var(--blue-800)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        fontFamily: l.code === 'ar' ? 'var(--font-arabic)' : 'var(--font-core)',
        fontSize: 14,
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '.02em',
        transition: 'background-color var(--dur-base) var(--ease-out)'
      }
    }, l.short);
  }));
}
Object.assign(__ds_scope, { LocaleSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/switchers/LocaleSwitcher.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/App.jsx
try { (() => {
const {
  BookingModal
} = window.GaraadDesignSystem_b60642;
function App() {
  const [currency, setCurrency] = React.useState(() => localStorage.getItem('garaad.currency') || 'GBP');
  const [locale, setLocale] = React.useState('en');
  const [scrolled, setScrolled] = React.useState(false);
  const [booking, setBooking] = React.useState(null);
  const pickCurrency = c => {
    setCurrency(c);
    localStorage.setItem('garaad.currency', c);
  };
  React.useEffect(() => {
    const el = document.scrollingElement || document.documentElement;
    const onScroll = () => setScrolled(el.scrollTop > 420);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const openBooking = track => setBooking({
    track
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Header, {
    scrolled: scrolled,
    currency: currency,
    setCurrency: pickCurrency,
    locale: locale,
    setLocale: setLocale,
    onBook: () => openBooking()
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.Hero, {
    onBook: () => openBooking()
  }), /*#__PURE__*/React.createElement(window.Teach, {
    onBook: openBooking
  }), /*#__PURE__*/React.createElement(window.Dhaqan, null), /*#__PURE__*/React.createElement(window.HowItWorks, null), /*#__PURE__*/React.createElement(window.Pricing, {
    currency: currency,
    setCurrency: pickCurrency,
    onBook: openBooking
  }), /*#__PURE__*/React.createElement(window.Teachers, {
    onBook: openBooking
  }), /*#__PURE__*/React.createElement(window.Safeguarding, null), /*#__PURE__*/React.createElement(window.AiBuddy, null), /*#__PURE__*/React.createElement(window.MonthlyReport, null), /*#__PURE__*/React.createElement(window.Parents, null), /*#__PURE__*/React.createElement(window.Faq, null), /*#__PURE__*/React.createElement(window.ClosingCta, {
    onBook: () => openBooking()
  })), /*#__PURE__*/React.createElement(window.Footer, {
    currency: currency,
    setCurrency: pickCurrency,
    locale: locale,
    setLocale: setLocale
  }), /*#__PURE__*/React.createElement(BookingModal, {
    open: !!booking,
    initialTrack: booking && booking.track,
    onClose: () => setBooking(null)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Content.jsx
try { (() => {
const {
  StatTile,
  Accordion,
  Button,
  FreeLessonCTA,
  Icon,
  VerifiedBadge,
  LocaleSwitcher,
  CurrencySwitcher,
  Motif
} = window.GaraadDesignSystem_b60642;
const SDx = window.GaraadSite;
function AiBuddy() {
  const chat = [{
    who: 'buddy',
    text: 'Shall we practise this week’s 10 words?'
  }, {
    who: 'child',
    text: 'Haa. Ready.'
  }, {
    who: 'buddy',
    text: 'Good. “Qurux” — now use it in a sentence for me.'
  }];
  return /*#__PURE__*/React.createElement(window.Section, {
    tone: "white",
    id: "ai"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 420px',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--violet-50)',
      border: '1px solid rgba(108,75,209,.18)',
      color: 'var(--violet-700)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 13px',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 15
  }), " Between lessons"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBlock: '18px 16px'
    }
  }, "A practice partner between lessons \u2014 with the teacher still in charge."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 12
    }
  }, ['It only practises what your child’s teacher has already taught.', 'It never gives religious rulings, and never assesses recitation.', 'Every conversation is logged and visible to you and the teacher.', 'There’s a daily time limit, so it stays practice — not a screen habit.'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginBlockStart: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    color: "var(--violet-ai)",
    strokeWidth: 2.5
  })), t))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBlockStart: 22,
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, "The AI helps your child remember. The teacher does the teaching.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid rgba(108,75,209,.2)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-rest)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--violet-50)',
      color: 'var(--violet-700)',
      padding: '10px 14px',
      fontSize: 13,
      fontWeight: 600,
      borderBlockEnd: '1px solid rgba(108,75,209,.16)'
    }
  }, "Your teacher and hooyo can see this chat."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'grid',
      gap: 10
    }
  }, chat.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      justifySelf: m.who === 'child' ? 'end' : 'start',
      maxWidth: '82%',
      background: m.who === 'child' ? 'var(--paper-200)' : 'var(--violet-ai)',
      color: m.who === 'child' ? 'var(--ink-900)' : '#fff',
      padding: '10px 14px',
      borderRadius: 14,
      borderEndStartRadius: m.who === 'child' ? 14 : 4,
      borderEndEndRadius: m.who === 'child' ? 4 : 14,
      fontSize: 15,
      lineHeight: 1.5
    }
  }, m.text))))));
}
function MonthlyReport() {
  return /*#__PURE__*/React.createElement(window.Section, {
    id: "report"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 480px',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Every month, a report you'll actually want to forward."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBlockStart: 16,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--ink-700)'
    }
  }, "Attendance, new words learned, Qur'aan progress, and one honest note from your child's teacher. It takes a minute to read and it tells you exactly what you're paying for.")), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'rotate(-2deg)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-hover)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, "Ayaan \xB7 April"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 6
    }
  }, /*#__PURE__*/React.createElement(VerifiedBadge, {
    size: "sm",
    label: "Ustaad Yusuf A."
  }))), /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 22,
    color: "var(--ink-400)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBlock: '18px'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Lessons attended",
    value: "4/4"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "New words",
    value: "42"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Homework done",
    value: "3/4"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Qur'aan \xB7 Juz Amma",
    value: "60%",
    progress: 60,
    tone: "gold"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--ink-700)',
      borderInlineStart: '2px solid var(--teal-100)',
      paddingInlineStart: 12
    }
  }, "\u201CBeautiful recitation this week. Slow down on the long vowels.\u201D"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginBlockStart: 16,
      background: 'var(--paper-200)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 12px',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Sent to you on the 1st of every month"))));
}
function Parents() {
  return /*#__PURE__*/React.createElement(window.Section, {
    tone: "white",
    id: "parents"
  }, /*#__PURE__*/React.createElement(window.Heading, {
    align: "center",
    title: "Parents' words",
    sub: "Placeholder testimonials \u2014 we publish nothing until a family agrees to be quoted."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, [1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-page)',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-card)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "g-label",
    style: {
      color: 'var(--text-quiet)'
    }
  }, "Placeholder"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBlockStart: 12,
      fontSize: 16.5,
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, "A parent's own words go here, once a real family has agreed to be quoted by name."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 14,
      fontSize: 14,
      color: 'var(--text-quiet)'
    }
  }, "Parent, city \u2014 awaiting consent")))));
}
function Faq() {
  return /*#__PURE__*/React.createElement(window.Section, {
    id: "faq"
  }, /*#__PURE__*/React.createElement(window.Heading, {
    align: "center",
    title: "Questions parents ask"
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: SDx.faq
  }));
}
function ClosingCta({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-dark)',
      paddingBlock: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetBlockEnd: -10,
      insetInlineStart: -30,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    name: "caravan",
    height: 158,
    color: "#ffffff",
    opacity: 0.07
  })), /*#__PURE__*/React.createElement("div", {
    className: "g-container",
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--text-on-dark)',
      fontSize: 'var(--text-h1)'
    }
  }, "Your child's first lesson is free."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: 'var(--text-body-lg)',
      marginBlockEnd: 22
    }
  }, "Bal aan bilowno \u2014 let's begin. Find out what they can do in an hour."), /*#__PURE__*/React.createElement(FreeLessonCTA, {
    variant: "dark",
    caption: "No card needed \xB7 1 full hour \xB7 With a verified teacher",
    onClick: onBook
  })));
}
function Footer({
  currency,
  setCurrency,
  locale,
  setLocale
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-page)',
      borderBlockStart: '1px solid var(--border-hairline)',
      paddingBlock: '56px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4,1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 24px/1 var(--font-core)',
      letterSpacing: '-.02em',
      color: 'var(--navy-deep)'
    }
  }, SDx.brand, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-star)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBlockStart: 12,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, "Live Somali, Arabic and Qur'aan lessons for diaspora families, with verified Somali teachers. Taariikh, gabay and maahmaah included. For shanta Soomaaliyeed."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 16,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    name: "camel",
    height: 44,
    color: "var(--navy-deep)",
    opacity: 0.28
  }))), SDx.footer.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-label",
    style: {
      color: 'var(--text-quiet)',
      marginBlockEnd: 12
    }
  }, col.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 9
    }
  }, col.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14.5,
      color: 'var(--ink-700)',
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 40,
      paddingBlockStart: 20,
      borderBlockStart: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "g-caption"
  }, "\xA9 2026 ", SDx.brand, ". Registered in [country], no. [X]."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LocaleSwitcher, {
    value: locale,
    onChange: setLocale
  }), /*#__PURE__*/React.createElement(CurrencySwitcher, {
    size: "sm",
    value: currency,
    onChange: setCurrency
  })))));
}
Object.assign(window, {
  AiBuddy,
  MonthlyReport,
  Parents,
  Faq,
  ClosingCta,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Header.jsx
try { (() => {
const {
  Button,
  FreeLessonCTA,
  CurrencySwitcher,
  LocaleSwitcher,
  Icon,
  Chip,
  VerifiedBadge,
  Motif
} = window.GaraadDesignSystem_b60642;
const S = window.GaraadSite;
function Header({
  scrolled,
  currency,
  setCurrency,
  locale,
  setLocale,
  onBook
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      insetBlockStart: 0,
      zIndex: 50,
      height: scrolled ? 64 : 80,
      display: 'flex',
      alignItems: 'center',
      background: scrolled ? 'rgba(246,249,252,.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBlockEnd: `1px solid ${scrolled ? 'var(--border-hairline)' : 'transparent'}`,
      transition: 'height var(--dur-slow) var(--ease-out), background-color var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      font: '700 24px/1 var(--font-core)',
      letterSpacing: '-.02em',
      color: 'var(--navy-deep)',
      textDecoration: 'none'
    }
  }, S.brand, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-star)'
    }
  }, ".")), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Main",
    style: {
      display: 'flex',
      gap: 4,
      marginInline: 'auto'
    }
  }, S.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      padding: '10px 12px',
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--ink-700)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement(LocaleSwitcher, {
    value: locale,
    onChange: setLocale
  }), /*#__PURE__*/React.createElement(CurrencySwitcher, {
    size: "sm",
    value: currency,
    onChange: setCurrency
  }), scrolled ? /*#__PURE__*/React.createElement(FreeLessonCTA, {
    variant: "header",
    label: "Book free lesson",
    onClick: onBook
  }) : /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    label: "Sign in"
  })));
}
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      paddingBlock: '56px 0',
      background: 'radial-gradient(60% 55% at 8% 0%, rgba(239,165,27,.12), transparent 70%), radial-gradient(60% 60% at 95% 90%, rgba(30,107,214,.12), transparent 70%), var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 48,
      alignItems: 'center',
      paddingBlockEnd: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--white)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-pill)',
      padding: '7px 14px',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--ink-700)',
      boxShadow: 'var(--shadow-rest)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15,
    color: "var(--blue-primary)"
  }), " Soo dhawoow \xB7 Live lessons in Somali, Arabic and Qur'aan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display)',
      lineHeight: 'var(--lh-display)',
      fontWeight: 800,
      marginBlock: '20px 18px',
      maxWidth: '18ch'
    }
  }, "Your child, speaking Somali with confidence."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--ink-700)',
      marginBlockEnd: 28
    }
  }, "Verified Somali teachers, live one-to-one lessons, and taariikh, gabay and maahmaah alongside the reading \u2014 so they grow up knowing the language and the dhaqan behind it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(FreeLessonCTA, {
    variant: "hero",
    onClick: onBook
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    label: "See packages and pricing"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBlockStart: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: `linear-gradient(150deg,#0C3A72,#${i % 2 ? '7A5206' : '082A55'})`,
      border: '2px solid var(--surface-page)',
      marginInlineStart: i ? -10 : 0
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "g-caption"
  }, "Verified Somali teachers across the UK, Europe and North America \u2014 for shanta Soomaaliyeed, wherever the family landed"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-card)',
      background: 'linear-gradient(135deg,#082A55 0%,#0C3A72 52%,#C4820D 100%)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 14,
      boxShadow: 'var(--shadow-rest)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetBlockEnd: 8,
      insetInlineEnd: -20,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    name: "caravan",
    height: 190,
    color: "#ffffff",
    opacity: 0.13
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'rgba(246,249,252,.78)',
      background: 'rgba(6,29,59,.5)',
      borderRadius: 6,
      padding: '5px 9px'
    }
  }, "Placeholder \u2014 child at a laptop mid-lesson")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetBlockEnd: 34,
      insetInlineStart: -34,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-hover)',
      padding: '14px 16px',
      width: 250
    }
  }, /*#__PURE__*/React.createElement(VerifiedBadge, {
    size: "sm",
    label: "Verified teacher"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-heading)',
      marginBlockStart: 8
    }
  }, "Next lesson today, 18:00"), /*#__PURE__*/React.createElement("div", {
    className: "g-caption"
  }, "Somali reading with Ustaad Yusuf")))), /*#__PURE__*/React.createElement(TrustBar, null));
}
function TrustBar() {
  const items = [['user-check', 'Every teacher ID-checked'], ['file-check', 'References taken'], ['globe', 'Background checked'], ['heart', 'Safeguarding trained'], ['eye', 'Observed trial lesson']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderBlockEnd: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    name: "weave",
    height: 10,
    color: "var(--gold-star)",
    opacity: 0.5
  })), /*#__PURE__*/React.createElement("div", {
    className: "g-container",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28,
      justifyContent: 'space-between',
      paddingBlock: 18
    }
  }, items.map(([icon, label]) => /*#__PURE__*/React.createElement("span", {
    key: label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14.5,
      color: 'var(--ink-700)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--teal-teacher)"
  }), " ", label))));
}
Object.assign(window, {
  Header,
  Hero,
  TrustBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  TrackCard,
  PricingCard,
  TeacherCard,
  StepTimeline,
  CurrencySwitcher,
  Button,
  FreeLessonCTA,
  Motif
} = window.GaraadDesignSystem_b60642;
const SD = window.GaraadSite;
function Section({
  children,
  tone = 'paper',
  id,
  style
}) {
  const bg = tone === 'white' ? 'var(--surface-page-alt)' : tone === 'navy' ? 'var(--surface-dark)' : 'var(--surface-page)';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      paddingBlock: 'var(--section-y)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-container"
  }, children));
}
function Heading({
  title,
  sub,
  tone = 'light',
  align = 'start'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockEnd: 40,
      textAlign: align,
      maxWidth: align === 'center' ? 720 : 'none',
      marginInline: align === 'center' ? 'auto' : 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      marginBlockStart: 12,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--ink-700)',
      marginInline: align === 'center' ? 'auto' : 0
    }
  }, sub));
}
function Teach({
  onBook
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "white",
    id: "teach"
  }, /*#__PURE__*/React.createElement(Heading, {
    title: "What we teach",
    sub: "Three tracks, equal weight \u2014 and dhaqan running through all of them. The free first lesson doubles as a friendly assessment."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24
    }
  }, SD.tracks.map(t => /*#__PURE__*/React.createElement(TrackCard, _extends({
    key: t.title
  }, t, {
    ctaLabel: `Book a free lesson in ${t.title.split(' ')[0]}`,
    onCta: () => onBook(t.title)
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBlockStart: 28,
      fontSize: 16,
      color: 'var(--ink-700)'
    }
  }, "Not sure where to start? The free first lesson doubles as a friendly assessment \u2014 the teacher will tell you honestly where your child is."));
}
function Dhaqan() {
  const m = SD.maahmaah;
  return /*#__PURE__*/React.createElement("section", {
    id: "dhaqan",
    style: {
      position: 'relative',
      background: 'radial-gradient(70% 90% at 18% 0%, rgba(239,165,27,.13), transparent 70%), var(--surface-page)',
      paddingBlock: 'var(--section-y)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetBlockStart: 0,
      insetInline: 0,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    name: "weave",
    height: 11,
    color: "var(--gold-star)",
    opacity: 0.42
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetBlockEnd: -6,
      insetInlineEnd: -40,
      lineHeight: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    name: "caravan",
    height: 168,
    color: "var(--navy-deep)",
    opacity: 0.07,
    flip: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "g-container",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 24,
      marginBlockEnd: 20
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    name: "aqal",
    height: 78,
    color: "var(--navy-deep)",
    lineColor: "var(--surface-page)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "g-label",
    style: {
      color: 'var(--gold-700)'
    }
  }, SD.somali.culture, " \xB7 Culture"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBlockStart: 10,
      maxWidth: '26ch'
    }
  }, "Not only the language. The whole inheritance."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--ink-700)',
      maxWidth: '62ch',
      marginBlockEnd: 40
    }
  }, "Every child on every track also learns where they come from. Not as an extra module \u2014 it is woven through the reading, the writing and the conversation, because that is how Somali has always been taught."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24
    }
  }, SD.dhaqan.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.so,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-rest)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, c.so), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-quiet)'
    }
  }, c.en)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 3,
      borderRadius: 2,
      background: 'var(--gold-star)',
      marginBlock: '14px 14px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--ink-700)'
    }
  }, c.body)))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: '40px 0 0',
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      borderInlineStart: '3px solid var(--gold-star)',
      paddingInlineStart: 22
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    name: "camel",
    height: 62,
    color: "var(--gold-700)",
    opacity: 0.9
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 27,
      lineHeight: 1.3,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, m.so), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginBlockStart: 8,
      fontSize: 16,
      color: 'var(--ink-700)'
    }
  }, m.en, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-quiet)'
    }
  }, "\u2014 maahmaah")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      marginBlockStart: 44,
      background: 'var(--surface-dark)',
      borderRadius: 'var(--radius-card)',
      padding: '38px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetBlockEnd: -12,
      insetInline: 0,
      display: 'flex',
      justifyContent: 'center',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    name: "caravan",
    height: 150,
    color: "#ffffff",
    opacity: 0.08
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: '-.01em',
      color: 'var(--text-on-dark)'
    }
  }, "Waxaan u nahay Shanta Soomaaliyeed."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBlockStart: 12,
      marginInline: 'auto',
      maxWidth: '58ch',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, "We are for shanta Soomaaliyeed \u2014 all five Somali lands, and every family that left them. Same language, same dhaqan, same teaching, wherever you landed.")))));
}
function HowItWorks() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "how"
  }, /*#__PURE__*/React.createElement(Heading, {
    title: "How it works"
  }), /*#__PURE__*/React.createElement(StepTimeline, {
    steps: SD.howItWorks,
    emphasisIndex: 2
  }));
}
function Pricing({
  currency,
  setCurrency,
  onBook
}) {
  const p = SD.prices;
  return /*#__PURE__*/React.createElement(Section, {
    tone: "white",
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      marginBlockEnd: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Simple packages. The first lesson is always free."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBlockStart: 12,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--ink-700)'
    }
  }, "Every package is 2 one-hour live sessions a week \u2014 about 8 hours of one-to-one teaching a month. Cancel any time.")), /*#__PURE__*/React.createElement(CurrencySwitcher, {
    value: currency,
    onChange: setCurrency
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    name: "One child",
    price: p.one[currency],
    unit: "per month",
    priceNote: "2 \xD7 1-hour sessions every week, for one child.",
    features: SD.includes,
    onCta: () => onBook()
  }), /*#__PURE__*/React.createElement(PricingCard, {
    featured: true,
    name: "Two children",
    price: p.two[currency],
    unit: "per child, per month",
    priceNote: `${p.twoTotal[currency]} a month for two children — each child gets their own 2 × 1-hour sessions a week.`,
    savings: p.saving[currency],
    features: ['Everything in One child', 'Siblings taught by the same teacher or different specialists', 'One invoice for the family', 'One monthly report per child'],
    onCta: () => onBook()
  }), /*#__PURE__*/React.createElement(PricingCard, {
    custom: true,
    name: "Three or more children",
    customLine: "A genuinely generous discount \u2014 tell us about your family and we'll price it.",
    features: ['Everything above', 'A dedicated family schedule', 'Flexible sibling timetabling', 'One point of contact'],
    ctaLabel: "Get your family price",
    onCta: () => onBook()
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 32,
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      fontSize: 14.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "First lesson free"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "No card charged until after your free session"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Cancel any time"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Prices shown in your currency")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--ink-700)'
    }
  }, "We publish what teachers earn. A fair share of every payment goes directly to your child's teacher. ", /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    label: "How we pay teachers"
  })), /*#__PURE__*/React.createElement("p", {
    className: "g-caption"
  }, "Not sure which to pick? Message us on WhatsApp and we'll talk it through.")));
}
function Teachers({
  onBook
}) {
  return /*#__PURE__*/React.createElement(Section, {
    id: "teachers"
  }, /*#__PURE__*/React.createElement(Heading, {
    title: "Meet the teachers",
    sub: "Photographs and names are placeholders until each teacher consents to being shown."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 20
    }
  }, SD.teachers.map(t => /*#__PURE__*/React.createElement(TeacherCard, _extends({
    key: t.name
  }, t, {
    onBook: () => onBook()
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBlockStart: 28,
      fontSize: 16,
      color: 'var(--ink-700)'
    }
  }, "We match your child to a teacher, and if it isn't right we re-match within 48 hours \u2014 at no cost, and your progress moves with you."));
}
function Safeguarding() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "navy",
    id: "safeguarding"
  }, /*#__PURE__*/React.createElement(Heading, {
    tone: "dark",
    title: "Parents are buying safety before they are buying Somali.",
    sub: "Here is exactly how we verify every teacher \u2014 published, not promised."
  }), /*#__PURE__*/React.createElement(StepTimeline, {
    tone: "dark",
    numbered: false,
    steps: SD.vetting
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 20,
      marginBlock: '44px 32px'
    }
  }, ['Your child never sees a price, a payment screen or an advert.', 'Report anything, one tap. A human reviews it within 24 hours.', 'The AI study buddy is supervised — you and the teacher see every message.'].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      background: 'var(--surface-dark-raised)',
      border: '1px solid var(--border-on-dark)',
      borderRadius: 'var(--radius-card)',
      padding: 20,
      fontSize: 15.5,
      lineHeight: 1.55,
      color: 'var(--text-on-dark)'
    }
  }, c))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onDark: true,
    label: "Read our full safeguarding standard"
  }));
}
Object.assign(window, {
  Section,
  Heading,
  Teach,
  Dhaqan,
  HowItWorks,
  Pricing,
  Teachers,
  Safeguarding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/site-data.js
try { (() => {
// Garaad marketing site — locked content. Prices live here, keyed by currency,
// never inline in a component. Strings would live in locales/{en,so,ar}.json in
// production; this kit ships English only.
window.GaraadSite = {
  brand: 'Garaad',
  currencies: {
    USD: '$',
    EUR: '€',
    GBP: '£'
  },
  prices: {
    one: {
      USD: '$80',
      EUR: '€70',
      GBP: '£60'
    },
    two: {
      USD: '$70',
      EUR: '€60',
      GBP: '£50'
    },
    twoTotal: {
      USD: '$140',
      EUR: '€120',
      GBP: '£100'
    },
    saving: {
      USD: 'Save $10 per child, every month.',
      EUR: 'Save €10 per child, every month.',
      GBP: 'Save £10 per child, every month.'
    }
  },
  nav: ['How it works', 'What we teach', 'Dhaqan', 'Teachers', 'Pricing', 'Safeguarding', 'FAQ'],
  // Somali words used in the interface. Always glossed in English on first use,
  // never as the only label on a control. See readme CONTENT FUNDAMENTALS.
  somali: {
    welcome: 'Soo dhawoow',
    culture: 'Dhaqan',
    history: 'Taariikh',
    poetry: 'Gabay',
    sayings: 'Maahmaah',
    five: 'Shanta Soomaaliyeed'
  },
  includes: ['Matched verified teacher', 'Live one-to-one video lessons', 'Homework set and marked by the teacher', 'Somali history, gabay and maahmaah woven into every term', 'AI study buddy for practice between lessons', 'A monthly progress report', 'Free re-match within 48 hours'],
  tracks: [{
    title: 'Somali language',
    accent: 'blue',
    icon: 'book-open',
    promise: 'Speaking, reading and writing Somali — from first words to full conversations.',
    bullets: ['Everyday conversation with family', 'Reading and writing the Somali alphabet', 'Sheekooyin, gabay and maahmaah — stories, poetry and sayings'],
    ages: 'Ages 5–15 · Complete beginners welcome'
  }, {
    title: 'Arabic',
    accent: 'blue',
    icon: 'file-text',
    promise: 'Modern Standard Arabic, taught right-to-left from day one.',
    bullets: ['The Arabic alphabet and letter forms', 'Reading fluency and vocabulary', 'Grammar foundations that support Qur’aan study'],
    ages: 'Ages 6–15 · Beginner to intermediate'
  }, {
    title: "Qur'aan",
    accent: 'gold',
    icon: 'star',
    promise: 'Recitation, tajwiid and memorisation with a qualified teacher.',
    bullets: ['Correct recitation and tajwiid rules', 'Memorisation, tracked surah by surah', 'Meaning and reflection, age-appropriate'],
    ages: 'Ages 5–15 · Assessed only by a human teacher, never by AI'
  }],
  dhaqan: [{
    so: 'Taariikh',
    en: 'History',
    body: 'Where the family comes from, told at a level a child can hold: the sultanates, the poets, the pastoral life, and the journey that brought their parents here.'
  }, {
    so: 'Gabay',
    en: 'Poetry',
    body: 'Somalis are called a nation of poets. Children learn to hear the metre, memorise short verses, and recite them out loud without embarrassment.'
  }, {
    so: 'Maahmaah',
    en: 'Sayings',
    body: 'The proverbs that carry how Somalis think. A child who knows fifty maahmaah understands far more than fifty sentences.'
  }],
  maahmaah: {
    so: "Aqoon la'aan waa iftiin la'aan.",
    en: 'To be without knowledge is to be without light.'
  },
  howItWorks: [{
    title: 'Tell us about your child',
    body: 'Two minutes, and first names only.'
  }, {
    title: 'We match you with a verified teacher',
    body: 'Within 24 hours.'
  }, {
    title: 'Free 1-hour first lesson',
    body: 'A real lesson with a real teacher. No charge, no card.'
  }, {
    title: 'Choose a package and keep going',
    body: 'Or not. Nothing is charged either way.'
  }],
  vetting: [{
    title: 'Identity verified',
    body: 'Government ID and right to work checked.',
    icon: 'user-check'
  }, {
    title: 'Two references taken',
    body: 'From previous teaching or community roles.',
    icon: 'file-check'
  }, {
    title: 'Background check',
    body: 'Where available in the teacher’s country.',
    icon: 'globe'
  }, {
    title: 'Observed trial lesson',
    body: 'A senior teacher sits in and scores it.',
    icon: 'eye'
  }, {
    title: 'Safeguarding training',
    body: 'Completed, and a code of conduct signed.',
    icon: 'heart'
  }],
  teachers: [{
    name: 'Ustaad Yusuf A.',
    tracks: ['Somali', "Qur'aan"],
    years: '9 years',
    languages: 'Somali, Arabic, English',
    timezone: 'GMT+3',
    quote: 'I start with the words a child already hears at home.'
  }, {
    name: 'Macallin Farhia',
    tracks: ['Somali', 'Arabic'],
    years: '6 years',
    languages: 'Somali, English',
    timezone: 'GMT+1',
    quote: 'Reading comes faster once the sounds feel familiar.'
  }, {
    name: 'Sheekh Abdirahman',
    tracks: ["Qur'aan"],
    years: '12 years',
    languages: 'Somali, Arabic',
    timezone: 'GMT+3',
    quote: 'Slow, correct recitation first. Speed can wait.'
  }, {
    name: 'Macallin Hodan',
    tracks: ['Somali'],
    years: '4 years',
    languages: 'Somali, English, Swedish',
    timezone: 'GMT+2',
    state: 'new',
    quote: 'Children talk more when the lesson feels like home.'
  }],
  faq: [{
    q: 'Is the first lesson really free?',
    a: 'Yes — a full hour with a verified teacher, at no cost, with no card needed to book it. If it isn’t right for your child, that’s the end of it.'
  }, {
    q: 'What happens after the free lesson?',
    a: 'We’ll ask what you thought. If you want to carry on, you pick a package and set a weekly time. If not, nothing is charged.'
  }, {
    q: 'How long is each lesson, and how many do we get?',
    a: 'One hour, twice a week — around eight hours of one-to-one teaching a month.'
  }, {
    q: 'What if my child doesn’t get on with their teacher?',
    a: 'Tell us and we’ll re-match within 48 hours, at no cost. Their progress moves with them.'
  }, {
    q: 'Do you teach complete beginners?',
    a: 'Yes — many of our children start with no Somali at all.'
  }, {
    q: 'What time zones do you cover?',
    a: 'Our teachers cover UK, European and North American evenings and weekends. Tell us when suits you and we’ll match accordingly.'
  }, {
    q: 'Can I pause or cancel?',
    a: 'Yes, any time, from your account. No notice period, no cancellation fee.'
  }, {
    q: 'How do you keep my child safe online?',
    a: 'Every teacher is ID-checked, referenced, background-checked where available, observed teaching, and safeguarding-trained. You hold the account, your child never has their own login, and every AI conversation is visible to you.'
  }, {
    q: 'What do we need to join a lesson?',
    a: 'A phone, tablet or laptop with a camera, and an internet connection. We send a link — there’s nothing to install.'
  }],
  footer: [{
    h: 'Learn',
    items: ['Somali', 'Arabic', "Qur'aan", 'Free first lesson', 'Pricing']
  }, {
    h: 'Trust',
    items: ['How we verify teachers', 'Safeguarding', 'Our AI rules', 'Privacy notice']
  }, {
    h: 'Company',
    items: ['About', 'Teach with us', 'Contact', 'WhatsApp support']
  }, {
    h: 'Family',
    items: ['Sign in', 'Help centre', 'Refund policy', 'Terms']
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/site-data.js", error: String((e && e.message) || e) }); }

__ds_ns.Motif = __ds_scope.Motif;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.TeacherCard = __ds_scope.TeacherCard;

__ds_ns.TrackCard = __ds_scope.TrackCard;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.StepTimeline = __ds_scope.StepTimeline;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.VerifiedBadge = __ds_scope.VerifiedBadge;

__ds_ns.FreeLessonCTA = __ds_scope.FreeLessonCTA;

__ds_ns.StickyMobileCTA = __ds_scope.StickyMobileCTA;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.BookingModal = __ds_scope.BookingModal;

__ds_ns.CurrencySwitcher = __ds_scope.CurrencySwitcher;

__ds_ns.LocaleSwitcher = __ds_scope.LocaleSwitcher;

})();
