import { motion } from "motion/react";
import { Database, Cpu, Monitor, Brain } from "lucide-react";

const AREA_STYLES: Record<string, { border: string; bg: string; text: string; pill: string; pillBorder: string }> = {
  blue: { border: "border-blue-200", bg: "bg-blue-100", text: "text-blue-600", pill: "bg-blue-100 text-blue-700", pillBorder: "border-blue-300" },
  cyan: { border: "border-cyan-200", bg: "bg-cyan-100", text: "text-cyan-600", pill: "bg-cyan-100 text-cyan-700", pillBorder: "border-cyan-300" },
  purple: { border: "border-purple-200", bg: "bg-purple-100", text: "text-purple-600", pill: "bg-purple-100 text-purple-700", pillBorder: "border-purple-300" },
  pink: { border: "border-pink-200", bg: "bg-pink-100", text: "text-pink-600", pill: "bg-pink-100 text-pink-700", pillBorder: "border-pink-300" },
};

export function Slide3() {
  const areas = [
    {
      num: "1",
      title: "수집",
      subtitle: "다채널 수집(실시간·배치) → 데이터 레이크",
      details: [
        "프로토콜: TCP, MQTT, REST API, gRPC, WebSocket",
        "수집 형태: 실시간, 배치(이전 데이터·실시간 데이터)",
        "형식: Hex, JSON, CSV, XML, Parquet, 로그 등",
        "원천: IoT 센서, RDBMS, NoSQL, 파일",
      ],
      icon: Database,
      color: "blue",
      keywords: ["다채널", "YAML", "Hot/Warm/Cold"],
    },
    {
      num: "2",
      title: "통합",
      subtitle: "YAML/스펙 기반 변환·표준화, 원시·분석·알림용 데이터 적재",
      details: [
        "제품별 YAML 스펙으로 변환·표준화",
        "Hot·Warm·Cold 계층 저장",
        "원시 데이터 수집 후 분석·집계·알림용 데이터 생성·적재",
      ],
      icon: Cpu,
      color: "cyan",
      keywords: ["API 자동화", "배치 파이프라인", "분석·알림 데이터"],
    },
    {
      num: "3",
      title: "화면",
      subtitle: "배치로 분석·알림 데이터 생성·갱신 후 대시보드에 연동·시각화",
      details: [
        "배치를 통해 분석·알림 데이터 생성·갱신 후 대시보드에 자동 반영",
        "모니터링·연구분석 대시보드에서 시각화, 고객·역할별 맞춤 화면",
        "템플릿 기반 구성으로 화면 추가·변경 용이",
      ],
      icon: Monitor,
      color: "purple",
      keywords: ["배치 분석", "자동화 구성", "분석 시각화"],
    },
    {
      num: "4",
      title: "AI",
      subtitle: "알람 자동 진단 → 원격 제어·FoTA 85% 자동 해결",
      details: [
        "룰 엔진·이상탐지·예측",
        "불가 시 기사 출동, 지속 개선",
      ],
      icon: Brain,
      color: "pink",
      keywords: ["85% 자동", "FoTA", "예측"],
    },
  ];

  return (
    <div className="min-h-[100dvh] min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col overflow-y-auto bg-white pt-8 sm:pt-16 pb-16 sm:pb-28 px-2 sm:pl-6 sm:pr-16 md:pl-12 md:pr-[4.5rem]">
      <div className="max-w-7xl w-full min-w-0 py-2 sm:py-8 mx-auto flex-1 flex flex-col items-center justify-start">
        <p className="text-blue-600/80 text-xs font-bold tracking-widest uppercase text-center mb-1 sm:mb-2">
          02 · 플랫폼 구성
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent break-words"
        >
          수집·통합·화면·AI, 각 영역의 역할
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-slate-600 mb-3 sm:mb-10 font-medium text-sm sm:text-base break-words px-1"
        >
          수집·통합·화면·AI, 한 플랫폼에서 seamless
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.num}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className={`bg-white border-2 rounded-2xl p-4 sm:p-6 transition-all hover:scale-[1.02] ${AREA_STYLES[area.color].border}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg flex-shrink-0 ${AREA_STYLES[area.color].bg}`}>
                    <Icon className={`w-8 h-8 ${AREA_STYLES[area.color].text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`text-2xl font-bold ${AREA_STYLES[area.color].text}`}>{area.num}</span>
                      <span className="text-xl sm:text-2xl font-bold text-slate-700">{area.title}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                      {area.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4 pl-2">
                  {area.details.map((detail, idx) => {
                    const hasLabel = typeof detail === "string" && detail.includes(":");
                    const [label, ...rest] = hasLabel ? detail.split(":") : [null, detail];
                    const content = hasLabel ? rest.join(":").trim() : detail;
                    return (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-slate-400 mt-0.5 flex-shrink-0">•</span>
                        {hasLabel && label ? (
                          <span className="leading-relaxed flex-1 min-w-0">
                            <span className={`font-bold ${AREA_STYLES[area.color].text} mr-1.5`}>{label}:</span>
                            <span className="text-slate-600">{content}</span>
                          </span>
                        ) : (
                          <span className="leading-relaxed text-slate-600 flex-1 min-w-0">{content}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                  {area.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className={`px-3 py-1 rounded-full text-xs border font-semibold ${AREA_STYLES[area.color].pill} ${AREA_STYLES[area.color].pillBorder}`}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}