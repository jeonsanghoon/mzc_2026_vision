const STEP_COLORS = [
  { stroke: "border-blue-500", bg: "bg-blue-50", text: "text-blue-800", badgeBg: "#2563eb", line: "#2563eb" },
  { stroke: "border-cyan-500", bg: "bg-cyan-50", text: "text-cyan-800", badgeBg: "#0891b2", line: "#0891b2" },
  { stroke: "border-violet-500", bg: "bg-violet-50", text: "text-violet-800", badgeBg: "#7c3aed", line: "#7c3aed" },
  { stroke: "border-pink-500", bg: "bg-pink-50", text: "text-pink-800", badgeBg: "#db2777", line: "#db2777" },
];

const STEPS = [
  { num: "1", name: "수집", sub: "전방 카메라", label: "전방 카메라", icon: "📡", part: "전방 카메라" },
  { num: "2", name: "통합", sub: "구동 모터", label: "구동 모터", icon: "⚙️", part: "구동 모터" },
  { num: "3", name: "화면", sub: "대시보드·분석", label: "모니터", icon: "📊", part: "모니터" },
  { num: "4", name: "AI", sub: "자율주행·제어", label: "핸들", icon: "🤖", part: "핸들" },
];

/**
 * Model Y Juniper 후측면 윗방향 뷰 (날렵한 라인 드로잉)
 */
const DIAGRAM_IMAGE = "/car-model-y-juniper-rear-quarter-top.png";

const ARROW_LABELS = [
  { label: "① 전방 카메라", left: "12%", top: "22%", lineTo: { left: "32%", top: "30%" } },   // 전방부
  { label: "② 구동 모터", left: "15%", top: "48%", lineTo: { left: "35%", top: "48%" } },   // 프론트/구동계
  { label: "③ 모니터", left: "78%", top: "18%", lineTo: { left: "55%", top: "38%" } },     // 실내 대시보드
  { label: "④ 핸들", left: "90%", top: "42%", lineTo: { left: "60%", top: "52%" } },        // 운전석 핸들
];

/** 화살표용 은은한 색 (배경과 어울리게) */
const ARROW_STROKE = ["#64748b", "#0e7490", "#6d28d9", "#be185d"]; // slate-500, cyan-600, violet-600, pink-600

/**
 * Model Y Juniper 후측면 윗방향. 이미지 변경 시 ARROW_LABELS 좌표 재조정 가능.
 */
export function CarDiagram() {
  return (
    <div className="w-full min-w-0 p-2 sm:p-6 bg-transparent">
      <p className="text-center text-slate-600 text-xs sm:text-sm font-semibold mb-2 sm:mb-4">
        플랫폼 = 한 대의 자동차 · ①전방 카메라 ②구동 모터 ③모니터 ④핸들
      </p>

      {/* 차량 영역: 테두리 없이 배경과 동일하게 */}
      <div className="relative w-full max-w-2xl mx-auto mb-2 sm:mb-5 rounded-xl overflow-visible min-w-0">
        <div className="relative w-full">
          <img
            src={DIAGRAM_IMAGE}
            alt="전방 카메라·구동 모터·모니터·핸들 매핑"
            className="w-full h-auto block object-contain grayscale contrast-110"
          />
          {/* 화살표: 얇은 점선 + 작은 삼각형, 은은한 색 */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              {ARROW_STROKE.map((stroke, i) => (
                <marker key={i} id={`arr-${i}`} markerWidth="5" markerHeight="4" refX="4" refY="2" orient="auto">
                  <polygon points="0 0, 5 2, 0 4" fill={stroke} opacity="0.9" />
                </marker>
              ))}
            </defs>
            {ARROW_LABELS.map((item, i) => {
              const x1 = parseFloat(item.left);
              const y1 = parseFloat(item.top);
              const x2 = parseFloat(item.lineTo.left);
              const y2 = parseFloat(item.lineTo.top);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={ARROW_STROKE[i]}
                  strokeWidth="0.8"
                  strokeDasharray="4 3"
                  strokeOpacity="0.85"
                  fill="none"
                  strokeLinecap="round"
                  markerEnd={`url(#arr-${i})`}
                />
              );
            })}
          </svg>
          {/* 라벨: 이전처럼 카드 형태 */}
          {ARROW_LABELS.map((item, i) => (
            <span
              key={i}
              className="absolute inline-flex items-center font-bold text-xs sm:text-sm whitespace-nowrap py-1.5 px-2.5 rounded-lg border border-slate-200/90 bg-transparent backdrop-blur-sm"
              style={{
                left: item.left,
                top: item.top,
                transform: "translate(-50%, -50%)",
                color: ARROW_STROKE[i],
                borderLeftWidth: "4px",
                borderLeftColor: ARROW_STROKE[i],
              }}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* 한 줄 매핑 */}
      <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-2 mb-2 sm:mb-5 text-xs sm:text-sm text-slate-600">
        {STEPS.map((step, i) => (
          <span key={i} className="inline-flex items-center gap-1.5">
            <span
              className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white font-bold text-xs"
              style={{ backgroundColor: STEP_COLORS[i].badgeBg }}
            >
              {step.num}
            </span>
            <span className="font-medium text-slate-700">{step.part}</span>
            <span className="text-slate-400">→</span>
            <span className={STEP_COLORS[i].text}>{step.name}</span>
          </span>
        ))}
      </div>

      {/* 하단: 4단계 카드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5 min-w-0 overflow-hidden">
        {STEPS.map((step, i) => (
          <div
            key={i}
            className={`rounded-xl border-2 ${STEP_COLORS[i].stroke} ${STEP_COLORS[i].bg} p-2 sm:p-5 flex flex-col items-center justify-center min-h-[80px] sm:min-h-[110px]`}
          >
            <span className="text-2xl sm:text-3xl mb-2" aria-hidden>{step.icon}</span>
            <span className={`font-extrabold text-sm sm:text-base ${STEP_COLORS[i].text} text-center`}>
              {step.num} {step.name}
            </span>
            <span className="text-slate-500 text-xs sm:text-sm mt-0.5 text-center">({step.sub})</span>
            <span className="text-slate-400 text-xs mt-1 text-center">{step.label}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-400 text-xs mt-2 sm:mt-4">수집 → 통합 → 화면 → AI · 한 플랫폼에서 seamless</p>
    </div>
  );
}
