import { motion } from "motion/react";

export function KPIChart() {
  const metrics = [
    { label: "데이터 활용도", before: 30, after: 90, unit: "%", color: "#3b82f6", bgColor: "#eff6ff" },
    { label: "복구 시간", before: 240, after: 15, unit: "분", color: "#10b981", bgColor: "#f0fdf4", inverse: true },
    { label: "알람 정확도", before: 30, after: 98, unit: "%", color: "#8b5cf6", bgColor: "#faf5ff" },
    { label: "현장 출동", before: 120, after: 18, unit: "건", color: "#f97316", bgColor: "#fff7ed", inverse: true },
  ];

  return (
    <div className="w-full min-w-0 flex flex-col bg-white rounded-2xl border-2 border-slate-200 p-3 sm:p-6 md:p-8 overflow-hidden h-full">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-6 text-center">KPI 성과 비교</h3>
      
      <div className="space-y-5 sm:space-y-6">
        {metrics.map((metric, index) => {
          const beforePercent = metric.inverse 
            ? (metric.before / 250) * 100 
            : (metric.before / 100) * 100;
          const afterPercent = metric.inverse
            ? (metric.after / 250) * 100
            : (metric.after / 100) * 100;

          return (
            <div key={metric.label} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-700">{metric.label}</h4>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-500">
                    Before: <span className="text-slate-700 font-semibold">{metric.before}{metric.unit}</span>
                  </span>
                  <span className="text-slate-400">→</span>
                  <span style={{ color: metric.color }} className="font-bold">
                    After: {metric.after}{metric.unit}
                  </span>
                </div>
              </div>

              {/* 라벨은 막대 밖 상단에만 표시(이미 있음). 막대 안 텍스트 제거로 겹침 방지 */}
              <div className="relative h-12 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 pr-16">
                {/* Before bar - 텍스트 없이 막대만 */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${beforePercent}%` }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-5 bg-slate-300 rounded-l-md"
                  style={{ marginTop: "2px" }}
                />
                {/* After bar - 텍스트 없이 막대만 */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${afterPercent}%` }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-5 rounded-l-md"
                  style={{ backgroundColor: metric.color, marginBottom: "2px" }}
                />
                {/* 개선률 배지 - 막대 바깥 오른쪽에 고정 */}
                {!metric.inverse && metric.after > metric.before && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-green-50 border border-green-500 rounded-full px-2.5 py-0.5 text-xs text-green-700 font-bold whitespace-nowrap"
                  >
                    ↑ {Math.round(((metric.after - metric.before) / metric.before) * 100)}%
                  </motion.div>
                )}
                {metric.inverse && metric.after < metric.before && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-green-50 border border-green-500 rounded-full px-2.5 py-0.5 text-xs text-green-700 font-bold whitespace-nowrap"
                  >
                    ↓ {Math.round(((metric.before - metric.after) / metric.before) * 100)}%
                  </motion.div>
                )}
              </div>
              {/* Before / After 구분 라벨 - 막대 아래 한 줄로 배치 (겹침 없음) */}
              <div className="flex justify-between text-xs text-slate-500 mt-1 px-0.5">
                <span>개선 전</span>
                <span>개선 후</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const COST_COLOR = "#06b6d4"; // cyan-500

/** 운영비 절감 효과 (KPIChart와 동일 스타일/높이) */
export function CostSavings() {
  const beforePercent = 100;
  const afterPercent = 60;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      className="w-full min-w-0 flex flex-col bg-white rounded-2xl border-2 border-slate-200 p-3 sm:p-6 md:p-8 overflow-hidden h-full"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-6 text-center">운영비 절감 효과</h3>

      <div className="space-y-5 sm:space-y-6 flex-1">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-slate-700">운영비</h4>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-slate-500">
                Before: <span className="text-slate-700 font-semibold">100%</span>
              </span>
              <span className="text-slate-400">→</span>
              <span style={{ color: COST_COLOR }} className="font-bold">
                After: 60%
              </span>
            </div>
          </div>

          <div className="relative h-12 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 pr-16">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${beforePercent}%` }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="absolute top-0 left-0 h-5 bg-slate-300 rounded-l-md"
              style={{ marginTop: "2px" }}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${afterPercent}%` }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              className="absolute bottom-0 left-0 h-5 rounded-l-md"
              style={{ backgroundColor: COST_COLOR, marginBottom: "2px" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-green-50 border border-green-500 rounded-full px-2.5 py-0.5 text-xs text-green-700 font-bold whitespace-nowrap"
            >
              ↓ 40%
            </motion.div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-1 px-0.5">
            <span>개선 전</span>
            <span>개선 후</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          className="flex items-center justify-center gap-3 rounded-xl p-4 border-2 border-cyan-200 bg-cyan-50 mt-4"
        >
          <span className="text-2xl">💰</span>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-cyan-600">-40% 비용 절감</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium">자동화·저장 전략 최적화</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}