import { motion } from "motion/react";

export function Slide5() {
  const summaries = [
    {
      color: "blue",
      bg: "bg-blue-50",
      border: "border-blue-200",
      dot: "bg-blue-600",
      text: "text-blue-600",
      content: (
        <>
          <span className="font-bold text-blue-600">통합 플랫폼 기반</span>으로 데이터 활용도{" "}
          <span className="font-extrabold">3배 향상</span> (30% → 90%+)
        </>
      ),
    },
    {
      color: "green",
      bg: "bg-green-50",
      border: "border-green-200",
      dot: "bg-green-600",
      text: "text-green-600",
      content: (
        <>
          평균 복구 시간을 <span className="font-extrabold">4시간에서 15분으로 단축</span> (16배 개선)
        </>
      ),
    },
    {
      color: "purple",
      bg: "bg-purple-50",
      border: "border-purple-200",
      dot: "bg-purple-600",
      text: "text-purple-600",
      content: (
        <>
          AI 기반 자동 해결로 <span className="font-extrabold">현장 출동 85% 감소</span> (120건 → 18건)
        </>
      ),
    },
    {
      color: "cyan",
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      dot: "bg-cyan-600",
      text: "text-cyan-600",
      content: (
        <>
          <span className="font-bold text-cyan-600">운영비 약 40% 절감</span> 및 지속적 최적화
        </>
      ),
    },
  ];

  return (
    <div className="min-h-[100dvh] min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col overflow-y-auto bg-white pt-8 sm:pt-16 pb-16 sm:pb-28 px-2 sm:pl-6 sm:pr-16 md:pl-12 md:pr-[4.5rem]">
      <div className="max-w-4xl w-full min-w-0 py-2 sm:py-8 mx-auto flex-1 flex flex-col items-center justify-center">
        <p className="text-blue-600/80 text-xs font-bold tracking-widest uppercase text-center mb-1 sm:mb-2">
          04 · 핵심 성과 요약
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent break-words"
        >
          핵심 성과 요약
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg sm:text-xl text-slate-600 mb-4 sm:mb-10 font-medium break-words px-1"
        >
          5가지 KPI로 검증된 실질적 성과
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full min-w-0 bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-10 overflow-hidden"
        >
          <div className="space-y-2 sm:space-y-4">
            {summaries.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`flex items-start gap-3 rounded-lg p-3 sm:p-5 border ${item.bg} ${item.border}`}
              >
                <div className={`w-2 h-2 rounded-full ${item.dot} mt-1.5 flex-shrink-0`} />
                <p className="leading-relaxed font-medium flex-1 min-w-0 break-words text-slate-700">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center pt-4 sm:pt-10"
        >
          <p className="text-sm text-slate-500 font-medium">데이터 통합 솔루션 | AWS 기반 | Terraform 인프라</p>
        </motion.div>
      </div>
    </div>
  );
}
