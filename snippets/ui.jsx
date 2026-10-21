/*
 * Kinetic documentation components.
 *
 * These draw small, static illustrations that mirror the real app — status
 * pills, keyboard keys, a board card, the KPI strip — so a reader can match
 * what they see on screen to what this guide describes. Every value shown is
 * an example, never real shop data. Styles live in /style.css (.kx-*).
 */

const TONES = {
  needs: "Needs us",
  waiting: "Waiting",
  ontrack: "On track",
  late: "Late",
};

/** A status pill: neutral badge with a colored dot for the meaning tone. */
export const Pill = ({ tone = "needs", children }) => (
  <span className="kx-pill" data-tone={tone}>
    <span aria-hidden="true" className="kx-dot" />
    {children}
  </span>
);

/** The four meaning tones, side by side, with their plain-language names. */
export const ToneLegend = () => (
  <div className="kx-legend">
    {Object.keys(TONES).map((tone) => (
      <span className="kx-legend-item" key={tone}>
        <Pill tone={tone}>{TONES[tone]}</Pill>
      </span>
    ))}
  </div>
);

/** One keyboard key. Use several in a row for a shortcut. */
export const Key = ({ children }) => <kbd className="kx-key">{children}</kbd>;

/** A neutral outline badge, like the repair order number or role badges. */
export const Tag = ({ children }) => (
  <span className="kx-tag">{children}</span>
);

/** A small numbered marker that ties an illustration to a numbered list. */
export const Mark = ({ n }) => (
  <span aria-label={"Callout " + n} className="kx-mark">
    {n}
  </span>
);

const ScanIcon = ({ done }) => (
  <svg
    aria-hidden="true"
    className="kx-icon"
    data-state={done ? "done" : "open"}
    fill="none"
    height="14"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 16 16"
    width="14"
  >
    <path d="M2 5V3.5A1.5 1.5 0 0 1 3.5 2H5M11 2h1.5A1.5 1.5 0 0 1 14 3.5V5M14 11v1.5a1.5 1.5 0 0 1-1.5 1.5H11M5 14H3.5A1.5 1.5 0 0 1 2 12.5V11" />
    <path d="M2 8h12" />
  </svg>
);

const WarnIcon = () => (
  <svg
    aria-hidden="true"
    className="kx-icon"
    data-state="warn"
    fill="none"
    height="14"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 16 16"
    width="14"
  >
    <path d="M5.2 1.8h5.6L14.2 5.2v5.6l-3.4 3.4H5.2L1.8 10.8V5.2z" />
    <path d="M8 5v3.5M8 11h.01" />
  </svg>
);

/**
 * An example card from the Repairs board. Numbered marks match the numbered
 * list that follows it on the page.
 */
export const BoardCardExample = () => (
  <div className="kx-card">
    <div className="kx-card-row kx-between">
      <span className="kx-mono kx-muted">
        <Mark n="1" /> 24-1087
        <span className="kx-gap" />
        <ScanIcon done />
        <Mark n="2" />
      </span>
    </div>
    <div className="kx-card-row kx-strong">
      <span className="kx-avatar">JR</span>
      Jordan Rivera
      <Mark n="3" />
    </div>
    <div className="kx-card-row kx-muted">
      <span className="kx-avatar kx-avatar-sq">▲</span>
      2021 Subaru Outback
      <Mark n="4" />
    </div>
    <div className="kx-card-row kx-muted">
      <span className="kx-lineicon">▢</span> Example Insurance Co.
      <Mark n="5" />
    </div>
    <div className="kx-card-row kx-muted">
      <span className="kx-lineicon">◷</span> 12 (3)
      <Mark n="6" />
    </div>
    <div className="kx-card-row kx-muted">
      <span className="kx-lineicon">$</span> $4,200.00 (–$500.00)
      <Mark n="7" />
    </div>
    <div className="kx-card-foot">
      <span className="kx-muted">
        <span className="kx-avatar kx-avatar-sm">AL</span> Alex Lee
        <Mark n="8" />
      </span>
      <span className="kx-warn">
        <WarnIcon />
        <Mark n="9" />
      </span>
    </div>
  </div>
);

/** An example KPI strip, like the one above the Repairs board. */
export const KpiStripExample = () => (
  <div className="kx-kpis">
    <div className="kx-kpi">
      <span className="kx-muted">In Yesterday</span>
      <span className="kx-kpi-value">
        5 <span className="kx-delta kx-bad">▼ -1</span>
      </span>
    </div>
    <div className="kx-kpi">
      <span className="kx-muted">Out Yesterday</span>
      <span className="kx-kpi-value">
        7 <span className="kx-delta kx-good">▲ +1</span>
      </span>
    </div>
    <div className="kx-kpi">
      <span className="kx-muted">Onsite</span>
      <span className="kx-kpi-value">
        98 <span className="kx-delta kx-bad">▼ -9</span>
      </span>
    </div>
    <div className="kx-kpi">
      <span className="kx-muted">Active Repairs</span>
      <span className="kx-kpi-value">91</span>
    </div>
  </div>
);

/** The four-step outcome likelihood meter, drawn at a given level (1 to 4). */
export const LikelihoodMeter = ({ level = 2 }) => (
  <span className="kx-meter" data-level={level}>
    {[1, 2, 3, 4].map((n) => (
      <span className="kx-seg" data-on={n <= level ? "yes" : "no"} key={n} />
    ))}
    <span className="kx-meter-label">{level} of 4</span>
  </span>
);

/** A status rail: segments fill left to right up to the current status. */
export const StatusRail = ({ current = 3, total = 8, late = false }) => (
  <span className="kx-rail">
    {Array.from({ length: total }).map((_, i) => (
      <span
        className="kx-rail-seg"
        data-state={
          i < current - 1 ? "done" : i === current - 1 ? (late ? "late" : "now") : "todo"
        }
        key={i}
      />
    ))}
  </span>
);
