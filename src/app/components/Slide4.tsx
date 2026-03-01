import { motion } from "motion/react";
import { TrendingUp, Clock, Target, MapPin, DollarSign } from "lucide-react";
import { KPIChart, CostSavings } from "./KPIChart";

const KPI_STYLES: Record<string, { border: string; bg: string; text: string; note: string }> = {
  blue: { border: "border-blue-200", bg: "bg-blue-100", text: "text-blue-600", note: "bg-blue-50 border-blue-200" },
  green: { border: "border-green-200", bg: "bg-green-100", text: "text-green-600", note: "bg-green-50 border-green-200" },
  purple: { border: "border-purple-200", bg: "bg-purple-100", text: "text-purple-600", note: "bg-purple-50 border-purple-200" },
  orange: { border: "border-orange-200", bg: "bg-orange-100", text: "text-orange-600", note: "bg-orange-50 border-orange-200" },
  cyan: { border: "border-cyan-200", bg: "bg-cyan-100", text: "text-cyan-600", note: "bg-cyan-50 border-cyan-200" },
};

export function Slide4() {
  const kpis = [
    {
      metric: "데이터 활용도",
      before: "30%",
      after: "90%+",
      note: "통합 플랫폼 기반",
      icon: TrendingUp,
      color: "blue",
    },
    {
      metric: "평균 복구 시간",
      before: "4시간",
      after: "15분",
      note: "실시간 모니터링·자동 대응",
      icon: Clock,
      color: "green",
    },
    {
      metric: "알람 정확도",
      before: "30%",
      after: "98%",
      note: "룰 엔진·오탐 감소",
      icon: Target,
      color: "purple",
    },
    {
      metric: "현장 출동",
      before: "월 120건",
      after: "18건",
      note: "원격 제어·OTA, 자동 해결률 85%",
      icon: MapPin,
      color: "orange",
    },
    {
      metric: "운영비",
      before: "—",
      after: "약 40% 절감",
      note: "자동화·저장 전략 최적화",
      icon: DollarSign,
      color: "cyan",
    },
  ];

  return (
    <div className="min-h-[100dvh] min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col overflow-y-auto bg-gradient-to-br from-white via-blue-50 to-slate-50 pt-8 sm:pt-16 pb-16 sm:pb-28 px-2 sm:pl-6 sm:pr-16 md:pl-12 md:pr-[4.5rem]">
      <div className="max-w-7xl w-full min-w-0 py-2 sm:py-8 mx-auto flex-1 flex flex-col items-center justify-start">
        <p className="text-blue-600/80 text-xs font-bold tracking-widest uppercase text-center mb-1 sm:mb-2">
          03 · KPI 성과
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent break-words"
        >
          한 번 통합, 안정·자동화·확장
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg sm:text-2xl text-slate-700 mb-1 sm:mb-3 font-semibold break-words px-1"
        >
          분산된 데이터를 하나의 플랫폼으로 모아, 장애는 줄이고, 데이터와 AI 활용은 극대화합니다
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-600 mb-3 sm:mb-8 font-medium text-sm sm:text-base"
        >
          5가지 핵심 KPI와 운영비 절감 효과
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 mb-3 sm:mb-8 min-w-0 overflow-hidden w-full">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={kpi.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`bg-white border-2 rounded-2xl p-4 sm:p-6 hover:scale-[1.03] transition-all min-w-0 overflow-hidden ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                } ${KPI_STYLES[kpi.color].border}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${KPI_STYLES[kpi.color].bg}`}>
                    <Icon className={`w-5 h-5 ${KPI_STYLES[kpi.color].text}`} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-700">{kpi.metric}</h3>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-slate-500 font-semibold">Before</span>
                    <span className="text-lg text-slate-700 font-medium">{kpi.before}</span>
                  </div>
                  <div className="relative">
                    <div className="h-px bg-slate-200" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-slate-400 text-xs">→</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-slate-500 font-semibold">After</span>
                    <span className={`text-xl font-bold ${KPI_STYLES[kpi.color].text}`}>{kpi.after}</span>
                  </div>
                </div>

                <div className={`rounded-lg px-3 py-2 border ${KPI_STYLES[kpi.color].note}`}>
                  <p className="text-xs text-slate-600 italic leading-relaxed font-medium">{kpi.note}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* KPI 차트 + 운영비 절감 - 동일 높이/스타일 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 items-stretch min-w-0 overflow-hidden w-full"
        >
          <KPIChart />
          <CostSavings />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center pt-3 sm:pt-6"
        >
          <p className="text-sm text-slate-500 font-medium">
            데이터 통합 솔루션 | AWS 기반 | Terraform 인프라
          </p>
        </motion.div>
      </div>
    </div>
  );
}